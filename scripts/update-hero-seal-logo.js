const fs = require('fs');
const path = require('path');

const targetFiles = ['index.html', 'public/index.html'];

const heroSealCss = `
    /* Hero Circular Gold Seal Logo */
    .hero-seal-wrapper {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 22px;
    }
    @media (max-width: 768px) {
      .hero-seal-wrapper {
        justify-content: center;
        margin-bottom: 18px;
      }
    }
    .hero-seal-emblem {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      padding: 2.5px;
      background: linear-gradient(135deg, #F1E5D1 0%, #C5A880 50%, #8C6D42 100%);
      box-shadow: 0 8px 24px rgba(197, 168, 128, 0.4), 0 2px 6px rgba(0, 0, 0, 0.12);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
      cursor: pointer;
    }
    .hero-seal-emblem:hover {
      transform: scale(1.08) rotate(4deg);
      box-shadow: 0 12px 30px rgba(197, 168, 128, 0.6);
    }
    .hero-seal-img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      display: block;
      border: 1.5px solid #FFFFFF;
      background: #FFFFFF;
    }
`;

const heroSealHtml = `        <!-- Circular Gold Seal Logo Emblem -->
        <div class="hero-seal-wrapper hero-anim-1">
          <div class="hero-seal-emblem">
            <img src="./images/logo.webp" alt="Three Brothers Logo" class="hero-seal-img" />
          </div>
        </div>`;

targetFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    // 1. Add CSS before </style>
    if (!content.includes('/* Hero Circular Gold Seal Logo */')) {
      content = content.replace('</style>', `${heroSealCss}\n  </style>`);
    }

    // 2. Replace .hero-kicker-pill block with heroSealHtml
    const pillRegex = /<!--\s*Top Kicker Pill[^>]*-->[\s\S]*?<div class="hero-kicker-pill hero-anim-1">[\s\S]*?<\/div>/;
    if (pillRegex.test(content)) {
      content = content.replace(pillRegex, heroSealHtml);
    } else {
      // Fallback replacement if comment is slightly different
      const pillOnlyRegex = /<div class="hero-kicker-pill hero-anim-1">[\s\S]*?<\/div>/;
      content = content.replace(pillOnlyRegex, heroSealHtml);
    }

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file} with Circular Gold Seal Logo!`);
  }
});
