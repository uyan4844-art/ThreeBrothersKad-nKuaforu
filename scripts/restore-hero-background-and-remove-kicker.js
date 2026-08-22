const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
const publicIndexPath = path.join(__dirname, '../public/index.html');
const inputCssPath = path.join(__dirname, '../src/input.css');

// 1. Remove the kicker pill badge from index.html & public/index.html
let html = fs.readFileSync(indexPath, 'utf8');

html = html.replace(/\s*<span class="hero-kicker-pill"[^>]*>.*?<\/span>/gs, '');

fs.writeFileSync(indexPath, html, 'utf8');
fs.writeFileSync(publicIndexPath, html, 'utf8');
console.log('Hero kicker pill badge removed from index.html and public/index.html!');

// 2. Update src/input.css to place hero image as background in mobile as requested
let css = fs.readFileSync(inputCssPath, 'utf8');

// Replace the mobile hero rules inside @media (max-width: 768px)
const oldMobileHeroTarget = `  /* 2. Hero: Stacked Image Top, Content Bottom */
  .boutique-hero {
    display: flex !important;
    flex-direction: column !important;
    min-height: auto !important;
    padding: 85px 16px 40px !important;
    gap: 24px !important;
    background-color: #FAF7F2 !important;
  }

  .hero-bg-layer {
    position: relative !important;
    inset: auto !important;
    width: 100% !important;
    height: auto !important;
    aspect-ratio: 16 / 11 !important;
    border-radius: 18px !important;
    overflow: hidden !important;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06) !important;
    border: 1px solid rgba(197, 168, 128, 0.3) !important;
    order: 1 !important;
    transform: none !important;
    opacity: 1 !important;
    animation: none !important;
  }

  .hero-bg-image {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    object-position: 72% 15% !important;
    transform: none !important;
    animation: none !important;
  }

  .hero-backdrop-scrim {
    display: none !important;
  }

  .hero-container {
    order: 2 !important;
    padding: 0 !important;
    width: 100% !important;
    display: block !important;
  }

  .hero-content-box {
    text-align: left !important;
    max-width: 100% !important;
    margin: 0 !important;
  }

  .hero-kicker-pill {
    margin-bottom: 12px !important;
    font-size: 0.7rem !important;
    padding: 4px 12px !important;
  }

  .hero-headline {
    font-size: clamp(28px, 7.5vw, 38px) !important;
    line-height: 1.14 !important;
    margin-bottom: 12px !important;
  }

  .hero-description {
    font-size: 14px !important;
    line-height: 1.6 !important;
    margin-bottom: 22px !important;
    max-width: 100% !important;
  }

  .hero-actions {
    display: flex !important;
    flex-direction: column !important;
    width: 100% !important;
    gap: 10px !important;
  }

  .hero-actions a {
    width: 100% !important;
    text-align: center !important;
    justify-content: center !important;
    padding: 13px 20px !important;
    font-size: 14px !important;
  }`;

const newMobileHeroRules = `  /* 2. Hero: Background Image with Elegant Bottom Scrim (Eskisi Gibi Arka Planda) */
  .boutique-hero {
    min-height: 88vh !important;
    height: auto !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: flex-end !important;
    padding: 95px 16px 42px !important;
    position: relative !important;
    overflow: hidden !important;
    background-color: #FAF7F2 !important;
  }

  .hero-bg-layer {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    z-index: 0 !important;
    display: block !important;
    opacity: 1 !important;
    transform: none !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    border: none !important;
  }

  .hero-bg-image {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    object-position: 72% 12% !important;
    display: block !important;
    filter: contrast(105%) saturate(104%) !important;
  }

  .hero-backdrop-scrim {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    z-index: 1 !important;
    background: linear-gradient(180deg, rgba(250, 247, 242, 0.1) 0%, rgba(250, 247, 242, 0.78) 45%, #FAF7F2 88%) !important;
    display: block !important;
    pointer-events: none !important;
  }

  .hero-container {
    position: relative !important;
    z-index: 2 !important;
    padding: 0 !important;
    width: 100% !important;
    display: block !important;
  }

  .hero-content-box {
    text-align: left !important;
    max-width: 100% !important;
    margin: 0 !important;
  }

  .hero-headline {
    font-size: clamp(32px, 8.2vw, 44px) !important;
    line-height: 1.12 !important;
    margin-bottom: 14px !important;
    color: #1F1C19 !important;
  }

  .hero-description {
    font-size: 15px !important;
    line-height: 1.6 !important;
    margin-bottom: 24px !important;
    max-width: 100% !important;
    color: #5A554E !important;
  }

  .hero-actions {
    display: flex !important;
    flex-direction: column !important;
    width: 100% !important;
    gap: 10px !important;
  }

  .hero-actions a {
    width: 100% !important;
    text-align: center !important;
    justify-content: center !important;
    padding: 14px 20px !important;
    font-size: 14px !important;
  }`;

if (css.includes(oldMobileHeroTarget)) {
  css = css.replace(oldMobileHeroTarget, newMobileHeroRules);
} else {
  // If not exact match, replace the boutique-hero mobile section
  const startMarker = '/* 2. Hero:';
  const endMarker = '/* 3. Bento Grid Mobile */';
  const startIdx = css.indexOf(startMarker);
  const endIdx = css.indexOf(endMarker);
  if (startIdx !== -1 && endIdx !== -1) {
    css = css.slice(0, startIdx) + newMobileHeroRules + '\n\n  ' + css.slice(endIdx);
  }
}

fs.writeFileSync(inputCssPath, css, 'utf8');
console.log('src/input.css updated with hero background restoration!');
