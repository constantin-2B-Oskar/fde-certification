import 'server-only';
import { and, eq, inArray, isNotNull } from 'drizzle-orm';
import { db, schema } from '@/lib/db/client';
import { bestAttempts, summarize, type Candidate, type ExamSummary } from './results-summary';

const { attempts, certificates } = schema;

/** Finished attempts of one track (voided ones left out), reduced to each person's best, with the summary. */
export async function examResults(trackId: string): Promise<{ candidates: Candidate[]; summary: ExamSummary }> {
  const rows = await db().select().from(attempts).where(and(
    eq(attempts.trackId, trackId), inArray(attempts.status, ['submitted', 'expired']), isNotNull(attempts.scorePct)));
  const certs = rows.length
    ? await db().select({ id: certificates.id, attemptId: certificates.attemptId }).from(certificates)
      .where(inArray(certificates.attemptId, rows.map((r) => r.id)))
    : [];
  const certByAttempt = new Map(certs.map((c) => [c.attemptId, c.id]));
  const candidates = bestAttempts(rows.map((r) => ({
    id: r.id, email: r.email, firstName: r.firstName, lastName: r.lastName, organization: r.organization,
    scorePct: Number(r.scorePct), passed: Boolean(r.passed), finishedAt: r.finishedAt,
    domainScores: r.domainScores ?? null, certificateId: certByAttempt.get(r.id) ?? null,
  })));
  return { candidates, summary: summarize(candidates) };
}
