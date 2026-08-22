const fs = require('fs');
const path = require('path');

const targetFiles = ['index.html', 'public/index.html'];

const oldMobileHeroCssRegex = /@media\s*\(\s*max-width:\s*768px\s*\)\s*\{[\s\S]*?\/\*\s*Mobile Floating Action Bar Luxury Palette\s*\*\/[\s\S]*?\.mobile-wa-btn\s*\{[\s\S]*?\}\s*\}/;

const newMobileHeroAndFloatingBarCss = `@media (max-width: 768px) {
      /* Full-Bleed High-Fashion Mobile Hero - Fixed Height & Padding */
      .boutique-hero {
        min-height: 100vh !important;
        height: auto !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: center !important;
        padding: 90px 24px 100px !important;
        box-sizing: border-box !important;
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
        object-position: center 15% !important;
        transform: scale(1.02) !important;
      }

      .hero-backdrop-scrim {
        position: absolute !important;
        inset: 0 !important;
        width: 100% !important;
        height: 100% !important;
        z-index: 2 !important;
        background: rgba(0, 0, 0, 0.45) !important;
      }

      .hero-container {
        position: relative !important;
        z-index: 3 !important;
        padding: 0 !important;
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

      .hero-headline {
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif !important;
        font-size: 1.85rem !important;
        font-weight: 800 !important;
        text-align: center !important;
        color: #FFFFFF !important;
        line-height: 1.2 !important;
        letter-spacing: -0.02em !important;
        margin-bottom: 12px !important;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5) !important;
      }

      .hero-headline em {
        color: #FFFFFF !important;
        font-weight: 800 !important;
        font-style: normal !important;
      }

      .hero-description {
        font-size: 0.85rem !important;
        line-height: 1.5 !important;
        color: rgba(255, 255, 255, 0.95) !important;
        text-align: center !important;
        margin-bottom: 20px !important;
        max-width: 320px !important;
        margin-left: auto !important;
        margin-right: auto !important;
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4) !important;
      }

      .hero-actions {
        display: flex !important;
        flex-direction: column !important;
        width: 100% !important;
        gap: 10px !important;
      }

      .btn-hero-primary {
        width: 100% !important;
        background: #FFFFFF !important;
        color: #1A1715 !important;
        font-weight: 700 !important;
        font-size: 0.85rem !important;
        padding: 12px 20px !important;
        border-radius: 999px !important;
        text-align: center !important;
        justify-content: center !important;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25) !important;
        border: none !important;
      }

      .btn-hero-secondary {
        width: 100% !important;
        background: rgba(255, 255, 255, 0.1) !important;
        border: 1.5px solid rgba(255, 255, 255, 0.8) !important;
        color: #FFFFFF !important;
        font-weight: 600 !important;
        font-size: 0.85rem !important;
        padding: 12px 20px !important;
        border-radius: 999px !important;
        text-align: center !important;
        justify-content: center !important;
        backdrop-filter: blur(8px) !important;
        -webkit-backdrop-filter: blur(8px) !important;
      }

      /* Mobile Floating Action Bar - Slim 36px Height */
      .mobile-float-bar {
        display: flex !important;
        position: fixed !important;
        bottom: 0 !important;
        left: 0 !important;
        right: 0 !important;
        z-index: 9999 !important;
        background: rgba(26, 23, 21, 0.96) !important;
        border-top: 1px solid rgba(197, 168, 128, 0.35) !important;
        box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.35) !important;
        padding: 6px 12px !important;
        gap: 8px !important;
        backdrop-filter: blur(12px) !important;
        -webkit-backdrop-filter: blur(12px) !important;
        box-sizing: border-box !important;
      }

      .mobile-float-btn {
        flex: 1 !important;
        height: 36px !important;
        min-height: 36px !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 6px !important;
        font-size: 12px !important;
        font-weight: 700 !important;
        border-radius: 999px !important;
        text-decoration: none !important;
        box-sizing: border-box !important;
      }

      .mobile-call-btn {
        background: rgba(255, 255, 255, 0.1) !important;
        border: 1px solid rgba(197, 168, 128, 0.4) !important;
        color: #FAF7F2 !important;
      }

      .mobile-wa-btn {
        background: linear-gradient(135deg, #C5A880, #A48358) !important;
        color: #1A1715 !important;
        border: none !important;
      }
    }`;

targetFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    if (oldMobileHeroCssRegex.test(content)) {
      content = content.replace(oldMobileHeroCssRegex, newMobileHeroAndFloatingBarCss);
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated mobile hero and float bar in ${file}`);
    } else {
      console.log(`Pattern not matched in ${file}`);
    }
  }
});
