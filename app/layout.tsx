import type { Metadata } from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

const headingFont = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700']
});

const bodyFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'SynaptIQ Academy | Where AI Meets Humanity',
  description:
    'SynaptIQ Academy blends AI innovation with human-centered learning. Explore future-ready programs for K-12 students, professionals, and communities.',
  metadataBase: new URL('https://synaptiqacademy.ai')
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen bg-neutral text-navy">
        <div className="relative flex min-h-screen flex-col">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-grid" aria-hidden />
          <SiteHeader />
          <main className="flex-1">
            <div className="mx-auto w-full max-w-5xl px-6 py-12 sm:py-16 lg:py-20">
              {children}
            </div>
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
