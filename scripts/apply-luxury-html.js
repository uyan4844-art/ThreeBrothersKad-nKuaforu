const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Hero Updates
html = html.replace(
  /<span data-i18n="hero_kicker">[\s\S]*?<\/span>/,
  '<span data-i18n="hero_kicker">2014’TEN BERİ MANAVGAT — SARI SAÇ & RENK DOKUNUŞLARI</span>'
);
html = html.replace(
  /<em data-i18n="hero_title">[\s\S]*?<\/em>/,
  '<em data-i18n="hero_title">Doğal Işıltı, Kusursuz Renk.</em>'
);
html = html.replace(
  /<p class="hero-description font-sans-luxury hero-anim-3" data-i18n="hero_desc">[\s\S]*?<\/p>/,
  '<p class="hero-description font-sans-luxury hero-anim-3" data-i18n="hero_desc">\n          Saçın sağlığını ve biyolojik yapısını koruyan profesyonel renk tasarımı ve kişiye özel açma teknikleri.\n        </p>'
);
html = html.replace(
  /(<a href="https:\/\/wa\.me\/905526856907[^"]*"[^>]*class="btn-gold btn-shimmer"[^>]*data-i18n="hero_btn_wa">[\s\S]*?<\/svg>)\s*[^<]+(<\/a>)/,
  '$1\n            WhatsApp Randevu\n          $2'
);
html = html.replace(
  /<a href="#reels" class="btn-outline" data-i18n="hero_btn_explore">[\s\S]*?<\/a>/,
  '<a href="#reels" class="btn-outline" data-i18n="hero_btn_explore">\n            Çalışmalarımızı İnceleyin &rarr;\n          </a>'
);

// 2. Hikayemiz & Felsefemiz Updates
html = html.replace(
  /<span class="story-kicker-label" data-i18n="story_kicker">[\s\S]*?<\/span>/,
  '<span class="story-kicker-label" data-i18n="story_kicker">FELSEFEMİZ & YAKLAŞIMIMIZ</span>'
);
html = html.replace(
  /<h2 class="story-headline-serif">[\s\S]*?<\/h2>/,
  '<h2 class="story-headline-serif">\n            Üç Kardeş, Tek Tutku:<br><span style="font-style: italic; color: #A48358;" data-i18n="story_title_accent">Saçın Doğal Sağlığı ve Sanatı</span>\n          </h2>'
);
html = html.replace(
  /<p class="story-paragraph" data-i18n="story_p1">[\s\S]*?<\/p>/,
  '<p class="story-paragraph" data-i18n="story_p1">\n            2014 yılından bu yana Manavgat’ta üç kardeş olarak bayan kuaförlüğü alanında estetik, dürüstlük ve teknik uzmanlığı bir arada sunuyoruz.\n          </p>'
);
html = html.replace(
  /<p class="story-paragraph" data-i18n="story_p2">[\s\S]*?<\/p>/,
  '<p class="story-paragraph" data-i18n="story_p2">\n            Özellikle <strong>sarı saç, balyaj ve hassas renk açma</strong> uygulamalarında doğru teknik ve profesyonel formüllerle çalışıyor; işlem öncesi detaylı saç analizi yaparak saçı yıpratmadan hayal edilen tonlara ulaştırıyoruz. Bizim için kusursuz bir renk kadar, <strong>saçın sağlığını ve bütünlüğünü korumak</strong> da büyük önem taşıyor.\n          </p>'
);
html = html.replace(
  /<p class="story-paragraph" data-i18n="story_p3">[\s\S]*?<\/p>/,
  '<p class="story-paragraph" data-i18n="story_p3">\n            Ten renginiz, yüz hatlarınız ve günlük kullanım alışkanlıklarınız doğrultusunda sadece size özel, doğal ve uzun süre formunu koruyan sonuçlar tasarlıyoruz.\n          </p>'
);
html = html.replace(
  /<div class="story-editorial-quote" data-i18n="story_quote">[\s\S]*?<\/div>/,
  '<div class="story-editorial-quote" data-i18n="story_quote">\n            “2014’ten bugüne değişmeyen ilkemiz; zanaatımıza olan saygımız ve misafirlerimizin memnuniyetidir.”\n          </div>'
);
html = html.replace(
  /<span data-i18n="story_btn_wa">[\s\S]*?<\/span>/,
  '<span data-i18n="story_btn_wa">Ön Görüşme ve Saç Analizi İçin İletişime Geçin</span>'
);

// 3. Reels & Instagram Updates
html = html.replace(
  /<span class="section-kicker" data-i18n="reels_kicker">[\s\S]*?<\/span>/,
  '<span class="section-kicker" data-i18n="reels_kicker">INSTAGRAM VİTRİNİ</span>'
);
html = html.replace(
  /<h2 class="section-title" data-i18n="reels_title">[\s\S]*?<\/h2>/,
  '<h2 class="section-title" data-i18n="reels_title">Salonumuzdan Canlı Saç Dönüşümleri</h2>'
);
html = html.replace(
  /<p class="section-desc" data-i18n="reels_desc">[\s\S]*?<\/p>/,
  '<p class="section-desc" data-i18n="reels_desc">\n          Günlük stüdyo çalışmalarımız, renk açma süreçleri ve güncel saç tasarımları.\n        </p>'
);
html = html.replace(
  /<p class="insta-bio" data-i18n="insta_bio">[\s\S]*?<\/p>/,
  '<p class="insta-bio" data-i18n="insta_bio">\n              Three Brothers Bayan Kuaförü | Manavgat Demokrasi Bulvarı\n            </p>'
);

// 4. Hizmetlerimiz (Bento Grid) Updates
html = html.replace(
  /<div class="services-header reveal-up">[\s\S]*?<div class="bento-mosaic"/,
  `<div class="services-header reveal-up">
        <span class="section-kicker" data-i18n="services_kicker">UZMANLIK ALANLARIMIZ</span>
        <h2 data-i18n="services_title">Kişiye Özel Profesyonel Dokunuşlar</h2>
        <p data-i18n="services_desc">
          Renk, form ve bakımda doğal görünümü modern kuaförlük teknikleriyle buluşturuyoruz.
        </p>
      </div>

      <!-- 3 Sütunlu Asimetrik Bento Grid -->
      <div class="bento-mosaic"`
);

html = html.replace(
  /<h3 data-i18n="srv3_title">[\s\S]*?<\/h3>/,
  '<h3 data-i18n="srv3_title">Blonde & İpeksi Renk Tasarımı</h3>'
);
html = html.replace(
  /<h3 data-i18n="srv5_title">[\s\S]*?<\/h3>/,
  '<h3 data-i18n="srv5_title">Mikro Kapsül Kaynak</h3>'
);
html = html.replace(
  /<h3 data-i18n="reels2_badge">[\s\S]*?<\/h3>/,
  '<h3 data-i18n="reels2_badge">Ombre & Sombre Geçişleri</h3>'
);
html = html.replace(
  /<h3 data-i18n="srv2_title">[\s\S]*?<\/h3>/,
  '<h3 data-i18n="srv2_title">Kişiye Özel Renklendirme & Tonlama</h3>'
);

// 5. Contact Section Updates
html = html.replace(
  /<span class="section-kicker" data-i18n="contact_kicker">[\s\S]*?<\/span>/,
  '<span class="section-kicker" data-i18n="contact_kicker">RANDEVU & İLETİŞİM</span>'
);
html = html.replace(
  /<h2 class="section-title"[^>]*data-i18n="contact_title">[\s\S]*?<\/h2>/,
  '<h2 class="section-title" style="margin-bottom: 20px;" data-i18n="contact_title">\n            Kahve Eşliğinde Saçınızı Birlikte Tasarlayalım\n          </h2>'
);
html = html.replace(
  /<p style="font-size: 15px; color: var\(--text-muted\); line-height: 1\.7; margin-bottom: 32px;" data-i18n="contact_desc">[\s\S]*?<\/p>/,
  '<p style="font-size: 15px; color: var(--text-muted); line-height: 1.7; margin-bottom: 32px;" data-i18n="contact_desc">\n            Manavgat Demokrasi Bulvarı’ndaki butik salonumuzda işlem öncesi ücretsiz saç analizi ve ön görüşme için dilediğiniz an bize ulaşabilirsiniz.\n          </p>'
);

fs.writeFileSync('index.html', html, 'utf8');
console.log('index.html updated successfully with luxury editorial copywriting');
