import type { Metadata } from 'next';
import { FEEDBACK_QUESTIONS, listFeedback } from '@/lib/feedback';
import { deleteFeedbackAdmin } from '@/lib/admin/actions';

export const metadata: Metadata = { title: 'Feedback' };

export default async function AdminFeedback() {
  const rows = await listFeedback();
  const scored = rows.filter((r) => r.readiness != null);
  const avg = scored.length ? scored.reduce((s, r) => s + (r.readiness ?? 0), 0) / scored.length : null;
  return (
    <div>
      <h1 className="display text-44">Feedback</h1>
      <p className="mt-3 text-15 text-steel">
        {rows.length} {rows.length === 1 ? 'response' : 'responses'} from <a className="link" href="/feedback">the feedback page</a>
        {avg != null && <>. Readiness for a first deployment: <span className="tnum font-semibold">{avg.toFixed(1)}</span> out of 5 on average.</>}
      </p>
      <ol className="mt-6 space-y-6">
        {rows.map((r) => (
          <li key={r.id} className="border-t border-ink pt-4">
            <p className="text-15 text-steel">
              {r.createdAt.toISOString().slice(0, 16).replace('T', ' ')} · {r.name || 'Anonymous'}{r.track && ` · ${r.track}`}
              {r.readiness != null && <> · readiness <span className="tnum font-semibold text-ink">{r.readiness}/5</span></>}
            </p>
            <dl className="mt-3 grid gap-3 text-15 sm:grid-cols-2">
              {FEEDBACK_QUESTIONS.filter((q) => r.answers[q.id]).map((q) => (
                <div key={q.id}><dt className="font-semibold">{q.label}</dt><dd className="mt-1 whitespace-pre-wrap">{r.answers[q.id]}</dd></div>
              ))}
            </dl>
            <details className="mt-3 text-15"><summary className="cursor-pointer text-steel">Delete</summary>
              <form action={deleteFeedbackAdmin} className="mt-1"><input type="hidden" name="id" value={r.id} /><button className="btn btn-secondary" type="submit">Delete this response</button></form>
            </details>
          </li>
        ))}
      </ol>
    </div>
  );
}
