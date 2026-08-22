const fs = require('fs');

// 1. Build hakkimizda.html
const hakkimizdaHTML = `<!DOCTYPE html>
<html lang="tr" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
  <title>Hakkımızda | Three Brothers Bayan Kuaförü Manavgat</title>
  <meta name="description" content="2014 yılından bu yana Manavgat'ta üç kardeş olarak bayan kuaförlüğü, sarı saç uzmanlığı ve modern saç renklendirmede zarafetin adresi." />
  
  <!-- Favicon -->
  <link rel="icon" type="image/webp" href="./images/logo.webp" />

  <!-- Google Fonts: Cormorant Garamond & Montserrat -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

  <link rel="stylesheet" href="css/style.css" />

  <style>
    :root {
      --bg-cream: #FAF7F2;
      --bg-linen: #F0EAE1;
      --text-espresso: #1F1C19;
      --text-muted: #5A554E;
      --gold-primary: #C5A880;
      --gold-dark: #A48358;
      --font-serif: 'Cormorant Garamond', Georgia, serif;
      --font-sans: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html, body {
      background-color: var(--bg-cream);
      color: var(--text-espresso);
      font-family: var(--font-sans);
      overflow-x: hidden;
      width: 100%;
      line-height: 1.6;
    }

    /* Off-Canvas Navigation Drawer */
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
      display: block;
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

    .lang-switcher {
      display: inline-flex;
      align-items: center;
      background: rgba(255, 255, 255, 0.8);
      border: 1px solid rgba(194, 163, 121, 0.3);
      border-radius: 999px;
      padding: 4px;
      gap: 4px;
    }

    .lang-btn {
      background: transparent;
      border: none;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 700;
      color: var(--text-espresso);
      padding: 5px 10px;
      cursor: pointer;
      transition: all 0.25s ease;
    }

    .lang-btn.active {
      background: var(--gold-primary);
      color: #FFFFFF;
    }

    .drawer-footer-info {
      margin-top: auto;
      padding-top: 22px;
      border-top: 1px solid rgba(194, 163, 121, 0.2);
    }

    .drawer-contact-line {
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

    /* About Main Layout */
    .about-main-container {
      padding: 140px 6% 90px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .about-grid-2 {
      display: grid;
      grid-template-columns: 0.9fr 1.1fr;
      gap: 60px;
      align-items: start;
    }

    @media (max-width: 991px) {
      .about-grid-2 {
        grid-template-columns: 1fr;
        gap: 45px;
      }
      .about-main-container {
        padding: 110px 5% 70px;
      }
    }

    .about-image-card {
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.07);
      border: 1px solid rgba(194, 163, 121, 0.25);
      position: sticky;
      top: 100px;
    }

    .about-image-card img {
      width: 100%;
      height: auto;
      display: block;
      object-fit: cover;
      transition: transform 0.6s ease;
    }

    .about-image-card:hover img {
      transform: scale(1.02);
    }

    .about-kicker {
      color: var(--gold-dark);
      font-size: 0.8rem;
      letter-spacing: 3px;
      font-weight: 700;
      text-transform: uppercase;
      display: block;
      margin-bottom: 8px;
    }

    .about-headline {
      font-family: var(--font-serif);
      font-size: clamp(2.2rem, 3.8vw, 3.2rem);
      line-height: 1.15;
      margin: 12px 0 24px;
      color: #1F1C19;
    }

    .about-paragraph {
      color: #5A554E;
      line-height: 1.8;
      margin-bottom: 18px;
      font-size: 0.98rem;
    }

    .about-stats-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin: 32px 0 36px;
    }

    @media (max-width: 640px) {
      .about-stats-grid {
        grid-template-columns: 1fr;
      }
    }

    .about-stat-card {
      background: #FFFFFF;
      padding: 24px;
      border-radius: 12px;
      border: 1px solid rgba(194, 163, 121, 0.2);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);
      transition: all 0.3s ease;
    }

    .about-stat-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
      border-color: var(--gold-primary);
    }

    .about-stat-num {
      font-family: var(--font-serif);
      font-size: 2.2rem;
      font-weight: 700;
      color: #1F1C19;
      line-height: 1.1;
      margin-bottom: 6px;
    }

    .about-stat-label {
      color: #746D65;
      font-size: 0.85rem;
      line-height: 1.45;
    }

    .btn-espresso-cta {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: #1F1C19;
      color: #FFFFFF !important;
      padding: 14px 34px;
      border-radius: 999px;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.92rem;
      letter-spacing: 0.03em;
      box-shadow: 0 8px 24px rgba(31, 28, 25, 0.25);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .btn-espresso-cta:hover {
      background: #36312C;
      transform: translateY(-2px);
      box-shadow: 0 12px 28px rgba(31, 28, 25, 0.35);
    }

    /* Footer CSS */
    .boutique-footer {
      background-color: #1A1715 !important;
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
      display: block;
    }

    .footer-about-text {
      font-size: 13.5px;
      line-height: 1.75;
      color: rgba(235, 224, 210, 0.7);
      margin: 16px 0 20px;
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
      color: #1A1715;
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
  </style>
</head>

<body>

  <!-- ==========================================
       1. ULTRA-MINIMALIST LUXURY HEADER
  =========================================== -->
  <header style="position: absolute; top: 0; left: 0; width: 100%; padding: 22px 5%; display: flex; justify-content: space-between; align-items: center; z-index: 1000; box-sizing: border-box; background: rgba(248, 245, 240, 0.6); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-bottom: 1px solid rgba(194, 163, 121, 0.15);">
    
    <!-- Sol: Instagram İkonu -->
    <div style="flex: 1; display: flex; align-items: center; justify-content: flex-start;">
      <a href="https://instagram.com/threebrotherss" target="_blank" rel="noopener noreferrer" style="color: #1F1C19; display: inline-flex; align-items: center; text-decoration: none; transition: opacity 0.3s;" aria-label="Instagram">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>
    </div>

    <!-- Orta: Logo & Marka İsmi -->
    <div style="flex: 2; text-align: center;">
      <a href="index.html" style="text-decoration: none; display: inline-flex; flex-direction: column; align-items: center;">
        <span style="font-family: 'Cormorant Garamond', serif; font-size: 1.6rem; font-weight: 600; color: #1F1C19; letter-spacing: 2px; line-height: 1.1;" data-i18n="brand_name">Three Brothers</span>
        <span style="font-family: 'Montserrat', sans-serif; font-size: 0.62rem; color: #A48358; letter-spacing: 3.5px; font-weight: 600; margin-top: 4px; text-transform: uppercase;" data-i18n="brand_tagline">BAYAN KUAFÖRÜ &bull; MANAVGAT</span>
      </a>
    </div>

    <!-- Sağ: Minimalist Menü -->
    <div style="flex: 1; display: flex; align-items: center; justify-content: flex-end;">
      <button id="openMobileMenuBtn" onclick="toggleMenu()" type="button" aria-label="Menüyü Aç" style="background: transparent; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; text-decoration: none; color: #1F1C19; font-family: 'Montserrat', sans-serif; font-size: 0.78rem; font-weight: 600; letter-spacing: 2px; padding: 0;">
        <span>MENU</span>
        <span style="display: inline-block; width: 20px; height: 1.5px; background-color: #1F1C19;"></span>
      </button>
    </div>

  </header>

  <!-- Menü Arka Plan Karartması (Backdrop) -->
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
        <li><a href="index.html" onclick="toggleMenu()"><span data-i18n="nav_home">Ana Sayfa</span> <span class="arrow">&rarr;</span></a></li>
        <li><a href="hakkimizda.html" onclick="toggleMenu()"><span data-i18n="nav_story">Hakkımızda</span> <span class="arrow">&rarr;</span></a></li>
        <li><a href="index.html#hizmetler" onclick="toggleMenu()"><span data-i18n="nav_services">Hizmetlerimiz</span> <span class="arrow">&rarr;</span></a></li>
        <li><a href="index.html#donusum" onclick="toggleMenu()"><span data-i18n="nav_transformation">Dönüşüm</span> <span class="arrow">&rarr;</span></a></li>
        <li><a href="index.html#galeri" onclick="toggleMenu()"><span data-i18n="nav_gallery">Galeri</span> <span class="arrow">&rarr;</span></a></li>
        <li><a href="index.html#iletisim" onclick="toggleMenu()"><span data-i18n="nav_contact">İletişim</span> <span class="arrow">&rarr;</span></a></li>
      </ul>

      <!-- Hizmetler Hap Butonları (Pill Buttons) -->
      <div class="drawer-services-section">
        <span class="drawer-section-tag" data-i18n="drawer_services_tag">ÖZEL HİZMETLERİMİZ</span>
        <div class="drawer-pills-grid">
          <a href="index.html#hizmetler" onclick="toggleMenu()" class="drawer-pill" data-i18n="srv1_title">Profesyonel Balyaj</a>
          <a href="index.html#hizmetler" onclick="toggleMenu()" class="drawer-pill" data-i18n="srv3_title">Blonde & Sarı Saç</a>
          <a href="index.html#hizmetler" onclick="toggleMenu()" class="drawer-pill" data-i18n="srv5_title">Mikro Kaynak</a>
          <a href="index.html#hizmetler" onclick="toggleMenu()" class="drawer-pill" data-i18n="reels2_badge">Ombre & Sombre</a>
          <a href="index.html#hizmetler" onclick="toggleMenu()" class="drawer-pill" data-i18n="srv_keratin">Keratin Bakım</a>
          <a href="index.html#hizmetler" onclick="toggleMenu()" class="drawer-pill" data-i18n="srv_cut">Kişiye Özel Kesim</a>
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
       2. HAKKIMIZDA EDİTORYAL GÖVDE BÖLÜMÜ
  =========================================== -->
  <main class="about-main-container">
    <div class="about-grid-2">
      
      <!-- Sol: Salon Cephe Fotoğrafı -->
      <div class="about-image-card">
        <img src="./images/story-salon.webp" alt="Three Brothers Bayan Kuaförü Manavgat Salon" loading="eager" />
      </div>

      <!-- Sağ: Hikaye, İstatistikler & Buton -->
      <div>
        <span class="about-kicker" data-i18n="about_page_kicker">HAKKIMIZDA</span>
        <h1 class="about-headline" data-i18n="about_page_headline">
          Manavgat'ta Profesyonel Saç Tasarımı & Renk Ustalığı
        </h1>

        <p class="about-paragraph" data-i18n="about_page_p1">
          2014 yılından bu yana üç kardeş olarak bayan kuaförlüğü sektöründe hizmet veriyor, yılların verdiği tecrübe ve birikimle her geçen gün kendimizi geliştirmeye devam ediyoruz.
        </p>

        <p class="about-paragraph" data-i18n="about_page_p2">
          Özellikle <strong>sarı saç ve renk uygulamalarında</strong> kendimize güveniyor, doğru teknik ve profesyonel dokunuşlarla saçın güzelliğini ortaya çıkarmayı hedefliyoruz. Bizim için güzel bir sonuç kadar, <strong>saçın sağlığını ve bütünlüğünü korumak</strong> da büyük önem taşıyor.
        </p>

        <p class="about-paragraph" data-i18n="about_page_p3">
          Her müşterimizin saç yapısını, ten rengini, tarzını ve beklentisini ayrı ayrı değerlendiriyor; kişiye özel uygulamalarla doğal, ışıltılı ve uzun süre keyifle kullanılabilecek sonuçlar elde etmeye özen gösteriyoruz.
        </p>

        <!-- İstatistik Kutuları -->
        <div class="about-stats-grid">
          <div class="about-stat-card">
            <div class="about-stat-num">2014</div>
            <div class="about-stat-label" data-i18n="about_stat1_label">Yılından bu yana profesyonel deneyim</div>
          </div>
          <div class="about-stat-card">
            <div class="about-stat-num" data-i18n="about_stat2_title">Sağlık</div>
            <div class="about-stat-label" data-i18n="about_stat2_label">Saç dokusunu koruyan sıfır yıpranma yaklaşımı</div>
          </div>
        </div>

        <a href="https://wa.me/905526856907?text=Merhaba,%20Three%20Brothers%20hakkında%20bilgi%20ve%20randevu%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" class="btn-espresso-cta" data-i18n="about_page_cta">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
          </svg>
          <span>İletişime Geç (WhatsApp)</span>
        </a>
      </div>

    </div>
  </main>

  <!-- ==========================================
       3. BOUTIQUE 4-COLUMN RICH FOOTER
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
            <li><a href="index.html#hero" data-i18n="nav_home">Ana Sayfa</a></li>
            <li><a href="hakkimizda.html" data-i18n="nav_story">Hikayemiz</a></li>
            <li><a href="index.html#hizmetler" data-i18n="nav_services">Hizmetlerimiz</a></li>
            <li><a href="index.html#donusum" data-i18n="nav_transformation">Dönüşümler</a></li>
            <li><a href="index.html#galeri" data-i18n="nav_gallery">Galeri</a></li>
            <li><a href="index.html#iletisim" data-i18n="nav_contact">İletişim</a></li>
          </ul>
        </div>

        <!-- 3. Kolon: Uzmanlıklarımız -->
        <div class="footer-col">
          <h4 class="footer-col-title" data-i18n="footer_spec_title">Uzmanlıklarımız</h4>
          <ul class="footer-links-list">
            <li><a href="index.html#hizmetler" data-i18n="srv1_title">Profesyonel Balyaj</a></li>
            <li><a href="index.html#hizmetler" data-i18n="srv3_title">Blonde & Renk Tasarımı</a></li>
            <li><a href="index.html#hizmetler" data-i18n="srv5_title">Mikro Kapsül Kaynak</a></li>
            <li><a href="index.html#hizmetler" data-i18n="reels2_badge">Ombre & Sombre</a></li>
            <li><a href="index.html#hizmetler" data-i18n="srv2_title">Kişiye Özel Tonlama</a></li>
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
        <a href="#" class="footer-back-to-top">Yukarı Çık &uarr;</a>
      </div>

    </div>
  </footer>

  <script src="./js/i18n.js"></script>
  <script>
    // Global Drawer Toggle
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
  </script>
</body>
</html>`;

fs.writeFileSync('hakkimizda.html', hakkimizdaHTML, 'utf8');
fs.copyFileSync('hakkimizda.html', 'public/hakkimizda.html');
console.log('hakkimizda.html created and copied to public/');

// 2. Connect drawer link in index.html to hakkimizda.html
let indexHTML = fs.readFileSync('index.html', 'utf8');
indexHTML = indexHTML.replace(
  /<li><a href="#hikayemiz" onclick="toggleMenu()"><span data-i18n="nav_story">Hakkımızda<\/span>/g,
  `<li><a href="hakkimizda.html"><span data-i18n="nav_story">Hakkımızda</span>`
);
fs.writeFileSync('index.html', indexHTML, 'utf8');
fs.copyFileSync('index.html', 'public/index.html');
console.log('index.html drawer updated with link to hakkimizda.html');

// 3. Update i18n keys for about page
let i18n = fs.readFileSync('js/i18n.js', 'utf8');
const aboutKeys = {
  tr: {
    about_page_kicker: "HAKKIMIZDA",
    about_page_headline: "Manavgat'ta Profesyonel Saç Tasarımı & Renk Ustalığı",
    about_page_p1: "2014 yılından bu yana üç kardeş olarak bayan kuaförlüğü sektöründe hizmet veriyor, yılların verdiği tecrübe ve birikimle her geçen gün kendimizi geliştirmeye devam ediyoruz.",
    about_page_p2: "Özellikle sarı saç ve renk uygulamalarında kendimize güveniyor, doğru teknik ve profesyonel dokunuşlarla saçın güzelliğini ortaya çıkarmayı hedefliyoruz. Bizim için güzel bir sonuç kadar, saçın sağlığını ve bütünlüğünü korumak da büyük önem taşıyor.",
    about_page_p3: "Her müşterimizin saç yapısını, ten rengini, tarzını ve beklentisini ayrı ayrı değerlendiriyor; kişiye özel uygulamalarla doğal, ışıltılı ve uzun süre keyifle kullanılabilecek sonuçlar elde etmeye özen gösteriyoruz.",
    about_stat1_label: "Yılından bu yana profesyonel deneyim",
    about_stat2_title: "Sağlık",
    about_stat2_label: "Saç dokusunu koruyan sıfır yıpranma yaklaşımı",
    about_page_cta: "İletişime Geç (WhatsApp)"
  },
  en: {
    about_page_kicker: "ABOUT US",
    about_page_headline: "Professional Hair Styling & Color Mastery in Manavgat",
    about_page_p1: "Since 2014, as three brothers, we have been serving in the women's hairdressing industry, continuously developing ourselves with years of experience.",
    about_page_p2: "We specialize in blonde hair and color transformations, aiming to reveal hair beauty with precise techniques and zero damage.",
    about_page_p3: "We individually evaluate each guest's hair texture, skin tone, and style, creating tailored, luminous results designed to last.",
    about_stat1_label: "Years of dedicated professional experience",
    about_stat2_title: "Health",
    about_stat2_label: "Zero-damage approach preserving hair biology",
    about_page_cta: "Contact Us (WhatsApp)"
  },
  de: {
    about_page_kicker: "ÜBER UNS",
    about_page_headline: "Professionelles Haarstyling & Farbkunst in Manavgat",
    about_page_p1: "Seit 2014 bieten wir als drei Brüder erstklassige Friseurdienstleistungen in Manavgat mit langjähriger Erfahrung.",
    about_page_p2: "Wir sind spezialisiert auf Blondtöne und Farbkorrekturen mit schonenden Techniken für gesunde, strahlende Ergebnisse.",
    about_page_p3: "Wir beraten jeden Gast individuell nach Haartyp und Hautton für natürliche, langanhaltende Eleganz.",
    about_stat1_label: "Jahre professionelle Friseurerfahrung",
    about_stat2_title: "Gesundheit",
    about_stat2_label: "Schonende Haarpflege ohne Strukturschäden",
    about_page_cta: "Kontaktieren Sie uns (WhatsApp)"
  },
  ru: {
    about_page_kicker: "О НАС",
    about_page_headline: "Профессиональный стайлинг и колористика в Манавгате",
    about_page_p1: "С 2014 года мы втроем работаем в сфере женского парикмахерского искусства в Манавгате, постоянно совершенствуя свое мастерство.",
    about_page_p2: "Мы специализируемся на блондах и сложных окрашиваниях, сохраняя здоровье и природную силу каждого волоса.",
    about_page_p3: "Индивидуальный подход к структуре волос, тону кожи и стилю каждого гостя.",
    about_stat1_label: "Лет профессионального опыта в индустрии",
    about_stat2_title: "Здоровье",
    about_stat2_label: "Безупречный уход без повреждения волос",
    about_page_cta: "Связаться (WhatsApp)"
  },
  ar: {
    about_page_kicker: "من نحن",
    about_page_headline: "تصميم الشعر الاحترافي وخبرة الألوان في ماناavgat",
    about_page_p1: "منذ عام 2014، نقدم كـ 3 إخوة خدمات تصفيف الشعر للسيدات مع سنوات من الخبرة والاحترافية.",
    about_page_p2: "نحن متخصصون في الشعر الأشقر والصبغات مع الحفاظ الكامل على صحة الشعر وحيويته.",
    about_page_p3: "نصمم لكل زائرة نتيجة طبيعية ومشرقة تناسب ملامحها ونوع شعرها.",
    about_stat1_label: "سنوات من الخبرة الاحترافية",
    about_stat2_title: "صحة الشعر",
    about_stat2_label: "تقنيات تحافظ على حيوية ولمعان الشعر",
    about_page_cta: "تواصل معنا (واتساب)"
  }
};

for (const lang of ['tr', 'en', 'de', 'ru', 'ar']) {
  for (const [key, val] of Object.entries(aboutKeys[lang])) {
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
console.log('js/i18n.js updated with about page keys');
