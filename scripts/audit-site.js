const fs = require('fs');
const path = require('path');

const indexHtml = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const i18nJs = fs.readFileSync(path.join(__dirname, '..', 'js', 'i18n.js'), 'utf8');

console.log('=== 1. CHECKING IMAGE PATHS ===');
const imgRegex = /(?:src|srcset)="([^"]+)"/g;
let match;
const missingImages = [];
while ((match = imgRegex.exec(indexHtml)) !== null) {
  const raw = match[1];
  const parts = raw.split(',').map(s => s.trim().split(' ')[0]);
  for (const part of parts) {
    if (part.startsWith('http') || part.startsWith('data:') || part.startsWith('//')) continue;
    const cleanPath = part.split('?')[0].replace(/^\.\//, '');
    const fullPath = path.join(__dirname, '..', cleanPath);
    if (!fs.existsSync(fullPath)) {
      missingImages.push(part);
    }
  }
}
console.log('Missing images count:', missingImages.length, missingImages);

console.log('\n=== 2. CHECKING ANCHOR LINKS ===');
const hrefRegex = /href="#([a-zA-Z0-9_-]+)"/g;
const missingAnchors = [];
while ((match = hrefRegex.exec(indexHtml)) !== null) {
  const targetId = match[1];
  if (!indexHtml.includes(`id="${targetId}"`)) {
    missingAnchors.push(targetId);
  }
}
console.log('Missing anchor targets:', missingAnchors);

console.log('\n=== 3. CHECKING TRANSLATIONS (data-i18n) ===');
const i18nRegex = /data-i18n="([^"]+)"/g;
const usedKeys = new Set();
while ((match = i18nRegex.exec(indexHtml)) !== null) {
  usedKeys.add(match[1]);
}
const missingInI18n = [];
for (const key of usedKeys) {
  if (!i18nJs.includes(`${key}:`) && !i18nJs.includes(`"${key}"`) && !i18nJs.includes(`'${key}'`)) {
    missingInI18n.push(key);
  }
}
console.log('Total data-i18n keys in HTML:', usedKeys.size);
console.log('Missing data-i18n keys in i18n.js:', missingInI18n);

console.log('\n=== 4. CHECKING SECTION STRUCTURE & ARIA ===');
const sections = indexHtml.match(/<section[^>]*id="([^"]+)"/g);
console.log('Main sections found:', sections);
