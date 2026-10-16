// Exam results, summarized (pure, unit-tested). Used by the anonymous page (/exams/results) and the named one
// (Admin → Results), so both always show the same numbers.
import { median } from '@/lib/admin/stats';

export type ResultAttempt = {
  id: string; email: string; firstName: string; lastName: string; organization: string;
  scorePct: number; passed: boolean; finishedAt: Date | null;
  domainScores: Record<string, { correct: number; total: number }> | null;
  certificateId: string | null;
};

/** One line per person: their best attempt (highest score, then the earliest), and how many attempts they made. */
export type Candidate = ResultAttempt & { attempts: number };

export type ExamSummary = {
  candidates: number;
  passed: number;
  passRate: number | null; // 0 to 1
  average: number | null; // score in %
  median: number | null;
  /** Twenty bins of 5 points of the best scores: 0–4%, 5–9%, …, 95–100%, so a pass mark that is a multiple of 5 (65%, 75%) falls on a bin edge. */
  histogram: number[];
  /** Per domain, correct answers over questions asked, pooled over every candidate's best attempt. */
  domains: { domain: string; pct: number; total: number }[];
};

export function bestAttempts(attempts: ResultAttempt[]): Candidate[] {
  const byPerson = new Map<string, ResultAttempt[]>();
  for (const a of attempts) {
    const key = a.email.trim().toLowerCase();
    byPerson.set(key, [...(byPerson.get(key) ?? []), a]);
  }
  return [...byPerson.values()].map((list) => {
    const best = [...list].sort((x, y) => y.scorePct - x.scorePct || (x.finishedAt?.getTime() ?? 0) - (y.finishedAt?.getTime() ?? 0))[0];
    return { ...best, attempts: list.length };
  }).sort((x, y) => y.scorePct - x.scorePct || x.lastName.localeCompare(y.lastName));
}

export function summarize(candidates: Candidate[]): ExamSummary {
  const scores = candidates.map((c) => c.scorePct);
  const passed = candidates.filter((c) => c.passed).length;
  const histogram = Array.from({ length: 20 }, () => 0);
  for (const s of scores) histogram[Math.min(19, Math.floor(s / 5))]++;
  const pooled = new Map<string, { correct: number; total: number }>();
  for (const c of candidates) {
    for (const [d, v] of Object.entries(c.domainScores ?? {})) {
      const p = pooled.get(d) ?? { correct: 0, total: 0 };
      pooled.set(d, { correct: p.correct + v.correct, total: p.total + v.total });
    }
  }
  return {
    candidates: candidates.length,
    passed,
    passRate: candidates.length ? passed / candidates.length : null,
    average: scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : null,
    median: median(scores),
    histogram,
    domains: [...pooled.entries()].filter(([, v]) => v.total > 0).map(([domain, v]) => ({ domain, pct: (v.correct / v.total) * 100, total: v.total })),
  };
}

/** The anonymous page stays empty below this many candidates, so no one's score can be guessed. */
export const ANONYMOUS_MIN_CANDIDATES = 3;
