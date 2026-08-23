const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const i18nJs = fs.readFileSync('js/i18n.js', 'utf8');
const styleCss = fs.readFileSync('css/style.css', 'utf8');
const headerTsx = fs.readFileSync('components/Header.tsx', 'utf8');

const tests = [];

function assert(condition, testName, details = '') {
  tests.push({ name: testName, pass: Boolean(condition), details });
}

// 1. LANGUAGE DROPDOWN
assert(indexHtml.includes('class="lang-dropdown-container"'), 'Language dropdown container in index.html');
assert(indexHtml.includes('class="lang-dropdown-btn"'), 'Language dropdown toggle button in index.html');
assert(indexHtml.includes('class="lang-dropdown-menu"'), 'Language dropdown menu in index.html');
assert(i18nJs.includes('toggleLangDropdown'), 'toggleLangDropdown function in js/i18n.js');
assert(i18nJs.includes('selectLanguage'), 'selectLanguage function in js/i18n.js');
assert(fs.existsSync('components/LanguageSelector.tsx'), 'components/LanguageSelector.tsx exists');

// 2. CATEGORY TABS & FILTERING
assert(indexHtml.includes('service-tabs-wrapper'), 'Service category tabs wrapper in index.html');
assert(indexHtml.includes('data-category="renklendirme"'), 'Renklendirme & Balyaj category tab in index.html');
assert(indexHtml.includes('data-category="kaynak"'), 'Mikro Kaynak category tab in index.html');
assert(indexHtml.includes('data-category="bakim"'), 'Bakım & Kesim category tab in index.html');
assert(i18nJs.includes('filterServices'), 'filterServices function in js/i18n.js');

// 3. DEDICATED MULTI-PAGE SERVICE PAGES & NAVIGATION
assert(indexHtml.includes('href="balyaj.html"'), 'Balyaj card links directly to balyaj.html');
assert(indexHtml.includes('href="blonde.html"'), 'Blonde card links directly to blonde.html');
assert(indexHtml.includes('href="kaynak.html"'), 'Kaynak card links directly to kaynak.html');
assert(indexHtml.includes('href="ombre.html"'), 'Ombre card links directly to ombre.html');
assert(indexHtml.includes('href="renklendirme.html"'), 'Renklendirme card links directly to renklendirme.html');

assert(fs.existsSync('balyaj.html'), 'balyaj.html static page exists');
assert(fs.existsSync('blonde.html'), 'blonde.html static page exists');
assert(fs.existsSync('kaynak.html'), 'kaynak.html static page exists');
assert(fs.existsSync('ombre.html'), 'ombre.html static page exists');
assert(fs.existsSync('renklendirme.html'), 'renklendirme.html static page exists');
assert(fs.existsSync('hakkimizda.html'), 'hakkimizda.html static page exists');

assert(fs.existsSync('app/hizmetler/balyaj/page.tsx'), 'app/hizmetler/balyaj/page.tsx Next.js page exists');
assert(fs.existsSync('app/hizmetler/blonde/page.tsx'), 'app/hizmetler/blonde/page.tsx Next.js page exists');
assert(fs.existsSync('app/hizmetler/kaynak/page.tsx'), 'app/hizmetler/kaynak/page.tsx Next.js page exists');
assert(fs.existsSync('app/hizmetler/ombre/page.tsx'), 'app/hizmetler/ombre/page.tsx Next.js page exists');
assert(fs.existsSync('app/hizmetler/renklendirme/page.tsx'), 'app/hizmetler/renklendirme/page.tsx Next.js page exists');
assert(fs.existsSync('app/hakkimizda/page.tsx'), 'app/hakkimizda/page.tsx Next.js page exists');

// 4. SHINE HAIR LUXURY MOBILE DRAWER
assert(indexHtml.includes('class="drawer-service-links-list"'), 'Drawer has dedicated service links list');
assert(indexHtml.includes('class="drawer-action-dual-row"'), 'Drawer has dual action row (Call & Maps)');
assert(indexHtml.includes('class="drawer-wa-full-btn"'), 'Drawer has full-width WhatsApp button');
assert(headerTsx.includes('Hemen Ara') && headerTsx.includes('Konum / Yol Tarifi'), 'Header.tsx has Shine Hair mobile drawer actions');
assert(styleCss.includes('drawer-service-links-list'), 'Compiled CSS has drawer-service-links-list');
assert(styleCss.includes('drawer-action-dual-row'), 'Compiled CSS has drawer-action-dual-row');
assert(styleCss.includes('body.menu-open'), 'Compiled CSS locks body scroll on menu-open');

// 5. BRAND INTEGRITY & INSTAGRAM
assert(indexHtml.includes('threebrotherrrs'), 'Instagram handle is @threebrotherrrs');

// 6. ZIP ARCHIVE CHECK
assert(fs.existsSync('ThreeBrothers_Hostinger_Deploy.zip'), 'ThreeBrothers_Hostinger_Deploy.zip exists');
const zipSize = fs.statSync('ThreeBrothers_Hostinger_Deploy.zip').size;
assert(zipSize > 35 * 1024 * 1024, `Zip archive size is valid: ${(zipSize / (1024*1024)).toFixed(2)} MB`);

console.log('=== COMPREHENSIVE TEST RESULTS ===');
let passCount = 0;
tests.forEach((t, i) => {
  if (t.pass) {
    passCount++;
    console.log(`[PASS] ${i+1}. ${t.name}`);
  } else {
    console.error(`[FAIL] ${i+1}. ${t.name} -> ${t.details}`);
  }
});
console.log(`\nTotal: ${tests.length} | Passed: ${passCount} | Failed: ${tests.length - passCount}`);
