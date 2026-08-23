const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const i18nJs = fs.readFileSync('js/i18n.js', 'utf8');
const styleCss = fs.readFileSync('css/style.css', 'utf8');
const headerTsx = fs.readFileSync('components/Header.tsx', 'utf8');
const bottomNavTsx = fs.readFileSync('components/MobileBottomNav.tsx', 'utf8');
const trustSectionTsx = fs.readFileSync('components/TrustSection.tsx', 'utf8');

const tests = [];

function assert(condition, testName, details = '') {
  tests.push({ name: testName, pass: Boolean(condition), details });
}

// 1. SHINE HAIR MOBILE HEADER (md:hidden)
assert(headerTsx.includes('bg-black/80 backdrop-blur-md'), 'Header.tsx mobile header has bg-black/80 backdrop-blur-md');
assert(headerTsx.includes('KADIN KUAFÖRÜ'), 'Header.tsx mobile header has KADIN KUAFÖRÜ subtitle');
assert(headerTsx.includes('w-6 h-[2px]') && headerTsx.includes('w-4 h-[2px]'), 'Header.tsx mobile header has 2-line minimal hamburger');
assert(headerTsx.includes('hidden md:flex') || headerTsx.includes('hidden lg:flex'), 'Header.tsx desktop header is preserved with hidden md:flex');
assert(indexHtml.includes('menu-line-1') && indexHtml.includes('menu-line-2'), 'index.html has 2-line minimal mobile menu button');

// 2. VIEWPORT & SAFE AREA CONFIGURATION
assert(indexHtml.includes('viewport-fit=cover'), 'index.html has viewport-fit=cover');
assert(fs.existsSync('app/layout.tsx'), 'app/layout.tsx exists');
const layoutTsx = fs.readFileSync('app/layout.tsx', 'utf8');
assert(layoutTsx.includes('viewport-fit=cover') || layoutTsx.includes('viewportFit'), 'app/layout.tsx has viewportFit cover');
assert(fs.existsSync('app/globals.css'), 'app/globals.css exists');
const globalsCss = fs.readFileSync('app/globals.css', 'utf8');
assert(globalsCss.includes('-webkit-tap-highlight-color: transparent'), 'app/globals.css has tap-highlight-color: transparent');
assert(globalsCss.includes('overscroll-behavior: contain'), 'app/globals.css has overscroll-behavior: contain');

// 3. SAFE AREA INSETS IN CSS & COMPONENTS
assert(styleCss.includes('safe-area-inset-top'), 'Compiled CSS has safe-area-inset-top');
assert(styleCss.includes('safe-area-inset-bottom'), 'Compiled CSS has safe-area-inset-bottom');
assert(headerTsx.includes('safe-area-inset-top'), 'Header.tsx has safe-area-inset-top support');
assert(bottomNavTsx.includes('safe-area-inset-bottom'), 'MobileBottomNav.tsx has safe-area-inset-bottom support');

// 4. DYNAMIC VIEWPORT HEIGHT (100dvh)
assert(styleCss.includes('100dvh'), 'Compiled CSS has 100dvh support');
assert(headerTsx.includes('100dvh'), 'Header.tsx drawer has 100dvh support');

// 5. SHINE HAIR SLIDE-OVER DRAWER (6 Services & Dual Actions)
assert(indexHtml.includes('class="drawer-service-links-list"'), 'Drawer has dedicated service links list in index.html');
assert(indexHtml.includes('Profesyonel Balyaj'), 'Drawer has Profesyonel Balyaj');
assert(indexHtml.includes('Blonde Saç Tasarımı'), 'Drawer has Blonde Saç Tasarımı');
assert(indexHtml.includes('Mikro Kapsül Kaynak'), 'Drawer has Mikro Kapsül Kaynak');
assert(indexHtml.includes('Ombre & Sombre'), 'Drawer has Ombre & Sombre');
assert(indexHtml.includes('Saç Boyama & Tonlama'), 'Drawer has Saç Boyama & Tonlama');
assert(indexHtml.includes('Kişiye Özel Saç Kesimi'), 'Drawer has Kişiye Özel Saç Kesimi');
assert(indexHtml.includes('Konumu Aç'), 'Drawer has Konumu Aç button in index.html');
assert(headerTsx.includes('Konumu Aç'), 'Header.tsx has Konumu Aç button');
assert(headerTsx.includes('Profesyonel Balyaj') && headerTsx.includes('Blonde Saç Tasarımı'), 'Header.tsx drawer has 6 Shine Hair service items');

// 6. SHINE HAIR 01 / 02 / 03 TRUST SECTION
assert(indexHtml.includes('shine-trust-grid'), 'index.html has shine-trust-grid');
assert(indexHtml.includes('Uzman Saç Analizi'), 'index.html has 01 Uzman Saç Analizi');
assert(indexHtml.includes('Değişmez Hijyen Standardı'), 'index.html has 02 Değişmez Hijyen Standardı');
assert(indexHtml.includes('Dürüst ve Şeffaf Hizmet'), 'index.html has 03 Dürüst ve Şeffaf Hizmet');
assert(trustSectionTsx.includes('Uzman Saç Analizi'), 'TrustSection.tsx has 01 Uzman Saç Analizi');

// 7. STICKY BOTTOM NAV DUAL ACTIONS
assert(bottomNavTsx.includes('Hemen Ara') && bottomNavTsx.includes('WhatsApp Randevu'), 'MobileBottomNav.tsx has dual action buttons');
assert(indexHtml.includes('Hemen Ara') && indexHtml.includes('WhatsApp Randevu'), 'index.html has dual action bottom nav');

// 8. LANGUAGE DROPDOWN & CATEGORY TABS
assert(indexHtml.includes('class="lang-dropdown-container"'), 'Language dropdown container in index.html');
assert(indexHtml.includes('service-tabs-wrapper'), 'Service category tabs wrapper in index.html');
assert(i18nJs.includes('filterServices'), 'filterServices function in js/i18n.js');

// 9. DEDICATED MULTI-PAGE SERVICE PAGES
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

// 10. BRAND INTEGRITY & INSTAGRAM
assert(indexHtml.includes('threebrotherrrs'), 'Instagram handle is @threebrotherrrs');

// 11. ZIP ARCHIVE CHECK
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
