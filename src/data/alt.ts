import type { Collection, Post, Product } from './catalog';
import type { Lang } from './site';

/**
 * Alternative text for the photographs.
 *
 * Written to describe what is actually in the frame, not to repeat the heading
 * next to it. Where a card already carries an aria-label naming the piece, the
 * frame is passed alt="" instead of any of these — a screen reader announcing the
 * same name twice is worse than no alt at all.
 *
 * No entry begins with "image of" or "photo of": the role is already announced.
 */

/** A product's own photograph: the piece, its metal, and its stones if it has any. */
export function productAlt(product: Product, lang: Lang): string {
  const base = `${product.name[lang]} — ${product.material[lang]}`;
  if (!product.stones) return base;
  return lang === 'fa'
    ? `${base}، ${product.stones.fa}`
    : `${base}, set with ${product.stones.en}`;
}

/** A collection's photograph shows several pieces from it side by side. */
export function collectionAlt(collection: Collection, lang: Lang): string {
  return lang === 'fa'
    ? `چند قطعه از مجموعهٔ ${collection.name.fa} در کنار هم`
    : `Several pieces from the ${collection.name.en} collection, laid out side by side`;
}

/** Journal images are each specific, so they are described one by one. */
const postAlts: Record<string, { fa: string; en: string }> = {
  'why-no-prices': {
    fa: 'ترازوی برنجی جواهرسازی، چند انگشتر طلای ساده در یک کفه و وزنه‌های برنجی در کفهٔ دیگر',
    en: 'A brass jeweller’s balance, plain gold rings in one pan and brass weights in the other',
  },
  '18-or-21-karat': {
    fa: 'دو حلقهٔ طلای زرد ساده کنار هم؛ تفاوت رنگ ۱۸ و ۲۱ عیار به‌سختی دیده می‌شود',
    en: 'Two plain yellow gold bands side by side, the difference between 18ct and 21ct barely visible',
  },
  'ten-thousand-openings': {
    fa: 'نمای درشت یک قفل جعبه‌ای طلا با زبانهٔ اطمینان باز، و زنجیر که در دو طرف محو می‌شود',
    en: 'Macro view of a gold box clasp with its safety catch lifted, the chain falling out of focus either side',
  },
};

export function postAlt(post: Post, lang: Lang): string {
  const entry = postAlts[post.slug];
  return entry ? entry[lang] : post.title[lang];
}

/** The editorial and social photographs, which belong to no catalogue entry. */
const editorialAlts: Record<string, { fa: string; en: string }> = {
  'hero-necklace': {
    fa: 'گردن‌آویز زنجیر نازک طلای زرد با یک مروارید سفید گرم، آویخته در یک خط عمودی',
    en: 'A fine yellow gold chain necklace with a single warm-white pearl, hanging in one clean vertical line',
  },
  'craft-hands': {
    fa: 'دست‌های یک زرگر روی میز کار، در حال نشاندن یک برلیان کوچک در انگشتری طلا با قلم فولادی',
    en: 'A goldsmith’s hands at the bench, setting a small diamond into a gold ring with a steel graver',
  },
  'workshop-bench': {
    fa: 'میز کار چوبی قدیمی یک کارگاه زرگری با چند ابزار دستی، در نور نرم پنجره',
    en: 'An old wooden jeweller’s workbench with a few hand tools, lit by soft daylight from a window',
  },
  'og-share': {
    fa: 'گردن‌آویز طلای زرد با آویز مرواریدی، در یک‌سوم چپ کادر',
    en: 'A yellow gold chain necklace with a pearl pendant, placed in the left third of the frame',
  },
};

export function editorialAlt(slug: string, lang: Lang): string {
  return editorialAlts[slug]?.[lang] ?? '';
}
