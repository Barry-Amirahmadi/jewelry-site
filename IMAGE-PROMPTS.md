# پرامپت تصاویر — ۲۳ تصویر

پرامپت‌ها **به انگلیسی** نوشته شده‌اند چون مدل‌های تصویر با انگلیسی به‌مراتب دقیق‌تر عمل می‌کنند؛ توضیحات به فارسی است.

---

## ۱ — روش کار

**قدم اول:** بلوک سبک زیر را کپی کن. **این بلوک باید عیناً و بدون تغییر در ابتدای هر ۲۳ پرامپت بیاید.** این تنها چیزی است که باعث می‌شود ۲۳ عکسِ جداگانه مثل یک برند به نظر برسند و نه مثل ۲۳ فروشگاه مختلف.

**قدم دوم:** بلوک سبک + پرامپت اختصاصی هر تصویر را با هم بفرست.

**قدم سوم:** اندازه را روی **portrait** بگذار (۱۰۲۴×۱۵۳۶ یا ۱۰۲۴×۱۷۹۲) — به‌جز جایی که در پرامپت گفته شده landscape.

**قدم چهارم:** با نام دقیقی که زیر هر پرامپت آمده ذخیره کن و در این مسیرها بگذار:

```
src/assets/products/     ۱۲ فایل
src/assets/collections/  ۴ فایل
src/assets/editorial/    ۳ فایل
src/assets/journal/      ۳ فایل
src/assets/og/           ۱ فایل
```

پوشهٔ `src/assets/` (نه `public/`) — چون Astro فقط فایل‌های داخل `src` را بهینه می‌کند: خودش WebP و AVIF می‌سازد، چند سایز برای صفحه‌های مختلف تولید می‌کند و `width/height` را می‌گذارد تا CLS صفر بماند.

---

## ۲ — بلوک سبک (در ابتدای هر پرامپت)

```
Editorial product photograph for a luxury gold jewellery house. Photographic
realism, not a 3D render and not an illustration.

Background: seamless warm off-white (#FAFAF9), with a soft gradient falling off
to a slightly deeper warm grey in the lower corners. The piece rests on a matte
warm limestone slab with almost no visible texture.

Lighting: one large softbox from the upper left, one weak fill from the right, a
narrow soft specular highlight running along the gold. Soft, short shadows. No
harsh reflections, no rainbow flare, no starburst sparkle.

Gold: warm yellow gold, slightly desaturated, the colour of 18ct — never brassy,
never orange, never rose, never green.

Palette: restricted to warm neutrals, cream, soft stone grey and gold. No blue,
no cool grey, no black background, no coloured gels.

Camera: medium format, 100mm macro, f/8, the whole piece in sharp focus.

Composition: one single piece, centred, with generous empty space on all four
sides so the frame can be cropped to 4:5 without touching the subject.

Do not include: hands, models, fabric, velvet, flowers, leaves, boxes, mirrors,
water, glitter, props of any kind, text, lettering, numerals, logos, watermarks,
signatures, price tags, or any second piece of jewellery.
```

---

## ۳ — قبل از قبول کردن هر تصویر، این‌ها را چک کن

مدل‌های تصویر در جواهرات خطاهای مشخص و تکرارشونده دارند. در سایتی که **خودِ جزئیات، محصول است**، این‌ها مهم‌اند:

- **شمارش سنگ و چنگ.** اگر پرامپت گفته «شش چنگ» بشمار. مدل معمولاً چهار یا هفت می‌گذارد.
- **جفت‌های قرینه.** گوشواره‌ها جفت‌اند؛ مدل تقریباً همیشه دو تای نامتقارن می‌سازد. اگر قرینه نبود، دوباره تولید کن.
- **قفل و بند.** قفل‌های ساختگی که به هیچ‌جا وصل نیستند، یا زنجیری که وسط راه ناپدید می‌شود.
- **حجاری و نوشته.** هر چیزی که شبیه حرف باشد، در واقع حروف بی‌معناست. برای «انگشتر مهر» سطح باید **کاملاً خالی** باشد.
- **وزن بصری.** «گردن‌بند نقش» ۱۸.۴ گرم است و «گوشوارهٔ دانه» ۱.۴ گرم — اگر در عکس هم‌وزن به نظر برسند، متن سایت با عکس نمی‌خواند.

متن سایت مشخصات دقیق هر قطعه را می‌گوید (عیار، وزن، تعداد سنگ). اگر عکس با متن نخواند، همان چیزی است که مشتری اول از همه می‌بیند.

---

## ۴ — محصولات (۱۲ تصویر، portrait)

### ۴.۱ — `negar-solitaire.png`
```
A single 18ct yellow gold solitaire ring standing upright, viewed at a slight
three-quarter angle. One round brilliant-cut diamond of about 0.30 carat, held in
exactly SIX slender claws — count them: six. The setting sits LOW and close to
the band so nothing protrudes. The band is plain, round in section, mirror
polished.
```

### ۴.۲ — `parand-band.png`
```
A single plain 18ct yellow gold wedding band standing upright, viewed at a slight
three-quarter angle. No stones at all. The band is wide and gently DOMED in
section, not flat. The surface is a soft hand-brushed matte with very fine
directional abrasion marks, not sandblasted and not shiny.
```

### ۴.۳ — `mehr-signet.png`
```
A single heavy 21ct yellow gold signet ring standing upright, viewed at a slight
three-quarter angle so the flat oval face is clearly visible. The face is
COMPLETELY BLANK and mirror polished — absolutely no engraving, no monogram, no
crest, no letters, no symbols, no marks of any kind. Noticeably heavier and
thicker in the shoulders than a plain band.
```

### ۴.۴ — `sepid-pendant.png`
```
An 18ct yellow gold pendant lying flat, with a single round saltwater pearl about
7mm across, warm white with a soft even lustre. The pearl is capped and pinned
from below with a fine gold post; the gold bail above it is a small elongated
loop. A fine gold chain runs away from the bail and coils loosely twice, going
out of frame at one edge.
```

### ۴.۵ — `tar-chain.png`
```
An 18ct yellow gold box-link chain necklace arranged in a loose open spiral,
lying flat. The links are square box links, each clearly separate and individually
formed, uniform in size along the whole length. A spring-ring clasp with a small
secondary safety catch is visible at the front of the composition. No pendant.
```

### ۴.۶ — `naghsh-collar.png`
```
A wide, heavy 21ct yellow gold collar necklace lying flat in a shallow open curve.
It is built from SEVEN separate rectangular gold plates hinged edge to edge. Each
plate carries fine hand-chased geometric ornament derived from Safavid Persian
tilework: interlacing eight-point stars and tessellating polygons, purely
geometric with no letters and no figures. Visibly the heaviest, most substantial
piece in the whole collection.
```

### ۴.۷ — `shabnam-drop.png`
```
A MATCHED PAIR of 18ct yellow gold drop earrings, placed side by side and
PERFECTLY SYMMETRICAL — one the exact mirror of the other. Each has a small
round brilliant diamond at the top and a smooth elongated teardrop of polished
gold hanging below it. The gold posts behind each earring end in a small
threaded screw fitting. Both earrings must be identical in size and shape.
```

### ۴.۸ — `halgheh-hoop.png`
```
A MATCHED PAIR of 18ct yellow gold hoop earrings, about 24mm across, placed side
by side and PERFECTLY SYMMETRICAL. The hoop is TRIANGULAR in cross-section, so
three distinct flat facets catch the light differently around the curve. No
stones. The hinge is at the lowest point of each hoop and barely visible.
```

### ۴.۹ — `daneh-stud.png`
```
A MATCHED PAIR of tiny 18ct yellow gold ball stud earrings, side by side and
PERFECTLY SYMMETRICAL. Each is a small SOLID polished gold sphere with a mirror
finish, reflecting the soft studio light as a single clean highlight. Visibly the
smallest and lightest pieces in the collection. The straight posts and simple
butterfly backs rest behind them.
```

### ۴.۱۰ — `pahn-bangle.png`
```
A single 18ct yellow gold bangle standing on its edge, seen at a three-quarter
angle so both the outer surface and part of the smooth inner surface are visible.
The band is wide — about 9mm — with softly ROUNDED edges, not sharp. Outer
surface lightly polished, inner surface completely flat and mirror smooth. No
stones, no clasp, a closed circle.
```

### ۴.۱۱ — `zanjir-bracelet.png`
```
An 18ct yellow gold chain bracelet lying flat in a relaxed open curve. Solid,
substantial links of even size. At the front of the composition, a rectangular
BOX clasp is clearly visible, with a small hinged safety catch folded over it —
the clasp is the focal detail of the photograph. No charms, no pendant.
```

### ۴.۱۲ — `bazu-cuff.png`
```
A single heavy OPEN 21ct yellow gold cuff bracelet standing on its edge, the gap
between its two ends facing the camera. Smooth, undecorated, softly squared in
section. The metal is visibly THICKER through the middle of the curve, where it
flexes, and tapers slightly toward the two open ends. Substantial and solid — the
heaviest bracelet in the collection.
```

---

## ۵ — کاور مجموعه‌ها (۴ تصویر، **landscape ۱۵۳۶×۱۰۲۴**)

این چهار تا تنها تصاویری‌اند که در آن‌ها **چند قطعه** مجازند. در صفحهٔ مجموعه‌ها به ۴:۳ بریده می‌شوند، پس حاشیه نگه دار.

### ۵.۱ — `rings.png`
```
Three 18ct and 21ct yellow gold rings arranged as a loose horizontal group on the
stone slab: one slim solitaire with a small diamond, one plain domed matte band,
one heavier blank signet. Spaced apart, not touching, not stacked. Shot slightly
from above.
```

### ۵.۲ — `necklaces.png`
```
Two yellow gold necklaces laid out horizontally on the stone slab: a fine box-link
chain with a small pearl pendant, and beside it part of a wider hinged gold collar
with fine geometric ornament. Both arranged in relaxed open curves, clearly
separate, not tangled together. Shot from directly above.
```

### ۵.۳ — `earrings.png`
```
Three MATCHED PAIRS of 18ct yellow gold earrings arranged in a horizontal row on
the stone slab: a pair of small solid ball studs, a pair of triangular-section
hoops, and a pair of diamond-topped teardrops. Each pair kept together and
symmetrical, the three pairs clearly separated from one another. Shot from
directly above.
```

### ۵.۴ — `bracelets.png`
```
Three yellow gold bracelets arranged horizontally on the stone slab: a wide plain
bangle standing on its edge, a flat chain bracelet with a box clasp, and a heavy
open cuff. Spaced apart, not overlapping. Shot slightly from above.
```

---

## ۶ — تصاویر تحریریه (۳ تصویر)

این سه تا **استثنای بلوک سبک‌اند**: در این‌ها دست و کارگاه مجاز است. بقیهٔ بلوک (نور، پالت، رئالیسم، بدون متن و لوگو) همان است.

### ۶.۱ — `hero-necklace.png` — portrait
هیرو صفحهٔ اصلی. تنها قطعه‌ای که کل صفحهٔ خانه را می‌سازد، پس باید بهترین باشد.
```
A single fine 18ct yellow gold chain necklace with one small warm-white pearl
pendant, photographed hanging vertically against the warm off-white background,
the chain falling in one clean straight line with the pendant resting low in the
frame. Nothing else in the picture. Very generous empty space above and to both
sides. Quiet, restrained, expensive.
```

### ۶.۲ — `workshop-bench.png` — portrait
صفحهٔ دربارهٔ ما. «همان میز کار که از سال ۱۳۵۲ هست».
```
An old jeweller's workbench in a small Tehran workshop, photographed straight on
in soft daylight from a window to the left. A worn dark wooden bench top, scarred
and polished by decades of use, with a semicircular cut-out at the front edge. A
few hand tools resting on it: a small hammer, fine files, a pair of pliers, a
loupe. A low wooden stool. Warm neutral palette, dust in the air catching the
light. Quiet and unstaged, documentary rather than advertising. No people, no
text, no signage, no brand marks.
```

### ۶.۳ — `craft-hands.png` — **landscape ۱۵۳۶×۱۰۲۴**
بخش تیرهٔ صفحهٔ خانه. روی پس‌زمینهٔ ذغالی می‌نشیند، پس این یکی می‌تواند تاریک‌تر باشد.
```
Close-up of a craftsman's hands at the bench, setting a small diamond into a gold
ring with a fine steel graver. Only the hands and forearms are visible, no face.
Warm directional light from one side, deep soft shadows, a darker and moodier
exposure than the product photographs. Real working hands — slightly rough, a
little metal dust on the fingers. Documentary, not a stock photo. No text, no
logos, no watch, no rings on the craftsman's own fingers.
```

---

## ۷ — کاور یادداشت‌ها (۳ تصویر، **landscape ۱۵۳۶×۱۰۲۴**)

بلوک سبک را کامل اعمال کن. این‌ها انتزاعی‌تر و آرام‌ترند.

### ۷.۱ — `why-no-prices.png` — «چرا قیمت را روی سایت نمی‌نویسیم»
```
A small brass jeweller's balance scale on the stone slab, with a few plain gold
rings in one shallow pan and small brass calibration weights in the other. Shot
slightly from above. Restrained and quiet.
```

### ۷.۲ — `18-or-21-karat.png` — «عیار ۱۸ یا ۲۱؟»
```
Two plain yellow gold bands lying side by side on the stone slab, close enough to
compare. The left one very slightly paler and cooler in tone, the right one very
slightly deeper and warmer — the difference subtle, as between 18ct and 21ct, not
exaggerated. Shot from directly above.
```

### ۷.۳ — `ten-thousand-openings.png` — «قفلی که ده هزار بار باز می‌شود»
```
Extreme macro of a single yellow gold box clasp on a chain bracelet, open, with
its small hinged safety catch lifted. The clasp fills most of the frame; the
chain runs softly out of focus to either side. Technical and precise, the way an
engineering detail is photographed.
```

---

## ۸ — تصویر اشتراک‌گذاری (۱ تصویر، **landscape ۱۵۳۶×۱۰۲۴**)

### ۸.۱ — `og-share.png`
این همان چیزی است که وقتی لینک سایت در واتس‌اپ یا تلگرام فرستاده می‌شود دیده می‌شود.
```
A single fine yellow gold chain necklace with one small pearl pendant, arranged
in the LEFT THIRD of a wide horizontal frame on the warm off-white background.
The entire right two-thirds is empty background with nothing in it. Wide, calm,
with a lot of negative space.
```
**مهم:** دو سوم راست باید خالی بماند — بعداً نام برند روی همان قسمت گذاشته می‌شود. متنی در پرامپت نخواه؛ مدل حروف بی‌معنا می‌سازد.

---

## ۹ — وقتی تصاویر آماده شد

فایل‌ها را در پوشه‌هایی که بخش ۱ گفت بگذار و به من بگو. من این‌ها را انجام می‌دهم:

- `<Picture>` از `astro:assets` جای خط‌نگاره‌های SVG می‌نشیند — تولید WebP و AVIF، چند سایز responsive، و `width/height` برای CLS صفر
- `alt` دوزبانه برای هرکدام، از نام و مشخصات همان قطعه در `catalog.ts`
- `loading="lazy"` برای همهٔ تصاویر زیر تای صفحه و `eager` فقط برای هیرو
- اندازه‌گیری مجدد: حجم هر تصویر، زمان لود، و CLS

**اگر بعضی تصاویر نشد، اشکالی ندارد** — خط‌نگارهٔ SVG فعلی به‌عنوان جانشین می‌ماند و سایت با ترکیبی از عکس و خط‌نگاره هم کاملاً منسجم است. عکس‌ها را هر تعداد که آماده شد بده؛ لازم نیست همهٔ ۲۳ تا با هم باشند.
