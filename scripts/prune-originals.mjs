/**
 * Delete the untouched image originals that Astro copies into the build.
 *
 * Astro emits every image imported under src/ into dist/_astro at full size, in
 * addition to the AVIF/WebP/JPEG variants the pages actually reference. For this
 * project that is 22 PNGs totalling about 36 MB that no page, stylesheet, script
 * or sitemap links to — roughly three quarters of the deploy, never downloaded by
 * anyone. It is not <Picture> and not the glob in src/lib/images.ts: a plain
 * static import plus getImage() emits the original just the same.
 *
 * Nothing here is guessed. A file is removed only when both hold:
 *
 *   1. its name appears in no textual file anywhere in dist, and
 *   2. its bytes are identical to one of the files in src/assets.
 *
 * The second test is what makes this safe. Filename shape cannot tell an original
 * from a variant — Vite's hashes contain underscores of their own, so
 * "why-no-prices.CksXKbn_.png" and "bazu-cuff.Bne5CU1E_18j1qL.avif" are not
 * distinguishable by pattern. A SHA-256 match against the source is exact.
 *
 * Run after astro build (wired into the build script). Safe to run twice.
 */

import { createHash } from 'node:crypto';
import { readdir, readFile, unlink } from 'node:fs/promises';
import { basename, join, relative, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const DIST = join(ROOT, 'dist');
const ASSETS = join(DIST, '_astro');
const SOURCES = join(ROOT, 'src', 'assets');

/** Files that can carry a reference to an asset. */
const TEXTUAL = /\.(html|css|js|mjs|cjs|json|xml|txt|svg|webmanifest)$/i;

async function walk(dir) {
  const out = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

const sha = (buffer) => createHash('sha256').update(buffer).digest('hex');

const distFiles = await walk(DIST);
if (distFiles.length === 0) {
  console.error('prune-originals: dist/ is empty — run astro build first.');
  process.exit(1);
}

/* Every asset filename mentioned anywhere in the built output. */
const referenced = new Set();
for (const file of distFiles.filter((f) => TEXTUAL.test(f))) {
  const text = await readFile(file, 'utf8');
  for (const match of text.matchAll(/[\w.-]+\.(?:avif|webp|jpe?g|png|gif|svg)\b/gi)) {
    referenced.add(match[0]);
  }
}

/* Digests of the source images, so a copy can be identified exactly. */
const sourceDigests = new Map();
for (const file of await walk(SOURCES)) {
  sourceDigests.set(sha(await readFile(file)), relative(ROOT, file));
}

const assetFiles = await walk(ASSETS);
let removed = 0;
let reclaimed = 0;
const unreferencedButKept = [];

for (const file of assetFiles) {
  const name = basename(file);
  if (referenced.has(name)) continue;

  const bytes = await readFile(file);
  const source = sourceDigests.get(sha(bytes));
  if (!source) {
    /* Only images are reported. Scripts and stylesheets reach the page through
       import maps and <link> hrefs that the image-extension scan above never
       collects, so listing them here would cry wolf on every build. */
    if (/\.(avif|webp|jpe?g|png|gif|svg)$/i.test(name)) unreferencedButKept.push(name);
    continue;
  }

  await unlink(file);
  removed += 1;
  reclaimed += bytes.byteLength;
}

const mb = (bytes) => (bytes / 1024 / 1024).toFixed(1);
console.log(
  `prune-originals: removed ${removed} unreferenced original(s), ${mb(reclaimed)} MB reclaimed`,
);

/* Anything unreferenced that is NOT a copy of a source is left alone and named,
   because that combination means something has changed and wants a human look. */
if (unreferencedButKept.length) {
  console.log(
    `prune-originals: left ${unreferencedButKept.length} unreferenced file(s) in place ` +
      `(not byte-identical to any source): ${unreferencedButKept.join(', ')}`,
  );
}

/* Guard: every asset the output links to must still be on disk. */
const present = new Set((await walk(ASSETS)).map((f) => basename(f)));
const sourceNames = new Set([...sourceDigests.values()].map((f) => basename(f).replace(/\.[^.]+$/, '')));
const broken = [...referenced].filter(
  (name) => sourceNames.has(name.split('.')[0]) && !present.has(name),
);
if (broken.length) {
  console.error(`prune-originals: FAILED — referenced but missing: ${broken.join(', ')}`);
  process.exit(1);
}
console.log(`prune-originals: ${relative(ROOT, DIST)} verified — every referenced asset present`);
