const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

// 1. Update index.html
let indexHTML = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');

// Remove Section 8: FERAH GALERİ IZGARASI (#galeri)
const galeriSectionRegex = /<!-- ==========================================\s*\d+\.\s*FERAH\s*GALERİ\s*IZGARASI[\s\S]*?<\/section>\s*/i;
if (galeriSectionRegex.test(indexHTML)) {
  indexHTML = indexHTML.replace(galeriSectionRegex, '');
  console.log('Removed #galeri section from index.html');
} else {
  // Fallback direct regex
  const directRegex = /<section id="galeri"[\s\S]*?<\/section>\s*/i;
  if (directRegex.test(indexHTML)) {
    indexHTML = indexHTML.replace(directRegex, '');
    console.log('Removed #galeri section via fallback regex from index.html');
  }
}

// Remove Desktop Nav link for Galeri in index.html
indexHTML = indexHTML.replace(/\s*<a href="#galeri" class="nav-link"[^>]*>Galeri<\/a>/g, '');
indexHTML = indexHTML.replace(/\s*<a href="index\.html#galeri" class="nav-link"[^>]*>Galeri<\/a>/g, '');

// Remove Mobile Drawer link for Galeri in index.html (if any)
indexHTML = indexHTML.replace(/<li><a href="[^"]*#galeri"[^>]*>.*?<\/a><\/li>\s*/gi, '');

// Remove Footer Quick link for Galeri in index.html
indexHTML = indexHTML.replace(/\s*<li><a href="#galeri"[^>]*>Galeri<\/a><\/li>/g, '');
indexHTML = indexHTML.replace(/\s*<li><a href="index\.html#galeri"[^>]*>Galeri<\/a><\/li>/g, '');

fs.writeFileSync(path.join(rootDir, 'index.html'), indexHTML, 'utf8');
fs.writeFileSync(path.join(publicDir, 'index.html'), indexHTML, 'utf8');
console.log('Saved updated index.html to root and public/');

// 2. Update all subpages
const subpages = [
  'hakkimizda.html',
  'balyaj.html',
  'blonde.html',
  'kaynak.html',
  'ombre.html',
  'renklendirme.html'
];

subpages.forEach(file => {
  const filePath = path.join(rootDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove Desktop Nav link
    content = content.replace(/\s*<a href="index\.html#galeri" class="nav-link"[^>]*>Galeri<\/a>/g, '');
    content = content.replace(/\s*<a href="#galeri" class="nav-link"[^>]*>Galeri<\/a>/g, '');
    
    // Remove Drawer link if any
    content = content.replace(/<li><a href="[^"]*#galeri"[^>]*>.*?<\/a><\/li>\s*/gi, '');
    
    // Remove Footer link
    content = content.replace(/\s*<li><a href="index\.html#galeri"[^>]*>Galeri<\/a><\/li>/g, '');
    content = content.replace(/\s*<li><a href="#galeri"[^>]*>Galeri<\/a><\/li>/g, '');
    
    fs.writeFileSync(filePath, content, 'utf8');
    fs.writeFileSync(path.join(publicDir, file), content, 'utf8');
    console.log(`Updated ${file} and synced to public/${file}`);
  }
});

// 3. Update verify-mobile.js if needed
const verifyMobilePath = path.join(rootDir, 'scripts', 'verify-mobile.js');
if (fs.existsSync(verifyMobilePath)) {
  let verifyContent = fs.readFileSync(verifyMobilePath, 'utf8');
  verifyContent = verifyContent.replace(/\s*\{ name: 'Galeri Mobil 2x2 Izgara', pass: [^}]+\},\s*/g, '\n');
  fs.writeFileSync(verifyMobilePath, verifyContent, 'utf8');
  console.log('Updated verify-mobile.js');
}

console.log('\nAll files processed successfully!');
