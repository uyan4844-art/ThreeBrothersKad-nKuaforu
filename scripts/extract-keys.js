const fs = require('fs');
const path = require('path');

const files = [
  'index.html',
  'hakkimizda.html',
  'balyaj.html',
  'blonde.html',
  'kaynak.html',
  'ombre.html',
  'renklendirme.html'
];

const allKeys = new Set();

files.forEach(f => {
  if (fs.existsSync(f)) {
    const html = fs.readFileSync(f, 'utf8');
    const matches = html.matchAll(/data-i18n="([^"]+)"/g);
    for (const m of matches) {
      allKeys.add(m[1]);
    }
  }
});

console.log(`Found ${allKeys.size} distinct data-i18n keys across all pages:`);
console.log(Array.from(allKeys).sort());
