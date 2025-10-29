import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <p className="font-heading text-sm uppercase tracking-[0.4em] text-secondary">404</p>
      <h1 className="mt-4 font-heading text-4xl text-primary">Page not found</h1>
      <p className="mt-3 max-w-xl text-lg text-navy/70">
        The page you were looking for has drifted beyond our intelligent horizon. Return to home or explore another
        pathway.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-primary px-5 py-2 font-heading text-sm uppercase tracking-[0.3em] text-neutral shadow-lg shadow-primary/30 transition hover:bg-secondary"
        >
          Back to Home
        </Link>
        <Link
          href="/faq"
          className="rounded-full border border-primary/20 px-5 py-2 font-heading text-sm uppercase tracking-[0.3em] text-primary transition hover:border-secondary/40 hover:text-secondary"
        >
          Visit FAQ
        </Link>
      </div>
    </div>
  );
}
