import data from '@/content/resources.json';

export type ResourceKind = 'preread' | 'slides' | 'video' | 'reading' | 'template' | 'dataset' | 'exercise';
/** `deck`: the slides as an HTML file in public/resources/, opened as is; `read`: a Markdown file in public/resources/ shown on the site; `page`: a dedicated page on the site; `href`: the file to download or open. */
export type ResourceItem = { id: string; kind: ResourceKind; title: string; summary?: string; deck?: string; read?: string; page?: string; pageLabel?: string; href: string | null; status: 'available' | 'coming_soon'; duration?: string; tracks?: string[] };
export type Session = { id: string; title: string; summary: string; tracks: string[]; domains: string[]; items: ResourceItem[] };
export type ReadingKind = 'guide' | 'video' | 'book' | 'article' | 'paper' | 'course';
/** `theme`: the heading it is listed under; `read`: a Markdown file in public/resources/ shown on the site; `href`: the link to open, or the file to download when `read` is set. */
export type Reading = { id: string; theme: string; kind: ReadingKind; title: string; by: string; read?: string; href: string; domains: string[]; tracks: string[] };

export const SESSIONS = data.sessions as Session[];
export const FURTHER_READING = data.furtherReading as Reading[];
/** Photos of the paperboards drawn during the training, in public/resources/img/paperboards/. */
export type Paperboard = { file: string; title: string; caption: string };
export const PAPERBOARDS = data.paperboards as Paperboard[];

export const READING_KIND_LABEL: Record<ReadingKind, string> = {
  guide: 'Guide', video: 'Video', book: 'Book', article: 'Article', paper: 'Paper', course: 'Course',
};

export const KIND_LABEL: Record<ResourceKind, string> = {
  preread: 'Pre-read', slides: 'Slides', video: 'Video', reading: 'Reading', template: 'Template', dataset: 'Lab kit', exercise: 'Exercises',
};

/** Sessions that cover a domain, for "where to focus" on the result page. */
export function sessionsForDomain(domain: string, trackId: string): Session[] {
  return SESSIONS.filter((s) => s.domains.includes(domain) && (s.tracks.includes(trackId) || trackId === 'test'));
}

/** Finds the item whose Markdown file is `file`, for the reading page; a further reading is shown as an item of a "Further reading" section. */
export function itemByReadFile(file: string): { session: Pick<Session, 'id' | 'title'>; item: ResourceItem } | undefined {
  for (const session of SESSIONS) for (const item of session.items) if (item.read === file && item.status === 'available') return { session, item };
  const r = FURTHER_READING.find((x) => x.read === file);
  if (r) return { session: { id: 'further-reading', title: 'Further reading' }, item: { id: r.id, kind: 'reading', title: r.title, read: r.read, href: r.href, status: 'available' } };
  return undefined;
}
