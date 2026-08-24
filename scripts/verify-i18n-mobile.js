const fs = require('fs');
const assert = require('assert');

console.log('--- Verifying Compact Mobile Dropdown & 4-Language Clean Dictionary ---');

// 1. Check Header.tsx
const headerTsx = fs.readFileSync('components/Header.tsx', 'utf8');
assert(headerTsx.includes('notranslate'), 'Header.tsx missing notranslate');
assert(headerTsx.includes('isDrawerLangOpen'), 'Header.tsx missing isDrawerLangOpen');
assert(headerTsx.includes('TR') && headerTsx.includes('EN') && headerTsx.includes('RU') && headerTsx.includes('DE'), 'Header.tsx missing 4-language options');
assert(headerTsx.includes('Sarışın & İpeksi Renk Tasarımı'), 'Header.tsx missing exact Turkish dictionary');
assert(!headerTsx.includes('العربية') && !headerTsx.includes("'ar'"), 'Header.tsx has Arabic traces');
console.log('✔ components/Header.tsx verified');

// 2. Check LanguageSelector.tsx
const langSelectorTsx = fs.readFileSync('components/LanguageSelector.tsx', 'utf8');
assert(langSelectorTsx.includes('Türkçe (TR)'), 'LanguageSelector.tsx missing TR');
assert(!langSelectorTsx.includes('العربية'), 'LanguageSelector.tsx has Arabic traces');
console.log('✔ components/LanguageSelector.tsx verified');

// 3. Check HTML files
const htmlFiles = [
  'index.html', 'hakkimizda.html', 'balyaj.html', 'blonde.html', 'kaynak.html', 'ombre.html', 'renklendirme.html',
  'public/index.html', 'public/hakkimizda.html', 'public/balyaj.html', 'public/blonde.html', 'public/kaynak.html', 'public/ombre.html', 'public/renklendirme.html'
];

htmlFiles.forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  assert(html.includes('drawer-lang-compact-wrapper'), `${f} missing drawer-lang-compact-wrapper`);
  assert(html.includes('drawerLangCompact'), `${f} missing drawerLangCompact`);
  assert(html.includes('data-lang="tr"'), `${f} missing TR button`);
  assert(html.includes('data-lang="en"'), `${f} missing EN button`);
  assert(html.includes('data-lang="ru"'), `${f} missing RU button`);
  assert(html.includes('data-lang="de"'), `${f} missing DE button`);
  assert(!html.includes('data-lang="ar"'), `${f} contains Arabic data-lang`);
  assert(html.includes('notranslate'), `${f} missing notranslate`);
  console.log(`✔ ${f} verified`);
});

// 4. Check i18n.js files
['js/i18n.js', 'public/js/i18n.js'].forEach(f => {
  const i18n = fs.readFileSync(f, 'utf8');
  assert(i18n.includes('updateDrawerLangUI'), `${f} missing updateDrawerLangUI`);
  assert(i18n.includes('Sarışın & İpeksi Renk Tasarımı'), `${f} missing user blonde key`);
  assert(i18n.includes('Mikrokapsel-Haarverlängerung'), `${f} missing German kaynak key`);
  assert(i18n.includes('Микрокапсульное наращивание'), `${f} missing Russian kaynak key`);
  assert(!i18n.includes('"ar":'), `${f} contains Arabic dictionary`);
  console.log(`✔ ${f} verified`);
});

console.log('--- ALL VERIFICATIONS PASSED 100%! ---');
