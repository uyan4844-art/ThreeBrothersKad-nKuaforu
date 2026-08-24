const fs = require('fs');
const path = require('path');

console.log('=== Removing all flag emojis across entire project ===');

// 1. Update i18n.js and public/js/i18n.js
['js/i18n.js', 'public/js/i18n.js'].forEach(file => {
  const fullPath = path.join(__dirname, '..', file);
  if (!fs.existsSync(fullPath)) return;
  let content = fs.readFileSync(fullPath, 'utf8');

  // Ensure updateDropdownUI is implemented in I18nEngine
  if (!content.includes('updateDropdownUI() {')) {
    content = content.replace(
      /updateActiveButtonUI\(\)\s*\{[\s\S]*?\n  \}/,
      (match) => {
        return `${match}

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
      }
    );
  }

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Updated ${file}`);
});

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

htmlFiles.forEach(file => {
  const fullPath = path.join(__dirname, '..', file);
  if (!fs.existsSync(fullPath)) return;
  let html = fs.readFileSync(fullPath, 'utf8');

  // Replace desktop dropdown labels
  html = html.replace(/<span class="selected-lang-label">.*?TR<\/span>/g, '<span class="selected-lang-label">TR</span>');
  html = html.replace(/<span>🇹🇷<\/span>\s*<span>Türkçe \(TR\)<\/span>/g, '<span>Türkçe (TR)</span>');
  html = html.replace(/<span>🇬🇧<\/span>\s*<span>English \(EN\)<\/span>/g, '<span>English (EN)</span>');
  html = html.replace(/<span>🇷🇺<\/span>\s*<span>Русский \(RU\)<\/span>/g, '<span>Русский (RU)</span>');
  html = html.replace(/<span>🇩🇪<\/span>\s*<span>Deutsch \(DE\)<\/span>/g, '<span>Deutsch (DE)</span>');
  html = html.replace(/<span>🇦🇪<\/span>\s*<span>العربية \(AR\)<\/span>/g, '<span>العربية (AR)</span>');

  // Any remaining stray flag emojis
  html = html.replace(/🇹🇷|🇬🇧|🇷🇺|🇩🇪|🇦🇪/g, '');

  fs.writeFileSync(fullPath, html, 'utf8');
  console.log(`Updated ${file}`);
});

console.log('=== All flag emojis removed successfully! ===');
