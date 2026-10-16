import { describe, expect, it } from 'vitest';
import { bestAttempts, summarize, type ResultAttempt } from '@/lib/exam/results-summary';

const a = (email: string, score: number, day: number, domains: ResultAttempt['domainScores'] = null): ResultAttempt => ({
  id: `${email}-${day}`, email, firstName: email[0].toUpperCase(), lastName: email, organization: 'Org',
  scorePct: score, passed: score >= 75, finishedAt: new Date(2026, 9, day), domainScores: domains, certificateId: null,
});

describe('exam results', () => {
  it('keeps each person once, with their best attempt and the attempt count', () => {
    const c = bestAttempts([a('sam@x.io', 60, 1), a('SAM@x.io', 80, 2), a('noor@x.io', 90, 1)]);
    expect(c.map((x) => [x.email.toLowerCase(), x.scorePct, x.attempts])).toEqual([['noor@x.io', 90, 1], ['sam@x.io', 80, 2]]);
  });

  it('summarizes pass rate, average, median, histogram and pooled domains', () => {
    const s = summarize(bestAttempts([
      a('a@x', 50, 1, { OPS: { correct: 5, total: 10 } }),
      a('b@x', 80, 1, { OPS: { correct: 9, total: 10 } }),
      a('c@x', 100, 1, { OPS: { correct: 10, total: 20 } }),
    ]));
    expect(s.candidates).toBe(3);
    expect(s.passed).toBe(2);
    expect(s.average).toBeCloseTo(76.67, 1);
    expect(s.median).toBe(80);
    expect(s.histogram[10]).toBe(1); // 50%
    expect(s.histogram[16]).toBe(1); // 80%
    expect(s.histogram[19]).toBe(1); // 100% goes in the top bin
    expect(s.domains).toEqual([{ domain: 'OPS', pct: 60, total: 40 }]); // 24 / 40, pooled
  });

  it('handles an empty exam', () => {
    const s = summarize([]);
    expect([s.candidates, s.passRate, s.average, s.median]).toEqual([0, null, null, null]);
  });
});
