const fs = require('fs');
const path = require('path');

console.log('=== Starting Mobile I18n & Notranslate Brand Protection Update ===');

// 1. Update src/input.css to include Drawer Lang Selector and Notranslate
function updateCss() {
  const cssPath = path.join(__dirname, '../src/input.css');
  if (!fs.existsSync(cssPath)) return;
  let css = fs.readFileSync(cssPath, 'utf8');

  const langCss = `
/* ==========================================================================
   DRAWER 4-GRID LUXURY LANGUAGE SELECTOR & NOTRANSLATE SHIELD
   ========================================================================== */
.notranslate {
  display: inline-block;
  font-family: inherit;
}

.drawer-lang-selector {
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(194, 163, 121, 0.2);
}

.drawer-lang-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  width: 100%;
}

.drawer-lang-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  border: 1px solid rgba(197, 168, 128, 0.28);
  border-radius: 14px;
  padding: 8px 4px;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  text-decoration: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  -webkit-tap-highlight-color: transparent;
  min-height: 52px;
}

.drawer-lang-btn .lang-flag {
  font-size: 1.25rem;
  line-height: 1;
  margin-bottom: 3px;
}

.drawer-lang-btn .lang-code {
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #1A1918;
}

.drawer-lang-btn:hover {
  background: #FAF8F5;
  border-color: #C5A880;
  transform: translateY(-1px);
}

.drawer-lang-btn.active,
.drawer-lang-btn[aria-pressed="true"] {
  background: #1A1918 !important;
  border-color: #1A1918 !important;
  box-shadow: 0 4px 12px rgba(26, 25, 24, 0.25);
  transform: scale(1.02);
}

.drawer-lang-btn.active .lang-code,
.drawer-lang-btn[aria-pressed="true"] .lang-code {
  color: #FFFFFF !important;
}
`;

  if (!css.includes('DRAWER 4-GRID LUXURY LANGUAGE SELECTOR')) {
    css += '\n' + langCss;
    fs.writeFileSync(cssPath, css, 'utf8');
    console.log('Updated src/input.css');
  }
}

// 2. Update js/i18n.js and public/js/i18n.js
function updateI18nFiles() {
  const files = ['js/i18n.js', 'public/js/i18n.js'];
  files.forEach(fp => {
    const fullPath = path.join(__dirname, '..', fp);
    if (!fs.existsSync(fullPath)) return;
    let content = fs.readFileSync(fullPath, 'utf8');

    // Add extra keys into dictionaries if not present
    // TR
    if (!content.includes('"lang_select_title":')) {
      content = content.replace(
        /"drawer_services_tag":\s*"[^"]*",/,
        '"drawer_services_tag": "HİZMETLERİMİZ",\n    "lang_select_title": "DİL SEÇİMİ · LANGUAGE",\n    "srv6_title": "Kişiye Özel Saç Kesimi",\n    "srv_haircut_title": "Kişiye Özel Saç Kesimi",'
      );
    }

    // EN
    content = content.replace(
      /("en":\s*\{[\s\S]*?"drawer_services_tag":\s*")[^"]*(")/,
      '$1OUR SERVICES$2,\n    "lang_select_title": "SELECT LANGUAGE",\n    "srv6_title": "Bespoke Haircut & Styling",\n    "srv_haircut_title": "Bespoke Haircut & Styling"'
    );

    // DE
    content = content.replace(
      /("de":\s*\{[\s\S]*?"drawer_services_tag":\s*")[^"]*(")/,
      '$1UNSERE LEISTUNGEN$2,\n    "lang_select_title": "SPRACHE WÄHLEN",\n    "srv6_title": "Individueller Haarschnitt",\n    "srv_haircut_title": "Individueller Haarschnitt"'
    );

    // RU
    content = content.replace(
      /("ru":\s*\{[\s\S]*?"drawer_services_tag":\s*")[^"]*(")/,
      '$1НАШИ УСЛУГИ$2,\n    "lang_select_title": "ВЫБОР ЯЗЫКА",\n    "srv6_title": "Индивидуальная Стрижка",\n    "srv_haircut_title": "Индивидуальная Стрижка"'
    );

    // AR
    content = content.replace(
      /("ar":\s*\{[\s\S]*?"drawer_services_tag":\s*")[^"]*(")/,
      '$1خدماتنا$2,\n    "lang_select_title": "اختر اللغة",\n    "srv6_title": "قص شعر عصري مخصص",\n    "srv_haircut_title": "قص شعر عصري مخصص"'
    );

    // Update updateActiveButtonUI
    const oldUpdateActive = `updateActiveButtonUI() {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === this.currentLang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });
  }`;

    const newUpdateActive = `updateActiveButtonUI() {
    const buttons = document.querySelectorAll('.lang-btn, .drawer-lang-btn, [data-lang], [data-lang-btn]');
    buttons.forEach(btn => {
      const btnLang = btn.getAttribute('data-lang') || btn.getAttribute('data-lang-btn');
      if (btnLang === this.currentLang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });
  }`;

    content = content.replace(oldUpdateActive, newUpdateActive);

    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated ${fp}`);
  });
}

// 3. Update HTML files with Drawer Language Selector and Notranslate
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

  const drawerLangHtml = `
    <!-- 4'lü Lüks Mobil Dil Seçici Barı -->
    <div class="drawer-lang-selector">
      <span class="drawer-section-tag" data-i18n="lang_select_title">DİL SEÇİMİ · LANGUAGE</span>
      <div class="drawer-lang-grid">
        <button type="button" class="drawer-lang-btn lang-btn active" data-lang="tr" onclick="selectLanguage('tr')" aria-label="Türkçe (TR)">
          <span class="lang-flag">🇹🇷</span>
          <span class="lang-code">TR</span>
        </button>
        <button type="button" class="drawer-lang-btn lang-btn" data-lang="en" onclick="selectLanguage('en')" aria-label="English (EN)">
          <span class="lang-flag">🇬🇧</span>
          <span class="lang-code">EN</span>
        </button>
        <button type="button" class="drawer-lang-btn lang-btn" data-lang="ru" onclick="selectLanguage('ru')" aria-label="Русский (RU)">
          <span class="lang-flag">🇷🇺</span>
          <span class="lang-code">RU</span>
        </button>
        <button type="button" class="drawer-lang-btn lang-btn" data-lang="de" onclick="selectLanguage('de')" aria-label="Deutsch (DE)">
          <span class="lang-flag">🇩🇪</span>
          <span class="lang-code">DE</span>
        </button>
      </div>
    </div>
`;

  htmlFiles.forEach(file => {
    const fullPath = path.join(__dirname, '..', file);
    if (!fs.existsSync(fullPath)) return;
    let html = fs.readFileSync(fullPath, 'utf8');

    // 1. Ensure mobile brand name has notranslate
    html = html.replace(
      /<span class="mobile-brand-name">Three Brothers<\/span>/g,
      '<span class="mobile-brand-name notranslate" translate="no">Three Brothers</span>'
    );
    html = html.replace(
      /<span class="brand-title">Three Brothers<\/span>/g,
      '<span class="brand-title notranslate" translate="no">Three Brothers</span>'
    );
    html = html.replace(
      /<h3 data-i18n="brand_name">Three Brothers<\/h3>/g,
      '<h3 data-i18n="brand_name" class="notranslate" translate="no">Three Brothers</h3>'
    );
    html = html.replace(
      /<span class="footer-brand-title" data-i18n="brand_name">Three Brothers<\/span>/g,
      '<span class="footer-brand-title notranslate" translate="no" data-i18n="brand_name">Three Brothers</span>'
    );

    // 2. Add drawer language selector if not present
    if (!html.includes('drawer-lang-selector')) {
      html = html.replace(
        /(<\/div>\s*<\/div>\s*<nav class="drawer-nav">)|(<\/div>\s*<nav class="drawer-nav">)/,
        (match) => {
          return `</div>\n${drawerLangHtml}\n    <nav class="drawer-nav">`;
        }
      );
    }

    // 3. Make sure haircut in drawer has data-i18n
    html = html.replace(
      /<span class="service-name">Kişiye Özel Saç Kesimi<\/span>/g,
      '<span class="service-name" data-i18n="srv6_title">Kişiye Özel Saç Kesimi</span>'
    );

    fs.writeFileSync(fullPath, html, 'utf8');
    console.log(`Updated ${file}`);
  });
}

updateCss();
updateI18nFiles();
updateHtmlFiles();
console.log('=== All files updated successfully! ===');
