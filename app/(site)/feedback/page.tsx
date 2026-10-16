import type { Metadata } from 'next';
import Link from 'next/link';
import { FEEDBACK_QUESTIONS, FEEDBACK_SCALES, FEEDBACK_TRACKS, IMPACT_QUESTION } from '@/lib/feedback';
import { FeedbackForm } from './FeedbackForm';
import { submitFeedback } from './actions';

export const metadata: Metadata = { title: 'Feedback' };

export default async function FeedbackPage({ searchParams }: { searchParams: Promise<{ sent?: string }> }) {
  const { sent } = await searchParams;
  if (sent) {
    return (
      <div>
        <h1 className="display text-44">Thank you</h1>
        <p className="prose-width mt-3">Your feedback is recorded. The trainers read every answer, and the next session changes because of it.</p>
        <p className="mt-6"><Link href="/resources" className="link font-semibold">Back to the course material</Link></p>
      </div>
    );
  }
  return (
    <div>
      <h1 className="display text-44">Your feedback on the week</h1>
      <p className="prose-width mt-3">About ten minutes: eight ratings, a few questions in your own words, and one last question. Honest and specific. Your name is optional; only the trainers read the answers.</p>
      <FeedbackForm action={submitFeedback} scales={FEEDBACK_SCALES.map((s) => ({ ...s }))} questions={FEEDBACK_QUESTIONS.map((q) => ({ ...q }))}
        impact={{ ...IMPACT_QUESTION }} tracks={FEEDBACK_TRACKS.map((t) => ({ ...t }))} />
    </div>
  );
}
