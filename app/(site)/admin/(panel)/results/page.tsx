import type { Metadata } from 'next';
import Link from 'next/link';
import { DOMAINS, TRACKS } from '@/lib/config/tracks';
import { examResults } from '@/lib/exam/results';
import { ExamResultsSummary } from '@/components/ExamResultsSummary';
import { passThreshold } from '@/lib/config/tracks';
import { regradeFde } from '@/lib/admin/actions';

export const metadata: Metadata = { title: 'Results' };

// Named: the same summary as the anonymous page (/exams/results), then one line per candidate.
export default async function AdminResults({ searchParams }: { searchParams: Promise<{ regraded?: string }> }) {
  const { regraded } = await searchParams;
  const track = TRACKS.fde;
  const { candidates, summary } = await examResults(track.id);
  const toUpgrade = candidates.filter((c) => !c.passed && c.scorePct >= track.passMark * 100).length;
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
