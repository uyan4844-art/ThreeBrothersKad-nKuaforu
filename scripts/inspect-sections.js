const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const regex = /<section[^>]*id="([^"]+)"[^>]*>/g;
let match;
while ((match = regex.exec(html)) !== null) {
  console.log('Found section:', match[0]);
}

const footerMatch = html.match(/<footer[^>]*>/);
if (footerMatch) {
  console.log('Found footer:', footerMatch[0]);
}
