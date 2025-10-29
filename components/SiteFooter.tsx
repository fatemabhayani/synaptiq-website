import Link from 'next/link';

const footerLinks = [
  { title: 'Academy', links: [
    { href: '/about', label: 'About' },
    { href: '/community', label: 'Community' },
    { href: '/faq', label: 'FAQ' }
  ] },
  { title: 'Programs', links: [
    { href: '/curriculum', label: 'Curriculum' },
    { href: '/k12', label: 'K-12 Learning' },
    { href: '/professional', label: 'Professional Learning' }
  ] },
  { title: 'Admissions', links: [
    { href: '/admissions', label: 'Admissions Process' },
    { href: '/admissions#tuition', label: 'Tuition & Funding' },
    { href: '/admissions#apply', label: 'Apply Now' }
  ] }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-silver/40 bg-primary text-neutral">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 text-2xl font-heading font-semibold uppercase tracking-widest">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-lg text-white">
              IQ
            </span>
            SynaptIQ
          </div>
          <p className="text-sm text-neutral/80">
            SynaptIQ Academy is a Canadian-based learning ecosystem aligning human potential with ethical AI innovation.
          </p>
        </div>
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h4 className="mb-3 font-heading text-sm uppercase tracking-[0.3em] text-accent">
              {section.title}
            </h4>
            <ul className="space-y-2 text-sm text-neutral/80">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col gap-3">
          <h4 className="font-heading text-sm uppercase tracking-[0.3em] text-accent">Stay Connected</h4>
          <p className="text-sm text-neutral/80">
            Ready to lead in the intelligence age? Contact our team to design a learning pathway that honors your goals.
          </p>
          <Link
            href="mailto:hello@synaptiqacademy.ai"
            className="inline-flex w-fit items-center justify-center rounded-full bg-secondary px-5 py-2 font-heading text-xs uppercase tracking-wide text-white shadow-lg shadow-secondary/40 transition hover:bg-accent/90"
          >
            hello@synaptiqacademy.ai
          </Link>
        </div>
      </div>
      <div className="bg-navy/80 py-4 text-center text-xs uppercase tracking-[0.3em] text-neutral/70">
        © {new Date().getFullYear()} SynaptIQ Academy. All rights reserved.
      </div>
    </footer>
  );
}
