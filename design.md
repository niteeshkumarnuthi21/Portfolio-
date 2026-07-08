# Niteesh Kumar Nuthi — Portfolio Design Spec

**Date:** 2026-07-07
**Goal:** Recruiter-facing job-search portfolio for Data Analyst roles.
**Stack:** Plain HTML + CSS + vanilla JS. No frameworks, no build step. Deployable to GitHub Pages as-is.
**Source of truth for content:** `Niteesh/nitessh.pdf` (resume).

---

## 1. Concept — "Analyst as a startup"

Present Niteesh the way a YC company presents a product: sharp positioning
statement, traction metrics, case studies. Not a "Hi, I'm X 👋" template.
Visual reference: **firecrawl.dev** and **composio.dev** (per client direction).

What makes it non-generic:
- His **numbers are the visual centerpiece** (metrics strip, badge chips).
- Terminal-style **monospace micro-labels** — `[ ~88% SUPPLY MAPPED ]`, `[ SQL ]`,
  `[ 01 — EXPERIENCE ]` — borrowed from Firecrawl's `[ 200 OK ]` badges.
- **Numbered sections** (01, 02, 03…) like Composio.
- Hairline-bordered grid layout (visible structure, Linear/Vercel style).

## 2. Design system

### Color (extracted from firecrawl.dev / composio.dev)

| Token | Hex | Use |
|---|---|---|
| `--canvas` | `#F9F9F9` | Page background (warm off-white) |
| `--panel` | `#FDFDFD` | Cards, nav, raised surfaces |
| `--ink` | `#1A1A1A` | Primary text, headlines |
| `--ink-2` | `#727272` | Secondary text, labels |
| `--line` | `#E8E8E8` | Hairline borders everywhere |
| `--accent` | `#0D9488` | Links, CTAs, metric numerals, active nav (SPARING) |
| `--accent-deep` | `#115E59` | Accent hover state |
| `--ok` | `#0D9488` | Status dot ("● Open to work") — same teal family |

Rule: **one accent**. Teal never covers large areas — text, thin
underlines, small fills, button background only.

### Typography

Two-face system (adopted from ALIF LABS DESIGN.md — Inter for thought,
JetBrains Mono for instrumentation):

- **Display / headlines + body:** Inter (Google Fonts), 700–800 display with
  tight letter-spacing, hero ~clamp(2.6rem, 6.5vw, 4.6rem); body 400, 16px/1.6.
- **Micro-labels / badges / metrics / dates:** `"JetBrains Mono", ui-monospace,
  Menlo, monospace`, uppercase, letter-spacing 0.08em, 12–13px.

### Layout & texture

- Max content width ~1080px, centered, with hairline vertical rules at the
  container edges (the "engineered grid" look).
- Sections separated by 1px `--line` rules with the mono section label
  sitting on the rule: `[ 01 — EXPERIENCE ]`.
- Cards: `--panel` bg, 1px `--line` border, 8px radius, no shadows (flat);
  hover = accent border + slight lift.
- Whitespace-generous: ~120px between sections desktop, ~64px mobile.

## 3. Page structure (single `index.html`, scroll)

1. **Sticky nav** — "NK" monogram (mono), links: Experience / Projects /
   Skills / Contact with scroll-spy underline; teal **Resume ↓** button
   (downloads the PDF).
2. **Hero** — status chip `● Open to Data Analyst roles` (green dot),
   H1: "Turning multi-source data into decisions." Sub: Data Analyst ·
   SQL · Python · Power BI — Supply-Chain & Business Analytics, Arlington TX,
   M.S. Data Science (UT Arlington, Dec 2025). CTAs: [View projects] [Resume ↓].
   Right side: headshot slot (hidden until image provided; layout must work
   text-only).
3. **Metrics strip** — 4 bordered cells, mono numerals count up on scroll:
   `~88%` gallium supply concentration quantified · `60%` manual reporting cut ·
   `4,800` students' data unified across 6 campuses · `$600K` sales supported.
4. **01 — Experience** — vertical timeline, 3 roles (UTA Data Analyst/RA,
   Sri Udaya Business Analyst, Aliens Space Station Business Associate),
   each: role, org, dates (mono), ALL resume bullets verbatim (client
   request 2026-07-07; supersedes the earlier "2–3 punchiest" rule).
5. **02 — Projects** — 5 case-study cards (grid, 2-col desktop / 1-col
   mobile): title, one-line impact, bracket logo-chips (`[ logo SKILL ]`),
   no repo links. Projects: Retail Sales Analysis, AI Market
   Intelligence Platform, Customer Purchasing Behavior, SQL Data Warehouse,
   Probabilistic Object Detection.
6. **03 — Skills** — 7 category groups from resume (Data Analysis, BI & Viz,
   Databases & Warehousing, Business Analysis, Python Stack, ML & AI,
   Tools & Platforms) as chip clusters.
7. **04 — Education & Certifications** — compact 2-col: M.S. Data Science
   (UTA, Dec 2025), B.Tech Mechanical (GRIET, 2022) | Azure Data Engineer
   Associate, Cisco Data Analytics Essentials, NPTEL Python for DS.
8. **Contact / footer** — big "Let's talk data." Email
   (niteeshkumarnuthi21@gmail.com), phone (682) 406-8619, LinkedIn / GitHub
   (placeholders), Resume ↓ again. Mono footer line.

## 4. Behavior (js/main.js, vanilla)

- Scroll-spy nav highlighting (IntersectionObserver).
- Reveal-on-scroll animations (fade/translate, IntersectionObserver).
- Count-up animation for metric numerals when strip enters viewport.
- Mobile hamburger nav.
- All non-essential; page fully readable with JS disabled.
- Respect `prefers-reduced-motion` (skip count-up + reveals).

## 5. Files

```
Niteesh/portfolio/
├── design.md          (this file)
├── index.html
├── css/style.css
├── js/main.js
└── assets/
    ├── Niteesh_Nuthi_Resume.pdf   (copy of nitessh.pdf)
    └── headshot.(jpg|png)         (added later by client)
```

## 5b. Logos & imagery

- **Toolbox strip** under the metrics: grayscale tool logos (devicon CDN) +
  mono names; hover restores color.
- **Logo chips (`.lchip`)** everywhere tools are named — hero tags, project
  cards, all 7 skill groups. Tools with CDN logos get an icon; concept skills
  (EDA, RAG, KPI Development…) are text-only chips. Logos not on any CDN
  (trademark removals) use local slots that auto-appear via `onerror`-removal:
  `assets/logos/powerbi.svg`, `tableau.svg`, `excel.svg`, `bloomberg.svg`,
  `openai.svg`, `usgs.svg`, `scipy.svg`.
- **Company logos** (28px chips beside timeline titles): `assets/logos/uta.png`,
  `sriudaya.png`, `aliens.png` — real logos supplied by client, never
  AI-generated. Auto-appear when present.
- **Project thumbnails** (16:9, top of each card): `assets/img/proj-*.png` —
  AI-generated abstract data visuals in the site palette. Auto-appear.
- **Hero artwork**: `assets/img/hero-visual.png` — shows right of the hero copy
  via `:has()` when present (independent of the headshot option).

## 6. Placeholders / pending assets

- LinkedIn + GitHub URLs and per-project repo links: `href="#"` with
  `data-placeholder` attribute + `<!-- TODO: real URL -->` comments.
- Headshot: slot exists but hidden (`.has-photo` class toggles layout) until
  the image file is provided.
- Swap procedure documented in a comment block at the top of index.html.

## 7. Out of scope (YAGNI)

- Dark mode toggle, blog, project detail pages, contact form/backend,
  analytics, CMS. Single page only.
