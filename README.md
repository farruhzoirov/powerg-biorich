# PowerG Biorich — Landing Page

Malayziyadan olib kelingan tabiiy mahsulotlar uchun statik landing page.  
3 tilda: **O'zbek / Русский / English**

---

## Fayl tuzilmasi

```
powerg-biorich/
├── index.html          ← Asosiy sahifa
├── product.html        ← Mahsulot tafsilot sahifasi (URL: ?id=1)
├── css/
│   └── styles.css      ← Barcha stillar
├── js/
│   ├── translations.js ← Barcha matnlar 3 tilda
│   ├── data.js         ← Mahsulot ma'lumotlari
│   ├── main.js         ← Asosiy mantiq
│   └── product-detail.js ← Mahsulot sahifasi logikasi
└── images/
    ├── hero.jpg        ← Bosh sahifa rasmi (1920×900 px)
    └── products/
        ├── product-1.jpg   (tavsiya: 600×480 px)
        ├── product-2.jpg
        └── ...
```

---

## Rasmlarni qo'shish

| Fayl | Tavsiya o'lchami | Izoh |
|------|-----------------|------|
| `images/hero.jpg` | **1920 × 900 px** | Landscape, to'q rang fonida yaxshi ko'rinadi |
| `images/products/product-1.jpg` … `product-9.jpg` | **600 × 480 px** | 4:3 nisbat, kvadrat ham bo'ladi |

---

## Mahsulot ma'lumotlarini tahrirlash

`js/data.js` faylini oching va har bir mahsulot uchun quyidagilarni to'ldiring:

```js
{
  id: 1,
  image: "images/products/product-1.jpg",
  name: {
    uz: "Mahsulot nomi",
    ru: "Название продукта",
    en: "Product Name",
  },
  shortDesc: { uz: "...", ru: "...", en: "..." },
  fullDesc:  { uz: "...", ru: "...", en: "..." },
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

`index.html` faylida quyidagi qatorlarni toping va o'zgartiring:

```html
<div class="info-value">+998 XX XXX XX XX</div>     ← telefon
<div class="info-value">info@powerg-biorich.uz</div> ← email
```

---

## Deploy (GitHub Pages)

1. Repoga push qiling
2. GitHub → Settings → Pages → Source: `main` branch, `/ (root)`
3. Sayt tayyor: `https://farruhzoirov.github.io/powerg-biorich/`
