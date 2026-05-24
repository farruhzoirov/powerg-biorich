export interface Product {
  id: number;
  images: string[];
  name: { uz: string; ru: string; en: string };
  shortDesc: { uz: string; ru: string; en: string };
  fullDesc: { uz: string; ru: string; en: string };
  ingredients: { uz: string; ru: string; en: string };
  benefits: { uz: string[]; ru: string[]; en: string[] };
}

export const products: Product[] = [
  {
    id: 1,
    images: [
      "/images/products/supermind-kids/image-1.jpg",
      "/images/products/supermind-kids/image-2.jpg",
      "/images/products/supermind-kids/image-3.jpg",
      "/images/products/supermind-kids/image-4.jpg",
      "/images/products/supermind-kids/image-5.jpg",
    ],
    name: {
      uz: "Power-G Smart Koko A+ SuperMind Kids",
      ru: "Power-G Smart Koko A+ SuperMind Kids",
      en: "Power-G Smart Koko A+ SuperMind Kids",
    },
    shortDesc: {
      uz: "Bolalar uchun kakao asosidagi shokoladli ichimlik — immunitetni mustahkamlaydi, xotirani yaxshilaydi va sog'lom o'sishni qo'llab-quvvatlaydi.",
      ru: "Шоколадный напиток на основе какао для детей — укрепляет иммунитет, улучшает память и поддерживает здоровый рост.",
      en: "Cocoa-based chocolate drink for kids — boosts immunity, improves memory and supports healthy growth.",
    },
    fullDesc: {
      uz: "Qora zanjabil ekstrakti va echki suti asosida tayyorlangan bolalar uchun to'liq qimmatli kakao ichimlik. Bolaning o'sishi va rivojlanishini, immunitetini mustahkamlash hamda aqliy qobiliyatini oshirish uchun maxsus ishlab chiqilgan.",
      ru: "Полноценный питательный напиток для детей на основе какао с экстрактом чёрного имбиря и козьего молока. Разработан специально для поддержки роста и развития ребёнка, укрепления иммунитета и улучшения умственных способностей.",
      en: "A complete nutritional cocoa drink for children enriched with black ginger extract and goat's milk. Specially formulated to support children's growth and development, strengthen immunity, and enhance cognitive abilities.",
    },
    ingredients: {
      uz: "Qora zanjabil ekstrakti, quritilgan echki suti, kakao-kukuni, lutein, Ginkgo Biloba ekstrakti, qora mayiz ekstrakti, vitaminlar: A, B1, B6, B12, C, E, K, minerallar: magniy, kaltsiy, kaliy, temir, rux, fosfor, mis, marganets, karotinoidlar, flavonoidlar va antioksidantlar.",
      ru: "Экстракт чёрного имбиря, сухое козье молоко, какао-порошок, лютеин, экстракт Гинкго Билоба, экстракт чёрного изюма, витамины: A, B1, B6, B12, C, E, K, минералы: магний, кальций, калий, железо, цинк, фосфор, медь, марганец, каротиноиды, флавоноиды и антиоксиданты.",
      en: "Black ginger extract, dried goat's milk, cocoa powder, lutein, Ginkgo Biloba extract, black raisin extract, vitamins: A, B1, B6, B12, C, E, K, minerals: magnesium, calcium, potassium, iron, zinc, phosphorus, copper, manganese, carotenoids, flavonoids and antioxidants.",
    },
    benefits: {
      uz: [
        "Immunitetni kuchaytiradi, kamqonlikda foydali",
        "Hujayralarni kislorod, A, B, E vitaminlari va minerallar bilan boyitadi",
        "Antibakterial va antiviral ta'sirga ega",
        "Bolalarning harakat faolligini oshiradi",
        "To'yinganlik hissini beradi",
        "Xotirani yaxshilaydi va diqqatni jamlashga yordam beradi",
        "Bolaning sog'lom o'sishi va rivojlanishini qo'llab-quvvatlaydi",
        "Suyaklarni mustahkamlaydi",
        "Asab buzilishlarida juda foydali, asab tizimini tinchlantiradi",
        "Ko'rishni yaxshilashga yordam beradi",
        "Nafas yo'llari sog'lig'ini qo'llab-quvvatlaydi",
        "Astma, sil va pnevmoniyaning oldini olishga yordam beradi",
      ],
      ru: [
        "Повышает иммунитет, полезен при анемии",
        "Обогащает клетки кислородом, а также витаминами A, B, E и минералами",
        "Обладает антибактериальным и противовирусным действием",
        "Повышает двигательную активность детей",
        "Дарит чувство сытости",
        "Улучшает память и помогает концентрации внимания",
        "Поддерживает здоровый рост и развитие ребёнка",
        "Укрепляет кости",
        "Очень полезен при нервных расстройствах, успокаивает нервную систему",
        "Помогает улучшить зрение",
        "Поддерживает здоровье дыхательной системы",
        "Помогает предотвратить астму, туберкулёз и пневмонию",
      ],
      en: [
        "Boosts immunity, beneficial for anemia",
        "Enriches cells with oxygen and vitamins A, B, E and minerals",
        "Has antibacterial and antiviral properties",
        "Increases children's physical activity",
        "Provides a feeling of satiety",
        "Improves memory and helps concentration",
        "Supports healthy growth and development of the child",
        "Strengthens bones",
        "Very beneficial for nervous disorders, calms the nervous system",
        "Helps improve vision",
        "Supports respiratory system health",
        "Helps prevent asthma, tuberculosis and pneumonia",
      ],
    },
  },
  {
    id: 2,
    images: ["/images/products/product-2.jpg"],
    name: { uz: "Mahsulot nomi 2", ru: "Название продукта 2", en: "Product Name 2" },
    shortDesc: { uz: "Qisqa tavsif bu yerga yoziladi", ru: "Краткое описание здесь", en: "Short description goes here" },
    fullDesc: {
      uz: "Bu yerga mahsulotning to'liq tavsifi yoziladi.",
      ru: "Здесь пишется полное описание продукта.",
      en: "Full product description goes here.",
    },
    ingredients: {
      uz: "Tabiiy komponentlar, o'simlik ekstraktlari, vitaminlar va minerallar.",
      ru: "Натуральные компоненты, растительные экстракты, витамины и минералы.",
      en: "Natural components, plant extracts, vitamins and minerals.",
    },
    benefits: {
      uz: ["Immunitetni kuchaytiradi", "Energiya beradi", "Sog'liqni yaxshilaydi", "Tabiiy tarkibli"],
      ru: ["Укрепляет иммунитет", "Придаёт энергию", "Улучшает здоровье", "Натуральный состав"],
      en: ["Boosts immunity", "Provides energy", "Improves health", "Natural composition"],
    },
  },
  {
    id: 3,
    images: ["/images/products/product-3.jpg"],
    name: { uz: "Mahsulot nomi 3", ru: "Название продукта 3", en: "Product Name 3" },
    shortDesc: { uz: "Qisqa tavsif bu yerga yoziladi", ru: "Краткое описание здесь", en: "Short description goes here" },
    fullDesc: {
      uz: "Bu yerga mahsulotning to'liq tavsifi yoziladi.",
      ru: "Здесь пишется полное описание продукта.",
      en: "Full product description goes here.",
    },
    ingredients: {
      uz: "Tabiiy komponentlar, o'simlik ekstraktlari, vitaminlar va minerallar.",
      ru: "Натуральные компоненты, растительные экстракты, витамины и минералы.",
      en: "Natural components, plant extracts, vitamins and minerals.",
    },
    benefits: {
      uz: ["Immunitetni kuchaytiradi", "Energiya beradi", "Sog'liqni yaxshilaydi", "Tabiiy tarkibli"],
      ru: ["Укрепляет иммунитет", "Придаёт энергию", "Улучшает здоровье", "Натуральный состав"],
      en: ["Boosts immunity", "Provides energy", "Improves health", "Natural composition"],
    },
  },
  {
    id: 4,
    images: ["/images/products/product-4.jpg"],
    name: { uz: "Mahsulot nomi 4", ru: "Название продукта 4", en: "Product Name 4" },
    shortDesc: { uz: "Qisqa tavsif bu yerga yoziladi", ru: "Краткое описание здесь", en: "Short description goes here" },
    fullDesc: {
      uz: "Bu yerga mahsulotning to'liq tavsifi yoziladi.",
      ru: "Здесь пишется полное описание продукта.",
      en: "Full product description goes here.",
    },
    ingredients: {
      uz: "Tabiiy komponentlar, o'simlik ekstraktlari, vitaminlar va minerallar.",
      ru: "Натуральные компоненты, растительные экстракты, витамины и минералы.",
      en: "Natural components, plant extracts, vitamins and minerals.",
    },
    benefits: {
      uz: ["Immunitetni kuchaytiradi", "Energiya beradi", "Sog'liqni yaxshilaydi", "Tabiiy tarkibli"],
      ru: ["Укрепляет иммунитет", "Придаёт энергию", "Улучшает здоровье", "Натуральный состав"],
      en: ["Boosts immunity", "Provides energy", "Improves health", "Natural composition"],
    },
  },
  {
    id: 5,
    images: ["/images/products/product-5.jpg"],
    name: { uz: "Mahsulot nomi 5", ru: "Название продукта 5", en: "Product Name 5" },
    shortDesc: { uz: "Qisqa tavsif bu yerga yoziladi", ru: "Краткое описание здесь", en: "Short description goes here" },
    fullDesc: {
      uz: "Bu yerga mahsulotning to'liq tavsifi yoziladi.",
      ru: "Здесь пишется полное описание продукта.",
      en: "Full product description goes here.",
    },
    ingredients: {
      uz: "Tabiiy komponentlar, o'simlik ekstraktlari, vitaminlar va minerallar.",
      ru: "Натуральные компоненты, растительные экстракты, витамины и минералы.",
      en: "Natural components, plant extracts, vitamins and minerals.",
    },
    benefits: {
      uz: ["Immunitetni kuchaytiradi", "Energiya beradi", "Sog'liqni yaxshilaydi", "Tabiiy tarkibli"],
      ru: ["Укрепляет иммунитет", "Придаёт энергию", "Улучшает здоровье", "Натуральный состав"],
      en: ["Boosts immunity", "Provides energy", "Improves health", "Natural composition"],
    },
  },
  {
    id: 6,
    images: ["/images/products/product-6.jpg"],
    name: { uz: "Mahsulot nomi 6", ru: "Название продукта 6", en: "Product Name 6" },
    shortDesc: { uz: "Qisqa tavsif bu yerga yoziladi", ru: "Краткое описание здесь", en: "Short description goes here" },
    fullDesc: {
      uz: "Bu yerga mahsulotning to'liq tavsifi yoziladi.",
      ru: "Здесь пишется полное описание продукта.",
      en: "Full product description goes here.",
    },
    ingredients: {
      uz: "Tabiiy komponentlar, o'simlik ekstraktlari, vitaminlar va minerallar.",
      ru: "Натуральные компоненты, растительные экстракты, витамины и минералы.",
      en: "Natural components, plant extracts, vitamins and minerals.",
    },
    benefits: {
      uz: ["Immunitetni kuchaytiradi", "Energiya beradi", "Sog'liqni yaxshilaydi", "Tabiiy tarkibli"],
      ru: ["Укрепляет иммунитет", "Придаёт энергию", "Улучшает здоровье", "Натуральный состав"],
      en: ["Boosts immunity", "Provides energy", "Improves health", "Natural composition"],
    },
  },
  {
    id: 7,
    images: ["/images/products/product-7.jpg"],
    name: { uz: "Mahsulot nomi 7", ru: "Название продукта 7", en: "Product Name 7" },
    shortDesc: { uz: "Qisqa tavsif bu yerga yoziladi", ru: "Краткое описание здесь", en: "Short description goes here" },
    fullDesc: {
      uz: "Bu yerga mahsulotning to'liq tavsifi yoziladi.",
      ru: "Здесь пишется полное описание продукта.",
      en: "Full product description goes here.",
    },
    ingredients: {
      uz: "Tabiiy komponentlar, o'simlik ekstraktlari, vitaminlar va minerallar.",
      ru: "Натуральные компоненты, растительные экстракты, витамины и минералы.",
      en: "Natural components, plant extracts, vitamins and minerals.",
    },
    benefits: {
      uz: ["Immunitetni kuchaytiradi", "Energiya beradi", "Sog'liqni yaxshilaydi", "Tabiiy tarkibli"],
      ru: ["Укрепляет иммунитет", "Придаёт энергию", "Улучшает здоровье", "Натуральный состав"],
      en: ["Boosts immunity", "Provides energy", "Improves health", "Natural composition"],
    },
  },
  {
    id: 8,
    images: ["/images/products/product-8.jpg"],
    name: { uz: "Mahsulot nomi 8", ru: "Название продукта 8", en: "Product Name 8" },
    shortDesc: { uz: "Qisqa tavsif bu yerga yoziladi", ru: "Краткое описание здесь", en: "Short description goes here" },
    fullDesc: {
      uz: "Bu yerga mahsulotning to'liq tavsifi yoziladi.",
      ru: "Здесь пишется полное описание продукта.",
      en: "Full product description goes here.",
    },
    ingredients: {
      uz: "Tabiiy komponentlar, o'simlik ekstraktlari, vitaminlar va minerallar.",
      ru: "Натуральные компоненты, растительные экстракты, витамины и минералы.",
      en: "Natural components, plant extracts, vitamins and minerals.",
    },
    benefits: {
      uz: ["Immunitetni kuchaytiradi", "Energiya beradi", "Sog'liqni yaxshilaydi", "Tabiiy tarkibli"],
      ru: ["Укрепляет иммунитет", "Придаёт энергию", "Улучшает здоровье", "Натуральный состав"],
      en: ["Boosts immunity", "Provides energy", "Improves health", "Natural composition"],
    },
  },
  {
    id: 9,
    images: ["/images/products/product-9.jpg"],
    name: { uz: "Mahsulot nomi 9", ru: "Название продукта 9", en: "Product Name 9" },
    shortDesc: { uz: "Qisqa tavsif bu yerga yoziladi", ru: "Краткое описание здесь", en: "Short description goes here" },
    fullDesc: {
      uz: "Bu yerga mahsulotning to'liq tavsifi yoziladi.",
      ru: "Здесь пишется полное описание продукта.",
      en: "Full product description goes here.",
    },
    ingredients: {
      uz: "Tabiiy komponentlar, o'simlik ekstraktlari, vitaminlar va minerallar.",
      ru: "Натуральные компоненты, растительные экстракты, витамины и минералы.",
      en: "Natural components, plant extracts, vitamins and minerals.",
    },
    benefits: {
      uz: ["Immunitetni kuchaytiradi", "Energiya beradi", "Sog'liqni yaxshilaydi", "Tabiiy tarkibli"],
      ru: ["Укрепляет иммунитет", "Придаёт энергию", "Улучшает здоровье", "Натуральный состав"],
      en: ["Boosts immunity", "Provides energy", "Improves health", "Natural composition"],
    },
  },
];
