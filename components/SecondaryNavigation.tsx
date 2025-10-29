import Link from 'next/link';
import { getSecondaryNavigation } from '@/lib/content';

export function SecondaryNavigation() {
  const items = getSecondaryNavigation();

  return (
    <section className="mb-12 grid gap-4 rounded-3xl border border-primary/5 bg-white/70 p-6 shadow-lg shadow-primary/5 sm:grid-cols-2">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group flex items-center justify-between rounded-2xl border border-transparent bg-neutral/80 px-5 py-4 transition hover:border-secondary/40 hover:bg-white"
        >
          <div>
            <p className="font-heading text-sm uppercase tracking-[0.25em] text-secondary/80">Explore</p>
            <p className="mt-2 text-lg font-heading text-primary">{item.label}</p>
          </div>
          <span className="rounded-full bg-secondary/10 p-3 text-secondary transition group-hover:bg-secondary group-hover:text-white">
            →
          </span>
        </Link>
      ))}
    </section>
  );
}
