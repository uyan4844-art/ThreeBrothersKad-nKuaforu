const fs = require('fs');

let i18n = fs.readFileSync('js/i18n.js', 'utf8');

const accents = {
  tr: 'Saçın Doğal Sağlığı ve Sanatı',
  en: 'Healthy Hair Artistry',
  de: 'Gesunde Haarkunst',
  ru: 'Здоровые и красивые волосы',
  ar: 'فن الشعر الصحي'
};

for (const lang of ['tr', 'en', 'de', 'ru', 'ar']) {
  const target = new RegExp(`("${lang}":\\s*\\{[\\s\\S]*?"story_title":\\s*"[^"]+",)`);
  i18n = i18n.replace(target, `$1\n    "story_title_accent": "${accents[lang]}",`);
}

fs.writeFileSync('js/i18n.js', i18n, 'utf8');
fs.copyFileSync('js/i18n.js', 'public/js/i18n.js');
console.log('story_title_accent added successfully');
