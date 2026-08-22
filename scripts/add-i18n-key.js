const fs = require('fs');

let i18n = fs.readFileSync('js/i18n.js', 'utf8');

const mapping = {
  tr: "Ön Görüşme İçin İletişime Geç",
  en: "Contact for Consultation",
  de: "Kontakt für Erstberatung",
  ru: "Связаться для консультации",
  ar: "تواصل للاستشارة المسبقة"
};

for (const lang of ['tr', 'en', 'de', 'ru', 'ar']) {
  const target = new RegExp(`("${lang}":\\s*\\{[\\s\\S]*?"story_quote":\\s*"[^"]+",)`);
  i18n = i18n.replace(target, `$1\n    "story_btn_wa": "${mapping[lang]}",`);
}

fs.writeFileSync('js/i18n.js', i18n, 'utf8');
console.log('js/i18n.js updated successfully with story_btn_wa');
