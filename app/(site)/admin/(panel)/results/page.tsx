import type { Metadata } from 'next';
import Link from 'next/link';
import { DOMAINS, TRACKS } from '@/lib/config/tracks';
import { examResults } from '@/lib/exam/results';
import { ExamResultsSummary } from '@/components/ExamResultsSummary';
import { passThreshold } from '@/lib/config/tracks';
import { neutralizeFde, regradeFde } from '@/lib/admin/actions';
import { NEUTRALIZE_MIN_SERVED, previewNeutralization, questionDifficulty } from '@/lib/exam/neutralize';

export const metadata: Metadata = { title: 'Results' };

// Named: the same summary as the anonymous page (/exams/results), then one line per candidate.
export default async function AdminResults({ searchParams }: { searchParams: Promise<{ regraded?: string; threshold?: string; neutralized?: string; upgraded?: string }> }) {
  const { regraded, threshold: t, neutralized, upgraded } = await searchParams;
  const threshold = [25, 30, 35].includes(Number(t)) ? Number(t) : 30;
  const track = TRACKS.fde;
  const { candidates, summary } = await examResults(track.id);
  const toUpgrade = candidates.filter((c) => !c.passed && c.scorePct >= track.passMark * 100).length;
  const difficulty = await questionDifficulty(track.id);
  const flagged = difficulty.filter((q) => !q.neutralized && q.served >= NEUTRALIZE_MIN_SERVED && q.correctPct < threshold);
  const done = difficulty.filter((q) => q.neutralized);
  const preview = await previewNeutralization(track.id, flagged.map((q) => q.questionId));
  const rate = (n: number, of: number) => (of ? `${Math.round((n / of) * 100)}%` : '–');
  const domainPct = (c: (typeof candidates)[number], d: string) => {
    const s = c.domainScores?.[d];
    return s && s.total ? `${Math.round((s.correct / s.total) * 100)}%` : '–';
  };
  return (
    <div>
      <h1 className="display text-44">FDE Certification results</h1>
      <p className="mt-3 text-15 text-steel">
        Named version, admins only. Each candidate counts once, with their best attempt; voided attempts are left out. Participants see the same summary without names on <Link className="link" href="/exams/results">the anonymous page</Link>.
      </p>
      {regraded != null && <p role="status" className="mt-4 border border-pass p-3 text-15">Re-graded: {regraded} {regraded === '1' ? 'attempt' : 'attempts'} turned into a pass, with certificates issued and emailed.</p>}
      <section className="mt-6 border border-ink p-5">
        <h2 className="text-17 font-semibold">Pass mark: {Math.round(track.passMark * 100)}% ({passThreshold(track.passMark, track.questionCount)} of {track.questionCount})</h2>
        <p className="mt-1 text-15 text-steel">An attempt is graded when it is submitted. After a pass mark is lowered, re-grade the attempts finished before the change: those that now reach it become a pass and receive their certificate by email. Nobody loses a pass.</p>
        {toUpgrade > 0
          ? <form action={regradeFde} className="mt-3"><button className="btn" type="submit">Re-grade at {Math.round(track.passMark * 100)}%: {toUpgrade} {toUpgrade === 1 ? 'candidate' : 'candidates'} to upgrade</button></form>
          : <p className="mt-3 text-15">Every finished attempt is graded at the current pass mark.</p>}
      </section>
      {neutralized != null && <p role="status" className="mt-4 border border-pass p-3 text-15">{neutralized} {neutralized === '1' ? 'question' : 'questions'} neutralized and every finished exam re-scored: {upgraded} {upgraded === '1' ? 'candidate' : 'candidates'} now passed, with certificates issued and emailed.</p>}
      <section className="mt-6 border border-ink p-5">
        <h2 className="text-17 font-semibold">Questions the cohort missed most</h2>
        <p className="mt-1 text-15 text-steel">
          New questions can be flawed: ambiguous, or harder than intended. A neutralized question counts as correct for every candidate, past and future; every finished exam is re-scored and nobody loses a pass. Only questions answered by at least {NEUTRALIZE_MIN_SERVED} candidates are judged.
        </p>
        <p className="mt-3 text-15">
          Neutralize the questions that fewer than{' '}
          {[25, 30, 35].map((n) => <Link key={n} href={`/admin/results?threshold=${n}`} className={`link mx-1 ${n === threshold ? 'font-semibold' : ''}`}>{n}%</Link>)}
          {' '}of candidates answered correctly. Guessing alone gives about 25%.
        </p>
        {preview && (
          <p className="mt-3 text-15">
            <span className="font-semibold">{flagged.length} {flagged.length === 1 ? 'question' : 'questions'}</span> below {threshold}%.
            Pass rate today: <span className="tnum font-semibold">{preview.passedNow} of {preview.candidates} ({rate(preview.passedNow, preview.candidates)})</span>;
            after neutralizing them: <span className="tnum font-semibold">{preview.passedAfter} of {preview.candidates} ({rate(preview.passedAfter, preview.candidates)})</span>.
          </p>
        )}
        {flagged.length > 0 && (
          <>
            <div className="mt-3 max-h-96 overflow-y-auto">
              <table className="data text-15">
                <thead><tr><th>Question</th><th>Correct</th><th>Answered by</th><th>Text</th></tr></thead>
                <tbody>
                  {flagged.map((q) => (
                    <tr key={q.questionId}><td className="whitespace-nowrap">{q.questionId}</td><td className="tnum">{Math.round(q.correctPct)}%</td><td className="tnum">{q.served}</td><td>{q.stem}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <form action={neutralizeFde} className="mt-3">
              <input type="hidden" name="threshold" value={threshold} />
              <button className="btn" type="submit">Neutralize these {flagged.length} questions and re-grade</button>
            </form>
          </>
        )}
        {done.length > 0 && <p className="mt-3 text-15 text-steel">Already neutralized: {done.map((q) => q.questionId).join(', ')}.</p>}
      </section>
      <ExamResultsSummary summary={summary} passMark={track.passMark} />
      <h2 className="mt-10 text-21 font-semibold">Candidates</h2>
      <div className="mt-3 overflow-x-auto">
        <table className="data text-15">
          <thead>
            <tr><th>Name</th><th>Organization</th><th>Best score</th><th>Result</th><th>Attempts</th><th>Certificate</th>
              {DOMAINS.map((d) => <th key={d} title={d}>{d}</th>)}</tr>
          </thead>
          <tbody>
            {candidates.map((c) => (
              <tr key={c.id}>
                <td className="whitespace-nowrap">{c.firstName} {c.lastName}</td>
                <td>{c.organization}</td>
                <td className="tnum font-semibold">{c.scorePct.toFixed(1)}%</td>
                <td className={c.passed ? 'text-pass' : 'text-fail'}>{c.passed ? 'Passed' : 'Not passed'}</td>
                <td className="tnum">{c.attempts}</td>
                <td>{c.certificateId ? <Link className="link" href={`/verify/${c.certificateId}`}>{c.certificateId}</Link> : '–'}</td>
                {DOMAINS.map((d) => <td key={d} className="tnum">{domainPct(c, d)}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
