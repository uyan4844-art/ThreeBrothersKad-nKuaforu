const fs = require('fs');
const path = require('path');

// 1. Process all HTML files
const htmlFiles = [
  'index.html',
  'hakkimizda.html',
  'balyaj.html',
  'blonde.html',
  'kaynak.html',
  'ombre.html',
  'renklendirme.html',
  'public/index.html',
  'public/hakkimizda.html',
  'public/balyaj.html',
  'public/blonde.html',
  'public/kaynak.html',
  'public/ombre.html',
  'public/renklendirme.html'
];

htmlFiles.forEach(relPath => {
  const fullPath = path.join(__dirname, '..', relPath);
  if (!fs.existsSync(fullPath)) return;

  let content = fs.readFileSync(fullPath, 'utf8');

  // Ensure theme-color is #FAF8F5
  if (content.includes('name="theme-color"')) {
    content = content.replace(/<meta\s+name="theme-color"\s+content="[^"]*"\s*\/?>/gi, '<meta name="theme-color" content="#FAF8F5" />');
  } else {
    content = content.replace(/<\/title>/i, '</title>\n  <meta name="theme-color" content="#FAF8F5" />');
  }

  // Ensure viewport-fit=cover for iPhone 12 Pro notch / home bar
  if (!content.includes('viewport-fit=cover')) {
    content = content.replace(/content="width=device-width,\s*initial-scale=1\.0[^"]*"/i, 'content="width=device-width, initial-scale=1.0, viewport-fit=cover"');
  }

  // Color replacements: Background (#FAF7F2 -> #FAF8F5)
  content = content.replace(/#FAF7F2/gi, '#FAF8F5');
  content = content.replace(/rgba\(250,\s*247,\s*242,/gi, 'rgba(250, 248, 245,');

  // Headings, dark buttons, dark surfaces (#1F1C19 / #141210 / #1A1715 / #1B1816 -> #1A1918)
  content = content.replace(/#1F1C19/gi, '#1A1918');
  content = content.replace(/#141210/gi, '#1A1918');
  content = content.replace(/#1A1715/gi, '#1A1918');
  content = content.replace(/#1B1816/gi, '#1A1918');
  content = content.replace(/#2D2926/gi, '#1A1918');
  content = content.replace(/#36312C/gi, '#2C2724');
  content = content.replace(/rgba\(31,\s*28,\s*25,/gi, 'rgba(26, 25, 24,');
  content = content.replace(/rgba\(15,\s*12,\s*10,/gi, 'rgba(26, 25, 24,');

  // WhatsApp green (#25D366 / #20BA5A -> #128C7E / #0E7065)
  content = content.replace(/#25D366/gi, '#128C7E');
  content = content.replace(/#20BA5A/gi, '#0E7065');
  content = content.replace(/rgba\(37,\s*211,\s*102,\s*0\.35\)/gi, 'rgba(18, 140, 126, 0.35)');
  content = content.replace(/rgba\(37,\s*211,\s*102,\s*0\.3\)/gi, 'rgba(18, 140, 126, 0.35)');
  content = content.replace(/rgba\(37,\s*211,\s*102,\s*0\.4\)/gi, 'rgba(18, 140, 126, 0.45)');

  // Subtitle / kicker colors in subpage inline styles
  content = content.replace(/--gold-dark:\s*#A48358;/gi, '--gold-dark: #A48358;');

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`[HTML] Updated ${relPath}`);
});

// 2. Process App / Components files (Next.js / React)
const reactFiles = [
  'app/globals.css',
  'app/layout.tsx',
  'app/page.tsx',
  'app/hakkimizda/page.tsx',
  'app/hizmetler/balyaj/page.tsx',
  'app/hizmetler/blonde/page.tsx',
  'app/hizmetler/kaynak/page.tsx',
  'app/hizmetler/ombre/page.tsx',
  'app/hizmetler/renklendirme/page.tsx',
  'components/Header.tsx',
  'components/LanguageSelector.tsx',
  'components/Services.tsx',
  'components/TrustSection.tsx'
];

reactFiles.forEach(relPath => {
  const fullPath = path.join(__dirname, '..', relPath);
  if (!fs.existsSync(fullPath)) return;

  let content = fs.readFileSync(fullPath, 'utf8');

  content = content.replace(/#FAF7F2/gi, '#FAF8F5');
  content = content.replace(/rgba\(250,\s*247,\s*242,/gi, 'rgba(250, 248, 245,');

  content = content.replace(/#1F1C19/gi, '#1A1918');
  content = content.replace(/#141210/gi, '#1A1918');
  content = content.replace(/#1A1715/gi, '#1A1918');
  content = content.replace(/#1B1816/gi, '#1A1918');
  content = content.replace(/#2D2926/gi, '#1A1918');
  content = content.replace(/#36312C/gi, '#2C2724');

  content = content.replace(/#25D366/gi, '#128C7E');
  content = content.replace(/#20BA5A/gi, '#0E7065');
  content = content.replace(/rgba\(37,\s*211,\s*102,\s*0\.35\)/gi, 'rgba(18, 140, 126, 0.35)');
  content = content.replace(/rgba\(37,\s*211,\s*102,\s*0\.3\)/gi, 'rgba(18, 140, 126, 0.35)');
  content = content.replace(/rgba\(37,\s*211,\s*102,\s*0\.4\)/gi, 'rgba(18, 140, 126, 0.45)');

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`[REACT] Updated ${relPath}`);
});

// 3. Process scripts generator templates
const scriptFiles = [
  'scripts/generate-service-pages.js',
  'scripts/create-hakkimizda-page.js',
  'scripts/sync-subpages-perfection.js',
  'scripts/update-hakkimizda-exact-text.js',
  'scripts/update-contact-editorial.js',
  'scripts/update-contact-custom.js',
  'scripts/apply-luxury-header.js',
  'scripts/apply-5-polishes.js'
];

scriptFiles.forEach(relPath => {
  const fullPath = path.join(__dirname, '..', relPath);
  if (!fs.existsSync(fullPath)) return;

  let content = fs.readFileSync(fullPath, 'utf8');

  content = content.replace(/#FAF7F2/gi, '#FAF8F5');
  content = content.replace(/rgba\(250,\s*247,\s*242,/gi, 'rgba(250, 248, 245,');

  content = content.replace(/#1F1C19/gi, '#1A1918');
  content = content.replace(/#141210/gi, '#1A1918');
  content = content.replace(/#1A1715/gi, '#1A1918');
  content = content.replace(/#1B1816/gi, '#1A1918');
  content = content.replace(/#2D2926/gi, '#1A1918');
  content = content.replace(/#36312C/gi, '#2C2724');

  content = content.replace(/#25D366/gi, '#128C7E');
  content = content.replace(/#20BA5A/gi, '#0E7065');

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`[SCRIPT] Updated ${relPath}`);
});

console.log('All files updated with luxury palette!');
