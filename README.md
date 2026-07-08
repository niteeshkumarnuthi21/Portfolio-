# Niteesh Kumar Nuthi — Portfolio

A recruiter-facing, single-page portfolio for **Data Analyst** roles. Positioned like a product launch, not a résumé dump: sharp positioning statement, traction metrics up front, and case-study project cards.

> **Turning multi-source data into decisions.**

No framework, no build step. Plain HTML + CSS + vanilla JS — deployable to GitHub Pages as-is.

---

## Live site

Deploy target: GitHub Pages → `https://niteeshkumarnuthi21.github.io/Portfolio-/`
(enable under **Settings → Pages → Deploy from branch → `main` / root**).

---

## What's inside

A single scroll, in numbered sections:

| # | Section | Content |
|---|---------|---------|
| — | **Hero** | Positioning statement, status chip, CTA row, résumé download |
| — | **Metrics** | Four headline numbers (count-up on scroll) |
| 01 | **Experience** | Three-role timeline |
| 02 | **Projects** | Five case-study cards |
| 03 | **Skills** | Seven grouped skill sets |
| 04 | **Education & Certifications** | Two-column layout |
| 05 | **Contact** | Email, phone, LinkedIn, GitHub, résumé |

**Headline metrics**

- `~88%` of global gallium supply concentration quantified in a university research study
- `60%` manual reporting effort cut by an AI-powered market-intelligence platform
- `4,800` students' data unified across 6 campuses into one reporting layer
- `$600K` in sales supported by data-driven investment presentations

**Featured projects**

- AI-Powered Market Intelligence Platform
- SQL Data Warehouse
- Retail Sales & Business Performance Analysis
- Predicting Customer Purchasing Behavior
- Probabilistic Object Detection

---

## Tech

- **HTML5** — semantic sections, readable top-to-bottom with CSS/JS disabled
- **CSS3** — design tokens as custom properties, grid/flex, `clamp()` fluid type, hairline-bordered grid layout
- **Vanilla JS** — progressive enhancement only: scroll-spy nav, scroll reveals, metric count-up, mobile nav (`IntersectionObserver`)
- **Fonts** — Space Grotesk (headings) + Inter (body), via Google Fonts
- **Accessibility** — respects `prefers-reduced-motion`; single teal accent (`#0D9488`) reserved for links, CTAs, metric numerals, badges

Design references: firecrawl.dev, composio.dev — terminal-style mono micro-labels (`[ 01 — EXPERIENCE ]`), numbered sections, visible structure.

---

## Structure

```
Portfolio-/
├── index.html      # all page content, semantic sections
├── css/style.css   # design tokens + component styles
├── js/main.js      # scroll-spy, reveals, count-up, mobile nav
├── assets/
│   ├── img/         # images
│   ├── logos/       # brand/tool logos
│   └── Niteesh_Nuthi_Resume.pdf
├── design.md       # design spec (source of truth for look)
└── plan.md         # implementation plan
```

---

## Run locally

No build step. Either:

```bash
# open directly
open index.html

# or serve (avoids any file:// quirks)
python3 -m http.server 8000
# → http://localhost:8000
```

---

## Deploy (GitHub Pages)

1. Push to `main`.
2. **Settings → Pages → Deploy from branch → `main` / `/root`.**
3. Site publishes at the URL above in ~1 minute.

---

## Customize

- **Placeholder links** — search `index.html` for `data-placeholder` / `href="#"` and `TODO` comments; swap in real URLs.
- **Headshot** — a hidden `<figure>` in the hero is ready; add the image and unhide.
- **Content** — all copy is drawn from the résumé (`assets/Niteesh_Nuthi_Resume.pdf`). Keep claims tied to it — no invented numbers.

---

_Static portfolio · plain HTML/CSS/JS · no dependencies._
