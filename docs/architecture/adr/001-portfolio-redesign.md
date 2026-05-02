# ADR-001: Portfolio Redesign — From Retro 8-bit to Terminal Editorial

**Status**: Accepted  
**Date**: 2026-05-02  
**Author**: Cédric Tellier

---

## Context

The portfolio site (`CedricTellier.github.io`) was originally built with a retro 8-bit Mario aesthetic: Press Start 2P pixel font, an animated typewriter intro sequence, a minimal single-screen layout, and no professional content beyond a name and a few icon links.

This design was appropriate for a personal hobby site but no longer reflects Cédric's current professional positioning as an **Engineering Manager** with 18+ years of experience in payment systems. The site needs to function as a professional portfolio that can be shared with recruiters, clients, and partners.

The new design prototype (`direction-A.jsx`) was developed externally as a "Terminal éditorial" direction: dark/light themed, monospace accents, structured sections (Hero, Metrics, Services, Skills, Contact), and a CV download.

---

## Decision

Redesign the site in full, replacing all existing visual components while keeping the same technical stack:

- **Next.js** (static export, `output: 'export'`) — required for Vercel/GitHub Pages hosting
- **React + TypeScript** — existing stack, no migration cost
- **Tailwind CSS** — utility classes for layout, CSS custom properties for theming
- **npm** — package manager unchanged

The redesign introduces:
1. A typed content layer (`src/lib/content.ts`) separating data from presentation
2. A design token system (`src/lib/tokens.ts`) for consistent color/typography across dark and light themes
3. Independent, tested React components for each page section
4. A proper CI pipeline (typecheck + build + test) on every push

---

## Consequences

### Positive
- Site is now a professional portfolio suitable for job applications and client outreach
- Content is centralized — updating job history or contact info requires editing one file
- All components are unit-tested, reducing regression risk on future updates
- CI prevents broken builds from reaching master

### Negative
- The retro 8-bit aesthetic is fully removed (intentional trade-off)
- The animated Typewriter intro is removed (replaced by a static Hero with a grid background)
- Press Start 2P font dependency is dropped

### Neutral
- `assetPrefix: './'` and `basePath: ''` in `next.config.js` are preserved unchanged
- `public/theme-dark.css` / `public/theme-light.css` approach is replaced by CSS custom properties injected via React state and a `tokens.ts` module
- Existing `deployment.sh` script remains valid

---

## Alternatives Considered

### Keep the retro design, add content sections
Rejected: the Press Start 2P pixel font reads as playful/junior and undermines the Engineering Manager positioning. A partial redesign would produce a visual mismatch.

### Switch to a different framework (Astro, SvelteKit)
Rejected: would break the existing Vercel project configuration and `deployment.sh` automation. The benefit does not justify the migration cost for a single-page portfolio.

### Use a CSS framework other than Tailwind (e.g., vanilla CSS)
Rejected: Tailwind is already installed and used. Replacing it would be churn with no user-facing gain.

---

## References

- New design prototype: `~/Downloads/Site Perso/direction-A.jsx`
- Content constants: `~/Downloads/Site Perso/shared.jsx`
- CV (HTML + PDF): `~/Downloads/Site Perso/cv.html`, `~/Downloads/Site Perso/assets/cv.pdf`
- Site architecture diagram: `docs/architecture/diagrams/site-architecture.md`
- Design wireframes: `docs/design/screens/portfolio-sections.md`
