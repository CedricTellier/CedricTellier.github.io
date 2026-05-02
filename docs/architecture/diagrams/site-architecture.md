# Site Architecture — CedricTellier.github.io

## Component Tree

```mermaid
graph TD
    App["pages/index.tsx (App)"]

    App --> Header
    App --> Hero
    App --> MetricsBar
    App --> ServicesSection
    App --> SkillsSection
    App --> ContactSection
    App --> Footer

    Header --> ThemeToggle["ThemeToggle (dark/light)"]
    Header --> NavLinks["Nav links (Services, Skills, Contact, CV)"]

    Hero --> HeroContent["Headline + pitch + CTA buttons"]

    MetricsBar --> MetricCard["MetricCard ×4 (value + label + note)"]

    ServicesSection --> ServiceCard["ServiceCard ×4 (id, title, desc, bullets)"]

    SkillsSection --> SkillPillar["SkillPillar ×3 (management, delivery, tech)"]
    SkillPillar --> SkillTag["SkillTag ×N"]

    ContactSection --> ContactForm
    ContactSection --> TerminalSidebar["TerminalSidebar (contact info)"]

    Footer --> FooterLinks["GitHub source + copyright"]
```

## Data Flow

```mermaid
graph LR
    Content["src/lib/content.ts\n(PROFILE, ACHIEVEMENTS,\nSERVICES, SKILLS,\nEXPERIENCES, EDUCATION)"]
    Tokens["src/lib/tokens.ts\n(dark/light CSS tokens)"]
    State["index.tsx state\n(theme: dark|light)"]

    Content --> Hero
    Content --> MetricsBar
    Content --> ServicesSection
    Content --> SkillsSection
    Content --> ContactSection
    Content --> Footer

    Tokens --> Header
    Tokens --> Hero
    Tokens --> MetricsBar
    Tokens --> ServicesSection
    Tokens --> SkillsSection
    Tokens --> ContactSection
    Tokens --> Footer

    State -->|"theme prop"| Header
    State -->|"theme prop"| Hero
    State -->|"theme prop"| MetricsBar
    State -->|"theme prop"| ServicesSection
    State -->|"theme prop"| SkillsSection
    State -->|"theme prop"| ContactSection
    State -->|"theme prop"| Footer

    Header -->|"onThemeChange"| State
```

## Build & Deploy Pipeline

```mermaid
graph LR
    Dev["npm run dev\n(localhost:3000)"] -->|"push to develop"| CI

    CI["GitHub Actions CI\n(typecheck + build + test)"] -->|"all green"| PR
    PR["Pull Request\nfeat/* → develop"] -->|"merged"| Develop

    Develop["develop branch"] -->|"release PR"| Release
    Release["release/x.y.z branch"] -->|"merged"| Master
    Master["master branch"] --> Vercel["Vercel\n(auto-deploy)"]
    Master --> GHPages["GitHub Pages\n(deployment.sh)"]
```

## File Structure

```
CedricTellier.github.io/
├── src/
│   ├── pages/
│   │   └── index.tsx          ← App root, theme state, section assembly
│   ├── components/
│   │   ├── Header.tsx          ← Sticky nav, theme toggle
│   │   ├── Header.test.tsx
│   │   ├── Hero.tsx            ← Headline, pitch, CTA
│   │   ├── Hero.test.tsx
│   │   ├── MetricsBar.tsx      ← 4-metric grid
│   │   ├── MetricsBar.test.tsx
│   │   ├── ServicesSection.tsx ← 2×2 service cards
│   │   ├── ServicesSection.test.tsx
│   │   ├── SkillsSection.tsx   ← 3-pillar skill tags
│   │   ├── SkillsSection.test.tsx
│   │   ├── ContactSection.tsx  ← Form + terminal sidebar
│   │   ├── ContactSection.test.tsx
│   │   ├── Footer.tsx
│   │   └── Footer.test.tsx
│   ├── lib/
│   │   ├── content.ts          ← All text content (typed)
│   │   ├── tokens.ts           ← Design tokens per theme
│   │   └── types.ts            ← Shared TypeScript interfaces
│   └── styles/
│       └── globals.css         ← Base reset, CSS custom props, keyframes
├── public/
│   ├── cv.pdf
│   ├── photo.jpg
│   └── favicon.ico
├── docs/
│   ├── architecture/
│   │   ├── adr/001-portfolio-redesign.md
│   │   └── diagrams/site-architecture.md
│   └── design/
│       └── screens/portfolio-sections.md
├── .github/workflows/ci.yml
├── jest.config.js
├── jest.setup.ts
├── next.config.js              ← output: 'export', assetPrefix: './'
└── README.md
```
