const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
const publicIndexPath = path.join(__dirname, '../public/index.html');
const i18nPath = path.join(__dirname, '../js/i18n.js');
const publicI18nPath = path.join(__dirname, '../public/js/i18n.js');
const inputCssPath = path.join(__dirname, '../src/input.css');

// 1. Update i18n dictionaries in js/i18n.js & public/js/i18n.js
const i18nUpdates = {
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

function updateI18nFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  Object.keys(i18nUpdates).forEach(lang => {
    const dictObj = i18nUpdates[lang];
    // Find the language block
    const langKeyPattern = new RegExp(`("${lang}"|${lang}):\\s*\\{([^}]+)\\}`, 's');
    const match = content.match(langKeyPattern);
    if (match) {
      let block = match[2];
      Object.keys(dictObj).forEach(k => {
        const val = dictObj[k].replace(/"/g, '\\"');
        const keyRegex = new RegExp(`"${k}":\\s*"[^"]*",?`, 'g');
        if (keyRegex.test(block)) {
          block = block.replace(keyRegex, `"${k}": "${val}",`);
        } else {
          block = `\n    "${k}": "${val}",` + block;
        }
      });
      content = content.replace(match[0], `"${lang}": {${block}}`);
    }
  });

  fs.writeFileSync(filePath, content, 'utf8');
}

updateI18nFile(i18nPath);
updateI18nFile(publicI18nPath);
console.log('Updated i18n files with distinct health & about keys!');

// 2. Update HTML in index.html and public/index.html
function updateIndexHtml(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');

  const oldFelsefeBlock = /<!-- ==========================================\s*3\. ÖNCE SAĞLIK, SONRA GÜZELLİK[\s\S]*?<\/section>/;

  const newFelsefeHtml = `<!-- ==========================================
       3. ÖNCE SAĞLIK, SONRA GÜZELLİK (KOYU KONTRAST BÖLÜM)
  =========================================== -->
  <section id="felsefe" class="boutique-section section-felsefe">
    <div class="section-container">
      <div class="felsefe-grid reveal-on-scroll">

        <!-- Sol: Gerçek Salon Fotoğrafı -->
        <div>
          <div class="felsefe-visual-frame">
            <img src="./images/story-salon.webp" alt="Three Brothers Manavgat Bayan Kuaförü" loading="lazy" />
          </div>
        </div>

        <!-- Sağ: Koyu Zemin Üzeri Editoryal Metinler & Aksiyon Butonları -->
        <div>
          <span class="felsefe-kicker" data-i18n="health_kicker">ÖNCE SAĞLIK, SONRA GÜZELLİK</span>
          <h2 class="felsefe-title font-serif-editorial" data-i18n="health_title">
            Biyolojik Saç Sağlığı & Şeffaf Teşhis Standartları
          </h2>
          <p class="felsefe-desc font-sans-luxury" data-i18n="health_p1">
            Three Brothers stüdyomuzda renklendirme ve açma işlemlerine geçmeden önce saç telinin elastikiyetini, nem dengesini ve geçmiş kimyasal geçmişini mikroskobik titizlikle değerlendiriyoruz. Saçın biyolojik yapısını riske atacak hiçbir agresif işleme onay vermiyoruz.
          </p>
          <p class="felsefe-desc font-sans-luxury" data-i18n="health_p2">
            Dürüst teşhis ve bağ güçlendirici koruyucu protokollerle, saçınızı yıpratmadan sürdürülebilir bir parlaklık ve sağlıklı uzayan saçlar hedefliyoruz.
          </p>
          
          <div class="felsefe-actions">
            <a href="hakkimizda.html" class="btn-felsefe-about">
              <span data-i18n="felsefe_about_btn">Hakkımızda & Hikayemiz</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <a href="https://wa.me/905526856907?text=Merhaba,%20Three%20Brothers%20salonunuzdan%20ön%20görüşme%20ve%20saç%20analizi%20için%20randevu%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" class="felsefe-link">
              <span data-i18n="health_btn">Ön Görüşme ve Analiz Randevusu</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>`;

  if (oldFelsefeBlock.test(html)) {
    html = html.replace(oldFelsefeBlock, newFelsefeHtml);
  }

  fs.writeFileSync(filePath, html, 'utf8');
}

updateIndexHtml(indexPath);
updateIndexHtml(publicIndexPath);
console.log('Updated index.html with distinct philosophy text & Hakkımızda button!');

// 3. Update src/input.css
let css = fs.readFileSync(inputCssPath, 'utf8');

const felsefeBtnCss = `
.felsefe-actions {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 26px;
}

.btn-felsefe-about {
  background: #C5A880;
  color: #141210 !important;
  font-weight: 700;
  font-size: 13.5px;
  letter-spacing: 0.03em;
  padding: 12px 24px;
  border-radius: 999px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 8px 24px rgba(197, 168, 128, 0.25);
  transition: all 0.35s var(--ease-expo);
  cursor: pointer;
}

.btn-felsefe-about:hover {
  background: #EBE0D2;
  color: #141210 !important;
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(197, 168, 128, 0.4);
}

.btn-felsefe-about svg {
  transition: transform 0.25s var(--ease-expo);
}

.btn-felsefe-about:hover svg {
  transform: translateX(4px);
}
`;

if (!css.includes('.btn-felsefe-about')) {
  css = css.replace('.felsefe-link {', felsefeBtnCss + '\n.felsefe-link {');
}

// Mobile styles for felsefe actions
const mobileFelsefeActionsCss = `
  .felsefe-actions {
    flex-direction: column !important;
    width: 100% !important;
    gap: 14px !important;
    align-items: stretch !important;
  }

  .btn-felsefe-about {
    width: 100% !important;
    justify-content: center !important;
    text-align: center !important;
  }
`;

if (!css.includes('.felsefe-actions {') || !css.includes('align-items: stretch !important;')) {
  css = css.replace('/* 6. Neden Biz 2x2 Metric Grid */', mobileFelsefeActionsCss + '\n  /* 6. Neden Biz 2x2 Metric Grid */');
}

fs.writeFileSync(inputCssPath, css, 'utf8');
console.log('src/input.css updated with .btn-felsefe-about and .felsefe-actions styles!');
