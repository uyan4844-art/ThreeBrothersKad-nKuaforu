const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
const publicIndexPath = path.join(__dirname, '../public/index.html');

// Read the base HTML
let html = fs.readFileSync(indexPath, 'utf8');

// The CSS styles for the new editorial sections
const editorialSectionsCss = `
    /* === SHINE HAIR BENCHMARK EDITORIAL SECTIONS STYLING === */
    
    /* 1. Profesyonel Teknikler Section (#teknikler) */
    .section-teknikler {
      background-color: #FAF7F2;
      border-bottom: 1px solid rgba(197, 168, 128, 0.22);
      padding: 90px 24px;
    }

    .tech-grid {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 60px;
      align-items: center;
    }

    .tech-content-box {
      text-align: left;
    }

    .tech-kicker {
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #A48358;
      display: block;
      margin-bottom: 14px;
    }

    .tech-title {
      font-family: var(--font-serif);
      font-size: clamp(2.4rem, 4.2vw, 3.4rem);
      font-weight: 800;
      color: #1F1C19;
      line-height: 1.15;
      letter-spacing: -0.02em;
      margin-bottom: 24px;
    }

    .tech-desc {
      font-size: 1.05rem;
      line-height: 1.8;
      color: #5A554E;
      margin-bottom: 18px;
    }

    .tech-visual-frame {
      border-radius: 18px;
      overflow: hidden;
      box-shadow: 0 20px 45px rgba(116, 109, 101, 0.12);
      border: 1px solid rgba(197, 168, 128, 0.35);
      aspect-ratio: 4 / 3;
      background: #EFE8DF;
      position: relative;
    }

    .tech-visual-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 20%;
      display: block;
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .tech-visual-frame:hover img {
      transform: scale(1.03);
    }

    /* 2. Önce Sağlık, Sonra Güzellik (Dark Section - #felsefe) */
    .section-felsefe {
      background-color: #141210 !important;
      color: #FAF7F2;
      border-top: 1px solid rgba(197, 168, 128, 0.2);
      border-bottom: 1px solid rgba(197, 168, 128, 0.2);
      padding: 100px 24px;
    }

    .felsefe-grid {
      display: grid;
      grid-template-columns: 0.9fr 1.1fr;
      gap: 60px;
      align-items: center;
    }

    .felsefe-visual-frame {
      border-radius: 18px;
      overflow: hidden;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.45);
      border: 1px solid rgba(197, 168, 128, 0.3);
      aspect-ratio: 4 / 3;
      background: #1F1C19;
      position: relative;
    }

    .felsefe-visual-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .felsefe-visual-frame:hover img {
      transform: scale(1.03);
    }

    .felsefe-kicker {
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #C5A880;
      display: block;
      margin-bottom: 14px;
    }

    .felsefe-title {
      font-family: var(--font-serif);
      font-size: clamp(2.4rem, 4.2vw, 3.4rem);
      font-weight: 800;
      color: #FFFFFF;
      line-height: 1.15;
      letter-spacing: -0.02em;
      margin-bottom: 24px;
    }

    .felsefe-desc {
      font-size: 1.05rem;
      line-height: 1.8;
      color: rgba(250, 247, 242, 0.85);
      margin-bottom: 18px;
    }

    .felsefe-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin-top: 14px;
      font-size: 0.95rem;
      font-weight: 700;
      color: #FFFFFF;
      text-decoration: none;
      border-bottom: 2px solid #C5A880;
      padding-bottom: 4px;
      transition: all 0.25s ease;
    }

    .felsefe-link:hover {
      color: #C5A880;
      gap: 12px;
    }

    /* 3. Manavgat Eskihisar'da Profesyonel Dokunuş (#eskihisar) */
    .section-eskihisar {
      background-color: #FAF7F2;
      border-bottom: 1px solid rgba(197, 168, 128, 0.22);
      padding: 95px 24px;
    }

    .eskihisar-grid {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 60px;
      align-items: center;
    }

    .eskihisar-kicker {
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #A48358;
      display: block;
      margin-bottom: 14px;
    }

    .eskihisar-title {
      font-family: var(--font-serif);
      font-size: clamp(2.4rem, 4.2vw, 3.4rem);
      font-weight: 800;
      color: #1F1C19;
      line-height: 1.15;
      letter-spacing: -0.02em;
      margin-bottom: 24px;
    }

    .eskihisar-desc {
      font-size: 1.05rem;
      line-height: 1.8;
      color: #5A554E;
    }

    .eskihisar-cards-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .eskihisar-feature-card {
      background: #FFFFFF;
      border: 1px solid rgba(197, 168, 128, 0.35);
      border-radius: 14px;
      padding: 24px 28px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.03);
      transition: all 0.3s ease;
    }

    .eskihisar-feature-card:hover {
      border-color: #C5A880;
      transform: translateY(-3px);
      box-shadow: 0 14px 32px rgba(197, 168, 128, 0.15);
    }

    .eskihisar-feature-card h4 {
      font-family: var(--font-serif);
      font-size: 1.25rem;
      font-weight: 700;
      color: #1F1C19;
      margin-bottom: 6px;
    }

    .eskihisar-feature-card p {
      font-size: 0.92rem;
      line-height: 1.6;
      color: #635E57;
      margin: 0;
    }

    /* 4. Kişiye Özel Stil Danışmanlığı (#danismanlik) */
    .section-danismanlik {
      background-color: #F8F5F0;
      border-bottom: 1px solid rgba(197, 168, 128, 0.22);
      padding: 95px 24px;
    }

    .consult-grid {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 60px;
      align-items: center;
    }

    .consult-kicker {
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #A48358;
      display: block;
      margin-bottom: 14px;
    }

    .consult-title {
      font-family: var(--font-serif);
      font-size: clamp(2.4rem, 4.2vw, 3.4rem);
      font-weight: 800;
      color: #1F1C19;
      line-height: 1.15;
      letter-spacing: -0.02em;
      margin-bottom: 24px;
    }

    .consult-desc {
      font-size: 1.05rem;
      line-height: 1.8;
      color: #5A554E;
    }

    .consult-stat-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .consult-stat-card {
      background: #FFFFFF;
      border: 1px solid rgba(197, 168, 128, 0.35);
      border-radius: 16px;
      padding: 28px 24px;
      text-align: left;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.03);
      transition: all 0.3s ease;
    }

    .consult-stat-card:hover {
      border-color: #C5A880;
      transform: translateY(-3px);
      box-shadow: 0 14px 32px rgba(197, 168, 128, 0.15);
    }

    .consult-stat-val {
      font-family: var(--font-serif);
      font-size: 2.2rem;
      font-weight: 800;
      color: #1F1C19;
      line-height: 1.1;
      margin-bottom: 8px;
    }

    .consult-stat-label {
      font-size: 0.88rem;
      line-height: 1.5;
      color: #635E57;
    }

    /* 5. Neden Biz? (#neden-biz) */
    .section-neden-biz {
      background-color: #FAF7F2;
      border-bottom: 1px solid rgba(197, 168, 128, 0.22);
      padding: 100px 24px;
    }

    .why-header {
      text-align: center;
      max-width: 800px;
      margin: 0 auto 56px;
    }

    .why-kicker {
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #A48358;
      display: block;
      margin-bottom: 14px;
    }

    .why-title {
      font-family: var(--font-serif);
      font-size: clamp(2.4rem, 4.2vw, 3.4rem);
      font-weight: 800;
      color: #1F1C19;
      line-height: 1.15;
      letter-spacing: -0.02em;
    }

    .why-cards-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .why-card {
      background: #FFFFFF;
      border: 1px solid rgba(197, 168, 128, 0.35);
      border-radius: 18px;
      padding: 36px 30px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
      display: flex;
      flex-direction: column;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .why-card:hover {
      border-color: #C5A880;
      transform: translateY(-5px);
      box-shadow: 0 18px 45px rgba(197, 168, 128, 0.18);
    }

    .why-card-num {
      font-family: var(--font-serif);
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: 2px;
      color: #A48358;
      margin-bottom: 20px;
      display: block;
    }

    .why-card-title {
      font-family: var(--font-serif);
      font-size: 1.45rem;
      font-weight: 700;
      color: #1F1C19;
      margin-bottom: 12px;
    }

    .why-card-desc {
      font-size: 0.95rem;
      line-height: 1.7;
      color: #635E57;
      margin: 0;
    }

    /* Mobile Adaptations for New Editorial Sections */
    @media (max-width: 1024px) {
      .tech-grid,
      .felsefe-grid,
      .eskihisar-grid,
      .consult-grid {
        grid-template-columns: 1fr !important;
        gap: 36px !important;
      }

      .why-cards-grid {
        grid-template-columns: 1fr !important;
        gap: 18px !important;
      }
    }

    @media (max-width: 768px) {
      .section-teknikler,
      .section-felsefe,
      .section-eskihisar,
      .section-danismanlik,
      .section-neden-biz {
        padding: 50px 16px !important;
      }

      .tech-visual-frame,
      .felsefe-visual-frame {
        aspect-ratio: 4 / 3 !important;
        width: 100% !important;
      }

      .consult-stat-grid {
        grid-template-columns: 1fr !important;
        gap: 12px !important;
      }

      .consult-stat-card {
        padding: 20px 18px !important;
      }

      .why-card {
        padding: 26px 20px !important;
      }
    }
`;

// Insert the CSS before </style>
if (!html.includes('/* === SHINE HAIR BENCHMARK EDITORIAL SECTIONS STYLING === */')) {
  html = html.replace('</style>', `${editorialSectionsCss}\n  </style>`);
}

// Build the ordered HTML body sections
const orderedSections = `
  <!-- ==========================================
       1. HİZMETLERİMİZ (BENTO MOSAIC)
  =========================================== -->
  <section id="hizmetler" class="boutique-section section-hizmetler">
    <div class="services-container">

      <div class="services-header reveal-up">
        <span class="section-kicker" data-i18n="services_kicker">UZMANLIK ALANLARIMIZ</span>
        <h2 data-i18n="services_title">Kişiye Özel Profesyonel Dokunuşlar</h2>
        <p data-i18n="services_desc">
          Renk, form ve bakımda doğal görünümü modern kuaförlük teknikleriyle buluşturuyoruz.
        </p>
      </div>

      <!-- 3 Sütunlu Asimetrik Bento Grid -->
      <div class="bento-mosaic" id="servicesBentoMosaic">

        <!-- 1. Sol Büyük Kart (Tall - Row Span 2) - 5.jpeg -->
        <a href="balyaj.html" class="bento-item tall reveal-stagger-item">
          <img src="./images/services/bento-5.webp" alt="Profesyonel Balyaj & Sarı Saç" />
          <div class="bento-overlay">
            <h3 data-i18n="srv1_title">Profesyonel Balyaj & Sarı Saç</h3>
          </div>
        </a>

        <!-- 2. Sağ Üst 1. Kart - 2.jpeg -->
        <a href="blonde.html" class="bento-item reveal-stagger-item">
          <img src="./images/services/bento-2.webp" alt="Blonde & İpeksi Renk Tasarımı" />
          <div class="bento-overlay">
            <h3 data-i18n="srv3_title">Blonde & İpeksi Renk Tasarımı</h3>
          </div>
        </a>

        <!-- 3. Sağ Üst 2. Kart - 6.jpeg -->
        <a href="kaynak.html" class="bento-item reveal-stagger-item">
          <img src="./images/services/bento-6.webp" alt="Mikro Kapsül Kaynak" />
          <div class="bento-overlay">
            <h3 data-i18n="srv5_title">Mikro Kapsül Kaynak</h3>
          </div>
        </a>

        <!-- 4. Sağ Alt 1. Kart - 4.jpeg -->
        <a href="ombre.html" class="bento-item reveal-stagger-item">
          <img src="./images/services/bento-4.webp" alt="Ombre & Sombre Geçişleri" />
          <div class="bento-overlay">
            <h3 data-i18n="reels2_badge">Ombre & Sombre Geçişleri</h3>
          </div>
        </a>

        <!-- 5. Sağ Alt 2. Kart - 1.jpeg -->
        <a href="renklendirme.html" class="bento-item reveal-stagger-item">
          <img src="./images/services/bento-1.webp" alt="Kişiye Özel Renklendirme & Tonlama" />
          <div class="bento-overlay">
            <h3 data-i18n="srv2_title">Kişiye Özel Renklendirme & Tonlama</h3>
          </div>
        </a>

      </div>

    </div>
  </section>

  <!-- ==========================================
       2. PROFESYONEL RENKLENDİRME TEKNİKLERİ
  =========================================== -->
  <section id="teknikler" class="boutique-section section-teknikler">
    <div class="section-container">
      <div class="tech-grid reveal-up">

        <!-- Sol: Metin & Editoryal Tipografi -->
        <div class="tech-content-box">
          <span class="tech-kicker" data-i18n="tech_kicker">PROFESYONEL RENKLENDİRME TEKNİKLERİ</span>
          <h2 class="tech-title" data-i18n="tech_title">
            Ombre, Sombre ve Balyaj ile Saçlarınızda Doğal Işıltı
          </h2>
          <p class="tech-desc" data-i18n="tech_p1">
            Manavgat’ta doğal geçişler ve göz alıcı parlaklık arıyorsanız doğru yerdesiniz. Three Brothers olarak Ombre, Sombre, Balyaj ve Blonde uygulamalarında saç sağlığınızı koruyan profesyonel ürünler ve modern teknikler kullanıyoruz.
          </p>
          <p class="tech-desc" data-i18n="tech_p2">
            Saç tellerinizin yıpranmasına izin vermeden, yüz hatlarınıza en çok yakışan tonları birlikte belirliyoruz. Amacımız yalnızca güzel bir görünüm değil, sağlıklı ve uzun süre keyifle kullanabileceğiniz bir saç tasarımı sunmak.
          </p>
        </div>

        <!-- Sağ: Model & Saç Fotoğrafı -->
        <div>
          <div class="tech-visual-frame">
            <img src="./images/gallery/gallery-1.webp" alt="Three Brothers Ombre ve Balyaj Sanatı" loading="lazy" />
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ==========================================
       3. ÖNCE SAĞLIK, SONRA GÜZELLİK (DARK KONTRAST)
  =========================================== -->
  <section id="felsefe" class="boutique-section section-felsefe">
    <div class="section-container">
      <div class="felsefe-grid reveal-up">

        <!-- Sol: Gerçek Salon Fotoğrafı -->
        <div>
          <div class="felsefe-visual-frame">
            <img src="./images/story-salon.webp" alt="Three Brothers Manavgat Bayan Kuaförü" loading="lazy" />
          </div>
        </div>

        <!-- Sağ: Koyu Kontrast İletişim Metinleri -->
        <div>
          <span class="felsefe-kicker" data-i18n="health_kicker">ÖNCE SAĞLIK, SONRA GÜZELLİK</span>
          <h2 class="felsefe-title" data-i18n="health_title">
            Saç Analizi ve Dürüst Hizmet Anlayışı
          </h2>
          <p class="felsefe-desc" data-i18n="health_p1">
            Manavgat’ta güvenebileceğiniz bir saç tasarım deneyimi için işlem öncesinde saç yapınızı analiz ediyoruz. Yıpranacak bir işleme girmek yerine, sizi dürüstçe bilgilendiriyor ve saçınız için en doğru alternatifi öneriyoruz.
          </p>
          <p class="felsefe-desc" data-i18n="health_p2">
            Dürüstlük, hijyen ve şeffaflık Three Brothers’ın temelidir. Saçınıza zarar verecek hiçbir adımı atmıyor, sağlıklı ve sürdürülebilir sonuçlara odaklanıyoruz.
          </p>
          <a href="https://wa.me/905526856907?text=Merhaba,%20Three%20Brothers%20salonunuzdan%20ön%20görüşme%20ve%20saç%20analizi%20için%20randevu%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" class="felsefe-link">
            <span data-i18n="health_btn">Ön Görüşme İçin İletişime Geç</span>
            <span>&rarr;</span>
          </a>
        </div>

      </div>
    </div>
  </section>

  <!-- ==========================================
       4. MANAVGAT ESKİHİSAR'DA PROFESYONEL DOKUNUŞ
  =========================================== -->
  <section id="eskihisar" class="boutique-section section-eskihisar">
    <div class="section-container">
      <div class="eskihisar-grid reveal-up">

        <!-- Sol: Başlık & Açıklama -->
        <div>
          <span class="eskihisar-kicker" data-i18n="eskihisar_kicker">MANAVGAT ESKİHİSAR'DA PROFESYONEL DOKUNUŞ</span>
          <h2 class="eskihisar-title" data-i18n="eskihisar_title">
            Yıpranmış Saçlara Transparan Boya Çözümleri
          </h2>
          <p class="eskihisar-desc" data-i18n="eskihisar_p1">
            Manavgat Eskihisar Mahallesi’ndeki salonumuzda, özellikle ağır kimyasal süreçlerden yorulmuş saçlar için uzman çözümler sunuyoruz. Saçın kendi doğal tonuna uygun transparan boya teknikleriyle yıpranmış telleri yeniden canlandırıyoruz.
          </p>
        </div>

        <!-- Sağ: 3'lü Beyaz Bilgi Kartları -->
        <div class="eskihisar-cards-list">
          
          <div class="eskihisar-feature-card reveal-stagger-item">
            <h4 data-i18n="eskihisar_c1_title">Doğal Ton Uyumu</h4>
            <p data-i18n="eskihisar_c1_desc">Saç renginize ve cilt tonunuza uygun geçişler.</p>
          </div>

          <div class="eskihisar-feature-card reveal-stagger-item">
            <h4 data-i18n="eskihisar_c2_title">Saç Sağlığı Odaklı İşlem</h4>
            <p data-i18n="eskihisar_c2_desc">Yıpranmayı azaltan profesyonel yaklaşım.</p>
          </div>

          <div class="eskihisar-feature-card reveal-stagger-item">
            <h4 data-i18n="eskihisar_c3_title">Modern Teknikler</h4>
            <p data-i18n="eskihisar_c3_desc">Ombre, Sombre, Balyaj ve Blonde uygulamalarında uzmanlık.</p>
          </div>

        </div>

      </div>
    </div>
  </section>

  <!-- ==========================================
       5. KİŞİYE ÖZEL STİL DANIŞMANLIĞI
  =========================================== -->
  <section id="danismanlik" class="boutique-section section-danismanlik">
    <div class="section-container">
      <div class="consult-grid reveal-up">

        <!-- Sol: Başlık & Metin -->
        <div>
          <span class="consult-kicker" data-i18n="consult_kicker">KİŞİYE ÖZEL STİL DANIŞMANLIĞI</span>
          <h2 class="consult-title" data-i18n="consult_title">
            Sizi Dinliyor, Saçlarınızı Analiz Ediyoruz
          </h2>
          <p class="consult-desc" data-i18n="consult_p1">
            Bizim için her misafir bir dosttur. Beklentilerinizi dinliyor, saç yapınızı inceliyor ve birlikte en doğru kararı veriyoruz. Manavgat’ın merkezinde profesyonel kuaförlük hizmetini samimiyet ve uzmanlıkla birleştiriyoruz.
          </p>
        </div>

        <!-- Sağ: 2x2 Metrik / Güven Kartları -->
        <div class="consult-stat-grid">

          <div class="consult-stat-card reveal-stagger-item">
            <div class="consult-stat-val" data-i18n="consult_card1_num">2014</div>
            <div class="consult-stat-label" data-i18n="consult_card1_label">Yılından bu yana tecrübe</div>
          </div>

          <div class="consult-stat-card reveal-stagger-item">
            <div class="consult-stat-val" data-i18n="consult_card2_title">Hijyen</div>
            <div class="consult-stat-label" data-i18n="consult_card2_label">Salonumuzun değişmez standardı</div>
          </div>

          <div class="consult-stat-card reveal-stagger-item">
            <div class="consult-stat-val" data-i18n="consult_card3_title">Analiz</div>
            <div class="consult-stat-label" data-i18n="consult_card3_label">Her işlem öncesi kişiye özel değerlendirme</div>
          </div>

          <div class="consult-stat-card reveal-stagger-item">
            <div class="consult-stat-val" data-i18n="consult_card4_title">Güven</div>
            <div class="consult-stat-label" data-i18n="consult_card4_label">Dürüst ve şeffaf hizmet yaklaşımı</div>
          </div>

        </div>

      </div>
    </div>
  </section>

  <!-- ==========================================
       6. NEDEN BİZ? (NEDEN THREE BROTHERS?)
  =========================================== -->
  <section id="neden-biz" class="boutique-section section-neden-biz">
    <div class="section-container">

      <div class="why-header reveal-up">
        <span class="why-kicker" data-i18n="why_kicker">NEDEN THREE BROTHERS?</span>
        <h2 class="why-title" data-i18n="why_title">Manavgat’ta Güven Veren Saç Tasarım Deneyimi</h2>
      </div>

      <div class="why-cards-grid">

        <!-- Kart 01 -->
        <div class="why-card reveal-stagger-item">
          <span class="why-card-num" data-i18n="why_c1_num">01</span>
          <h3 class="why-card-title" data-i18n="why_c1_title">Uzman Analiz</h3>
          <p class="why-card-desc" data-i18n="why_c1_desc">
            Saç stilistlerimizin 2014'ten bu yana süregelen tecrübesiyle, saç yapınızı bozmadan en doğru işlemi belirliyoruz.
          </p>
        </div>

        <!-- Kart 02 -->
        <div class="why-card reveal-stagger-item">
          <span class="why-card-num" data-i18n="why_c2_num">02</span>
          <h3 class="why-card-title" data-i18n="why_c2_title">Önce Hijyen</h3>
          <p class="why-card-desc" data-i18n="why_c2_desc">
            Salonumuzda hijyen kuralları bir seçenek değil, sizin sağlığınız için değişmez bir standarttır.
          </p>
        </div>

        <!-- Kart 03 -->
        <div class="why-card reveal-stagger-item">
          <span class="why-card-num" data-i18n="why_c3_num">03</span>
          <h3 class="why-card-title" data-i18n="why_c3_title">Güven ve Samimiyet</h3>
          <p class="why-card-desc" data-i18n="why_c3_desc">
            Saçınıza zarar verecek hiçbir adımı atmıyor, size en doğru sonucu samimiyetle sunuyoruz.
          </p>
        </div>

      </div>

    </div>
  </section>

  <!-- ==========================================
       7. 4 ADIMDA SÜREÇ & ONARIM VİTRİNİ
  =========================================== -->
  <section id="surec" class="boutique-section section-process">
    <div class="section-container">

      <!-- Section Header -->
      <div class="section-header-center reveal-up">
        <span class="section-kicker" data-i18n="process_kicker">PROFESYONEL DENEYİM & SÜREÇ</span>
        <h2 class="section-title" data-i18n="process_title">4 Adımda Kusursuz ve Sağlıklı Saç Tasarımı</h2>
        <p class="section-desc" data-i18n="process_desc">
          Three Brothers stüdyomuzda saç sağlığınızı asla riske atmayan, bilimsel ve sanatsal 4 aşamalı yaklaşımımız.
        </p>
      </div>

      <!-- 4-Step Process Grid -->
      <div class="process-timeline-grid">

        <div class="process-step-card reveal-stagger-item">
          <div class="process-step-badge" data-i18n="step1_num">01</div>
          <h3 class="process-step-title" data-i18n="step1_title">Saç Yapısı Analizi & Konsültasyon</h3>
          <p class="process-step-desc" data-i18n="step1_desc">İşlem öncesinde saçınızın geçmiş kimyasal geçmişi, elastikiyeti ve ten renginiz detaylıca incelenir.</p>
        </div>

        <div class="process-step-card reveal-stagger-item">
          <div class="process-step-badge" data-i18n="step2_num">02</div>
          <h3 class="process-step-title" data-i18n="step2_title">Kişiye Özel Formülasyon</h3>
          <p class="process-step-desc" data-i18n="step2_desc">Saç tellerini koruyan bağ güçlendirici formüller ve yüz hatlarınıza en çok yakışan tonlar belirlenir.</p>
        </div>

        <div class="process-step-card reveal-stagger-item">
          <div class="process-step-badge" data-i18n="step3_num">03</div>
          <h3 class="process-step-title" data-i18n="step3_title">Hassas & Usta Uygulama</h3>
          <p class="process-step-desc" data-i18n="step3_desc">Balyaj, blonde veya ombre tekniği saçın biyolojik yapısını yormadan milimetrik özenle uygulanır.</p>
        </div>

        <div class="process-step-card reveal-stagger-item">
          <div class="process-step-badge" data-i18n="step4_num">04</div>
          <h3 class="process-step-title" data-i18n="step4_title">Parlaklık & Ev Bakım Rehberi</h3>
          <p class="process-step-desc" data-i18n="step4_desc">Rengin ışıltısını ve saçınızın ipeksi dokusunu aylarca korumanız için kişisel bakım önerileri sunulur.</p>
        </div>

      </div>

      <!-- Repair Callout Box -->
      <div class="repair-callout-box reveal-up">
        <div>
          <span class="section-kicker" style="color: #A48358;" data-i18n="repair_kicker">ÖZEL UZMANLIK & RENK DÜZELTME</span>
          <h3 style="font-family: var(--font-serif); font-size: clamp(24px, 2.5vw, 32px); color: #1F1C19; margin-bottom: 14px; font-weight: 700;" data-i18n="repair_title">
            Yıpranmış ve Yorulmuş Saçlar İçin Transparan Boya Çözümleri
          </h3>
          <p style="color: #635E57; font-size: 15px; line-height: 1.7; margin-bottom: 24px;" data-i18n="repair_desc">
            Ağır kimyasal işlemlerden yıpranmış veya matlaşmış saçlar için saçın doğal tonuna saygılı, bağ onarıcı ve transparan renklendirme teknikleriyle saça yeniden hayat veriyoruz.
          </p>
          <a href="https://wa.me/905526856907?text=Merhaba,%20yıpranmış%20saçlarım%20için%20transparan%20boya%20ve%20onarım%20hakkında%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" class="btn-espresso-luxury" data-i18n="repair_btn">
            <span>Ön Görüşme ve Analiz Randevusu Al</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        <div class="repair-badges-list">
          <div class="repair-badge-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span data-i18n="repair_badge1">Doğal Ton Uyumu & Canlılık</span>
          </div>
          <div class="repair-badge-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span data-i18n="repair_badge2">Sıfır Yıpranma & Bağ Koruma</span>
          </div>
          <div class="repair-badge-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span data-i18n="repair_badge3">Dürüst & Şeffaf Değerlendirme</span>
          </div>
        </div>
      </div>

    </div>
  </section>
`;

// Replace from end of #hero up to #reels
const heroEndTag = '</section>';
const heroIndex = html.indexOf('id="hero"');
const heroEndIndex = html.indexOf(heroEndTag, heroIndex) + heroEndTag.length;
const reelsIndex = html.indexOf('id="reels"');
const reelsSectionTagIndex = html.lastIndexOf('<section', reelsIndex);

if (heroEndIndex !== -1 && reelsSectionTagIndex !== -1) {
  html = html.slice(0, heroEndIndex) + '\n' + orderedSections + '\n' + html.slice(reelsSectionTagIndex);
}

// Write the updated HTML
fs.writeFileSync(indexPath, html, 'utf8');
fs.writeFileSync(publicIndexPath, html, 'utf8');

console.log('Successfully structured sections under hero in index.html and public/index.html!');
