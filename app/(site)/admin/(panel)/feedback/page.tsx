import type { Metadata } from 'next';
import { FEEDBACK_QUESTIONS, FEEDBACK_SCALES, IMPACT_QUESTION, listFeedback } from '@/lib/feedback';
import { deleteFeedbackAdmin } from '@/lib/admin/actions';

export const metadata: Metadata = { title: 'Feedback' };

/** Average of the numeric answers to one question, or null when nobody answered it (older responses lack newer questions). */
function average(values: (string | number | null | undefined)[]): { avg: number; n: number } | null {
  const nums = values.map(Number).filter((v) => Number.isFinite(v) && v >= 1 && v <= 5);
  return nums.length ? { avg: nums.reduce((a, b) => a + b, 0) / nums.length, n: nums.length } : null;
}

export default async function AdminFeedback() {
  const rows = await listFeedback();
  const scales = [
    ...FEEDBACK_SCALES.map((s) => ({ label: s.label, stat: average(rows.map((r) => r.answers[s.id])) })),
    { label: 'Readiness for a first deployment', stat: average(rows.map((r) => r.readiness)) },
  ];
  const impact = rows.map((r) => r.answers[IMPACT_QUESTION.id]).filter((v) => v === 'yes' || v === 'no');
  const yes = impact.filter((v) => v === 'yes').length;
  return (
    <div>
      <h1 className="display text-44">Feedback</h1>
      <p className="mt-3 text-15 text-steel">
        {rows.length} {rows.length === 1 ? 'response' : 'responses'} from <a className="link" href="/feedback">the feedback page</a>.
      </p>

      {rows.length > 0 && (
        <table className="data mt-6 text-15">
          <thead><tr><th>Question</th><th>Average, 1 to 5</th><th>Answers</th></tr></thead>
          <tbody>
            {scales.map((s) => (
              <tr key={s.label}><td>{s.label}</td><td className="tnum font-semibold">{s.stat ? s.stat.avg.toFixed(1) : '–'}</td><td className="tnum">{s.stat?.n ?? 0}</td></tr>
            ))}
            <tr>
              <td>{IMPACT_QUESTION.label}</td>
              <td className="tnum font-semibold">{impact.length ? `${Math.round((yes / impact.length) * 100)}% yes` : '–'}</td>
              <td className="tnum">{impact.length}</td>
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
