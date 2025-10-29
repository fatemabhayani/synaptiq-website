import fs from 'fs';
import path from 'path';

export type PageSlug =
  | 'index'
  | 'about'
  | 'admissions'
  | 'community'
  | 'curriculum'
  | 'faq'
  | 'k12'
  | 'professional';

export type ContentSlug = Exclude<PageSlug, 'index'>;

export const CONTENT_SLUGS: ContentSlug[] = [
  'about',
  'curriculum',
  'k12',
  'professional',
  'admissions',
  'community',
  'faq'
];

const NAV_LABELS: Record<ContentSlug, string> = {
  about: 'About',
  curriculum: 'Curriculum',
  k12: 'K-12 Learning',
  professional: 'Professional Learning',
  admissions: 'Admissions',
  community: 'Community',
  faq: 'FAQ'
};

const markdownDirectory = process.cwd();

export function getMarkdownContent(slug: PageSlug): string {
  const filePath = path.join(markdownDirectory, `${slug}.md`);
  const fileExists = fs.existsSync(filePath);

  if (!fileExists) {
    throw new Error(`Markdown file for slug "${slug}" was not found at ${filePath}`);
  }

  return fs.readFileSync(filePath, 'utf-8');
}

export function getSecondaryNavigation() {
  return CONTENT_SLUGS.map((slug) => ({ href: `/${slug}`, label: NAV_LABELS[slug] }));
}

export const PAGE_METADATA: Record<ContentSlug, { title: string; description: string }> = {
  about: {
    title: 'About SynaptIQ Academy',
    description: 'Discover the story, mission, and leadership that shape SynaptIQ Academy.'
  },
  admissions: {
    title: 'Admissions & Enrollment',
    description: 'Learn how to join SynaptIQ Academy and start your journey into future-ready learning.'
  },
  community: {
    title: 'Community & Values',
    description: 'Explore the community principles that power SynaptIQ Academy experiences.'
  },
  curriculum: {
    title: 'Curriculum Alignment',
    description: 'See how SynaptIQ Academy aligns with Ontario standards while advancing innovation.'
  },
  faq: {
    title: 'Frequently Asked Questions',
    description: 'Get clarity on the most common questions about SynaptIQ Academy.'
  },
  k12: {
    title: 'K–12 Learning',
    description: 'Personalized, human-centered learning experiences for K–12 students.'
  },
  professional: {
    title: 'Professional Learning',
    description: 'Transformative upskilling pathways for leaders and professionals.'
  }
};
