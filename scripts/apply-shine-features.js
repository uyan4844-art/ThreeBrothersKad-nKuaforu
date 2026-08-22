const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

// 1. ADD CSS STYLES FOR PROCESS TIMELINE, REPAIR BANNER, AND FAQ ACCORDION
const extraCss = `
    /* === 4-STEP SALON PROCESS TIMELINE === */
    .section-process {
      background-color: #FAF7F2;
      border-bottom: 1px solid rgba(194, 163, 121, 0.18);
    }

    .process-timeline-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
      margin-top: 50px;
      position: relative;
    }

    @media (max-width: 1024px) {
      .process-timeline-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }
    }

    @media (max-width: 640px) {
      .process-timeline-grid {
        grid-template-columns: 1fr;
        gap: 16px;
      }
    }

    .process-step-card {
      background: #FFFFFF;
      border: 1px solid rgba(197, 168, 128, 0.25);
      border-radius: 18px;
      padding: 32px 24px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
      display: flex;
      flex-direction: column;
      position: relative;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .process-step-card:hover {
      transform: translateY(-5px);
      border-color: #C5A880;
      box-shadow: 0 16px 40px rgba(197, 168, 128, 0.15);
    }

    .process-step-badge {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: rgba(197, 168, 128, 0.12);
      border: 1px solid rgba(197, 168, 128, 0.35);
      color: #A48358;
      font-family: var(--font-serif);
      font-size: 18px;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }

    .process-step-title {
      font-family: var(--font-serif);
      font-size: 20px;
      font-weight: 700;
      color: #1F1C19;
      margin-bottom: 12px;
      line-height: 1.25;
    }

    .process-step-desc {
      font-size: 13.5px;
      color: #635E57;
      line-height: 1.65;
    }

    /* === REPAIR & TRANSPARENT COLOR EDITORIAL CALLOUT === */
    .repair-callout-box {
      margin-top: 60px;
      background: linear-gradient(135deg, #FAF7F2 0%, #F1ECE4 100%);
      border: 1px solid rgba(197, 168, 128, 0.35);
      border-radius: 20px;
      padding: 40px 48px;
      display: grid;
      grid-template-columns: 1.3fr 1fr;
      align-items: center;
      gap: 36px;
      box-shadow: 0 15px 40px rgba(116, 109, 101, 0.06);
    }

    @media (max-width: 900px) {
      .repair-callout-box {
        grid-template-columns: 1fr;
        padding: 30px 24px;
        gap: 24px;
      }
    }

    .repair-badges-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .repair-badge-item {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: #FFFFFF;
      border: 1px solid rgba(197, 168, 128, 0.25);
      padding: 10px 18px;
      border-radius: 999px;
      font-size: 13px;
      font-weight: 600;
      color: #1F1C19;
    }

    .repair-badge-item svg {
      color: #A48358;
      flex-shrink: 0;
    }

    /* === FAQ ACCORDION SYSTEM === */
    .section-faq {
      background-color: #FAF7F2;
      border-bottom: 1px solid rgba(194, 163, 121, 0.18);
    }

    .faq-container-box {
      max-width: 860px;
      margin: 45px auto 0;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .faq-item {
      background: #FFFFFF;
      border: 1px solid rgba(197, 168, 128, 0.22);
      border-radius: 14px;
      overflow: hidden;
      transition: border-color 0.25s ease, box-shadow 0.25s ease;
    }

    .faq-item:hover,
    .faq-item.active {
      border-color: #C5A880;
      box-shadow: 0 8px 24px rgba(197, 168, 128, 0.1);
    }

    .faq-question-btn {
      width: 100%;
      background: transparent;
      border: none;
      padding: 22px 26px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      text-align: left;
      font-family: var(--font-serif);
      font-size: 18px;
      font-weight: 600;
      color: #1F1C19;
      gap: 16px;
      transition: color 0.25s ease;
    }

    .faq-item.active .faq-question-btn {
      color: #A48358;
    }

    .faq-chevron {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: rgba(197, 168, 128, 0.12);
      color: #A48358;
      transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), background 0.25s ease;
    }

    .faq-item.active .faq-chevron {
      transform: rotate(180deg);
      background: #C5A880;
      color: #FFFFFF;
    }

    .faq-answer-body {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), padding 0.3s ease;
      padding: 0 26px;
    }

    .faq-item.active .faq-answer-body {
      max-height: 300px;
      padding-bottom: 24px;
    }

    .faq-answer-text {
      font-size: 14.5px;
      line-height: 1.7;
      color: #635E57;
      border-top: 1px solid rgba(197, 168, 128, 0.15);
      padding-top: 16px;
    }
`;

// Insert extra CSS before </style> in indexHtml if not already present
if (!indexHtml.includes('/* === 4-STEP SALON PROCESS TIMELINE === */')) {
  indexHtml = indexHtml.replace('</style>', `${extraCss}\n  </style>`);
}

// 2. PROCESS SECTION & REPAIR CALLOUT HTML
const processSectionHtml = `
  <!-- ==========================================
       4. 4 ADIMLI SALON DENEYİMİ & SÜREÇ
  =========================================== -->
  <section id="surec" class="boutique-section section-process">
    <div class="section-container">

      <!-- Header -->
      <div class="section-header-center reveal-up">
        <span class="section-kicker" data-i18n="process_kicker">PROFESYONEL DENEYİM & SÜREÇ</span>
        <h2 class="section-title" data-i18n="process_title">4 Adımda Kusursuz ve Sağlıklı Saç Tasarımı</h2>
        <p class="section-subtitle" data-i18n="process_desc">
          Three Brothers stüdyomuzda saç sağlığınızı asla riske atmayan, bilimsel ve sanatsal 4 aşamalı yaklaşımımız.
        </p>
      </div>

      <!-- 4-Step Cards -->
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

      <!-- Transparan Renklendirme & Onarım Callout -->
      <div class="repair-callout-box reveal-up">
        <div>
          <span class="section-kicker" data-i18n="repair_kicker">ÖZEL UZMANLIK & RENK DÜZELTME</span>
          <h3 class="section-title" style="font-size: clamp(24px, 2.6vw, 34px); margin-bottom: 14px;" data-i18n="repair_title">
            Yıpranmış ve Yorulmuş Saçlar İçin Transparan Boya Çözümleri
          </h3>
          <p style="font-size: 14.5px; color: var(--text-muted); line-height: 1.7; margin-bottom: 24px;" data-i18n="repair_desc">
            Ağır kimyasal işlemlerden yıpranmış veya matlaşmış saçlar için saçın doğal tonuna saygılı, bağ onarıcı ve transparan renklendirme teknikleriyle saça yeniden hayat veriyoruz.
          </p>
          <a href="https://wa.me/905526856907?text=Merhaba,%20saçlarımın%20onarım%20ve%20renk%20analizi%20için%20Three%20Brothers'tan%20randevu%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" class="btn-gold" data-i18n="repair_btn">
            Ön Görüşme ve Analiz Randevusu Al
          </a>
        </div>

        <div class="repair-badges-list">
          <div class="repair-badge-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span data-i18n="repair_badge1">Doğal Ton Uyumu & Canlılık</span>
          </div>
          <div class="repair-badge-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            <span data-i18n="repair_badge2">Sıfır Yıpranma & Bağ Koruma</span>
          </div>
          <div class="repair-badge-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
            <span data-i18n="repair_badge3">Dürüst & Şeffaf Değerlendirme</span>
          </div>
        </div>
      </div>

    </div>
  </section>
`;

// Insert process section after #hikayemiz if not already present
if (!indexHtml.includes('id="surec"')) {
  indexHtml = indexHtml.replace('</section>\n\n  <!-- ==========================================\n       4. INSTAGRAM REELS', `</section>\n\n${processSectionHtml}\n\n  <!-- ==========================================\n       5. INSTAGRAM REELS`);
}

// 3. FAQ ACCORDION SECTION HTML
const faqSectionHtml = `
  <!-- ==========================================
       8. SIKÇA SORULAN SORULAR (FAQ ACCORDION)
  =========================================== -->
  <section id="sss" class="boutique-section section-faq">
    <div class="section-container">

      <div class="section-header-center reveal-up">
        <span class="section-kicker" data-i18n="faq_kicker">MERAK EDİLENLER</span>
        <h2 class="section-title" data-i18n="faq_title">Sıkça Sorulan Sorular</h2>
        <p class="section-subtitle" data-i18n="faq_desc">
          Three Brothers salonumuzdaki hizmetler, saç analizi ve randevu süreci hakkında en çok sorulan sorular.
        </p>
      </div>

      <div class="faq-container-box reveal-up">

        <div class="faq-item">
          <button class="faq-question-btn" type="button" aria-expanded="false">
            <span data-i18n="faq1_q">İşlem öncesinde saç analizi ve ön görüşme yapıyor musunuz?</span>
            <span class="faq-chevron">▼</span>
          </button>
          <div class="faq-answer-body">
            <p class="faq-answer-text" data-i18n="faq1_a">
              Evet. Misafirlerimizin saç yapısını, geçmiş boya/açma geçmişini ve saçın elastikiyetini analiz etmeden hiçbir ağır işleme başlamıyoruz. Saç sağlığını tehlikeye atacak bir durum varsa dürüstçe alternatif çözümler öneriyoruz.
            </p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question-btn" type="button" aria-expanded="false">
            <span data-i18n="faq2_q">Yıpranmış veya yanmış saçlara sarı saç / balyaj yapılabilir mi?</span>
            <span class="faq-chevron">▼</span>
          </button>
          <div class="faq-answer-body">
            <p class="faq-answer-text" data-i18n="faq2_a">
              Saçın mevcut yapısı incelenir; şayet saç teli açma işlemine uygun değilse önce yoğun bağ güçlendirici ve onarıcı protein bakımı planlanır. Saç hazır olduğunda güvenli aşamalarla renklendirme yapılır.
            </p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question-btn" type="button" aria-expanded="false">
            <span data-i18n="faq3_q">Balyaj ve Ombre ne kadar süre dayanır, dip boyası gerektirir mi?</span>
            <span class="faq-chevron">▼</span>
          </button>
          <div class="faq-answer-body">
            <p class="faq-answer-text" data-i18n="faq3_a">
              Balyaj ve Ombre uygulamalarımız saçın kendi doğal dip rengiyle yumuşak bir geçiş sağlayacak şekilde tasarlandığı için saçınız uzadığında keskin bir dip çizgisi oluşmaz. Ortalama 4–8 ay boyunca rahatlıkla kullanılabilir.
            </p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question-btn" type="button" aria-expanded="false">
            <span data-i18n="faq4_q">Mikro kaynak uygulaması kendi saçıma zarar verir mi?</span>
            <span class="faq-chevron">▼</span>
          </button>
          <div class="faq-answer-body">
            <p class="faq-answer-text" data-i18n="faq4_a">
              Hayır. Salonumuzda %100 doğal saçlar ve ultra ince mikro kapsüller kullanılır. Doğru gramaj ve açıyla uygulandığında saçınızı çekmez, kırmaz ve doğal saçınızın sağlıklı uzamasına engel olmaz.
            </p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question-btn" type="button" aria-expanded="false">
            <span data-i18n="faq5_q">Randevu almak için ne kadar önceden iletişime geçmeliyim?</span>
            <span class="faq-chevron">▼</span>
          </button>
          <div class="faq-answer-body">
            <p class="faq-answer-text" data-i18n="faq5_a">
              Özellikle balyaj, sarı saç ve mikro kaynak gibi uzun süren özel işlemler için en az 1-3 gün önceden WhatsApp (+90 552 685 69 07) veya telefon ile randevu almanızı tavsiye ederiz.
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
`;

// Insert FAQ before #iletisim if not already present
if (!indexHtml.includes('id="sss"')) {
  indexHtml = indexHtml.replace('  <!-- ==========================================\n       9. İLETİŞİM', `${faqSectionHtml}\n\n  <!-- ==========================================\n       9. İLETİŞİM`);
}

// 4. ADD FAQ ACCORDION SCRIPT TO DOMContentLoaded
const faqJsCode = `
      // 7. Interactive FAQ Accordion Controller
      const faqItems = document.querySelectorAll('.faq-item');
      faqItems.forEach(item => {
        const btn = item.querySelector('.faq-question-btn');
        if (!btn) return;
        btn.addEventListener('click', () => {
          const isActive = item.classList.contains('active');
          // Close other items
          faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-question-btn');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          });

          if (!isActive) {
            item.classList.add('active');
            btn.setAttribute('aria-expanded', 'true');
          }
        });
      });
`;

if (!indexHtml.includes('// 7. Interactive FAQ Accordion Controller')) {
  indexHtml = indexHtml.replace('reelWrappers.forEach(w => videoObserver.observe(w));\n      }', `reelWrappers.forEach(w => videoObserver.observe(w));\n      }\n\n${faqJsCode}`);
}

// Save updated index.html
fs.writeFileSync(indexPath, indexHtml, 'utf8');
fs.writeFileSync(path.join(__dirname, '../public/index.html'), indexHtml, 'utf8');

// Also update src/input.css to include these component rules
const inputCssPath = path.join(__dirname, '../src/input.css');
let inputCss = fs.readFileSync(inputCssPath, 'utf8');
if (!inputCss.includes('/* === 4-STEP SALON PROCESS TIMELINE === */')) {
  inputCss += `\n${extraCss}\n`;
  fs.writeFileSync(inputCssPath, inputCss, 'utf8');
}

console.log('Successfully applied Shine Hair inspired Process, Repair Callout, and FAQ Accordion to index.html and input.css!');
