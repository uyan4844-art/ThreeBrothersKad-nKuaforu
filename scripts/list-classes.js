const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const classMatches = html.match(/class="([^"]+)"/g) || [];
const cardClasses = new Set();
const btnClasses = new Set();
const sectionClasses = new Set();

classMatches.forEach(m => {
  const list = m.replace('class="', '').replace('"', '').split(/\s+/);
  list.forEach(c => {
    if (c.includes('card') || c.includes('box') || c.includes('item') || c.includes('tile')) cardClasses.add(c);
    if (c.includes('btn') || c.includes('button') || c.includes('link') || c.includes('cta') || c.includes('action')) btnClasses.add(c);
    if (c.includes('section')) sectionClasses.add(c);
  });
});

console.log('--- CARD/ITEM/BOX CLASSES ---');
console.log(Array.from(cardClasses));

console.log('\n--- BUTTON/LINK/ACTION CLASSES ---');
console.log(Array.from(btnClasses));

console.log('\n--- SECTION CLASSES ---');
console.log(Array.from(sectionClasses));
