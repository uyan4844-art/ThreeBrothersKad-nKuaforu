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

htmlFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // 1. Fix <html lang="tr">
  content = content.replace(/<html[^>]*>/i, '<html lang="tr">');

  // 2. Remove Google Translate widgets and scripts
  content = content.replace(/<!-- Google Translate Hidden Container & Integration -->[\s\S]*?<\/script>/gi, '');
  content = content.replace(/<div id="google_translate_element"[\s\S]*?<\/div>/gi, '');
  content = content.replace(/<script[^>]*googleTranslateElementInit[\s\S]*?<\/script>/gi, '');
  content = content.replace(/<script[^>]*translate\.google\.com[\s\S]*?<\/script>/gi, '');
  content = content.replace(/\/\* Google Translate Hidden & Reset Styles \*\/[\s\S]*?body > \.skiptranslate, \.skiptranslate\s*\{[^}]*\}/gi, '');
  content = content.replace(/\/\* Drawer Language Buttons \(Gold Active State\) \*\/[\s\S]*?\.lang-btn\.active\s*\{[^}]*\}/gi, '');

  // 3. Remove drawer-lang-section
  content = content.replace(/<!-- Dil Seçimi[^>]*-->[\s\S]*?<\/div>\s*<\/div>/gi, '');
  content = content.replace(/<div class="drawer-lang-section"[\s\S]*?<\/div>\s*<\/div>/gi, '');

  // 4. Fix any broken text "üç kardeş", "üç kardeşler", "iç kardeş", "Üç Kardeş", "Üç Kardeşler", "İç Kardeş"
  content = content.replace(/iç\s*kardeşler/gi, 'Three Brothers');
  content = content.replace(/iç\s*kardeş/gi, 'Three Brothers');
  content = content.replace(/üç\s*kardeşler/gi, 'Three Brothers');
  content = content.replace(/üç\s*kardeş/gi, 'Three Brothers');
  content = content.replace(/İç\s*Kardeşler/gi, 'Three Brothers');
  content = content.replace(/İç\s*Kardeş/gi, 'Three Brothers');
  content = content.replace(/Üç\s*Kardeşler/gi, 'Three Brothers');
  content = content.replace(/Üç\s*Kardeş/gi, 'Three Brothers');

  // 5. Wrap all occurrences of Three Brothers with translate="no" class="notranslate" if not already protected
  // For spans/headings/links containing Three Brothers, ensure translate="no" class="notranslate" is applied
  content = content.replace(/class="brand-name-luxury"/g, 'class="brand-name-luxury notranslate" translate="no"');
  content = content.replace(/class="footer-brand-title"/g, 'class="footer-brand-title notranslate" translate="no"');
  content = content.replace(/<h3 data-i18n="brand_name">/g, '<h3 data-i18n="brand_name" class="notranslate" translate="no">');
  content = content.replace(/<span data-i18n="brand_name"/g, '<span data-i18n="brand_name" class="notranslate" translate="no"');
  content = content.replace(/<span class="notranslate" translate="no" class="notranslate"/g, '<span class="notranslate" translate="no"');

  // Clean any multiple consecutive empty lines
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

  fs.writeFileSync(file, content, 'utf8');
  console.log(`Processed & cleaned: ${file}`);
});
