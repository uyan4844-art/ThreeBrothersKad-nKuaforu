const fs = require('fs');
const { execSync } = require('child_process');

// 1. UPDATE src/input.css
let inputCss = fs.readFileSync('src/input.css', 'utf8');

inputCss = inputCss.replace(
  /\.bento-item img\s*\{[^}]*\}/g,
  `.bento-item img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  object-position: center 20% !important;
  display: block !important;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}`
);

inputCss = inputCss.replace(
  /\.bento-overlay\s*\{[^}]*\}/g,
  `.bento-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 40%, transparent 70%) !important;
  display: flex;
  align-items: flex-end;
  padding: 24px;
  pointer-events: none;
  z-index: 2;
}`
);

fs.writeFileSync('src/input.css', inputCss, 'utf8');
console.log('src/input.css updated with center 20% and enhanced gradient overlay');

// Recompile Tailwind CSS
try {
  execSync('node ./node_modules/@tailwindcss/cli/dist/index.mjs -i ./src/input.css -o ./css/style.css --minify');
  fs.copyFileSync('./css/style.css', './public/css/style.css');
  console.log('Tailwind CSS recompiled and synced');
} catch (e) {
  console.error('Tailwind build error:', e.message);
}

// 2. UPDATE index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Update CSS rules in <style> block
indexHtml = indexHtml.replace(
  /\.bento-item img\s*\{[^}]*\}/g,
  `.bento-item img {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
      object-position: center 20% !important;
      display: block !important;
      transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }`
);

indexHtml = indexHtml.replace(
  /\.bento-overlay\s*\{[^}]*\}/g,
  `.bento-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 40%, transparent 70%) !important;
      display: flex;
      align-items: flex-end;
      padding: 24px;
      pointer-events: none;
      z-index: 2;
    }`
);

// Update HTML markup in index.html to ensure clean bento item structure
const bentoSectionRegex = /<!-- 3 Sütunlu Asimetrik Bento Grid -->[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;

const newBentoSectionHTML = `<!-- 3 Sütunlu Asimetrik Bento Grid -->
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
  </section>`;

indexHtml = indexHtml.replace(bentoSectionRegex, newBentoSectionHTML);

fs.writeFileSync('index.html', indexHtml, 'utf8');
fs.writeFileSync('public/index.html', indexHtml, 'utf8');
console.log('index.html Bento Grid markup and CSS updated successfully');
