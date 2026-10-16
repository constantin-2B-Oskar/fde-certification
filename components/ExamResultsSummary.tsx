import { DOMAIN_NAMES, type Domain } from '@/lib/config/tracks';
import type { ExamSummary } from '@/lib/exam/results-summary';

const pct = (v: number | null, digits = 0) => (v == null ? '–' : `${v.toFixed(digits)}%`);

/** The aggregate view of an exam's results, shared by the anonymous page and the named one in Admin. */
export function ExamResultsSummary({ summary, passMark }: { summary: ExamSummary; passMark: number }) {
  const maxBin = Math.max(...summary.histogram, 1);
  const passBin = Math.ceil(passMark * 20); // first 5-point band entirely at or above the pass mark
  return (
    <div>
      <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          ['Candidates', String(summary.candidates)],
          ['Passed', `${summary.passed} (${pct(summary.passRate == null ? null : summary.passRate * 100)})`],
          ['Average score', pct(summary.average, 1)],
          ['Median score', pct(summary.median, 1)],
        ].map(([k, v]) => (
          <div key={k} className="border border-ink p-4">
            <dt className="text-13 text-steel">{k}</dt>
            <dd className="display tnum mt-1 text-27">{v}</dd>
          </div>
        ))}
      </dl>

      <section className="mt-8">
        <h2 className="text-21 font-semibold">How the scores are spread</h2>
        <p className="mt-1 text-15 text-steel">Best score of each candidate. Pass mark: {Math.round(passMark * 100)}%; bars at or above it are in green.</p>
        <ul className="mt-3 space-y-1" aria-label="Number of candidates per score band">
          {summary.histogram.map((n, i) => (
            <li key={i} className="flex items-center gap-3 text-15">
              <span className="tnum w-20 text-steel">{i * 5}–{i === 19 ? 100 : i * 5 + 4}%</span>
              <span className="h-4 flex-1 bg-gauge/40"><span className={`block h-4 ${i >= passBin ? 'bg-pass' : 'bg-ink'}`} style={{ width: `${(n / maxBin) * 100}%` }} /></span>
              <span className="tnum w-8 text-right">{n}</span>
            </li>
          ))}
        </ul>
      </section>

      {summary.domains.length > 0 && (
        <section className="mt-8">
          <h2 className="text-21 font-semibold">By domain</h2>
          <p className="mt-1 text-15 text-steel">Share of correct answers, all candidates together. The weakest domains are where the next session should insist.</p>
          <ul className="mt-3 space-y-2">
            {[...summary.domains].sort((a, b) => a.pct - b.pct).map((d) => (
              <li key={d.domain} className="text-15">
                <div className="flex justify-between gap-4"><span>{DOMAIN_NAMES[d.domain as Domain] ?? d.domain}</span><span className="tnum font-semibold">{pct(d.pct)}</span></div>
                <span className="mt-1 block h-3 bg-gauge/40"><span className="block h-3 bg-ink" style={{ width: `${d.pct}%` }} /></span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
