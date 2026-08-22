const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
const publicIndexPath = path.join(__dirname, '../public/index.html');

let html = fs.readFileSync(indexPath, 'utf8');

// The updated, streamlined CSS for refactored sections
const refactoredCss = `
    /* === REFACTORED SECTIONS STYLING (THREE BROTHERS LUXURY DESIGN) === */

    /* 1. Transparan Renklendirme ve Bağ Koruma (#teknikler) */
    .section-teknikler {
      background-color: #FAF7F2;
      border-bottom: 1px solid rgba(197, 168, 128, 0.22);
      padding: 95px 24px;
    }

    .tech-grid-merged {
      display: grid;
      grid-template-columns: 1.05fr 0.95fr;
      gap: 60px;
      align-items: center;
      max-width: 1240px;
      margin: 0 auto;
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
      font-size: clamp(2.4rem, 4vw, 3.4rem);
      font-weight: 800;
      color: #1F1C19;
      line-height: 1.15;
      letter-spacing: -0.02em;
      margin-bottom: 22px;
    }

    .tech-desc {
      font-size: 1.05rem;
      line-height: 1.75;
      color: #5A554E;
      margin-bottom: 28px;
    }

    .tech-feature-cards {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .tech-feature-card {
      background: #FFFFFF;
      border: 1px solid rgba(197, 168, 128, 0.35);
      border-radius: 16px;
      padding: 24px 26px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .tech-feature-card:hover {
      border-color: #C5A880;
      transform: translateY(-3px);
      box-shadow: 0 14px 35px rgba(197, 168, 128, 0.16);
    }

    .tech-feature-card h4 {
      font-family: var(--font-serif);
      font-size: 1.25rem;
      font-weight: 700;
      color: #1F1C19;
      margin-bottom: 6px;
    }

    .tech-feature-card p {
      font-size: 0.92rem;
      line-height: 1.6;
      color: #635E57;
      margin: 0;
    }

    /* 2. Önce Sağlık, Sonra Güzellik (#felsefe) - Dark Contrast */
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
      max-width: 1240px;
      margin: 0 auto;
    }

    .felsefe-visual-frame {
      border-radius: 18px;
      overflow: hidden;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(197, 168, 128, 0.35);
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
      font-size: clamp(2.4rem, 4vw, 3.4rem);
      font-weight: 800;
      color: #FFFFFF;
      line-height: 1.15;
      letter-spacing: -0.02em;
      margin-bottom: 22px;
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

    /* 3. Güven & Kalite Standartlarımız (Neden Three Brothers? - #neden-biz) */
    .section-neden-biz {
      background-color: #FAF7F2;
      border-bottom: 1px solid rgba(197, 168, 128, 0.22);
      padding: 100px 24px;
    }

    .trust-grid-merged {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
      max-width: 1240px;
      margin: 0 auto;
    }

    .trust-content-box {
      text-align: left;
    }

    .trust-kicker {
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #A48358;
      display: block;
      margin-bottom: 14px;
    }

    .trust-title {
      font-family: var(--font-serif);
      font-size: clamp(2.4rem, 4vw, 3.4rem);
      font-weight: 800;
      color: #1F1C19;
      line-height: 1.15;
      letter-spacing: -0.02em;
      margin-bottom: 22px;
    }

    .trust-desc {
      font-size: 1.05rem;
      line-height: 1.75;
      color: #5A554E;
      margin-bottom: 28px;
    }

    .trust-cards-2x2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .trust-metric-card {
      background: #FFFFFF;
      border: 1px solid rgba(197, 168, 128, 0.35);
      border-radius: 16px;
      padding: 26px 22px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      display: flex;
      flex-direction: column;
    }

    .trust-metric-card:hover {
      border-color: #C5A880;
      transform: translateY(-3px);
      box-shadow: 0 16px 40px rgba(197, 168, 128, 0.16);
    }

    .trust-card-top-val {
      font-family: var(--font-serif);
      font-size: 1.85rem;
      font-weight: 800;
      color: #A48358;
      line-height: 1.1;
      margin-bottom: 8px;
    }

    .trust-card-title {
      font-family: var(--font-serif);
      font-size: 1.15rem;
      font-weight: 700;
      color: #1F1C19;
      margin-bottom: 6px;
      line-height: 1.25;
    }

    .trust-card-desc {
      font-size: 0.88rem;
      line-height: 1.55;
      color: #635E57;
      margin: 0;
    }

    /* Responsive Adaptations */
    @media (max-width: 1024px) {
      .tech-grid-merged,
      .felsefe-grid,
      .trust-grid-merged {
        grid-template-columns: 1fr !important;
        gap: 40px !important;
      }
    }

    @media (max-width: 768px) {
      .section-teknikler,
      .section-felsefe,
      .section-neden-biz {
        padding: 55px 16px !important;
      }

      .tech-title,
      .felsefe-title,
      .trust-title {
        font-size: clamp(26px, 6.8vw, 36px) !important;
        line-height: 1.18 !important;
      }

      .felsefe-visual-frame {
        aspect-ratio: 4 / 3 !important;
        width: 100% !important;
      }

      .trust-cards-2x2 {
        grid-template-columns: 1fr !important;
        gap: 12px !important;
      }

      .trust-metric-card {
        padding: 22px 18px !important;
      }
    }
`;

// Replace previous custom styling block or append cleanly
if (html.includes('/* === SHINE HAIR BENCHMARK EDITORIAL SECTIONS STYLING === */')) {
  const startPos = html.indexOf('/* === SHINE HAIR BENCHMARK EDITORIAL SECTIONS STYLING === */');
  const endPos = html.indexOf('</style>', startPos);
  html = html.slice(0, startPos) + refactoredCss + '\n  ' + html.slice(endPos);
} else {
  html = html.replace('</style>', `${refactoredCss}\n  </style>`);
}

// Build the refactored sections HTML
const refactoredSectionsHtml = `
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

        <!-- 1. Sol Büyük Kart (Tall - Row Span 2) -->
        <a href="balyaj.html" class="bento-item tall reveal-stagger-item">
          <img src="./images/services/bento-5.webp" alt="Profesyonel Balyaj & Sarı Saç" />
          <div class="bento-overlay">
            <h3 data-i18n="srv1_title">Profesyonel Balyaj & Sarı Saç</h3>
          </div>
        </a>

        <!-- 2. Sağ Üst 1. Kart -->
        <a href="blonde.html" class="bento-item reveal-stagger-item">
          <img src="./images/services/bento-2.webp" alt="Blonde & İpeksi Renk Tasarımı" />
          <div class="bento-overlay">
            <h3 data-i18n="srv3_title">Blonde & İpeksi Renk Tasarımı</h3>
          </div>
        </a>

        <!-- 3. Sağ Üst 2. Kart -->
        <a href="kaynak.html" class="bento-item reveal-stagger-item">
          <img src="./images/services/bento-6.webp" alt="Mikro Kapsül Kaynak" />
          <div class="bento-overlay">
            <h3 data-i18n="srv5_title">Mikro Kapsül Kaynak</h3>
          </div>
        </a>

        <!-- 4. Sağ Alt 1. Kart -->
        <a href="ombre.html" class="bento-item reveal-stagger-item">
          <img src="./images/services/bento-4.webp" alt="Ombre & Sombre Geçişleri" />
          <div class="bento-overlay">
            <h3 data-i18n="reels2_badge">Ombre & Sombre Geçişleri</h3>
          </div>
        </a>

        <!-- 5. Sağ Alt 2. Kart -->
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
       2. TRANSPARAN RENKLENDİRME & BAĞ KORUMA (BİRLEŞTİRİLMİŞ EDİTORYAL BÖLÜM)
  =========================================== -->
  <section id="teknikler" class="boutique-section section-teknikler">
    <div class="section-container">
      <div class="tech-grid-merged reveal-up">

        <!-- Sol: Başlık, Açıklama ve WhatsApp Aksiyonu -->
        <div class="tech-content-box">
          <span class="tech-kicker" data-i18n="tech_kicker">PROFESYONEL RENKLENDİRME & BAĞ KORUMA</span>
          <h2 class="tech-title" data-i18n="tech_title">
            Transparan Renklendirme ve Kişiye Özel Doğal Işıltı
          </h2>
          <p class="tech-desc" data-i18n="tech_desc">
            Manavgat Eskihisar’daki salonumuzda; Ombre, Sombre ve Balyaj uygulamalarını saçın bağ dokusunu koruyan transparan tekniklerle gerçekleştiriyoruz. Saç yapınızı yıpratmadan, yüz hatlarınıza ve ten renginize en çok yakışan sağlıklı tonları tasarlıyoruz.
          </p>
          <a href="https://wa.me/905526856907?text=Merhaba,%20Three%20Brothers%20salonunuzdan%20renklendirme%20ve%20saç%20analizi%20randevusu%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" class="btn-espresso-luxury">
            <span>WhatsApp ile Randevu Al</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        <!-- Sağ: 3'lü Beyaz Özellik Kartları -->
        <div class="tech-feature-cards">
          
          <div class="tech-feature-card reveal-stagger-item">
            <h4 data-i18n="tech_c1_title">Doğal Ton Uyumu</h4>
            <p data-i18n="tech_c1_desc">Saç renginize ve cilt alt tonunuza kusursuz uyum sağlayan geçişler.</p>
          </div>

          <div class="tech-feature-card reveal-stagger-item">
            <h4 data-i18n="tech_c2_title">Bağ Dokusu Koruma</h4>
            <p data-i18n="tech_c2_desc">Saç tellerini yıpranmaya karşı koruyan patentli ve kontrollü açma işlemi.</p>
          </div>

          <div class="tech-feature-card reveal-stagger-item">
            <h4 data-i18n="tech_c3_title">Modern Renk Tasarımı</h4>
            <p data-i18n="tech_c3_desc">Ombre, Sombre, Balyaj ve Bebek Sarısı uygulamalarında uzmanlık.</p>
          </div>

        </div>

      </div>
    </div>
  </section>

  <!-- ==========================================
       3. ÖNCE SAĞLIK, SONRA GÜZELLİK (KOYU KONTRAST BÖLÜM)
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

        <!-- Sağ: Koyu Zemin Üzeri Editoryal Metinler -->
        <div>
          <span class="felsefe-kicker" data-i18n="health_kicker">ÖNCE SAĞLIK, SONRA GÜZELLİK</span>
          <h2 class="felsefe-title" data-i18n="health_title">
            Saç Analizi ve Dürüst Hizmet Anlayışı
          </h2>
          <p class="felsefe-desc" data-i18n="health_p1">
            Manavgat’ta güvenebileceğiniz bir saç tasarım deneyimi için işlem öncesinde saç yapınızı detaylıca analiz ediyoruz. Yıpranacak veya saça zarar verecek hiçbir işleme onay vermeden, dürüstçe en sağlıklı alternatifi sunuyoruz.
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
       4. GÜVEN & KALİTE STANDARTLARIMIZ (BİRLEŞTİRİLMİŞ 4 KARTLI GÜVEN IZGARASI)
  =========================================== -->
  <section id="neden-biz" class="boutique-section section-neden-biz">
    <div class="section-container">
      <div class="trust-grid-merged reveal-up">

        <!-- Sol: Başlık & Giriş -->
        <div class="trust-content-box">
          <span class="trust-kicker" data-i18n="trust_kicker">GÜVEN & KALİTE STANDARTLARIMIZ</span>
          <h2 class="trust-title" data-i18n="trust_title">
            Manavgat’ta Güven Veren Saç Tasarım Deneyimi
          </h2>
          <p class="trust-desc" data-i18n="trust_desc">
            Three Brothers stüdyomuzda her misafirimiz için şeffaf, samimi ve tavizsiz standartlarla çalışıyoruz. Beklentilerinizi dinliyor, saçınız için en doğru kararı birlikte veriyoruz.
          </p>
          <a href="https://wa.me/905526856907?text=Merhaba,%20Three%20Brothers%20salonunuzdan%20danışmanlık%20ve%20randevu%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" class="btn-espresso-luxury">
            <span>Ön Görüşme & Randevu Al</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        <!-- Sağ: 2x2 Grid (4 Güven & Metrik Kartı) -->
        <div class="trust-cards-2x2">

          <!-- Kart 1: 2014 Tecrübe -->
          <div class="trust-metric-card reveal-stagger-item">
            <div class="trust-card-top-val" data-i18n="trust_c1_val">2014</div>
            <h3 class="trust-card-title" data-i18n="trust_c1_title">2014'ten Beri Tecrübe</h3>
            <p class="trust-card-desc" data-i18n="trust_c1_desc">Yılların ustalığıyla saç yapısını bozmadan en doğru işlemi uyguluyoruz.</p>
          </div>

          <!-- Kart 2: Birebir Saç Analizi -->
          <div class="trust-metric-card reveal-stagger-item">
            <div class="trust-card-top-val" data-i18n="trust_c2_val">Analiz</div>
            <h3 class="trust-card-title" data-i18n="trust_c2_title">Birebir Saç Analizi</h3>
            <p class="trust-card-desc" data-i18n="trust_c2_desc">Her işlem öncesi saçın elastikiyeti ve geçmişi detaylıca değerlendirilir.</p>
          </div>

          <!-- Kart 3: %100 Orijinal Ürünler -->
          <div class="trust-metric-card reveal-stagger-item">
            <div class="trust-card-top-val" data-i18n="trust_c3_val">%100</div>
            <h3 class="trust-card-title" data-i18n="trust_c3_title">%100 Orijinal Ürünler</h3>
            <p class="trust-card-desc" data-i18n="trust_c3_desc">Dünyaca onaylı, saç sağlığını koruyan profesyonel formüller.</p>
          </div>

          <!-- Kart 4: Değişmez Hijyen Standardı -->
          <div class="trust-metric-card reveal-stagger-item">
            <div class="trust-card-top-val" data-i18n="trust_c4_val">Hijyen</div>
            <h3 class="trust-card-title" data-i18n="trust_c4_title">Değişmez Hijyen Standardı</h3>
            <p class="trust-card-desc" data-i18n="trust_c4_desc">Kişiye özel steril ekipmanlar ve tertemiz butik salon ortamı.</p>
          </div>

        </div>

      </div>
    </div>
  </section>

  <!-- ==========================================
       5. 4 ADIMDA SÜREÇ & ONARIM VİTRİNİ
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
  html = html.slice(0, heroEndIndex) + '\n' + refactoredSectionsHtml + '\n' + html.slice(reelsSectionTagIndex);
}

fs.writeFileSync(indexPath, html, 'utf8');
fs.writeFileSync(publicIndexPath, html, 'utf8');
console.log('Refactored HTML content applied successfully!');
