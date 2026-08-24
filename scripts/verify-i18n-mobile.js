const fs = require('fs');
const assert = require('assert');

console.log('--- Verifying Mobile I18n & Notranslate Brand Protection ---');

// 1. Check Header.tsx
const headerTsx = fs.readFileSync('components/Header.tsx', 'utf8');
assert(headerTsx.includes('notranslate'), 'Header.tsx missing notranslate');
assert(headerTsx.includes('translate="no"'), 'Header.tsx missing translate="no"');
assert(headerTsx.includes('TR') && headerTsx.includes('EN') && headerTsx.includes('RU') && headerTsx.includes('DE'), 'Header.tsx missing 4-language buttons');
assert(headerTsx.includes('HEADER_LABELS'), 'Header.tsx missing HEADER_LABELS');
console.log('✔ components/Header.tsx verified');

// 2. Check HTML files
const htmlFiles = [
  'index.html', 'hakkimizda.html', 'balyaj.html', 'blonde.html', 'kaynak.html', 'ombre.html', 'renklendirme.html',
  'public/index.html', 'public/hakkimizda.html', 'public/balyaj.html', 'public/blonde.html', 'public/kaynak.html', 'public/ombre.html', 'public/renklendirme.html'
];

htmlFiles.forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  assert(html.includes('drawer-lang-selector'), `${f} missing drawer-lang-selector`);
  assert(html.includes('data-lang="tr"'), `${f} missing TR button`);
  assert(html.includes('data-lang="en"'), `${f} missing EN button`);
  assert(html.includes('data-lang="ru"'), `${f} missing RU button`);
  assert(html.includes('data-lang="de"'), `${f} missing DE button`);
  assert(html.includes('notranslate'), `${f} missing notranslate`);
  console.log(`✔ ${f} verified`);
});

// 3. Check i18n.js files
['js/i18n.js', 'public/js/i18n.js'].forEach(f => {
  const i18n = fs.readFileSync(f, 'utf8');
  assert(i18n.includes('drawer-lang-btn'), `${f} missing drawer-lang-btn support in updateActiveButtonUI`);
  assert(i18n.includes('lang_select_title'), `${f} missing lang_select_title key`);
  assert(i18n.includes('srv6_title'), `${f} missing srv6_title key`);
  console.log(`✔ ${f} verified`);
});

console.log('--- ALL MOBILE I18N AND NOTRANSLATE CHECKS PASSED! ---');
