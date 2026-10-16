import 'server-only';
import { and, eq, inArray } from 'drizzle-orm';
import { db, schema } from '@/lib/db/client';
import { getQuestion } from '@/lib/bank/load';
import { getTrack } from '@/lib/config/tracks';
import { sendCertificateEmail } from '@/lib/email/send';
import { issueCertificate } from './attempts';
import { score } from './score';
import { bestAttempts } from './results-summary';

// Neutralizing flawed questions after a sitting (Renan, 16 October): questions most candidates got wrong are judged
// flawed and count as correct for everyone, past and future. Re-scoring only adds points, so no pass is withdrawn.

const { attempts, attemptItems, neutralizedQuestions } = schema;

/** A question is judged only once this many candidates have answered it, so one or two answers never decide. */
export const NEUTRALIZE_MIN_SERVED = 5;

export async function neutralizedIds(trackId: string): Promise<Set<string>> {
  const rows = await db().select({ q: neutralizedQuestions.questionId }).from(neutralizedQuestions).where(eq(neutralizedQuestions.trackId, trackId));
  return new Set(rows.map((r) => r.q));
}

type Finished = typeof attempts.$inferSelect & { items: { questionId: string; selectedOptionId: string | null }[] };

async function finishedAttempts(trackId: string): Promise<Finished[]> {
  const rows = await db().select().from(attempts).where(and(eq(attempts.trackId, trackId), inArray(attempts.status, ['submitted', 'expired'])));
  if (!rows.length) return [];
  const items = await db().select({ attemptId: attemptItems.attemptId, questionId: attemptItems.questionId, selectedOptionId: attemptItems.selectedOptionId })
    .from(attemptItems).where(inArray(attemptItems.attemptId, rows.map((r) => r.id)));
  const byAttempt = new Map<string, Finished['items']>();
  for (const it of items) byAttempt.set(it.attemptId, [...(byAttempt.get(it.attemptId) ?? []), it]);
  return rows.map((r) => ({ ...r, items: byAttempt.get(r.id) ?? [] }));
}

function rescore(a: Finished, neutral: Set<string>, passMark: number) {
  return score(a.items.map((it) => {
    const q = getQuestion(it.questionId);
    return { domain: q?.domain ?? it.questionId.slice(0, 3), selected: it.selectedOptionId, answer: q?.answer ?? '?', neutral: neutral.has(it.questionId) };
  }), passMark);
}

export type QuestionDifficulty = { questionId: string; stem: string; domain: string; tier: number; served: number; correctPct: number; neutralized: boolean };

/** Share of candidates who answered each question correctly, from finished attempts (raw answers, before any neutralization). */
export async function questionDifficulty(trackId: string): Promise<QuestionDifficulty[]> {
  const [all, neutral] = await Promise.all([finishedAttempts(trackId), neutralizedIds(trackId)]);
  const stats = new Map<string, { served: number; correct: number }>();
  for (const a of all) for (const it of a.items) {
    const s = stats.get(it.questionId) ?? { served: 0, correct: 0 };
    s.served++;
    if (it.selectedOptionId != null && it.selectedOptionId === getQuestion(it.questionId)?.answer) s.correct++;
    stats.set(it.questionId, s);
  }
  return [...stats.entries()].map(([id, s]) => {
    const q = getQuestion(id);
    return { questionId: id, stem: q?.stem ?? '', domain: q?.domain ?? '', tier: q?.tier ?? 0, served: s.served,
      correctPct: (s.correct / s.served) * 100, neutralized: neutral.has(id) };
  }).sort((x, y) => x.correctPct - y.correctPct);
}

/** Pass counts per candidate (best attempt) today, and if `extra` questions were also neutralized. */
export async function previewNeutralization(trackId: string, extra: string[]) {
  const track = getTrack(trackId);
  if (!track) return null;
  const [all, neutral] = await Promise.all([finishedAttempts(trackId), neutralizedIds(trackId)]);
  const withExtra = new Set([...neutral, ...extra]);
  const outcome = (set: Set<string>) => bestAttempts(all.map((a) => {
    const r = rescore(a, set, track.passMark);
    return { id: a.id, email: a.email, firstName: a.firstName, lastName: a.lastName, organization: a.organization,
      scorePct: r.scorePct, passed: Boolean(a.passed) || r.passed, finishedAt: a.finishedAt, domainScores: null, certificateId: null };
  }));
  const now = outcome(neutral), after = outcome(withExtra);
  return { candidates: now.length, passedNow: now.filter((c) => c.passed).length, passedAfter: after.filter((c) => c.passed).length };
}

/**
 * Adds questions to the neutralized list, then re-scores every finished attempt of the track: scores and domain scores
 * are recomputed, newly passing attempts get their certificate by email, and no pass is ever withdrawn.
 */
export async function neutralizeAndRescore(trackId: string, ids: string[], rates: Record<string, number>): Promise<{ upgraded: number }> {
  const track = getTrack(trackId);
  if (!track) return { upgraded: 0 };
  if (ids.length) {
    await db().insert(neutralizedQuestions).values(ids.map((q) => ({ trackId, questionId: q, correctRate: rates[q]?.toFixed(2) ?? null })))
      .onConflictDoNothing();
  }
  const neutral = await neutralizedIds(trackId);
  const certs = [];
  for (const a of await finishedAttempts(trackId)) {
    const r = rescore(a, neutral, track.passMark);
    const cert = await db().transaction(async (tx) => {
      const [locked] = await tx.select().from(attempts).where(eq(attempts.id, a.id)).for('update');
      if (!locked || (locked.status !== 'submitted' && locked.status !== 'expired')) return null;
      const passedNow = Boolean(locked.passed) || r.passed;
      await tx.update(attempts).set({ correctCount: r.correct, scorePct: r.scorePct.toFixed(2), domainScores: r.domainScores, passed: passedNow })
        .where(eq(attempts.id, a.id));
      const correctIds = a.items.filter((_, i) => r.marks[i]).map((it) => it.questionId);
      await tx.update(attemptItems).set({ isCorrect: false }).where(eq(attemptItems.attemptId, a.id));
      if (correctIds.length) {
        await tx.update(attemptItems).set({ isCorrect: true })
          .where(and(eq(attemptItems.attemptId, a.id), inArray(attemptItems.questionId, correctIds)));
      }
      return !locked.passed && passedNow ? issueCertificate(tx, locked, track, r.scorePct, new Date()) : null;
    });
    if (cert) certs.push(cert);
  }
  for (const c of certs) await sendCertificateEmail(c).catch((e) => console.error('certificate email failed', e));
  return { upgraded: certs.length };
}
