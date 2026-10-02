/**
 * All user-facing copy, in both languages.
 *
 * This is PLACEHOLDER editorial copy written to be plausible and well-formed,
 * not client-approved text. Replace the strings; do not change the shape.
 */

import type { Lang } from '../data/site';

export const ui = {
  fa: {
    dir: 'rtl',
    localeName: 'فارسی',
    otherLocaleName: 'English',

    nav: {
      home: 'خانه',
      collections: 'مجموعه‌ها',
      about: 'دربارهٔ ما',
      journal: 'یادداشت‌ها',
      care: 'نگهداری',
      faq: 'پرسش‌های متداول',
      contact: 'تماس و نشانی',
    },

    common: {
      skip: 'رفتن به محتوای اصلی',
      menu: 'منو',
      close: 'بستن',
      openMenu: 'باز کردن منو',
      closeMenu: 'بستن منو',
      enquire: 'استعلام قیمت',
      enquireAria: 'استعلام قیمت این قطعه',
      viewPiece: 'مشاهدهٔ قطعه',
      allCollections: 'همهٔ مجموعه‌ها',
      backToCollections: 'بازگشت به مجموعه‌ها',
      priceOnRequest: 'قیمت بر اساس نرخ روز',
      priceNote: 'قیمت طلا روزانه تغییر می‌کند؛ برای نرخ امروز تماس بگیرید.',
      readMore: 'ادامهٔ مطلب',
      piecesCount: (n: number) => `${toFa(n)} قطعه`,
      langSwitch: 'تغییر زبان به انگلیسی',
      phone: 'تلفن',
      address: 'نشانی',
      hours: 'ساعات کار',
      email: 'ایمیل',
    },

    home: {
      eyebrow: 'از سال ۱۳۵۲',
      displayA: 'طلا،',
      displayB: 'آرام و ماندگار',
      lead: 'هر قطعه در کارگاه خودمان در تهران ساخته می‌شود — با دست، با حوصله، و با طلایی که منشأ آن را می‌شناسیم. ما چیزی نمی‌سازیم که فصلی باشد.',
      ctaPrimary: 'دیدن مجموعه‌ها',
      ctaSecondary: 'رزرو وقت حضوری',
      collectionsEyebrow: 'مجموعه‌ها',
      collectionsHeading: 'چهار خط، یک زبان',
      collectionsLead: 'مجموعه‌ها بر اساس فرم تقسیم شده‌اند، نه مناسبت. هر خط منطق خودش را دارد.',
      craftEyebrow: 'کارگاه',
      craftHeading: 'آنچه با دست ساخته می‌شود، با دست هم تمام می‌شود',
      craftBody:
        'در کارگاه ما ریخته‌گری، مغزی‌کاری، سنگ‌نشانی و پرداخت همه زیر یک سقف انجام می‌شود. این یعنی هر قطعه پیش از آنکه به ویترین برسد، از دست چهار نفر گذشته است — و هر چهار نفر را می‌شناسیم.',
      craftPoints: [
        {
          title: 'طلای با منشأ مشخص',
          body: 'تمام طلای مصرفی ما دارای فاکتور و شناسنامهٔ ذوب است. هیچ قطعه‌ای بدون مدرک وارد کارگاه نمی‌شود.',
        },
        {
          title: 'ساخت در تهران',
          body: 'هیچ مرحله‌ای برون‌سپاری نمی‌شود. از مدل‌سازی تا پرداخت نهایی، همه در کارگاه خودمان.',
        },
        {
          title: 'ضمانت مادام‌العمر ساخت',
          body: 'هر ایرادی که از ساخت باشد، تا هر زمان، بدون هزینه اصلاح می‌شود.',
        },
      ],
      featuredEyebrow: 'انتخاب سردبیر',
      featuredHeading: 'قطعه‌هایی که بیشتر از بقیه برمی‌گردند',
      featuredLead: 'این‌ها را مشتری‌ها بیشتر از همه دوباره سفارش می‌دهند — برای خودشان یا برای هدیه.',
      visitEyebrow: 'حضوری',
      visitHeading: 'طلا را باید در دست گرفت',
      visitBody:
        'عکس هیچ‌وقت وزن و درخشش واقعی را نشان نمی‌دهد. یک وقت بگیرید، چای بخورید، و قطعه‌ها را از نزدیک ببینید. هیچ الزامی به خرید نیست.',
      visitCta: 'رزرو وقت',
      captionVisit: 'میز کار کارگاه تهران. همین‌جا ساخته می‌شود و همین‌جا می‌توانید ببینید.',
    },

    collections: {
      eyebrow: 'مجموعه‌ها',
      title: 'همهٔ مجموعه‌ها',
      lead: 'چهار خط اصلی، هرکدام با منطق فرم و کاربرد خودش. برای دیدن قطعه‌های هر خط، رویش بزنید.',
      inThisCollection: 'قطعه‌های این مجموعه',
      otherCollections: 'مجموعه‌های دیگر',
    },

    product: {
      backLabel: 'بازگشت به',
      specsHeading: 'مشخصات',
      karat: 'عیار',
      weight: 'وزن تقریبی',
      weightUnit: 'گرم',
      stones: 'سنگ',
      collection: 'مجموعه',
      sku: 'کد قطعه',
      storyHeading: 'دربارهٔ این قطعه',
      enquiryHeading: 'استعلام این قطعه',
      enquiryLead:
        'وزن هر قطعه دست‌ساز کمی متفاوت است و قیمت به نرخ روز طلا بستگی دارد. فرم را پر کنید؛ همان روز کاری با شما تماس می‌گیریم.',
      relatedHeading: 'قطعه‌های مرتبط',
      madeToOrder: 'ساخت به سفارش',
      madeToOrderNote: 'امکان تغییر سایز و عیار وجود دارد. مهلت ساخت معمولاً ۱۰ تا ۱۴ روز کاری است.',
    },

    about: {
      eyebrow: 'دربارهٔ ما',
      title: 'سه نسل، یک کارگاه',
      lead: 'مهرآوا سال ۱۳۵۲ با یک میز کار و یک کورهٔ کوچک شروع شد. امروز همان میز هنوز در کارگاه است.',
      captionCraft: 'نشاندن سنگ با قلم دستی — همان کاری که از روز اول با دست انجام شده است.',
      body: [
        'پدربزرگ ما کارش را با تعمیر شروع کرد، نه با ساخت. سال‌ها قطعه‌های شکستهٔ مردم را درست کرد و در همان سال‌ها یاد گرفت که طلا کجا می‌شکند، کدام درز دوام نمی‌آورد، و چرا یک بند ظریف بعد از دو سال باز می‌شود. وقتی خودش شروع به ساخت کرد، از اول جاهایی را محکم می‌گرفت که بقیه نادیده می‌گرفتند.',
        'این نگاه هنوز روش کار ماست. ما قطعه‌ای نمی‌سازیم که در عکس خوب باشد و در استفادهٔ روزمره خراب شود. اگر بندی قرار است هر روز بسته و باز شود، قفلش را برای ده هزار بار طراحی می‌کنیم، نه برای صد بار.',
        'ما مغازهٔ بزرگی نیستیم و نمی‌خواهیم باشیم. سالی حدود چهارصد قطعه می‌سازیم، همه در تهران، همه با دست. اگر دنبال حجم و تنوع بی‌نهایت هستید، جای بهتری هست. اگر دنبال قطعه‌ای هستید که سی سال بعد هم بتوان تعمیرش کرد، درست آمده‌اید.',
      ],
      valuesEyebrow: 'اصول',
      valuesHeading: 'چهار چیزی که سرشان معامله نمی‌کنیم',
      values: [
        { title: 'شفافیت وزن', body: 'وزن دقیق هر قطعه روی فاکتور نوشته می‌شود. بدون گرد کردن به نفع ما.' },
        { title: 'عیار واقعی', body: 'هر قطعه با مهر عیار رسمی و برگهٔ آزمایش تحویل داده می‌شود.' },
        { title: 'بی‌فشار', body: 'هیچ‌کس در مغازهٔ ما زیر فشار فروش قرار نمی‌گیرد. وقت بگذارید.' },
        { title: 'تعمیر همیشگی', body: 'هر قطعه‌ای که ساخته‌ایم را تا همیشه تعمیر می‌کنیم؛ حتی اگر سه نسل گذشته باشد.' },
      ],
    },

    care: {
      eyebrow: 'نگهداری',
      title: 'مراقبت از طلا',
      lead: 'طلا زنگ نمی‌زند، ولی خط می‌افتد و کدر می‌شود. چند کار ساده عمر درخشش را چند برابر می‌کند.',
      items: [
        {
          title: 'آخرین چیزی که می‌پوشید، اولین چیزی که در می‌آورید',
          body: 'عطر، اسپری مو و کرم روی سطح طلا لایه می‌سازند و درخشش را می‌گیرند. زیورآلات را بعد از آماده شدن کامل بپوشید و پیش از شب‌خواب در بیاورید.',
        },
        {
          title: 'کلر دشمن جدی است',
          body: 'آب استخر و وان آب گرم به مرور اتصالات و درزهای جوش را تضعیف می‌کند. پیش از شنا همه‌چیز را در بیاورید — این تنها موردی است که سختگیر هستیم.',
        },
        {
          title: 'شست‌وشوی خانگی، درست انجام شده',
          body: 'یک کاسه آب گرم با چند قطره مایع ظرف‌شویی بی‌رنگ، ده دقیقه خیساندن، بعد مسواک بسیار نرم روی درزها و آبکشی با آب ولرم. با پارچهٔ نخی خشک کنید، نه دستمال کاغذی.',
        },
        {
          title: 'جداگانه نگه دارید',
          body: 'طلا روی طلا خط می‌اندازد. هر قطعه در کیسهٔ پارچه‌ای خودش، دور از نور مستقیم. زنجیرها را نیم‌بسته بگذارید تا گره نخورند.',
        },
        {
          title: 'سنگ‌ها قاعدهٔ خودشان را دارند',
          body: 'مروارید و فیروزه منفذ دارند و هر ماده شیمیایی را جذب می‌کنند؛ فقط با پارچهٔ نرم مرطوب پاک شوند. زمرد در برابر ضربه شکننده‌تر از آن است که به نظر می‌رسد.',
        },
        {
          title: 'سالی یک بار بیاورید',
          body: 'بازبینی قفل‌ها، محکم‌کاری سنگ‌ها و پرداخت حرفه‌ای برای قطعه‌های خودمان بدون هزینه است. ده دقیقه وقت می‌گیرد.',
        },
      ],
    },

    faq: {
      eyebrow: 'پرسش‌های متداول',
      title: 'سؤال‌هایی که زیاد می‌پرسند',
      lead: 'اگر جوابتان اینجا نبود، زنگ بزنید یا پیام بدهید.',
      items: [
        {
          q: 'چرا قیمت‌ها روی سایت نوشته نشده؟',
          a: 'چون قیمت طلا روزانه و گاهی ساعتی تغییر می‌کند. نوشتن عددی که فردا غلط است، بی‌احترامی به وقت شماست. برای هر قطعه فرم استعلام بگذارید یا زنگ بزنید؛ نرخ همان لحظه را می‌گوییم.',
        },
        {
          q: 'قیمت نهایی چطور حساب می‌شود؟',
          a: 'وزن قطعه ضرب در نرخ روز عیار مربوطه، به‌علاوهٔ اجرت ساخت و مالیات بر ارزش افزوده. اجرت ساخت هر قطعه ثابت است و پیش از سفارش به شما گفته می‌شود — هیچ رقمی در لحظهٔ تحویل اضافه نمی‌شود.',
        },
        {
          q: 'امکان تغییر سایز هست؟',
          a: 'بله. انگشترها تا دو سایز بالا و پایین قابل تغییرند و این کار برای خرید اول بدون هزینه است. زنجیرها را در هر طولی می‌سازیم.',
        },
        {
          q: 'سفارش اختصاصی می‌گیرید؟',
          a: 'بله، ولی محدود. سالی چند پروژهٔ اختصاصی بیشتر قبول نمی‌کنیم تا کیفیت پایین نیاید. روند از یک جلسهٔ حضوری شروع می‌شود و معمولاً شش تا ده هفته طول می‌کشد.',
        },
        {
          q: 'طلای قدیمی را تحویل می‌گیرید؟',
          a: 'بله. طلای شما وزن و عیارسنجی می‌شود و به نرخ روز از مبلغ سفارش کم می‌شود. سنگ‌های قطعهٔ قدیمی را هم می‌توانیم در طرح جدید بنشانیم.',
        },
        {
          q: 'ارسال به شهرهای دیگر دارید؟',
          a: 'بله، با بیمهٔ کامل و پست ویژه. برای قطعه‌های بالای مبلغی مشخص، ارسال با پیک اختصاصی و تحویل با احراز هویت انجام می‌شود.',
        },
        {
          q: 'مرجوعی چطور است؟',
          a: 'قطعه‌های موجود تا هفت روز، دست‌نخورده و با فاکتور، قابل مرجوع هستند. سفارش‌های اختصاصی به دلیل ساخت بر اساس اندازهٔ شما مرجوع نمی‌شوند؛ ولی اصلاح و تغییر آن‌ها همیشه ممکن است.',
        },
      ],
    },

    journal: {
      eyebrow: 'یادداشت‌ها',
      title: 'از کارگاه',
      lead: 'نه وبلاگ سِئویی. چند یادداشت کوتاه دربارهٔ کاری که می‌کنیم.',
      readingTime: (m: number) => `${toFa(m)} دقیقه مطالعه`,
      backToJournal: 'بازگشت به یادداشت‌ها',
      more: 'یادداشت‌های دیگر',
    },

    contact: {
      eyebrow: 'تماس',
      title: 'سر بزنید یا بنویسید',
      lead: 'برای دیدن قطعه‌ها حضوری وقت بگیرید، یا اگر سؤالی دارید فرم را پر کنید. همان روز کاری جواب می‌دهیم.',
      showroomHeading: 'گالری',
      formHeading: 'فرم تماس',
      mapNote: 'ورودی گالری از کوچهٔ نگارستان است، نه از خیابان اصلی.',
    },

    form: {
      name: 'نام و نام خانوادگی',
      namePlaceholder: '',
      phone: 'شمارهٔ تماس',
      phoneHint: 'برای اعلام نرخ روز، تماس تلفنی سریع‌تر است.',
      email: 'ایمیل',
      emailOptional: 'اختیاری',
      piece: 'قطعهٔ موردنظر',
      pieceAny: 'مطمئن نیستم / مشورت می‌خواهم',
      subject: 'موضوع',
      subjectOptions: ['استعلام قیمت', 'رزرو وقت حضوری', 'سفارش اختصاصی', 'تعمیر و نگهداری', 'سایر'],
      message: 'توضیحات',
      messageHint: 'اگر سایز، وزن یا بودجهٔ مشخصی در ذهن دارید، همین‌جا بنویسید.',
      required: 'الزامی',
      submit: 'ارسال درخواست',
      errName: 'نام را وارد کنید.',
      errPhone: 'شمارهٔ تماس معتبر وارد کنید.',
      errEmail: 'ایمیل معتبر وارد کنید یا این فیلد را خالی بگذارید.',
      errMessage: 'کمی توضیح بنویسید تا بدانیم چه کمکی می‌توانیم بکنیم.',
      errorSummaryTitle: 'برای ارسال، این موارد را درست کنید:',
      success: 'درخواست شما ثبت شد. همان روز کاری تماس می‌گیریم.',
      successNote: 'این فرم نمایشی است و به جایی ارسال نمی‌شود.',
      privacyNote: 'شمارهٔ شما فقط برای پاسخ به همین درخواست استفاده می‌شود.',
    },

    footer: {
      exploreHeading: 'گشت‌وگذار',
      helpHeading: 'راهنما',
      visitHeading: 'گالری',
      followHeading: 'ما را دنبال کنید',
      instagram: 'اینستاگرام',
      whatsapp: 'واتس‌اپ',
      rights: (y: number) => `© ${toFa(y)} مهرآوا. همهٔ حقوق محفوظ است.`,
      privacy: 'حریم خصوصی',
      terms: 'شرایط و مقررات',
      demoNote: 'این یک سایت نمایشی است. نام برند، قطعه‌ها و اطلاعات تماس واقعی نیستند.',
    },

    legal: {
      privacyTitle: 'حریم خصوصی',
      privacyLead: 'کوتاه و بدون زبان حقوقی پیچیده، چون واقعاً کار پیچیده‌ای نمی‌کنیم.',
      privacyBody: [
        'ما فقط اطلاعاتی را می‌گیریم که خودتان در فرم تماس می‌نویسید: نام، شمارهٔ تماس، و اگر خواستید ایمیل و توضیحات. از این اطلاعات تنها برای پاسخ به همان درخواست استفاده می‌کنیم.',
        'اطلاعات شما را به هیچ شخص یا شرکتی نمی‌فروشیم و نمی‌دهیم. برای تبلیغات پیامکی هم از شما استفاده نمی‌کنیم مگر خودتان صریحاً بخواهید.',
        'این سایت از کوکی ردیابی و ابزار تبلیغاتی ثالث استفاده نمی‌کند. هیچ اسکریپت تحلیلی سمت ثالثی در صفحه‌ها بارگذاری نمی‌شود.',
        'اگر می‌خواهید اطلاعاتتان را حذف کنیم، یک پیام کافی است. همان روز حذف می‌شود.',
      ],
      termsTitle: 'شرایط و مقررات',
      termsLead: 'چارچوب خرید، ساخت و مرجوعی.',
      termsBody: [
        'قیمت‌ها بر اساس نرخ روز طلا محاسبه می‌شوند و تا زمان ثبت قطعی سفارش تغییرپذیرند. نرخ اعلام‌شده در هر استعلام، تا پایان همان روز کاری معتبر است.',
        'وزن هر قطعهٔ دست‌ساز ممکن است تا حدود پنج درصد با وزن اعلامی تفاوت داشته باشد. وزن نهایی و دقیق روی فاکتور درج می‌شود و مبنای محاسبه همان است.',
        'قطعه‌های موجود تا هفت روز پس از تحویل، در صورت دست‌نخورده بودن و همراه با فاکتور، قابل مرجوع هستند. سفارش‌های اختصاصی که بر اساس اندازه یا طرح شما ساخته شده‌اند مرجوع نمی‌شوند، اما اصلاح آن‌ها همیشه ممکن است.',
        'ضمانت ساخت شامل هر ایراد ناشی از ساخت، جوش، قفل و سنگ‌نشانی است و محدودیت زمانی ندارد. خط و خوردگی ناشی از استفادهٔ روزمره، و همچنین آسیب ناشی از ضربه یا مواد شیمیایی، شامل ضمانت نیست ولی با هزینهٔ منصفانه تعمیر می‌شود.',
      ],
    },

    notFound: {
      code: '۴۰۴',
      title: 'این صفحه پیدا نشد',
      body: 'ممکن است نشانی را اشتباه وارد کرده باشید، یا قطعه‌ای که دنبالش بودید فروخته شده باشد.',
      cta: 'رفتن به مجموعه‌ها',
      ctaHome: 'بازگشت به خانه',
    },
  },

  en: {
    dir: 'ltr',
    localeName: 'English',
    otherLocaleName: 'فارسی',

    nav: {
      home: 'Home',
      collections: 'Collections',
      about: 'About',
      journal: 'Journal',
      care: 'Care',
      faq: 'FAQ',
      contact: 'Visit',
    },

    common: {
      skip: 'Skip to main content',
      menu: 'Menu',
      close: 'Close',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      enquire: 'Enquire',
      enquireAria: 'Enquire about this piece',
      viewPiece: 'View piece',
      allCollections: 'All collections',
      backToCollections: 'Back to collections',
      priceOnRequest: 'Price at the day’s gold rate',
      priceNote: 'The gold price moves daily. Call for today’s rate.',
      readMore: 'Read more',
      piecesCount: (n: number) => (n === 1 ? '1 piece' : `${n} pieces`),
      langSwitch: 'Switch language to Persian',
      phone: 'Telephone',
      address: 'Address',
      hours: 'Hours',
      email: 'Email',
    },

    home: {
      eyebrow: 'Established 1973',
      displayA: 'Gold,',
      displayB: 'quietly permanent',
      lead: 'Every piece is made in our own Tehran workshop — by hand, without hurry, in gold whose origin we can name. We do not make anything seasonal.',
      ctaPrimary: 'View collections',
      ctaSecondary: 'Book an appointment',
      collectionsEyebrow: 'Collections',
      collectionsHeading: 'Four lines, one language',
      collectionsLead: 'Divided by form rather than occasion. Each line follows its own logic.',
      craftEyebrow: 'The workshop',
      craftHeading: 'What is made by hand is finished by hand',
      craftBody:
        'Casting, setting, stone work and final polish all happen under one roof. Which means every piece passes through four pairs of hands before it reaches the cabinet — and we know all four.',
      craftPoints: [
        {
          title: 'Gold with a traceable origin',
          body: 'All our gold arrives with an invoice and a melt certificate. Nothing enters the workshop undocumented.',
        },
        {
          title: 'Made in Tehran',
          body: 'No stage is outsourced. From model-making to final polish, everything happens in our own workshop.',
        },
        {
          title: 'Lifetime workmanship guarantee',
          body: 'Any fault originating in our making is corrected at no cost, for as long as the piece exists.',
        },
      ],
      featuredEyebrow: 'Selected',
      featuredHeading: 'The pieces people come back for',
      featuredLead: 'These are the ones clients reorder most — for themselves, or as a gift.',
      visitEyebrow: 'In person',
      visitHeading: 'Gold has to be held',
      visitBody:
        'A photograph never carries real weight or real lustre. Book a time, have tea, and see the pieces up close. There is no obligation to buy.',
      visitCta: 'Book a time',
      captionVisit: 'The bench in the Tehran workshop. Everything is made here, and you can watch it being made.',
    },

    collections: {
      eyebrow: 'Collections',
      title: 'All collections',
      lead: 'Four principal lines, each with its own logic of form and use. Open one to see its pieces.',
      inThisCollection: 'Pieces in this collection',
      otherCollections: 'Other collections',
    },

    product: {
      backLabel: 'Back to',
      specsHeading: 'Specification',
      karat: 'Karat',
      weight: 'Approx. weight',
      weightUnit: 'g',
      stones: 'Stones',
      collection: 'Collection',
      sku: 'Reference',
      storyHeading: 'About this piece',
      enquiryHeading: 'Enquire about this piece',
      enquiryLead:
        'Each handmade piece varies slightly in weight, and the price follows the day’s gold rate. Send the form and we will call you the same working day.',
      relatedHeading: 'Related pieces',
      madeToOrder: 'Made to order',
      madeToOrderNote: 'Size and karat can be adjusted. Making usually takes 10–14 working days.',
    },

    about: {
      eyebrow: 'About',
      title: 'Three generations, one workshop',
      lead: 'MEHRAVA began in 1973 with one bench and one small furnace. That bench is still in the workshop.',
      captionCraft: 'Setting a stone by hand with a graver — the one step that has never been given to a machine.',
      body: [
        'Our grandfather started in repair, not in making. For years he mended other people’s broken pieces, and in those years he learned where gold gives way, which seam will not last, and why a fine chain opens after two winters. When he finally began making his own work, he built strength into exactly the places others overlooked.',
        'That instinct is still how we work. We do not make pieces that photograph well and fail in daily use. If a clasp is going to be opened every morning, we design it for ten thousand openings, not a hundred.',
        'We are not a large shop and we do not want to be. We make around four hundred pieces a year, all in Tehran, all by hand. If you want endless variety, there are better places. If you want something that can still be repaired in thirty years, you have come to the right bench.',
      ],
      valuesEyebrow: 'Principles',
      valuesHeading: 'Four things we do not trade away',
      values: [
        { title: 'Honest weight', body: 'The exact weight of each piece is written on the invoice. No rounding in our favour.' },
        { title: 'Real karat', body: 'Every piece leaves with an official hallmark and its assay certificate.' },
        { title: 'No pressure', body: 'Nobody is sold to in our gallery. Take as long as you need.' },
        { title: 'Repaired forever', body: 'We repair anything we have ever made, even three generations on.' },
      ],
    },

    care: {
      eyebrow: 'Care',
      title: 'Looking after gold',
      lead: 'Gold does not rust, but it scratches and it dulls. A few simple habits multiply the life of its lustre.',
      items: [
        {
          title: 'Last thing on, first thing off',
          body: 'Perfume, hairspray and cream leave a film on gold that flattens its lustre. Put jewellery on once you are otherwise ready, and take it off before bed.',
        },
        {
          title: 'Chlorine is a genuine enemy',
          body: 'Pool water and hot tubs weaken solder seams and joints over time. Take everything off before swimming — this is the one point on which we are strict.',
        },
        {
          title: 'Washing at home, done properly',
          body: 'A bowl of warm water with a few drops of clear dish soap, ten minutes of soaking, then a very soft brush along the seams and a rinse in lukewarm water. Dry with a cotton cloth, never paper.',
        },
        {
          title: 'Store pieces separately',
          body: 'Gold scratches gold. One cloth pouch per piece, away from direct light. Leave chains half-clasped so they cannot knot.',
        },
        {
          title: 'Stones have their own rules',
          body: 'Pearl and turquoise are porous and absorb any chemical; clean them only with a damp soft cloth. Emerald is far more brittle under impact than it looks.',
        },
        {
          title: 'Bring it in once a year',
          body: 'Clasp inspection, stone tightening and a professional polish are free for pieces we made. It takes ten minutes.',
        },
      ],
    },

    faq: {
      eyebrow: 'FAQ',
      title: 'What people ask most',
      lead: 'If your question is not here, call or send a message.',
      items: [
        {
          q: 'Why are there no prices on the site?',
          a: 'Because the gold price moves daily, sometimes hourly. Publishing a number that is wrong tomorrow wastes your time. Use the enquiry form on any piece, or call, and we will quote the rate at that moment.',
        },
        {
          q: 'How is the final price calculated?',
          a: 'The weight of the piece times the day’s rate for its karat, plus the making charge and VAT. The making charge is fixed per piece and told to you before you order — nothing is added at handover.',
        },
        {
          q: 'Can sizes be altered?',
          a: 'Yes. Rings can move two sizes either way, and we do this free of charge on a first purchase. Chains are made to any length you ask for.',
        },
        {
          q: 'Do you take commissions?',
          a: 'Yes, but a limited number. We accept only a few bespoke projects a year so that quality does not slip. It starts with a meeting in the gallery and usually takes six to ten weeks.',
        },
        {
          q: 'Will you take old gold in part exchange?',
          a: 'Yes. Your gold is weighed and assayed, and its value at the day’s rate is deducted from your order. We can also reset stones from an old piece into a new design.',
        },
        {
          q: 'Do you ship outside Tehran?',
          a: 'Yes, fully insured by registered courier. Above a certain value we send by dedicated courier with identity verification on delivery.',
        },
        {
          q: 'What is your returns policy?',
          a: 'Stock pieces can be returned within seven days, unworn and with the invoice. Bespoke commissions are made to your measurements and cannot be returned, though they can always be altered.',
        },
      ],
    },

    journal: {
      eyebrow: 'Journal',
      title: 'From the workshop',
      lead: 'Not an SEO blog. A few short notes about the work we do.',
      readingTime: (m: number) => `${m} min read`,
      backToJournal: 'Back to the journal',
      more: 'More notes',
    },

    contact: {
      eyebrow: 'Visit',
      title: 'Come by, or write',
      lead: 'Book a time to see the pieces in person, or send the form if you have a question. We reply the same working day.',
      showroomHeading: 'The gallery',
      formHeading: 'Send a message',
      mapNote: 'The gallery entrance is on Negarestan Lane, not on the main street.',
    },

    form: {
      name: 'Full name',
      namePlaceholder: '',
      phone: 'Telephone',
      phoneHint: 'A call is quicker for quoting the day’s rate.',
      email: 'Email',
      emailOptional: 'optional',
      piece: 'Piece of interest',
      pieceAny: 'Not sure yet / I would like advice',
      subject: 'Subject',
      subjectOptions: ['Price enquiry', 'Book an appointment', 'Bespoke commission', 'Repair and care', 'Something else'],
      message: 'Message',
      messageHint: 'If you have a size, weight or budget in mind, say so here.',
      required: 'required',
      submit: 'Send request',
      errName: 'Please enter your name.',
      errPhone: 'Please enter a valid telephone number.',
      errEmail: 'Please enter a valid email, or leave this field empty.',
      errMessage: 'Add a little detail so we know how to help.',
      errorSummaryTitle: 'Please fix the following to continue:',
      success: 'Your request has been logged. We will call you the same working day.',
      successNote: 'This form is a demonstration and is not sent anywhere.',
      privacyNote: 'Your number is used only to answer this enquiry.',
    },

    footer: {
      exploreHeading: 'Explore',
      helpHeading: 'Help',
      visitHeading: 'Gallery',
      followHeading: 'Follow',
      instagram: 'Instagram',
      whatsapp: 'WhatsApp',
      rights: (y: number) => `© ${y} MEHRAVA. All rights reserved.`,
      privacy: 'Privacy',
      terms: 'Terms',
      demoNote: 'This is a demonstration site. The brand, the pieces and the contact details are not real.',
    },

    legal: {
      privacyTitle: 'Privacy',
      privacyLead: 'Short, and without dense legal language, because we genuinely do very little with your data.',
      privacyBody: [
        'We collect only what you type into the contact form: your name, your telephone number, and optionally your email and a message. We use it solely to answer that enquiry.',
        'We do not sell or pass your details to any person or company. We will not add you to marketing messages unless you explicitly ask us to.',
        'This site sets no tracking cookies and loads no third-party advertising tools. No third-party analytics script runs on these pages.',
        'If you want your details deleted, one message is enough. It is done the same day.',
      ],
      termsTitle: 'Terms',
      termsLead: 'The framework for buying, commissioning and returning.',
      termsBody: [
        'Prices are calculated from the day’s gold rate and remain subject to change until an order is confirmed. A quoted rate holds until the end of that working day.',
        'The weight of a handmade piece may differ from the stated weight by up to about five percent. The exact final weight is printed on the invoice and is the basis of calculation.',
        'Stock pieces may be returned within seven days of handover, unworn and with the invoice. Bespoke commissions made to your size or design cannot be returned, but can always be altered.',
        'The workmanship guarantee covers any fault arising from our making, soldering, clasps and stone setting, with no time limit. Scratches from ordinary wear, and damage from impact or chemicals, are not covered but are repaired at a fair charge.',
      ],
    },

    notFound: {
      code: '404',
      title: 'This page could not be found',
      body: 'The address may have been mistyped, or the piece you were looking for may have been sold.',
      cta: 'Go to collections',
      ctaHome: 'Back home',
    },
  },
} as const;

/** Western digits to Persian digits. */
export function toFa(input: number | string): string {
  const digits = '۰۱۲۳۴۵۶۷۸۹';
  return String(input).replace(/\d/g, (d) => digits[Number(d)]!);
}

/** Localise a number for display: Persian digits in fa, plain in en. */
export function num(value: number | string, lang: Lang): string {
  return lang === 'fa' ? toFa(value) : String(value);
}

export type Dict = (typeof ui)['en'];

export function t(lang: Lang): Dict {
  return ui[lang] as unknown as Dict;
}
