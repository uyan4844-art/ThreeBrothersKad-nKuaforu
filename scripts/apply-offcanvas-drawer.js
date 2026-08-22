const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Update Header MENU button to have onclick="toggleMenu()" and clean inline styles
html = html.replace(
  /<button id="openMobileMenuBtn"[^>]*>[\s\S]*?<\/button>/,
  `<button id="openMobileMenuBtn" onclick="toggleMenu()" type="button" aria-label="Menüyü Aç" style="background: transparent; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; text-decoration: none; color: #1F1C19; font-family: 'Montserrat', sans-serif; font-size: 0.78rem; font-weight: 600; letter-spacing: 2px; padding: 0;">
        <span>MENU</span>
        <span style="display: inline-block; width: 20px; height: 1.5px; background-color: #1F1C19;"></span>
      </button>`
);

// 2. Replace Drawer Markup with the exact requested Off-Canvas Drawer template
const oldDrawerRegex = /<!-- Luxury Full Drawer & Overlay -->[\s\S]*?<!-- ==========================================\s*2\. HERO SECTION/;

const newDrawerHTML = `<!-- Menü Arka Plan Karartması (Backdrop) -->
  <div id="menu-backdrop" class="menu-backdrop" onclick="toggleMenu()"></div>

  <!-- Sağdan Açılan Lüks Menü Çekmecesi -->
  <aside id="side-drawer" class="side-drawer" aria-label="Gezinme Menüsü">
    <div class="drawer-header">
      <div class="drawer-brand">
        <h3 data-i18n="brand_name">Three Brothers</h3>
        <span data-i18n="brand_tagline">BAYAN KUAFÖRÜ · MANAVGAT</span>
      </div>
      <button class="drawer-close-btn" onclick="toggleMenu()" aria-label="Menüyü Kapat">
        ✕
      </button>
    </div>

    <nav class="drawer-nav">
      <!-- Ana Navigasyon Linkleri -->
      <ul class="drawer-main-links">
        <li><a href="#hero" onclick="toggleMenu()"><span data-i18n="nav_home">Ana Sayfa</span> <span class="arrow">&rarr;</span></a></li>
        <li><a href="#hikayemiz" onclick="toggleMenu()"><span data-i18n="nav_story">Hakkımızda</span> <span class="arrow">&rarr;</span></a></li>
        <li><a href="#hizmetler" onclick="toggleMenu()"><span data-i18n="nav_services">Hizmetlerimiz</span> <span class="arrow">&rarr;</span></a></li>
        <li><a href="#donusum" onclick="toggleMenu()"><span data-i18n="nav_transformation">Dönüşüm</span> <span class="arrow">&rarr;</span></a></li>
        <li><a href="#galeri" onclick="toggleMenu()"><span data-i18n="nav_gallery">Galeri</span> <span class="arrow">&rarr;</span></a></li>
        <li><a href="#iletisim" onclick="toggleMenu()"><span data-i18n="nav_contact">İletişim</span> <span class="arrow">&rarr;</span></a></li>
      </ul>

      <!-- Hizmetler Hap Butonları (Pill Buttons) -->
      <div class="drawer-services-section">
        <span class="drawer-section-tag" data-i18n="drawer_services_tag">ÖZEL HİZMETLERİMİZ</span>
        <div class="drawer-pills-grid">
          <a href="#hizmetler" onclick="toggleMenu()" class="drawer-pill" data-i18n="srv1_title">Profesyonel Balyaj</a>
          <a href="#hizmetler" onclick="toggleMenu()" class="drawer-pill" data-i18n="srv3_title">Blonde & Sarı Saç</a>
          <a href="#hizmetler" onclick="toggleMenu()" class="drawer-pill" data-i18n="srv5_title">Mikro Kaynak</a>
          <a href="#hizmetler" onclick="toggleMenu()" class="drawer-pill" data-i18n="reels2_badge">Ombre & Sombre</a>
          <a href="#hizmetler" onclick="toggleMenu()" class="drawer-pill" data-i18n="srv_keratin">Keratin Bakım</a>
          <a href="#hizmetler" onclick="toggleMenu()" class="drawer-pill" data-i18n="srv_cut">Kişiye Özel Kesim</a>
        </div>
      </div>

      <!-- Dil Seçimi (5-Language Buttons) -->
      <div class="drawer-lang-section" style="margin-bottom: 24px;">
        <span class="drawer-section-tag" data-i18n="drawer_lang_tag">DİL / LANGUAGE</span>
        <div class="lang-switcher" style="justify-content: space-around; width: 100%;">
          <button type="button" class="lang-btn active" data-lang-btn="tr" onclick="window.i18n && window.i18n.setLanguage('tr')">TR</button>
          <button type="button" class="lang-btn" data-lang-btn="en" onclick="window.i18n && window.i18n.setLanguage('en')">EN</button>
          <button type="button" class="lang-btn" data-lang-btn="de" onclick="window.i18n && window.i18n.setLanguage('de')">DE</button>
          <button type="button" class="lang-btn" data-lang-btn="ru" onclick="window.i18n && window.i18n.setLanguage('ru')">RU</button>
          <button type="button" class="lang-btn" data-lang-btn="ar" onclick="window.i18n && window.i18n.setLanguage('ar')">AR</button>
        </div>
      </div>

      <!-- Alt İletişim & Aksiyon Bilgisi -->
      <div class="drawer-footer-info">
        <div class="drawer-contact-line">+90 552 685 69 07</div>
        <div class="drawer-hours-line" data-i18n="footer_hours">Salı – Pazar | 08:30 – 20:30 (Pazartesi Kapalı)</div>
        
        <div class="drawer-action-btns">
          <a href="tel:+905526856907" class="drawer-btn-outline" data-i18n="c_btn_call">Hemen Ara</a>
          <a href="https://maps.google.com/?cid=16986332279537405342" target="_blank" rel="noopener noreferrer" class="drawer-btn-outline" data-i18n="c_btn_maps">Konum & Yol Tarifi</a>
        </div>
      </div>
    </nav>
  </aside>

  <!-- ==========================================
       2. HERO SECTION`;

html = html.replace(oldDrawerRegex, newDrawerHTML);

// 3. Add Off-Canvas Drawer CSS to <style>
const offcanvasCSS = `
    /* ==========================================
       OFF-CANVAS NAVIGATION DRAWER (LÜKS ÇEKMECE MENÜ)
    =========================================== */
    .menu-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(31, 28, 25, 0.48);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: 10000;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.35s ease, visibility 0.35s ease;
    }

    .menu-backdrop.active {
      opacity: 1;
      visibility: visible;
    }

    .side-drawer {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      max-width: 440px;
      background: #FAF7F2;
      border-left: 1px solid rgba(194, 163, 121, 0.25);
      box-shadow: -15px 0 45px rgba(0, 0, 0, 0.12);
      z-index: 10001;
      transform: translateX(100%);
      transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
      display: flex;
      flex-direction: column;
      padding: 32px 34px;
      overflow-y: auto;
      box-sizing: border-box;
    }

    .side-drawer.active {
      transform: translateX(0);
    }

    .drawer-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(194, 163, 121, 0.2);
      margin-bottom: 26px;
    }

    .drawer-brand {
      display: flex;
      flex-direction: column;
    }

    .drawer-brand h3 {
      font-family: var(--font-serif);
      font-size: 24px;
      font-weight: 700;
      color: #1F1C19;
      margin: 0;
      line-height: 1.1;
      letter-spacing: 1.5px;
    }

    .drawer-brand span {
      font-family: var(--font-sans);
      font-size: 8px;
      font-weight: 600;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--gold-dark);
      margin-top: 4px;
    }

    .drawer-close-btn {
      background: transparent;
      border: 1px solid rgba(31, 28, 25, 0.2);
      width: 38px;
      height: 38px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      color: #1F1C19;
      cursor: pointer;
      transition: all 0.25s ease;
    }

    .drawer-close-btn:hover {
      background: #1F1C19;
      color: #FFFFFF;
      transform: rotate(90deg);
    }

    .drawer-nav {
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    .drawer-main-links {
      list-style: none;
      padding: 0;
      margin: 0 0 28px 0;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .drawer-main-links li a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: var(--font-serif);
      font-size: 22px;
      font-weight: 600;
      color: #1F1C19;
      text-decoration: none;
      padding-bottom: 8px;
      border-bottom: 1px solid rgba(194, 163, 121, 0.12);
      transition: all 0.25s ease;
    }

    .drawer-main-links li a:hover {
      color: var(--gold-dark);
      padding-left: 6px;
      border-bottom-color: var(--gold-primary);
    }

    .drawer-main-links li a .arrow {
      font-family: var(--font-sans);
      font-size: 16px;
      color: var(--gold-primary);
      transition: transform 0.25s ease;
    }

    .drawer-main-links li a:hover .arrow {
      transform: translateX(6px);
    }

    .drawer-services-section {
      margin-bottom: 26px;
    }

    .drawer-section-tag {
      display: block;
      font-family: var(--font-sans);
      font-size: 9.5px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--gold-dark);
      margin-bottom: 12px;
    }

    .drawer-pills-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .drawer-pill {
      background: #FFFFFF;
      border: 1px solid rgba(194, 163, 121, 0.25);
      padding: 7px 14px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 500;
      color: #1F1C19;
      text-decoration: none;
      transition: all 0.25s ease;
    }

    .drawer-pill:hover {
      background: var(--gold-primary);
      color: #FFFFFF;
      border-color: var(--gold-primary);
      transform: translateY(-1px);
    }

    .drawer-footer-info {
      margin-top: auto;
      padding-top: 22px;
      border-top: 1px solid rgba(194, 163, 121, 0.2);
    }

    .drawer-contact-line {
      font-family: var(--font-sans);
      font-size: 15px;
      font-weight: 700;
      color: #1F1C19;
      margin-bottom: 4px;
    }

    .drawer-hours-line {
      font-size: 12px;
      color: var(--text-muted);
      margin-bottom: 16px;
      line-height: 1.4;
    }

    .drawer-action-btns {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }

    .drawer-btn-outline {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 10px 14px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 600;
      text-decoration: none;
      border: 1px solid rgba(31, 28, 25, 0.25);
      color: #1F1C19;
      background: #FFFFFF;
      transition: all 0.25s ease;
    }

    .drawer-btn-outline:hover {
      background: #1F1C19;
      color: #FFFFFF;
      border-color: #1F1C19;
    }
`;

if (!html.includes('OFF-CANVAS NAVIGATION DRAWER (LÜKS ÇEKMECE MENÜ)')) {
  html = html.replace('</style>', `${offcanvasCSS}\n  </style>`);
}

// 4. Update JS toggleMenu in script tag
const toggleMenuJS = `
      // Global Off-Canvas Drawer Toggle
      function toggleMenu() {
        const drawer = document.getElementById('side-drawer');
        const backdrop = document.getElementById('menu-backdrop');
        if (drawer && backdrop) {
          drawer.classList.toggle('active');
          backdrop.classList.toggle('active');
          document.body.classList.toggle('menu-open');
        }
      }
      window.toggleMenu = toggleMenu;
`;

if (!html.includes('window.toggleMenu = toggleMenu;')) {
  html = html.replace('document.addEventListener(\'DOMContentLoaded\', () => {', `// Global Drawer Toggle
    function toggleMenu() {
      const drawer = document.getElementById('side-drawer');
      const backdrop = document.getElementById('menu-backdrop');
      if (drawer && backdrop) {
        drawer.classList.toggle('active');
        backdrop.classList.toggle('active');
        document.body.classList.toggle('menu-open');
      }
    }
    window.toggleMenu = toggleMenu;

    document.addEventListener('DOMContentLoaded', () => {`);
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('index.html updated with off-canvas drawer');

// 5. Update src/input.css
let inputCSS = fs.readFileSync('src/input.css', 'utf8');
if (!inputCSS.includes('OFF-CANVAS NAVIGATION DRAWER (LÜKS ÇEKMECE MENÜ)')) {
  inputCSS += offcanvasCSS;
  fs.writeFileSync('src/input.css', inputCSS, 'utf8');
  console.log('src/input.css updated with off-canvas drawer');
}
