const fs = require('fs');
const path = require('path');

const targetFiles = [
  'index.html',
  'public/index.html',
  'hakkimizda.html',
  'public/hakkimizda.html',
  'balyaj.html',
  'public/balyaj.html',
  'blonde.html',
  'public/blonde.html',
  'kaynak.html',
  'public/kaynak.html',
  'ombre.html',
  'public/ombre.html',
  'renklendirme.html',
  'public/renklendirme.html'
];

targetFiles.forEach(file => {
  const filePath = path.join(__dirname, '../', file);
  if (!fs.existsSync(filePath)) return;

  let html = fs.readFileSync(filePath, 'utf8');

  // Replace observer logic in HTML files
  // Match the revealObserver callback
  const oldObserverPattern = /const revealObserver = new IntersectionObserver\(\(entries, observer\) => \{[\s\S]*?observer\.unobserve\(entry\.target\);[\s\S]*?\}, observerOptions\);/;

  const newObserverCode = `const revealObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
            } else {
              // Repeat animation on every scroll in & out
              entry.target.classList.remove('is-revealed');
            }
          });
        }, observerOptions);`;

  if (oldObserverPattern.test(html)) {
    html = html.replace(oldObserverPattern, newObserverCode);
  }

  // Also check if there's any unobserve left in script
  html = html.replace(/observer\.unobserve\(entry\.target\);/g, '');

  fs.writeFileSync(filePath, html, 'utf8');
  console.log('Made animations repeatable in:', file);
});
