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

let content = fs.readFileSync(i18nPath, 'utf8');

// Load existing I18N_TRANSLATIONS by eval
global.window = global;
global.document = { querySelectorAll: () => [], getElementById: () => null, documentElement: { setAttribute: () => {} } };
global.localStorage = { getItem: () => null, setItem: () => null };
global.navigator = { language: 'tr' };

eval(content);

const languagesMeta = {
  "tr": { name: "Türkçe", code: "TR", dir: "ltr" },
  "en": { name: "English", code: "EN", dir: "ltr" },
  "de": { name: "Deutsch", code: "DE", dir: "ltr" },
  "ru": { name: "Русский", code: "RU", dir: "ltr" },
  "ar": { name: "العربية", code: "AR", dir: "rtl" }
};

const currentTranslations = window.I18n.translations;

// Merge healthKeys into currentTranslations
Object.keys(healthKeys).forEach(lang => {
  if (!currentTranslations[lang]) currentTranslations[lang] = {};
  Object.assign(currentTranslations[lang], healthKeys[lang]);
});

// Reconstruct the full i18n.js file cleanly
const newI18nFileContent = `/**
 * Three Brothers Bayan Kuaförü (Manavgat)
 * Lüks & Butik Çok Dilli Motor (Multi-Language Engine)
 * Diller: TR (Türkçe), EN (English), DE (Deutsch), RU (Русский), AR (العربية)
 * Marka Adı: "Three Brothers" (İstisnasız tüm dillerde orijinal korunur)
 */

const I18N_LANGUAGES = ${JSON.stringify(languagesMeta, null, 2)};

const I18N_TRANSLATIONS = ${JSON.stringify(currentTranslations, null, 2)};

class I18nEngine {
  constructor() {
    this.languages = I18N_LANGUAGES;
    this.translations = I18N_TRANSLATIONS;
    this.defaultLang = 'tr';
    this.currentLang = this.getSavedLanguage() || this.detectLanguage();
  }

  detectLanguage() {
    try {
      const browserLang = (navigator.language || navigator.userLanguage || '').slice(0, 2).toLowerCase();
      return this.languages[browserLang] ? browserLang : this.defaultLang;
    } catch (e) {
      return this.defaultLang;
    }
  }

  getSavedLanguage() {
    try {
      const saved = localStorage.getItem('threebrothers_lang');
      return this.languages[saved] ? saved : null;
    } catch (e) {
      return null;
    }
  }

  setLanguage(lang) {
    if (!this.languages[lang]) return;
    this.currentLang = lang;
    try {
      localStorage.setItem('threebrothers_lang', lang);
    } catch (e) {}
    this.applyTranslations();
    this.updateHtmlLangAttributes();
    this.updateActiveButtonUI();
  }

  t(key) {
    const dict = this.translations[this.currentLang] || this.translations[this.defaultLang];
    return dict[key] || this.translations[this.defaultLang][key] || key;
  }

  updateHtmlLangAttributes() {
    const langInfo = this.languages[this.currentLang] || this.languages[this.defaultLang];
    document.documentElement.lang = this.currentLang;
    document.documentElement.dir = langInfo.dir || 'ltr';
    if (langInfo.dir === 'rtl') {
      document.documentElement.classList.add('rtl-layout');
    } else {
      document.documentElement.classList.remove('rtl-layout');
    }
  }

  updateActiveButtonUI() {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === this.currentLang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });
  }

  applyTranslations() {
    // 1. data-i18n (Text Content)
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.t(key);
      if (text) {
        el.textContent = text;
      }
    });

    // 2. data-i18n-html (HTML Content)
    const htmlElements = document.querySelectorAll('[data-i18n-html]');
    htmlElements.forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const htmlContent = this.t(key);
      if (htmlContent) {
        el.innerHTML = htmlContent;
      }
    });

    // 3. data-i18n-aria (Aria Label)
    const ariaElements = document.querySelectorAll('[data-i18n-aria]');
    ariaElements.forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      const text = this.t(key);
      if (text) {
        el.setAttribute('aria-label', text);
      }
    });

    // 4. Form Placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const text = this.t(key);
      if (text) {
        el.setAttribute('placeholder', text);
      }
    });
  }

  init() {
    this.updateHtmlLangAttributes();
    this.applyTranslations();
    this.updateActiveButtonUI();

    // Bind click events on all language switch buttons
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetLang = btn.getAttribute('data-lang');
        if (targetLang) {
          this.setLanguage(targetLang);
        }
      });
    });
  }
}

// Global Instance
window.I18n = new I18nEngine();

// Auto-run on DOM Ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => window.I18n.init());
} else {
  window.I18n.init();
}
`;

fs.writeFileSync(i18nPath, newI18nFileContent, 'utf8');
fs.writeFileSync(publicI18nPath, newI18nFileContent, 'utf8');
console.log('Regenerated clean js/i18n.js and public/js/i18n.js!');
