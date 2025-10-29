'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/curriculum', label: 'Curriculum' },
  { href: '/k12', label: 'K-12 Learning' },
  { href: '/professional', label: 'Professional Learning' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/community', label: 'Community' },
  { href: '/faq', label: 'FAQ' }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-30 w-full border-b border-silver/40 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-primary" onClick={closeMenu}>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-lg font-heading font-semibold text-white shadow-lg shadow-secondary/40">
            IQ
          </span>
          <div className="flex flex-col">
            <span className="text-xl font-heading font-semibold uppercase tracking-wide">
              SynaptIQ Academy
            </span>
            <span className="text-xs font-body uppercase text-silver">Where AI Meets Morality</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-heading uppercase tracking-wide text-primary/80 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`rounded-full px-4 py-2 transition-all duration-200 ${
                  isActive
                    ? 'bg-primary text-neutral shadow-md shadow-primary/25'
                    : 'hover:bg-secondary/10 hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/admissions"
            className="hidden rounded-full bg-secondary px-5 py-2 font-heading text-sm uppercase tracking-wide text-white shadow-lg shadow-secondary/40 transition hover:bg-accent/90 lg:inline-flex"
            onClick={closeMenu}
          >
            Apply Now
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-primary/20 p-2 text-primary transition hover:border-secondary/40 hover:text-secondary lg:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="text-xl">☰</span>
          </button>
        </div>
      </div>
      {isMobileMenuOpen ? (
        <div className="border-t border-silver/40 bg-white/95 px-6 py-4 shadow-lg shadow-primary/10 lg:hidden">
          <nav className="flex flex-col gap-3 text-sm font-heading uppercase tracking-wide text-primary/80">
            {NAV_ITEMS.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-full px-4 py-2 transition-all duration-200 ${
                    isActive
                      ? 'bg-primary text-neutral shadow-md shadow-primary/25'
                      : 'hover:bg-secondary/10 hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/admissions"
              onClick={closeMenu}
              className="rounded-full bg-secondary px-4 py-2 text-center font-heading text-sm uppercase tracking-wide text-white shadow-lg shadow-secondary/40 transition hover:bg-accent/90"
            >
              Apply Now
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
