# SynaptIQ Academy Website

A Next.js 14 website for SynaptIQ Academy that integrates the provided long-form markdown narratives with a custom visual system inspired by the SynaptIQ color palette and typography.

## Tech Stack

- [Next.js 14](https://nextjs.org/) with the App Router
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 3](https://tailwindcss.com/) with the Typography plugin
- [React Markdown](https://github.com/remarkjs/react-markdown) + [Remark GFM](https://github.com/remarkjs/remark-gfm)

## Project Structure

```
app/
  layout.tsx          # Global layout, fonts, and shell
  page.tsx            # Landing page that renders `index.md`
  (site)/[slug]/      # Dynamic renderer for additional markdown-driven pages
components/           # UI building blocks (header, footer, markdown renderer)
lib/content.ts        # Markdown loading helpers and shared metadata
*.md                  # Source markdown content for each page
```

Each markdown file (e.g. `about.md`, `curriculum.md`) is imported at build time and rendered with custom typography and tables.

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see the site running locally.

## Production Build

```bash
npm run build
npm run start
```

## Deploying to Bluehost

1. Build the production bundle locally or in CI: `npm run build`.
2. Upload the project (including the `.next`, `public`, `package.json`, and `node_modules` directories) to your Bluehost server.
3. Configure Node.js hosting within Bluehost to run `npm run start` from the project root.
4. Point your domain or subdomain to the Node.js app instance inside Bluehost.

> **Tip:** Automate deployments with a zipped artifact of the build output or by connecting your repository through Bluehost&apos;s Git integration, then running `npm install --production` followed by `npm run build` and `npm run start` on the server.

## Linting

```bash
npm run lint
```

The configuration extends Next.js Core Web Vitals rules.
