const fs = require('fs');
const path = require('path');

// 1. Remove from index.html
let indexHTML = fs.readFileSync('index.html', 'utf8');

// Remove Section 6: #donusum
const donusumSectionRegex = /<!-- ==========================================\s*6\.\s*BEFORE\s*\/\s*AFTER\s*DÖNÜŞÜM\s*VİTRİNİ[\s\S]*?<\/section>/;
indexHTML = indexHTML.replace(donusumSectionRegex, '');

// Remove Drawer link for Dönüşüm
indexHTML = indexHTML.replace(
  /<li><a href="#donusum" onclick="toggleMenu\(\)"><span data-i18n="nav_transformation">Dönüşüm<\/span>\s*<span class="arrow">&rarr;<\/span><\/a><\/li>\s*/g,
  ''
);
indexHTML = indexHTML.replace(
  /<li><a href="index\.html#donusum" onclick="toggleMenu\(\)"><span data-i18n="nav_transformation">Dönüşüm<\/span>\s*<span class="arrow">&rarr;<\/span><\/a><\/li>\s*/g,
  ''
);

// Remove Footer link for Dönüşümler
indexHTML = indexHTML.replace(
  /<li><a href="#donusum" data-i18n="nav_transformation">Dönüşümler<\/a><\/li>\s*/g,
  ''
);
indexHTML = indexHTML.replace(
  /<li><a href="index\.html#donusum" data-i18n="nav_transformation">Dönüşümler<\/a><\/li>\s*/g,
  ''
);

fs.writeFileSync('index.html', indexHTML, 'utf8');
fs.writeFileSync('public/index.html', indexHTML, 'utf8');
console.log('index.html updated (donusum section and links removed)');

// 2. Remove Dönüşüm links from other pages
const otherPages = [
  'hakkimizda.html',
  'balyaj.html',
  'blonde.html',
  'kaynak.html',
  'ombre.html',
  'renklendirme.html'
];

otherPages.forEach(p => {
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    content = content.replace(
      /<li><a href="index\.html#donusum" onclick="toggleMenu\(\)"><span data-i18n="nav_transformation">Dönüşüm<\/span>\s*<span class="arrow">&rarr;<\/span><\/a><\/li>\s*/g,
      ''
    );
    content = content.replace(
      /<li><a href="index\.html#donusum">Dönüşümler<\/a><\/li>\s*/g,
      ''
    );
    content = content.replace(
      /<li><a href="index\.html#donusum" data-i18n="nav_transformation">Dönüşümler<\/a><\/li>\s*/g,
      ''
    );
    fs.writeFileSync(p, content, 'utf8');
    fs.writeFileSync(path.join('public', p), content, 'utf8');
    console.log(`${p} updated (donusum links removed)`);
  }
});
