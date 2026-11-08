import type { Locale } from "./translations";

export type CategoryKey = "detox" | "kids" | "restore" | "youth";

/** Per-product presentation metadata (category + brand accent taken from the packaging). */
export const productMeta: Record<number, { category: CategoryKey; accent: string; tint: string }> = {
  1: { category: "kids", accent: "#8a5a3c", tint: "#f6e9df" },
  2: { category: "restore", accent: "#c8955a", tint: "#fbefdf" },
  3: { category: "detox", accent: "#8fc21f", tint: "#eef8d3" },
  4: { category: "youth", accent: "#2f66c2", tint: "#e0ecfc" },
  5: { category: "detox", accent: "#f0a90f", tint: "#fff1c9" },
  6: { category: "restore", accent: "#2f9a57", tint: "#dff5e6" },
  7: { category: "kids", accent: "#3d9fe0", tint: "#dff0fc" },
  8: { category: "youth", accent: "#8a3fb4", tint: "#f0e1fa" },
  9: { category: "restore", accent: "#c8281e", tint: "#fde3e0" },
  10: { category: "detox", accent: "#5fa042", tint: "#e4f5da" },
};

export const categoryImages: Record<CategoryKey, string> = {
  detox: "/images/brand/cat-detox.jpg",
  kids: "/images/brand/cat-kids.jpg",
  restore: "/images/brand/cat-restore.jpg",
  youth: "/images/brand/cat-youth.jpg",
};

export const toxinImages = [
  "/images/brand/toxin-fastfood.jpg",
  "/images/brand/toxin-soda.jpg",
  "/images/brand/toxin-ecology.jpg",
  "/images/brand/toxin-stress.jpg",
  "/images/brand/toxin-pills.jpg",
  "/images/brand/toxin-habits.jpg",
];

interface Content {
  nav: { home: string; why: string; products: string; ginger: string; about: string; certs: string; contact: string; order: string };
  hero: {
    badge: string;
    titleA: string;
    titleB: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    chips: string[];
    floatA: { value: string; label: string };
    floatB: { value: string; label: string };
  };
  marquee: string[];
  why: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    toxins: string[];
    answerTitle: string;
    answerText: string;
    law: string;
  };
  categories: { badge: string; title: string; subtitle: string; items: Record<CategoryKey, { title: string; text: string }> };
  filters: { all: string; count: string };
  ginger: {
    badge: string;
    title: string;
    text: string;
    facts: { value: string; label: string }[];
    note: string;
  };
  about: {
    badge: string;
    title: string;
    founders: string;
    names: string[];
    achievements: string[];
    missionLabel: string;
    mission: string;
    factoryTitle: string;
    factoryText: string;
    labTitle: string;
    labText: string;
  };
  certs: { badge: string; title: string; subtitle: string; items: { name: string; text: string }[] };
  stats: { value: number; suffix: string; label: string }[];
  cta: { title: string; text: string; button: string; button2: string };
  detail: {
    about: string;
    ingredients: string;
    benefits: string;
    highlights: string;
    related: string;
    notFound: string;
    order: string;
    more: string;
    category: string;
    trust: string[];
    prev: string;
    next: string;
  };
  categoryNames: Record<CategoryKey, string>;
}

export const content: Record<Locale, Content> = {
  uz: {
    nav: { home: "Bosh sahifa", why: "Nega biz", products: "Mahsulotlar", ginger: "Qora zanjabil", about: "Kompaniya", certs: "Sertifikatlar", contact: "Aloqa", order: "Buyurtma berish" },
    hero: {
      badge: "Malayziya sifati · O'zbekiston ishonchi",
      titleA: "Tabiat kuchi —",
      titleB: "sog'lom hayot uchun",
      subtitle:
        "Qora zanjabil asosidagi tabiiy mahsulotlar kolleksiyasi. Malayziyaning xalqaro JJ Asia zavodida, jahon talablariga mos ishlab chiqariladi.",
      cta: "Mahsulotlarni ko'rish",
      ctaSecondary: "Kompaniya haqida",
      chips: ["Halol", "GMP Quality", "HACCP"],
      floatA: { value: "10", label: "tabiiy mahsulot" },
      floatB: { value: "18+", label: "yillik tajriba" },
    },
    marquee: ["Malayziya JJ Asia zavodi", "Halol sertifikat", "GMP Quality", "HACCP Certified", "Qora zanjabil ekstrakti", "10 xil mahsulot", "18 yillik tajriba", "Tabiat kuchi"],
    why: {
      badge: "Muammo",
      title: "Hayot farovon bo'lsa-da,",
      titleAccent: "kasalliklar ko'paymoqda",
      subtitle: "Sababi — organizmda yig'ilib qolgan toksinlar (zahar):",
      toxins: ["Qayta ishlangan tez ovqatlar", "Shirin gazli ichimliklar", "Yomon ekologiya", "Stress", "Kimyoviy dorilarni noto'g'ri iste'mol qilish", "Zararli odatlar"],
      answerTitle: "Yechim — tabiatning o'zida",
      answerText:
        "Power-G Bio Rich mahsulotlari organizmni tabiiy yo'l bilan tozalaydi, tiklaydi va kuch beradi. Asosiy tarkib — Tailand tog'larida o'sadigan eng shifobaxsh giyoh, qora zanjabil.",
      law: "O'zbekiston Respublikasining «Aholi o'rtasida mikronutriyentlar yetishmasligining oldini olish to'g'risida»gi (2010, O'RQ-251) qonuniga muvofiq.",
    },
    categories: {
      badge: "4 xil yo'nalish",
      title: "Sizga kerakli yo'nalishni tanlang",
      subtitle: "Har bir mahsulot aniq maqsad uchun yaratilgan",
      items: {
        detox: { title: "Detoks", text: "Toksin va shlaklardan tozalaydi, hazmni yengillashtiradi" },
        kids: { title: "Bolajonlar uchun", text: "O'sish, xotira va immunitet uchun oziqlantiruvchi" },
        restore: { title: "Tiklovchi", text: "Energiya, chidamlilik va kuch-quvvatni qaytaradi" },
        youth: { title: "Yoshartiruvchi", text: "Teri, bo'g'im va hujayralar yoshligini saqlaydi" },
      },
    },
    filters: { all: "Barchasi", count: "ta mahsulot" },
    ginger: {
      badge: "Asosiy tarkib",
      title: "Yer sayyorasidagi eng shifobaxsh giyoh — Qora zanjabil",
      text:
        "Qora zanjabil asosan Tailand va Janubi-Sharqiy Osiyodagi noyob o'simlik bo'lib, ichi binafsha rangga ega. U Tailandda 1000 yildan ortiq vaqt davomida oziq-ovqat hamda xalq tabobatida ishlatilgan.",
      facts: [
        { value: "1000 m", label: "Tailand tog'larining dengiz sathidan balandligi" },
        { value: "10 kg → 1 kg", label: "10 kg ildizdan atigi 1 kg ekstrakt olinadi" },
        { value: "1000+ yil", label: "Xalq tabobatidagi an'anaviy tajriba" },
      ],
      note: "Oliy sifat kafolati",
    },
    about: {
      badge: "Kompaniya haqida",
      title: "Sifatli mahsulot va shaffof imkoniyatlar",
      founders: "Kompaniya asoschilari",
      names: ["Bekjanov Oybek", "Bekjanova Fotimaxon"],
      achievements: [
        "Innovatsion g'oyalar muallifi",
        "«Sadoqat va vafo» ko'krak nishoni sohibi va sohibasi",
        "«El-yurt faxri» ko'krak nishoni sohibasi",
        "18 yillik tajriba egalari",
        "Reklama biznesida muvaffaqiyatli yo'lboshchi",
        "Marketolog va sotsiolog",
      ],
      missionLabel: "Kompaniya missiyasi",
      mission: "Sifatli mahsulotlar va shaffof imkoniyatlar orqali sog'lom hamda farovon hayotga hissa qo'shish.",
      factoryTitle: "Malayziyaning xalqaro «JJ Asia» zavodi",
      factoryText: "«Power-G Bio Rich» kompaniyasi zavodning eksklyuziv hamkori. Mahsulotlar zamonaviy texnologiyalar va jahon talablariga mos jarayonda ishlab chiqariladi.",
      labTitle: "Jahon talablariga mos ishlab chiqarish",
      labText: "Zamonaviy laboratoriyalarda har bir partiya xavfsizlik va sifat nazoratidan o'tadi. Jarayon halol, GMP va HACCP talablariga to'liq mos.",
    },
    certs: {
      badge: "Ishonch",
      title: "Xalqaro sertifikatlar bilan tasdiqlangan",
      subtitle: "Har bir mahsulot xavfsizlik va sifat nazoratidan o'tgan",
      items: [
        { name: "Halol", text: "Malayziya halol sertifikati" },
        { name: "GMP Quality", text: "Yaxshi ishlab chiqarish amaliyoti" },
        { name: "HACCP", text: "Oziq-ovqat xavfsizligi tizimi" },
      ],
    },
    stats: [
      { value: 10, suffix: "", label: "tabiiy mahsulot" },
      { value: 4, suffix: "", label: "sog'lomlashtirish yo'nalishi" },
      { value: 3, suffix: "", label: "xalqaro sertifikat" },
      { value: 18, suffix: "+", label: "yillik tajriba" },
    ],
    cta: {
      title: "Sog'lom hayotni bugun boshlang",
      text: "Mahsulotlar haqida maslahat oling va o'zingizga mosini tanlang.",
      button: "Bog'lanish",
      button2: "Mahsulotlar",
    },
    detail: {
      about: "Mahsulot haqida",
      ingredients: "Tarkibi",
      benefits: "Foydali xususiyatlari",
      highlights: "Asosiy afzalliklari",
      related: "Sizga ham yoqishi mumkin",
      notFound: "Mahsulot topilmadi",
      order: "Buyurtma uchun bog'laning",
      more: "ta ko'proq",
      category: "Yo'nalish",
      trust: ["Halol", "GMP sertifikat", "Malayziya sifati"],
      prev: "Oldingi",
      next: "Keyingi",
    },
    categoryNames: { detox: "Detoks", kids: "Bolajonlar uchun", restore: "Tiklovchi", youth: "Yoshartiruvchi" },
  },

  ru: {
    nav: { home: "Главная", why: "Почему мы", products: "Продукты", ginger: "Чёрный имбирь", about: "Компания", certs: "Сертификаты", contact: "Контакты", order: "Заказать" },
    hero: {
      badge: "Качество Малайзии · Доверие Узбекистана",
      titleA: "Сила природы —",
      titleB: "для здоровой жизни",
      subtitle:
        "Коллекция натуральных продуктов на основе чёрного имбиря. Производится на международном заводе JJ Asia в Малайзии по мировым стандартам.",
      cta: "Смотреть продукты",
      ctaSecondary: "О компании",
      chips: ["Халяль", "GMP Quality", "HACCP"],
      floatA: { value: "10", label: "натуральных продуктов" },
      floatB: { value: "18+", label: "лет опыта" },
    },
    marquee: ["Завод JJ Asia, Малайзия", "Сертификат Халяль", "GMP Quality", "HACCP Certified", "Экстракт чёрного имбиря", "10 видов продуктов", "18 лет опыта", "Сила природы"],
    why: {
      badge: "Проблема",
      title: "Жизнь становится благополучнее,",
      titleAccent: "а болезней всё больше",
      subtitle: "Причина — накопившиеся в организме токсины (яды):",
      toxins: ["Переработанный фастфуд", "Сладкие газированные напитки", "Плохая экология", "Стресс", "Неправильный приём химических препаратов", "Вредные привычки"],
      answerTitle: "Решение — в самой природе",
      answerText:
        "Продукты Power-G Bio Rich естественным путём очищают, восстанавливают и дают силы организму. Основа состава — самое целебное растение планеты, чёрный имбирь, растущий в горах Таиланда.",
      law: "В соответствии с Законом Республики Узбекистан «О профилактике недостаточности микронутриентов среди населения» (2010, ЗРУ-251).",
    },
    categories: {
      badge: "4 направления",
      title: "Выберите нужное направление",
      subtitle: "Каждый продукт создан для конкретной цели",
      items: {
        detox: { title: "Детокс", text: "Очищает от токсинов и шлаков, облегчает пищеварение" },
        kids: { title: "Для детей", text: "Питание для роста, памяти и иммунитета" },
        restore: { title: "Восстановление", text: "Возвращает энергию, выносливость и силы" },
        youth: { title: "Омоложение", text: "Сохраняет молодость кожи, суставов и клеток" },
      },
    },
    filters: { all: "Все", count: "продуктов" },
    ginger: {
      badge: "Основа состава",
      title: "Самое целебное растение планеты — чёрный имбирь",
      text:
        "Чёрный имбирь — уникальное растение Таиланда и Юго-Восточной Азии с фиолетовой сердцевиной. В Таиланде его используют в питании и народной медицине более 1000 лет.",
      facts: [
        { value: "1000 м", label: "высота гор Таиланда над уровнем моря" },
        { value: "10 кг → 1 кг", label: "из 10 кг корня получают только 1 кг экстракта" },
        { value: "1000+ лет", label: "традиционный опыт народной медицины" },
      ],
      note: "Гарантия высшего качества",
    },
    about: {
      badge: "О компании",
      title: "Качественные продукты и прозрачные возможности",
      founders: "Основатели компании",
      names: ["Бекжанов Ойбек", "Бекжанова Фатимахон"],
      achievements: [
        "Автор инновационных идей",
        "Обладатели нагрудного знака «Садоқат ва вафо»",
        "Обладательница нагрудного знака «Эл-юрт фахри»",
        "18 лет опыта",
        "Успешные лидеры в рекламном бизнесе",
        "Маркетолог и социолог",
      ],
      missionLabel: "Миссия компании",
      mission: "Вносить вклад в здоровую и благополучную жизнь через качественные продукты и прозрачные возможности.",
      factoryTitle: "Международный завод «JJ Asia», Малайзия",
      factoryText: "Компания «Power-G Bio Rich» — эксклюзивный партнёр завода. Продукция выпускается по современным технологиям и мировым стандартам.",
      labTitle: "Производство по мировым стандартам",
      labText: "В современных лабораториях каждая партия проходит контроль безопасности и качества. Процесс полностью соответствует требованиям халяль, GMP и HACCP.",
    },
    certs: {
      badge: "Доверие",
      title: "Подтверждено международными сертификатами",
      subtitle: "Каждый продукт проходит контроль безопасности и качества",
      items: [
        { name: "Халяль", text: "Малайзийский сертификат халяль" },
        { name: "GMP Quality", text: "Надлежащая производственная практика" },
        { name: "HACCP", text: "Система безопасности пищевых продуктов" },
      ],
    },
    stats: [
      { value: 10, suffix: "", label: "натуральных продуктов" },
      { value: 4, suffix: "", label: "направления оздоровления" },
      { value: 3, suffix: "", label: "международных сертификата" },
      { value: 18, suffix: "+", label: "лет опыта" },
    ],
    cta: {
      title: "Начните здоровую жизнь сегодня",
      text: "Получите консультацию по продуктам и выберите подходящий именно вам.",
      button: "Связаться",
      button2: "Продукты",
    },
    detail: {
      about: "О продукте",
      ingredients: "Состав",
      benefits: "Полезные свойства",
      highlights: "Главные преимущества",
      related: "Вам также может понравиться",
      notFound: "Продукт не найден",
      order: "Связаться для заказа",
      more: "ещё",
      category: "Направление",
      trust: ["Халяль", "Сертификат GMP", "Качество Малайзии"],
      prev: "Предыдущий",
      next: "Следующий",
    },
    categoryNames: { detox: "Детокс", kids: "Для детей", restore: "Восстановление", youth: "Омоложение" },
  },

  en: {
    nav: { home: "Home", why: "Why us", products: "Products", ginger: "Black ginger", about: "Company", certs: "Certificates", contact: "Contact", order: "Order now" },
    hero: {
      badge: "Malaysian quality · Uzbek trust",
      titleA: "The power of nature",
      titleB: "for a healthy life",
      subtitle:
        "A collection of natural products built on black ginger. Made at Malaysia's international JJ Asia plant to world-class standards.",
      cta: "Explore products",
      ctaSecondary: "About the company",
      chips: ["Halal", "GMP Quality", "HACCP"],
      floatA: { value: "10", label: "natural products" },
      floatB: { value: "18+", label: "years of experience" },
    },
    marquee: ["JJ Asia plant, Malaysia", "Halal certified", "GMP Quality", "HACCP Certified", "Black ginger extract", "10 products", "18 years of experience", "Power of nature"],
    why: {
      badge: "The problem",
      title: "Life is getting better,",
      titleAccent: "yet illness keeps rising",
      subtitle: "The cause — toxins that build up inside the body:",
      toxins: ["Processed fast food", "Sugary fizzy drinks", "Poor ecology", "Stress", "Misuse of chemical medication", "Harmful habits"],
      answerTitle: "The answer is in nature itself",
      answerText:
        "Power-G Bio Rich products cleanse, restore and energise the body naturally. The core ingredient is the most healing plant on Earth — black ginger from the mountains of Thailand.",
      law: "In line with the Law of the Republic of Uzbekistan «On preventing micronutrient deficiency among the population» (2010, ORQ-251).",
    },
    categories: {
      badge: "4 directions",
      title: "Choose the direction you need",
      subtitle: "Every product is created for a clear purpose",
      items: {
        detox: { title: "Detox", text: "Cleanses toxins and waste, eases digestion" },
        kids: { title: "For kids", text: "Nutrition for growth, memory and immunity" },
        restore: { title: "Restore", text: "Brings back energy, stamina and strength" },
        youth: { title: "Rejuvenate", text: "Keeps skin, joints and cells youthful" },
      },
    },
    filters: { all: "All", count: "products" },
    ginger: {
      badge: "Core ingredient",
      title: "The most healing plant on Earth — Black ginger",
      text:
        "Black ginger is a rare plant of Thailand and Southeast Asia with a purple core. It has been used in food and folk medicine in Thailand for over 1,000 years.",
      facts: [
        { value: "1,000 m", label: "above sea level in the Thai mountains" },
        { value: "10 kg → 1 kg", label: "only 1 kg of extract from 10 kg of root" },
        { value: "1,000+ yrs", label: "of traditional folk-medicine use" },
      ],
      note: "Premium quality guarantee",
    },
    about: {
      badge: "About the company",
      title: "Quality products and transparent opportunities",
      founders: "Company founders",
      names: ["Bekjanov Oybek", "Bekjanova Fotimakhon"],
      achievements: [
        "Author of innovative ideas",
        "Holders of the «Loyalty and Devotion» badge",
        "Holder of the «El-Yurt Faxri» badge",
        "18 years of experience",
        "Successful leaders in advertising",
        "Marketer and sociologist",
      ],
      missionLabel: "Our mission",
      mission: "To contribute to a healthy and prosperous life through quality products and transparent opportunities.",
      factoryTitle: "Malaysia's international «JJ Asia» plant",
      factoryText: "«Power-G Bio Rich» is the plant's exclusive partner. Products are made with modern technology under world-class processes.",
      labTitle: "Production to world standards",
      labText: "In modern laboratories every batch passes safety and quality control. The process fully meets halal, GMP and HACCP requirements.",
    },
    certs: {
      badge: "Trust",
      title: "Backed by international certificates",
      subtitle: "Every product passes safety and quality control",
      items: [
        { name: "Halal", text: "Malaysian halal certificate" },
        { name: "GMP Quality", text: "Good Manufacturing Practice" },
        { name: "HACCP", text: "Food safety assurance system" },
      ],
    },
    stats: [
      { value: 10, suffix: "", label: "natural products" },
      { value: 4, suffix: "", label: "wellness directions" },
      { value: 3, suffix: "", label: "international certificates" },
      { value: 18, suffix: "+", label: "years of experience" },
    ],
    cta: {
      title: "Start a healthy life today",
      text: "Get advice on our products and pick the one that fits you.",
      button: "Get in touch",
      button2: "Products",
    },
    detail: {
      about: "About the product",
      ingredients: "Ingredients",
      benefits: "Benefits",
      highlights: "Key advantages",
      related: "You may also like",
      notFound: "Product not found",
      order: "Contact us to order",
      more: "more",
      category: "Direction",
      trust: ["Halal", "GMP certified", "Malaysian quality"],
      prev: "Previous",
      next: "Next",
    },
    categoryNames: { detox: "Detox", kids: "For kids", restore: "Restore", youth: "Rejuvenate" },
  },
};
