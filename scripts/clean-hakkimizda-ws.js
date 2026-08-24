const fs = require('fs');
const path = require('path');

['hakkimizda.html', 'public/hakkimizda.html'].forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/<!-- İmza & Motto Kartı -->\s+<div class="about-signature-card">/g, '<!-- İmza & Motto Kartı -->\n        <div class="about-signature-card">');
  fs.writeFileSync(filePath, content, 'utf8');
});
console.log('Cleaned whitespace in hakkimizda files');
