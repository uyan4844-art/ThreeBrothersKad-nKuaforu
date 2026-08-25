const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

const modernObserverScript = `      // 1. Ultra-Smooth High-Performance IntersectionObserver for Scroll Reveals
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
      };

      const revealTargets = document.querySelectorAll(
        '.reveal-on-scroll, .reveal-slide-up, .reveal-fade, .reveal-scale, .reveal-slide-left, .reveal-slide-right, .reveal-stagger-parent'
      );

      if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              revealObserver.unobserve(entry.target);
            }
          });
        }, observerOptions);

        revealTargets.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('is-revealed');
          } else {
            revealObserver.observe(el);
          }
        });
      } else {
        revealTargets.forEach(el => el.classList.add('is-revealed'));
      }`;

// 1. Update index.html
let indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');

// Replace the observer block in index.html
indexHtml = indexHtml.replace(
  /\/\/\s*1\.\s*High-Performance\s*IntersectionObserver[\s\S]*?revealTargets\.forEach\(el\s*=>\s*el\.classList\.add\('is-revealed'\)\);\s*\}/,
  modernObserverScript
);

fs.writeFileSync(path.join(rootDir, 'index.html'), indexHtml, 'utf8');
console.log('Updated index.html motion observer script.');

// 2. Update Hakkımızda & 5 Service Subpages
const subpages = [
  'hakkimizda.html',
  'balyaj.html',
  'blonde.html',
  'kaynak.html',
  'ombre.html',
  'renklendirme.html'
];

subpages.forEach(file => {
  const filePath = path.join(rootDir, file);
  let html = fs.readFileSync(filePath, 'utf8');
  
  // Replace observer block in subpages
  if (html.includes('// 1. High-Performance IntersectionObserver')) {
    html = html.replace(
      /\/\/\s*1\.\s*High-Performance\s*IntersectionObserver[\s\S]*?revealTargets\.forEach\(el\s*=>\s*el\.classList\.add\('is-revealed'\)\);\s*\}/,
      modernObserverScript
    );
  }
  
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Updated motion observer script in ${file}.`);
});
