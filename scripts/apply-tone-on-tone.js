const fs = require('fs');

// 1. Update index.html
let html = fs.readFileSync('index.html', 'utf8');

// Update :root in index.html
html = html.replace(
  /:root\s*\{[\s\S]*?--font-sans:[^;]+;\s*\}/,
  `:root {
      --bg-hero: #FAF7F2;
      --bg-story: #F0EAE1;
      --bg-reels: #EBE4D8;
      --bg-services: #FAF7F2;
      --bg-donusum: #F0EAE1;
      --bg-reviews: #F6F1EA;
      --bg-gallery: #FAF7F2;
      --bg-contact: #F0EAE1;
      --bg-footer: #1A1715;
      --bg-linen: #FAF7F2;
      --bg-vizon: #F0EAE1;
      --bg-white: #FFFFFF;
      --text-espresso: #1F1C19;
      --text-muted: #635E57;
      --gold-primary: #C5A880;
      --gold-dark: #A48358;
      --gold-light: #EBE0D2;
      --gold-champagne: #C5A880;
      --border-subtle: rgba(194, 163, 121, 0.18);
      --shadow-soft: 0 10px 30px rgba(0, 0, 0, 0.04);
      --shadow-hover: 0 20px 45px rgba(116, 109, 101, 0.12);
      --font-serif: 'Cormorant Garamond', Georgia, serif;
      --font-sans: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
    }`
);

// Update section tags with clean semantic classes
html = html.replace(/<section id="hero"[^>]*>/, '<section id="hero" class="boutique-hero">');
html = html.replace(/<section id="hikayemiz"[^>]*>/, '<section id="hikayemiz" class="boutique-section section-hikayemiz">');
html = html.replace(/<section id="reels"[^>]*>/, '<section id="reels" class="boutique-section section-reels">');
html = html.replace(/<section id="hizmetler"[^>]*>/, '<section id="hizmetler" class="boutique-section section-hizmetler">');
html = html.replace(/<section id="donusum"[^>]*>/, '<section id="donusum" class="boutique-section section-donusum">');
html = html.replace(/<section id="yorumlar"[^>]*>/, '<section id="yorumlar" class="boutique-section section-yorumlar">');
html = html.replace(/<section id="galeri"[^>]*>/, '<section id="galeri" class="boutique-section section-galeri">');
html = html.replace(/<section id="iletisim"[^>]*>/, '<section id="iletisim" class="boutique-section section-iletisim">');

// Update Scrim in index.html
html = html.replace(
  /\.hero-backdrop-scrim\s*\{[\s\S]*?\}/,
  `.hero-backdrop-scrim {
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, #FAF7F2 0%, #FAF7F2 46%, rgba(250, 247, 242, 0.75) 58%, rgba(250, 247, 242, 0) 100%);
      pointer-events: none;
      z-index: 1;
    }`
);

// Add Tone-on-Tone specific CSS rules to <style>
const toneOnToneCSS = `
    /* ==========================================
       TONE-ON-TONE KATMANLI BEJ RİTİM KURALLARI
    =========================================== */
    #hero {
      background-color: var(--bg-hero);
    }

    #hikayemiz, .section-hikayemiz {
      background-color: #F0EAE1 !important;
      border-top: 1px solid rgba(194, 163, 121, 0.18);
      border-bottom: 1px solid rgba(194, 163, 121, 0.18);
    }

    #reels, .section-reels {
      background-color: #EBE4D8 !important;
      border-bottom: 1px solid rgba(194, 163, 121, 0.15);
    }

    #hizmetler, .section-hizmetler {
      background-color: #FAF7F2 !important;
      border-bottom: 1px solid rgba(194, 163, 121, 0.15);
    }

    #donusum, .section-donusum {
      background-color: #F0EAE1 !important;
      border-bottom: 1px solid rgba(194, 163, 121, 0.15);
    }

    #yorumlar, .section-yorumlar {
      background-color: #F6F1EA !important;
      border-bottom: 1px solid rgba(194, 163, 121, 0.15);
    }

    .review-card-boutique {
      background-color: #FFFFFF !important;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
      border: 1px solid rgba(194, 163, 121, 0.18);
    }

    #galeri, .section-galeri {
      background-color: #FAF7F2 !important;
      border-bottom: 1px solid rgba(194, 163, 121, 0.15);
    }

    #iletisim, .section-iletisim {
      background-color: #F0EAE1 !important;
    }

    .contact-card-box {
      background-color: #FFFFFF !important;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.05);
      border: 1px solid rgba(194, 163, 121, 0.22);
    }

    .boutique-footer {
      background-color: #1A1715 !important;
      color: #EBE0D2;
      border-top: 1px solid rgba(194, 163, 121, 0.2);
    }
`;

if (!html.includes('TONE-ON-TONE KATMANLI BEJ RİTİM KURALLARI')) {
  html = html.replace('</style>', `${toneOnToneCSS}\n  </style>`);
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('index.html updated with Tone-on-Tone palette');

// 2. Update src/input.css
let inputCSS = fs.readFileSync('src/input.css', 'utf8');
if (!inputCSS.includes('TONE-ON-TONE KATMANLI BEJ RİTİM KURALLARI')) {
  inputCSS += toneOnToneCSS;
  fs.writeFileSync('src/input.css', inputCSS, 'utf8');
  console.log('src/input.css updated with Tone-on-Tone palette');
}
