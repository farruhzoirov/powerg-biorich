import type { Locale } from "./translations";
import type { CategoryKey } from "./content";

export interface DirectionInfo {
  headline: string;
  intro: string;
  points: string[];
}

interface DirectionsContent {
  badge: string;
  productsTitle: string;
  pointsTitle: string;
  all: string;
  otherTitle: string;
  back: string;
  items: Record<CategoryKey, DirectionInfo>;
}

export const directions: Record<Locale, DirectionsContent> = {
  uz: {
    badge: "Yo'nalish",
    productsTitle: "Shu yo'nalishdagi mahsulotlar",
    pointsTitle: "Nimalarga yordam beradi",
    all: "Barcha mahsulotlar",
    otherTitle: "Boshqa yo'nalishlar",
    back: "Bosh sahifaga qaytish",
    items: {
      detox: {
        headline: "Organizmni tabiiy yo'l bilan tozalang",
        intro:
          "Detoks yo'nalishi organizmda yig'ilib qolgan toksin va shlaklarni chiqarishga, hazm tizimini yengillashtirishga va vaznni nazorat qilishga yordam beradi. Tarkibida qora zanjabil, laym, sossyureya va Garsiniya Kambodjinskaya ekstraktlari mavjud.",
        points: [
          "Parazit, shlak va toksinlardan tozalashga yordam beradi",
          "Hazm tizimi va ichak faoliyatini yaxshilaydi",
          "Vazn va yog' almashinuvini nazorat qilishga ko'maklashadi",
          "Immunitetni mustahkamlaydi",
          "Antioksidant ta'sir ko'rsatadi",
        ],
      },
      kids: {
        headline: "Bolajonlar uchun sog'lom o'sish",
        intro:
          "Bolalar uchun maxsus ishlab chiqilgan oziqlantiruvchi ichimliklar: echki suti, kakao va qora zanjabil ekstrakti asosida. Bolaning o'sishi, xotirasi va immunitetini qo'llab-quvvatlaydi.",
        points: [
          "Immunitetni kuchaytirishga yordam beradi",
          "Xotira va diqqatni jamlashni yaxshilaydi",
          "Suyaklar va sog'lom o'sishni qo'llab-quvvatlaydi",
          "Nafas yo'llari salomatligiga ko'maklashadi",
          "Vitamin va minerallar bilan boyitilgan",
        ],
      },
      restore: {
        headline: "Kuch-quvvat va energiyani qaytaring",
        intro:
          "Tiklovchi mahsulotlar kun bo'yi energiya, chidamlilik va ruhiy faollik beradi. Qora zanjabil, Braziliya qahvasi, qora choy va protein asosida tayyorlangan.",
        points: [
          "Energiya va chidamlilikni oshiradi",
          "Moddalar almashinuvini faollashtiradi",
          "Asab tizimi va ruhiy holatni qo'llab-quvvatlaydi",
          "Mushak to'qimalarini qo'llab-quvvatlaydi",
          "Immunitetni mustahkamlaydi",
        ],
      },
      youth: {
        headline: "Yoshlik va go'zallikni saqlang",
        intro:
          "Yoshartiruvchi mahsulotlar hujayralarni oziqlantiradi, teri, bo'g'im va qon tomirlarini qo'llab-quvvatlaydi. Qora zanjabil, fingerrut va baliq kollagenining kuchli kompleksi.",
        points: [
          "Teri silliqligi va tarangligini qo'llab-quvvatlaydi",
          "Bo'g'im, suyak va soch-tirnoqqa yordam beradi",
          "Kuchli antioksidant va yallig'lanishga qarshi ta'sir",
          "Gormonal muvozanatni qo'llab-quvvatlaydi",
          "Qarish jarayonlarini sekinlashtirishga ko'maklashadi",
        ],
      },
    },
  },
  ru: {
    badge: "Направление",
    productsTitle: "Продукты этого направления",
    pointsTitle: "Чем помогает",
    all: "Все продукты",
    otherTitle: "Другие направления",
    back: "На главную",
    items: {
      detox: {
        headline: "Очищайте организм естественным путём",
        intro:
          "Направление «Детокс» помогает выводить накопившиеся токсины и шлаки, облегчает пищеварение и помогает контролировать вес. В составе экстракты чёрного имбиря, лайма, соссюреи и Гарцинии Камбоджийской.",
        points: [
          "Помогает очищению от паразитов, шлаков и токсинов",
          "Улучшает работу пищеварения и кишечника",
          "Способствует контролю веса и жирового обмена",
          "Укрепляет иммунитет",
          "Оказывает антиоксидантное действие",
        ],
      },
      kids: {
        headline: "Здоровый рост для детей",
        intro:
          "Питательные напитки, созданные специально для детей, на основе козьего молока, какао и экстракта чёрного имбиря. Поддерживают рост, память и иммунитет ребёнка.",
        points: [
          "Помогает укреплять иммунитет",
          "Улучшает память и концентрацию внимания",
          "Поддерживает кости и здоровый рост",
          "Способствует здоровью дыхательных путей",
          "Обогащено витаминами и минералами",
        ],
      },
      restore: {
        headline: "Верните силы и энергию",
        intro:
          "Восстанавливающие продукты дают энергию, выносливость и душевный подъём на весь день. Созданы на основе чёрного имбиря, бразильского кофе, чёрного чая и протеина.",
        points: [
          "Повышает энергию и выносливость",
          "Активизирует обмен веществ",
          "Поддерживает нервную систему и настроение",
          "Поддерживает мышечные ткани",
          "Укрепляет иммунитет",
        ],
      },
      youth: {
        headline: "Сохраните молодость и красоту",
        intro:
          "Омолаживающие продукты питают клетки, поддерживают кожу, суставы и сосуды. Мощный комплекс чёрного имбиря, фингерута и рыбьего коллагена.",
        points: [
          "Поддерживает гладкость и упругость кожи",
          "Помогает суставам, костям, волосам и ногтям",
          "Сильное антиоксидантное и противовоспалительное действие",
          "Поддерживает гормональный баланс",
          "Способствует замедлению процессов старения",
        ],
      },
    },
  },
  en: {
    badge: "Direction",
    productsTitle: "Products in this direction",
    pointsTitle: "How it helps",
    all: "All products",
    otherTitle: "Other directions",
    back: "Back to home",
    items: {
      detox: {
        headline: "Cleanse your body the natural way",
        intro:
          "The Detox line helps remove built-up toxins and waste, eases digestion and supports weight control. It features black ginger, lime, saussurea and Garcinia Cambogia extracts.",
        points: [
          "Helps cleanse parasites, waste and toxins",
          "Improves digestion and gut function",
          "Supports weight and fat metabolism",
          "Strengthens immunity",
          "Provides antioxidant action",
        ],
      },
      kids: {
        headline: "Healthy growth for kids",
        intro:
          "Nourishing drinks designed for children, made with goat's milk, cocoa and black ginger extract. They support a child's growth, memory and immunity.",
        points: [
          "Helps strengthen immunity",
          "Improves memory and concentration",
          "Supports bones and healthy growth",
          "Contributes to respiratory health",
          "Enriched with vitamins and minerals",
        ],
      },
      restore: {
        headline: "Bring back strength and energy",
        intro:
          "Restoring products deliver energy, stamina and mental drive all day. Built on black ginger, Brazilian coffee, black tea and protein.",
        points: [
          "Boosts energy and stamina",
          "Activates metabolism",
          "Supports the nervous system and mood",
          "Supports muscle tissue",
          "Strengthens immunity",
        ],
      },
      youth: {
        headline: "Keep your youth and beauty",
        intro:
          "Rejuvenating products nourish cells and support skin, joints and blood vessels. A powerful blend of black ginger, fingerroot and marine collagen.",
        points: [
          "Supports skin smoothness and firmness",
          "Helps joints, bones, hair and nails",
          "Strong antioxidant and anti-inflammatory action",
          "Supports hormonal balance",
          "Helps slow the aging process",
        ],
      },
    },
  },
};
