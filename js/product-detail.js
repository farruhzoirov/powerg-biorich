document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const lang = params.get("lang");

  if (lang && ["uz", "ru", "en"].includes(lang)) {
    currentLang = lang;
    localStorage.setItem("pg_lang", lang);
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLang(btn.dataset.lang);
      renderProductDetail(id);
    });
  });

  renderNav();
  renderFooter();
  updateLangButtons();
  renderProductDetail(id);
  initStickyHeader();
  initMobileMenu();
  initSmoothScroll();
});

function renderProductDetail(id) {
  const product = PRODUCTS.find((p) => p.id === id);
  const container = document.getElementById("product-detail");

  if (!product || !container) {
    if (container)
      container.innerHTML = `<p style="text-align:center;padding:4rem">Product not found.</p>`;
    return;
  }

  document.title = `${product.name[currentLang]} — PowerG Biorich`;

  const benefitsList = product.benefits[currentLang]
    .map((b) => `<li><span class="benefit-check">✓</span> ${b}</li>`)
    .join("");

  container.innerHTML = `
    <div class="detail-back">
      <a href="index.html#products" class="back-link">
        ${TRANSLATIONS[currentLang].products.backToProducts}
      </a>
    </div>
    <div class="detail-grid">
      <div class="detail-image-col">
        <div class="detail-image-wrap">
          <img src="${product.image}" alt="${product.name[currentLang]}"
            onerror="this.src='images/placeholder.svg'">
        </div>
      </div>
      <div class="detail-info-col">
        <h1 class="detail-title">${product.name[currentLang]}</h1>
        <p class="detail-short-desc">${product.shortDesc[currentLang]}</p>
        <div class="detail-divider"></div>
        <p class="detail-full-desc">${product.fullDesc[currentLang]}</p>

        <div class="detail-section">
          <h3 class="detail-section-title">
            <span class="section-icon">🌿</span>
            ${TRANSLATIONS[currentLang].products.ingredients}
          </h3>
          <p class="detail-ingredients">${product.ingredients[currentLang]}</p>
        </div>

        <div class="detail-section">
          <h3 class="detail-section-title">
            <span class="section-icon">💚</span>
            ${TRANSLATIONS[currentLang].products.benefits}
          </h3>
          <ul class="benefits-list">${benefitsList}</ul>
        </div>

        <a href="index.html#contact" class="detail-cta-btn">
          ${TRANSLATIONS[currentLang].products.contactForOrder}
        </a>
      </div>
    </div>
  `;

  renderNav();
  updateLangButtons();
}
