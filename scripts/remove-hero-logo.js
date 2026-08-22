const fs = require('fs');
const path = require('path');

const targetFiles = ['index.html', 'public/index.html'];

targetFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    // Remove the seal markup
    const sealRegex = /\s*<!--\s*Circular Gold Seal Logo Emblem\s*-->[\s\S]*?<div class="hero-seal-wrapper[\s\S]*?<\/div>\s*<\/div>/;
    content = content.replace(sealRegex, '');

    // Remove the CSS
    content = content.replace(/\/\*\s*Hero Circular Gold Seal Logo\s*\*\/[\s\S]*?\.hero-seal-img\s*\{[\s\S]*?\}/, '');

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Removed hero logo from ${file}`);
  }
});
