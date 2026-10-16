'use server';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { feedbackSchema, saveFeedback } from '@/lib/feedback';

export type FeedbackFormState = { error?: string };

export async function submitFeedback(_prev: FeedbackFormState, form: FormData): Promise<FeedbackFormState> {
  const parsed = feedbackSchema.safeParse(Object.fromEntries(form));
  if (!parsed.success) return { error: parsed.error.issues[0].message };
  await saveFeedback(parsed.data);
  revalidatePath('/admin/feedback');
  redirect('/feedback?sent=1');
}
