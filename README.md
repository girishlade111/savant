# Savant

An all-in-one AI study platform for university students (originally generated
with v0.app). Savant bundles an AI voice tutor, lecture assistant, past exam
paper vault, study planner, study groups, digital textbooks, assignments, and a
creator economy ("Earn While You Learn") — localized for Zimbabwean students
with English & Shona voice support and EcoCash/EduPesa payment options.

## Features

- **Academic dashboard** — personalized home with greeting, study schedule, and
  quick actions
- **Voice Study Assistant (AI tutor)** — ask anything in English or Shona, with
  voice input support
- **Lecture Assistant** — notes/help around lectures
- **Past Exam Paper Vault** — searchable past papers, filterable by university
  (e.g. Midlands State University)
- **Smart Study Planner** — adjustable study schedules and study time tracking
- **Study Groups** — collaborate with peers
- **Textbooks & Content library** — digital study content
- **Assignments** — assignment tracking
- **Earnings ("Earn While You Learn")** — create and share content, earn rewards
- **Payments** — EcoCash account / payment methods management
- Modern UI with shadcn/ui components, dark-mode-ready theming

## Tech Stack

- [Next.js](https://nextjs.org) 15 (App Router, static export)
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) 3
- [shadcn/ui](https://ui.shadcn.com) + Radix UI primitives
- [lucide-react](https://lucide.dev) — icons
- [@vercel/analytics](https://vercel.com/analytics) — web analytics

## Quick Start

### Prerequisites

- Node.js 18 or later
- npm (or pnpm/yarn)

### Install and run

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

### Build for production

```bash
npm run build
npm start
```

The project is configured for static export (`output: "export"`), so
`npm run build` produces a fully static site in the `out/` directory that can
be hosted on any static host (GitHub Pages, Cloudflare Pages, Netlify, Vercel).

## Project Structure

```
app/
  page.tsx            # Academic dashboard (home)
  ai-tutor/           # Voice Study Assistant
  lecture-assistant/  # Lecture help
  past-papers/        # Past exam paper vault
  study-planner/      # Study schedules
  study-groups/      # Peer study groups
  textbooks/          # Digital textbooks
  content/            # Study content library
  assignments/        # Assignments
  earnings/           # Earn-while-you-learn creator hub
  payments/           # Payment methods (EcoCash)
components/
  ui/                 # shadcn/ui primitives
lib/
  utils.ts            # cn() class-name helper
public/               # Static assets
styles/
  globals.css         # Tailwind + global styles
next.config.mjs       # Static export + basePath config
```

## Environment Variables

None required. This build is a static frontend — the AI tutor and payments
screens are UI mockups with no live backend wired in.

## Deployment

This repo is deployed as a static site on **GitHub Pages**:

- Live URL: https://girishlade111.github.io/savant/
- Deployment: `output: "export"` static build pushed to the `gh-pages` branch.

Notes:

- `basePath` is set to `/savant` so assets resolve correctly under the GitHub
  Pages subpath. **Remove the `basePath` line from `next.config.mjs` if you
  deploy to a root domain (Vercel/Netlify/Cloudflare Pages root) — or set it to
  your own subpath.**
- `images.unoptimized` is enabled because static export has no image optimizer.
- Next.js was bumped to 15.2.8 to patch CVE-2025-55182 (React2Shell, CVSS 10.0)
  and related vulnerabilities.

## Customizing

- The dashboard user name/date in `app/page.tsx` ("Welcome back, Tinashe") is
  placeholder copy — replace with real auth data when wiring a backend.
- Copy and university lists (Midlands State University etc.) live in the
  `past-papers` page — adapt to your own institution.

---

Built by Girish Lade — https://ladestack.in
