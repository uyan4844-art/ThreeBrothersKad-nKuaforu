const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

// Replace Reviews Section HTML in index.html
const reviewsSectionRegex = /<!-- ==========================================\s*7\.\s*GOOGLE\s*REVIEWS[\s\S]*?<\/section>/;

const newSingleSlideReviewsHTML = `<!-- ==========================================
       7. GOOGLE REVIEWS (TEK TEK KAYDIRMALI LÜKS SLIDER)
  =========================================== -->
  <section id="yorumlar" class="boutique-section section-yorumlar">
    <div class="section-container" style="max-width: 920px; padding: 0 20px;">

      <!-- Section Header -->
      <div class="section-header-center reveal-up">
        <span class="section-kicker" data-i18n="reviews_kicker">MÜŞTERİ DENEYİMLERİ</span>
        <h2 class="section-title" data-i18n="reviews_title">Google'da 5.0 Yıldızlı Değerlendirmeler</h2>
        <div style="margin-top: 10px; display: inline-flex; align-items: center; justify-content: center; gap: 8px; background: rgba(197, 168, 128, 0.12); padding: 6px 18px; border-radius: 999px; border: 1px solid rgba(197, 168, 128, 0.25);">
          <span style="color: var(--gold-primary); font-size: 15px; letter-spacing: 2px;">★★★★★</span>
          <strong style="font-size: 13px; color: var(--text-espresso);" data-i18n="reviews_rating_text">119+ Doğrulanmış Gerçek Müşteri Yorumu</strong>
        </div>
      </div>

      <!-- Single Slide Reviews Carousel Stage -->
      <div class="single-reviews-stage reveal-up">

        <!-- Navigation Arrow Left -->
        <button class="review-nav-btn prev-btn" id="reviewPrevBtn" aria-label="Önceki Yorum">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <!-- Carousel Track (1 Card at a Time with Snap) -->
        <div class="single-reviews-track" id="singleReviewsTrack">

          <!-- Kart 1: Eda Erbey -->
          <div class="single-review-card" data-review-index="0">
            <div class="review-header-row">
              <div class="review-google-badge">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>Google</span>
              </div>
              <span class="review-stars-gold">★★★★★</span>
            </div>
            <p class="review-body-quote" data-i18n="r1_text">
              “Yaklaşık üç yıldır bu kuaföre gidiyorum. Saç kesimi, boya, cila, balyaj gibi tüm işlemlerimi burada yaptırıyorum. Emre, İsa ve Hüseyin Bey güler yüzlü ve işlerini büyük bir özenle yapıyor. Güvenle tercih edebilirsiniz.”
            </p>
            <div class="review-author-info">
              <div class="review-author-avatar">EE</div>
              <div class="review-author-meta">
                <h4 data-i18n="r1_author">Eda Erbey</h4>
                <span data-i18n="r1_tag">Doğrulanmış Google Yorumu</span>
              </div>
            </div>
          </div>

          <!-- Kart 2: Bermal Kabamaklı -->
          <div class="single-review-card" data-review-index="1">
            <div class="review-header-row">
              <div class="review-google-badge">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>Google</span>
              </div>
              <span class="review-stars-gold">★★★★★</span>
            </div>
            <p class="review-body-quote" data-i18n="r2_text">
              “O kadar iyi bir kuaför ki tamamen saçın ihtiyacına göre hareket ediyorlar. Paketli saçımdan kızıla, sonra tekrar platine sıfır kopmayla çevirdiler. Kesinlikle tavsiye ederim.”
            </p>
            <div class="review-author-info">
              <div class="review-author-avatar">BK</div>
              <div class="review-author-meta">
                <h4 data-i18n="r2_author">Bermal Kabamaklı</h4>
                <span data-i18n="r2_tag">Doğrulanmış Google Yorumu</span>
              </div>
            </div>
          </div>

          <!-- Kart 3: Başak -->
          <div class="single-review-card" data-review-index="2">
            <div class="review-header-row">
              <div class="review-google-badge">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>Google</span>
              </div>
              <span class="review-stars-gold">★★★★★</span>
            </div>
            <p class="review-body-quote" data-i18n="r3_text">
              “Bugüne kadar gittiğim en iyi kuaför deneyimlerinden biriydi. Özellikle Bilge Hanım işini büyük bir özenle yapan harika bir uzman. Sonuç tam hayal ettiğim gibi oldu.”
            </p>
            <div class="review-author-info">
              <div class="review-author-avatar">B</div>
              <div class="review-author-meta">
                <h4 data-i18n="r3_author">Başak</h4>
                <span data-i18n="r3_tag">Doğrulanmış Google Yorumu</span>
              </div>
            </div>
          </div>

          <!-- Kart 4: Yağmur Evren -->
          <div class="single-review-card" data-review-index="3">
            <div class="review-header-row">
              <div class="review-google-badge">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>Google</span>
              </div>
              <span class="review-stars-gold">★★★★★</span>
            </div>
            <p class="review-body-quote" data-i18n="r4_text">
              “Saçlarım yanlış kuaför seçimi ile sap sarı ve aşırı yıpranmıştı. Saçlarımı o halden toparlayıp eskisi gibi sağlıklı ve parlak hale getirdiler. Emre Bey ve Bilge Hanım'ın ilgisine bayılıyorum.”
            </p>
            <div class="review-author-info">
              <div class="review-author-avatar">YE</div>
              <div class="review-author-meta">
                <h4 data-i18n="r4_author">Yağmur Evren</h4>
                <span data-i18n="r4_tag">Doğrulanmış Google Yorumu</span>
              </div>
            </div>
          </div>

          <!-- Kart 5: Burcu Özen -->
          <div class="single-review-card" data-review-index="4">
            <div class="review-header-row">
              <div class="review-google-badge">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>Google</span>
              </div>
              <span class="review-stars-gold">★★★★★</span>
            </div>
            <p class="review-body-quote" data-i18n="r5_text">
              “3 yıldır aynı kuaföre gidiyorum, yaptırdığım ombrelerin hepsi çok güzel oldu. Kesimden sonra uzamayan saçım burada kestirdikten sonra uzamaya başladı.”
            </p>
            <div class="review-author-info">
              <div class="review-author-avatar">BÖ</div>
              <div class="review-author-meta">
                <h4 data-i18n="r5_author">Burcu Özen</h4>
                <span data-i18n="r5_tag">Doğrulanmış Google Yorumu</span>
              </div>
            </div>
          </div>

          <!-- Kart 6: Yeşim Aydoğan -->
          <div class="single-review-card" data-review-index="5">
            <div class="review-header-row">
              <div class="review-google-badge">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>Google</span>
              </div>
              <span class="review-stars-gold">★★★★★</span>
            </div>
            <p class="review-body-quote" data-i18n="r6_text">
              “Manavgat’ta tanıdığım en iyi bayan kuaförlerinden biri. Ortam çok temiz ve sıcak. Saçım için verdiği öneriler çok doğruydu, kesinlikle tek adresim.”
            </p>
            <div class="review-author-info">
              <div class="review-author-avatar">YA</div>
              <div class="review-author-meta">
                <h4 data-i18n="r6_author">Yeşim Aydoğan</h4>
                <span data-i18n="r6_tag">Doğrulanmış Google Yorumu</span>
              </div>
            </div>
          </div>

        </div>

        <!-- Navigation Arrow Right -->
        <button class="review-nav-btn next-btn" id="reviewNextBtn" aria-label="Sonraki Yorum">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

      </div>

      <!-- Pagination Indicators / Dots -->
      <div class="review-dots-container" id="reviewDotsContainer">
        <button class="review-dot active" data-index="0" aria-label="Yorum 1"></button>
        <button class="review-dot" data-index="1" aria-label="Yorum 2"></button>
        <button class="review-dot" data-index="2" aria-label="Yorum 3"></button>
        <button class="review-dot" data-index="3" aria-label="Yorum 4"></button>
        <button class="review-dot" data-index="4" aria-label="Yorum 5"></button>
        <button class="review-dot" data-index="5" aria-label="Yorum 6"></button>
      </div>

      <!-- Bottom Button -->
      <div style="text-align: center; margin-top: 32px;" class="reveal-up">
        <a href="https://maps.google.com/?cid=16986332279537405342" target="_blank" rel="noopener noreferrer" class="btn-outline-gold" data-i18n="reviews_maps_btn">
          Google Haritalar'da Tüm Yorumları İnceleyin &rarr;
        </a>
      </div>

    </div>
  </section>`;

indexHtml = indexHtml.replace(reviewsSectionRegex, newSingleSlideReviewsHTML);

// Replace or add CSS for single slide reviews
const singleSlideCSS = `
    /* Single-Review Slide Stage & Styles */
    .single-reviews-stage {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
    }

    .single-reviews-track {
      display: flex;
      width: 100%;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
      scrollbar-width: none;
      -ms-overflow-style: none;
      -webkit-overflow-scrolling: touch;
      border-radius: 20px;
      padding: 10px 0 15px;
    }

    .single-reviews-track::-webkit-scrollbar {
      display: none;
    }

    .single-review-card {
      flex: 0 0 100%;
      width: 100%;
      scroll-snap-align: center;
      scroll-snap-stop: always;
      box-sizing: border-box;
      background: #FFFFFF;
      border-radius: 20px;
      padding: 40px 48px;
      box-shadow: 0 15px 40px rgba(116, 109, 101, 0.08);
      border: 1px solid rgba(197, 168, 128, 0.25);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 250px;
      transition: transform 0.3s ease;
    }

    @media (max-width: 640px) {
      .single-review-card {
        padding: 26px 20px;
        min-height: 270px;
      }
    }

    .review-nav-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 46px;
      height: 46px;
      border-radius: 50%;
      background: #FFFFFF;
      border: 1px solid rgba(197, 168, 128, 0.35);
      color: #1F1C19;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 10;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .review-nav-btn:hover {
      background: #1F1C19;
      color: #FFFFFF;
      border-color: #1F1C19;
      transform: translateY(-50%) scale(1.08);
    }

    .review-nav-btn.prev-btn {
      left: -22px;
    }

    .review-nav-btn.next-btn {
      right: -22px;
    }

    @media (max-width: 860px) {
      .review-nav-btn {
        display: none;
      }
    }

    .review-dots-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin-top: 22px;
    }

    .review-dot {
      width: 8px;
      height: 8px;
      border-radius: 999px;
      background: rgba(197, 168, 128, 0.35);
      border: none;
      cursor: pointer;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      padding: 0;
    }

    .review-dot.active {
      width: 28px;
      background: #C5A880;
    }
`;

indexHtml = indexHtml.replace('</style>', singleSlideCSS + '\n  </style>');

// Add JavaScript Controller for Single Slide Reviews at bottom of index.html
const reviewsJS = `
    /* Single-Review Carousel Interactive Controller */
    (function() {
      const track = document.getElementById('singleReviewsTrack');
      const prevBtn = document.getElementById('reviewPrevBtn');
      const nextBtn = document.getElementById('reviewNextBtn');
      const dotsContainer = document.getElementById('reviewDotsContainer');
      if (!track || !dotsContainer) return;

      const dots = dotsContainer.querySelectorAll('.review-dot');
      const cards = track.querySelectorAll('.single-review-card');
      const totalCards = cards.length;
      let currentIndex = 0;
      let autoPlayInterval = null;

      function updateActiveDot(index) {
        dots.forEach((dot, i) => {
          if (i === index) dot.classList.add('active');
          else dot.classList.remove('active');
        });
        currentIndex = index;
      }

      function scrollToCard(index) {
        if (index < 0) index = totalCards - 1;
        if (index >= totalCards) index = 0;
        const targetCard = cards[index];
        if (targetCard) {
          track.scrollTo({
            left: targetCard.offsetLeft,
            behavior: 'smooth'
          });
          updateActiveDot(index);
        }
      }

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          scrollToCard(currentIndex - 1);
          resetAutoPlay();
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          scrollToCard(currentIndex + 1);
          resetAutoPlay();
        });
      }

      dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
          scrollToCard(i);
          resetAutoPlay();
        });
      });

      // Track scroll listener to update dots on swipe
      let isScrollingTimer = null;
      track.addEventListener('scroll', () => {
        clearTimeout(isScrollingTimer);
        isScrollingTimer = setTimeout(() => {
          const scrollLeft = track.scrollLeft;
          const cardWidth = track.clientWidth;
          const newIndex = Math.round(scrollLeft / cardWidth);
          if (newIndex >= 0 && newIndex < totalCards && newIndex !== currentIndex) {
            updateActiveDot(newIndex);
          }
        }, 60);
      });

      // Auto Play
      function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
          scrollToCard(currentIndex + 1);
        }, 6000);
      }

      function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
      }

      track.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
      track.addEventListener('mouseleave', () => startAutoPlay());
      track.addEventListener('touchstart', () => clearInterval(autoPlayInterval), { passive: true });

      startAutoPlay();
    })();
`;

// Insert reviewsJS before closing </body>
indexHtml = indexHtml.replace('</body>', `<script>\n${reviewsJS}\n</script>\n</body>`);

fs.writeFileSync('index.html', indexHtml, 'utf8');
fs.writeFileSync('public/index.html', indexHtml, 'utf8');
console.log('Single slide reviews carousel implemented with buttons, dots and auto-play');
