const fs = require('fs');
const path = require('path');

const hakkimizdaPath = path.join(__dirname, '../hakkimizda.html');
const publicHakkimizdaPath = path.join(__dirname, '../public/hakkimizda.html');
const i18nPath = path.join(__dirname, '../js/i18n.js');
const publicI18nPath = path.join(__dirname, '../public/js/i18n.js');
const inputCssPath = path.join(__dirname, '../src/input.css');

// 1. New Translations Dictionary
const aboutTranslations = {
  tr: {
    about_page_kicker: "HAKKIMIZDA",
    about_page_headline: "Üç Kardeş, Tek Tutku: Güzel Saçlar",
    about_page_p1: "2014 yılından bu yana üç kardeş olarak bayan kuaförlüğü sektöründe hizmet veriyor, yılların verdiği tecrübe ve birikimle her geçen gün kendimizi geliştirmeye devam ediyoruz.",
    about_page_p2: "Özellikle <em>sarı saç ve renk uygulamalarında</em> kendimize güveniyor, doğru teknik ve profesyonel dokunuşlarla saçın güzelliğini ortaya çıkarmayı hedefliyoruz. Bizim için güzel bir sonuç kadar, saçın sağlığını ve bütünlüğünü korumak da büyük önem taşıyor.",
    about_page_p3: "Her müşterimizin saç yapısını, ten rengini, tarzını ve beklentisini ayrı ayrı değerlendiriyor; kişiye özel uygulamalarla doğal, ışıltılı ve uzun süre keyifle kullanılabilecek sonuçlar elde etmeye özen gösteriyoruz.",
    about_quote: "“2014’ten bugüne değişmeyen tek şeyimiz; işimize olan tutkumuz ve müşterilerimizin memnuniyeti.”",
    about_page_p4: "Üç kardeş olarak çıktığımız bu yolda, tecrübemiz, enerjimiz ve özellikle <em>sarı saç konusundaki iddiamızla</em> güzelliğinize profesyonel bir dokunuş katmak için buradayız.",
    about_motto_brand: "Three Brothers Bayan Kuaförü",
    about_motto_text: "Tecrübe, tutku ve sarı saçta profesyonellik."
  },
  en: {
    about_page_kicker: "ABOUT US",
    about_page_headline: "Three Brothers, One Passion: Beautiful Hair",
    about_page_p1: "Since 2014, as three brothers, we have been serving in the women's hairdressing industry, continuously refining our craft with years of collective experience and dedication.",
    about_page_p2: "We take exceptional pride in <em>blonde hair and bespoke coloring</em>, revealing the natural radiance of your hair through master techniques and gentle care. Protecting the health and integrity of your hair is as vital to us as achieving a stunning result.",
    about_page_p3: "We evaluate each client's hair texture, skin tone, personal style, and desires individually, creating customized, glowing results that last effortlessly.",
    about_quote: "“The one thing that has never changed since 2014 is our passion for our craft and our clients' satisfaction.”",
    about_page_p4: "On this journey that began as three brothers, we are here to add a signature touch to your beauty with our experience, energy, and renowned expertise in blonde hair artistry.",
    about_motto_brand: "Three Brothers Hair Studio",
    about_motto_text: "Experience, passion, and uncompromising expertise in blonde hair."
  },
  de: {
    about_page_kicker: "ÜBER UNS",
    about_page_headline: "Drei Brüder, Eine Leidenschaft: Schönes Haar",
    about_page_p1: "Seit 2014 arbeiten wir als drei Brüder im Damencoiffeur-Handwerk und entwickeln unser Können mit jedem Tag und jahrelanger Erfahrung mit Hingabe weiter.",
    about_page_p2: "Besonders bei <em>blondem Haar und individueller Coloration</em> setzen wir höchste Maßstäbe, um die natürliche Strahlkraft Ihres Haares zu entfalten. Die Gesundheit und Unversehrtheit des Haares steht für uns an oberster Stelle.",
    about_page_p3: "Wir analysieren Haarstruktur, Hautton und persönlichen Stil jeder Kundin individuell, um maßgeschneiderte, glanzvolle und langanhaltende Ergebnisse zu erzielen.",
    about_quote: "“Das Einzige, was sich seit 2014 nie geändert hat: Unsere Leidenschaft für das Handwerk und das Vertrauen unserer Kundinnen.”",
    about_page_p4: "Auf unserem Weg als drei Brüder stehen wir Ihnen mit Erfahrung, Leidenschaft und ausgewiesener Expertise in blonder Haarkunst zur Seite.",
    about_motto_brand: "Three Brothers Damensalon",
    about_motto_text: "Erfahrung, Leidenschaft und meisterhafte Professionalität bei blondem Haar."
  },
  ru: {
    about_page_kicker: "О НАС",
    about_page_headline: "Три брата, одна страсть: Красивые волосы",
    about_page_p1: "С 2014 года мы втроем, как три брата, посвятили себя женскому парикмахерскому искусству, совершенствуя мастерство с каждым днем благодаря накопленному опыту.",
    about_page_p2: "Мы особенно уверены в создании <em>идеального блонда и авторских окрашиваний</em>, раскрывая естественную красоту волос с помощью бережных техник. Для нас сохранение здоровья и структуры волос так же важно, как и потрясающий эстетический результат.",
    about_page_p3: "Мы индивидуально оцениваем структуру волос, тон кожи, стиль и пожелания каждого гостя, создавая сияющие и стойкие образы.",
    about_quote: "“Единственное, что остается неизменным с 2014 года — это наша страсть к делу и искренняя благодарность наших клиентов.”",
    about_page_p4: "На этом пути трех братьев мы готовы подарить вашей красоте профессиональный штрих, подкрепленный опытом, энергией и безупречным мастерством в блонде.",
    about_motto_brand: "Three Brothers Салон Красоты",
    about_motto_text: "Опыт, страсть и непревзойденный профессионализм в искусстве блонда."
  },
  ar: {
    about_page_kicker: "من نحن",
    about_page_headline: "ثلاثة إخوة، شغف واحد: شعر جميل ومتألق",
    about_page_p1: "منذ عام 2014، نعمل كثلاثة إخوة في قطاع تصفيف الشعر النسائي، ونواصل تطوير مهاراتنا يوماً بعد يوم بالخبرة العميقة والتفاني المستمر.",
    about_page_p2: "نثق تماماً في إبداعنا، لا سيما في <em>الشعر الأشقر وتقنيات التلوين المخصصة</em>، ونهدف إلى إبراز الجمال الطبيعي لشعرك بلمسات احترافية. الحفاظ على صحة الشعر وسلامته أولوية مطلقة بالنسبة لنا.",
    about_page_p3: "نقوم بتقييم بنية الشعر ولون البشرة والأسلوب والتطلعات لكل عميلة بشكل فردي، ونحرص على تحقيق نتائج طبيعية ومشرقة تدوم طويلاً.",
    about_quote: "“الشيء الوحيد الذي لم يتغير منذ عام 2014 هو شغفنا بعملنا ورضا زبائننا.”",
    about_page_p4: "في هذه المسيرة التي بدأناها كإخوة ثلاثة، نحن هنا لنمنح جمالك لمسة احترافية بخبرتنا وطاقتنا وتميزنا المشهود في صبغات الشعر الأشقر.",
    about_motto_brand: "صالون Three Brothers للسيدات",
    about_motto_text: "الخبرة والشغف والاحترافية المطلقة في الشعر الأشقر."
  }
};

// 2. Update i18n file
function updateI18nEngine(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Load objects
  global.window = global;
  global.document = { querySelectorAll: () => [], getElementById: () => null, documentElement: { setAttribute: () => {}, classList: { add: () => {}, remove: () => {} } } };
  global.localStorage = { getItem: () => null, setItem: () => null };
  global.navigator = { language: 'tr' };

  eval(content);

  const trans = window.I18n.translations;
  ['tr', 'en', 'de', 'ru', 'ar'].forEach(lang => {
    if (!trans[lang]) trans[lang] = {};
    Object.assign(trans[lang], aboutTranslations[lang]);
  });

  const languagesMeta = {
    "tr": { name: "Türkçe", code: "TR", dir: "ltr" },
    "en": { name: "English", code: "EN", dir: "ltr" },
    "de": { name: "Deutsch", code: "DE", dir: "ltr" },
    "ru": { name: "Русский", code: "RU", dir: "ltr" },
    "ar": { name: "العربية", code: "AR", dir: "rtl" }
  };

  const newI18nJs = `/**
 * Three Brothers Bayan Kuaförü (Manavgat)
 * Lüks & Butik Çok Dilli Motor (Multi-Language Engine)
 * Diller: TR (Türkçe), EN (English), DE (Deutsch), RU (Русский), AR (العربية)
 * Marka Adı: "Three Brothers" (İstisnasız tüm dillerde orijinal korunur)
 */

const I18N_LANGUAGES = ${JSON.stringify(languagesMeta, null, 2)};

const I18N_TRANSLATIONS = ${JSON.stringify(trans, null, 2)};

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

  fs.writeFileSync(filePath, newI18nJs, 'utf8');
}

updateI18nEngine(i18nPath);
updateI18nEngine(publicI18nPath);
console.log('Updated i18n files with all new Hakkımızda keys!');

// 3. Update HTML for hakkimizda.html and public/hakkimizda.html
const hakkimizdaBodyHtml = `  <!-- ==========================================
       2. GÖVDE BÖLÜMÜ (2 KOLONLU EDİTORYAL DÜZEN)
  =========================================== -->
  <main class="about-main-container">
    <div class="about-grid-2">
      
      <!-- Sol: Görsel Vitrini -->
      <div class="about-image-card">
        <img src="assets/images/three-brothers-storefront.jpg" alt="Three Brothers Bayan Kuaförü Manavgat" loading="eager" />
      </div>

      <!-- Sağ: Hikaye & İstatistikler -->
      <div>
        <span class="about-kicker" data-i18n="about_page_kicker">HAKKIMIZDA</span>
        <h1 class="about-headline" data-i18n="about_page_headline">
          Üç Kardeş, Tek Tutku: Güzel Saçlar
        </h1>

        <p class="about-paragraph" data-i18n="about_page_p1">
          2014 yılından bu yana üç kardeş olarak bayan kuaförlüğü sektöründe hizmet veriyor, yılların verdiği tecrübe ve birikimle her geçen gün kendimizi geliştirmeye devam ediyoruz.
        </p>

        <p class="about-paragraph" data-i18n-html="about_page_p2">
          Özellikle <em>sarı saç ve renk uygulamalarında</em> kendimize güveniyor, doğru teknik ve profesyonel dokunuşlarla saçın güzelliğini ortaya çıkarmayı hedefliyoruz. Bizim için güzel bir sonuç kadar, saçın sağlığını ve bütünlüğünü korumak da büyük önem taşıyor.
        </p>

        <p class="about-paragraph" data-i18n="about_page_p3">
          Her müşterimizin saç yapısını, ten rengini, tarzını ve beklentisini ayrı ayrı değerlendiriyor; kişiye özel uygulamalarla doğal, ışıltılı ve uzun süre keyifle kullanılabilecek sonuçlar elde etmeye özen gösteriyoruz.
        </p>

        <!-- Vurgu Alıntısı -->
        <div class="about-quote-box">
          <p data-i18n="about_quote">“2014’ten bugüne değişmeyen tek şeyimiz; işimize olan tutkumuz ve müşterilerimizin memnuniyeti.”</p>
        </div>

        <p class="about-paragraph" data-i18n-html="about_page_p4">
          Üç kardeş olarak çıktığımız bu yolda, tecrübemiz, enerjimiz ve özellikle <em>sarı saç konusundaki iddiamızla</em> güzelliğinize profesyonel bir dokunuş katmak için buradayız.
        </p>

        <!-- İstatistik Kutuları -->
        <div class="about-stats-grid reveal-stagger-parent">
          <div class="about-stat-card reveal-stagger-item">
            <div class="about-stat-num">2014</div>
            <div class="about-stat-label" data-i18n="about_stat1_label">Yılından bu yana profesyonel deneyim</div>
          </div>
          <div class="about-stat-card reveal-stagger-item">
            <div class="about-stat-num" data-i18n="about_stat2_title">Sağlık & Tutku</div>
            <div class="about-stat-label" data-i18n="about_stat2_label">Saç dokusunu koruyan sıfır yıpranma yaklaşımı</div>
          </div>
        </div>

        <!-- İmza & Motto Kartı -->
        <div class="about-signature-card">
          <span class="about-signature-brand notranslate" translate="no" data-i18n="about_motto_brand">Three Brothers Bayan Kuaförü</span>
          <span class="about-signature-motto" data-i18n="about_motto_text">Tecrübe, tutku ve sarı saçta profesyonellik.</span>
        </div>

        <div style="margin-top: 24px;">
          <a href="https://wa.me/905526856907?text=Merhaba,%20Three%20Brothers%20hakkında%20bilgi%20ve%20randevu%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" class="btn-espresso-cta" data-i18n="about_page_cta">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#128C7E">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
            <span>İletişime Geç (WhatsApp)</span>
          </a>
        </div>
      </div>

    </div>
  </main>`;

function updateHakkimizdaHtml(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');
  const mainRegex = /<!-- ==========================================\s*2\. GÖVDE BÖLÜMÜ[\s\S]*?<\/main>/;
  if (mainRegex.test(html)) {
    html = html.replace(mainRegex, hakkimizdaBodyHtml);
  }
  fs.writeFileSync(filePath, html, 'utf8');
}

updateHakkimizdaHtml(hakkimizdaPath);
updateHakkimizdaHtml(publicHakkimizdaPath);
console.log('Updated hakkimizda.html and public/hakkimizda.html with exact user copy!');

// 4. Update src/input.css for quote & signature card styling
let css = fs.readFileSync(inputCssPath, 'utf8');

const quoteAndSignatureCss = `
.about-quote-box {
  background: rgba(197, 168, 128, 0.1);
  border-left: 4px solid var(--gold-primary);
  border-radius: 0 14px 14px 0;
  padding: 16px 20px;
  margin: 20px 0;
  font-family: var(--font-serif);
  font-size: 1.02rem;
  font-style: italic;
  color: #1A1918;
  line-height: 1.6;
  opacity: 0;
  animation: heroContentFadeUp 0.75s var(--ease-expo) 0.38s forwards;
}

.about-quote-box p {
  margin: 0;
}

.about-signature-card {
  background: #FAF8F5;
  border: 1px solid rgba(197, 168, 128, 0.35);
  border-radius: 14px;
  padding: 16px 20px;
  margin: 20px 0 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  opacity: 0;
  animation: heroContentFadeUp 0.75s var(--ease-expo) 0.42s forwards;
}

.about-signature-brand {
  font-family: var(--font-serif);
  font-size: 1.12rem;
  font-weight: 800;
  color: #1A1918;
  letter-spacing: -0.01em;
}

.about-signature-motto {
  font-size: 0.92rem;
  color: #A48358;
  font-weight: 600;
  letter-spacing: 0.02em;
}
`;

if (!css.includes('.about-quote-box')) {
  css += '\n' + quoteAndSignatureCss;
}

fs.writeFileSync(inputCssPath, css, 'utf8');
console.log('src/input.css updated with .about-quote-box and .about-signature-card styles!');
