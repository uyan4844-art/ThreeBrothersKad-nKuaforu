const fs = require('fs');

// ==========================================
// 1. UPDATE js/i18n.js
// ==========================================
let i18n = fs.readFileSync('js/i18n.js', 'utf8');

const additions = {
  tr: {
    standards_kicker: "HİZMET STANDARTLARIMIZ",
    standards_title: "Neden Three Brothers?",
    nav_home: "Ana Sayfa",
    footer_nav_title: "Hızlı Menü",
    footer_spec_title: "Uzmanlıklarımız",
    footer_contact_title: "İletişim & Lokasyon",
    footer_hours: "Salı – Pazar: 08:30 – 20:30",
    footer_address: "Bahçelievler Mah. Demokrasi Blv. No: 8Z1, Manavgat / Antalya"
  },
  en: {
    standards_kicker: "SERVICE STANDARDS",
    standards_title: "Why Three Brothers?",
    nav_home: "Home",
    footer_nav_title: "Quick Navigation",
    footer_spec_title: "Our Expertise",
    footer_contact_title: "Contact & Location",
    footer_hours: "Tue – Sun: 08:30 – 20:30",
    footer_address: "Bahcelievler Mah. Demokrasi Blv. No: 8Z1, Manavgat / Antalya"
  },
  de: {
    standards_kicker: "SERVICE-STANDARDS",
    standards_title: "Warum Three Brothers?",
    nav_home: "Startseite",
    footer_nav_title: "Schnellnavigation",
    footer_spec_title: "Unsere Expertise",
    footer_contact_title: "Kontakt & Standort",
    footer_hours: "Di – So: 08:30 – 20:30",
    footer_address: "Bahcelievler Mah. Demokrasi Blv. No: 8Z1, Manavgat / Antalya"
  },
  ru: {
    standards_kicker: "СТАНДАРТЫ СЕРВИСА",
    standards_title: "Почему Three Brothers?",
    nav_home: "Главная",
    footer_nav_title: "Навигация",
    footer_spec_title: "Специализация",
    footer_contact_title: "Контакты и адрес",
    footer_hours: "Вт – Вс: 08:30 – 20:30",
    footer_address: "Бахчелиэвлер, бул. Демокраси 8Z1, Манавгат / Анталья"
  },
  ar: {
    standards_kicker: "معايير الخدمة",
    standards_title: "لماذا صالون Three Brothers؟",
    nav_home: "الرئيسية",
    footer_nav_title: "التنقل السريع",
    footer_spec_title: "تخصصاتنا",
    footer_contact_title: "التواصل والموقع",
    footer_hours: "الثلاثاء – الأحد: 08:30 – 20:30",
    footer_address: "حي باهتشيلي إيفلر، شارع الديمقراطية 8Z1، ماناavgat"
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
console.log('js/i18n.js updated with new keys');

// ==========================================
// 2. UPDATE index.html
// ==========================================
let html = fs.readFileSync('index.html', 'utf8');

// 1. POLISH: Pillars Section Header & 01-04 Index Numbers
const oldPillarsRegex = /<!-- Core 4 Pillars Grid -->[\s\S]*?<section id="reels"/;
const newPillarsHTML = `<!-- Pillars Section Header -->
      <div class="section-header-center reveal-up" style="margin-top: 80px; margin-bottom: 40px;">
        <span class="section-kicker" data-i18n="standards_kicker">HİZMET STANDARTLARIMIZ</span>
        <h3 class="section-title" style="font-size: clamp(28px, 3.2vw, 42px);" data-i18n="standards_title">Neden Three Brothers?</h3>
      </div>

      <!-- Core 4 Pillars Grid with 01-04 Indices -->
      <div class="pillars-grid">

        <div class="pillar-card reveal-stagger-item">
          <div class="pillar-top-row">
            <div class="pillar-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <span class="pillar-number">01</span>
          </div>
          <h3 data-i18n="pillar1_title">Doğru Teknik & Sıfır Yıpranma</h3>
          <p data-i18n="pillar1_desc">Saçın bağ dokusunu güçlendiren patentli formüller ve kontrollü açma işlemi.</p>
        </div>

        <div class="pillar-card reveal-stagger-item">
          <div class="pillar-top-row">
            <div class="pillar-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </div>
            <span class="pillar-number">02</span>
          </div>
          <h3 data-i18n="pillar2_title">Kişiye Özel Renk Analizi</h3>
          <p data-i18n="pillar2_desc">Ten renginiz, göz tonunuz ve tarzınıza en uygun estetik renk uyumu.</p>
        </div>

        <div class="pillar-card reveal-stagger-item">
          <div class="pillar-top-row">
            <div class="pillar-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <span class="pillar-number">03</span>
          </div>
          <h3 data-i18n="pillar3_title">Dürüst & Şeffaf İletişim</h3>
          <p data-i18n="pillar3_desc">Saçınızın ihtiyacını dinler, riskli hiçbir işleme onay vermeden en sağlıklı alternatifi sunarız.</p>
        </div>

        <div class="pillar-card reveal-stagger-item">
          <div class="pillar-top-row">
            <div class="pillar-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span class="pillar-number">04</span>
          </div>
          <h3 data-i18n="pillar4_title">Tavizsiz Hijyen Standardı</h3>
          <p data-i18n="pillar4_desc">Kişiye özel steril ekipmanlar ve tertemiz bir butik salon ortamı.</p>
        </div>

      </div>

    </div>
  </section>

  <!-- ==========================================
       4. INSTAGRAM RESMİ PROFİL BAŞLIĞI & 3'LÜ REELS VİTRİNİ
  =========================================== -->
  <section id="reels"`;

html = html.replace(oldPillarsRegex, newPillarsHTML);

// 2. POLISH: Contact Section Buttons (Espresso WhatsApp + Gold Outline Call & Maps)
const oldContactBtnsRegex = /<div style="display: flex; gap: 14px; flex-wrap: wrap;">[\s\S]*?<\/div>\s*<\/div>\s*<!-- Right Info Items -->/;
const newContactBtnsHTML = `<div style="display: flex; gap: 14px; flex-wrap: wrap;">
            <a href="https://wa.me/905526856907?text=Merhaba,%20Three%20Brothers%20salonunuzdan%20randevu%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" class="btn-espresso-luxury btn-shimmer" data-i18n="c_btn_wa">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#128C7E">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
              </svg>
              <span>WhatsApp ile Randevu Al</span>
            </a>
            <a href="tel:+905526856907" class="btn-outline-gold" data-i18n="c_btn_call">
              Hemen Arayın
            </a>
            <a href="https://maps.google.com/?cid=16986332279537405342" target="_blank" rel="noopener noreferrer" class="btn-outline-gold" data-i18n="c_btn_maps">
              Yol Tarifi Al
            </a>
          </div>
        </div>

        <!-- Right Info Items -->`;

html = html.replace(oldContactBtnsRegex, newContactBtnsHTML);

// 3. POLISH: Instagram Button CSS (Golden Luxury Gradient)
html = html.replace(
  /\.btn-insta-follow\s*\{[\s\S]*?background:[^;]+;/,
  `.btn-insta-follow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: linear-gradient(135deg, #C5A880 0%, #A48358 100%);`
);

// 4. POLISH: Rich 4-Column Footer
const oldFooterRegex = /<!-- ==========================================\s*10\. BOUTIQUE FOOTER[\s\S]*?<\/footer>/;
const newFooterHTML = `<!-- ==========================================
       10. BOUTIQUE 4-COLUMN RICH FOOTER
  =========================================== -->
  <footer class="boutique-footer">
    <div class="footer-container">

      <!-- 4 Columns Grid -->
      <div class="footer-grid-4">

        <!-- 1. Kolon: Marka & Felsefe -->
        <div class="footer-col footer-col-brand">
          <div class="footer-brand-header">
            <span class="footer-brand-title" data-i18n="brand_name">Three Brothers</span>
            <span class="footer-brand-sub" data-i18n="brand_tagline">BAYAN KUAFÖRÜ &bull; MANAVGAT</span>
          </div>
          <p class="footer-about-text" data-i18n="footer_tagline">
            2014'ten beri Manavgat'ta sarı saç, renk uzmanlığı ve kadın kuaförlüğünde zarafetin adresi.
          </p>
          <div class="footer-social-links">
            <a href="https://www.instagram.com/threebrotherss/" target="_blank" rel="noopener noreferrer" class="footer-social-btn" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>@threebrotherss</span>
            </a>
          </div>
        </div>

        <!-- 2. Kolon: Hızlı Menü -->
        <div class="footer-col">
          <h4 class="footer-col-title" data-i18n="footer_nav_title">Hızlı Menü</h4>
          <ul class="footer-links-list">
            <li><a href="#hero" data-i18n="nav_home">Ana Sayfa</a></li>
            <li><a href="#hikayemiz" data-i18n="nav_story">Hikayemiz</a></li>
            <li><a href="#hizmetler" data-i18n="nav_services">Hizmetlerimiz</a></li>
            <li><a href="#donusum" data-i18n="nav_transformation">Dönüşümler</a></li>
            <li><a href="#galeri" data-i18n="nav_gallery">Galeri</a></li>
            <li><a href="#iletisim" data-i18n="nav_contact">İletişim</a></li>
          </ul>
        </div>

        <!-- 3. Kolon: Uzmanlıklarımız -->
        <div class="footer-col">
          <h4 class="footer-col-title" data-i18n="footer_spec_title">Uzmanlıklarımız</h4>
          <ul class="footer-links-list">
            <li><a href="#hizmetler" data-i18n="srv1_title">Profesyonel Balyaj</a></li>
            <li><a href="#hizmetler" data-i18n="srv3_title">Blonde & Renk Tasarımı</a></li>
            <li><a href="#hizmetler" data-i18n="srv5_title">Mikro Kapsül Kaynak</a></li>
            <li><a href="#hizmetler" data-i18n="reels2_badge">Ombre & Sombre</a></li>
            <li><a href="#hizmetler" data-i18n="srv2_title">Kişiye Özel Tonlama</a></li>
          </ul>
        </div>

        <!-- 4. Kolon: İletişim & Lokasyon -->
        <div class="footer-col">
          <h4 class="footer-col-title" data-i18n="footer_contact_title">İletişim & Lokasyon</h4>
          <ul class="footer-contact-info">
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C5A880" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <a href="tel:+905526856907" style="color: inherit; text-decoration: none;">+90 552 685 69 07</a>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C5A880" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span data-i18n="footer_hours">Salı – Pazar: 08:30 – 20:30</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C5A880" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span data-i18n="footer_address">Bahçelievler Mah. Demokrasi Blv. No: 8Z1, Manavgat / Antalya</span>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom-row">
        <span data-i18n="footer_rights">© 2014 – 2026 Three Brothers Bayan Kuaförü. Tüm Hakları Saklıdır.</span>
        <a href="#hero" class="footer-back-to-top">Yukarı Çık &uarr;</a>
      </div>

    </div>
  </footer>`;

html = html.replace(oldFooterRegex, newFooterHTML);

// 5. POLISH: Add CSS classes for new elements to <style>
const polishesCSS = `
    /* ==========================================
       5 POLISHES: LUXURY BUTTONS, PILLARS & FOOTER
    =========================================== */
    .pillar-top-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 18px;
    }

    .pillar-number {
      font-family: var(--font-serif);
      font-size: 22px;
      font-weight: 700;
      color: var(--gold-primary);
      opacity: 0.85;
      letter-spacing: 1px;
    }

    /* Contact Espresso Luxury Button */
    .btn-espresso-luxury {
      background: #1A1918;
      color: #FFFFFF !important;
      border: 1px solid #1A1918;
      box-shadow: 0 8px 22px rgba(31, 28, 25, 0.25);
      border-radius: 999px;
      padding: 12px 26px;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-weight: 600;
      font-size: 13.5px;
      letter-spacing: 0.03em;
      text-decoration: none;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      cursor: pointer;
    }

    .btn-espresso-luxury:hover {
      background: #2C2724;
      border-color: #2C2724;
      transform: translateY(-2px);
      box-shadow: 0 12px 28px rgba(31, 28, 25, 0.35);
    }

    .btn-outline-gold {
      background: rgba(255, 255, 255, 0.9);
      color: #1A1918 !important;
      border: 1px solid rgba(194, 163, 121, 0.4);
      border-radius: 999px;
      padding: 12px 24px;
      display: inline-flex;
      align-items: center;
      font-weight: 600;
      font-size: 13px;
      letter-spacing: 0.03em;
      text-decoration: none;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .btn-outline-gold:hover {
      background: #1A1918;
      color: #FFFFFF !important;
      border-color: #1A1918;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(31, 28, 25, 0.15);
    }

    /* Rich 4-Column Footer CSS */
    .boutique-footer {
      background-color: #1A1918 !important;
      color: #EBE0D2;
      padding: 90px 24px 36px;
      border-top: 1px solid rgba(194, 163, 121, 0.2);
    }

    .footer-container {
      max-width: 1240px;
      margin: 0 auto;
    }

    .footer-grid-4 {
      display: grid;
      grid-template-columns: 1.4fr 0.9fr 1fr 1.3fr;
      gap: 50px;
      margin-bottom: 60px;
    }

    @media (max-width: 991px) {
      .footer-grid-4 {
        grid-template-columns: 1fr 1fr;
        gap: 40px;
      }
    }

    @media (max-width: 640px) {
      .footer-grid-4 {
        grid-template-columns: 1fr;
        gap: 36px;
      }
    }

    .footer-brand-header {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
    }

    .footer-brand-title {
      font-family: var(--font-serif);
      font-size: 26px;
      font-weight: 700;
      color: #FFFFFF;
      letter-spacing: 2px;
    }

    .footer-brand-sub {
      font-family: var(--font-sans);
      font-size: 8.5px;
      font-weight: 600;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--gold-primary);
      margin-top: 4px;
    }

    .footer-about-text {
      font-size: 13.5px;
      line-height: 1.75;
      color: rgba(235, 224, 210, 0.7);
      margin-bottom: 20px;
    }

    .footer-social-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: #FFFFFF;
      text-decoration: none;
      font-size: 13px;
      padding: 8px 16px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(197, 168, 128, 0.25);
      transition: all 0.3s ease;
    }

    .footer-social-btn:hover {
      background: var(--gold-primary);
      color: #1A1918;
      border-color: var(--gold-primary);
    }

    .footer-col-title {
      font-family: var(--font-sans);
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #FFFFFF;
      margin-bottom: 20px;
      position: relative;
      padding-bottom: 10px;
    }

    .footer-col-title::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 24px;
      height: 1.5px;
      background: var(--gold-primary);
    }

    .footer-links-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .footer-links-list a {
      color: rgba(235, 224, 210, 0.75);
      text-decoration: none;
      font-size: 13.5px;
      transition: all 0.2s ease;
      display: inline-block;
    }

    .footer-links-list a:hover {
      color: var(--gold-primary);
      transform: translateX(4px);
    }

    .footer-contact-info {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .footer-contact-info li {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      font-size: 13px;
      line-height: 1.6;
      color: rgba(235, 224, 210, 0.75);
    }

    .footer-bottom-row {
      padding-top: 30px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      font-size: 12.5px;
      color: rgba(235, 224, 210, 0.5);
    }

    .footer-back-to-top {
      color: var(--gold-primary);
      text-decoration: none;
      font-weight: 600;
      transition: color 0.2s ease;
    }

    .footer-back-to-top:hover {
      color: #FFFFFF;
    }
`;

if (!html.includes('5 POLISHES: LUXURY BUTTONS, PILLARS & FOOTER')) {
  html = html.replace('</style>', `${polishesCSS}\n  </style>`);
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('index.html updated with 5 key polishes');

// 3. UPDATE src/input.css
let inputCSS = fs.readFileSync('src/input.css', 'utf8');
if (!inputCSS.includes('5 POLISHES: LUXURY BUTTONS, PILLARS & FOOTER')) {
  inputCSS += polishesCSS;
  fs.writeFileSync('src/input.css', inputCSS, 'utf8');
  console.log('src/input.css updated with 5 key polishes');
}
