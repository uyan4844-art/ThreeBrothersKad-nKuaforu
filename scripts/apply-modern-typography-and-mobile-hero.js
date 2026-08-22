const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 1. UPDATE src/input.css
let inputCss = fs.readFileSync('src/input.css', 'utf8');

// Replace Cormorant Garamond font definitions with Plus Jakarta Sans
inputCss = inputCss.replace(
  /--font-serif:\s*"Cormorant Garamond"[^;]*;/g,
  '--font-serif: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;'
);

inputCss = inputCss.replace(
  /font-family:\s*'Cormorant Garamond'[^;]*;/g,
  "font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;"
);

inputCss = inputCss.replace(
  /\.font-serif-editorial\s*\{[^}]*\}/g,
  `.font-serif-editorial {
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
}`
);

fs.writeFileSync('src/input.css', inputCss, 'utf8');
console.log('src/input.css updated with Plus Jakarta Sans');

// 2. Recompile Tailwind
try {
  execSync('node ./node_modules/@tailwindcss/cli/dist/index.mjs -i ./src/input.css -o ./css/style.css --minify');
  fs.copyFileSync('./css/style.css', './public/css/style.css');
  console.log('Tailwind CSS compiled & synced to public/css/style.css');
} catch (e) {
  console.error('Tailwind build error:', e.message);
}

// 3. UPDATE ALL HTML FILES WITH PLUS JAKARTA SANS & MODERN TYPOGRAPHY
const allHtmlFiles = [
  'index.html',
  'hakkimizda.html',
  'balyaj.html',
  'blonde.html',
  'kaynak.html',
  'ombre.html',
  'renklendirme.html'
];

const fontLinkOldRegex = /<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Cormorant\+Garamond[^"]*" rel="stylesheet" \/>/g;
const fontLinkNew = `<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,500;0,600;0,700;0,800;1,700;1,800&display=swap" rel="stylesheet" />`;

allHtmlFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    // Replace Google Font Link
    content = content.replace(fontLinkOldRegex, fontLinkNew);
    content = content.replace(
      /<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Montserrat[^"]*" rel="stylesheet" \/>/g,
      fontLinkNew
    );

    // Replace CSS variables
    content = content.replace(
      /--font-serif:\s*'Cormorant Garamond'[^;]*;/g,
      "--font-serif: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;"
    );

    content = content.replace(
      /font-family:\s*'Cormorant Garamond'[^;]*;/g,
      "font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;"
    );

    fs.writeFileSync(file, content, 'utf8');
    fs.writeFileSync(path.join('public', file), content, 'utf8');
    console.log(`${file} updated with Plus Jakarta Sans`);
  }
});

// 4. UPDATE index.html HERO STYLES & MOBILE OVERRIDES
let indexHTML = fs.readFileSync('index.html', 'utf8');

// Replace Hero section buttons in index.html for clear Hizmetlerimiz & Randevu Al ordering
const heroActionsOldRegex = /<div class="hero-actions hero-anim-4">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/;
const heroActionsNew = `<div class="hero-actions hero-anim-4">
          <a href="#hizmetler" class="btn-hero-primary" data-i18n="hero_btn_explore">
            <span>Hizmetlerimiz</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>

          <a href="https://wa.me/905526856907?text=Merhaba,%20Three%20Brothers%20salonunuzdan%20randevu%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" class="btn-hero-secondary" data-i18n="hero_btn_wa">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
            <span>Randevu Al (WhatsApp)</span>
          </a>
        </div>

      </div>
    </div>
  </section>`;

indexHTML = indexHTML.replace(heroActionsOldRegex, heroActionsNew);

// Add Desktop & Mobile Styles for Hero and Typography in index.html <style> block
const extraHeroCSS = `
    /* Modern Plus Jakarta Sans Headings System */
    h1, h2, h3, h4, .section-title, .hero-headline, .story-headline-serif, .brand-title, .drawer-brand h3, .footer-brand h3 {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif !important;
      font-weight: 700;
      letter-spacing: -0.025em;
    }
    
    .hero-headline {
      font-weight: 800 !important;
      letter-spacing: -0.03em !important;
    }

    /* Desktop Hero Action Buttons */
    .btn-hero-primary {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 15px 32px;
      border-radius: 999px;
      background: #1F1C19;
      color: #FFFFFF;
      font-size: 15px;
      font-weight: 700;
      text-decoration: none;
      box-shadow: 0 10px 25px rgba(31, 28, 25, 0.2);
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      border: 1px solid #1F1C19;
    }
    .btn-hero-primary:hover {
      background: #A48358;
      border-color: #A48358;
      color: #FFFFFF;
      transform: translateY(-2px);
      box-shadow: 0 14px 30px rgba(164, 131, 88, 0.3);
    }

    .btn-hero-secondary {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 15px 30px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      color: #1F1C19;
      font-size: 15px;
      font-weight: 600;
      text-decoration: none;
      border: 1.5px solid rgba(197, 168, 128, 0.4);
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .btn-hero-secondary:hover {
      background: #FFFFFF;
      border-color: #A48358;
      color: #A48358;
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    }
`;

// Insert extraHeroCSS before closing </style>
indexHTML = indexHTML.replace('</style>', extraHeroCSS + '\n  </style>');

// Update Mobile Specific Hero & Floating Bar CSS
const mobileHeroOverride = `
    @media (max-width: 768px) {
      /* Full-Bleed High-Fashion Mobile Hero */
      .boutique-hero {
        min-height: 100svh !important;
        height: 100svh !important;
        padding-top: 110px !important;
        padding-bottom: 50px !important;
        display: flex !important;
        align-items: flex-end !important;
        justify-content: center !important;
        position: relative !important;
        overflow: hidden !important;
      }

      .hero-bg-layer {
        position: absolute !important;
        inset: 0 !important;
        width: 100% !important;
        height: 100% !important;
        z-index: 1 !important;
      }

      .hero-bg-image {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
        object-position: center top !important;
        transform: scale(1.02) !important;
      }

      .hero-backdrop-scrim {
        position: absolute !important;
        inset: 0 !important;
        width: 100% !important;
        height: 100% !important;
        z-index: 2 !important;
        background: linear-gradient(to top, rgba(26, 23, 21, 0.88) 0%, rgba(26, 23, 21, 0.45) 50%, rgba(26, 23, 21, 0.3) 100%) !important;
      }

      .hero-container {
        position: relative !important;
        z-index: 3 !important;
        padding: 0 20px !important;
        width: 100% !important;
        display: flex !important;
        justify-content: center !important;
        text-align: center !important;
      }

      .hero-content-box {
        text-align: center !important;
        max-width: 100% !important;
        margin: 0 auto !important;
      }

      .hero-kicker-pill {
        background: rgba(26, 23, 21, 0.7) !important;
        border: 1px solid rgba(235, 224, 210, 0.4) !important;
        color: #EBE0D2 !important;
        backdrop-filter: blur(10px) !important;
        -webkit-backdrop-filter: blur(10px) !important;
        margin: 0 auto 16px auto !important;
        padding: 6px 14px !important;
        font-size: 0.7rem !important;
        letter-spacing: 2px !important;
      }

      .hero-headline {
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif !important;
        font-size: 2.2rem !important;
        font-weight: 800 !important;
        text-align: center !important;
        color: #FFFFFF !important;
        line-height: 1.15 !important;
        letter-spacing: -0.025em !important;
        margin-bottom: 14px !important;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4) !important;
      }

      .hero-headline em {
        color: #FFFFFF !important;
        font-weight: 800 !important;
        font-style: normal !important;
      }

      .hero-description {
        font-size: 14.5px !important;
        line-height: 1.6 !important;
        color: rgba(255, 255, 255, 0.92) !important;
        text-align: center !important;
        margin-bottom: 26px !important;
        max-width: 360px !important;
        margin-left: auto !important;
        margin-right: auto !important;
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3) !important;
      }

      .hero-actions {
        display: flex !important;
        flex-direction: column !important;
        width: 100% !important;
        gap: 12px !important;
      }

      .btn-hero-primary {
        width: 100% !important;
        background: #FFFFFF !important;
        color: #1A1715 !important;
        font-weight: 800 !important;
        font-size: 15px !important;
        padding: 16px 24px !important;
        border-radius: 999px !important;
        text-align: center !important;
        justify-content: center !important;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35) !important;
        border: none !important;
      }

      .btn-hero-secondary {
        width: 100% !important;
        background: rgba(255, 255, 255, 0.08) !important;
        border: 1.5px solid rgba(255, 255, 255, 0.75) !important;
        color: #FFFFFF !important;
        font-weight: 700 !important;
        font-size: 15px !important;
        padding: 15px 24px !important;
        border-radius: 999px !important;
        text-align: center !important;
        justify-content: center !important;
        backdrop-filter: blur(10px) !important;
        -webkit-backdrop-filter: blur(10px) !important;
      }

      /* Mobile Floating Action Bar Luxury Palette */
      .mobile-float-bar {
        background: rgba(26, 23, 21, 0.96) !important;
        border: 1px solid rgba(197, 168, 128, 0.35) !important;
        box-shadow: 0 12px 35px rgba(0, 0, 0, 0.5) !important;
        padding: 8px 12px !important;
      }

      .mobile-call-btn {
        background: rgba(255, 255, 255, 0.08) !important;
        border: 1px solid rgba(197, 168, 128, 0.4) !important;
        color: #FAF7F2 !important;
        font-weight: 700 !important;
      }

      .mobile-wa-btn {
        background: linear-gradient(135deg, #C5A880, #A48358) !important;
        color: #1A1715 !important;
        font-weight: 800 !important;
        border: none !important;
      }
    }
`;

indexHTML = indexHTML.replace('</style>', mobileHeroOverride + '\n  </style>');

fs.writeFileSync('index.html', indexHTML, 'utf8');
fs.writeFileSync('public/index.html', indexHTML, 'utf8');
console.log('index.html updated with modern Plus Jakarta Sans typography and mobile hero');
