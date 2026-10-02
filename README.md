# MEHRAVA — bilingual jewellery house site

A showcase and catalogue site for a gold and jewellery store, in Persian and
English. Editorial layout, no cart and no checkout: pieces are priced on request
and the only conversion is an enquiry.

**Live:** https://barry-amirahmadi.github.io/jewelry-site/

---

## Stack

| | |
|---|---|
| Framework | Astro 7 (static output, 58 pages) |
| Styling | Tailwind CSS 4 — CSS-first `@theme`, no config file |
| Motion | GSAP 3 + ScrollTrigger, dial 6/10 |
| Images | `astro:assets` → AVIF / WebP / JPEG, 425 variants |
| Fonts | Cormorant + Montserrat (Latin), Markazi Text + Vazirmatn (Persian) |
| Hosting | GitHub Pages, deployed by Actions on push to `main` |

## Running it

```bash
npm install
npm run dev      # http://localhost:4321/jewelry-site/
```

```bash
npm run check    # astro check — 0 errors expected
npm run build    # 58 pages + image variants, then prunes unreferenced originals
npm run preview  # serves dist/ at the same sub-path as production
```

The dev server runs under `/jewelry-site/` just like production. That is
deliberate: a path bug that only appears behind a base path shows up on the first
local load instead of after a deploy.

One consequence: `http://localhost:4321/` itself returns 404, so open the path
with the base. (Dev is lenient and will also serve `/collections/` without the
base; production will not, which is the whole reason links go through `href()`.)

## Layout

```
src/
  pages/      thin route wrappers, 13 routes x 2 locales
  views/      the actual page bodies, shared between locales
  components/ Frame, PieceCard, Header, Footer, EnquiryForm, Motif, Icon
  data/       catalog.ts (collections, products, posts), site.ts, alt.ts, grounds.ts
  i18n/       ui.ts — every string, both languages
  lib/        i18n.ts (href/asset/base path), images.ts (slug -> photograph)
  assets/     the 23 photographs
  styles/     global.css — tokens, type scale, components
scripts/      measure-image-ground.py, prune-originals.mjs, gen-*.py
design-system/jewelry-site/MASTER.md   palette, type, spacing, motion preset
```

### Two things worth knowing before editing

**Internal links go through `href()` in `src/lib/i18n.ts`.** Astro adds the base
path to assets it generates but never to a hand-written `href`, so a literal
`<a href="/collections">` would 404 in production while working in dev. There are
none in `src/`; keep it that way.

**Image frames do not crop.** Six of the twelve product photographs are wider
than any frame the grid can use, and no single aspect ratio crops all twelve
without cutting metal off a piece. Frames therefore letterbox with
`object-fit: contain`, each painting the gradient measured from that image's own
edges — see the header comment in `src/components/Frame.astro` and
`scripts/measure-image-ground.py`.

## Deployment

`.github/workflows/deploy.yml` runs on every push to `main`: typecheck, build,
then publish `dist/` to Pages. The typecheck gate runs *before* the build, so a
red tree never reaches the live site.

Pages must be set to **Source: GitHub Actions** in the repository settings. With
the default branch source, Jekyll would strip `_astro/` and take every
stylesheet, script and photograph with it.

To move to a custom domain: add `public/CNAME`, change `site` in
`astro.config.mjs` to the domain and set `base` to `'/'`.

## Known placeholders

These are deliberate and need real values before this is shown as a finished
client site:

- **Brand.** "MEHRAVA / مهرآوا" is invented. So are the founding year, the
  three-generation story, and the four hundred pieces a year.
- **Contact details** in `src/data/site.ts` — address, phone, hours, socials.
- **The enquiry form** validates fully, in both languages, with a focus-managed
  error summary, and then posts nowhere. It needs an endpoint.
- **Photographs.** The 23 images were generated from
  `MASTER-IMAGE-BRIEF.md`. Thirteen came back landscape where the brief asked for
  portrait, and the backgrounds drift between images instead of holding the one
  warm off-white that was specified. The site handles both without cropping, but
  a regenerated set would look closer to the intent.
