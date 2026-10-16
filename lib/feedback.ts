import 'server-only';
import { desc, eq } from 'drizzle-orm';
import { z } from 'zod';
import { db, schema } from '@/lib/db/client';

const { feedback } = schema;
export type FeedbackRow = typeof feedback.$inferSelect;

// The end-of-week questionnaire, shown on /feedback and in Admin. Every answer is stored as text in the `answers`
// column, keyed by id ("4" for a scale, "yes" or "no"), so questions can be added without a database change.
// Add a question with a new id; never reuse an id, so older answers stay readable.

/** Rated from 1 to 5; `low` and `high` say what 1 and 5 mean. */
export const FEEDBACK_SCALES = [
  { id: 'overall', label: 'Overall, how would you rate the week?', low: 'poor', high: 'excellent' },
  { id: 'usefulness', label: 'How useful is what you learned for your job?', low: 'not useful', high: 'directly useful' },
  { id: 'balance', label: 'The balance between theory and exercises', low: 'far too much theory', high: 'just right' },
  { id: 'material', label: 'The course material: slides, cases, kits and the site', low: 'poor', high: 'excellent' },
  { id: 'trainersScore', label: 'The trainers', low: 'poor', high: 'excellent' },
  { id: 'claudeConfidence', label: 'How confident are you using Claude Code on a real project?', low: 'not at all', high: 'fully' },
  { id: 'recommend', label: 'How likely are you to recommend the FDE School to a colleague?', low: 'not at all', high: 'certainly' },
] as const;

/** Free text, all optional. */
export const FEEDBACK_QUESTIONS = [
  { id: 'most', label: 'The session that taught you the most, and why' },
  { id: 'cut', label: 'The session to cut or shorten' },
  { id: 'missing', label: 'One thing missing from the week' },
  { id: 'polymex', label: 'Polymex: useful thread or too much?' },
  { id: 'cases', label: 'The Friday cases: what would have made them better?' },
  { id: 'trainers', label: 'Trainers: one thing to keep, one thing to change' },
  { id: 'readinessWhy', label: 'Why that score for your readiness?' },
] as const;

/** The final question: yes or no, then an explanation whose wording depends on the answer. */
export const IMPACT_QUESTION = {
  id: 'impactful',
  label: 'Was this training the most impactful training you have ever done?',
  whyId: 'impactfulWhy',
  whyIfYes: 'Why?',
  whyIfNo: 'What was the most impactful training of your life, and why?',
} as const;

export const FEEDBACK_TRACKS = [
  { id: 'exco', label: 'Exco' }, { id: 'manager', label: 'Manager' }, { id: 'fde', label: 'FDE' }, { id: 'other', label: 'Other' },
] as const;

const text = z.string().trim().max(2000, 'Keep each answer under 2,000 characters.').default('');
const scale = (label: string) => z.coerce.number({ message: `Rate "${label}" from 1 to 5.` }).int().min(1, `Rate "${label}" from 1 to 5.`).max(5);

export const feedbackSchema = z.object({
  name: z.string().trim().max(120).default(''),
  track: z.enum(['', ...FEEDBACK_TRACKS.map((t) => t.id)] as [string, ...string[]]).default(''),
  ...Object.fromEntries(FEEDBACK_SCALES.map((s) => [s.id, scale(s.label)])),
  readiness: z.coerce.number().int().min(1, 'Choose how ready you feel, from 1 to 5.').max(5),
  ...Object.fromEntries(FEEDBACK_QUESTIONS.map((q) => [q.id, text])),
  [IMPACT_QUESTION.id]: z.enum(['yes', 'no'], { message: 'Answer the last question: yes or no.' }),
  [IMPACT_QUESTION.whyId]: text,
});

export async function saveFeedback(data: z.infer<typeof feedbackSchema>) {
  const d = data as Record<string, unknown>;
  const ids = [...FEEDBACK_SCALES.map((s) => s.id), ...FEEDBACK_QUESTIONS.map((q) => q.id), IMPACT_QUESTION.id, IMPACT_QUESTION.whyId];
  const answers = Object.fromEntries(ids.map((id) => [id, String(d[id] ?? '')]));
  await db().insert(feedback).values({ name: data.name, track: data.track, readiness: data.readiness, answers });
}

export async function listFeedback(): Promise<FeedbackRow[]> {
  return db().select().from(feedback).orderBy(desc(feedback.createdAt));
}

export async function deleteFeedback(id: string) {
  await db().delete(feedback).where(eq(feedback.id, id));
}
