const fs = require('fs');
const path = require('path');

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

const desktopDropdownHtml = `      <!-- Tıklanabilir Lüks Dil Seçici (Language Dropdown) -->
      <div class="lang-dropdown-container" id="headerLangDropdown">
        <button class="lang-dropdown-btn" onclick="toggleLangDropdown(event)" type="button" aria-haspopup="true" aria-expanded="false" aria-label="Dil Seçimi">
          <span class="selected-lang-label">TR</span>
          <span class="lang-dropdown-chevron">▼</span>
        </button>
        <div class="lang-dropdown-menu" role="menu">
          <button class="lang-dropdown-item active" data-lang="tr" onclick="selectLanguage('tr')" role="menuitem">
            <span>🇹🇷</span> <span>Türkçe (TR)</span>
          </button>
          <button class="lang-dropdown-item" data-lang="en" onclick="selectLanguage('en')" role="menuitem">
            <span>🇬🇧</span> <span>English (EN)</span>
          </button>
          <button class="lang-dropdown-item" data-lang="ru" onclick="selectLanguage('ru')" role="menuitem">
            <span>🇷🇺</span> <span>Русский (RU)</span>
          </button>
          <button class="lang-dropdown-item" data-lang="de" onclick="selectLanguage('de')" role="menuitem">
            <span>🇩🇪</span> <span>Deutsch (DE)</span>
          </button>
        </div>
      </div>`;

const drawerDropdownHtml = `    <!-- Kompakt Mobil Dil Seçici Dropdown -->
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

  // Replace desktop dropdown
  html = html.replace(
    /<!-- Tıklanabilir Lüks Dil Seçici \(Language Dropdown\) -->[\s\S]*?<\/div>\s*<\/div>/gi,
    desktopDropdownHtml
  );

  // Replace drawer dropdown & clean any stray comments
  html = html.replace(
    /(?:<!--.*?-->\s*)*<div class="drawer-lang-compact-wrapper"[\s\S]*?<\/div>\s*<\/div>/gi,
    drawerDropdownHtml
  );
  html = html.replace(
    /(?:<!--.*?-->\s*)*<div class="drawer-lang-selector"[\s\S]*?<\/div>\s*<\/div>/gi,
    drawerDropdownHtml
  );

  fs.writeFileSync(fullPath, html, 'utf8');
  console.log(`Cleaned & synced ${file}`);
});
