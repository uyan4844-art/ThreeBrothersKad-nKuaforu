const fs = require('fs');
const path = require('path');

let i18nContent = fs.readFileSync(path.join(__dirname, '../js/i18n.js'), 'utf8');

// Replace all @threebrotherss with @threebrotherrrs
i18nContent = i18nContent.replace(/@threebrotherss/g, '@threebrotherrrs');

// Extract current dictionaries using Function with mock window and document
const mockDoc = {
  readyState: 'complete',
  documentElement: { lang: '', dir: '', classList: { add() {}, remove() {} } },
  querySelectorAll: () => []
};
const fn = new Function('window', 'document', i18nContent + '\nreturn { I18N_LANGUAGES, I18N_TRANSLATIONS };');
const { I18N_LANGUAGES, I18N_TRANSLATIONS } = fn({}, mockDoc);

const updates = {
  tr: {
    insta_username: "@threebrotherrrs",
    nav_home: "Ana Sayfa",
    nav_story: "Hakkımızda",
    nav_services: "Hizmetlerimiz",
    nav_process: "Süreç",
    nav_gallery: "Galeri",
    nav_reviews: "Yorumlar",
    nav_faq: "SSS",
    nav_contact: "İletişim",
    nav_book: "Randevu Al",
    nav_call: "Hemen Ara",
    faq_kicker: "MERAK EDİLENLER",
    faq_title: "Sıkça Sorulan Sorular",
    faq_desc: "Three Brothers salonumuzdaki hizmetler, saç analizi ve randevu süreci hakkında en çok sorulan sorular.",
    faq1_q: "Balyaj ve Sombre renklendirme işlemleri ne kadar sürer?",
    faq1_a: "Saçınızın uzunluğuna, yoğunluğuna ve mevcut tonuna bağlı olarak işlem süresi ortalama 3 ile 5 saat arasında değişmektedir. Randevu öncesinde saç analizi yapılarak net süre paylaşılır.",
    faq2_q: "Açma ve sarışınlık işlemlerinde saçım yıpranır mı?",
    faq2_a: "Biyolojik saç sağlığı protokolümüz kapsamında, açma işlemlerinde bağ koruyucu ve onarıcı profesyonel ürünler kullanıyoruz. Saçınızın sağlığını riske atacak hiçbir agresif işlemi onayınız olmadan uygulamıyoruz.",
    faq3_q: "Mikro kapsül kaynak ne kadar süre kullanılabilir?",
    faq3_a: "Doğru bakım ile mikro kapsül kaynaklarımız 2.5 - 4 ay boyunca konforla kullanılabilir. Süre sonunda saçınıza zarar vermeden çıkarılır ve yeniden takılabilir.",
    faq4_q: "Randevuya gelmeden önce saçımı yıkamalı mıyım?",
    faq4_a: "Özellikle açma ve renklendirme işlemlerinde saç derinizin doğal yağ tabakasının korunması önerilir. Bu nedenle randevu günü saçınızı yıkamadan gelmeniz tavsiye edilir.",
    faq5_q: "İşlem öncesinde saç analizi ve ön görüşme yapıyor musunuz?",
    faq5_a: "Evet. Misafirlerimizin saç yapısını, geçmiş boya/açma geçmişini ve saçın elastikiyetini analiz etmeden hiçbir ağır işleme başlamıyoruz. Saç sağlığını tehlikeye atacak bir durum varsa dürüstçe alternatif çözümler öneriyoruz."
  },
  en: {
    insta_username: "@threebrotherrrs",
    nav_home: "Home",
    nav_story: "About Us",
    nav_services: "Services",
    nav_process: "Process",
    nav_gallery: "Gallery",
    nav_reviews: "Reviews",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    nav_book: "Book Appointment",
    nav_call: "Call Now",
    faq_kicker: "FREQUENTLY ASKED",
    faq_title: "Frequently Asked Questions",
    faq_desc: "Most frequently asked questions regarding our salon services, hair analysis, and appointment process.",
    faq1_q: "How long do Balayage and Sombre coloring treatments take?",
    faq1_a: "Depending on hair length, thickness, and base color, the process typically takes between 3 to 5 hours. An accurate duration is determined during your pre-treatment consultation.",
    faq2_q: "Will my hair get damaged during lightening and blonde treatments?",
    faq2_a: "Under our biological hair health protocol, we utilize bond-protecting and restorative professional formulations during all lightening services. We never perform aggressive steps without your explicit consent.",
    faq3_q: "How long can micro capsule hair extensions be worn?",
    faq3_a: "With proper care, our micro capsule extensions offer comfortable wear for 2.5 to 4 months. They can then be safely removed and reapplied without damaging your natural hair.",
    faq4_q: "Should I wash my hair before coming to my appointment?",
    faq4_a: "Especially for lightening and coloring treatments, preserving your scalp's natural lipid barrier is recommended. We advise coming in with unwashed hair on the day of your service.",
    faq5_q: "Do you perform a consultation and hair analysis prior to treatments?",
    faq5_a: "Yes. We never initiate chemical services without thoroughly evaluating your hair's history, porosity, and elasticity. If hair health is at risk, we transparently suggest restorative alternatives."
  },
  de: {
    insta_username: "@threebrotherrrs",
    nav_home: "Startseite",
    nav_story: "Über Uns",
    nav_services: "Leistungen",
    nav_process: "Ablauf",
    nav_gallery: "Galerie",
    nav_reviews: "Bewertungen",
    nav_faq: "FAQ",
    nav_contact: "Kontakt",
    nav_book: "Termin Buchen",
    nav_call: "Jetzt Anrufen",
    faq_kicker: "HÄUFIGE FRAGEN",
    faq_title: "Häufig Gestellte Fragen",
    faq_desc: "Die wichtigsten Fragen zu unseren Dienstleistungen, Haaranalyse und Terminvereinbarungen.",
    faq1_q: "Wie lange dauern Balayage- und Sombre-Färbungen?",
    faq1_a: "Je nach Haarlänge, Dichte und Ausgangston dauert die Behandlung durchschnittlich 3 bis 5 Stunden. Die genaue Dauer wird vorab bei der Haaranalyse festgelegt.",
    faq2_q: "Werden meine Haare beim Aufhellen und Blondieren strapaziert?",
    faq2_a: "Im Rahmen unseres biologischen Haargesundheits-Protokolls verwenden wir bindungsstärkende und reparierende Formeln. Wir führen keine aggressiven Behandlungen ohne Ihre ausdrückliche Zustimmung durch.",
    faq3_q: "Wie lange halten Mikrokapsel-Haarverlängerungen?",
    faq3_a: "Bei richtiger Pflege können unsere Mikrokapsel-Extensions 2,5 bis 4 Monate lang getragen werden. Danach werden sie schonend entfernt und können wieder eingesetzt werden.",
    faq4_q: "Sollte ich meine Haare vor dem Termin waschen?",
    faq4_a: "Besonders bei Aufhellungen und Färbungen ist es ratsam, den natürlichen Säureschutzmantel der Kopfhaut zu schonen. Daher empfehlen wir, die Haare am Termintag ungewaschen zu lassen.",
    faq5_q: "Führen Sie vor der Behandlung eine Haaranalyse und Beratung durch?",
    faq5_a: "Ja. Wir beginnen keine chemischen Behandlungen, ohne zuvor die Elastizität, Struktur und Vorgeschichte Ihres Haares zu analysieren. Bei Risiken schlagen wir ehrlich schonende Alternativen vor."
  },
  ru: {
    insta_username: "@threebrotherrrs",
    nav_home: "Главная",
    nav_story: "О Нас",
    nav_services: "Услуги",
    nav_process: "Процесс",
    nav_gallery: "Галерея",
    nav_reviews: "Отзывы",
    nav_faq: "Вопросы",
    nav_contact: "Контакты",
    nav_book: "Записаться",
    nav_call: "Позвонить",
    faq_kicker: "ЧАСТЫЕ ВОПРОСЫ",
    faq_title: "Часто Задаваемые Вопросы",
    faq_desc: "Самые частые вопросы о наших услугах, анализе волос и процессе записи.",
    faq1_q: "Сколько времени занимают процедуры балаяж и сомбре?",
    faq1_a: "В зависимости от длины, густоты и текущего оттенка волос процедура занимает в среднем от 3 до 5 часов. Точное время определяется на предварительной консультации.",
    faq2_q: "Повредятся ли волосы при осветлении в блонд?",
    faq2_a: "В рамках нашего протокола биологического здоровья волос мы используем профессиональные продукты с защитой дисульфидных связей. Мы никогда не применяем агрессивные методы без вашего согласия.",
    faq3_q: "Как долго служат микрокапсульные наращивания волос?",
    faq3_a: "При правильном уходе микрокапсульные пряди комфортно носятся от 2,5 до 4 месяцев. По истечении этого срока они бережно снимаются и могут быть установлены повторно.",
    faq4_q: "Нужно ли мыть голову перед визитом в салон?",
    faq4_a: "При осветлении и окрашивании рекомендуется сохранять естественный липидный барьер кожи головы. Поэтому мы советуем не мыть волосы непосредственно перед процедурой.",
    faq5_q: "Проводите ли вы консультацию и диагностику волос перед процедурой?",
    faq5_a: "Да. Мы никогда не начинаем окрашивание без оценки истории, пористости и эластичности волос. При риске повреждения мы честно предлагаем бережные альтернативы."
  },
  ar: {
    insta_username: "@threebrotherrrs",
    nav_home: "الرئيسية",
    nav_story: "من نحن",
    nav_services: "خدماتنا",
    nav_process: "خطوات العمل",
    nav_gallery: "المعرض",
    nav_reviews: "التقييمات",
    nav_faq: "الأسئلة الشائعة",
    nav_contact: "اتصل بنا",
    nav_book: "حجز موعد",
    nav_call: "اتصل الآن",
    faq_kicker: "الأسئلة الشائعة",
    faq_title: "الأسئلة الأكثر شيوعاً",
    faq_desc: "أبرز الأسئلة الشائعة حول خدماتنا، تحليل صحة الشعر، وإجراءات حجز المواعيد.",
    faq1_q: "كم يستغرق وقت تطبيق البالياج والسومبري؟",
    faq1_a: "يستغرق العمل ما بين 3 إلى 5 ساعات في المتوسط، وذلك اعتماداً على طول الشعر وكثافته ولونه الحالي. يتم تحديد الوقت بدقة خلال تحليل الشعر المسبق.",
    faq2_q: "هل سيتضرر شعري أثناء عمليات التفتيح وصبغات الأشقر؟",
    faq2_a: "وفقاً لبروتوكول صحة الشعر البيولوجية المعتمد لدينا، نستخدم منتجات احترافية لحماية وترميم روابط الشعر. ولا نطبق أي إجراء قاسٍ قد يعرض شعركِ للخطر دون موافقتك.",
    faq3_q: "كم تدوم وصلات الشعر بتقنية الكبسولات الدقيقة (ميكرو كابسول)؟",
    faq3_a: "مع العناية المناسبة، تدوم وصلات الميكرو كابسول من 2.5 إلى 4 أشهر براحة تامة. وعند انتهاء المدة يتم فكها بأمان وإعادة تركيبها دون أي ضرر لشعرك الطبيعي.",
    faq4_q: "هل يجب عليّ غسل شعري قبل القدوم إلى موعد الصالون؟",
    faq4_a: "يوصى بالحفاظ على طبقة الزيوت الطبيعية لفروة الرأس خاصة قبل عمليات التفتيح والتلوين. لذلك يُفضل القدوم دون غسل الشعر في يوم الموعد.",
    faq5_q: "هل تقومون بتحليل الشعر واستشارة مسبقة قبل البدء؟",
    faq5_a: "نعم بكل تأكيد. لا نبدأ بأي معالجة كيميائية دون تحليل بنية الشعر ومرونته وتاريخ الصبغات السابقة. وفي حال وجود أي خطر على صحة الشعر, نقترح بصدق حلولاً بديلة ومغذية."
  }
};

for (const lang of ['tr', 'en', 'de', 'ru', 'ar']) {
  if (I18N_TRANSLATIONS[lang]) {
    Object.assign(I18N_TRANSLATIONS[lang], updates[lang]);
    I18N_TRANSLATIONS[lang].insta_username = "@threebrotherrrs";
  }
}

const newFileContent = `/**
 * Three Brothers Bayan Kuaförü (Manavgat)
 * Lüks & Butik Çok Dilli Motor (Multi-Language Engine)
 * Diller: TR (Türkçe), EN (English), DE (Deutsch), RU (Русский), AR (العربية)
 * Marka Adı: "Three Brothers" (İstisnasız tüm dillerde orijinal korunur)
 */

const I18N_LANGUAGES = ${JSON.stringify(I18N_LANGUAGES, null, 2)};

const I18N_TRANSLATIONS = ${JSON.stringify(I18N_TRANSLATIONS, null, 2)};

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

fs.writeFileSync(path.join(__dirname, '../js/i18n.js'), newFileContent, 'utf8');
fs.mkdirSync(path.join(__dirname, '../public/js'), { recursive: true });
fs.writeFileSync(path.join(__dirname, '../public/js/i18n.js'), newFileContent, 'utf8');
console.log('Successfully updated js/i18n.js and public/js/i18n.js!');
