const fs = require('fs');
const css = fs.readFileSync('src/input.css', 'utf8');

const targets = [
  'btn-hero-primary',
  'btn-hero-secondary',
  'btn-espresso-cta',
  'service-card',
  'bento-item',
  'process-card',
  'trust-metric-card',
  'reel-card',
  'single-review-card',
  'faq-item',
  'boutique-section'
];

targets.forEach(target => {
  console.log(`\n=================== .${target} ===================`);
  const regex = new RegExp(`\\.${target}[^{]*\\{[^}]*\\}`, 'g');
  const matches = css.match(regex) || [];
  matches.forEach(m => console.log(m));
  
  // also look for hover rules
  const hoverRegex = new RegExp(`\\.${target}:hover[^{]*\\{[^}]*\\}`, 'g');
  const hoverMatches = css.match(hoverRegex) || [];
  hoverMatches.forEach(m => console.log('HOVER:', m));
});
