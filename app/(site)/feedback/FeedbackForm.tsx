'use client';
import { useActionState } from 'react';
import type { FeedbackFormState } from './actions';

type Props = {
  action: (prev: FeedbackFormState, form: FormData) => Promise<FeedbackFormState>;
  questions: { id: string; label: string }[];
  tracks: { id: string; label: string }[];
};

export function FeedbackForm({ action, questions, tracks }: Props) {
  const [state, formAction, pending] = useActionState<FeedbackFormState, FormData>(action, {});
  // The readiness reason is asked right after the score, so it is left out of the main list.
  const main = questions.filter((q) => q.id !== 'readinessWhy');
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
      {main.map((q) => (
        <div key={q.id}>
          <label htmlFor={q.id} className="label">{q.label}</label>
          <textarea id={q.id} name={q.id} rows={3} maxLength={2000} className="field" />
        </div>
      ))}
      <fieldset>
        <legend className="label">How ready do you feel for a first deployment?</legend>
        <div className="mt-2 flex flex-wrap gap-4">
          {[1, 2, 3, 4, 5].map((n) => (
            <label key={n} className="flex items-center gap-2 text-17">
              <input type="radio" name="readiness" value={n} required /> {n}
            </label>
          ))}
        </div>
        <p className="mt-1 text-15 text-steel">1: not at all. 5: I could start on Monday.</p>
      </fieldset>
      <div>
        <label htmlFor="readinessWhy" className="label">Why that score?</label>
        <textarea id="readinessWhy" name="readinessWhy" rows={2} maxLength={2000} className="field" />
      </div>
      {state.error && <p role="alert" className="text-fail">{state.error}</p>}
      <button type="submit" className="btn" disabled={pending}>{pending ? 'Sending…' : 'Send my feedback'}</button>
    </form>
  );
}
