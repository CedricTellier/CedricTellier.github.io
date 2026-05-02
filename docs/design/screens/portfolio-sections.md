# Portfolio Design — Section Wireframes

Design direction: **Terminal éditorial**  
Themes: **dark** (default) + **light**  
Layout: max-width 1200px, centered, with full-width accent bands

---

## Typography System

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Headings (h1, h2) | Fraunces (serif) | 700–800 | Section titles, hero headline |
| Body | Inter | 400–600 | Paragraphs, descriptions |
| Monospace labels | JetBrains Mono | 400–600 | Tags, metrics, terminal sidebar, nav links |

---

## Color Tokens

| Token | Dark | Light |
|-------|------|-------|
| `--bg` | `#09090b` | `#fafafa` |
| `--bg2` | `#18181b` | `#f4f4f5` |
| `--fg` | `#fafafa` | `#09090b` |
| `--muted` | `#71717a` | `#71717a` |
| `--border` | `#27272a` | `#e4e4e7` |
| `--accent` | user-configurable (default `#3B82F6`) | same |
| `--accent-fg` | `#fff` | `#fff` |

---

## Section 1 — Header (sticky)

```
┌─────────────────────────────────────────────────────────────────┐
│  CT                      Services  Skills  Contact   CV ↓   ☀/☾  │
└─────────────────────────────────────────────────────────────────┘
```

- Fixed to top, `z-index: 100`, background with subtle blur/border
- Left: monospace logo `CT` linking to `#top`
- Right: nav links in JetBrains Mono, CV as a pill button, theme toggle icon
- On mobile (< 768px): hamburger or collapse to icon-only

---

## Section 2 — Hero

```
┌─────────────────────────────────────────────────────────────────┐
│  ░░░░░░░░░░░░░░░░░░░░ (grid background) ░░░░░░░░░░░░░░░░░░░░░░  │
│                                                                   │
│   [Status badge: ● Disponible pour discuter]                     │
│                                                                   │
│   Engineering                                                     │
│   Manager.          ← Fraunces h1, large                        │
│                                                                   │
│   18+ années d'expérience…                                       │
│   ← Inter body, muted                                            │
│                                                                   │
│   [Me contacter →]  [Voir le CV ↓]                              │
│   ← accent pill btn  ← outline btn                              │
│                                                                   │
│   Valdahon, France · cedric.tellier25@gmail.com                 │
└─────────────────────────────────────────────────────────────────┘
```

- Full-width section, min-height 100vh
- Subtle dot/grid pattern on background
- Status badge: small green dot + monospace text
- h1 uses Fraunces, large `clamp(3rem, 8vw, 6rem)`
- Two CTA buttons side by side

---

## Section 3 — MetricsBar

```
┌───────────────┬───────────────┬───────────────┬───────────────┐
│     18+       │   ISO 8583    │      10       │     80M+      │
│ années d'exp. │ expert normes │  personnes    │ transactions  │
│ Multiples sec │ EMV, PCI DSS  │ managées      │ mise en prod  │
└───────────────┴───────────────┴───────────────┴───────────────┘
```

- 4-column grid, `bg2` background, full-width
- Each cell: large monospace value + label + note in muted
- Dividers between columns
- On mobile: 2×2 grid

---

## Section 4 — Services (id="services")

```
┌─────────────────────────────────────────────────────────────────┐
│  // SERVICES                                                      │
│  Ce que je fais                                                   │
│                                                                   │
│  ┌──────────────────┐  ┌──────────────────┐                     │
│  │ 01               │  │ 02               │                     │
│  │ Management       │  │ Pilotage tech.   │                     │
│  │ d'équipe         │  │                  │                     │
│  │ description...   │  │ description...   │                     │
│  │ • bullet         │  │ • bullet         │                     │
│  │ • bullet         │  │ • bullet         │                     │
│  └──────────────────┘  └──────────────────┘                     │
│  ┌──────────────────┐  ┌──────────────────┐                     │
│  │ 03               │  │ 04               │                     │
│  │ Architecture     │  │ Audit            │                     │
│  └──────────────────┘  └──────────────────┘                     │
└─────────────────────────────────────────────────────────────────┘
```

- Section label: `// SERVICES` in JetBrains Mono muted
- Title: Fraunces h2
- 2×2 grid of cards with border, hover: accent border + subtle lift
- Card: number (monospace muted), title (Inter semi-bold), desc, bullet list

---

## Section 5 — Skills (id="skills")

```
┌─────────────────────────────────────────────────────────────────┐
│  // COMPÉTENCES                                                   │
│  Domaines d'expertise                                             │
│                                                                   │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐   │
│  │ MANAGEMENT      │ │ DELIVERY        │ │ TECH            │   │
│  │ ─────────────── │ │ ─────────────── │ │ ─────────────── │   │
│  │ [Leadership]    │ │ [Scrum/Kanban]  │ │ [Python]        │   │
│  │ [Management…]   │ │ [Cadrage]       │ │ [EMV / ISO…]    │   │
│  │ [Vulgarisation] │ │ [Gestion risq.] │ │ [CI/CD]         │   │
│  └─────────────────┘ └─────────────────┘ └─────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

- 3-column layout
- Column header: JetBrains Mono uppercase + divider
- Skills: pill tags with border, wrapping flexbox

---

## Section 6 — Contact (id="contact")

```
┌────────────────────────────────┬────────────────────────────────┐
│  // CONTACT                    │  > whoami                      │
│  Discutons de votre projet     │  Cédric Tellier                │
│                                │                                │
│  Nom        Email              │  > location                    │
│  [______]   [____________]     │  Valdahon, France              │
│                                │                                │
│  Type: [Mission] [Poste]       │  > status                      │
│        [Audit]   [Autre]       │  Disponible pour discuter      │
│                                │                                │
│  Message                       │  > contact                     │
│  [________________________]    │  cedric.tellier25@gmail.com    │
│  [________________________]    │  +33 6 11 14 96 12             │
│                                │                                │
│  [Envoyer →]  LinkedIn ↗       │  > github                      │
│                                │  github.com/cedrictellier      │
└────────────────────────────────┴────────────────────────────────┘
```

- 2-column layout: form left, terminal sidebar right
- Terminal sidebar: `bg2` background, monospace font, `>` prompts
- Form: mailto-based (no backend)
- Subject type: pill toggle buttons (not radio inputs)

---

## Section 7 — Footer

```
┌─────────────────────────────────────────────────────────────────┐
│  Cédric Tellier · Engineering Manager                            │
│  © 2026 · Code source sur GitHub                               │
└─────────────────────────────────────────────────────────────────┘
```

- Minimal, `bg2` background
- JetBrains Mono, muted text
- GitHub source link

---

## States to Cover (All Sections)

| Section | States |
|---------|--------|
| Header | default, scrolled (shadow), mobile (collapsed) |
| Hero | dark / light theme |
| MetricsBar | dark / light, mobile (2×2) |
| Services | default, hover (card lift + accent border) |
| Skills | default |
| Contact | empty form, filled form, sent confirmation |
| Footer | default |

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| ≥ 1024px | Full desktop layout as described |
| 768px–1023px | Services 2×2 → 1×4, MetricsBar 4col → 2×2 |
| < 768px | Single column, Header collapsed |
