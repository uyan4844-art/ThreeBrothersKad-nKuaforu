const fs = require('fs');

console.log('--- Setting all frame / card / container edges to sharp in src/input.css ---');

let css = fs.readFileSync('src/input.css', 'utf8');

// Target selectors where border-radius should be 0 (frames, cards, boxes, images)
const targetSelectors = [
  'drawer-service-links-list li a',
  'drawer-action-btn',
  'drawer-wa-full-btn',
  'bento-item',
  'bento-item.tall',
  'bento-item img',
  'tech-video-wrapper',
  'tech-feature-card',
  'trust-stat-box',
  'trust-metric-card',
  'shine-trust-card',
  'process-step-card',
  'repair-callout-box',
  'insta-profile-card',
  'insta-reel-card',
  'single-review-card',
  'gallery-tile',
  'faq-item',
  'contact-card-box',
  'google-maps-box',
  'service-image-card',
  'about-image-card',
  'service-process-section',
  'process-step-item',
  'about-stat-card',
  'about-quote-box',
  'about-signature-card',
  'sheet-modal',
  'sheet-duration-row',
  'sheet-product-tag',
  'sheet-wa-cta',
  'app-nav-item',
  'app-nav-wa-special'
];

// Split by CSS rule blocks
// We can use a regex to replace border-radius inside the matching rules
targetSelectors.forEach(sel => {
  // match selector followed by { ... }
  // We handle selectors that may be part of multiple selectors e.g. .service-image-card, .about-image-card
  const escapedSel = sel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(\\.[^{}]*${escapedSel}[^{}]*\\{[^{}]*?border-radius:\\s*)([^;]+)(;[^{}]*?\\})`, 'gs');
  
  css = css.replace(regex, (match, prefix, val, suffix) => {
    const isImportant = val.includes('!important');
    const newVal = isImportant ? '0 !important' : '0';
    console.log(`Updated selector matching .${sel}: was ${val.trim()} -> now ${newVal}`);
    return `${prefix}${newVal}${suffix}`;
  });
});

fs.writeFileSync('src/input.css', css, 'utf8');
console.log('src/input.css successfully processed!');
