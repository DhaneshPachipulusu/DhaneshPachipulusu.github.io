# Dhaneswara Rao Pachipulusu — Portfolio

A premium, recruiter-focused engineering portfolio positioning Dhaneswara Rao Pachipulusu as a
**DevOps Engineer** (with Backend & AI Applications engineering as supporting capabilities).

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and
**Framer Motion**. Dark-theme-first, fully responsive, SEO-optimized, and
deployable to Vercel with no changes.

## Sections

Hero (animated terminal + stats) · Tech marquee · About · Experience timeline ·
Featured Projects (filterable, case-study modals) · **Architecture Showcase**
(interactive animated SVG diagrams: AWS, Kubernetes, CI/CD, RAG, Observability) ·
Skills · Achievements · Modern Engineering Workflow · Contact · Footer.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Customize

All content lives in [`src/lib/data.ts`](src/lib/data.ts). Update these before deploying:

- **`profile.socials.linkedin`** — replace the placeholder with your real LinkedIn URL.
- **`profile.siteUrl`** — set to your deployed domain (used for SEO, OG, sitemap, JSON-LD).
- **`public/resume.pdf`** — replace the placeholder PDF with your real resume.
- Email / GitHub are already wired (`nainovate@gmail.com`, `DhaneshPachipulusu`).

Design tokens (colors, fonts, animations) live in
[`src/app/globals.css`](src/app/globals.css) under the Tailwind v4 `@theme` block.

## SEO

Metadata, Open Graph, and Twitter cards are configured in
[`src/app/layout.tsx`](src/app/layout.tsx), with a JSON-LD `Person` schema, a
dynamically generated OG image ([`opengraph-image.tsx`](src/app/opengraph-image.tsx)),
[`robots.ts`](src/app/robots.ts), and [`sitemap.ts`](src/app/sitemap.ts).

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com/new) — zero config.
