# Niteesh Portfolio Implementation Plan

> **For agentic workers:** Execute inline, top to bottom. Spec: `design.md` in this folder. Verification is visual (browser) — no test framework, no git in this repo (user commits manually).

**Goal:** Build the single-page portfolio exactly per `design.md`.

**Architecture:** Static single page. `index.html` (semantic sections), `css/style.css` (design tokens as CSS custom properties + component styles), `js/main.js` (progressive enhancement only: scroll-spy, reveals, count-up, mobile nav).

**Tech Stack:** HTML5, CSS3 (custom properties, grid/flex, clamp), vanilla JS (IntersectionObserver). Google Fonts: Space Grotesk + Inter.

## Global Constraints (from design.md)

- Palette tokens verbatim: `--canvas:#F9F9F9 --panel:#FDFDFD --ink:#1A1A1A --ink-2:#727272 --line:#E8E8E8 --accent:#0D9488 --accent-deep:#115E59`
- One accent rule: teal only on links, CTAs, metric numerals, badges, active nav, status dot. Never large fills.
- Mono micro-labels: `ui-monospace, Menlo, monospace`, uppercase, 0.08em tracking.
- Page must be fully readable with JS disabled; respect `prefers-reduced-motion`.
- Placeholder links: `href="#"` + `data-placeholder` + TODO comment.
- Content strictly from `../nitessh.pdf` — no invented claims.

---

### Task 1: Scaffold + assets
- [ ] Create `css/`, `js/`, `assets/` under `Niteesh/portfolio/`
- [ ] Copy `../nitessh.pdf` → `assets/Niteesh_Nuthi_Resume.pdf`

### Task 2: `index.html` — full content
- [ ] Head: title "Niteesh Kumar Nuthi — Data Analyst", meta description, Google Fonts (Space Grotesk 500/700, Inter 400/500/600), favicon (inline SVG data URI "NK"), link css/js
- [ ] Swap-procedure comment block at top (how to replace placeholder URLs + add headshot)
- [ ] Sticky nav: NK monogram, links Experience/Projects/Skills/Contact, Resume ↓ button (`download` attr), hamburger button (hidden desktop)
- [ ] Hero: status chip, H1 "Turning multi-source data into decisions.", subtitle, CTA row, hidden headshot `<figure>`
- [ ] Metrics strip: 4 cells with `data-target` values (88, 60, 4800, 600) + prefix/suffix spans (~%, %, none, $K)
- [ ] Sections 01–04 per design.md §3 (timeline ×3 roles, project cards ×5, skills 7 groups, edu/certs 2-col)
- [ ] Footer contact: "Let's talk data.", email/phone/LinkedIn/GitHub/resume
- [ ] Verify: open in browser with CSS missing — document reads top-to-bottom as sensible plain HTML

### Task 3: `css/style.css` — design system + components
- [ ] Tokens in `:root`, reset, base type (Inter 16px/1.6, Space Grotesk headings)
- [ ] Layout: 1080px container with hairline vertical edge rules; section spacing 120/64px; section-label rule treatment `[ 01 — EXPERIENCE ]`
- [ ] Components: nav (sticky, blur panel), hero, metric cells, timeline, cards (panel bg, 1px line, 8px radius, hover accent border + lift), chips, footer
- [ ] Responsive: breakpoints ~900px (2→1 col projects, metrics 4→2) and ~640px (mobile nav, type scale down)
- [ ] `prefers-reduced-motion`: disable transitions/reveals
- [ ] Verify: browser at 1440 / 900 / 390 widths matches design.md §2–3

### Task 4: `js/main.js` — progressive enhancement
- [ ] Scroll-spy: IntersectionObserver toggling `.active` on nav links
- [ ] Reveals: `.reveal` elements fade/translate in on first intersection
- [ ] Count-up: animate metric numerals from 0 to `data-target` on strip entering viewport (ease-out, ~1.2s, respects reduced motion, formats 4,800 with comma)
- [ ] Mobile hamburger toggle (aria-expanded)
- [ ] Verify: scroll page — spy highlights, reveals fire once, metrics count up; disable JS — page still complete

### Task 5: End-to-end check
- [ ] Open `index.html` in browser, screenshot desktop + mobile widths, compare against design.md checklist (palette, one-accent rule, mono labels, numbered sections)
- [ ] Confirm resume download link works and placeholders carry `data-placeholder`
