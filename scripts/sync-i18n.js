const fs = require('fs');
const path = require('path');

const srcJs = path.join(__dirname, '..', 'js', 'i18n.js');
const destJs = path.join(__dirname, '..', 'public', 'js', 'i18n.js');

fs.copyFileSync(srcJs, destJs);
console.log('✓ Copied js/i18n.js to public/js/i18n.js');

['index.html', 'public/index.html'].forEach(f => {
  const p = path.join(__dirname, '..', f);
  let html = fs.readFileSync(p, 'utf8');
  html = html.replace(/src="\.\/js\/i18n\.js(\?v=\d+)?"/g, 'src="./js/i18n.js?v=50"');
  fs.writeFileSync(p, html, 'utf8');
  console.log(`✓ Updated script cache bust in ${f}`);
});
