const fs = require('fs');

// 1. UPDATE js/i18n.js with the 6 real reviews
let i18n = fs.readFileSync('js/i18n.js', 'utf8');

const reviewsI18nUpdates = {
  tr: {
    reviews_kicker: "MÜŞTERİ DENEYİMLERİ",
    reviews_title: "Google'da 5.0 Yıldızlı Değerlendirmeler",
    reviews_rating_text: "★★★★★ 119+ Doğrulanmış Gerçek Müşteri Yorumu",
    reviews_maps_btn: "Google Haritalar'da Tüm Yorumları İnceleyin →",
    r1_author: "Eda Erbey",
    r1_tag: "Doğrulanmış Google Yorumu",
    r1_text: "“Yaklaşık üç yıldır bu kuaföre gidiyorum. Saç kesimi, boya, cila, balyaj gibi tüm işlemlerimi burada yaptırıyorum. Emre, İsa ve Hüseyin Bey güler yüzlü ve işlerini büyük bir özenle yapıyor. Güvenle tercih edebilirsiniz.”",
    r2_author: "Bermal Kabamaklı",
    r2_tag: "Doğrulanmış Google Yorumu",
    r2_text: "“O kadar iyi bir kuaför ki tamamen saçın ihtiyacına göre hareket ediyorlar. Paketli saçımdan kızıla, sonra tekrar platine sıfır kopmayla çevirdiler. Kesinlikle tavsiye ederim.”",
    r3_author: "Başak",
    r3_tag: "Doğrulanmış Google Yorumu",
    r3_text: "“Bugüne kadar gittiğim en iyi kuaför deneyimlerinden biriydi. Özellikle Bilge Hanım işini büyük bir özenle yapan harika bir uzman. Sonuç tam hayal ettiğim gibi oldu.”",
    r4_author: "Yağmur Evren",
    r4_tag: "Doğrulanmış Google Yorumu",
    r4_text: "“Saçlarım yanlış kuaför seçimi ile sap sarı ve aşırı yıpranmıştı. Saçlarımı o halden toparlayıp eskisi gibi sağlıklı ve parlak hale getirdiler. Emre Bey ve Bilge Hanım'ın ilgisine bayılıyorum.”",
    r5_author: "Burcu Özen",
    r5_tag: "Doğrulanmış Google Yorumu",
    r5_text: "“3 yıldır aynı kuaföre gidiyorum, yaptırdığım ombrelerin hepsi çok güzel oldu. Kesimden sonra uzamayan saçım burada kestirdikten sonra uzamaya başladı.”",
    r6_author: "Yeşim Aydoğan",
    r6_tag: "Doğrulanmış Google Yorumu",
    r6_text: "“Manavgat’ta tanıdığım en iyi bayan kuaförlerinden biri. Ortam çok temiz ve sıcak. Saçım için verdiği öneriler çok doğruydu, kesinlikle tek adresim.”"
  },
  en: {
    reviews_kicker: "CLIENT EXPERIENCES",
    reviews_title: "5.0 Star Ratings on Google",
    reviews_rating_text: "★★★★★ 119+ Verified Real Client Reviews",
    reviews_maps_btn: "View All Reviews on Google Maps →",
    r1_author: "Eda Erbey",
    r1_tag: "Verified Google Review",
    r1_text: "“I have been coming to this salon for about three years. Haircut, coloring, gloss, balayage—all done with immense care and friendliness by Emre, İsa, and Hüseyin. Highly recommended.”",
    r2_author: "Bermal Kabamaklı",
    r2_tag: "Verified Google Review",
    r2_text: "“Such an exceptional team that listens to your hair's true needs. They transitioned my colored hair to red, and back to platinum with zero breakage. Absolutely recommend.”",
    r3_author: "Başak",
    r3_tag: "Verified Google Review",
    r3_text: "“One of the best hair studio experiences I've ever had. Especially Bilge Hanım is an outstanding specialist with great attention to detail. The result was exactly what I dreamed of.”",
    r4_author: "Yağmur Evren",
    r4_tag: "Verified Google Review",
    r4_text: "“My hair was extremely damaged from a previous salon. They restored it to be healthy, vibrant, and silky. I adore the care and expertise of Emre Bey and Bilge Hanım.”",
    r5_author: "Burcu Özen",
    r5_tag: "Verified Google Review",
    r5_text: "“I’ve been visiting for 3 years, and every ombre has turned out stunning. Hair that wouldn't grow before started thriving after their precision cuts.”",
    r6_author: "Yeşim Aydoğan",
    r6_tag: "Verified Google Review",
    r6_text: "“One of the best women's hair salons in Manavgat. Immaculate, welcoming atmosphere and honest expert advice. Truly my number one address.”"
  },
  de: {
    reviews_kicker: "KUNDENMEINUNGEN",
    reviews_title: "5.0-Sterne-Bewertungen auf Google",
    reviews_rating_text: "★★★★★ 119+ Verifizierte echte Bewertungen",
    reviews_maps_btn: "Alle Bewertungen auf Google Maps ansehen →",
    r1_author: "Eda Erbey",
    r1_tag: "Verifizierte Google-Bewertung",
    r1_text: "„Ich komme seit fast drei Jahren hierher. Haarschnitt, Farbe, Glossing und Balayage werden stets mit größter Sorgfalt durchgeführt. Absolut empfehlenswert.“",
    r2_author: "Bermal Kabamaklı",
    r2_tag: "Verifizierte Google-Bewertung",
    r2_text: "„Ein fantastischer Salon, der genau auf die Bedürfnisse der Haare eingeht. Sie brachten mein Haar ohne Haarbruch wieder zu strahlendem Platinblond.“",
    r3_author: "Başak",
    r3_tag: "Verifizierte Google-Bewertung",
    r3_text: "„Eine meiner besten Friseurerfahrungen überhaupt. Besonders Bilge Hanım arbeitet mit Hingabe und Präzision. Das Ergebnis ist perfekt.“",
    r4_author: "Yağmur Evren",
    r4_tag: "Verifizierte Google-Bewertung",
    r4_text: "„Mein Haar war zuvor stark strapaziert. Das Team hat es wieder gesund und glänzend gepflegt. Großer Dank an Emre Bey und Bilge Hanım.“",
    r5_author: "Burcu Özen",
    r5_tag: "Verifizierte Google-Bewertung",
    r5_text: "„Seit 3 Jahren Stammkundin; jedes Ombré gelingt makellos. Mein Haar wächst endlich wieder gesund nach.“",
    r6_author: "Yeşim Aydoğan",
    r6_tag: "Verifizierte Google-Bewertung",
    r6_text: "„Einer der besten Damensalons in Manavgat. Sehr sauber, herzlich und fachlich kompetent.“"
  },
  ru: {
    reviews_kicker: "ОТЗЫВЫ КЛИЕНТОВ",
    reviews_title: "Оценка 5.0 на Google",
    reviews_rating_text: "★★★★★ 119+ Подтвержденных отзывов",
    reviews_maps_btn: "Смотреть все отзывы на Google Maps →",
    r1_author: "Eda Erbey",
    r1_tag: "Проверенный отзыв Google",
    r1_text: "«Посещаю этот салон около трех лет. Стрижки, окрашивание, тонирование и балаяж выполняются на высочайшем уровне с заботой и вниманием.»",
    r2_author: "Bermal Kabamaklı",
    r2_tag: "Проверенный отзыв Google",
    r2_text: "«Потрясающий салон! Перевели волосы в платиновый блонд без малейших повреждений. Очень рекомендую.»",
    r3_author: "Başak",
    r3_tag: "Проверенный отзыв Google",
    r3_text: "«Один из лучших визитов к стилисту. Госпожа Бильге — потрясающий мастер, результат превзошел все ожидания.»",
    r4_author: "Yağmur Evren",
    r4_tag: "Проверенный отзыв Google",
    r4_text: "«Мои волосы были сильно повреждены, но здесь им вернули блеск и здоровье. Огромное спасибо Эмре и Бильге.»",
    r5_author: "Burcu Özen",
    r5_tag: "Проверенный отзыв Google",
    r5_text: "«Хожу сюда уже 3 года. Все переходы омбре идеальны, а волосы после стрижки растут здоровыми.»",
    r6_author: "Yeşim Aydoğan",
    r6_tag: "Проверенный отзыв Google",
    r6_text: "«Один из лучших салонов в Манавгате. Идеальная чистота, теплая атмосфера и профессиональный подход.»"
  },
  ar: {
    reviews_kicker: "تجارب العملاء",
    reviews_title: "تقييم 5.0 نجوم على Google",
    reviews_rating_text: "★★★★★ 119+ تقييم حقيقي موثق",
    reviews_maps_btn: "عرض جميع التقييمات على Google Maps ←",
    r1_author: "Eda Erbey",
    r1_tag: "تقييم Google موثق",
    r1_text: "«أزور هذا الصالون منذ 3 سنوات تقريباً. القص والصبغ والبالياج يُنفذ بعناية فائقة واحترافية عالية.»",
    r2_author: "Bermal Kabamaklı",
    r2_tag: "تقييم Google موثق",
    r2_text: "«صالون رائع يهتم بصحة الشعر أولاً. حوّلوا شعري إلى البلاتيني بدون أي تلف إطلاقاً.»",
    r3_author: "Başak",
    r3_tag: "تقييم Google موثق",
    r3_text: "«من أفضل تجارب الصالونات، وخاصة السيدة بيلغي على اهتمامها ودقتها الرائعة.»",
    r4_author: "Yağmur Evren",
    r4_tag: "تقييم Google موثق",
    r4_text: "«استعاد شعري صحته ولمعانه بفضل خبرة الصالون وفريق العمل المميز.»",
    r5_author: "Burcu Özen",
    r5_tag: "تقييم Google موثق",
    r5_text: "«3 سنوات وأنا أعتمد عليهم لجميع درجات الأومبري، والنتيجة دائماً مبهرة.»",
    r6_author: "Yeşim Aydoğan",
    r6_tag: "تقييم Google موثق",
    r6_text: "«أفضل صالون نسائي في مانافجات، نظافة وأجواء مريحة ونصائح احترافية.»"
  }
};

for (const lang of ['tr', 'en', 'de', 'ru', 'ar']) {
  for (const [key, val] of Object.entries(reviewsI18nUpdates[lang])) {
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
fs.writeFileSync('public/js/i18n.js', i18n, 'utf8');
console.log('js/i18n.js updated with 6 authentic Google reviews');

// 2. UPDATE index.html with new horizontal scrollable carousel markup & CSS
let indexHtml = fs.readFileSync('index.html', 'utf8');

const oldReviewsSectionRegex = /<!-- ==========================================\s*7\.\s*GOOGLE\s*REVIEWS[\s\S]*?<\/section>/;

const newReviewsSectionHTML = `<!-- ==========================================
       7. GOOGLE REVIEWS (HORIZONTAL SCROLL CAROUSEL)
  =========================================== -->
  <section id="yorumlar" class="boutique-section section-yorumlar">
    <div class="section-container" style="max-width: 1300px; padding: 0 20px;">

      <!-- Section Header -->
      <div class="section-header-center reveal-up">
        <span class="section-kicker" data-i18n="reviews_kicker">MÜŞTERİ DENEYİMLERİ</span>
        <h2 class="section-title" data-i18n="reviews_title">Google'da 5.0 Yıldızlı Değerlendirmeler</h2>
        <div style="margin-top: 10px; display: inline-flex; align-items: center; justify-content: center; gap: 8px; background: rgba(197, 168, 128, 0.12); padding: 6px 18px; border-radius: 999px; border: 1px solid rgba(197, 168, 128, 0.25);">
          <span style="color: var(--gold-primary); font-size: 15px; letter-spacing: 2px;">★★★★★</span>
          <strong style="font-size: 13px; color: var(--text-espresso);" data-i18n="reviews_rating_text">119+ Doğrulanmış Gerçek Müşteri Yorumu</strong>
        </div>
      </div>

      <!-- Horizontal Scrollable Carousel Container -->
      <div class="reviews-carousel-wrapper reveal-up">
        
        <!-- Scroll Track with Snap -->
        <div class="reviews-carousel-track" id="reviewsCarouselTrack">

          <!-- Kart 1: Eda Erbey -->
          <div class="review-card-item">
            <div>
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
            </div>
            <div class="review-author-info">
              <div class="review-author-avatar">EE</div>
              <div class="review-author-meta">
                <h4 data-i18n="r1_author">Eda Erbey</h4>
                <span data-i18n="r1_tag">Doğrulanmış Google Yorumu</span>
              </div>
            </div>
          </div>

          <!-- Kart 2: Bermal Kabamaklı -->
          <div class="review-card-item">
            <div>
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
            </div>
            <div class="review-author-info">
              <div class="review-author-avatar">BK</div>
              <div class="review-author-meta">
                <h4 data-i18n="r2_author">Bermal Kabamaklı</h4>
                <span data-i18n="r2_tag">Doğrulanmış Google Yorumu</span>
              </div>
            </div>
          </div>

          <!-- Kart 3: Başak -->
          <div class="review-card-item">
            <div>
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
            </div>
            <div class="review-author-info">
              <div class="review-author-avatar">B</div>
              <div class="review-author-meta">
                <h4 data-i18n="r3_author">Başak</h4>
                <span data-i18n="r3_tag">Doğrulanmış Google Yorumu</span>
              </div>
            </div>
          </div>

          <!-- Kart 4: Yağmur Evren -->
          <div class="review-card-item">
            <div>
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
            </div>
            <div class="review-author-info">
              <div class="review-author-avatar">YE</div>
              <div class="review-author-meta">
                <h4 data-i18n="r4_author">Yağmur Evren</h4>
                <span data-i18n="r4_tag">Doğrulanmış Google Yorumu</span>
              </div>
            </div>
          </div>

          <!-- Kart 5: Burcu Özen -->
          <div class="review-card-item">
            <div>
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
            </div>
            <div class="review-author-info">
              <div class="review-author-avatar">BÖ</div>
              <div class="review-author-meta">
                <h4 data-i18n="r5_author">Burcu Özen</h4>
                <span data-i18n="r5_tag">Doğrulanmış Google Yorumu</span>
              </div>
            </div>
          </div>

          <!-- Kart 6: Yeşim Aydoğan -->
          <div class="review-card-item">
            <div>
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
            </div>
            <div class="review-author-info">
              <div class="review-author-avatar">YA</div>
              <div class="review-author-meta">
                <h4 data-i18n="r6_author">Yeşim Aydoğan</h4>
                <span data-i18n="r6_tag">Doğrulanmış Google Yorumu</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      <!-- Bottom Button -->
      <div style="text-align: center; margin-top: 36px;" class="reveal-up">
        <a href="https://maps.google.com/?cid=16986332279537405342" target="_blank" rel="noopener noreferrer" class="btn-outline-gold" data-i18n="reviews_maps_btn">
          Google Haritalar'da Tüm Yorumları İnceleyin &rarr;
        </a>
      </div>

    </div>
  </section>`;

indexHtml = indexHtml.replace(oldReviewsSectionRegex, newReviewsSectionHTML);

// Add CSS for reviews carousel into <style> block
const reviewsCSS = `
    /* Horizontal Scrollable Testimonials Carousel */
    .reviews-carousel-wrapper {
      position: relative;
      width: 100%;
      margin: 25px auto 0;
    }

    .reviews-carousel-track {
      display: flex;
      gap: 24px;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      padding: 15px 8px 30px;
      scrollbar-width: none;
      -ms-overflow-style: none;
      -webkit-overflow-scrolling: touch;
      cursor: grab;
    }

    .reviews-carousel-track::-webkit-scrollbar {
      display: none;
    }

    .reviews-carousel-track:active {
      cursor: grabbing;
    }

    .review-card-item {
      min-width: 320px;
      max-width: 380px;
      flex: 0 0 340px;
      scroll-snap-align: start;
      background: #FFFFFF;
      border-radius: 18px;
      padding: 28px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
      border: 1px solid rgba(197, 168, 128, 0.2);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease;
    }

    .review-card-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 18px 45px rgba(116, 109, 101, 0.12);
      border-color: var(--gold-primary);
    }

    .review-header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
    }

    .review-google-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      font-weight: 700;
      color: #635E57;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .review-stars-gold {
      color: #C5A880;
      font-size: 15px;
      letter-spacing: 2px;
    }

    .review-body-quote {
      font-size: 14.5px;
      line-height: 1.7;
      color: #36312C;
      margin-bottom: 22px;
      font-weight: 400;
      min-height: 90px;
    }

    .review-author-info {
      display: flex;
      align-items: center;
      gap: 12px;
      border-top: 1px solid rgba(197, 168, 128, 0.15);
      padding-top: 16px;
    }

    .review-author-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: linear-gradient(135deg, #FAF7F2, #EBE4D8);
      border: 1.5px solid rgba(197, 168, 128, 0.4);
      color: #A48358;
      font-weight: 800;
      font-size: 13.5px;
      font-family: 'Plus Jakarta Sans', sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .review-author-meta h4 {
      font-size: 14px;
      font-weight: 700;
      color: #1F1C19;
      margin: 0;
      font-family: 'Plus Jakarta Sans', sans-serif;
    }

    .review-author-meta span {
      font-size: 11px;
      color: #8C847B;
      display: block;
      margin-top: 2px;
      font-weight: 500;
    }
`;

indexHtml = indexHtml.replace('</style>', reviewsCSS + '\n  </style>');

fs.writeFileSync('index.html', indexHtml, 'utf8');
fs.writeFileSync('public/index.html', indexHtml, 'utf8');
console.log('index.html updated with modern 6-review horizontal carousel');
