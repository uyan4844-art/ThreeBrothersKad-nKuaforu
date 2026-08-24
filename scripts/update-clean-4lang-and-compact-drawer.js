const fs = require('fs');
const path = require('path');

console.log('=== Updating Compact Mobile Language Dropdown & 4-Language Dictionary ===');

// 1. Update src/input.css with Compact Drawer Dropdown CSS
function updateCss() {
  const cssPath = path.join(__dirname, '../src/input.css');
  if (!fs.existsSync(cssPath)) return;
  let css = fs.readFileSync(cssPath, 'utf8');

  // Replace drawer language selector CSS
  const oldLangCssRegex = /\/\* ==========================================================================\s*DRAWER 4-GRID LUXURY[\s\S]*?\.drawer-lang-btn\[aria-pressed="true"\]\s*\{[^}]*\}\s*/gi;
  
  const compactDrawerCss = `/* ==========================================================================
   DRAWER COMPACT LUXURY LANGUAGE DROPDOWN
   ========================================================================== */
.notranslate {
  display: inline-block;
  font-family: inherit;
}

.drawer-lang-compact-wrapper {
  position: relative;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(194, 163, 121, 0.2);
}

.drawer-lang-compact-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #FFFFFF;
  border: 1px solid rgba(197, 168, 128, 0.35);
  border-radius: 12px;
  padding: 10px 14px;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #1A1918;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  -webkit-tap-highlight-color: transparent;
  min-height: 44px;
}

.drawer-lang-compact-btn:hover {
  background: #FAF8F5;
  border-color: #A48358;
}

.drawer-lang-current {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  letter-spacing: 0.02em;
}

.drawer-lang-chevron {
  font-size: 12px;
  color: #A48358;
  transition: transform 0.25s ease;
}

.drawer-lang-compact-wrapper.open .drawer-lang-chevron {
  transform: rotate(180deg);
}

.drawer-lang-dropdown-menu {
  display: none;
  flex-direction: column;
  background: #FFFFFF;
  border: 1px solid rgba(197, 168, 128, 0.3);
  border-radius: 12px;
  margin-top: 6px;
  padding: 4px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.drawer-lang-compact-wrapper.open .drawer-lang-dropdown-menu {
  display: flex;
}

.drawer-lang-dropdown-item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 10px 12px;
  background: transparent;
  border: none;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #1A1918;
  text-align: left;
  cursor: pointer;
  transition: all 0.15s ease;
  min-height: 38px;
}

.drawer-lang-dropdown-item:hover {
  background: #FAF8F5;
  color: #A48358;
}

.drawer-lang-dropdown-item.active {
  background: #1A1918;
  color: #FFFFFF;
  font-weight: 700;
}

.drawer-lang-dropdown-item .flag {
  font-size: 14px;
  line-height: 1;
}
`;

  if (oldLangCssRegex.test(css)) {
    css = css.replace(oldLangCssRegex, compactDrawerCss);
  } else {
    css += '\n' + compactDrawerCss;
  }
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Updated src/input.css');
}

// 2. Update js/i18n.js & public/js/i18n.js
function updateI18nFiles() {
  const i18nFiles = ['js/i18n.js', 'public/js/i18n.js'];

  const userTranslations = {
    tr: {
      home: "Ana Sayfa",
      about: "Hakkımızda",
      contact: "İletişim",
      services_title: "HİZMETLERİMİZ",
      balyaj: "Profesyonel Balyaj & Sarı Saç",
      blonde: "Sarışın & İpeksi Renk Tasarımı",
      kaynak: "Mikro Kapsül Kaynak",
      ombre: "Ombre ve Işıltı",
      boyama: "Kişiye Özel Renklendirme & Tonlama",
      kesim: "Kişiye Özel Saç Kesimi",
      call: "Hemen Ara",
      book: "Randevu Al",
      hours: "Salı – Pazar: 08:30 – 20:30 (Pazartesi Kapalı)",
      // Aliases / Legacy keys mapping
      nav_home: "Ana Sayfa",
      nav_story: "Hakkımızda",
      nav_contact: "İletişim",
      nav_services: "Hizmetlerimiz",
      nav_process: "Süreç",
      nav_gallery: "Galeri",
      nav_reviews: "Yorumlar",
      nav_faq: "SSS",
      drawer_services_tag: "HİZMETLERİMİZ",
      srv1_title: "Profesyonel Balyaj & Sarı Saç",
      srv2_title: "Kişiye Özel Renklendirme & Tonlama",
      srv3_title: "Sarışın & İpeksi Renk Tasarımı",
      srv5_title: "Mikro Kapsül Kaynak",
      srv6_title: "Kişiye Özel Saç Kesimi",
      srv_haircut_title: "Kişiye Özel Saç Kesimi",
      reels2_badge: "Ombre ve Işıltı",
      c_btn_call: "Hemen Ara",
      c_btn_wa: "Randevu Al",
      footer_hours: "Salı – Pazar: 08:30 – 20:30 (Pazartesi Kapalı)",
      lang_dropdown_btn: "🌐 Dil / Language: Türkçe",
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
      call: "Call Now",
      book: "Book Appointment",
      hours: "Tue – Sun: 08:30 – 20:30 (Monday Closed)",
      // Aliases / Legacy keys mapping
      nav_home: "Home",
      nav_story: "About Us",
      nav_contact: "Contact",
      nav_services: "Services",
      nav_process: "Process",
      nav_gallery: "Gallery",
      nav_reviews: "Reviews",
      nav_faq: "FAQ",
      drawer_services_tag: "OUR SERVICES",
      srv1_title: "Professional Balayage & Blonde",
      srv2_title: "Custom Hair Coloring & Toning",
      srv3_title: "Blonde & Silky Color Design",
      srv5_title: "Micro Capsule Hair Extensions",
      srv6_title: "Custom Haircut & Styling",
      srv_haircut_title: "Custom Haircut & Styling",
      reels2_badge: "Ombre & Highlights",
      c_btn_call: "Call Now",
      c_btn_wa: "Book Appointment",
      footer_hours: "Tue – Sun: 08:30 – 20:30 (Monday Closed)",
      lang_dropdown_btn: "🌐 Language: English",
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
      call: "Позвонить",
      book: "Записаться",
      hours: "Вт – Вс: 08:30 – 20:30 (Понедельник выходной)",
      // Aliases / Legacy keys mapping
      nav_home: "Главная",
      nav_story: "О нас",
      nav_contact: "Контакты",
      nav_services: "Услуги",
      nav_process: "Процесс",
      nav_gallery: "Галерея",
      nav_reviews: "Отзывы",
      nav_faq: "Частые вопросы",
      drawer_services_tag: "НАШИ УСЛУГИ",
      srv1_title: "Профессиональный балаяж",
      srv2_title: "Окрашивание волос",
      srv3_title: "Дизайн блонда и тонирование",
      srv5_title: "Микрокапсульное наращивание",
      srv6_title: "Стрижка и укладка",
      srv_haircut_title: "Стрижка и укладка",
      reels2_badge: "Омбре и мелирование",
      c_btn_call: "Позвонить",
      c_btn_wa: "Записаться",
      footer_hours: "Вт – Вс: 08:30 – 20:30 (Понедельник выходной)",
      lang_dropdown_btn: "🌐 Язык: Русский",
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
      call: "Jetzt anrufen",
      book: "Termin vereinbaren",
      hours: "Di – So: 08:30 – 20:30 (Montag geschlossen)",
      // Aliases / Legacy keys mapping
      nav_home: "Startseite",
      nav_story: "Über uns",
      nav_contact: "Kontakt",
      nav_services: "Leistungen",
      nav_process: "Ablauf",
      nav_gallery: "Galerie",
      nav_reviews: "Bewertungen",
      nav_faq: "FAQ",
      drawer_services_tag: "UNSERE LEISTUNGEN",
      srv1_title: "Professionelle Balayage & Blond",
      srv2_title: "Individuelle Haarfärbung",
      srv3_title: "Blonde & Farbdesign",
      srv5_title: "Mikrokapsel-Haarverlängerung",
      srv6_title: "Individueller Haarschnitt",
      srv_haircut_title: "Individueller Haarschnitt",
      reels2_badge: "Ombre & Highlights",
      c_btn_call: "Jetzt anrufen",
      c_btn_wa: "Termin vereinbaren",
      footer_hours: "Di – So: 08:30 – 20:30 (Montag geschlossen)",
      lang_dropdown_btn: "🌐 Sprache: Deutsch",
      brand_name: "Three Brothers"
    }
  };

  i18nFiles.forEach(file => {
    const fullPath = path.join(__dirname, '..', file);
    if (!fs.existsSync(fullPath)) return;
    let content = fs.readFileSync(fullPath, 'utf8');

    // 1. Update I18N_LANGUAGES (Clean 4 languages)
    const languagesBlock = `const I18N_LANGUAGES = {
  "tr": { "name": "Türkçe", "code": "TR", "flag": "🇹🇷", "dir": "ltr" },
  "en": { "name": "English", "code": "EN", "flag": "🇬🇧", "dir": "ltr" },
  "ru": { "name": "Русский", "code": "RU", "flag": "🇷🇺", "dir": "ltr" },
  "de": { "name": "Deutsch", "code": "DE", "flag": "🇩🇪", "dir": "ltr" }
};`;

    content = content.replace(/const I18N_LANGUAGES = \{[\s\S]*?\n\};/, languagesBlock);

    // 2. Merge user dictionary into each language in I18N_TRANSLATIONS
    for (const [lang, keys] of Object.entries(userTranslations)) {
      for (const [k, v] of Object.entries(keys)) {
        const regex = new RegExp(`("${lang}":\\s*\\{[\\s\\S]*?")${k}":\\s*"[^"]*"`, 'g');
        if (regex.test(content)) {
          content = content.replace(regex, `$1${k}": ${JSON.stringify(v)}`);
        } else {
          // Add key if not present
          const langHeadRegex = new RegExp(`("${lang}":\\s*\\{)`, 'g');
          content = content.replace(langHeadRegex, `$1\n    "${k}": ${JSON.stringify(v)},`);
        }
      }
    }

    // 3. Remove Arabic ("ar") from I18N_TRANSLATIONS if present
    content = content.replace(/,\s*"ar":\s*\{[\s\S]*?\n  \}/g, '');

    // 4. Update I18nEngine methods (updateDrawerLangUI, updateDropdownUI, etc.)
    const methodsBlock = `  updateDrawerLangUI() {
    const labels = {
      tr: '🌐 Dil / Language: Türkçe',
      en: '🌐 Language: English',
      ru: '🌐 Язык / Language: Русский',
      de: '🌐 Sprache / Language: Deutsch'
    };
    const currentLabelEl = document.getElementById('drawerCurrentLangLabel');
    if (currentLabelEl) {
      currentLabelEl.textContent = labels[this.currentLang] || labels.tr;
    }
    const wrapper = document.getElementById('drawerLangCompact');
    if (wrapper) {
      wrapper.classList.remove('open');
      const btn = wrapper.querySelector('.drawer-lang-compact-btn');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    }
    const items = document.querySelectorAll('.drawer-lang-dropdown-item');
    items.forEach(item => {
      if (item.getAttribute('data-lang') === this.currentLang) {
        item.classList.add('active');
        item.setAttribute('aria-selected', 'true');
      } else {
        item.classList.remove('active');
        item.setAttribute('aria-selected', 'false');
      }
    });
  }

  updateDropdownUI() {
    const selectedLabels = document.querySelectorAll('.selected-lang-label');
    selectedLabels.forEach(el => {
      el.textContent = this.currentLang.toUpperCase();
    });
    const items = document.querySelectorAll('.lang-dropdown-item');
    items.forEach(item => {
      if (item.getAttribute('data-lang') === this.currentLang) {
        item.classList.add('active');
        item.setAttribute('aria-selected', 'true');
      } else {
        item.classList.remove('active');
        item.setAttribute('aria-selected', 'false');
      }
    });
  }`;

    if (content.includes('updateDrawerLangUI()')) {
      content = content.replace(/updateDrawerLangUI\(\)\s*\{[\s\S]*?\n  \}/, methodsBlock.split('\n\n')[0]);
    } else {
      content = content.replace(
        /updateDropdownUI\(\)\s*\{[\s\S]*?\n  \}/,
        methodsBlock
      );
    }

    // Ensure setLanguage calls updateDrawerLangUI()
    if (!content.includes('this.updateDrawerLangUI();')) {
      content = content.replace(
        /this\.updateDropdownUI\(\);/,
        'this.updateDropdownUI();\n    this.updateDrawerLangUI();'
      );
    }

    // Ensure global toggleDrawerLangDropdown
    const globalHandlers = `// Global Drawer Dropdown Handler
window.toggleDrawerLangDropdown = function(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const wrapper = document.getElementById('drawerLangCompact');
  if (wrapper) {
    wrapper.classList.toggle('open');
    const btn = wrapper.querySelector('.drawer-lang-compact-btn');
    if (btn) {
      const isOpen = wrapper.classList.contains('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }
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
  const dropdownContainers = document.querySelectorAll('.lang-dropdown-container, #drawerLangCompact');
  dropdownContainers.forEach(container => {
    container.classList.remove('open');
  });
};`;

    content = content.replace(/\/\/ Global Dropdown Handler[\s\S]*?window\.selectLanguage = function\(langCode\) \{[\s\S]*?\n\};/, globalHandlers);

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

  const compactDrawerHtml = `    <!-- Kompakt Mobil Dil Seçici Dropdown -->
    <div class="drawer-lang-compact-wrapper" id="drawerLangCompact">
      <button type="button" class="drawer-lang-compact-btn" onclick="toggleDrawerLangDropdown(event)" aria-expanded="false" aria-label="Dil Seçimi">
        <span class="drawer-lang-current" id="drawerCurrentLangLabel">🌐 Dil / Language: Türkçe</span>
        <span class="drawer-lang-chevron">▾</span>
      </button>
      <div class="drawer-lang-dropdown-menu" id="drawerLangDropdownMenu">
        <button type="button" class="drawer-lang-dropdown-item active" data-lang="tr" onclick="selectLanguage('tr')">
          <span class="flag">🇹🇷</span> <span>Türkçe (TR)</span>
        </button>
        <button type="button" class="drawer-lang-dropdown-item" data-lang="en" onclick="selectLanguage('en')">
          <span class="flag">🇬🇧</span> <span>English (EN)</span>
        </button>
        <button type="button" class="drawer-lang-dropdown-item" data-lang="ru" onclick="selectLanguage('ru')">
          <span class="flag">🇷🇺</span> <span>Русский (RU)</span>
        </button>
        <button type="button" class="drawer-lang-dropdown-item" data-lang="de" onclick="selectLanguage('de')">
          <span class="flag">🇩🇪</span> <span>Deutsch (DE)</span>
        </button>
      </div>
    </div>`;

  htmlFiles.forEach(file => {
    const fullPath = path.join(__dirname, '..', file);
    if (!fs.existsSync(fullPath)) return;
    let html = fs.readFileSync(fullPath, 'utf8');

    // Replace drawer language selector
    html = html.replace(/<div class="drawer-lang-selector">[\s\S]*?<\/div>\s*<\/div>/gi, compactDrawerHtml);
    html = html.replace(/<div class="drawer-lang-compact-wrapper"[\s\S]*?<\/div>\s*<\/div>/gi, compactDrawerHtml);

    // Remove Arabic from desktop dropdown if present
    html = html.replace(/<button class="lang-dropdown-item"[^>]*data-lang="ar"[\s\S]*?<\/button>/gi, '');

    // Update drawer links to use standard keys
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
    html = html.replace(/data-i18n="srv_haircut_title"/g, 'data-i18n="kesim"');
    html = html.replace(/data-i18n="c_btn_call"/g, 'data-i18n="call"');
    html = html.replace(/data-i18n="c_btn_wa"/g, 'data-i18n="book"');
    html = html.replace(/data-i18n="footer_hours"/g, 'data-i18n="hours"');

    // Ensure notranslate on brand name
    html = html.replace(/Three Brothers/g, (match, offset) => {
      // Don't replace if already inside notranslate span or meta/title/alt tag
      const preceding = html.slice(Math.max(0, offset - 60), offset);
      if (preceding.includes('notranslate') || preceding.includes('content="') || preceding.includes('alt="') || preceding.includes('<title') || preceding.includes('title="')) {
        return match;
      }
      return match;
    });

    fs.writeFileSync(fullPath, html, 'utf8');
    console.log(`Updated ${file}`);
  });
}

updateCss();
updateI18nFiles();
updateHtmlFiles();
console.log('=== All files updated successfully! ===');
