let currentLang = localStorage.getItem("pg_lang") || "uz";

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("pg_lang", lang);
  document.documentElement.lang = lang;
  renderPage();
  updateLangButtons();
}

function t(path) {
  const keys = path.split(".");
  let val = TRANSLATIONS[currentLang];
  for (const key of keys) {
    if (val == null) return "";
    val = val[key];
  }
  return val || "";
}

function updateLangButtons() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
}

function renderNav() {
  const el = document.getElementById("nav-links");
  if (!el) return;
  el.innerHTML = `
    <a href="index.html#home" class="nav-link">${t("nav.home")}</a>
    <a href="index.html#products" class="nav-link">${t("nav.products")}</a>
    <a href="index.html#about" class="nav-link">${t("nav.about")}</a>
    <a href="index.html#contact" class="nav-link">${t("nav.contact")}</a>
  `;
}

function renderHero() {
  const badge = document.getElementById("hero-badge");
  const title = document.getElementById("hero-title");
  const subtitle = document.getElementById("hero-subtitle");
  const cta = document.getElementById("hero-cta");
  const ctaSecondary = document.getElementById("hero-cta-secondary");

  if (badge) badge.textContent = t("hero.badge");
  if (title) title.textContent = t("hero.title");
  if (subtitle) subtitle.textContent = t("hero.subtitle");
  if (cta) cta.textContent = t("hero.cta");
  if (ctaSecondary) ctaSecondary.textContent = t("hero.ctaSecondary");
}

function renderProductsSection() {
  const badge = document.getElementById("products-badge");
  const title = document.getElementById("products-title");
  const subtitle = document.getElementById("products-subtitle");
  const grid = document.getElementById("products-grid");

  if (badge) badge.textContent = t("products.sectionBadge");
  if (title) title.textContent = t("products.title");
  if (subtitle) subtitle.textContent = t("products.subtitle");

  if (!grid) return;
  grid.innerHTML = PRODUCTS.map(
    (p) => `
    <div class="product-card" onclick="goToProduct(${p.id})">
      <div class="product-img-wrap">
        <img src="${p.image}" alt="${p.name[currentLang]}" loading="lazy"
          onerror="this.src='images/placeholder.svg'">
        <div class="product-overlay">
          <span class="view-details-btn">${t("products.viewDetails")}</span>
        </div>
      </div>
      <div class="product-info">
        <h3 class="product-name">${p.name[currentLang]}</h3>
        <p class="product-short-desc">${p.shortDesc[currentLang]}</p>
      </div>
    </div>
  `
  ).join("");
}

function renderAbout() {
  const badge = document.getElementById("about-badge");
  const title = document.getElementById("about-title");
  const story = document.getElementById("about-story");
  const missionTitle = document.getElementById("mission-title");
  const missionText = document.getElementById("mission-text");
  const visionTitle = document.getElementById("vision-title");
  const visionText = document.getElementById("vision-text");
  const statsEl = document.getElementById("about-stats");
  const featuresEl = document.getElementById("about-features");

  if (badge) badge.textContent = t("about.sectionBadge");
  if (title) title.textContent = t("about.title");
  if (story) story.textContent = t("about.story");
  if (missionTitle) missionTitle.textContent = t("about.mission.title");
  if (missionText) missionText.textContent = t("about.mission.text");
  if (visionTitle) visionTitle.textContent = t("about.vision.title");
  if (visionText) visionText.textContent = t("about.vision.text");

  const stats = TRANSLATIONS[currentLang].about.stats;
  if (statsEl && stats) {
    statsEl.innerHTML = stats
      .map(
        (s) => `
      <div class="stat-item">
        <span class="stat-value">${s.value}</span>
        <span class="stat-label">${s.label}</span>
      </div>
    `
      )
      .join("");
  }

  const features = TRANSLATIONS[currentLang].about.features;
  if (featuresEl && features) {
    featuresEl.innerHTML = features
      .map(
        (f) => `
      <div class="feature-card">
        <span class="feature-icon">${f.icon}</span>
        <h4 class="feature-title">${f.title}</h4>
        <p class="feature-text">${f.text}</p>
      </div>
    `
      )
      .join("");
  }
}

function renderContact() {
  const badge = document.getElementById("contact-badge");
  const title = document.getElementById("contact-title");
  const subtitle = document.getElementById("contact-subtitle");
  const nameLabel = document.getElementById("label-name");
  const nameInput = document.getElementById("input-name");
  const phoneLabel = document.getElementById("label-phone");
  const phoneInput = document.getElementById("input-phone");
  const msgLabel = document.getElementById("label-message");
  const msgInput = document.getElementById("input-message");
  const submitBtn = document.getElementById("submit-btn");
  const phoneInfo = document.getElementById("info-phone-label");
  const emailInfo = document.getElementById("info-email-label");
  const locationInfo = document.getElementById("info-location-label");
  const locationVal = document.getElementById("info-location-value");
  const hoursInfo = document.getElementById("info-hours-label");
  const hoursVal = document.getElementById("info-hours-value");

  if (badge) badge.textContent = t("contact.sectionBadge");
  if (title) title.textContent = t("contact.title");
  if (subtitle) subtitle.textContent = t("contact.subtitle");
  if (nameLabel) nameLabel.textContent = t("contact.form.name");
  if (nameInput) nameInput.placeholder = t("contact.form.namePlaceholder");
  if (phoneLabel) phoneLabel.textContent = t("contact.form.phone");
  if (phoneInput) phoneInput.placeholder = t("contact.form.phonePlaceholder");
  if (msgLabel) msgLabel.textContent = t("contact.form.message");
  if (msgInput) msgInput.placeholder = t("contact.form.messagePlaceholder");
  if (submitBtn) submitBtn.textContent = t("contact.form.submit");
  if (phoneInfo) phoneInfo.textContent = t("contact.info.phone");
  if (emailInfo) emailInfo.textContent = t("contact.info.email");
  if (locationInfo) locationInfo.textContent = t("contact.info.location");
  if (locationVal) locationVal.textContent = t("contact.info.locationValue");
  if (hoursInfo) hoursInfo.textContent = t("contact.info.workingHours");
  if (hoursVal) hoursVal.textContent = t("contact.info.workingHoursValue");
}

function renderFooter() {
  const tagline = document.getElementById("footer-tagline");
  const quickLinks = document.getElementById("footer-quick-links-title");
  const links = document.getElementById("footer-nav-links");
  const rights = document.getElementById("footer-rights");

  if (tagline) tagline.textContent = t("footer.tagline");
  if (quickLinks) quickLinks.textContent = t("footer.quickLinks");
  if (rights) rights.textContent = t("footer.rights");
  if (links) {
    links.innerHTML = `
      <li><a href="index.html#home">${t("nav.home")}</a></li>
      <li><a href="index.html#products">${t("nav.products")}</a></li>
      <li><a href="index.html#about">${t("nav.about")}</a></li>
      <li><a href="index.html#contact">${t("nav.contact")}</a></li>
    `;
  }
}

function renderPage() {
  renderNav();
  renderHero();
  renderProductsSection();
  renderAbout();
  renderContact();
  renderFooter();
}

function goToProduct(id) {
  window.location.href = `product.html?id=${id}&lang=${currentLang}`;
}

// Sticky header
function initStickyHeader() {
  const header = document.getElementById("main-header");
  if (!header) return;
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });
}

// Mobile menu
function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  if (!toggle || !mobileMenu) return;

  toggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    toggle.classList.toggle("open");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      toggle.classList.remove("open");
    });
  });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href*="#"]');
    if (!link) return;
    const href = link.getAttribute("href");
    if (!href.startsWith("index.html#") && !href.startsWith("#")) return;
    const id = href.split("#")[1];
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
}

// Intersection Observer for animations
function initAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el);
  });
}

// Contact form
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = document.getElementById("submit-btn");
    const success = document.getElementById("form-success");
    btn.disabled = true;
    setTimeout(() => {
      form.reset();
      btn.disabled = false;
      if (success) {
        success.textContent = t("contact.form.success");
        success.classList.add("show");
        setTimeout(() => success.classList.remove("show"), 5000);
      }
    }, 800);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  renderPage();
  updateLangButtons();
  initStickyHeader();
  initMobileMenu();
  initSmoothScroll();
  initContactForm();

  setTimeout(initAnimations, 100);
});
