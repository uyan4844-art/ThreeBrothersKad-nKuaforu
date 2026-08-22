const fs = require('fs');
const path = require('path');

const targetFiles = [
  'index.html',
  'public/index.html',
  'balyaj.html',
  'public/balyaj.html',
  'blonde.html',
  'public/blonde.html',
  'kaynak.html',
  'public/kaynak.html',
  'ombre.html',
  'public/ombre.html',
  'renklendirme.html',
  'public/renklendirme.html',
  'hakkimizda.html',
  'public/hakkimizda.html'
];

targetFiles.forEach(file => {
  const filePath = path.join(__dirname, '../', file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Replace profile urls (with trailing slash or without)
  content = content.replace(/https:\/\/(?:www\.)?instagram\.com\/threebrotherss\/?/g, 'https://www.instagram.com/threebrotherrrs/');
  
  // Replace handle mentions
  content = content.replace(/@threebrotherss/g, '@threebrotherrrs');
  
  // Replace plain username in reel metadata
  content = content.replace(/<span class="reel-username">threebrotherss<\/span>/g, '<span class="reel-username">threebrotherrrs</span>');
  content = content.replace(/Instagram @threebrotherss/g, 'Instagram @threebrotherrrs');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated Instagram profile links in:', file);
});
