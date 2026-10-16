import type { Metadata } from 'next';
import Link from 'next/link';
import { TRACKS } from '@/lib/config/tracks';
import { examResults } from '@/lib/exam/results';
import { ANONYMOUS_MIN_CANDIDATES } from '@/lib/exam/results-summary';
import { ExamResultsSummary } from '@/components/ExamResultsSummary';

export const metadata: Metadata = { title: 'FDE Certification results' };
export const dynamic = 'force-dynamic';

// Anonymous: aggregates only. The named version is in Admin → Results.
export default async function ExamResultsPage() {
  const track = TRACKS.fde;
  const { summary } = await examResults(track.id);
  return (
    <div>
      <h1 className="display text-44">FDE Certification results</h1>
      <p className="prose-width mt-3">
        How the cohort did on the FDE Certification exam ({track.questionCount} questions, pass mark {Math.round(track.passMark * 100)}%). Anonymous: each candidate counts once, with their best attempt; no names are shown.
      </p>
      {summary.candidates < ANONYMOUS_MIN_CANDIDATES ? (
        <p className="mt-8 text-steel">The results appear once {ANONYMOUS_MIN_CANDIDATES} candidates have finished the exam, so that no one&apos;s score can be guessed.</p>
      ) : (
        <ExamResultsSummary summary={summary} passMark={track.passMark} />
      )}
      <p className="mt-10 text-15"><Link href="/exams" className="link">Back to the exams</Link></p>
    </div>
  );
}
