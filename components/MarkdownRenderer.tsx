import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';

const markdownComponents: Components = {
  h1: ({ node, ...props }) => (
    <h1 className="mb-8 font-heading text-4xl font-semibold text-primary sm:text-5xl" {...props} />
  ),
  h2: ({ node, ...props }) => (
    <h2 className="mt-12 mb-6 font-heading text-3xl font-semibold text-primary sm:text-4xl" {...props} />
  ),
  h3: ({ node, ...props }) => (
    <h3 className="mt-10 mb-4 font-heading text-2xl font-semibold text-primary" {...props} />
  ),
  p: ({ node, ...props }) => <p className="mb-6 text-lg leading-relaxed text-navy/90" {...props} />,
  ul: ({ node, ordered, ...props }) => (
    <ul className="mb-6 list-disc space-y-3 pl-6 text-lg leading-relaxed text-navy/90" {...props} />
  ),
  ol: ({ node, ordered, ...props }) => (
    <ol className="mb-6 list-decimal space-y-3 pl-6 text-lg leading-relaxed text-navy/90" {...props} />
  ),
  li: ({ node, ...props }) => <li className="leading-relaxed" {...props} />,
  blockquote: ({ node, ...props }) => (
    <blockquote
      className="my-10 border-l-4 border-secondary/60 bg-white/80 px-6 py-4 text-lg italic leading-relaxed text-primary shadow"
      {...props}
    />
  ),
  table: ({ node, ...props }) => (
    <div className="my-10 overflow-hidden rounded-2xl border border-silver/40 shadow-xl shadow-secondary/10">
      <table className="min-w-full divide-y divide-silver/40" {...props} />
    </div>
  ),
  thead: ({ node, ...props }) => <thead className="bg-primary text-neutral" {...props} />,
  th: ({ node, ...props }) => <th className="px-4 py-3 text-left text-sm font-heading uppercase tracking-wide" {...props} />,
  td: ({ node, ...props }) => <td className="px-4 py-3 text-sm text-navy/90" {...props} />,
  hr: ({ node, ...props }) => <hr className="my-12 border-secondary/40" {...props} />, 
  a: ({ node, ...props }) => (
    <a
      className="font-semibold text-secondary underline decoration-2 underline-offset-4 transition hover:text-accent"
      {...props}
    />
  )
};

interface MarkdownRendererProps {
  source: string;
}

export function MarkdownRenderer({ source }: MarkdownRendererProps) {
  return <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>{source}</ReactMarkdown>;
}
