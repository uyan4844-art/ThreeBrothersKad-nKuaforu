const fs = require('fs');
const assert = require('assert');

console.log('--- Verifying Real Address, Schema & Map Updates ---');

// 1. Check app/layout.tsx
const layoutTsx = fs.readFileSync('app/layout.tsx', 'utf8');
assert(layoutTsx.includes("streetAddress: 'Bahçelievler Mahallesi, Demokrasi Bulvarı No:8 D:0'"), 'layout.tsx streetAddress mismatch');
assert(layoutTsx.includes("addressLocality: 'Manavgat'"), 'layout.tsx addressLocality mismatch');
assert(layoutTsx.includes("addressRegion: 'Antalya'"), 'layout.tsx addressRegion mismatch');
assert(layoutTsx.includes("postalCode: '07600'"), 'layout.tsx postalCode mismatch');
assert(layoutTsx.includes("ratingValue: '5.0'"), 'layout.tsx ratingValue mismatch');
assert(layoutTsx.includes("reviewCount: '134'"), 'layout.tsx reviewCount mismatch');
assert(!layoutTsx.includes('Eski Hisar'), 'layout.tsx contains Eski Hisar');
console.log('✔ app/layout.tsx verified successfully');

// 2. Check app/hakkimizda/page.tsx
const hakkimizdaTsx = fs.readFileSync('app/hakkimizda/page.tsx', 'utf8');
assert(hakkimizdaTsx.includes('Bahçelievler Mahallesi, Demokrasi Bulvarı No:8 D:0, 07600 Manavgat / Antalya'), 'app/hakkimizda/page.tsx address mismatch');
console.log('✔ app/hakkimizda/page.tsx verified successfully');

// 3. Check index.html and public/index.html
['index.html', 'public/index.html'].forEach(file => {
  const html = fs.readFileSync(file, 'utf8');
  assert(html.includes('"streetAddress": "Bahçelievler Mahallesi, Demokrasi Bulvarı No:8 D:0"'), `${file} schema streetAddress mismatch`);
  assert(html.includes('"reviewCount": "134"'), `${file} schema reviewCount mismatch`);
  assert(html.includes('"ratingValue": "5.0"'), `${file} schema ratingValue mismatch`);
  assert(html.includes('134+ Doğrulanmış Gerçek Müşteri Yorumu'), `${file} review badge mismatch`);
  assert(html.includes('Bahçelievler Mahallesi, Demokrasi Bulvarı No:8 D:0, 07600 Manavgat / Antalya'), `${file} address mismatch`);
  assert(!html.includes('Eski Hisar') && !html.includes('Eskihisar’daki'), `${file} contains old Eski Hisar text`);
  assert(!html.includes('8Z1'), `${file} contains old 8Z1`);
  console.log(`✔ ${file} verified successfully`);
});

// 4. Check all HTML subpages
const subpages = [
  'hakkimizda.html', 'balyaj.html', 'blonde.html', 'kaynak.html', 'ombre.html', 'renklendirme.html',
  'public/hakkimizda.html', 'public/balyaj.html', 'public/blonde.html', 'public/kaynak.html', 'public/ombre.html', 'public/renklendirme.html'
];
subpages.forEach(file => {
  const html = fs.readFileSync(file, 'utf8');
  assert(html.includes('Bahçelievler Mahallesi, Demokrasi Bulvarı No:8 D:0, 07600 Manavgat / Antalya'), `${file} address mismatch`);
  assert(!html.includes('8Z1'), `${file} contains old 8Z1`);
  assert(html.includes('tel:+905526856907'), `${file} phone link mismatch`);
  assert(html.includes('maps.google.com/?cid=16986332279537405342'), `${file} map link mismatch`);
  console.log(`✔ ${file} verified successfully`);
});

// 5. Check i18n files
['js/i18n.js', 'public/js/i18n.js'].forEach(file => {
  const i18n = fs.readFileSync(file, 'utf8');
  assert(i18n.includes('"c_address_val": "Bahçelievler Mahallesi, Demokrasi Bulvarı No:8 D:0, 07600 Manavgat / Antalya"'), `${file} c_address_val mismatch`);
  assert(i18n.includes('"footer_address": "Bahçelievler Mahallesi, Demokrasi Bulvarı No:8 D:0, 07600 Manavgat / Antalya"'), `${file} footer_address mismatch`);
  assert(i18n.includes('"reviews_rating_text": "★★★★★ 134+ Doğrulanmış Gerçek Müşteri Yorumu"'), `${file} TR reviews rating text mismatch`);
  assert(i18n.includes('"reviews_rating_text": "★★★★★ 134+ Verified Real Client Reviews"'), `${file} EN reviews rating text mismatch`);
  assert(i18n.includes('"reviews_rating_text": "★★★★★ 134+ Verifizierte echte Bewertungen"'), `${file} DE reviews rating text mismatch`);
  assert(i18n.includes('"reviews_rating_text": "★★★★★ 134+ Подтвержденных отзывов"'), `${file} RU reviews rating text mismatch`);
  assert(i18n.includes('"reviews_rating_text": "★★★★★ 134+ تقييم حقيقي موثق"'), `${file} AR reviews rating text mismatch`);
  assert(!i18n.includes('8Z1'), `${file} contains old 8Z1`);
  console.log(`✔ ${file} verified successfully`);
});

console.log('--- ALL CHECKS PASSED PERFECTLY! ---');
