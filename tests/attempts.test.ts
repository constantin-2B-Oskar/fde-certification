// Database tests: run against a local Postgres (DATABASE_URL), skipped when none is set.
import { beforeAll, describe, expect, it } from 'vitest';
import { eq } from 'drizzle-orm';

const hasDb = Boolean(process.env.DATABASE_URL);
process.env.BANK_SERVE = 'all';
process.env.ENABLE_TEST_TRACK = 'true';

describe.skipIf(!hasDb)('attempt lifecycle (database)', async () => {
  const { db, schema } = await import('@/lib/db/client');
  const A = await import('@/lib/exam/attempts');
  const email = `unit-${Date.now()}@example.com`;
  const base = { trackId: 'test', email, firstName: 'Hélène', lastName: 'Dupré', organization: 'Polymex Industries', organizationType: 'client' };
  let attemptId = '';

  beforeAll(async () => {
    const r = await A.startAttempt(base, () => false);
    expect(r.kind).toBe('started');
    if (r.kind === 'started') attemptId = r.attemptId;
  });

  it('a second start from another browser is refused, the same browser resumes', async () => {
    expect((await A.startAttempt(base, () => false)).kind).toBe('running_elsewhere');
    expect((await A.startAttempt(base, (id) => id === attemptId)).kind).toBe('resume');
  });

  it('saves only questions of the attempt', async () => {
    const { questions } = await A.runnerData((await A.getAttempt(attemptId))!);
    expect(questions).toHaveLength(5);
    expect(JSON.stringify(questions)).not.toMatch(/"answer"|explanation/);
    expect(await A.saveAnswer(attemptId, questions[0].id, 'a', false)).toEqual({ ok: true });
    expect((await A.saveAnswer(attemptId, 'GAI-9-999', 'a', false)).ok).toBe(false);
  });

  it('keeps an attempt open after its time runs out, accepts answers and a late submit, idempotently', async () => {
    await db().update(schema.attempts).set({ deadlineAt: new Date(Date.now() - 3_600_000) }).where(eq(schema.attempts.id, attemptId));
    const { questions } = await A.runnerData((await A.getAttempt(attemptId))!);
    expect(await A.saveAnswer(attemptId, questions[1].id, 'b', false)).toEqual({ ok: true });
    expect((await A.getAttemptFresh(attemptId))?.status).toBe('in_progress');
    await A.submitAttempt(attemptId, { [questions[2].id]: { o: 'c', f: false } });
    const a = await A.getAttempt(attemptId);
    expect(a?.status).toBe('submitted');
    expect(a?.correctCount).not.toBeNull();
    const items = await db().select().from(schema.attemptItems).where(eq(schema.attemptItems.attemptId, attemptId));
    expect(items.find((i) => i.questionId === questions[2].id)?.selectedOptionId).toBe('c'); // the late answer counted
    const before = JSON.stringify(a);
    expect(await A.finalize(attemptId, 'submitted')).toBe(false);
    expect(JSON.stringify(await A.getAttempt(attemptId))).toBe(before);
  });

  it('reopens a submitted attempt that did not pass, keeps its answers, and grades it again', async () => {
    const e3 = `reopen-${Date.now()}@example.com`;
    const r = await A.startAttempt({ ...base, email: e3 }, () => false);
    if (r.kind !== 'started') throw new Error(r.kind);
    const { getQuestion } = await import('@/lib/bank/load');
    const { questions } = await A.runnerData((await A.getAttempt(r.attemptId))!);
    await A.submitAttempt(r.attemptId, { [questions[0].id]: { o: getQuestion(questions[0].id)!.answer, f: false } });
    expect((await A.getAttempt(r.attemptId))?.passed).toBe(false);
    expect(await A.reopenAttempt(r.attemptId)).toBe(true);
    const reopened = await A.getAttempt(r.attemptId);
    expect([reopened?.status, reopened?.scorePct, reopened?.passed]).toEqual(['in_progress', null, null]);
    const kept = await A.runnerData(reopened!);
    expect(kept.answers[questions[0].id]?.o).toBe(getQuestion(questions[0].id)!.answer); // answers kept
    const all = Object.fromEntries(questions.map((q) => [q.id, { o: getQuestion(q.id)!.answer, f: false }]));
    await A.submitAttempt(r.attemptId, all);
    const a = await A.getAttempt(r.attemptId);
    expect([a?.status, a?.passed]).toEqual(['submitted', true]);
    expect(await A.reopenAttempt(r.attemptId)).toBe(false); // a pass is never reopened
  });

  it('a pass issues exactly one certificate and blocks new attempts', async () => {
    const e2 = `pass-${Date.now()}@example.com`;
    const r = await A.startAttempt({ ...base, email: e2 }, () => false);
    if (r.kind !== 'started') throw new Error(r.kind);
    const { getQuestion } = await import('@/lib/bank/load');
    const { questions } = await A.runnerData((await A.getAttempt(r.attemptId))!);
    const answers = Object.fromEntries(questions.map((q) => [q.id, { o: getQuestion(q.id)!.answer, f: false }]));
    await A.submitAttempt(r.attemptId, answers);
    await A.submitAttempt(r.attemptId, answers);
    const a = await A.getAttempt(r.attemptId);
    expect(a?.status).toBe('submitted');
    expect(a?.passed).toBe(true);
    const certs = await db().select().from(schema.certificates).where(eq(schema.certificates.attemptId, r.attemptId));
    expect(certs).toHaveLength(1);
    expect(certs[0].id).toMatch(/^TEST-\d{4}-/);
    expect((await A.startAttempt({ ...base, email: e2 }, () => false)).kind).toBe('certified');
  });
});
