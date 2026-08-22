const fs = require('fs');
const path = require('path');

const i18nPath = path.join(__dirname, '../js/i18n.js');
const publicI18nPath = path.join(__dirname, '../public/js/i18n.js');

const kickers = {
  tr: "MANAVGAT KİŞİYE ÖZEL RENK MİMARİSİ",
  en: "MANAVGAT BESPOKE COLOR ARCHITECTURE",
  de: "MANAVGAT INDIVIDUELLE FARBARCHITEKTUR",
  ru: "МАНАВГАТ: АВТОРСКАЯ КОЛОРИСТИКА",
  ar: "هندسة وتصميم ألوان الشعر المخصصة في مانافجات"
};

let content = fs.readFileSync(i18nPath, 'utf8');

for (const [lang, val] of Object.entries(kickers)) {
  const marker = `"${lang}": {`;
  const idx = content.indexOf(marker);
  if (idx !== -1) {
    const insertPos = idx + marker.length;
    content = content.slice(0, insertPos) + `\n    "hero_kicker": ${JSON.stringify(val)},` + content.slice(insertPos);
  }
}

fs.writeFileSync(i18nPath, content, 'utf8');
fs.writeFileSync(publicI18nPath, content, 'utf8');
console.log('hero_kicker added to all languages in js/i18n.js!');
