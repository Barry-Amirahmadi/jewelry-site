import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/**
 * The deployment target is GitHub Pages: a static file host with no Node
 * runtime and no request-time rendering.
 *
 * Nothing had to be given up to go there. Every route is enumerable at build
 * time, the enquiry form validates on the client and posts nowhere yet, and the
 * 23 photographs are processed into AVIF/WebP/JPEG during the build rather than
 * by a request-time optimizer.
 */
export default defineConfig({
  /**
   * `site` is the origin only. The project lives at a sub-path, which `base`
   * carries — together they give the absolute URLs in canonical, hreflang,
   * og:image and the sitemap.
   */
  site: 'https://barry-amirahmadi.github.io',

  /**
   * A project page at barry-amirahmadi.github.io/jewelry-site/, not a user page
   * at the domain root, so every route and asset URL carries this prefix.
   *
   * Deliberately unconditional rather than gated on an environment variable, for
   * the same reason as the other sites: `astro dev` then serves under the same
   * prefix as production, so a path bug that only appears behind a base shows up
   * on the first local load instead of after a deploy.
   *
   * Astro applies this automatically to asset URLs it generates (stylesheets,
   * scripts, everything from astro:assets) but NOT to hand-written hrefs. That
   * is why every internal link goes through href() in src/lib/i18n.ts, which
   * prepends it — there are no literal <a href="/..."> anywhere in src/.
   */
  base: '/jewelry-site',

  /**
   * Static hosts serve a directory by its index.html. GitHub Pages redirects
   * /collections to /collections/ on its own, but emitting the slash directly
   * saves every internal link a redirect hop.
   */
  trailingSlash: 'always',

  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
