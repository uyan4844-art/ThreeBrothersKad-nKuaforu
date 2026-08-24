const fs = require('fs');
const path = require('path');

console.log('=== Purging Hardcoded German and Enforcing Strict 100% Turkish Default ===');

// 1. Update js/i18n.js & public/js/i18n.js
const i18nFiles = ['js/i18n.js', 'public/js/i18n.js'];

const dictionary = {
  tr: {
    home: "Ana Sayfa",
    about: "Hakkımızda",
    contact: "İletişim",
    services_title: "HİZMETLERİMİZ",
    balyaj: "Profesyonel Balyaj & Sarı Saç",
    blonde: "Blonde & İpeksi Renk Tasarımı",
    kaynak: "Mikro Kapsül Kaynak",
    ombre: "Ombre & Işıltı",
    boyama: "Kişiye Özel Renklendirme & Tonlama",
    kesim: "Kişiye Özel Saç Kesimi",
    hours: "Salı – Pazar: 08:30 – 20:30 (Pazartesi Kapalı)",
    call: "Hemen Ara",
    book: "Randevu Al",
    c_btn_maps: "Yol Tarifi Al",
    nav_home: "Ana Sayfa",
    nav_story: "Hakkımızda",
    nav_contact: "İletişim",
    nav_services: "Hizmetlerimiz",
    drawer_services_tag: "HİZMETLERİMİZ",
    srv1_title: "Profesyonel Balyaj & Sarı Saç",
    srv2_title: "Kişiye Özel Renklendirme & Tonlama",
    srv3_title: "Blonde & İpeksi Renk Tasarımı",
    srv5_title: "Mikro Kapsül Kaynak",
    srv6_title: "Kişiye Özel Saç Kesimi",
    reels2_badge: "Ombre & Işıltı",
    c_btn_call: "Hemen Ara",
    c_btn_wa: "Randevu Al",
    footer_hours: "Salı – Pazar: 08:30 – 20:30 (Pazartesi Kapalı)",
    brand_name: "Three Brothers"
  },
  en: {
    home: "Home",
    about: "About Us",
    contact: "Contact",
    services_title: "OUR SERVICES",
    balyaj: "Professional Balayage & Blonde",
    blonde: "Blonde & Silky Color Design",
    kaynak: "Micro Capsule Hair Extensions",
    ombre: "Ombre & Highlights",
    boyama: "Custom Hair Coloring & Toning",
    kesim: "Custom Haircut & Styling",
    hours: "Tue – Sun: 08:30 – 20:30 (Monday Closed)",
    call: "Call Now",
    book: "Book Appointment",
    c_btn_maps: "Get Directions",
    nav_home: "Home",
    nav_story: "About Us",
    nav_contact: "Contact",
    nav_services: "Services",
    drawer_services_tag: "OUR SERVICES",
    srv1_title: "Professional Balayage & Blonde",
    srv2_title: "Custom Hair Coloring & Toning",
    srv3_title: "Blonde & Silky Color Design",
    srv5_title: "Micro Capsule Hair Extensions",
    srv6_title: "Custom Haircut & Styling",
    reels2_badge: "Ombre & Highlights",
    c_btn_call: "Call Now",
    c_btn_wa: "Book Appointment",
    footer_hours: "Tue – Sun: 08:30 – 20:30 (Monday Closed)",
    brand_name: "Three Brothers"
  },
  ru: {
    home: "Главная",
    about: "О нас",
    contact: "Контакты",
    services_title: "НАШИ УСЛУГИ",
    balyaj: "Профессиональный балаяж",
    blonde: "Дизайн блонда и тонирование",
    kaynak: "Микрокапсульное наращивание",
    ombre: "Омбре и мелирование",
    boyama: "Окрашивание волос",
    kesim: "Стрижка и укладка",
    hours: "Вт – Вс: 08:30 – 20:30 (Понедельник выходной)",
    call: "Позвонить",
    book: "Записаться",
    c_btn_maps: "Как добраться",
    nav_home: "Главная",
    nav_story: "О нас",
    nav_contact: "Контакты",
    nav_services: "Услуги",
    drawer_services_tag: "НАШИ УСЛУГИ",
    srv1_title: "Профессиональный балаяж",
    srv2_title: "Окрашивание волос",
    srv3_title: "Дизайн блонда и тонирование",
    srv5_title: "Микрокапсульное наращивание",
    srv6_title: "Стрижка и укладка",
    reels2_badge: "Омбре и мелирование",
    c_btn_call: "Позвонить",
    c_btn_wa: "Записаться",
    footer_hours: "Вт – Вс: 08:30 – 20:30 (Понедельник выходной)",
    brand_name: "Three Brothers"
  },
  de: {
    home: "Startseite",
    about: "Über uns",
    contact: "Kontakt",
    services_title: "UNSERE LEISTUNGEN",
    balyaj: "Professionelle Balayage & Blond",
    blonde: "Blonde & Farbdesign",
    kaynak: "Mikrokapsel-Haarverlängerung",
    ombre: "Ombre & Highlights",
    boyama: "Individuelle Haarfärbung",
    kesim: "Individueller Haarschnitt",
    hours: "Di – So: 08:30 – 20:30 (Montag geschlossen)",
    call: "Jetzt anrufen",
    book: "Termin vereinbaren",
    c_btn_maps: "Wegbeschreibung",
    nav_home: "Startseite",
    nav_story: "Über uns",
    nav_contact: "Kontakt",
    nav_services: "Leistungen",
    drawer_services_tag: "UNSERE LEISTUNGEN",
    srv1_title: "Professionelle Balayage & Blond",
    srv2_title: "Individuelle Haarfärbung",
    srv3_title: "Blonde & Farbdesign",
    srv5_title: "Mikrokapsel-Haarverlängerung",
    srv6_title: "Individueller Haarschnitt",
    reels2_badge: "Ombre & Highlights",
    c_btn_call: "Jetzt anrufen",
    c_btn_wa: "Termin vereinbaren",
    footer_hours: "Di – So: 08:30 – 20:30 (Montag geschlossen)",
    brand_name: "Three Brothers"
  }
};

i18nFiles.forEach(file => {
  const fullPath = path.join(__dirname, '..', file);
  if (!fs.existsSync(fullPath)) return;
  let content = fs.readFileSync(fullPath, 'utf8');

  // Ensure strict TR default in class constructor
  content = content.replace(
    /constructor\(\)\s*\{[\s\S]*?this\.currentLang\s*=\s*[^;]*;[\s\S]*?\}/,
    `constructor() {
    this.languages = I18N_LANGUAGES;
    this.translations = I18N_TRANSLATIONS;
    this.defaultLang = 'tr';
    this.currentLang = this.getSavedLanguage() || 'tr';
  }`
  );

  // Overwrite dictionary values
  for (const [lang, keys] of Object.entries(dictionary)) {
    for (const [k, v] of Object.entries(keys)) {
      const regex = new RegExp(`("${lang}":\\s*\\{[\\s\\S]*?")${k}":\\s*"[^"]*"`, 'g');
      if (regex.test(content)) {
        content = content.replace(regex, `$1${k}": ${JSON.stringify(v)}`);
      } else {
        const langHeadRegex = new RegExp(`("${lang}":\\s*\\{)`, 'g');
        content = content.replace(langHeadRegex, `$1\n    "${k}": ${JSON.stringify(v)},`);
      }
    }
  }

  // Update updateDrawerLangUI()
  const drawerLangUIFn = `  updateDrawerLangUI() {
    const badgeEl = document.getElementById('drawerLangBadge');
    if (badgeEl) {
      badgeEl.textContent = \`(\${this.currentLang.toUpperCase()})\`;
    }
    const row = document.querySelector('.drawer-lang-row');
    if (row) {
      row.classList.remove('open');
    }
    const optionBtns = document.querySelectorAll('.drawer-lang-option-btn');
    optionBtns.forEach(btn => {
      if (btn.getAttribute('data-lang') === this.currentLang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }`;

  content = content.replace(/updateDrawerLangUI\(\)\s*\{[\s\S]*?\n  \}/, drawerLangUIFn);

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Updated ${file}`);
});

// 2. Update all HTML files with pure Turkish initial markup in the drawer
const htmlFiles = [
  'index.html',
  'hakkimizda.html',
  'balyaj.html',
  'blonde.html',
  'kaynak.html',
  'ombre.html',
  'renklendirme.html',
  'public/index.html',
  'public/hakkimizda.html',
  'public/balyaj.html',
  'public/blonde.html',
  'public/kaynak.html',
  'public/ombre.html',
  'public/renklendirme.html'
];

const fullTurkishDrawerHtml = `  <aside id="side-drawer" class="side-drawer" aria-label="Gezinme Menüsü">
    <div class="drawer-header">
      <div class="drawer-brand">
        <h3 data-i18n="brand_name" class="notranslate" translate="no">Three Brothers</h3>
        <span data-i18n="brand_tagline">KADIN KUAFÖRÜ · MANAVGAT</span>
      </div>
      <button class="drawer-close-btn" onclick="toggleMenu()" aria-label="Menüyü Kapat" type="button" style="min-width: 44px; min-height: 44px;">
        ✕
      </button>
    </div>

    <nav class="drawer-nav">
      <!-- Ana Sayfa Linkleri & Dil Seçimi (Ana Sayfa Stiliyle Birebir Aynı) -->
      <ul class="drawer-main-links">
        <li><a href="index.html#hero" onclick="toggleMenu()"><span data-i18n="home">Ana Sayfa</span> <span class="arrow">&rarr;</span></a></li>
        <li><a href="hakkimizda.html"><span data-i18n="about">Hakkımızda</span> <span class="arrow">&rarr;</span></a></li>
        <li><a href="index.html#iletisim" onclick="toggleMenu()"><span data-i18n="contact">İletişim</span> <span class="arrow">&rarr;</span></a></li>
        
        <!-- Dil Seçimi Satırı (Ana Sayfa Stiliyle Birebir Aynı) -->
        <li class="drawer-lang-row">
          <button type="button" class="drawer-lang-accordion-btn" onclick="toggleDrawerLangAccordion(event)">
            <span class="drawer-lang-title">Dil Seçimi <span class="drawer-lang-badge" id="drawerLangBadge">(TR)</span></span>
            <span class="drawer-lang-chevron-icon" id="drawerLangChevronIcon">▾</span>
          </button>
          <div class="drawer-lang-options-grid" id="drawerLangOptionsGrid">
            <button type="button" class="drawer-lang-option-btn active" data-lang="tr" onclick="selectLanguage('tr')">Türkçe (TR)</button>
            <button type="button" class="drawer-lang-option-btn" data-lang="en" onclick="selectLanguage('en')">English (EN)</button>
            <button type="button" class="drawer-lang-option-btn" data-lang="ru" onclick="selectLanguage('ru')">Русский (RU)</button>
            <button type="button" class="drawer-lang-option-btn" data-lang="de" onclick="selectLanguage('de')">Deutsch (DE)</button>
          </div>
        </li>
      </ul>

      <!-- Hizmetler Bölümü -->
      <div class="drawer-services-section">
        <span class="drawer-section-tag" data-i18n="services_title">HİZMETLERİMİZ</span>
        <ul class="drawer-service-links-list">
          <li>
            <a href="balyaj.html" style="min-height: 44px;">
              <span class="bullet">•</span>
              <span class="service-name" data-i18n="balyaj">Profesyonel Balyaj & Sarı Saç</span>
              <span class="service-arrow">&rarr;</span>
            </a>
          </li>
          <li>
            <a href="blonde.html" style="min-height: 44px;">
              <span class="bullet">•</span>
              <span class="service-name" data-i18n="blonde">Blonde & İpeksi Renk Tasarımı</span>
              <span class="service-arrow">&rarr;</span>
            </a>
          </li>
          <li>
            <a href="kaynak.html" style="min-height: 44px;">
              <span class="bullet">•</span>
              <span class="service-name" data-i18n="kaynak">Mikro Kapsül Kaynak</span>
              <span class="service-arrow">&rarr;</span>
            </a>
          </li>
          <li>
            <a href="ombre.html" style="min-height: 44px;">
              <span class="bullet">•</span>
              <span class="service-name" data-i18n="ombre">Ombre & Işıltı</span>
              <span class="service-arrow">&rarr;</span>
            </a>
          </li>
          <li>
            <a href="renklendirme.html" style="min-height: 44px;">
              <span class="bullet">•</span>
              <span class="service-name" data-i18n="boyama">Kişiye Özel Renklendirme & Tonlama</span>
              <span class="service-arrow">&rarr;</span>
            </a>
          </li>
          <li>
            <a href="renklendirme.html#kesim" style="min-height: 44px;">
              <span class="bullet">•</span>
              <span class="service-name" data-i18n="kesim">Kişiye Özel Saç Kesimi</span>
              <span class="service-arrow">&rarr;</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- Alt İletişim & Aksiyon Kartı -->
      <div class="drawer-footer-info">
        <div class="drawer-contact-line">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          <span>0552 685 69 07</span>
        </div>
        <div class="drawer-hours-line">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          <span data-i18n="hours">Salı – Pazar: 08:30 – 20:30 (Pazartesi Kapalı)</span>
        </div>
        
        <div class="drawer-action-dual-row">
          <a href="tel:+905526856907" class="drawer-action-btn btn-call" data-i18n="call" style="min-height: 44px;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/></svg>
            <span>Hemen Ara</span>
          </a>
          <a href="https://maps.google.com/?cid=16986332279537405342" target="_blank" rel="noopener noreferrer" class="drawer-action-btn btn-map" data-i18n="c_btn_maps" style="min-height: 44px;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>Yol Tarifi Al</span>
          </a>
        </div>

        <a href="https://wa.me/905526856907?text=Merhaba,%20Three%20Brothers%20salonunuzdan%20randevu%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" class="drawer-wa-full-btn" data-i18n="book" style="min-height: 44px;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
          </svg>
          <span>Randevu Al</span>
        </a>
      </div>
    </nav>
  </aside>`;

htmlFiles.forEach(file => {
  const fullPath = path.join(__dirname, '..', file);
  if (!fs.existsSync(fullPath)) return;
  let html = fs.readFileSync(fullPath, 'utf8');

  // Replace entire aside#side-drawer
  html = html.replace(/<aside id="side-drawer"[\s\S]*?<\/aside>/gi, fullTurkishDrawerHtml);

  fs.writeFileSync(fullPath, html, 'utf8');
  console.log(`Updated ${file} with 100% Turkish default drawer`);
});

console.log('=== All files updated to 100% Turkish default! ===');
