import type { ReactNode } from 'react';

interface PageIntroProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  cta?: ReactNode;
}

export function PageIntro({ eyebrow, title, description, cta }: PageIntroProps) {
  return (
    <section className="mb-12 rounded-3xl border border-primary/10 bg-white/90 p-8 shadow-xl shadow-primary/10 backdrop-blur">
      {eyebrow ? (
        <p className="mb-2 font-heading text-xs uppercase tracking-[0.35em] text-secondary">{eyebrow}</p>
      ) : null}
      <h1 className="font-heading text-4xl font-semibold text-primary sm:text-5xl">{title}</h1>
      {description ? <div className="mt-4 text-lg text-navy/80">{description}</div> : null}
      {cta ? <div className="mt-6 flex flex-wrap gap-3">{cta}</div> : null}
    </section>
  );
}
