const fs = require('fs');
const assert = require('assert');

console.log('--- Verifying Main Links Style Language Row & Strict TR Default ---');

// 1. Check Header.tsx
const headerTsx = fs.readFileSync('components/Header.tsx', 'utf8');
assert(headerTsx.includes('notranslate'), 'Header.tsx missing notranslate');
assert(headerTsx.includes('Dil Seçimi'), 'Header.tsx missing Dil Seçimi');
assert(headerTsx.includes('langOpen'), 'Header.tsx missing langOpen');
assert(headerTsx.includes('TR') && headerTsx.includes('EN') && headerTsx.includes('RU') && headerTsx.includes('DE'), 'Header.tsx missing 4-language options');
assert(headerTsx.includes('Blonde & İpeksi Renk Tasarımı'), 'Header.tsx missing exact Turkish dictionary');
assert(headerTsx.includes('Salı – Pazar: 08:30 – 20:30 (Pazartesi Kapalı)'), 'Header.tsx missing exact Turkish hours');
console.log('✔ components/Header.tsx verified');

// 2. Check HTML files
const htmlFiles = [
  'index.html', 'hakkimizda.html', 'balyaj.html', 'blonde.html', 'kaynak.html', 'ombre.html', 'renklendirme.html',
  'public/index.html', 'public/hakkimizda.html', 'public/balyaj.html', 'public/blonde.html', 'public/kaynak.html', 'public/ombre.html', 'public/renklendirme.html'
];

htmlFiles.forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  assert(html.includes('drawer-lang-row'), `${f} missing drawer-lang-row`);
  assert(html.includes('drawerLangBadge'), `${f} missing drawerLangBadge`);
  assert(html.includes('data-lang="tr"'), `${f} missing TR button`);
  assert(html.includes('data-lang="en"'), `${f} missing EN button`);
  assert(html.includes('data-lang="ru"'), `${f} missing RU button`);
  assert(html.includes('data-lang="de"'), `${f} missing DE button`);
  assert(!html.includes('data-lang="ar"'), `${f} contains Arabic data-lang`);
  assert(html.includes('notranslate'), `${f} missing notranslate`);
  console.log(`✔ ${f} verified`);
});

// 3. Check i18n.js files
['js/i18n.js', 'public/js/i18n.js'].forEach(f => {
  const i18n = fs.readFileSync(f, 'utf8');
  assert(i18n.includes('toggleDrawerLangAccordion'), `${f} missing toggleDrawerLangAccordion`);
  assert(i18n.includes('this.defaultLang = \'tr\';'), `${f} defaultLang is not 'tr'`);
  assert(i18n.includes('this.getSavedLanguage() || \'tr\''), `${f} default initialization is not 'tr'`);
  assert(i18n.includes('Salı – Pazar: 08:30 – 20:30 (Pazartesi Kapalı)'), `${f} missing user Turkish hours`);
  assert(!i18n.includes('"ar":'), `${f} contains Arabic dictionary`);
  console.log(`✔ ${f} verified`);
});

console.log('--- ALL VERIFICATIONS PASSED 100%! ---');
