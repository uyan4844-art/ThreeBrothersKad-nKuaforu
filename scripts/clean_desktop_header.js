const fs = require('fs');

const files = [
  'index.html',
  'balyaj.html',
  'blonde.html',
  'kaynak.html',
  'ombre.html',
  'renklendirme.html',
  'hakkimizda.html'
];

const mobileMenuBtnInDesktopHeaderRegex = /\s*<!-- Mobil Menü Butonu \(Hamburger\) -->\s*<button id="openMobileMenuBtn" onclick="toggleMenu\(\)" type="button" aria-label="Menüyü Aç" class="mobile-menu-btn">[\s\S]*?<\/button>/g;

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(mobileMenuBtnInDesktopHeaderRegex, '');
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Cleaned desktop header in ${file}`);
});
