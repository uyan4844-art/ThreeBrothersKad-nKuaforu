const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
const publicIndexPath = path.join(__dirname, '../public/index.html');
const inputCssPath = path.join(__dirname, '../src/input.css');

// 1. Update HTML in index.html and public/index.html
function updateHtml(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');

  // Replace services header with explicit classes
  const oldHeaderPattern = /<div class="services-header[^"]*">[\s\S]*?<span class="section-kicker"[^>]*>[\s\S]*?<\/span>[\s\S]*?<h2[^>]*>[\s\S]*?<\/h2>[\s\S]*?<p[^>]*>[\s\S]*?<\/p>[\s\S]*?<\/div>/;

  const newHeader = `<div class="services-header reveal-on-scroll">
        <span class="section-kicker" data-i18n="services_kicker">UZMANLIK ALANLARIMIZ</span>
        <h2 class="services-title font-serif-editorial" data-i18n="services_title">Kişiye Özel Profesyonel Dokunuşlar</h2>
        <p class="services-desc font-sans-luxury" data-i18n="services_desc">
          Renk, form ve bakımda doğal görünümü modern kuaförlük teknikleriyle buluşturuyoruz.
        </p>
      </div>`;

  if (oldHeaderPattern.test(html)) {
    html = html.replace(oldHeaderPattern, newHeader);
  } else {
    // Exact string replacement fallback
    html = html.replace(
      '<h2 data-i18n="services_title">Kişiye Özel Profesyonel Dokunuşlar</h2>',
      '<h2 class="services-title font-serif-editorial" data-i18n="services_title">Kişiye Özel Profesyonel Dokunuşlar</h2>'
    );
    html = html.replace(
      '<p data-i18n="services_desc">',
      '<p class="services-desc font-sans-luxury" data-i18n="services_desc">'
    );
  }

  fs.writeFileSync(filePath, html, 'utf8');
}

updateHtml(indexPath);
updateHtml(publicIndexPath);
console.log('Updated HTML files with styled services black header!');

// 2. Update src/input.css
let css = fs.readFileSync(inputCssPath, 'utf8');

const servicesHeaderCss = `
.services-header {
  text-align: left;
  max-width: 820px;
  margin-bottom: 48px;
}

.services-header .section-kicker {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #A48358;
  display: block;
  margin-bottom: 12px;
}

.services-header .services-title,
.services-title {
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: clamp(2.4rem, 4vw, 3.4rem);
  font-weight: 800;
  color: #1F1C19 !important;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
  display: block;
}

.services-header .services-desc,
.services-desc {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.05rem;
  line-height: 1.75;
  color: #5A554E;
  margin-top: 14px;
}
`;

if (!css.includes('.services-header {')) {
  css = css.replace('.services-container {', servicesHeaderCss + '\n.services-container {');
}

// Ensure mobile styles also include .services-header
const mobileServicesHeaderCss = `
  .services-header {
    margin-bottom: 28px !important;
    text-align: left !important;
  }

  .services-header .services-title,
  .services-title {
    font-size: clamp(24px, 6.8vw, 32px) !important;
    line-height: 1.18 !important;
    margin-bottom: 12px !important;
    color: #1F1C19 !important;
  }

  .services-header .services-desc,
  .services-desc {
    font-size: 14px !important;
    line-height: 1.65 !important;
    color: #5A554E !important;
  }
`;

if (!css.includes('.services-header .services-title')) {
  css = css.replace('/* 3. Bento Grid Mobile */', mobileServicesHeaderCss + '\n  /* 3. Bento Grid Mobile */');
}

fs.writeFileSync(inputCssPath, css, 'utf8');
console.log('src/input.css updated with .services-header and .services-title styles!');
