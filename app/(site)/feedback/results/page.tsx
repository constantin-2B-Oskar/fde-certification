import type { Metadata } from 'next';
import Link from 'next/link';
import { IMPACT_QUESTION, RESULTS_MIN_RESPONSES, listFeedback, summarizeFeedback, type ScaleSummary } from '@/lib/feedback';

export const metadata: Metadata = { title: 'Feedback results' };
export const dynamic = 'force-dynamic';

// Aggregates only: names and written answers stay in Admin, as the feedback form promises.
function Rating({ s }: { s: ScaleSummary }) {
  const max = Math.max(...s.counts, 1);
  return (
    <li className="border-t border-gauge py-5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="text-17 font-semibold">{s.label}</h3>
        <p className="text-15 text-steel"><span className="display tnum text-27 text-ink">{s.avg != null ? s.avg.toFixed(1) : '–'}</span> / 5 · {s.n} {s.n === 1 ? 'answer' : 'answers'}</p>
      </div>
      <ul className="mt-3 space-y-1" aria-label={`How many gave each score for: ${s.label}`}>
        {s.counts.map((c, i) => (
          <li key={i} className="flex items-center gap-3 text-15">
            <span className="tnum w-4 text-steel">{i + 1}</span>
            <span className="h-4 flex-1 bg-gauge/40"><span className="block h-4 bg-ink" style={{ width: `${(c / max) * 100}%` }} /></span>
            <span className="tnum w-8 text-right">{c}</span>
          </li>
        ))}
      </ul>
      <p className="mt-1 text-13 text-steel">1: {s.low}. 5: {s.high}.</p>
    </li>
  );
}

export default async function FeedbackResults() {
  const summary = summarizeFeedback(await listFeedback());
  const enough = summary.responses >= RESULTS_MIN_RESPONSES;
  const yesPct = summary.impact.n ? Math.round((summary.impact.yes / summary.impact.n) * 100) : null;
  return (
    <div>
      <h1 className="display text-44">Feedback results</h1>
      <p className="prose-width mt-3">
        What the participants said about the week, from {summary.responses} {summary.responses === 1 ? 'response' : 'responses'} to <Link href="/feedback" className="link">the feedback form</Link>. Scores only: names and written answers are read by the trainers alone.
      </p>

      {!enough ? (
        <p className="mt-8 text-steel">The results appear once {RESULTS_MIN_RESPONSES} people have answered, so that no one&apos;s scores can be guessed.</p>
      ) : (
        <>
          <section className="mt-8 border border-ink p-5">
            <h2 className="text-17 font-semibold">{IMPACT_QUESTION.label}</h2>
            <p className="mt-2"><span className="display tnum text-44">{yesPct != null ? `${yesPct}%` : '–'}</span> <span className="text-steel">said yes, out of {summary.impact.n} {summary.impact.n === 1 ? 'answer' : 'answers'}.</span></p>
          </section>
          <section className="mt-8">
            <h2 className="display text-27">The ratings, from 1 to 5</h2>
            <ul className="mt-4">{summary.scales.map((s) => <Rating key={s.id} s={s} />)}</ul>
          </section>
        </>
      )}
    </div>
  );
}
