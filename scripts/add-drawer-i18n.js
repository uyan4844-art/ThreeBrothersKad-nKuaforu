const fs = require('fs');

let i18n = fs.readFileSync('js/i18n.js', 'utf8');

const additions = {
  tr: {
    drawer_services_tag: "ÖZEL HİZMETLERİMİZ",
    drawer_lang_tag: "DİL / LANGUAGE",
    srv_keratin: "Keratin Bakım",
    srv_cut: "Kişiye Özel Kesim"
  },
  en: {
    drawer_services_tag: "SIGNATURE SERVICES",
    drawer_lang_tag: "LANGUAGE",
    srv_keratin: "Keratin Treatment",
    srv_cut: "Custom Haircut"
  },
  de: {
    drawer_services_tag: "EXKLUSIVE LEISTUNGEN",
    drawer_lang_tag: "SPRACHE",
    srv_keratin: "Keratin-Behandlung",
    srv_cut: "Individueller Haarschnitt"
  },
  ru: {
    drawer_services_tag: "НАШИ УСЛУГИ",
    drawer_lang_tag: "ЯЗЫК / LANGUAGE",
    srv_keratin: "Кератиновый уход",
    srv_cut: "Индивидуальная стрижка"
  },
  ar: {
    drawer_services_tag: "خدماتنا المميزة",
    drawer_lang_tag: "اللغة / LANGUAGE",
    srv_keratin: "علاج الكيراتين",
    srv_cut: "قص مخصص"
  }
};

for (const lang of ['tr', 'en', 'de', 'ru', 'ar']) {
  for (const [key, val] of Object.entries(additions[lang])) {
    const escapedVal = val.replace(/"/g, '\\"');
    const regex = new RegExp(`("${lang}":\\s*\\{[\\s\\S]*?"${key}":\\s*")[^"]+(")`);
    if (regex.test(i18n)) {
      i18n = i18n.replace(regex, `$1${escapedVal}$2`);
    } else {
      const target = new RegExp(`("${lang}":\\s*\\{[\\s\\S]*?"brand_name":\\s*"[^"]+",)`);
      i18n = i18n.replace(target, `$1\n    "${key}": "${escapedVal}",`);
    }
  }
}

fs.writeFileSync('js/i18n.js', i18n, 'utf8');
fs.copyFileSync('js/i18n.js', 'public/js/i18n.js');
console.log('js/i18n.js updated with drawer translation keys');
