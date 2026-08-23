const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const i18nJs = fs.readFileSync('js/i18n.js', 'utf8');
const styleCss = fs.readFileSync('css/style.css', 'utf8');

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

// 2. CATEGORY TABS
assert(indexHtml.includes('service-tabs-wrapper'), 'Service category tabs wrapper in index.html');
assert(indexHtml.includes('data-category="renklendirme"'), 'Renklendirme & Balyaj category tab in index.html');
assert(indexHtml.includes('data-category="kaynak"'), 'Mikro Kaynak category tab in index.html');
assert(indexHtml.includes('data-category="bakim"'), 'Bakım & Kesim category tab in index.html');
assert(i18nJs.includes('filterServices'), 'filterServices function in js/i18n.js');

// 3. SERVICE DETAIL MODAL / BOTTOM SHEET
assert(indexHtml.includes('id="serviceDetailBackdrop"'), 'Service detail modal backdrop in index.html');
assert(indexHtml.includes('id="sheetModalTitle"'), 'Modal title element in index.html');
assert(indexHtml.includes('id="sheetModalDuration"'), 'Modal duration element in index.html');
assert(indexHtml.includes('id="sheetModalProducts"'), 'Modal products container in index.html');
assert(indexHtml.includes('id="sheetModalSteps"'), 'Modal steps container in index.html');
assert(indexHtml.includes('id="sheetModalWaBtn"'), 'Modal WhatsApp CTA in index.html');
assert(i18nJs.includes('SERVICE_MODAL_DATA'), 'Service modal dictionary in js/i18n.js');
assert(i18nJs.includes('openServiceModal'), 'openServiceModal function in js/i18n.js');
assert(i18nJs.includes('closeServiceModal'), 'closeServiceModal function in js/i18n.js');

// 4. APP-LIKE MOBILE BOTTOM NAV
assert(indexHtml.includes('class="app-bottom-nav"'), 'App-like bottom navigation in index.html');
assert(indexHtml.includes('href="#hero"') && indexHtml.includes('Anasayfa'), 'App Nav: Anasayfa tab');
assert(indexHtml.includes('href="#hizmetler"') && indexHtml.includes('Hizmetler'), 'App Nav: Hizmetler tab');
assert(indexHtml.includes('href="#yorumlar"') && indexHtml.includes('Yorumlar'), 'App Nav: Yorumlar tab');
assert(indexHtml.includes('class="app-nav-item app-nav-wa-special"'), 'App Nav: WhatsApp special button');

// 5. REACT / TYPESCRIPT COMPONENTS
assert(fs.existsSync('components/LanguageSelector.tsx'), 'components/LanguageSelector.tsx created');
assert(fs.existsSync('components/Services.tsx'), 'components/Services.tsx created');
assert(fs.existsSync('components/ServiceDetailModal.tsx'), 'components/ServiceDetailModal.tsx created');
assert(fs.existsSync('components/MobileBottomNav.tsx'), 'components/MobileBottomNav.tsx created');
assert(fs.existsSync('components/Header.tsx'), 'components/Header.tsx created');
assert(fs.existsSync('app/page.tsx'), 'app/page.tsx created');

// 6. CSS COMPILED STYLES
assert(styleCss.includes('lang-dropdown-container'), 'Compiled CSS has lang-dropdown-container');
assert(styleCss.includes('service-tabs-wrapper'), 'Compiled CSS has service-tabs-wrapper');
assert(styleCss.includes('sheet-backdrop'), 'Compiled CSS has sheet-backdrop');
assert(styleCss.includes('sheet-modal'), 'Compiled CSS has sheet-modal');
assert(styleCss.includes('app-bottom-nav'), 'Compiled CSS has app-bottom-nav');

// 7. ZIP ARCHIVE CHECK
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
