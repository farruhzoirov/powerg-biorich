export type Locale = "uz" | "ru" | "en";

export const translations = {
  uz: {
    nav: {
      home: "Bosh sahifa",
      products: "Mahsulotlar",
      about: "Biz haqimizda",
      contact: "Aloqa",
    },
    hero: {
      badge: "Malayziyadan tabiiy mahsulotlar",
      title: "PowerG Biorich",
      subtitle:
        "Sog'liq va farovonlik uchun eng sifatli tabiiy mahsulotlar kolleksiyasi",
      cta: "Mahsulotlarni ko'rish",
      ctaSecondary: "Biz haqimizda",
    },
    products: {
      badge: "Bizning kolleksiya",
      title: "Mahsulotlarimiz",
      subtitle:
        "Malayziyadan keltirilib, sifat standartlari bilan ishlab chiqarilgan tabiiy mahsulotlar",
      viewDetails: "Batafsil ko'rish",
      ingredients: "Tarkibi",
      benefits: "Foydasi",
      backToProducts: "Mahsulotlarga qaytish",
      contactForOrder: "Buyurtma uchun bog'laning",
    },
    about: {
      badge: "Biz haqimizda",
      title: "PowerG Biorich",
      story:
        "PowerG Biorich — Malayziyadan olib keltiriladigan sifatli tabiiy mahsulotlar distribyutori. Biz energetik marketing va sog'lomlashtirish sohasida ishlaymiz, har bir insonning sog'lig'ini yaxshilashga yordam berishni maqsad qilib qo'yganmiz.",
      missionTitle: "Bizning maqsadimiz",
      missionText:
        "Tabiiy, ekologik toza mahsulotlar orqali har bir oilaga sog'liq va farovonlik olib kelish.",
      visionTitle: "Bizning ko'rishimiz",
      visionText:
        "O'zbekistonda sog'lom turmush tarzi madaniyatini rivojlantirish va sifatli tabiiy mahsulotlarni barcha uchun qulaylashtirish.",
      stats: [
        { value: "100%", label: "Tabiiy tarkib" },
        { value: "9+", label: "Mahsulot turi" },
        { value: "MY", label: "Malayziya sifati" },
        { value: "24/7", label: "Mijozlarga xizmat" },
      ],
      features: [
        { icon: "🌿", title: "100% Tabiiy", text: "Barcha mahsulotlar tabiiy komponentlardan iborat" },
        { icon: "✈️", title: "Malayziyadan", text: "Bevosita ishlab chiqaruvchidan import qilinadi" },
        { icon: "🏆", title: "Sifat kafolati", text: "Xalqaro sifat standartlariga mos keladi" },
        { icon: "💚", title: "Sog'liqqa foydali", text: "Klinik tadqiqotlar bilan tasdiqlangan" },
      ],
    },
    contact: {
      badge: "Bog'lanish",
      title: "Biz bilan bog'laning",
      subtitle: "Savol va takliflar uchun bizga murojaat qiling",
      labelName: "Ismingiz",
      placeholderName: "Ismingizni kiriting",
      labelPhone: "Telefon raqamingiz",
      placeholderPhone: "+998 XX XXX XX XX",
      labelMessage: "Xabaringiz",
      placeholderMessage: "Savolingizni yozing...",
      submit: "Yuborish",
      successMsg: "Xabaringiz qabul qilindi! Tez orada siz bilan bog'lanamiz.",
      infoPhone: "Telefon",
      infoEmail: "Email",
      infoLocation: "Manzil",
      locationValue: "Toshkent, O'zbekiston",
      infoHours: "Ish vaqti",
      hoursValue: "Dush–Shan: 9:00 – 18:00",
    },
    footer: {
      tagline: "Sog'liq va farovonlik uchun tabiiy mahsulotlar",
      quickLinks: "Tezkor havolalar",
      rights: "© 2025 PowerG Biorich. Barcha huquqlar himoyalangan.",
    },
  },

  ru: {
    nav: {
      home: "Главная",
      products: "Продукты",
      about: "О нас",
      contact: "Контакты",
    },
    hero: {
      badge: "Натуральные продукты из Малайзии",
      title: "PowerG Biorich",
      subtitle:
        "Коллекция высококачественных натуральных продуктов для здоровья и благополучия",
      cta: "Смотреть продукты",
      ctaSecondary: "О нас",
    },
    products: {
      badge: "Наша коллекция",
      title: "Наши продукты",
      subtitle:
        "Натуральные продукты, импортированные из Малайзии по стандартам качества",
      viewDetails: "Подробнее",
      ingredients: "Состав",
      benefits: "Польза",
      backToProducts: "Назад к продуктам",
      contactForOrder: "Связаться для заказа",
    },
    about: {
      badge: "О нас",
      title: "PowerG Biorich",
      story:
        "PowerG Biorich — дистрибьютор качественных натуральных продуктов из Малайзии. Мы работаем в сфере энергетического маркетинга и оздоровления, стремясь помочь каждому улучшить своё здоровье.",
      missionTitle: "Наша миссия",
      missionText:
        "Принести здоровье и благополучие каждой семье через натуральные, экологически чистые продукты.",
      visionTitle: "Наше видение",
      visionText:
        "Развивать культуру здорового образа жизни в Узбекистане и сделать качественные продукты доступными для всех.",
      stats: [
        { value: "100%", label: "Натуральный состав" },
        { value: "9+", label: "Видов продуктов" },
        { value: "MY", label: "Качество Малайзии" },
        { value: "24/7", label: "Поддержка клиентов" },
      ],
      features: [
        { icon: "🌿", title: "100% Натуральный", text: "Все продукты состоят из натуральных компонентов" },
        { icon: "✈️", title: "Из Малайзии", text: "Импортируется напрямую от производителя" },
        { icon: "🏆", title: "Гарантия качества", text: "Соответствует международным стандартам качества" },
        { icon: "💚", title: "Полезно для здоровья", text: "Подтверждено клиническими исследованиями" },
      ],
    },
    contact: {
      badge: "Контакты",
      title: "Свяжитесь с нами",
      subtitle: "Обращайтесь по любым вопросам и предложениям",
      labelName: "Ваше имя",
      placeholderName: "Введите ваше имя",
      labelPhone: "Ваш телефон",
      placeholderPhone: "+998 XX XXX XX XX",
      labelMessage: "Сообщение",
      placeholderMessage: "Напишите ваш вопрос...",
      submit: "Отправить",
      successMsg: "Ваше сообщение получено! Мы свяжемся с вами в ближайшее время.",
      infoPhone: "Телефон",
      infoEmail: "Email",
      infoLocation: "Адрес",
      locationValue: "Ташкент, Узбекистан",
      infoHours: "Часы работы",
      hoursValue: "Пн–Сб: 9:00 – 18:00",
    },
    footer: {
      tagline: "Натуральные продукты для здоровья и благополучия",
      quickLinks: "Быстрые ссылки",
      rights: "© 2025 PowerG Biorich. Все права защищены.",
    },
  },

  en: {
    nav: {
      home: "Home",
      products: "Products",
      about: "About",
      contact: "Contact",
    },
    hero: {
      badge: "Natural Products from Malaysia",
      title: "PowerG Biorich",
      subtitle:
        "A collection of premium natural products for health and wellness",
      cta: "View Products",
      ctaSecondary: "About Us",
    },
    products: {
      badge: "Our Collection",
      title: "Our Products",
      subtitle:
        "Natural products imported from Malaysia meeting the highest quality standards",
      viewDetails: "View Details",
      ingredients: "Ingredients",
      benefits: "Benefits",
      backToProducts: "Back to Products",
      contactForOrder: "Contact for Order",
    },
    about: {
      badge: "About Us",
      title: "PowerG Biorich",
      story:
        "PowerG Biorich is a distributor of premium natural products from Malaysia. We work in energy marketing and wellness, aiming to help every individual improve their health and quality of life.",
      missionTitle: "Our Mission",
      missionText:
        "To bring health and prosperity to every family through natural, eco-friendly products.",
      visionTitle: "Our Vision",
      visionText:
        "To cultivate a healthy lifestyle culture in Uzbekistan and make quality natural products accessible to everyone.",
      stats: [
        { value: "100%", label: "Natural Ingredients" },
        { value: "9+", label: "Product Types" },
        { value: "MY", label: "Malaysian Quality" },
        { value: "24/7", label: "Customer Support" },
      ],
      features: [
        { icon: "🌿", title: "100% Natural", text: "All products consist of natural components" },
        { icon: "✈️", title: "From Malaysia", text: "Imported directly from the manufacturer" },
        { icon: "🏆", title: "Quality Guarantee", text: "Meets international quality standards" },
        { icon: "💚", title: "Health Benefits", text: "Confirmed by clinical research" },
      ],
    },
    contact: {
      badge: "Get In Touch",
      title: "Contact Us",
      subtitle: "Reach out to us for any questions and suggestions",
      labelName: "Your Name",
      placeholderName: "Enter your name",
      labelPhone: "Your Phone",
      placeholderPhone: "+998 XX XXX XX XX",
      labelMessage: "Message",
      placeholderMessage: "Write your question...",
      submit: "Send Message",
      successMsg: "Your message has been received! We will contact you shortly.",
      infoPhone: "Phone",
      infoEmail: "Email",
      infoLocation: "Address",
      locationValue: "Tashkent, Uzbekistan",
      infoHours: "Working Hours",
      hoursValue: "Mon–Sat: 9:00 AM – 6:00 PM",
    },
    footer: {
      tagline: "Natural products for health and wellness",
      quickLinks: "Quick Links",
      rights: "© 2025 PowerG Biorich. All rights reserved.",
    },
  },
} as const;

export type Translations = typeof translations.uz;
