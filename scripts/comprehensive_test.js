const fs = require('fs');
const path = require('path');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const i18nJs = fs.readFileSync('js/i18n.js', 'utf8');
const styleCss = fs.readFileSync('css/style.css', 'utf8');

const tests = [];

function assert(condition, testName, details = '') {
  tests.push({ name: testName, pass: Boolean(condition), details });
}

// 1. HEADER VERIFICATION
assert(indexHtml.includes('class="luxury-header" id="boutiqueHeader"'), 'Sticky Luxury Header element present');
assert(indexHtml.includes('class="nav-menu-desktop"'), 'Desktop navigation menu present');
assert(indexHtml.includes('data-i18n="nav_services"') && indexHtml.includes('href="#hizmetler"'), 'Nav: Hizmetler smooth scroll link');
assert(indexHtml.includes('data-i18n="nav_story"') && indexHtml.includes('href="hakkimizda.html"'), 'Nav: Hakkımızda link');
assert(indexHtml.includes('data-i18n="nav_process"') && indexHtml.includes('href="#surec"'), 'Nav: Süreç link');
assert(indexHtml.includes('data-i18n="nav_gallery"') && indexHtml.includes('href="#galeri"'), 'Nav: Galeri link');
assert(indexHtml.includes('data-i18n="nav_reviews"') && indexHtml.includes('href="#yorumlar"'), 'Nav: Yorumlar link');
assert(indexHtml.includes('data-i18n="nav_faq"') && indexHtml.includes('href="#sss"'), 'Nav: SSS link');
assert(indexHtml.includes('data-i18n="nav_contact"') && indexHtml.includes('href="#iletisim"'), 'Nav: İletişim link');
assert(indexHtml.includes('class="lang-switcher"'), 'Multi-language switcher in header');
assert(indexHtml.includes('class="btn-header-wa"') && indexHtml.includes('wa.me/905526856907'), 'Header WhatsApp Randevu Al CTA present');
assert(indexHtml.includes('id="openMobileMenuBtn"') && indexHtml.includes('class="mobile-menu-btn"'), 'Mobile Hamburger Menu button present');

// 2. FAQ (SSS) VERIFICATION
assert(indexHtml.includes('<section id="sss" class="boutique-section section-faq">'), 'FAQ Section element present');
assert(indexHtml.includes('Balyaj ve Sombre renklendirme işlemleri ne kadar sürer?'), 'FAQ Q1 present in index.html');
assert(indexHtml.includes('ortalama 3 ile 5 saat arasında değişmektedir'), 'FAQ A1 present in index.html');
assert(indexHtml.includes('Açma ve sarışınlık işlemlerinde saçım yıpranır mı?'), 'FAQ Q2 present in index.html');
assert(indexHtml.includes('Biyolojik saç sağlığı protokolümüz kapsamında'), 'FAQ A2 present in index.html');
assert(indexHtml.includes('Mikro kapsül kaynak ne kadar süre kullanılabilir?'), 'FAQ Q3 present in index.html');
assert(indexHtml.includes('2.5 - 4 ay boyunca konforla kullanılabilir'), 'FAQ A3 present in index.html');
assert(indexHtml.includes('Randevuya gelmeden önce saçımı yıkamalı mıyım?'), 'FAQ Q4 present in index.html');
assert(indexHtml.includes('doğal yağ tabakasının korunması önerilir'), 'FAQ A4 present in index.html');
assert(indexHtml.includes('İşlem öncesinde saç analizi ve ön görüşme yapıyor musunuz?'), 'FAQ Q5 present in index.html');
assert(indexHtml.includes('class="faq-chevron"'), 'FAQ accordion chevrons present');

// 3. SOCIAL MEDIA & BRAND CONSISTENCY
const wrongInsta = indexHtml.match(/@threebrotherss/g);
assert(!wrongInsta, 'No old @threebrotherss handles in index.html');
assert(indexHtml.includes('https://www.instagram.com/threebrotherrrs/'), 'Correct Instagram URL used in index.html');
assert(indexHtml.includes('target="_blank" rel="noopener noreferrer"'), 'External security attributes present on links');

// 4. MOBILE FLOATING ACTION BAR
assert(indexHtml.includes('class="mobile-float-bar"'), 'Mobile floating action bar present');
assert(indexHtml.includes('tel:+905526856907') && indexHtml.includes('mobile-call-btn'), 'Mobile Call button present');
assert(indexHtml.includes('mobile-wa-btn') && indexHtml.includes('wa.me/905526856907'), 'Mobile WhatsApp button present');

// 5. SEO & LOCAL META
assert(indexHtml.includes('Manavgat') && indexHtml.includes('Antalya'), 'Local SEO keywords and region in meta');
assert(indexHtml.includes('name="geo.position"') && indexHtml.includes('36.7865;31.4428'), 'Geo meta coordinates present');
assert(indexHtml.includes('property="og:title"'), 'OpenGraph meta tags present');
assert(indexHtml.includes('name="twitter:card"'), 'Twitter Card meta tags present');
assert(indexHtml.includes('"@type": "HairSalon"'), 'Schema.org HairSalon structured data present');

// 6. MULTI-LANGUAGE DICTIONARY VERIFICATION
assert(i18nJs.includes('faq1_q') && i18nJs.includes('faq1_a'), 'i18n dictionary has faq1');
assert(i18nJs.includes('faq2_q') && i18nJs.includes('faq2_a'), 'i18n dictionary has faq2');
assert(i18nJs.includes('faq3_q') && i18nJs.includes('faq3_a'), 'i18n dictionary has faq3');
assert(i18nJs.includes('faq4_q') && i18nJs.includes('faq4_a'), 'i18n dictionary has faq4');
assert(i18nJs.includes('faq5_q') && i18nJs.includes('faq5_a'), 'i18n dictionary has faq5');
assert(i18nJs.includes('threebrotherrrs'), 'i18n dictionary has threebrotherrrs');

// 7. CSS COMPILED STYLES VERIFICATION
assert(styleCss.includes('.luxury-header') || styleCss.includes('luxury-header'), 'Compiled CSS has .luxury-header');
assert(styleCss.includes('.btn-header-wa') || styleCss.includes('btn-header-wa'), 'Compiled CSS has .btn-header-wa');
assert(styleCss.includes('.faq-item') || styleCss.includes('faq-item'), 'Compiled CSS has .faq-item');
assert(styleCss.includes('.mobile-float-bar') || styleCss.includes('mobile-float-bar'), 'Compiled CSS has .mobile-float-bar');

console.log('=== TEST RESULTS ===');
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
