# PowerG Biorich — Landing Page

Malayziyadan olib kelingan tabiiy mahsulotlar uchun Next.js landing page.
**3 til: O'zbek / Русский / English**

---

## Texnologiyalar

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **next/font** — Playfair Display + Inter (Google Fonts, optimized)

---

## Loyihani ishga tushirish

```bash
npm install
npm run dev
```

Brauzerda `http://localhost:3000` ni oching.

---

## Rasmlarni qo'shish

| Fayl | O'lcham | Izoh |
|------|---------|------|
| `public/images/hero.jpg` | **1920 × 900 px** | Bosh sahifa rasmi. Landscape, to'q rang fonida yaxshi ko'rinadi |
| `public/images/products/product-1.jpg` … `product-9.jpg` | **600 × 480 px** | 4:3 nisbat |

---

## Mahsulot ma'lumotlarini tahrirlash

`data/products.ts` faylini oching va har bir mahsulot uchun:

```ts
{
  id: 1,
  image: "/images/products/product-1.jpg",
  name:        { uz: "...", ru: "...", en: "..." },
  shortDesc:   { uz: "...", ru: "...", en: "..." },
  fullDesc:    { uz: "...", ru: "...", en: "..." },
  ingredients: { uz: "...", ru: "...", en: "..." },
  benefits: {
    uz: ["Foyda 1", "Foyda 2"],
    ru: ["Польза 1", "Польза 2"],
    en: ["Benefit 1", "Benefit 2"],
  },
}
```

---

## Aloqa ma'lumotlarini o'zgartirish

`components/ContactSection.tsx` faylida telefon va emailni toping:

```tsx
{ icon: "📞", label: t.contact.infoPhone, value: "+998 XX XXX XX XX" },
{ icon: "✉️", label: t.contact.infoEmail, value: "info@powerg-biorich.uz" },
```

---

## Deploy

### Vercel (tavsiya etiladi)
```bash
npx vercel
```

### GitHub Pages (static export)
`next.config.ts` ga `output: "export"` qo'shing, keyin `npm run build`.

---

## Fayl tuzilmasi

```
powerg-biorich/
├── app/
│   ├── globals.css          ← Tailwind + maxsus stillar
│   ├── layout.tsx           ← Root layout (fonts, metadata)
│   ├── page.tsx             ← Bosh sahifa
│   └── products/[id]/
│       └── page.tsx         ← Mahsulot sahifasi (SSG)
├── components/
│   ├── Header.tsx           ← Navigatsiya + til almashtiruvchi
│   ├── Hero.tsx             ← Bosh banner
│   ├── ProductsSection.tsx  ← 3x3 mahsulotlar gridi
│   ├── ProductDetail.tsx    ← Mahsulot tafsiloti
│   ├── AboutSection.tsx     ← Biz haqimizda
│   ├── ContactSection.tsx   ← Aloqa formasi
│   └── Footer.tsx
├── context/
│   └── LangContext.tsx      ← Til holati (localStorage)
├── data/
│   ├── products.ts          ← Mahsulot malumotlari (SHU YERGA KIRITING)
│   └── translations.ts      ← Barcha matnlar 3 tilda
├── hooks/
│   └── useScrollReveal.ts
└── public/
    └── images/
        ├── hero.jpg         ← O'zingizning rasmingizni qo'ying
        └── products/        ← product-1.jpg ... product-9.jpg
```
