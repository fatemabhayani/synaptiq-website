import Link from 'next/link';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { PageIntro } from '@/components/PageIntro';
import { SecondaryNavigation } from '@/components/SecondaryNavigation';
import { getMarkdownContent } from '@/lib/content';

export default function HomePage() {
  const content = getMarkdownContent('index');

  return (
    <div className="space-y-12">
      <PageIntro
        eyebrow="Where AI Meets Morality"
        title="SynaptIQ Academy"
        description={
          <p>
            Based in Canada and designed for a new global generation, SynaptIQ Academy is where human presence,
            ethical innovation, and intelligent systems converge. Step into a future-ready learning ecosystem that values
            connection as much as cognition.
          </p>
        }
        cta={
          <>
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-heading text-sm uppercase tracking-[0.3em] text-neutral shadow-lg shadow-primary/30 transition hover:bg-secondary"
            >
              Begin Your Application
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-primary/20 px-6 py-3 font-heading text-sm uppercase tracking-[0.3em] text-primary transition hover:border-secondary/40 hover:text-secondary"
            >
              Discover Our Story
            </Link>
          </>
        }
      />

      <SecondaryNavigation />

      <section className="rounded-3xl border border-primary/5 bg-white/80 p-8 shadow-xl shadow-primary/10 backdrop-blur">
        <MarkdownRenderer source={content} />
      </section>
    </div>
  );
}
