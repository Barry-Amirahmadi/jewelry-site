# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Jewelry Site
**Generated:** 2026-09-27 09:05:02
**Category:** E-commerce Luxury
**Design Dials:** Variance 3/10 (Centered / Minimal) | Motion 6/10 (Standard) | Density 2/10 (Spacious)

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#1C1917` | `--color-primary` |
| On Primary | `#FFFFFF` | `--color-on-primary` |
| Secondary | `#44403C` | `--color-secondary` |
| On Secondary | `#FFFFFF` | `--color-on-secondary` |
| Accent/CTA | `#A16207` | `--color-accent` |
| On Accent/CTA | `#FFFFFF` | `--color-on-accent` |
| Background | `#FAFAF9` | `--color-background` |
| Foreground | `#0C0A09` | `--color-foreground` |
| Card | `#FFFFFF` | `--color-card` |
| Card Foreground | `#0C0A09` | `--color-card-foreground` |
| Muted | `#E8ECF0` | `--color-muted` |
| Muted Foreground | `#475569` | `--color-muted-foreground` |
| Border | `#D6D3D1` | `--color-border` |
| Destructive | `#DC2626` | `--color-destructive` |
| On Destructive | `#FFFFFF` | `--color-on-destructive` |
| Ring | `#1C1917` | `--color-ring` |

**Color Notes:** Premium dark + gold accent [Accent adjusted from #CA8A04]

### Typography

- **Heading Font:** Cormorant
- **Body Font:** Montserrat
- **Mood:** luxury, high-end, fashion, elegant, refined, premium
- **Google Fonts:** [Cormorant + Montserrat](https://fonts.googleapis.com/css2?family=Cormorant:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');
```

### Spacing Variables

*Density: 2/10 — Spacious*

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `24px` / `1.5rem` | Standard padding |
| `--space-lg` | `32px` / `2rem` | Section padding |
| `--space-xl` | `48px` / `3rem` | Large gaps |
| `--space-2xl` | `64px` / `4rem` | Section margins |
| `--space-3xl` | `96px` / `6rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: #A16207;
  color: white;
  padding: 12px 24px;
  border-radius: 2px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #1C1917;
  border: 2px solid #1C1917;
  padding: 12px 24px;
  border-radius: 2px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}
```

### Cards

```css
.card {
  background: #FFFFFF;
  border-radius: 0;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 2px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: #1C1917;
  outline: none;
  box-shadow: 0 0 0 3px #1C191720;
}
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal {
  background: white;
  border-radius: 0;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
}
```

---

## Style Guidelines

**Style:** Exaggerated Minimalism  *(overridden from the generated default -- see Design Decisions)*

**Keywords:** Bold minimalism, oversized typography, high contrast, negative space, loud minimal, statement design

**Best For:** Fashion, architecture, portfolios, agency landing pages, luxury brands, editorial

**Key Effects:** Oversized display type, extreme negative space, charcoal + gold on warm off-white, single accent only, subtle hover (200-250ms), sharp corners

**Performance:** `cost:low | drivers:none` -- **Accessibility:** `risk:low`

### Type Scale (Exaggerated Minimalism, adapted for Cormorant)

| Token | Value | Usage |
|-------|-------|-------|
| `--type-display` | `clamp(3rem, 9vw, 9rem)` | Hero statement -- Cormorant 400 |
| `--type-h1` | `clamp(2.25rem, 5vw, 4rem)` | Page titles -- Cormorant 500 |
| `--type-h2` | `clamp(1.75rem, 3vw, 2.5rem)` | Section headings -- Cormorant 500 |
| `--type-body` | `1rem` / line-height 1.6 | Montserrat 400 -- never below 16px |
| `--type-eyebrow` | `0.75rem` | Montserrat 500, `letter-spacing: 0.2em`, uppercase |

### Radius (editorial override)

`--radius: 0px` on cards, images and sections. `2px` on buttons and inputs only.
Sharp corners are what separate a luxury editorial layout from a generic SaaS card grid.

### Page Pattern

**Pattern Name:** Editorial Collection Showcase  *(overridden from Feature-Rich Showcase)*

- **Conversion Strategy:** Product-first. One statement piece per viewport. Price enquiry rather than instant-buy -- fine jewellery is a considered purchase.
- **CTA Placement:** Hero (soft) + after each collection block + persistent enquiry in footer
- **Section Order:** Hero (single statement piece) > Collections grid (3-4) > Craft & provenance story > Featured pieces > Visit / enquiry CTA

---

## Design Decisions (why this differs from the raw generator output)

Three fields were changed after verifying them against the source data. Keep these
unless the client's brand direction changes.

1. **Style: Minimalism & Swiss Style -> Exaggerated Minimalism.**
   The generated pick listed `Best For: Enterprise apps, dashboards, documentation
   sites, SaaS platforms` -- wrong product class. The `exaggerated-minimalism` row in
   `styles.csv` lists `Fashion, architecture, portfolios, agency landing pages,
   luxury brands, editorial` and carries the same low performance cost and low
   accessibility risk. Chosen by Barry on 2026-09-27.

2. **Pattern: Feature-Rich Showcase -> Editorial Collection Showcase.**
   `products.csv` maps both `E-commerce` and `E-commerce Luxury` to Feature-Rich
   Showcase, which is a SaaS feature-grid: "one key message per card", "use cases or
   benefits", "social proof or logos". A jewellery catalogue sells objects, not
   features. Section order rewritten accordingly.

3. **Display weight: 900 -> Cormorant 400/500.**
   `exaggerated-minimalism` specifies `--type-weight: 900`, but the typography row
   that explicitly names jewellery specifies Cormorant, which ships 300-700 only.
   A light elegant serif at large size is the actual luxury-editorial move; 900
   black belongs to the grotesque variant of this style. Scale kept, weight adapted.

**Not used:** `products.csv` recommends `Liquid Glass + Glassmorphism` for
`E-commerce Luxury`. Rejected -- it reads as fintech/software, not as a jewellery
brand, and `3D & Hyperrealism` (its secondary) carries `cost:high` with conditional
light/dark support.

---

## Motion

**Stagger List** (Standard) — Trigger: load or scroll | Duration: 300-450ms | Easing: `back.out(1.4)`

```js
gsap.from('.grid-item', { opacity: 0, scale: 0.92, y: 16, duration: 0.4, stagger: { each: 0.06, from: 'start', grid: 'auto' }, ease: 'back.out(1.4)' });
```

**Framework notes:** grid: 'auto' lets GSAP infer rows/columns from a CSS grid layout for a natural wave stagger; Use matchMedia('(prefers-reduced-motion: reduce)') to skip non-essential motion and render the final state immediately

- ✅ Combine with from: 'center' for a bento-grid layout to draw the eye inward first
- ❌ Don't use back.out on dense data tables; the overshoot reads as sloppy on informational UI
- ⚡ Group DOM writes; avoid interleaving layout reads (getBoundingClientRect) between staggered tweens

---

## Anti-Patterns (Do NOT Use)

- ❌ Vibrant & Block-based
- ❌ Playful colors

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
