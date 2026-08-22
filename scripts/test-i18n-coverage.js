const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const js = fs.readFileSync(path.join(__dirname, '..', 'js', 'i18n.js'), 'utf8');

global.window = global;
global.document = {
  querySelectorAll: () => [],
  getElementById: () => null,
  documentElement: {
    setAttribute: () => {},
    classList: {
      add: () => {},
      remove: () => {}
    }
  }
};
global.localStorage = { getItem: () => null, setItem: () => null };
global.navigator = { language: 'tr' };

eval(js);

const regex = /data-i18n(?:-html|-aria)?="([^"]+)"/g;
let match;
const usedKeys = new Set();
while ((match = regex.exec(html)) !== null) {
  usedKeys.add(match[1]);
}

console.log('Total unique data-i18n keys used in index.html:', usedKeys.size);

for (const lang of ['tr', 'en', 'de', 'ru', 'ar']) {
  const dict = window.I18n.translations[lang] || {};
  const missing = [];
  for (const k of usedKeys) {
    if (dict[k] === undefined) {
      missing.push(k);
    }
  }
  console.log(`[${lang.toUpperCase()}] Total keys in dict: ${Object.keys(dict).length} | Missing keys in HTML: ${missing.length}`);
  if (missing.length > 0) {
    console.log(`  Missing:`, missing);
  }
}
