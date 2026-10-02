import type { Bi } from './site';

/** Which line-art motif renders in a piece's frame. */
export type Motif = 'ring' | 'necklace' | 'earring' | 'bracelet';

/** Warm tonal grounds for frames. Decorative only — never carries meaning. */
export type Tone = 'stone' | 'sand' | 'clay' | 'ash';

export interface Collection {
  slug: string;
  motif: Motif;
  tone: Tone;
  name: Bi;
  tagline: Bi;
  intro: Bi;
}

export interface Product {
  slug: string;
  collection: string;
  ref: string;
  motif: Motif;
  tone: Tone;
  name: Bi;
  material: Bi;
  karat: 18 | 21 | 24;
  weightGrams: number;
  stones?: Bi;
  story: Bi;
  featured?: boolean;
}

export interface Post {
  slug: string;
  date: string; // ISO
  minutes: number;
  title: Bi;
  excerpt: Bi;
  body: { fa: string[]; en: string[] };
}

export const collections: Collection[] = [
  {
    slug: 'rings',
    motif: 'ring',
    tone: 'stone',
    name: { fa: 'انگشتر', en: 'Rings' },
    tagline: { fa: 'فرم بسته، وزن متعادل', en: 'A closed form, balanced weight' },
    intro: {
      fa: 'انگشتر سخت‌ترین قطعه برای ساخت است، چون بیشترین ضربه را می‌خورد و کمترین جا را برای پنهان کردن خطا دارد. رینگ‌های ما از یک تکه ساخته می‌شوند، نه از دو نیمهٔ جوش‌خورده.',
      en: 'A ring is the hardest thing to make well: it takes the most knocks and leaves the least room to hide a mistake. Ours are formed from a single piece rather than two soldered halves.',
    },
  },
  {
    slug: 'necklaces',
    motif: 'necklace',
    tone: 'sand',
    name: { fa: 'گردن‌آویز', en: 'Necklaces' },
    tagline: { fa: 'خطی که با بدن حرکت می‌کند', en: 'A line that moves with the body' },
    intro: {
      fa: 'در گردن‌آویز همه‌چیز به قفل و به نقطهٔ اتصال آویز برمی‌گردد. این دو جا را ما دستی و با ضخامت بیشتر از استاندارد می‌سازیم، چون هر شکستگی‌ای که دیده‌ایم از همین دو نقطه شروع شده است.',
      en: 'With a necklace everything comes back to the clasp and to the point where the pendant hangs. We make both by hand and heavier than standard, because every failure we have ever seen started at one of them.',
    },
  },
  {
    slug: 'earrings',
    motif: 'earring',
    tone: 'clay',
    name: { fa: 'گوشواره', en: 'Earrings' },
    tagline: { fa: 'سبک، متقارن، بی‌صدا', en: 'Light, symmetrical, silent' },
    intro: {
      fa: 'گوشواره باید سبک باشد ولی نه توخالی. ما وزن را با فرم کم می‌کنیم، نه با نازک کردن دیوارهٔ طلا — قطعهٔ توخالی در اولین برخورد فرو می‌رود.',
      en: 'An earring must be light without being hollow. We reduce weight through form rather than by thinning the wall of the gold — a hollow piece dents at the first knock.',
    },
  },
  {
    slug: 'bracelets',
    motif: 'bracelet',
    tone: 'ash',
    name: { fa: 'دستبند', en: 'Bracelets' },
    tagline: { fa: 'ساخته‌شده برای هر روز', en: 'Built for every day' },
    intro: {
      fa: 'دستبند بیشتر از هر قطعهٔ دیگری به میز، در و لبهٔ ماشین می‌خورد. برای همین در این خط از عیار پایین‌تر و آلیاژ سخت‌تر استفاده می‌کنیم؛ درخشش کمی آرام‌تر است، دوام بسیار بیشتر.',
      en: 'A bracelet meets desks, doors and car edges more than anything else you own. So this line uses a lower karat and a harder alloy: slightly calmer lustre, considerably longer life.',
    },
  },
];

export const products: Product[] = [
  // --- Rings -------------------------------------------------------------
  {
    slug: 'negar-solitaire',
    collection: 'rings',
    ref: 'MR-101',
    motif: 'ring',
    tone: 'stone',
    name: { fa: 'انگشتر نگار', en: 'Negar Solitaire' },
    material: { fa: 'طلای زرد ۱۸ عیار', en: '18ct yellow gold' },
    karat: 18,
    weightGrams: 3.4,
    stones: { fa: 'یک برلیان گرد، ۰٫۳۰ قیراط، رنگ F، پاکی VS۱', en: 'One round brilliant, 0.30ct, colour F, clarity VS1' },
    story: {
      fa: 'نشیمن سنگ را عمداً پایین گرفته‌ایم تا انگشتر زیر دستکش و آستین گیر نکند. چنگ‌ها شش‌تایی‌اند نه چهارتایی؛ کمی بیشتر از سنگ را می‌پوشانند ولی احتمال افتادن سنگ را تقریباً صفر می‌کنند.',
      en: 'The setting sits deliberately low so the ring does not catch on gloves or sleeves. There are six claws rather than four: they cover slightly more of the stone, but they reduce the chance of losing it to almost nothing.',
    },
    featured: true,
  },
  {
    slug: 'parand-band',
    collection: 'rings',
    ref: 'MR-104',
    motif: 'ring',
    tone: 'sand',
    name: { fa: 'حلقهٔ پرند', en: 'Parand Band' },
    material: { fa: 'طلای زرد ۱۸ عیار، پرداخت مات', en: '18ct yellow gold, matte finish' },
    karat: 18,
    weightGrams: 4.8,
    story: {
      fa: 'یک حلقهٔ ساده با مقطع کمی گنبدی. سطح مات با ساب دستی گرفته می‌شود نه با سندبلاست، چون ساب دستی با گذشت سال‌ها براق می‌شود و کهنه به نظر نمی‌رسد.',
      en: 'A plain band with a slightly domed section. The matte surface is hand-abraded rather than sandblasted, because a hand finish polishes up over the years instead of looking worn out.',
    },
  },
  {
    slug: 'mehr-signet',
    collection: 'rings',
    ref: 'MR-112',
    motif: 'ring',
    tone: 'ash',
    name: { fa: 'انگشتر مهر', en: 'Mehr Signet' },
    material: { fa: 'طلای زرد ۲۱ عیار', en: '21ct yellow gold' },
    karat: 21,
    weightGrams: 7.2,
    story: {
      fa: 'سطح بالای انگشتر خالی گذاشته شده تا هر نقشی که بخواهید روی آن حجاری شود. حجاری دستی در کارگاه خودمان انجام می‌شود و حدود دو هفته وقت می‌گیرد.',
      en: 'The face is left blank for any device you want engraved. Engraving is done by hand in our own workshop and takes about two weeks.',
    },
  },

  // --- Necklaces ---------------------------------------------------------
  {
    slug: 'sepid-pendant',
    collection: 'necklaces',
    ref: 'MN-201',
    motif: 'necklace',
    tone: 'sand',
    name: { fa: 'آویز سپید', en: 'Sepid Pendant' },
    material: { fa: 'طلای زرد ۱۸ عیار با زنجیر ۴۵ سانتی', en: '18ct yellow gold on a 45cm chain' },
    karat: 18,
    weightGrams: 2.6,
    stones: { fa: 'یک مروارید آب‌شور، ۷ میلی‌متر', en: 'One saltwater pearl, 7mm' },
    story: {
      fa: 'مروارید از پایین سوراخ می‌شود و با میلهٔ طلا از داخل قفل می‌شود؛ روش رایج‌تر چسب است که بعد از چند سال باز می‌شود. طول زنجیر قابل سفارش است.',
      en: 'The pearl is drilled from below and locked with a gold pin through its core; the common alternative is adhesive, which lets go after a few years. Chain length is made to order.',
    },
    featured: true,
  },
  {
    slug: 'tar-chain',
    collection: 'necklaces',
    ref: 'MN-208',
    motif: 'necklace',
    tone: 'stone',
    name: { fa: 'زنجیر تار', en: 'Tar Chain' },
    material: { fa: 'طلای زرد ۱۸ عیار، بافت ونیزی', en: '18ct yellow gold, box link' },
    karat: 18,
    weightGrams: 5.9,
    story: {
      fa: 'هر حلقه جداگانه جوش داده می‌شود؛ زنجیرهای ماشینی معمولاً پرس می‌شوند و همین باعث می‌شود زیر کشش باز شوند. قفل، فنری با زبانهٔ ایمنی دوم است.',
      en: 'Every link is soldered individually. Machine chain is usually pressed, which is why it opens under strain. The clasp is a spring ring with a second safety catch.',
    },
  },
  {
    slug: 'naghsh-collar',
    collection: 'necklaces',
    ref: 'MN-215',
    motif: 'necklace',
    tone: 'clay',
    name: { fa: 'گردن‌بند نقش', en: 'Naghsh Collar' },
    material: { fa: 'طلای زرد ۲۱ عیار، حجاری دستی', en: '21ct yellow gold, hand engraved' },
    karat: 21,
    weightGrams: 18.4,
    story: {
      fa: 'نقش این قطعه از کاشی‌کاری دورهٔ صفوی برداشته شده و به‌صورت دستی روی هفت قطعهٔ جداگانه حجاری می‌شود. سنگین‌ترین قطعهٔ مجموعه است و برای هر سفارش از نو ساخته می‌شود.',
      en: 'The motif is taken from Safavid tilework and hand-engraved across seven separate plates. It is the heaviest piece in the collection and is made fresh for each order.',
    },
  },

  // --- Earrings ----------------------------------------------------------
  {
    slug: 'shabnam-drop',
    collection: 'earrings',
    ref: 'ME-301',
    motif: 'earring',
    tone: 'clay',
    name: { fa: 'گوشوارهٔ شبنم', en: 'Shabnam Drop' },
    material: { fa: 'طلای زرد ۱۸ عیار', en: '18ct yellow gold' },
    karat: 18,
    weightGrams: 2.1,
    stones: { fa: 'دو برلیان گرد، مجموعاً ۰٫۱۴ قیراط', en: 'Two round brilliants, 0.14ct total' },
    story: {
      fa: 'قطرهٔ آویز از محور خودش آزاد می‌چرخد، بنابراین همیشه عمود می‌ایستد و به جلو خم نمی‌شود. پشت‌بند پیچی است نه فشاری.',
      en: 'The drop turns freely on its own axis, so it always hangs true instead of tipping forward. The back is a screw fitting rather than a friction push.',
    },
    featured: true,
  },
  {
    slug: 'halgheh-hoop',
    collection: 'earrings',
    ref: 'ME-307',
    motif: 'earring',
    tone: 'stone',
    name: { fa: 'حلقهٔ گوش', en: 'Halgheh Hoop' },
    material: { fa: 'طلای زرد ۱۸ عیار', en: '18ct yellow gold' },
    karat: 18,
    weightGrams: 3.3,
    story: {
      fa: 'قطر ۲۴ میلی‌متر با مقطع مثلثی که نور را از سه جهت برمی‌گرداند. لولا در پایین حلقه قرار گرفته تا در دید نباشد.',
      en: '24mm across, with a triangular section that returns light from three directions. The hinge sits at the bottom of the hoop so it stays out of sight.',
    },
  },
  {
    slug: 'daneh-stud',
    collection: 'earrings',
    ref: 'ME-312',
    motif: 'earring',
    tone: 'ash',
    name: { fa: 'گوشوارهٔ دانه', en: 'Daneh Stud' },
    material: { fa: 'طلای زرد ۱۸ عیار، پرداخت آینه‌ای', en: '18ct yellow gold, mirror polish' },
    karat: 18,
    weightGrams: 1.4,
    story: {
      fa: 'سبک‌ترین قطعهٔ مجموعه و همان چیزی که بیشتر مشتری‌ها هر روز می‌پوشند. کرهٔ توپر است، نه توخالی؛ به همین دلیل بعد از سال‌ها هم فرم خودش را دارد.',
      en: 'The lightest piece we make, and the one most clients wear daily. The sphere is solid rather than hollow, which is why it still holds its shape years later.',
    },
  },

  // --- Bracelets ---------------------------------------------------------
  {
    slug: 'pahn-bangle',
    collection: 'bracelets',
    ref: 'MB-401',
    motif: 'bracelet',
    tone: 'ash',
    name: { fa: 'دستبند پهن', en: 'Pahn Bangle' },
    material: { fa: 'طلای زرد ۱۸ عیار', en: '18ct yellow gold' },
    karat: 18,
    weightGrams: 12.7,
    story: {
      fa: 'عرض ۹ میلی‌متر با لبه‌های گرد شده تا زیر آستین گیر نکند. داخل قطعه صاف و صیقلی است، چون سطح ناصاف داخلی چیزی است که پوست را آزار می‌دهد.',
      en: '9mm wide with rounded edges so it does not catch under a sleeve. The inside is flat and polished, because an uneven inner surface is what irritates skin.',
    },
    featured: true,
  },
  {
    slug: 'zanjir-bracelet',
    collection: 'bracelets',
    ref: 'MB-406',
    motif: 'bracelet',
    tone: 'sand',
    name: { fa: 'دستبند زنجیر', en: 'Zanjir Bracelet' },
    material: { fa: 'طلای زرد ۱۸ عیار', en: '18ct yellow gold' },
    karat: 18,
    weightGrams: 8.1,
    story: {
      fa: 'قفل جعبه‌ای با زبانهٔ ایمنی، طراحی‌شده برای روزی چند بار باز و بسته شدن. همین قفل را برای ده هزار چرخه آزمایش کرده‌ایم.',
      en: 'A box clasp with a safety catch, designed to be opened several times a day. We have tested this clasp to ten thousand cycles.',
    },
  },
  {
    slug: 'bazu-cuff',
    collection: 'bracelets',
    ref: 'MB-411',
    motif: 'bracelet',
    tone: 'stone',
    name: { fa: 'بازوبند', en: 'Bazu Cuff' },
    material: { fa: 'طلای زرد ۲۱ عیار', en: '21ct yellow gold' },
    karat: 21,
    weightGrams: 21.5,
    story: {
      fa: 'قطعهٔ باز که با فشار دست تنظیم می‌شود. برای اینکه بعد از چند بار باز و بسته شدن شل نشود، ضخامت در نقطهٔ خم بیشتر از بقیهٔ قطعه است.',
      en: 'An open form adjusted by hand. So that it does not slacken after repeated opening, the metal is thicker at the point of flex than anywhere else.',
    },
  },
];

export const posts: Post[] = [
  {
    slug: 'why-no-prices',
    date: '2026-08-18',
    minutes: 3,
    title: { fa: 'چرا قیمت را روی سایت نمی‌نویسیم', en: 'Why we do not publish prices' },
    excerpt: {
      fa: 'سؤالی که هر هفته می‌پرسند، و جوابش کوتاه‌تر از آن است که فکر می‌کنید.',
      en: 'A question we are asked every week, with a shorter answer than you would expect.',
    },
    body: {
      fa: [
        'قیمت یک قطعهٔ طلا از سه بخش تشکیل می‌شود: وزن ضرب در نرخ روز، اجرت ساخت، و مالیات. از این سه، فقط اجرت ساخت ثابت است. نرخ روز در یک هفتهٔ معمولی چند درصد جابه‌جا می‌شود و در هفته‌های غیرمعمولی بیشتر.',
        'اگر ما عددی را روی سایت بنویسیم، آن عدد از فردا غلط است. دو راه می‌ماند: یا هر روز همهٔ قیمت‌ها را به‌روز کنیم — که در عمل یعنی گاهی چند ساعت عقب بودن — یا عددی بنویسیم با احتیاط بالا، که یعنی از شما بیشتر بخواهیم تا از نوسان ضرر نکنیم.',
        'هیچ‌کدام درست نیست. به جایش وزن دقیق و عیار هر قطعه را می‌نویسیم و اجرت ساخت را بدون رودربایستی می‌گوییم. با این دو عدد، شما می‌توانید قیمت را با نرخ همان لحظه خودتان حساب کنید — و می‌توانید ما را با هر جای دیگری مقایسه کنید.',
        'این تنها سیاست قیمت‌گذاری‌ای است که در آن ما و شما به یک عدد نگاه می‌کنیم.',
      ],
      en: [
        'The price of a gold piece has three parts: weight times the day’s rate, the making charge, and tax. Of those three, only the making charge is fixed. The rate moves a few percent in an ordinary week, and more in an unusual one.',
        'If we printed a number on the site, that number would be wrong by tomorrow. Two options remain: update every price every day — which in practice means being a few hours behind — or publish a cautious number, which means asking you for more so that we do not lose on the swing.',
        'Neither is honest. Instead we publish the exact weight and karat of each piece, and we state the making charge plainly. With those two numbers you can calculate the price against the rate at this moment — and you can compare us with anyone else.',
        'It is the only pricing policy where you and we are both looking at the same figure.',
      ],
    },
  },
  {
    slug: '18-or-21-karat',
    date: '2026-07-02',
    minutes: 4,
    title: { fa: 'عیار ۱۸ یا ۲۱؟', en: '18 or 21 karat?' },
    excerpt: {
      fa: 'عیار بالاتر همیشه بهتر نیست. بستگی دارد قطعه را کجا و چقدر می‌پوشید.',
      en: 'Higher is not automatically better. It depends where and how often the piece is worn.',
    },
    body: {
      fa: [
        'عیار یعنی نسبت طلای خالص به آلیاژ. طلای ۲۴ عیار خالص است و به همین دلیل نرم؛ با ناخن هم رد می‌افتد. هرچه عیار پایین‌تر بیاید، آلیاژ بیشتر و قطعه سخت‌تر می‌شود.',
        'برای انگشتر و دستبند — یعنی چیزهایی که هر روز به میز و در می‌خورند — عیار ۱۸ انتخاب درست‌تری است. سختی بیشتر یعنی خط کمتر و نشیمن سنگ محکم‌تر. رنگش هم کمی آرام‌تر است که به نظر ما به فرم‌های مینیمال بهتر می‌آید.',
        'برای گردن‌آویز و قطعه‌های مناسبتی که کمتر ضربه می‌خورند، ۲۱ عیار منطقی است: رنگ گرم‌تر و پرتر، و ارزش طلای بیشتر در همان وزن. اگر قطعه را به چشم پشتوانهٔ مالی هم نگاه می‌کنید، عیار بالاتر نقدشوندگی بهتری دارد.',
        'یک نکتهٔ عملی که کمتر گفته می‌شود: عیارها را در یک دست قاطی نکنید. طلای ۲۱ نرم‌تر است و اگر کنار ۱۸ بسته شود، همان است که خط می‌افتد.',
      ],
      en: [
        'Karat is the proportion of pure gold to alloy. 24ct is pure and therefore soft — a fingernail marks it. The lower the karat, the more alloy, and the harder the piece.',
        'For rings and bracelets — the things that meet desks and doors daily — 18ct is the sounder choice. More hardness means fewer scratches and a firmer stone setting. Its colour is slightly calmer too, which we think suits minimal forms better.',
        'For necklaces and occasional pieces that take fewer knocks, 21ct makes sense: a warmer, fuller colour, and more gold value in the same weight. If you also regard the piece as a store of value, the higher karat is easier to liquidate.',
        'One practical point that is rarely mentioned: do not mix karats on one wrist. 21ct is softer, and worn beside 18ct it is the one that will scratch.',
      ],
    },
  },
  {
    slug: 'ten-thousand-openings',
    date: '2026-05-21',
    minutes: 3,
    title: { fa: 'قفلی که ده هزار بار باز می‌شود', en: 'A clasp built for ten thousand openings' },
    excerpt: {
      fa: 'قطعه‌ها معمولاً از جایی که کسی نگاهش نمی‌کند خراب می‌شوند.',
      en: 'Pieces fail at the place nobody looks at.',
    },
    body: {
      fa: [
        'وقتی قطعه‌ای برای تعمیر می‌آید، در بیشتر مواقع مشکل نه در طرح است و نه در سنگ. مشکل قفل است. جایی که کسی در عکس نگاهش نمی‌کند و در خرید هم دربارهٔ‌ش سؤال نمی‌شود.',
        'قفل فنری استاندارد برای حدود هزار چرخه طراحی شده. اگر دستبندی را هر روز صبح ببندید و هر شب باز کنید، سالی حدود هفتصد بار می‌شود. یعنی در سال دوم شما در محدودهٔ خرابی هستید.',
        'به همین دلیل قفل‌های ما جعبه‌ای‌اند با زبانهٔ ایمنی جداگانه، و فنر از سیم ضخیم‌تری پیچیده می‌شود. روی میز کار یک دستگاه ساده داریم که قفل را باز و بسته می‌کند؛ هر طرح جدید باید ده هزار چرخه را بدون شل شدن رد کند تا وارد تولید شود.',
        'این تنها بخشی از قطعه است که هیچ‌کس در ویترین به آن دست نمی‌زند و ما بیشترین وقت را رویش می‌گذاریم.',
      ],
      en: [
        'When a piece comes in for repair, the problem is usually neither the design nor the stone. It is the clasp — the part nobody looks at in a photograph and nobody asks about at the counter.',
        'A standard spring ring is engineered for roughly a thousand cycles. Fasten a bracelet each morning and open it each night and you are at about seven hundred a year. Which puts you inside the failure range in year two.',
        'So our clasps are box fittings with a separate safety catch, and the spring is wound from heavier wire. On the bench we keep a simple rig that opens and closes a clasp repeatedly; a new design has to pass ten thousand cycles without slackening before it goes into production.',
        'It is the one part of a piece nobody touches in the cabinet, and the part we spend the most time on.',
      ],
    },
  },
];

// --- lookups ---------------------------------------------------------------

export const getCollection = (slug: string) => collections.find((c) => c.slug === slug);

export const productsIn = (slug: string) => products.filter((p) => p.collection === slug);

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const featured = () => products.filter((p) => p.featured);

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const postsByDate = () => [...posts].sort((a, b) => b.date.localeCompare(a.date));

/** Up to `n` other pieces from the same collection. */
export const related = (product: Product, n = 3) =>
  products.filter((p) => p.collection === product.collection && p.slug !== product.slug).slice(0, n);
