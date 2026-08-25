const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// Match sections and check reveal classes
const sectionRegex = /<section[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/section>/g;
let match;
while ((match = sectionRegex.exec(html)) !== null) {
  const id = match[1];
  const body = match[2];
  const reveals = (body.match(/class="[^"]*reveal[^"]*"/g) || []).length;
  const cards = (body.match(/class="[^"]*card[^"]*"/g) || []).length;
  const buttons = (body.match(/class="[^"]*btn[^"]*"/g) || []).length;
  console.log(`Section #${id}: reveals=${reveals}, cards=${cards}, buttons=${buttons}`);
}
