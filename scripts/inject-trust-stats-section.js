const fs = require('fs');
const path = require('path');

const trustStatsHtml = `
  <!-- ==========================================
       THREE BROTHERS 4'LÜ GÜVEN VE TECRÜBE BÖLÜMÜ
  =========================================== -->
  <section class="trust-stats-section py-20 bg-white px-5 sm:px-8">
    <div class="trust-stats-inner max-w-7xl mx-auto">
      <div class="trust-stats-layout grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- SOL ALAN: Başlık ve Açıklama (6 Kolon) -->
        <div class="lg:col-span-6 space-y-5">
          <span class="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-bold block mb-2">
            UZMANLIK & SAÇ SAĞLIĞI
          </span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1918] leading-tight">
            Saçınıza Değer Katan, Sağlığı Önceleyen Dokunuşlar
          </h2>
          <p class="text-stone-600 text-base sm:text-lg leading-relaxed pt-2">
            Three Brothers olarak her misafirimizin saç yapısını, ten uyumunu ve beklentilerini işlem öncesinde detaylıca dinliyoruz. Manavgat Bahçelievler'deki stüdyomuzda, saçınızı yıpratmadan hayalinizdeki renge ve ışıltıya kavuşmanız için samimiyetle çalışıyoruz.
          </p>
        </div>

        <!-- SAĞ ALAN: 2x2 Lüks Güven Kartları (6 Kolon) -->
        <div class="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 trust-stats-cards-grid">
          
          <!-- 1. Kart: 2014 Yılı -->
          <div class="trust-stat-box bg-[#FAF8F5] p-7 rounded-2xl border border-stone-200/60 flex flex-col justify-center shadow-sm">
            <span class="trust-stat-val-large text-4xl sm:text-5xl font-bold text-[#1A1918] tracking-tight">
              2014
            </span>
            <p class="trust-stat-text text-stone-600 text-sm font-medium mt-3 leading-snug">
              Yılından bu yana Manavgat'ta kesintisiz tecrübe
            </p>
          </div>

          <!-- 2. Kart: 5.0 Yıldız / Yorumlar -->
          <div class="trust-stat-box bg-[#FAF8F5] p-7 rounded-2xl border border-stone-200/60 flex flex-col justify-center shadow-sm">
            <span class="trust-stat-val-large text-4xl sm:text-5xl font-bold text-[#1A1918] tracking-tight flex items-center gap-1">
              5.0 <span class="text-[#C5A880] text-3xl">★</span>
            </span>
            <p class="trust-stat-text text-stone-600 text-sm font-medium mt-3 leading-snug">
              134+ Doğrulanmış mutlu misafir değerlendirmesi
            </p>
          </div>

          <!-- 3. Kart: Dürüst Teşhis -->
          <div class="trust-stat-box bg-[#FAF8F5] p-7 rounded-2xl border border-stone-200/60 flex flex-col justify-center shadow-sm">
            <span class="trust-stat-val-med text-2xl sm:text-3xl font-bold text-[#1A1918] tracking-tight">
              Saç Analizi
            </span>
            <p class="trust-stat-text text-stone-600 text-sm font-medium mt-3 leading-snug">
              İşlem öncesinde saç yapısına özel dürüst ve şeffaf değerlendirme
            </p>
          </div>

          <!-- 4. Kart: Kişiye Özel Tasarım -->
          <div class="trust-stat-box bg-[#FAF8F5] p-7 rounded-2xl border border-stone-200/60 flex flex-col justify-center shadow-sm">
            <span class="trust-stat-val-med text-2xl sm:text-3xl font-bold text-[#1A1918] tracking-tight">
              Özel Tasarım
            </span>
            <p class="trust-stat-text text-stone-600 text-sm font-medium mt-3 leading-snug">
              Yüz hatlarınıza ve tarzınıza en uygun renk & form kombinasyonu
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
`;

// Update index.html and public/index.html (add right after #hizmetler)
['index.html', 'public/index.html'].forEach(filePath => {
  const fullPath = path.join(__dirname, '..', filePath);
  let content = fs.readFileSync(fullPath, 'utf8');

  // Remove previous if exists
  content = content.replace(/<!-- ==========================================\s*THREE BROTHERS 4'LÜ GÜVEN VE TECRÜBE BÖLÜMÜ[\s\S]*?<\/section>/gi, '');

  // Insert right after </section> of #hizmetler
  const target = '</section>\n\n  <!-- ==========================================\n       2. TRANSPARAN RENKLENDİRME';
  const targetAlt = '</section>\r\n\r\n  <!-- ==========================================\r\n       2. TRANSPARAN RENKLENDİRME';

  if (content.includes(target)) {
    content = content.replace(target, `</section>\n${trustStatsHtml}\n  <!-- ==========================================\n       2. TRANSPARAN RENKLENDİRME`);
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✔ Injected TrustStats into ${filePath}`);
  } else if (content.includes(targetAlt)) {
    content = content.replace(targetAlt, `</section>\r\n${trustStatsHtml}\r\n  <!-- ==========================================\r\n       2. TRANSPARAN RENKLENDİRME`);
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✔ Injected TrustStats into ${filePath} (CRLF)`);
  } else {
    // Regex fallback
    content = content.replace(/(<section id="hizmetler"[\s\S]*?<\/section>)/i, `$1\n${trustStatsHtml}`);
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✔ Injected TrustStats into ${filePath} via regex`);
  }
});

// Update hakkimizda.html and public/hakkimizda.html
['hakkimizda.html', 'public/hakkimizda.html'].forEach(filePath => {
  const fullPath = path.join(__dirname, '..', filePath);
  let content = fs.readFileSync(fullPath, 'utf8');

  // Remove previous if exists
  content = content.replace(/<!-- ==========================================\s*THREE BROTHERS 4'LÜ GÜVEN VE TECRÜBE BÖLÜMÜ[\s\S]*?<\/section>/gi, '');

  // Replace the old 2-box about-stats-grid with the 4-box layout or insert TrustStats before footer
  const targetRegex = /(<div class="about-signature-card"[\s\S]*?<\/div>)/i;
  if (targetRegex.test(content)) {
    content = content.replace(targetRegex, `${trustStatsHtml}\n\n        $1`);
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✔ Injected TrustStats into ${filePath}`);
  }
});

console.log('Done injecting TrustStats!');
