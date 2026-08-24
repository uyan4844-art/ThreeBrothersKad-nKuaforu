const fs = require('fs');
const path = require('path');

console.log('=== Updating Mobile Language Selector to Minimalist Text Only (No Flags) ===');

// 1. Update src/input.css
const cssPath = path.join(__dirname, '../src/input.css');
if (fs.existsSync(cssPath)) {
  let css = fs.readFileSync(cssPath, 'utf8');

  // Replace drawer language selector CSS
  const oldLangCssRegex = /\/\* ==========================================================================\s*DRAWER 4-GRID LUXURY LANGUAGE SELECTOR[\s\S]*?\.drawer-lang-btn\.active \.lang-code[\s\S]*?\}/gi;
  
  const minimalistLangCss = `/* ==========================================================================
   DRAWER 4-GRID LUXURY MINIMALIST LANGUAGE SELECTOR
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
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid rgba(26, 25, 24, 0.22);
  border-radius: 10px;
  padding: 9px 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #1A1918;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  min-height: 40px;
}

.drawer-lang-btn:hover {
  background: rgba(26, 25, 24, 0.05);
  border-color: #1A1918;
}

.drawer-lang-btn.active,
.drawer-lang-btn[aria-pressed="true"] {
  background: #1A1918 !important;
  border-color: #1A1918 !important;
  color: #FFFFFF !important;
  box-shadow: 0 3px 10px rgba(26, 25, 24, 0.2);
}`;

  if (oldLangCssRegex.test(css)) {
    css = css.replace(oldLangCssRegex, minimalistLangCss);
  } else {
    css += '\n' + minimalistLangCss;
  }
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Updated src/input.css with minimalist styling');
}

// 2. Update all HTML files
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

const minimalistDrawerHtml = `    <!-- 4'lü Minimalist Sade Mobil Dil Seçici Barı -->
    <div class="drawer-lang-selector">
      <span class="drawer-section-tag" data-i18n="lang_select_title">DİL SEÇİMİ · LANGUAGE</span>
      <div class="drawer-lang-grid">
        <button type="button" class="drawer-lang-btn lang-btn active" data-lang="tr" onclick="selectLanguage('tr')" aria-label="Türkçe">TR</button>
        <button type="button" class="drawer-lang-btn lang-btn" data-lang="en" onclick="selectLanguage('en')" aria-label="English">EN</button>
        <button type="button" class="drawer-lang-btn lang-btn" data-lang="ru" onclick="selectLanguage('ru')" aria-label="Русский">RU</button>
        <button type="button" class="drawer-lang-btn lang-btn" data-lang="de" onclick="selectLanguage('de')" aria-label="Deutsch">DE</button>
      </div>
    </div>`;

htmlFiles.forEach(file => {
  const fullPath = path.join(__dirname, '..', file);
  if (!fs.existsSync(fullPath)) return;
  let html = fs.readFileSync(fullPath, 'utf8');

  // Replace drawer language selector block
  html = html.replace(
    /<!-- 4'lü Lüks Mobil Dil Seçici Barı -->[\s\S]*?<\/div>\s*<\/div>/gi,
    minimalistDrawerHtml
  );
  html = html.replace(
    /<!-- 4'lü Minimalist Sade Mobil Dil Seçici Barı -->[\s\S]*?<\/div>\s*<\/div>/gi,
    minimalistDrawerHtml
  );

  fs.writeFileSync(fullPath, html, 'utf8');
  console.log(`Updated ${file}`);
});

console.log('=== HTML and CSS updated! ===');
