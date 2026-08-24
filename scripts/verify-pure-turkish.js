const fs = require('fs');
const assert = require('assert');

console.log('--- Verifying Pure Turkish Website Standards ---');

// 1. Check Header.tsx
const headerTsx = fs.readFileSync('components/Header.tsx', 'utf8');
assert(headerTsx.includes('notranslate'), 'Header.tsx missing notranslate');
assert(!headerTsx.includes('Dil Seçimi'), 'Header.tsx should NOT contain Dil Seçimi');
assert(!headerTsx.includes('LanguageSelector'), 'Header.tsx should NOT import LanguageSelector');
assert(headerTsx.includes('Hemen Ara'), 'Header.tsx missing Hemen Ara');
assert(headerTsx.includes('Yol Tarifi Al'), 'Header.tsx missing Yol Tarifi Al');
assert(headerTsx.includes('Salı – Pazar: 08:30 – 20:30 (Pazartesi Kapalı)'), 'Header.tsx missing exact hours');
console.log('✔ components/Header.tsx 100% verified');

// 2. Check layout.tsx
const layoutTsx = fs.readFileSync('app/layout.tsx', 'utf8');
assert(layoutTsx.includes('Bahçelievler Mahallesi, Demokrasi Bulvarı No:8 D:0'), 'layout.tsx address mismatch');
assert(layoutTsx.includes('5.0') && layoutTsx.includes('134'), 'layout.tsx rating mismatch');
assert(layoutTsx.includes('threebrothersmanavgat'), 'layout.tsx missing keyword');
assert(layoutTsx.includes('08:30') && layoutTsx.includes('20:30'), 'layout.tsx opening hours mismatch');
console.log('✔ app/layout.tsx 100% verified');

// 3. Check page.tsx
const pageTsx = fs.readFileSync('app/page.tsx', 'utf8');
assert(pageTsx.includes('Kusursuz Renk'), 'page.tsx missing title');
assert(pageTsx.includes('Hizmetlerimizi Keşfet'), 'page.tsx missing explore btn');
assert(pageTsx.includes('Randevu & Saç Analizi'), 'page.tsx missing analysis btn');
console.log('✔ app/page.tsx 100% verified');

// 4. Check HTML files
const htmlFiles = [
  'index.html', 'hakkimizda.html', 'balyaj.html', 'blonde.html', 'kaynak.html', 'ombre.html', 'renklendirme.html',
  'public/index.html', 'public/hakkimizda.html', 'public/balyaj.html', 'public/blonde.html', 'public/kaynak.html', 'public/ombre.html', 'public/renklendirme.html'
];

htmlFiles.forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  assert(!html.includes('drawer-lang-row'), `${f} should not have drawer-lang-row`);
  assert(!html.includes('lang-dropdown-container'), `${f} should not have lang-dropdown-container`);
  assert(html.includes('notranslate'), `${f} missing notranslate for brand protection`);
  assert(html.includes('Hemen Ara'), `${f} missing Hemen Ara`);
  assert(html.includes('Yol Tarifi Al'), `${f} missing Yol Tarifi Al`);
  assert(html.includes('0552 685 69 07'), `${f} missing correct phone`);
  assert(html.includes('Salı – Pazar: 08:30 – 20:30 (Pazartesi Kapalı)'), `${f} missing correct hours`);
  console.log(`✔ ${f} 100% verified`);
});

console.log('--- ALL CHECKS PASSED 100%! PURE TURKISH SITE CONFIRMED! ---');
