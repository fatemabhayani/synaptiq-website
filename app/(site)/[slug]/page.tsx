import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { PageIntro } from '@/components/PageIntro';
import { CONTENT_SLUGS, getMarkdownContent, PAGE_METADATA, type ContentSlug } from '@/lib/content';

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return CONTENT_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const slug = params.slug as ContentSlug;
  const meta = PAGE_METADATA[slug];

  if (!meta) {
    return {};
  }

  return {
    title: `${meta.title} | SynaptIQ Academy`,
    description: meta.description
  };
}

export default function ContentPage({ params }: PageProps) {
  const slug = params.slug as ContentSlug;

  if (!PAGE_METADATA[slug]) {
    notFound();
  }

  const content = getMarkdownContent(slug);
  const meta = PAGE_METADATA[slug];

  return (
    <div className="space-y-12">
      <PageIntro title={meta.title} description={<p>{meta.description}</p>} />
      <section className="rounded-3xl border border-primary/5 bg-white/85 p-8 shadow-xl shadow-primary/10 backdrop-blur">
        <MarkdownRenderer source={content} />
      </section>
    </div>
  );
}
