'use client';
import { useActionState, useState } from 'react';
import type { FeedbackFormState } from './actions';

type Scale = { id: string; label: string; low: string; high: string };
type Impact = { id: string; label: string; whyId: string; whyIfYes: string; whyIfNo: string };
type Props = {
  action: (prev: FeedbackFormState, form: FormData) => Promise<FeedbackFormState>;
  scales: Scale[];
  questions: { id: string; label: string }[];
  impact: Impact;
  tracks: { id: string; label: string }[];
};

function ScaleField({ id, label, low, high }: Scale) {
  return (
    <fieldset>
      <legend className="label">{label}</legend>
      <div className="mt-2 flex flex-wrap gap-4">
        {[1, 2, 3, 4, 5].map((n) => (
          <label key={n} className="flex items-center gap-2 text-17">
            <input type="radio" name={id} value={n} required /> {n}
          </label>
        ))}
      </div>
      <p className="mt-1 text-15 text-steel">1: {low}. 5: {high}.</p>
    </fieldset>
  );
}

export function FeedbackForm({ action, scales, questions, impact, tracks }: Props) {
  const [state, formAction, pending] = useActionState<FeedbackFormState, FormData>(action, {});
  const [impactful, setImpactful] = useState<'' | 'yes' | 'no'>('');
  // The readiness reason is asked right after the readiness score, so it is left out of the main list.
  const main = questions.filter((q) => q.id !== 'readinessWhy');
  const why = questions.find((q) => q.id === 'readinessWhy');
  return (
    <form action={formAction} className="mt-6 max-w-2xl space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div><label htmlFor="name" className="label">Your name (optional)</label><input id="name" name="name" maxLength={120} className="field" /></div>
        <div>
          <label htmlFor="track" className="label">Your track (optional)</label>
          <select id="track" name="track" defaultValue="" className="field">
            <option value="">Not said</option>
            {tracks.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
          </select>
        </div>
      </div>

      <h2 className="border-t border-ink pt-6 text-21 font-semibold">Rate the week, from 1 to 5</h2>
      {scales.map((s) => <ScaleField key={s.id} {...s} />)}

      <h2 className="border-t border-ink pt-6 text-21 font-semibold">In your own words</h2>
      {main.map((q) => (
        <div key={q.id}>
          <label htmlFor={q.id} className="label">{q.label}</label>
          <textarea id={q.id} name={q.id} rows={3} maxLength={2000} className="field" />
        </div>
      ))}

      <h2 className="border-t border-ink pt-6 text-21 font-semibold">Your first deployment</h2>
      <ScaleField id="readiness" label="How ready do you feel for a first deployment?" low="not at all" high="I could start on Monday" />
      {why && (
        <div>
          <label htmlFor={why.id} className="label">Why that score?</label>
          <textarea id={why.id} name={why.id} rows={2} maxLength={2000} className="field" />
        </div>
      )}

      <h2 className="border-t border-ink pt-6 text-21 font-semibold">One last question</h2>
      <fieldset>
        <legend className="label">{impact.label}</legend>
        <div className="mt-2 flex gap-6">
          {(['yes', 'no'] as const).map((v) => (
            <label key={v} className="flex items-center gap-2 text-17">
              <input type="radio" name={impact.id} value={v} required onChange={() => setImpactful(v)} /> {v === 'yes' ? 'Yes' : 'No'}
            </label>
          ))}
        </div>
      </fieldset>
      {impactful && (
        <div>
          <label htmlFor={impact.whyId} className="label">{impactful === 'yes' ? impact.whyIfYes : impact.whyIfNo}</label>
          <textarea id={impact.whyId} name={impact.whyId} rows={3} maxLength={2000} className="field" />
        </div>
      )}

      {state.error && <p role="alert" className="text-fail">{state.error}</p>}
      <button type="submit" className="btn" disabled={pending}>{pending ? 'Sending…' : 'Send my feedback'}</button>
    </form>
  );
}
