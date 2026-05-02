# CedricTellier.github.io

Personal portfolio site for Cédric Tellier — Engineering Manager.

**Live**: [portfolio-cedric-telliers-projects.vercel.app](https://portfolio-cedric-telliers-projects.vercel.app)

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (static export) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS custom properties |
| Fonts | JetBrains Mono · Inter · Fraunces |
| Testing | Jest + React Testing Library |
| Hosting | Vercel (primary) · GitHub Pages (secondary) |

---

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
```

## Build & Deploy

```bash
npm run build     # static export → /out
npm run deploy    # build + push to GitHub Pages via gh-pages
```

Vercel auto-deploys on push to **master**.

---

## Testing

```bash
npm test                  # run all tests
npm run test:watch        # watch mode
npm run test:coverage     # with coverage report
```

Tests are colocated with their components: `Header.test.tsx` lives next to `Header.tsx`.

---

## Project Structure

```
src/
├── pages/index.tsx          ← App root, theme state, page assembly
├── components/              ← One file + one test file per component
│   ├── Header.tsx / .test.tsx
│   ├── Hero.tsx / .test.tsx
│   ├── MetricsBar.tsx / .test.tsx
│   ├── ServicesSection.tsx / .test.tsx
│   ├── SkillsSection.tsx / .test.tsx
│   ├── ContactSection.tsx / .test.tsx
│   └── Footer.tsx / .test.tsx
├── lib/
│   ├── content.ts           ← All site text content (typed)
│   ├── tokens.ts            ← Design tokens for dark/light themes
│   └── types.ts             ← Shared TypeScript interfaces
└── styles/globals.css       ← Base reset, CSS custom properties, keyframes

public/
├── cv.pdf                   ← Downloadable CV
├── photo.jpg                ← Profile photo
└── favicon.ico

docs/
├── architecture/
│   ├── adr/001-portfolio-redesign.md   ← Design decision record
│   └── diagrams/site-architecture.md  ← Mermaid component + data flow
└── design/
    └── screens/portfolio-sections.md  ← Section wireframes
```

---

## Architecture

The site is a single-page portfolio with seven sections:

1. **Header** — sticky nav, theme toggle (dark/light)
2. **Hero** — headline, pitch, CTA buttons (contact + CV download)
3. **MetricsBar** — 4 key achievements (18+ years, ISO 8583, 10 people, 80M+ transactions)
4. **Services** — 4 service cards (management, delivery, architecture, audit)
5. **Skills** — 3 pillars of expertise with tagged skills
6. **Contact** — mailto form + terminal sidebar with contact info
7. **Footer** — copyright + GitHub source link

All content lives in `src/lib/content.ts`. Theme tokens (colors, backgrounds) live in `src/lib/tokens.ts`. Components receive `theme: 'dark' | 'light'` as a prop and look up the appropriate token set.

See `docs/architecture/` for detailed diagrams and `docs/design/` for wireframes.

---

## Theme System

Themes are driven by CSS custom properties injected per component via `src/lib/tokens.ts`. Dark mode is the default. The Header exposes a toggle button that flips the theme state in `pages/index.tsx`, which then flows down as a prop to all sections.

---

## Branching & Releases

| Branch | Purpose |
|--------|---------|
| `master` | Production — auto-deploys to Vercel |
| `develop` | Integration — all features merge here |
| `feat/*` | Feature branches, PR → develop |
| `fix/*` | Bug fixes, PR → develop |
| `release/*` | Release prep, PR → master |

All commits follow [Conventional Commits](https://www.conventionalcommits.org/).

---

## CI

GitHub Actions runs on every push:

- **Typecheck** — `tsc --noEmit`
- **Build** — `next build` (verifies static export succeeds)
- **Test** — `jest --coverage`

A PR may not be merged while CI is red.

---

## Content Updates

To update job history, skills, or contact info, edit `src/lib/content.ts`. No component changes are needed for content-only updates.

To update the CV, replace `public/cv.pdf`.
