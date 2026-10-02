/**
 * Single source of truth for brand and contact details.
 * The brand name is a PLACEHOLDER — change it here and it changes everywhere.
 */

export const LANGS = ['fa', 'en'] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = 'fa';

/** A string that exists in both languages. */
export interface Bi {
  fa: string;
  en: string;
}

export const site = {
  brand: { fa: 'مهرآوا', en: 'MEHRAVA' } satisfies Bi,
  brandLine: {
    fa: 'گالری طلا و جواهر',
    en: 'Fine Gold & Jewellery',
  } satisfies Bi,
  founded: 1352,
  phoneDisplay: { fa: '۰۲۱ ۸۸۷۷ ۶۶۵۵', en: '+98 21 8877 6655' } satisfies Bi,
  phoneHref: '+982188776655',
  email: 'salam@mehrava.example',
  address: {
    fa: 'تهران، خیابان ولیعصر، نبش کوچهٔ نگارستان، پلاک ۱۴، طبقهٔ همکف',
    en: '14 Negarestan Lane, Valiasr Street, Tehran, Iran',
  } satisfies Bi,
  hours: {
    fa: 'شنبه تا پنجشنبه، ۱۰ تا ۲۰ — جمعه‌ها با وقت قبلی',
    en: 'Saturday–Thursday, 10:00–20:00 — Fridays by appointment',
  } satisfies Bi,
  instagram: 'https://instagram.com/',
  whatsapp: 'https://wa.me/982188776655',
} as const;
