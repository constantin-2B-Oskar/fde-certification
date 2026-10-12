import type { Metadata } from 'next';
import Link from 'next/link';
import { readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { Markdown } from '@/components/Markdown';

export const metadata: Metadata = { title: 'Polymex Plant Pulse' };

// The Day 1 lab kit has its own page so participants can grab the whole kit or a single file. The files are the
// participant/ folder of the lab kit; the answer key and generator stay in docs/curriculum/facilitator/.
const DIR = '/resources/polymex-plant-pulse';
const KIT = '/resources/fde-school-day1-participant-kit.zip';

const FILES = [
  { name: 'README.md', what: 'The brief: the situation at Polymex, what to build, definition of done and the demo.' },
  { name: 'CLAUDE.md', what: 'Context and working rules for Claude Code, including the KPI definitions.' },
  { name: 'VERIFY.md', what: 'The verification log Pair B fills in.' },
  { name: 'DATA_DICTIONARY.md', what: 'What each column of the two CSV files means.', folder: 'data/' },
  { name: 'extrusion_shift_log.csv', what: 'One row per date, shift and extrusion line, 1 January to 31 March 2026.', folder: 'data/' },
  { name: 'stage_daily.csv', what: 'One row per date and stage of the plant flow: mixing, extrusion, packing.', folder: 'data/' },
];

const read = (name: string) => readFileSync(path.join(process.cwd(), 'public', DIR, name), 'utf8');
const size = (file: string) => {
  const bytes = statSync(path.join(process.cwd(), 'public', file)).size;
  return bytes < 1024 ? `${bytes} B` : `${Math.round(bytes / 1024)} KB`;
};

export default function PolymexPage() {
  return (
    <div>
      <p className="text-15"><Link href="/resources#day-1" className="link">Course material</Link> <span className="text-steel">/ Day 1: The role</span></p>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-4 border-b border-ink pb-4">
        <div>
          <p className="text-15 text-steel">Lab kit</p>
          <h1 className="display text-44">Polymex Plant Pulse</h1>
        </div>
        <a href={KIT} download className="btn">Download the full kit (.zip, {size(KIT)})</a>
      </div>
      <p className="prose-width mt-6">
        Polymex Industries is the fictional plastics compounding plant you work on all week: seven extrusion lines,
        three shifts, 90 days of logs. The kit holds the brief, the rules for Claude Code and the data. Unzip it, open the
        folder with Claude Code and ship a one-page dashboard.
      </p>

      <h2 className="display mt-10 text-27">Files</h2>
      <p className="prose-width mt-2 text-steel">The zip holds all of these. Download one file on its own if that is all you need.</p>
      <ul className="mt-4">
        {FILES.map((f) => (
          <li key={f.name} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-gauge py-3">
            <div className="min-w-0">
              <p className="font-mono text-15 font-semibold">{f.folder ?? ''}{f.name}</p>
              <p className="text-15 text-steel">{f.what}</p>
            </div>
            <a href={`${DIR}/${f.name}`} download className="link shrink-0 text-15">Download <span className="text-steel tnum">({size(`${DIR}/${f.name}`)})</span></a>
          </li>
        ))}
      </ul>

      <section className="mt-12 border-t border-ink pt-6"><Markdown source={read('README.md')} /></section>
      <section className="mt-12 border-t border-ink pt-6"><Markdown source={read('DATA_DICTIONARY.md')} /></section>
    </div>
  );
}
