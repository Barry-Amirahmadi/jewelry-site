import { DEFAULT_LANG, type Lang, type Bi } from '../data/site';

/**
 * Prefix a root-relative path with the configured base path.
 *
 * The site deploys to a GitHub Pages project page, so every URL sits under
 * /jewelry-site/. Astro applies that automatically to assets it generates, but
 * never to a hand-written href — so this is the one place that knows about it,
 * and nothing in src/ writes a literal absolute path of its own.
 *
 * BASE_URL arrives as '/jewelry-site/' when a base is configured and '/' when it
 * is not, and both have to come out right, which is why the trailing slash is
 * stripped before joining. Trailing slashes on the path itself are left alone:
 * routes want one, files must not have one.
 *
 *   asset('/favicon.svg') -> '/jewelry-site/favicon.svg'
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

/**
 * Build a URL for a logical path in a given language.
 *
 * Persian is the default locale and carries no prefix; English lives under /en.
 * Logical paths stay bare everywhere else in the code — `path` props, the
 * current-page comparison in the header — and only become real URLs here.
 *
 * The trailing slash matches trailingSlash: 'always'. GitHub Pages would redirect
 * to it anyway; emitting it directly saves every link a redirect hop.
 *
 *   href('/collections', 'fa') -> '/jewelry-site/collections/'
 *   href('/collections', 'en') -> '/jewelry-site/en/collections/'
 *   href('/',            'en') -> '/jewelry-site/en/'
 */
export function href(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const localised =
    lang === DEFAULT_LANG ? clean : clean === '/' ? '/en/' : `/en${clean}`;
  const slashed = localised.endsWith('/') ? localised : `${localised}/`;
  return asset(slashed);
}

/** The other language. With two locales there is only ever one. */
export function otherLang(lang: Lang): Lang {
  return lang === 'fa' ? 'en' : 'fa';
}

/** Pick the right side of a bilingual string. */
export function bi(value: Bi, lang: Lang): string {
  return value[lang];
}

/** Text direction for a language. */
export function dirOf(lang: Lang): 'rtl' | 'ltr' {
  return lang === 'fa' ? 'rtl' : 'ltr';
}

/**
 * Format an ISO date for display.
 * Persian uses the Jalali calendar — a Gregorian date on a Persian page is
 * simply the wrong date to a Persian reader.
 */
export function formatDate(iso: string, lang: Lang): string {
  const date = new Date(`${iso}T00:00:00Z`);
  const locale = lang === 'fa' ? 'fa-IR-u-ca-persian' : 'en-GB';
  return new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' }).format(date);
}

/**
 * `hreflang` pairs for the current logical path, for the document head.
 *
 * `siteUrl` is the origin alone — the base path arrives through href(), so the
 * two must not both contribute it.
 */
export function alternates(path: string, siteUrl: string): Array<{ lang: string; url: string }> {
  const origin = siteUrl.replace(/\/$/, '');
  return [
    { lang: 'fa-IR', url: `${origin}${href(path, 'fa')}` },
    { lang: 'en', url: `${origin}${href(path, 'en')}` },
    { lang: 'x-default', url: `${origin}${href(path, 'fa')}` },
  ];
}
