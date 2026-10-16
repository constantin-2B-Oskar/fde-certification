import type { Metadata } from 'next';
import { FEEDBACK_QUESTIONS, FEEDBACK_SCALES, IMPACT_QUESTION, listFeedback, summarizeFeedback } from '@/lib/feedback';
import { deleteFeedbackAdmin } from '@/lib/admin/actions';

export const metadata: Metadata = { title: 'Feedback' };

export default async function AdminFeedback() {
  const rows = await listFeedback();
  const { scales, impact } = summarizeFeedback(rows);
  return (
    <div>
      <h1 className="display text-44">Feedback</h1>
      <p className="mt-3 text-15 text-steel">
        {rows.length} {rows.length === 1 ? 'response' : 'responses'} from <a className="link" href="/feedback">the feedback page</a>. Participants see the scores, without names or comments, on <a className="link" href="/feedback/results">the results page</a>.
      </p>

      {rows.length > 0 && (
        <table className="data mt-6 text-15">
          <thead><tr><th>Question</th><th>Average, 1 to 5</th><th>Answers</th></tr></thead>
          <tbody>
            {scales.map((s) => (
              <tr key={s.id}><td>{s.label}</td><td className="tnum font-semibold">{s.avg != null ? s.avg.toFixed(1) : '–'}</td><td className="tnum">{s.n}</td></tr>
            ))}
            <tr>
              <td>{IMPACT_QUESTION.label}</td>
              <td className="tnum font-semibold">{impact.n ? `${Math.round((impact.yes / impact.n) * 100)}% yes` : '–'}</td>
              <td className="tnum">{impact.n}</td>
            </tr>
          </tbody>
        </table>
      )}

      <ol className="mt-8 space-y-6">
        {rows.map((r) => {
          const imp = r.answers[IMPACT_QUESTION.id];
          return (
            <li key={r.id} className="border-t border-ink pt-4">
              <p className="text-15 text-steel">
                {r.createdAt.toISOString().slice(0, 16).replace('T', ' ')} · {r.name || 'Anonymous'}{r.track && ` · ${r.track}`}
                {r.readiness != null && <> · readiness <span className="tnum font-semibold text-ink">{r.readiness}/5</span></>}
                {imp && <> · most impactful training: <span className="font-semibold text-ink">{imp}</span></>}
              </p>
              <p className="mt-2 text-15">
                {FEEDBACK_SCALES.filter((s) => r.answers[s.id]).map((s, i) => (
                  <span key={s.id}>{i > 0 && ' · '}{s.label.replace(/\?$/, '')}: <span className="tnum font-semibold">{r.answers[s.id]}</span></span>
                ))}
              </p>
              <dl className="mt-3 grid gap-3 text-15 sm:grid-cols-2">
                {FEEDBACK_QUESTIONS.filter((q) => r.answers[q.id]).map((q) => (
                  <div key={q.id}><dt className="font-semibold">{q.label}</dt><dd className="mt-1 whitespace-pre-wrap">{r.answers[q.id]}</dd></div>
                ))}
                {r.answers[IMPACT_QUESTION.whyId] && (
                  <div>
                    <dt className="font-semibold">{imp === 'no' ? IMPACT_QUESTION.whyIfNo : `Most impactful training: ${IMPACT_QUESTION.whyIfYes.toLowerCase()}`}</dt>
                    <dd className="mt-1 whitespace-pre-wrap">{r.answers[IMPACT_QUESTION.whyId]}</dd>
                  </div>
                )}
              </dl>
              <details className="mt-3 text-15"><summary className="cursor-pointer text-steel">Delete</summary>
                <form action={deleteFeedbackAdmin} className="mt-1"><input type="hidden" name="id" value={r.id} /><button className="btn btn-secondary" type="submit">Delete this response</button></form>
              </details>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
