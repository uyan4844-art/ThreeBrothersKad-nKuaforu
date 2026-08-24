const fs = require('fs');
const path = require('path');

function updateFile(relativePath, updates) {
  const fullPath = path.join(__dirname, '..', relativePath);
  let content = fs.readFileSync(fullPath, 'utf8');
  let originalContent = content;

  for (const { regex, replacement, name } of updates) {
    if (regex.test(content)) {
      content = content.replace(regex, replacement);
      console.log(`✔ [${relativePath}] Applied ${name}`);
    } else {
      console.warn(`✖ [${relativePath}] Failed to match ${name}`);
    }
  }

  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Saved ${relativePath}`);
  }
}

// 1. Updates for index.html and public/index.html
const indexUpdates = [
  {
    name: 'Hero 2014 Badge',
    regex: /(<div\s+class="hero-content-box"[^>]*>)\s*(?:<!--[^\n]*-->\s*)?(?:<div\s+class="[^"]*hero-badge[^"]*"[^>]*>[\s\S]*?<\/div>\s*)?(<h1\s+class="hero-headline)/i,
    replacement: `$1\n\n        <!-- Hero Badge: 2014'ten Beri -->\n        <div class="hero-badge-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1918]/5 border border-stone-300 text-[11px] uppercase tracking-widest font-semibold text-stone-700 mb-4 hero-anim-1">\n          <span>✨</span> 2014'ten Beri Manavgat'ta\n        </div>\n\n        <!-- Main Headline in Cormorant Garamond (Stagger 2: Fade-in Up) -->\n        $2`
  },
  {
    name: 'Felsefe Section Experience Card',
    regex: /(En kaliteli bakım ürünleri ve dürüst hizmet anlayışımızla[\s\S]*?<\/p>)\s*(?:<!--[\s\S]*?-->\s*)?(?:<div\s+class="felsefe-trust-badge-box"[\s\S]*?<\/div>\s*<\/div>\s*)?(<div\s+class="felsefe-actions">)/i,
    replacement: `$1\n          \n          <!-- Tecrübe Kartı: 2014'ten Beri Kesintisiz Güven -->\n          <div class="felsefe-trust-badge-box" style="margin: 22px 0; padding: 18px 22px; background: rgba(197, 168, 128, 0.08); border: 1px solid rgba(197, 168, 128, 0.3); border-radius: 14px; display: flex; align-items: flex-start; gap: 14px;">\n            <div style="font-size: 20px; line-height: 1; flex-shrink: 0; padding-top: 2px;">✨</div>\n            <div>\n              <h4 style="font-family: var(--font-serif); font-size: 17px; font-weight: 700; color: #FAF8F5; margin: 0 0 6px 0;">2014'ten Beri Kesintisiz Güven</h4>\n              <p style="font-size: 13.5px; line-height: 1.6; color: rgba(250, 248, 245, 0.82); margin: 0;">12 yılı aşkın mesleki tecrübemizle Manavgat Bahçelievler'de saç sağlığını ön planda tutan profesyonel dokunuşlar sunuyoruz.</p>\n            </div>\n          </div>\n\n          $2`
  }
];

// 2. Updates for hakkimizda.html and public/hakkimizda.html
const hakkimizdaUpdates = [
  {
    name: 'About Experience Card',
    regex: /(uzun süre keyifle kullanılabilecek sonuçlar elde etmeye özen gösteriyoruz\.\s*<\/p>)\s*(?:<!--[\s\S]*?-->\s*)?(?:<div\s+class="about-experience-card"[\s\S]*?<\/div>\s*<\/div>\s*)?(<div\s+class="about-quote-box">)/i,
    replacement: `$1\n\n        <!-- Tecrübe Kartı: 2014'ten Beri Kesintisiz Güven -->\n        <div class="about-experience-card" style="margin: 24px 0; padding: 20px 24px; background: rgba(197, 168, 128, 0.08); border: 1px solid rgba(197, 168, 128, 0.32); border-radius: 16px; display: flex; align-items: flex-start; gap: 16px;">\n          <div style="font-size: 22px; line-height: 1; flex-shrink: 0; padding-top: 2px;">✨</div>\n          <div>\n            <h3 style="font-family: var(--font-serif); font-size: 18px; font-weight: 700; color: #1A1918; margin: 0 0 6px 0;">2014'ten Beri Kesintisiz Güven</h3>\n            <p style="font-size: 14px; line-height: 1.65; color: #5A554E; margin: 0;">12 yılı aşkın mesleki tecrübemizle Manavgat Bahçelievler'de saç sağlığını ön planda tutan profesyonel dokunuşlar sunuyoruz.</p>\n          </div>\n        </div>\n\n        $2`
  }
];

['index.html', 'public/index.html'].forEach(file => updateFile(file, indexUpdates));
['hakkimizda.html', 'public/hakkimizda.html'].forEach(file => updateFile(file, hakkimizdaUpdates));

console.log('Update complete!');
