const fs = require('fs');
const path = require('path');

console.log('=== Implementing Drawer Language Accordion Row & Strict TR Default ===');

// 1. Update src/input.css
function updateCss() {
  const cssPath = path.join(__dirname, '../src/input.css');
  if (!fs.existsSync(cssPath)) return;
  let css = fs.readFileSync(cssPath, 'utf8');

  // Replace drawer language selector CSS
  const oldLangCssRegex = /\/\* ==========================================================================\s*DRAWER (?:COMPACT LUXURY LANGUAGE DROPDOWN|4-GRID)[\s\S]*?\.drawer-lang-dropdown-item\s*\.flag\s*\{[^}]*\}\s*/gi;
  
  const accordionCss = `/* ==========================================================================
   DRAWER ACCORDION LANGUAGE SELECTOR (MATCHING MAIN LINKS EXACTLY)
   ========================================================================== */
.notranslate {
  display: inline-block;
  font-family: inherit;
}

.drawer-lang-row {
  border-bottom: 1px solid rgba(197, 168, 128, 0.18);
  padding: 2px 0 6px;
  list-style: none;
}

.drawer-lang-accordion-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  border: none;
  padding: 8px 0;
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 700;
  color: #1A1918;
  cursor: pointer;
  text-align: left;
  transition: color 0.25s var(--ease-expo);
}

.drawer-lang-accordion-btn:hover {
  color: var(--gold-dark);
}

.drawer-lang-badge {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: #78716C;
  margin-left: 6px;
}

.drawer-lang-chevron-icon {
  color: #A8A29E;
  font-size: 1.1rem;
  transition: transform 0.25s ease;
}

.drawer-lang-row.open .drawer-lang-chevron-icon {
  transform: rotate(180deg);
}

.drawer-lang-options-grid {
  display: none;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 6px 0 10px;
}

.drawer-lang-row.open .drawer-lang-options-grid {
  display: grid;
}

.drawer-lang-option-btn {
  background: #FFFFFF;
  border: 1px solid rgba(229, 231, 235, 1);
  border-radius: 12px;
  padding: 9px 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #44403C;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
}

.drawer-lang-option-btn:hover {
  background: #FAF8F5;
  border-color: #C5A880;
}

.drawer-lang-option-btn.active {
  background: #1A1918 !important;
  color: #FFFFFF !important;
  border-color: #1A1918 !important;
  box-shadow: 0 2px 8px rgba(26, 25, 24, 0.25);
}
`;

  if (oldLangCssRegex.test(css)) {
    css = css.replace(oldLangCssRegex, accordionCss);
  } else {
    css += '\n' + accordionCss;
  }
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Updated src/input.css');
}

// 2. Update js/i18n.js & public/js/i18n.js
function updateI18nFiles() {
  const i18nFiles = ['js/i18n.js', 'public/js/i18n.js'];

  const exactTranslations = {
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
      // Legacy / Subpage aliases
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
      // Legacy / Subpage aliases
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
      // Legacy / Subpage aliases
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
      // Legacy / Subpage aliases
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

    // 1. Set strictly defaultLang = 'tr' and NO browser sniffing forcing German
    content = content.replace(
      /constructor\(\)\s*\{[\s\S]*?this\.currentLang\s*=\s*[^;]*;[\s\S]*?\}/,
      `constructor() {
    this.languages = I18N_LANGUAGES;
    this.translations = I18N_TRANSLATIONS;
    this.defaultLang = 'tr';
    this.currentLang = this.getSavedLanguage() || 'tr';
  }`
    );

    // 2. Merge exact translations into I18N_TRANSLATIONS
    for (const [lang, keys] of Object.entries(exactTranslations)) {
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

    // 3. Update updateDrawerLangUI()
    const updateDrawerLangUIFunction = `  updateDrawerLangUI() {
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
        btn.setAttribute('aria-selected', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      }
    });
  }`;

    content = content.replace(/updateDrawerLangUI\(\)\s*\{[\s\S]*?\n  \}/, updateDrawerLangUIFunction);

    // 4. Update window global handlers
    const globalHandlers = `// Global Drawer Accordion Handler
window.toggleDrawerLangAccordion = function(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const row = document.querySelector('.drawer-lang-row');
  if (row) {
    row.classList.toggle('open');
  }
};

window.toggleLangDropdown = function(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const dropdownContainers = document.querySelectorAll('.lang-dropdown-container');
  dropdownContainers.forEach(container => {
    container.classList.toggle('open');
  });
};

window.selectLanguage = function(langCode) {
  if (window.I18n) {
    window.I18n.setLanguage(langCode);
  }
  const dropdownContainers = document.querySelectorAll('.lang-dropdown-container');
  dropdownContainers.forEach(container => {
    container.classList.remove('open');
  });
  const row = document.querySelector('.drawer-lang-row');
  if (row) {
    row.classList.remove('open');
  }
};`;

    content = content.replace(/\/\/ Global Drawer (?:Dropdown|Accordion) Handler[\s\S]*?window\.selectLanguage = function\(langCode\) \{[\s\S]*?\n\};/, globalHandlers);

    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated ${file}`);
  });
}

// 3. Update HTML files
function updateHtmlFiles() {
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

  const drawerNavLinksBlock = `      <!-- Ana Sayfa Linkleri & Dil Seçimi (Ana Sayfa Stiliyle Birebir Aynı) -->
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
      </ul>`;

  htmlFiles.forEach(file => {
    const fullPath = path.join(__dirname, '..', file);
    if (!fs.existsSync(fullPath)) return;
    let html = fs.readFileSync(fullPath, 'utf8');

    // Remove old standalone drawer language selector if outside nav
    html = html.replace(/<div class="drawer-lang-compact-wrapper"[\s\S]*?<\/div>\s*<\/div>/gi, '');
    html = html.replace(/<div class="drawer-lang-selector">[\s\S]*?<\/div>\s*<\/div>/gi, '');

    // Replace drawer-main-links block inside drawer-nav
    html = html.replace(
      /<ul class="drawer-main-links">[\s\S]*?<\/ul>/gi,
      drawerNavLinksBlock
    );

    // Update keys in drawer service links & footer
    html = html.replace(/data-i18n="nav_home"/g, 'data-i18n="home"');
    html = html.replace(/data-i18n="nav_story"/g, 'data-i18n="about"');
    html = html.replace(/data-i18n="nav_contact"/g, 'data-i18n="contact"');
    html = html.replace(/data-i18n="drawer_services_tag"/g, 'data-i18n="services_title"');
    html = html.replace(/data-i18n="srv1_title"/g, 'data-i18n="balyaj"');
    html = html.replace(/data-i18n="srv3_title"/g, 'data-i18n="blonde"');
    html = html.replace(/data-i18n="srv5_title"/g, 'data-i18n="kaynak"');
    html = html.replace(/data-i18n="reels2_badge"/g, 'data-i18n="ombre"');
    html = html.replace(/data-i18n="srv2_title"/g, 'data-i18n="boyama"');
    html = html.replace(/data-i18n="srv6_title"/g, 'data-i18n="kesim"');
    html = html.replace(/data-i18n="c_btn_call"/g, 'data-i18n="call"');
    html = html.replace(/data-i18n="c_btn_wa"/g, 'data-i18n="book"');
    html = html.replace(/data-i18n="footer_hours"/g, 'data-i18n="hours"');

    fs.writeFileSync(fullPath, html, 'utf8');
    console.log(`Updated ${file}`);
  });
}

updateCss();
updateI18nFiles();
updateHtmlFiles();
console.log('=== Done! ===');
