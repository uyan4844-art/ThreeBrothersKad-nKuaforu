const fs = require('fs');
const path = require('path');

const i18nPath = path.join(__dirname, '../js/i18n.js');
const publicI18nPath = path.join(__dirname, '../public/js/i18n.js');

const healthKeys = {
  tr: {
    health_kicker: "ÖNCE SAĞLIK, SONRA GÜZELLİK",
    health_title: "Biyolojik Saç Sağlığı & Şeffaf Teşhis Standartları",
    health_p1: "Three Brothers stüdyomuzda renklendirme ve açma işlemlerine geçmeden önce saç telinin elastikiyetini, nem dengesini ve geçmiş kimyasal geçmişini mikroskobik titizlikle değerlendiriyoruz. Saçın biyolojik yapısını riske atacak hiçbir agresif işleme onay vermiyoruz.",
    health_p2: "Dürüst teşhis ve bağ güçlendirici koruyucu protokollerle, saçınızı yıpratmadan sürdürülebilir bir parlaklık ve sağlıklı uzayan saçlar hedefliyoruz.",
    health_btn: "Ön Görüşme ve Analiz Randevusu",
    felsefe_about_btn: "Hakkımızda & Hikayemiz"
  },
  en: {
    health_kicker: "HEALTH FIRST, BEAUTY FOLLOWS",
    health_title: "Biological Hair Integrity & Transparent Consultation",
    health_p1: "At Three Brothers Studio, before performing any lightening or coloring, we meticulously assess hair elasticity, moisture balance, and chemical history. We never approve aggressive treatments that jeopardize biological hair integrity.",
    health_p2: "With honest diagnostics and bond-strengthening protocols, we deliver luminous, sustainable radiance and healthy growth without damage.",
    health_btn: "Book Free Consultation & Analysis",
    felsefe_about_btn: "About Us & Our Story"
  },
  de: {
    health_kicker: "GESUNDHEIT ZUERST, DANN SCHÖNHEIT",
    health_title: "Biologische Haargesundheit & Ehrliche Beratung",
    health_p1: "Im Three Brothers Studio analysieren wir vor jeder Aufhellung oder Färbung die Elastizität, Feuchtigkeitsbalance und chemische Vorgeschichte des Haares. Behandlungen, die das Haar schädigen könnten, lehnen wir konsequent ab.",
    health_p2: "Mit ehrlicher Diagnose und bindungsstärkenden Schutzprotokollen garantieren wir nachhaltigen Glanz und gesundes Wachstum ohne Haarbruch.",
    health_btn: "Beratung & Haaranalyse buchen",
    felsefe_about_btn: "Über Uns & Unsere Geschichte"
  },
  ru: {
    health_kicker: "СНАЧАЛА ЗДОРОВЬЕ, ЗАТЕМ КРАСОТА",
    health_title: "Биологическое здоровье волос и честная диагностика",
    health_p1: "В студии Three Brothers перед любым осветлением или окрашиванием мы тщательно тестируем эластичность, уровень влаги и химическую историю волос. Мы никогда не беремся за процедуры, способные повредить структуру волоса.",
    health_p2: "Честная диагностика и протоколы защиты связей обеспечивают стойкий естественный блеск и здоровый рост волос без повреждений.",
    health_btn: "Консультация и анализ волос",
    felsefe_about_btn: "О нас и наша история"
  },
  ar: {
    health_kicker: "الصحة أولاً، ثم الجمال",
    health_title: "صحة الشعر البيولوجية ومعايير التشخيص الشفاف",
    health_p1: "في استوديو Three Brothers، نقوم بتقييم مرونة الشعر وتوازن الرطوبة وتاريخ المعالجة الكيميائية بدقة متناهية قبل أي عملية تفتيح أو صبغ. لا نوافق أبداً على أي إجراء يضر ببنية الشعر.",
    health_p2: "من خلال التشخيص الصادق وبروتوكولات حماية الروابط، نضمن لمعاناً مستداماً ونمواً صحياً دون أي تلف.",
    health_btn: "حجز موعد استشارة وتحليل الشعر",
    felsefe_about_btn: "من نحن وقصتنا"
  }
};

function injectClean(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Load the current object via eval safely
  const sandbox = {};
  const evalCode = content + '\nsandbox.I18N_TRANSLATIONS = I18N_TRANSLATIONS;\nsandbox.I18N_LANGUAGES = I18N_LANGUAGES;';
  
  // Let's modify directly
  const languages = ['tr', 'en', 'de', 'ru', 'ar'];
  languages.forEach(lang => {
    const dict = healthKeys[lang];
    // Find "lang": {
    const langIdx = content.indexOf(`"${lang}": {`);
    if (langIdx !== -1) {
      let injection = '';
      Object.keys(dict).forEach(k => {
        const val = dict[k];
        injection += `\n    "${k}": "${val.replace(/"/g, '\\"')}",`;
      });
      content = content.slice(0, langIdx + `"${lang}": {`.length) + injection + content.slice(langIdx + `"${lang}": {`.length);
    }
  });

  fs.writeFileSync(filePath, content, 'utf8');
}

injectClean(i18nPath);
injectClean(publicI18nPath);
console.log('Injected health keys across all 5 languages successfully!');
