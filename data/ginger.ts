import type { Locale } from "./translations";

interface GingerContent {
  learnMore: string;
  back: string;
  badge: string;
  title: string;
  lead: string;
  historyTitle: string;
  historyText: string;
  habitatTitle: string;
  habitatText: string;
  qualityTitle: string;
  qualityText: string;
  factsTitle: string;
  facts: { value: string; label: string }[];
  productsTitle: string;
  productsText: string;
}

export const gingerPage: Record<Locale, GingerContent> = {
  uz: {
    learnMore: "To'liq ma'lumot",
    back: "Bosh sahifaga qaytish",
    badge: "Asosiy tarkib",
    title: "Qora zanjabil",
    lead: "Yer sayyorasidagi eng shifobaxsh giyoh. Bu o'simlikning tarkibiy qismi inson organizmi uchun eng shifobaxsh hisoblanadi.",
    historyTitle: "Yaratilish tarixi",
    historyText:
      "Qora zanjabil, asosan, Tailand va Janubi-Sharqiy Osiyodagi noyob o'simlik bo'lib, ichi binafsha rangga ega. Qora zanjabil an'anaviy ravishda Tailandda 1000 yildan ortiq vaqt davomida oziq-ovqat hamda xalq tabobatida ishlatilgan.",
    habitatTitle: "Qayerda o'sadi",
    habitatText: "Qora zanjabil Tailandning dengiz sathidan 1000 metr balandlikdagi eng katta tog' maydonlarida o'sadi.",
    qualityTitle: "Oliy sifat kafolati",
    qualityText: "10 kg ildizdan atigi 1 kg ekstrakt olinadi. Shu sababli har bir mahsulotdagi qora zanjabil ekstrakti yuqori konsentratsiyaga ega.",
    factsTitle: "Raqamlarda",
    facts: [
      { value: "1000 m", label: "Tailand tog'larining dengiz sathidan balandligi" },
      { value: "10 kg → 1 kg", label: "10 kg ildizdan atigi 1 kg ekstrakt olinadi" },
      { value: "1000+ yil", label: "Xalq tabobatidagi an'anaviy tajriba" },
    ],
    productsTitle: "Qora zanjabil asosidagi mahsulotlar",
    productsText: "Quyidagi mahsulotlar tarkibida qora zanjabil ekstrakti mavjud.",
  },
  ru: {
    learnMore: "Подробнее",
    back: "На главную",
    badge: "Основа состава",
    title: "Чёрный имбирь",
    lead: "Самое целебное растение планеты. Его компоненты считаются наиболее полезными для организма человека.",
    historyTitle: "История происхождения",
    historyText:
      "Чёрный имбирь — уникальное растение Таиланда и Юго-Восточной Азии с фиолетовой сердцевиной. В Таиланде его традиционно используют в питании и народной медицине более 1000 лет.",
    habitatTitle: "Где растёт",
    habitatText: "Чёрный имбирь растёт на самых больших горных плато Таиланда на высоте 1000 метров над уровнем моря.",
    qualityTitle: "Гарантия высшего качества",
    qualityText: "Из 10 кг корня получают всего 1 кг экстракта. Поэтому экстракт чёрного имбиря в каждом продукте высококонцентрирован.",
    factsTitle: "В цифрах",
    facts: [
      { value: "1000 м", label: "высота гор Таиланда над уровнем моря" },
      { value: "10 кг → 1 кг", label: "из 10 кг корня получают только 1 кг экстракта" },
      { value: "1000+ лет", label: "традиционный опыт народной медицины" },
    ],
    productsTitle: "Продукты на основе чёрного имбиря",
    productsText: "В состав этих продуктов входит экстракт чёрного имбиря.",
  },
  en: {
    learnMore: "Learn more",
    back: "Back to home",
    badge: "Core ingredient",
    title: "Black ginger",
    lead: "The most healing plant on Earth. Its components are considered among the most beneficial for the human body.",
    historyTitle: "Origins",
    historyText:
      "Black ginger is a rare plant of Thailand and Southeast Asia with a purple core. It has traditionally been used in food and folk medicine in Thailand for over 1,000 years.",
    habitatTitle: "Where it grows",
    habitatText: "Black ginger grows on the largest mountain plateaus of Thailand, 1,000 metres above sea level.",
    qualityTitle: "Premium quality guarantee",
    qualityText: "Only 1 kg of extract is obtained from 10 kg of root, so the black ginger extract in each product is highly concentrated.",
    factsTitle: "By the numbers",
    facts: [
      { value: "1,000 m", label: "above sea level in the Thai mountains" },
      { value: "10 kg → 1 kg", label: "only 1 kg of extract from 10 kg of root" },
      { value: "1,000+ yrs", label: "of traditional folk-medicine use" },
    ],
    productsTitle: "Black ginger products",
    productsText: "These products contain black ginger extract.",
  },
};
