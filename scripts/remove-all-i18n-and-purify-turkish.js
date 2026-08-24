const fs = require('fs');
const path = require('path');

console.log('=== Purging All Language Selectors & Finalizing 100% Pure Turkish Website ===');

// 1. Update src/input.css to remove language dropdown and accordion CSS
function updateCss() {
  const cssPath = path.join(__dirname, '../src/input.css');
  if (!fs.existsSync(cssPath)) return;
  let css = fs.readFileSync(cssPath, 'utf8');

  // Remove language dropdown and drawer accordion CSS
  css = css.replace(/\/\* ==========================================================================\s*(?:DRAWER ACCORDION LANGUAGE SELECTOR|DRAWER COMPACT LUXURY LANGUAGE DROPDOWN|LUXURY HEADER LANGUAGE DROPDOWN)[\s\S]*?(?=\/\* ==========================================================================|\n\/\*|$)/gi, '');
  css = css.replace(/\.lang-dropdown[\s\S]*?\}\s*/gi, '');
  css = css.replace(/\.drawer-lang[\s\S]*?\}\s*/gi, '');

  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Cleaned src/input.css');
}

// 2. Simplify js/i18n.js & public/js/i18n.js
function updateI18nJs() {
  const jsContent = `/**
 * Three Brothers Kadın Kuaförü - Manavgat
 * 100% Saf Türkçe Sistem ve Modal Kontrolcüsü
 */

// Global Outside Click and Keydown Listeners
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    if (typeof window.closeServiceModal === 'function') {
      window.closeServiceModal();
    }
  }
});

// Modal Controller for Services
const SERVICE_MODAL_DATA = {
  balyaj: {
    badge: 'UZMANLIK ALANI',
    title: 'Profesyonel Balyaj & Sarı Saç',
    duration: '3.5 – 5 Saat',
    desc: 'Saçınızın doğal dip rengine uygun mikro tutamlarla açma ve tonlama yapılarak, dip boyası derdi olmadan 6-8 ay boyunca ışıltısını koruyan kişiselleştirilmiş balyaj tasarımı.',
    products: ['Olaplex No.1 & No.2', "L'Oréal Blond Studio 9", 'Schwarzkopf Fibreplex', 'Davines Heart of Glass'],
    steps: [
      'Kişiye özel saç sağlığı, elastikiyet ve geçmiş boya analizi',
      'Bağ koruyucu Plex teknolojisi ile kontrollü mikro açma',
      'Ten rengine uygun soğuk/bej/sıcak ışıltılı cila tonlaması',
      'Yoğun aminoasit saç maskesi ve ipeksi fön şekillendirme'
    ],
    waText: 'Merhaba,%20Balyaj%20hizmetiniz%20hakkında%20bilgi%20ve%20randevu%20almak%20istiyorum.'
  },
  blonde: {
    badge: 'ÖZEL UZMANLIK',
    title: 'Blonde & İpeksi Renk Tasarımı',
    duration: '4 – 6 Saat',
    desc: 'Bebek sarısı, bej blonde, platin ve buz sarısı tonlarında saçın elastikiyetini koruyan lüks sarışınlık sanatı.',
    products: ['Olaplex Bond Multiplier', "L'Oréal Metal Detox", 'Kérastase Blond Absolu', 'Schwarzkopf Blondme'],
    steps: [
      'Detaylı saç bazı tespiti ve mineral arındırma (Metal Detox)',
      'Aşamalı düşük volümlü açma ve bağ onarımı',
      'Kişiye özel mikro pigmentli sarışınlık cilası',
      'Parlaklık mühürleyici asidik bakım ve şekillendirme'
    ],
    waText: 'Merhaba,%20Blonde%20hizmetiniz%20hakkında%20bilgi%20ve%20randevu%20almak%20istiyorum.'
  },
  kaynak: {
    badge: 'KONFOR & HACİM',
    title: 'Mikro Kapsül Kaynak',
    duration: '2.5 – 4 Saat',
    desc: '%100 doğal el değmemiş saçlar ve nano keratin kapsüllerle uygulanan, dışarıdan kesinlikle fark edilmeyen hafif ve konforlu saç uzatma yöntemi.',
    products: ['%100 Doğal Ham Saç', 'İtalyan Nano Keratin Kapsül', 'Özel Çıkarma Losyonu'],
    steps: [
      'Mevcut saç rengi ve dokusuna %100 uyumlu ham saç seçimi',
      'Saç derisine baskı yapmayan mikro kapsül yerleşimi',
      'Kaynaklı saçlara özel harman kesim ve kat tasarımı',
      'Evde bakım ve tarama eğitimi'
    ],
    waText: 'Merhaba,%20Mikro%20Kapsül%20Kaynak%20hakkında%20bilgi%20ve%20randevu%20almak%20istiyorum.'
  },
  ombre: {
    badge: 'ZARİF GEÇİŞLER',
    title: 'Ombre & Işıltı',
    duration: '3 – 4.5 Saat',
    desc: 'Koyu diplerden uçlara doğru yumuşak ve zarif renk geçişleri. Doğal uzama sürecinde çizgi yapmaz.',
    products: ['Olaplex', 'Wella Freelights', 'Redken Shades EQ'],
    steps: [
      'Doğal saç rengine uygun geçiş seviyesi belirleme',
      'Serbest el (Freehand) gölgeleme ve degrade açma',
      'Geçiş çizgilerini yok eden kademeli tonlama',
      'Nem terapisi ve dalgalı fön bitişi'
    ],
    waText: 'Merhaba,%20Ombre%20hizmetiniz%20hakkında%20bilgi%20ve%20randevu%20almak%20istiyorum.'
  },
  boyama: {
    badge: 'KİŞİYE ÖZEL',
    title: 'Kişiye Özel Saç Boyama & Tonlama',
    duration: '2 – 3 Saat',
    desc: 'Amonyaksız ve organik yağ içerikli profesyonel boyalarla beyaz kapatma, parlaklık kazandırma ve zengin yansımalar.',
    products: ["L'Oréal Inoa", 'Wella Illumina Color', 'Davines Mask with Vibrachrom'],
    steps: [
      'Cilt alt tonu ve göz rengine uygun renk danışmanlığı',
      'Saç derisi koruyucu serum uygulaması',
      'Eşit ve derinlemesine renk pigmentasyonu',
      'Renk sabitleyici pH dengeleyici bakım şampuanı'
    ],
    waText: 'Merhaba,%20Saç%20Boyama%20hizmetiniz%20hakkında%20bilgi%20ve%20randevu%20almak%20istiyorum.'
  },
  kesim: {
    badge: 'FORM & HAREKET',
    title: 'Kişiye Özel Saç Kesimi',
    duration: '45 – 60 Dk',
    desc: 'Yüz hatlarına, saçın doğal düşüşüne ve yaşam tarzınıza uygun, evde kolay şekillenen formda modern saç kesimi.',
    products: ['Mizutani Profesyonel Makaslar', 'Kérastase Şekillendirici Seri', 'Davines Doku Spreyi'],
    steps: [
      'Yüz şekli, kafa anatomisi ve saç yoğunluğu analizi',
      'Islak ve kuru teknikle kat ve doku oluşturma',
      'Kişiselleştirilmiş saç ucu hafifletme',
      'Hacim veren fön ve günlük şekillendirme ipuçları'
    ],
    waText: 'Merhaba,%20Saç%20Kesimi%20hakkında%20bilgi%20ve%20randevu%20almak%20istiyorum.'
  }
};

window.openServiceModal = function(serviceKey) {
  const data = SERVICE_MODAL_DATA[serviceKey];
  if (!data) return;

  const modalBackdrop = document.getElementById('serviceDetailBackdrop');
  if (!modalBackdrop) return;

  const titleEl = document.getElementById('sheetModalTitle');
  const badgeEl = document.getElementById('sheetModalBadge');
  const durationEl = document.getElementById('sheetModalDuration');
  const descEl = document.getElementById('sheetModalDesc');
  const productsContainer = document.getElementById('sheetModalProducts');
  const stepsContainer = document.getElementById('sheetModalSteps');
  const waBtn = document.getElementById('sheetModalWaBtn');

  if (titleEl) titleEl.textContent = data.title;
  if (badgeEl) badgeEl.textContent = data.badge;
  if (durationEl) durationEl.textContent = data.duration;
  if (descEl) descEl.textContent = data.desc;

  if (productsContainer) {
    productsContainer.innerHTML = '';
    data.products.forEach(p => {
      const tag = document.createElement('span');
      tag.className = 'sheet-product-tag';
      tag.textContent = p;
      productsContainer.appendChild(tag);
    });
  }

  if (stepsContainer) {
    stepsContainer.innerHTML = '';
    data.steps.forEach((step, idx) => {
      const li = document.createElement('li');
      li.className = 'sheet-step-item';
      li.innerHTML = \`<span class="sheet-step-number">\${idx + 1}</span><span>\${step}</span>\`;
      stepsContainer.appendChild(li);
    });
  }

  if (waBtn) {
    const waBase = 'https://wa.me/905526856907?text=';
    waBtn.href = waBase + data.waText;
  }

  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeServiceModal = function() {
  const modalBackdrop = document.getElementById('serviceDetailBackdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('active');
  }
  document.body.style.overflow = '';
};

// Safe dummy shims for any legacy handlers
window.toggleLangDropdown = function() {};
window.selectLanguage = function() {};
window.toggleDrawerLangAccordion = function() {};
`;

  fs.writeFileSync(path.join(__dirname, '../js/i18n.js'), jsContent, 'utf8');
  fs.writeFileSync(path.join(__dirname, '../public/js/i18n.js'), jsContent, 'utf8');
  console.log('Updated js/i18n.js and public/js/i18n.js');
}

// 3. Update all HTML files
function updateHtmlFiles() {
  const htmlFiles = [
    'index.html',
    'hakkimizda.html',
    'balyaj.html',
    'blonde.html',
    'kaynak.html',
    'ombre.html',
    'renklendirme.html',
    'public/index.html',
    'public/hakkimizda.html',
    'public/balyaj.html',
    'public/blonde.html',
    'public/kaynak.html',
    'public/ombre.html',
    'public/renklendirme.html'
  ];

  const pureTurkishDrawerHtml = `  <aside id="side-drawer" class="side-drawer" aria-label="Gezinme Menüsü">
    <div class="drawer-header">
      <div class="drawer-brand">
        <h3 class="notranslate" translate="no">Three Brothers</h3>
        <span>KADIN KUAFÖRÜ · MANAVGAT</span>
      </div>
      <button class="drawer-close-btn" onclick="toggleMenu()" aria-label="Menüyü Kapat" type="button" style="min-width: 44px; min-height: 44px;">
        ✕
      </button>
    </div>

    <nav class="drawer-nav">
      <!-- Ana Sayfa Linkleri -->
      <ul class="drawer-main-links">
        <li><a href="index.html#hero" onclick="toggleMenu()"><span>Ana Sayfa</span> <span class="arrow">&rarr;</span></a></li>
        <li><a href="hakkimizda.html"><span>Hakkımızda</span> <span class="arrow">&rarr;</span></a></li>
        <li><a href="index.html#iletisim" onclick="toggleMenu()"><span>İletişim</span> <span class="arrow">&rarr;</span></a></li>
      </ul>

      <!-- Hizmetler Bölümü -->
      <div class="drawer-services-section">
        <span class="drawer-section-tag">HİZMETLERİMİZ</span>
        <ul class="drawer-service-links-list">
          <li>
            <a href="balyaj.html" style="min-height: 44px;">
              <span class="bullet">•</span>
              <span class="service-name">Profesyonel Balyaj</span>
              <span class="service-arrow">&rarr;</span>
            </a>
          </li>
          <li>
            <a href="blonde.html" style="min-height: 44px;">
              <span class="bullet">•</span>
              <span class="service-name">Blonde & İpeksi Renk Tasarımı</span>
              <span class="service-arrow">&rarr;</span>
            </a>
          </li>
          <li>
            <a href="kaynak.html" style="min-height: 44px;">
              <span class="bullet">•</span>
              <span class="service-name">Mikro Kapsül Kaynak</span>
              <span class="service-arrow">&rarr;</span>
            </a>
          </li>
          <li>
            <a href="ombre.html" style="min-height: 44px;">
              <span class="bullet">•</span>
              <span class="service-name">Ombre & Işıltı</span>
              <span class="service-arrow">&rarr;</span>
            </a>
          </li>
          <li>
            <a href="renklendirme.html" style="min-height: 44px;">
              <span class="bullet">•</span>
              <span class="service-name">Kişiye Özel Saç Boyama</span>
              <span class="service-arrow">&rarr;</span>
            </a>
          </li>
          <li>
            <a href="renklendirme.html#kesim" style="min-height: 44px;">
              <span class="bullet">•</span>
              <span class="service-name">Kişiye Özel Saç Kesimi</span>
              <span class="service-arrow">&rarr;</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- Alt İletişim & Aksiyon Kartı -->
      <div class="drawer-footer-info">
        <div class="drawer-contact-line">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          <span>0552 685 69 07</span>
        </div>
        <div class="drawer-hours-line">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          <span>Salı – Pazar: 08:30 – 20:30 (Pazartesi Kapalı)</span>
        </div>
        
        <div class="drawer-action-dual-row">
          <a href="tel:+905526856907" class="drawer-action-btn btn-call" style="min-height: 44px;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/></svg>
            <span>Hemen Ara</span>
          </a>
          <a href="https://maps.google.com/?cid=16986332279537405342" target="_blank" rel="noopener noreferrer" class="drawer-action-btn btn-map" style="min-height: 44px;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>Yol Tarifi Al</span>
          </a>
        </div>

        <a href="https://wa.me/905526856907?text=Merhaba,%20Three%20Brothers%20salonunuzdan%20randevu%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" class="drawer-wa-full-btn" style="min-height: 44px;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
          </svg>
          <span>Randevu Al</span>
        </a>
      </div>
    </nav>
  </aside>`;

  htmlFiles.forEach(file => {
    const fullPath = path.join(__dirname, '..', file);
    if (!fs.existsSync(fullPath)) return;
    let html = fs.readFileSync(fullPath, 'utf8');

    // 1. Remove lang dropdown in header
    html = html.replace(/<div class="lang-dropdown-container"[\s\S]*?<\/div>\s*<\/div>/gi, '');

    // 2. Replace entire aside#side-drawer
    html = html.replace(/<aside id="side-drawer"[\s\S]*?<\/aside>/gi, pureTurkishDrawerHtml);

    // 3. Clean any data-i18n attributes
    html = html.replace(/\s*data-i18n(?:-html|-aria|-placeholder)?="[^"]*"/g, '');

    // 4. Update Schema Opening hours if present
    html = html.replace(/"dayOfWeek":\s*\["Monday",\s*"Tuesday",\s*"Wednesday",\s*"Thursday",\s*"Friday",\s*"Saturday",\s*"Sunday"\],\s*"opens":\s*"09:00",\s*"closes":\s*"20:00"/g,
      '"dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "08:30", "closes": "20:30"');

    fs.writeFileSync(fullPath, html, 'utf8');
    console.log(`Updated ${file}`);
  });
}

updateCss();
updateI18nJs();
updateHtmlFiles();
console.log('=== All files successfully converted to 100% pure Turkish! ===');
