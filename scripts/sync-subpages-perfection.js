const fs = require('fs');
const path = require('path');

const servicePages = [
  {
    file: 'balyaj.html',
    title: 'Profesyonel Balyaj & Sarı Saç | Three Brothers Bayan Kuaförü Manavgat',
    desc: "2014’ten beri Manavgat'ta profesyonel balyaj ve sarı saç renklendirmede doğal ışıltı ve bağ koruyucu uzmanlık.",
    waText: 'Merhaba,%20Balyaj%20hizmetiniz%20hakk%C4%B1nda%20bilgi%20ve%20randevu%20almak%20istiyorum.',
    activeService: 'balyaj.html'
  },
  {
    file: 'blonde.html',
    title: 'Blonde & Sarı Saç Tasarımı | Three Brothers Bayan Kuaförü Manavgat',
    desc: "Manavgat'ta sarı saç uzmanlığı, platin, bebek sarısı ve bej blonde tonlarında saç sağlığını koruyan butik kuaför deneyimi.",
    waText: 'Merhaba,%20Blonde%20ve%20Sar%C4%B1%20Sa%C3%A7%20hizmetiniz%20hakk%C4%B1nda%20bilgi%20ve%20randevu%20almak%20istiyorum.',
    activeService: 'blonde.html'
  },
  {
    file: 'kaynak.html',
    title: 'Mikro Kapsül Kaynak | Three Brothers Bayan Kuaförü Manavgat',
    desc: "Doğal saç dokusuna sıfır zarar veren, ultra konforlu ve görünmez mikro kapsül saç kaynak uygulamaları Manavgat'ta.",
    waText: 'Merhaba,%20Mikro%20Kaynak%20hizmetiniz%20hakk%C4%B1nda%20bilgi%20ve%20randevu%20almak%20istiyorum.',
    activeService: 'kaynak.html'
  },
  {
    file: 'ombre.html',
    title: 'Ombre & Sombre Geçişleri | Three Brothers Bayan Kuaförü Manavgat',
    desc: "Doğal dip tonuyla kusursuz bütünleşen, dip boyası gerektirmeyen yumuşak ombre ve sombre tasarımları.",
    waText: 'Merhaba,%20Ombre%20ve%20Sombre%20hizmetiniz%20hakk%C4%B1nda%20bilgi%20ve%20randevu%20almak%20istiyorum.',
    activeService: 'ombre.html'
  },
  {
    file: 'renklendirme.html',
    title: 'Kişiye Özel Renklendirme & Tonlama | Three Brothers Bayan Kuaförü Manavgat',
    desc: "Ten renginize ve yüz hatlarınıza özel bağ koruyucu transparan boya, cila ve renk düzeltme uygulamaları.",
    waText: 'Merhaba,%20Renklendirme%20ve%20Tonlama%20hizmetiniz%20hakk%C4%B1nda%20bilgi%20ve%20randevu%20almak%20istiyorum.',
    activeService: 'renklendirme.html'
  },
  {
    file: 'hakkimizda.html',
    title: 'Hakkımızda & Hikayemiz | Three Brothers Bayan Kuaförü Manavgat',
    desc: "2014'ten beri Manavgat'ta üç kardeş olarak sarı saçta doğallık, tutku ve tavizsiz hijyen standartlarıyla hizmet veriyoruz.",
    waText: 'Merhaba,%20Three%20Brothers%20salonunuzdan%20randevu%20ve%20bilgi%20almak%20istiyorum.',
    activeService: 'hakkimizda.html'
  }
];

const headerTemplate = `  <!-- ==========================================
       1. STICKY GLASSMORPHISM LUXURY HEADER
  =========================================== -->
  <header class="luxury-header" id="boutiqueHeader">
    
    <!-- Sol: Logo & Marka İsmi -->
    <a href="index.html#hero" class="brand-link" aria-label="Three Brothers Ana Sayfa">
      <img src="./images/logo.webp" alt="Three Brothers Logo" class="brand-logo-img" width="44" height="44" />
      <div style="display: flex; flex-direction: column;">
        <span class="brand-title notranslate" translate="no" data-i18n="brand_name">Three Brothers</span>
        <span class="brand-subtitle" data-i18n="brand_tagline">BAYAN KUAFÖRÜ &bull; MANAVGAT</span>
      </div>
    </a>

    <!-- Orta: Masaüstü Gezinme Menüsü (Smooth Scroll / Linkler) -->
    <nav class="nav-menu-desktop" aria-label="Ana Gezinme">
      <a href="index.html#hizmetler" class="nav-link" data-i18n="nav_services">Hizmetlerimiz</a>
      <a href="hakkimizda.html" class="nav-link" data-i18n="nav_story">Hakkımızda</a>
      <a href="index.html#surec" class="nav-link" data-i18n="nav_process">Süreç</a>
      <a href="index.html#galeri" class="nav-link" data-i18n="nav_gallery">Galeri</a>
      <a href="index.html#yorumlar" class="nav-link" data-i18n="nav_reviews">Yorumlar</a>
      <a href="index.html#sss" class="nav-link" data-i18n="nav_faq">SSS</a>
      <a href="index.html#iletisim" class="nav-link" data-i18n="nav_contact">İletişim</a>
    </nav>

    <!-- Sağ: Çok Dilli Seçici + Instagram + Randevu Al + Mobil Menü -->
    <div class="header-right-actions">
      
      <!-- Çok Dilli Dil Seçici -->
      <div class="lang-switcher" aria-label="Dil Seçimi">
        <button class="lang-btn active" data-lang="tr" type="button" aria-label="Türkçe">TR</button>
        <button class="lang-btn" data-lang="en" type="button" aria-label="English">EN</button>
        <button class="lang-btn" data-lang="de" type="button" aria-label="Deutsch">DE</button>
        <button class="lang-btn" data-lang="ru" type="button" aria-label="Русский">RU</button>
        <button class="lang-btn" data-lang="ar" type="button" aria-label="العربية">AR</button>
      </div>

      <!-- Instagram İkon Butonu (Masaüstü) -->
      <a href="https://www.instagram.com/threebrotherrrs/" target="_blank" rel="noopener noreferrer" class="header-insta-btn" aria-label="Instagram">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>

      <!-- WhatsApp Randevu Butonu (Masaüstü) -->
      <a href="https://wa.me/905526856907?text=Merhaba,%20Three%20Brothers%20salonunuzdan%20randevu%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" class="btn-header-wa" data-i18n="nav_book">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
        </svg>
        <span>Randevu Al</span>
      </a>

      <!-- Mobil Menü Butonu (Hamburger) -->
      <button id="openMobileMenuBtn" onclick="toggleMenu()" type="button" aria-label="Menüyü Aç" class="mobile-menu-btn">
        <span>MENU</span>
        <span style="display: inline-block; width: 16px; height: 1.5px; background-color: currentColor;"></span>
      </button>

    </div>

  </header>

  <!-- Menü Arka Plan Karartması (Backdrop) -->
  <div id="menu-backdrop" class="menu-backdrop" onclick="toggleMenu()"></div>

  <!-- Sağdan Açılan Lüks Menü Çekmecesi (Mobile Drawer) -->
  <aside id="side-drawer" class="side-drawer" aria-label="Gezinme Menüsü">
    <div class="drawer-header">
      <div class="drawer-brand">
        <h3 data-i18n="brand_name" class="notranslate" translate="no">Three Brothers</h3>
        <span data-i18n="brand_tagline">BAYAN KUAFÖRÜ · MANAVGAT</span>
      </div>
      <button class="drawer-close-btn" onclick="toggleMenu()" aria-label="Menüyü Kapat">
        ✕
      </button>
    </div>

    <nav class="drawer-nav">
      <!-- Ana Navigasyon Linkleri -->
      <ul class="drawer-main-links">
        <li><a href="index.html#hero" onclick="toggleMenu()"><span data-i18n="nav_home">Ana Sayfa</span> <span class="arrow">&rarr;</span></a></li>
        <li><a href="hakkimizda.html"><span data-i18n="nav_story">Hakkımızda</span> <span class="arrow">&rarr;</span></a></li>
        <li><a href="index.html#hizmetler" onclick="toggleMenu()"><span data-i18n="nav_services">Hizmetlerimiz</span> <span class="arrow">&rarr;</span></a></li>
        <li><a href="index.html#surec" onclick="toggleMenu()"><span data-i18n="nav_process">Süreç</span> <span class="arrow">&rarr;</span></a></li>
        <li><a href="index.html#galeri" onclick="toggleMenu()"><span data-i18n="nav_gallery">Galeri</span> <span class="arrow">&rarr;</span></a></li>
        <li><a href="index.html#yorumlar" onclick="toggleMenu()"><span data-i18n="nav_reviews">Yorumlar</span> <span class="arrow">&rarr;</span></a></li>
        <li><a href="index.html#sss" onclick="toggleMenu()"><span data-i18n="nav_faq">SSS</span> <span class="arrow">&rarr;</span></a></li>
        <li><a href="index.html#iletisim" onclick="toggleMenu()"><span data-i18n="nav_contact">İletişim</span> <span class="arrow">&rarr;</span></a></li>
      </ul>

      <!-- Hizmetler Hap Butonları (Pill Buttons) -->
      <div class="drawer-services-section">
        <span class="drawer-section-tag" data-i18n="drawer_services_tag">ÖZEL HİZMETLERİMİZ</span>
        <div class="drawer-pills-grid">
          <a href="balyaj.html" class="drawer-pill" data-i18n="srv1_title">Profesyonel Balyaj</a>
          <a href="blonde.html" class="drawer-pill" data-i18n="srv3_title">Blonde & Sarı Saç</a>
          <a href="kaynak.html" class="drawer-pill" data-i18n="srv5_title">Mikro Kaynak</a>
          <a href="ombre.html" class="drawer-pill" data-i18n="reels2_badge">Ombre & Sombre</a>
          <a href="renklendirme.html" class="drawer-pill" data-i18n="srv2_title">Kişiye Özel Renklendirme</a>
        </div>
      </div>

      <!-- Alt İletişim & Aksiyon Bilgisi -->
      <div class="drawer-footer-info">
        <div class="drawer-contact-line">+90 552 685 69 07</div>
        <div class="drawer-hours-line" data-i18n="footer_hours">Salı – Pazar | 08:30 – 20:30 (Pazartesi Kapalı)</div>
        
        <div class="drawer-action-btns">
          <a href="tel:+905526856907" class="drawer-btn-outline" data-i18n="c_btn_call">Hemen Ara</a>
          <a href="https://wa.me/905526856907?text=Merhaba,%20Three%20Brothers%20salonunuzdan%20randevu%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" class="drawer-btn-outline" data-i18n="c_btn_wa">WhatsApp Randevu</a>
          <a href="https://maps.google.com/?cid=16986332279537405342" target="_blank" rel="noopener noreferrer" class="drawer-btn-outline" data-i18n="c_btn_maps">Konum & Yol Tarifi</a>
        </div>
      </div>
    </nav>
  </aside>`;

const mobileFloatBar = `  <!-- ==========================================
       11. MOBILE FLOATING ACTION BAR (STICKY BOTTOM)
  =========================================== -->
  <div class="mobile-float-bar" aria-label="Mobil Hızlı Eylem Çubuğu">
    <a href="tel:+905526856907" class="mobile-float-btn mobile-call-btn" aria-label="Telefonla Hemen Arayın">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/>
      </svg>
      <span data-i18n="c_btn_call">Hemen Ara</span>
    </a>
    <a href="https://wa.me/905526856907?text=Merhaba,%20Three%20Brothers%20salonunuzdan%20randevu%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" class="mobile-float-btn mobile-wa-btn" aria-label="WhatsApp ile Randevu Al">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
      </svg>
      <span data-i18n="floating_wa">WhatsApp Randevu</span>
    </a>
  </div>`;

for (const p of servicePages) {
  const filePath = path.join(__dirname, '../', p.file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Replace Instagram handle
  content = content.replace(/@threebrotherss/g, '@threebrotherrrs');

  // Replace Header & Drawer if existing
  const headerSearch = /<!-- =+[\s\S]*?1\. ÜST HEADER[\s\S]*?<\/aside>/i;
  if (headerSearch.test(content)) {
    content = content.replace(headerSearch, headerTemplate);
  }

  // Check if mobile float bar exists, otherwise insert before </body>
  if (!content.includes('mobile-float-bar')) {
    content = content.replace('</body>', `${mobileFloatBar}\n</body>`);
  }

  // Update specific CTA WhatsApp links if they exist
  if (p.waText) {
    content = content.replace(/https:\/\/wa\.me\/905526856907\?text=[^"'\s]*/g, `https://wa.me/905526856907?text=${p.waText}`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  const pubPath = path.join(__dirname, '../public/', p.file);
  fs.writeFileSync(pubPath, content, 'utf8');
  console.log(`Updated ${p.file}`);
}
