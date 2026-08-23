const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

// 1. Update src/input.css
let inputCssPath = path.join(rootDir, 'src', 'input.css');
if (fs.existsSync(inputCssPath)) {
  let css = fs.readFileSync(inputCssPath, 'utf8');

  // Easing curves
  css = css.replace(/--ease-expo:\s*cubic-bezier\([^)]+\);/g, '--ease-expo: cubic-bezier(0.22, 1, 0.36, 1);');
  css = css.replace(/--ease-smooth:\s*cubic-bezier\([^)]+\);/g, '--ease-smooth: cubic-bezier(0.22, 1, 0.36, 1);');
  css = css.replace(/cubic-bezier\(0\.16,\s*1,\s*0\.3,\s*1\)/g, 'cubic-bezier(0.22, 1, 0.36, 1)');

  // Reveal durations (0.85s)
  css = css.replace(
    /transition:\s*opacity\s+0\.8s\s+var\(--ease-expo\),\s*transform\s+0\.8s\s+var\(--ease-expo\);/g,
    'transition: opacity 0.85s var(--ease-expo), transform 0.85s var(--ease-expo);'
  );
  css = css.replace(
    /transition:\s*opacity\s+0\.75s\s+var\(--ease-expo\),\s*transform\s+0\.75s\s+var\(--ease-expo\);/g,
    'transition: opacity 0.85s var(--ease-expo), transform 0.85s var(--ease-expo);'
  );

  // Stagger delays (0.15s interval)
  const staggerDelaysBlock = `/* Stagger Delays for Grid Children (0.15s luxury intervals) */
.reveal-stagger-parent.is-revealed .reveal-stagger-item:nth-child(1) { transition-delay: 0.05s; }
.reveal-stagger-parent.is-revealed .reveal-stagger-item:nth-child(2) { transition-delay: 0.20s; }
.reveal-stagger-parent.is-revealed .reveal-stagger-item:nth-child(3) { transition-delay: 0.35s; }
.reveal-stagger-parent.is-revealed .reveal-stagger-item:nth-child(4) { transition-delay: 0.50s; }
.reveal-stagger-parent.is-revealed .reveal-stagger-item:nth-child(5) { transition-delay: 0.65s; }
.reveal-stagger-parent.is-revealed .reveal-stagger-item:nth-child(6) { transition-delay: 0.80s; }
.reveal-stagger-parent.is-revealed .reveal-stagger-item:nth-child(7) { transition-delay: 0.95s; }
.reveal-stagger-parent.is-revealed .reveal-stagger-item:nth-child(8) { transition-delay: 1.10s; }
.reveal-stagger-parent.is-revealed .reveal-stagger-item:nth-child(9) { transition-delay: 1.25s; }
.reveal-stagger-parent.is-revealed .reveal-stagger-item:nth-child(10) { transition-delay: 1.40s; }
.reveal-stagger-parent.is-revealed .reveal-stagger-item:nth-child(11) { transition-delay: 1.55s; }
.reveal-stagger-parent.is-revealed .reveal-stagger-item:nth-child(12) { transition-delay: 1.70s; }`;

  css = css.replace(
    /\/\* Stagger Delays for Grid Children \*\/[\s\S]*?\.reveal-stagger-parent\.is-revealed \.reveal-stagger-item:nth-child\(6\) \{ transition-delay: [^;]+; \}/g,
    staggerDelaysBlock
  );

  // Keyframes and animation durations (0.8s - 1.2s)
  css = css.replace(/animation:\s*brandSlideDown\s+0\.8s/g, 'animation: brandSlideDown 0.9s');
  css = css.replace(/animation:\s*heroImageFadeIn\s+1\.1s/g, 'animation: heroImageFadeIn 1.2s');
  css = css.replace(/animation:\s*heroContentFadeUp\s+0\.85s/g, 'animation: heroContentFadeUp 0.9s');
  css = css.replace(/animation:\s*heroContentFadeUp\s+0\.75s/g, 'animation: heroContentFadeUp 0.85s');
  css = css.replace(/animation:\s*heroContentFadeUp\s+0\.7s/g, 'animation: heroContentFadeUp 0.85s');
  css = css.replace(/animation:\s*heroContentFadeUp\s+0\.6s/g, 'animation: heroContentFadeUp 0.8s');
  css = css.replace(/animation:\s*fadeIn\s+0\.4s/g, 'animation: fadeIn 0.8s');
  css = css.replace(/animation:\s*fadeIn\s+0\.65s/g, 'animation: fadeIn 0.8s');

  // Header & Drawer transitions
  css = css.replace(
    /transition:\s*height\s+0\.35s\s+var\(--ease-expo\),\s*background\s+0\.35s\s+ease,\s*box-shadow\s+0\.35s\s+ease;/g,
    'transition: height 0.5s var(--ease-expo), background 0.5s ease, box-shadow 0.5s ease;'
  );
  css = css.replace(
    /transition:\s*opacity\s+0\.4s\s+var\(--ease-expo\),\s*visibility\s+0\.4s\s+var\(--ease-expo\);/g,
    'transition: opacity 0.55s var(--ease-expo), visibility 0.55s var(--ease-expo);'
  );
  css = css.replace(
    /transition:\s*transform\s+0\.45s\s+var\(--ease-expo\);/g,
    'transition: transform 0.65s var(--ease-expo);'
  );

  // Cards / Bento & Interactive hovers (0.45s - 0.75s)
  css = css.replace(
    /transition:\s*transform\s+0\.45s\s+var\(--ease-expo\),\s*box-shadow\s+0\.45s\s+var\(--ease-expo\),\s*border-color\s+0\.3s\s+ease;/g,
    'transition: transform 0.6s var(--ease-expo), box-shadow 0.6s var(--ease-expo), border-color 0.4s ease;'
  );
  css = css.replace(
    /transition:\s*transform\s+0\.65s\s+var\(--ease-expo\);/g,
    'transition: transform 0.85s var(--ease-expo);'
  );
  css = css.replace(
    /transition:\s*transform\s+0\.7s\s+var\(--ease-expo\);/g,
    'transition: transform 0.85s var(--ease-expo);'
  );
  css = css.replace(
    /transition:\s*transform\s+0\.75s\s+var\(--ease-expo\);/g,
    'transition: transform 0.85s var(--ease-expo);'
  );

  // FAQ smooth expand
  css = css.replace(
    /transition:\s*max-height\s+0\.4s\s+var\(--ease-expo\),\s*padding\s+0\.3s\s+ease;/g,
    'transition: max-height 0.55s var(--ease-expo), padding 0.4s ease;'
  );

  fs.writeFileSync(inputCssPath, css, 'utf8');
  console.log('src/input.css updated with luxury motion design!');
}

// 2. Update all HTML files (root & public)
const htmlFiles = [
  'index.html',
  'hakkimizda.html',
  'balyaj.html',
  'blonde.html',
  'kaynak.html',
  'ombre.html',
  'renklendirme.html',
  'public/index.html',
  'public/hakkimizda.html',
  'public/balyaj.html',
  'public/blonde.html',
  'public/kaynak.html',
  'public/ombre.html',
  'public/renklendirme.html'
];

htmlFiles.forEach(relPath => {
  const fullPath = path.join(rootDir, relPath);
  if (!fs.existsSync(fullPath)) return;

  let html = fs.readFileSync(fullPath, 'utf8');

  // Replace easing curves
  html = html.replace(/cubic-bezier\(0\.16,\s*1,\s*0\.3,\s*1\)/g, 'cubic-bezier(0.22, 1, 0.36, 1)');
  html = html.replace(/--ease-expo:\s*cubic-bezier\([^)]+\);/g, '--ease-expo: cubic-bezier(0.22, 1, 0.36, 1);');
  html = html.replace(/--ease-smooth:\s*cubic-bezier\([^)]+\);/g, '--ease-smooth: cubic-bezier(0.22, 1, 0.36, 1);');

  // Subpage style transitions
  html = html.replace(/transition:\s*transform\s+0\.45s\s+cubic-bezier\([^)]+\);/g, 'transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);');
  html = html.replace(/transition:\s*all\s+0\.3s\s+cubic-bezier\([^)]+\);/g, 'transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);');
  html = html.replace(/transition:\s*opacity\s+0\.35s\s+ease,\s*visibility\s+0\.35s\s+ease;/g, 'transition: opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1), visibility 0.55s cubic-bezier(0.22, 1, 0.36, 1);');
  html = html.replace(/transition:\s*transform\s+0\.6s\s+ease;/g, 'transition: transform 0.85s cubic-bezier(0.22, 1, 0.36, 1);');

  fs.writeFileSync(fullPath, html, 'utf8');
  console.log(`Updated motion in ${relPath}`);
});

console.log('Luxury motion design applied successfully!');
