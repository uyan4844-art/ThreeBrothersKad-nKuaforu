const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
const publicIndexPath = path.join(__dirname, '../public/index.html');

let html = fs.readFileSync(indexPath, 'utf8');

// Find and remove the duplicate #hizmetler section after #reels
const reelsIndex = html.indexOf('id="reels"');
const secondHizmetlerIndex = html.indexOf('id="hizmetler"', reelsIndex);

if (secondHizmetlerIndex !== -1) {
  const sectionStart = html.lastIndexOf('<!-- ==========================================\n       5. HİZMETLERİMİZ', secondHizmetlerIndex) !== -1
    ? html.lastIndexOf('<!-- ==========================================\n       5. HİZMETLERİMİZ', secondHizmetlerIndex)
    : html.lastIndexOf('<section', secondHizmetlerIndex);

  const sectionEnd = html.indexOf('</section>', secondHizmetlerIndex) + '</section>'.length;
  
  html = html.slice(0, sectionStart) + html.slice(sectionEnd);
}

fs.writeFileSync(indexPath, html, 'utf8');
fs.writeFileSync(publicIndexPath, html, 'utf8');
console.log('Duplicate #hizmetler removed successfully!');
