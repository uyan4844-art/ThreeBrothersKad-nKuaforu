const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
const publicIndexPath = path.join(__dirname, '../public/index.html');
const inputCssPath = path.join(__dirname, '../src/input.css');

// 1. Update HTML files
function updateHtml(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');

  // Replace tech-feature-cards with frameless square autoplay loop video
  const oldCardsRegex = /<!-- Sağ: 3'lü Beyaz Özellik Kartları -->[\s\S]*?<div class="tech-feature-cards">[\s\S]*?<\/div>\s*<\/div>/;

  const newVideoHtml = `<!-- Sağ / Alt: Kare Şeklinde Sürekli Oynayan Çerçevesiz Video -->
        <div class="tech-video-wrapper reveal-stagger-item">
          <video class="tech-video-elem" autoplay loop muted playsinline webkit-playsinline preload="auto" disablepictureinpicture controlslist="nodownload nofullscreen noremoteplayback">
            <source src="./assets/videos/video-technique.mp4" type="video/mp4">
          </video>
        </div>
      </div>`;

  if (oldCardsRegex.test(html)) {
    html = html.replace(oldCardsRegex, newVideoHtml);
  } else {
    // Alternate search pattern if comments slightly vary
    const cardBlockRegex = /<div class="tech-feature-cards">[\s\S]*?<\/div>\s*<\/div>/;
    if (cardBlockRegex.test(html)) {
      html = html.replace(cardBlockRegex, newVideoHtml);
    }
  }

  fs.writeFileSync(filePath, html, 'utf8');
}

updateHtml(indexPath);
updateHtml(publicIndexPath);
console.log('HTML files updated with frameless square looping video in #teknikler!');

// 2. Update CSS in src/input.css
let css = fs.readFileSync(inputCssPath, 'utf8');

const techVideoCss = `
.tech-video-wrapper {
  width: 100%;
  aspect-ratio: 1 / 1;
  max-width: 480px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  background-color: #141210;
  box-shadow: 0 16px 40px rgba(116, 109, 101, 0.12);
  border: none !important;
  transition: transform 0.4s var(--ease-expo), box-shadow 0.4s var(--ease-expo);
}

.tech-video-wrapper:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 48px rgba(116, 109, 101, 0.18);
}

.tech-video-elem {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border: none !important;
  outline: none !important;
  pointer-events: none;
}
`;

if (!css.includes('.tech-video-wrapper')) {
  css = css.replace('.tech-feature-cards {', techVideoCss + '\n.tech-feature-cards {');
}

// Mobile styles for tech-video-wrapper
const mobileTechVideoCss = `
  .tech-video-wrapper {
    max-width: 100% !important;
    aspect-ratio: 1 / 1 !important;
    border-radius: 16px !important;
    margin-top: 10px !important;
  }
`;

if (!css.includes('.tech-video-wrapper {') || !css.includes('aspect-ratio: 1 / 1 !important;')) {
  css = css.replace('/* 5. Felsefe Dark Mobile */', mobileTechVideoCss + '\n  /* 5. Felsefe Dark Mobile */');
}

fs.writeFileSync(inputCssPath, css, 'utf8');
console.log('src/input.css updated with .tech-video-wrapper styling!');
