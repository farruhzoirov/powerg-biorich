export interface Product {
  id: number;
  image: string;
  name: { uz: string; ru: string; en: string };
  shortDesc: { uz: string; ru: string; en: string };
  fullDesc: { uz: string; ru: string; en: string };
  ingredients: { uz: string; ru: string; en: string };
  benefits: { uz: string[]; ru: string[]; en: string[] };
}

export const products: Product[] = [
  {
    id: 1,
    image: "/images/products/product-1.jpg",
    name: { uz: "Mahsulot nomi 1", ru: "Название продукта 1", en: "Product Name 1" },
    shortDesc: {
      uz: "Qisqa tavsif bu yerga yoziladi",
      ru: "Краткое описание здесь",
      en: "Short description goes here",
    },
    fullDesc: {
      uz: "Bu yerga mahsulotning to'liq tavsifi yoziladi. Mahsulot haqida batafsil ma'lumot, uning ishlatilish usuli va samaradorligi haqida so'z yuritiladi.",
      ru: "Здесь пишется полное описание продукта. Подробная информация о продукте, способ применения и эффективность.",
      en: "Full product description goes here. Detailed information about the product, how to use it and its effectiveness.",
    },
    ingredients: {
      uz: "Tabiiy komponentlar, o'simlik ekstraktlari, vitaminlar va minerallar. Batafsil tarkibni shu yerga kiriting.",
      ru: "Натуральные компоненты, растительные экстракты, витамины и минералы. Введите подробный состав здесь.",
      en: "Natural components, plant extracts, vitamins and minerals. Enter detailed ingredients here.",
    },
    benefits: {
      uz: ["Immunitetni kuchaytiradi", "Energiya beradi", "Sog'liqni yaxshilaydi", "Tabiiy tarkibli"],
      ru: ["Укрепляет иммунитет", "Придаёт энергию", "Улучшает здоровье", "Натуральный состав"],
      en: ["Boosts immunity", "Provides energy", "Improves health", "Natural composition"],
    },
  },
  {
    id: 2,
    image: "/images/products/product-2.jpg",
    name: { uz: "Mahsulot nomi 2", ru: "Название продукта 2", en: "Product Name 2" },
    shortDesc: { uz: "Qisqa tavsif bu yerga yoziladi", ru: "Краткое описание здесь", en: "Short description goes here" },
    fullDesc: {
      uz: "Bu yerga mahsulotning to'liq tavsifi yoziladi. Mahsulot haqida batafsil ma'lumot, uning ishlatilish usuli va samaradorligi haqida so'z yuritiladi.",
      ru: "Здесь пишется полное описание продукта. Подробная информация о продукте, способ применения и эффективность.",
      en: "Full product description goes here. Detailed information about the product, how to use it and its effectiveness.",
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
    image: "/images/products/product-3.jpg",
    name: { uz: "Mahsulot nomi 3", ru: "Название продукта 3", en: "Product Name 3" },
    shortDesc: { uz: "Qisqa tavsif bu yerga yoziladi", ru: "Краткое описание здесь", en: "Short description goes here" },
    fullDesc: {
      uz: "Bu yerga mahsulotning to'liq tavsifi yoziladi. Mahsulot haqida batafsil ma'lumot, uning ishlatilish usuli va samaradorligi haqida so'z yuritiladi.",
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
    image: "/images/products/product-4.jpg",
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
    image: "/images/products/product-5.jpg",
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
    image: "/images/products/product-6.jpg",
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
    image: "/images/products/product-7.jpg",
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
    image: "/images/products/product-8.jpg",
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
    image: "/images/products/product-9.jpg",
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
