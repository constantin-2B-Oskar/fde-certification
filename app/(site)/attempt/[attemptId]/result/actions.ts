'use server';
import { redirect } from 'next/navigation';
import { holdsAttempt } from '@/lib/exam/guard';
import { reopenAttempt } from '@/lib/exam/attempts';

export async function reopenAction(form: FormData) {
  const attemptId = String(form.get('attemptId'));
  if (!(await holdsAttempt(attemptId))) return;
  await reopenAttempt(attemptId);
  redirect(`/attempt/${attemptId}`);
}
