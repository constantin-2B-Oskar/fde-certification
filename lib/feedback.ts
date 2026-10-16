import 'server-only';
import { desc, eq } from 'drizzle-orm';
import { z } from 'zod';
import { db, schema } from '@/lib/db/client';

const { feedback } = schema;
export type FeedbackRow = typeof feedback.$inferSelect;

// The end-of-week questions, shown on /feedback and in Admin. Add a question with a new id; never reuse an id,
// so older answers stay readable.
export const FEEDBACK_QUESTIONS = [
  { id: 'most', label: 'The session that taught you the most, and why' },
  { id: 'cut', label: 'The session to cut or shorten' },
  { id: 'missing', label: 'One thing missing from the week' },
  { id: 'polymex', label: 'Polymex: useful thread or too much?' },
  { id: 'cases', label: 'The Friday cases: what would have made them better?' },
  { id: 'trainers', label: 'Trainers: one thing to keep, one thing to change' },
  { id: 'readinessWhy', label: 'Why that score for your readiness?' },
] as const;

export const FEEDBACK_TRACKS = [
  { id: 'exco', label: 'Exco' }, { id: 'manager', label: 'Manager' }, { id: 'fde', label: 'FDE' }, { id: 'other', label: 'Other' },
] as const;

const answer = z.string().trim().max(2000, 'Keep each answer under 2,000 characters.');

export const feedbackSchema = z.object({
  name: z.string().trim().max(120).default(''),
  track: z.enum(['', ...FEEDBACK_TRACKS.map((t) => t.id)] as [string, ...string[]]).default(''),
  readiness: z.coerce.number().int().min(1, 'Choose how ready you feel, from 1 to 5.').max(5),
  ...Object.fromEntries(FEEDBACK_QUESTIONS.map((q) => [q.id, answer.default('')])),
});

export async function saveFeedback(data: z.infer<typeof feedbackSchema>) {
  const answers = Object.fromEntries(FEEDBACK_QUESTIONS.map((q) => [q.id, String((data as Record<string, unknown>)[q.id] ?? '')]));
  await db().insert(feedback).values({ name: data.name, track: data.track, readiness: data.readiness, answers });
}

export async function listFeedback(): Promise<FeedbackRow[]> {
  return db().select().from(feedback).orderBy(desc(feedback.createdAt));
}

export async function deleteFeedback(id: string) {
  await db().delete(feedback).where(eq(feedback.id, id));
}
