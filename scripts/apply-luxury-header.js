const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Replace Header CSS in <style>
const oldHeaderCSSRegex = /\/\* ==========================================\s*1\. BOUTIQUE FLOATING HEADER[\s\S]*?\/\* 2\. HERO SECTION/;

const newHeaderCSS = `/* ==========================================
       1. ULTRA-MINIMALIST LUXURY HEADER (3'LÜ SİMETRİK DÜZEN)
    =========================================== */
    .luxury-header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 18px 5%;
      background: rgba(248, 245, 240, 0.85);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border-bottom: 1px solid rgba(197, 168, 128, 0.18);
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .luxury-header.is-scrolled {
      padding: 12px 5%;
      background: rgba(248, 245, 240, 0.96);
      box-shadow: 0 10px 30px rgba(31, 28, 25, 0.06);
      border-bottom-color: rgba(197, 168, 128, 0.3);
    }

    .header-left {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    .header-insta {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: var(--text-espresso);
      background: rgba(197, 168, 128, 0.08);
      border: 1px solid rgba(197, 168, 128, 0.25);
      transition: all 0.3s ease;
      text-decoration: none;
    }

    .header-insta:hover {
      color: var(--gold-dark);
      background: rgba(197, 168, 128, 0.2);
      border-color: var(--gold-primary);
      transform: translateY(-2px);
    }

    .header-center {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .brand-link-luxury {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: var(--text-espresso);
      transition: opacity 0.3s ease;
    }

    .brand-link-luxury:hover {
      opacity: 0.85;
    }

    .brand-name-luxury {
      font-family: var(--font-serif);
      font-size: clamp(22px, 2.4vw, 30px);
      font-weight: 700;
      letter-spacing: 2px;
      line-height: 1.1;
      color: var(--text-espresso);
    }

    .brand-sub-luxury {
      font-family: var(--font-sans);
      font-size: 8.5px;
      font-weight: 600;
      letter-spacing: 3.5px;
      text-transform: uppercase;
      color: var(--gold-dark);
      margin-top: 3px;
    }

    .header-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 16px;
    }

    .menu-trigger-luxury {
      background: transparent;
      border: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 8px 18px;
      border-radius: 999px;
      border: 1px solid rgba(31, 28, 25, 0.22);
      color: var(--text-espresso);
      font-family: var(--font-sans);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 2px;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .menu-trigger-luxury:hover {
      background: var(--text-espresso);
      color: #FFFFFF;
      border-color: var(--text-espresso);
      transform: translateY(-1px);
    }

    .menu-trigger-luxury:hover .menu-line-luxury {
      background: #FFFFFF;
      width: 22px;
    }

    .menu-line-luxury {
      display: inline-block;
      width: 16px;
      height: 1.5px;
      background: var(--text-espresso);
      transition: all 0.3s ease;
    }

    /* Live Salon Status Badge (Drawer & Global) */
    .live-status-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 5px 12px;
      background: rgba(37, 211, 102, 0.1);
      border: 1px solid rgba(37, 211, 102, 0.3);
      border-radius: 999px;
      font-size: 11px;
      font-weight: 600;
      color: #1a8f44;
    }

    .status-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #128C7E;
      box-shadow: 0 0 8px #128C7E;
      animation: pulseDot 2s infinite;
    }

    @keyframes pulseDot {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.25); }
    }

    /* Language Switcher */
    .lang-switcher {
      display: flex;
      align-items: center;
      background: rgba(197, 168, 128, 0.12);
      border-radius: 999px;
      padding: 3px;
      border: 1px solid rgba(197, 168, 128, 0.25);
    }

    .lang-btn {
      background: transparent;
      border: none;
      padding: 4px 10px;
      font-size: 11px;
      font-weight: 700;
      color: var(--text-espresso);
      border-radius: 999px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .lang-btn.active, .lang-btn:hover {
      background: var(--gold-primary);
      color: #FFFFFF;
    }

    /* Buttons */
    .btn-gold {
      background: linear-gradient(135deg, #C5A880 0%, #9E7D4C 100%);
      color: #FFFFFF !important;
      padding: 12px 26px;
      border-radius: 999px;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      border: 1px solid #9E7D4C;
      box-shadow: 0 8px 22px rgba(158, 125, 76, 0.28);
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      cursor: pointer;
      position: relative;
    }

    .btn-gold:hover {
      background: linear-gradient(135deg, #D8BF9D 0%, #B89765 100%);
      transform: translateY(-3px);
      box-shadow: 0 14px 30px rgba(158, 125, 76, 0.42);
    }

    /* Shimmer Sheen Effect */
    .btn-shimmer {
      position: relative;
      overflow: hidden;
    }

    .btn-shimmer::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -60%;
      width: 40%;
      height: 200%;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.45) 50%, rgba(255, 255, 255, 0) 100%);
      transform: rotate(25deg);
      animation: shimmerSweep 3.5s infinite ease-in-out;
      pointer-events: none;
    }

    @keyframes shimmerSweep {
      0%, 25% { left: -60%; }
      65%, 100% { left: 160%; }
    }

    .btn-outline {
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      color: var(--text-espresso) !important;
      padding: 12px 26px;
      border-radius: 999px;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      border: 1px solid rgba(35, 30, 27, 0.25);
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      cursor: pointer;
    }

    .btn-outline:hover {
      background: var(--text-espresso);
      color: #FFFFFF !important;
      border-color: var(--text-espresso);
      transform: translateY(-3px);
      box-shadow: 0 12px 26px rgba(35, 30, 27, 0.16);
    }

    /* 2. HERO SECTION`;

html = html.replace(oldHeaderCSSRegex, newHeaderCSS);

// 2. Replace Header & Drawer HTML Markup
const oldHeaderHTMLRegex = /<!-- ==========================================\s*1\. BOUTIQUE FLOATING HEADER[\s\S]*?<!-- ==========================================\s*2\. HERO SECTION/;

const newHeaderHTML = `<!-- ==========================================
       1. ULTRA-MINIMALIST LUXURY HEADER (3'LÜ SİMETRİK DÜZEN)
  =========================================== -->
  <header class="luxury-header" id="boutiqueHeader">
    <!-- Sol: Instagram İkonu -->
    <div class="header-left">
      <a href="https://www.instagram.com/threebrotherss/" target="_blank" rel="noopener noreferrer" class="header-insta" aria-label="Instagram @threebrotherss">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>
    </div>

    <!-- Orta: Logo & Marka -->
    <div class="header-center">
      <a href="#" class="brand-link-luxury" aria-label="Three Brothers Ana Sayfa">
        <span class="brand-name-luxury" data-i18n="brand_name">Three Brothers</span>
        <span class="brand-sub-luxury" data-i18n="brand_tagline">BAYAN KUAFÖRÜ &bull; MANAVGAT</span>
      </a>
    </div>

    <!-- Sağ: Minimalist Menü Tetikleyici -->
    <div class="header-right">
      <button class="menu-trigger-luxury" id="openMobileMenuBtn" aria-label="Menü" type="button">
        <span>MENU</span>
        <span class="menu-line-luxury"></span>
      </button>
    </div>
  </header>

  <!-- Luxury Full Drawer & Overlay -->
  <div class="drawer-overlay" id="drawerOverlay"></div>
  <div class="mobile-drawer" id="mobileDrawer">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid rgba(197, 168, 128, 0.2);">
      <div style="display: flex; flex-direction: column;">
        <span class="brand-name-luxury" style="font-size: 20px;">Three Brothers</span>
        <span class="brand-sub-luxury" style="font-size: 8px;">BAYAN KUAFÖRÜ &bull; MANAVGAT</span>
      </div>
      <button id="closeMobileMenuBtn" aria-label="Menüyü Kapat" style="background: none; border: none; font-size: 28px; cursor: pointer; color: var(--text-espresso); line-height: 1;">&times;</button>
    </div>

    <!-- Drawer Navigation Items -->
    <div style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 26px;">
      <a href="#hikayemiz" class="nav-link drawer-item" data-i18n="nav_story">Hikayemiz</a>
      <a href="#reels" class="nav-link drawer-item" data-i18n="nav_reels">Reels</a>
      <a href="#hizmetler" class="nav-link drawer-item" data-i18n="nav_services">Hizmetler</a>
      <a href="#donusum" class="nav-link drawer-item" data-i18n="nav_transformation">Dönüşüm</a>
      <a href="#yorumlar" class="nav-link drawer-item" data-i18n="nav_reviews">Yorumlar</a>
      <a href="#galeri" class="nav-link drawer-item" data-i18n="nav_gallery">Galeri</a>
      <a href="#iletisim" class="nav-link drawer-item" data-i18n="nav_contact">İletişim</a>
    </div>

    <!-- 5-Language Switcher inside Drawer -->
    <div style="margin-bottom: 22px;">
      <span style="font-size: 10px; font-weight: 700; letter-spacing: 1.5px; color: var(--gold-dark); display: block; margin-bottom: 8px; text-transform: uppercase;">DİL SEÇİMİ / LANGUAGE</span>
      <div class="lang-switcher" style="justify-content: space-around; width: 100%;">
        <button type="button" class="lang-btn active" data-lang-btn="tr" onclick="window.i18n && window.i18n.setLanguage('tr')">TR</button>
        <button type="button" class="lang-btn" data-lang-btn="en" onclick="window.i18n && window.i18n.setLanguage('en')">EN</button>
        <button type="button" class="lang-btn" data-lang-btn="de" onclick="window.i18n && window.i18n.setLanguage('de')">DE</button>
        <button type="button" class="lang-btn" data-lang-btn="ru" onclick="window.i18n && window.i18n.setLanguage('ru')">RU</button>
        <button type="button" class="lang-btn" data-lang-btn="ar" onclick="window.i18n && window.i18n.setLanguage('ar')">AR</button>
      </div>
    </div>

    <!-- Live Status inside Drawer -->
    <div style="margin-bottom: 20px; display: flex; justify-content: center;">
      <div class="live-status-pill">
        <span class="status-dot"></span>
        <span data-i18n="status_open">Şu an Açık • 08:30 – 20:30</span>
      </div>
    </div>

    <!-- Quick WhatsApp Action -->
    <div style="margin-top: auto; padding-top: 14px;">
      <a href="https://wa.me/905526856907?text=Merhaba,%20randevu%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" class="btn-gold btn-shimmer" style="width: 100%; text-align: center;" data-i18n="btn_whatsapp_quick">
        WhatsApp Randevu
      </a>
    </div>
  </div>

  <!-- ==========================================
       2. HERO SECTION`;

html = html.replace(oldHeaderHTMLRegex, newHeaderHTML);

fs.writeFileSync('index.html', html, 'utf8');
console.log('index.html successfully updated with ultra-minimalist luxury header');
