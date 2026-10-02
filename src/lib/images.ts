/**
 * Slug → image resolution for the 23 supplied photographs.
 *
 * A glob keeps every call site free of import lists: a card knows a product's
 * slug, and that slug is the filename. Astro still processes each file at build
 * time because the glob is eager and lives under src/, so these go through
 * astro:assets (AVIF/WebP, hashed, intrinsic size known) rather than being
 * copied verbatim the way anything in public/ would be.
 */
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/**/*.png', {
  eager: true,
});

/** slug (filename without extension) → processed image */
const bySlug = new Map<string, ImageMetadata>(
  Object.entries(files).map(([path, mod]) => [
    path.slice(path.lastIndexOf('/') + 1, -'.png'.length),
    mod.default,
  ]),
);

/**
 * Look up a photograph by slug.
 *
 * Returns undefined rather than throwing: a missing photograph should leave a
 * calm empty frame on one card, not fail the whole build. Callers fall back to
 * the line-art motif.
 */
export const photo = (slug: string): ImageMetadata | undefined => bySlug.get(slug);

/** Every slug that resolved — used by the asset check in scripts/. */
export const photoSlugs = (): string[] => [...bySlug.keys()].sort();
