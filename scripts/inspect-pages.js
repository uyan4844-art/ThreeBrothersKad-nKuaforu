const fs = require('fs');

const files = ['index.html', 'hakkimizda.html', 'balyaj.html', 'blonde.html', 'kaynak.html', 'ombre.html', 'renklendirme.html'];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  console.log(`\n=================== ${file} ===================`);
  console.log(`Length: ${content.length}`);
  
  // Check classes used for animation/cards/buttons/sections
  const matches = content.match(/class="([^"]+)"/g) || [];
  const classes = new Set();
  matches.forEach(m => {
    const cls = m.replace('class="', '').replace('"', '').split(/\s+/);
    cls.forEach(c => {
      if (c.includes('btn') || c.includes('card') || c.includes('hero') || c.includes('reveal') || c.includes('section') || c.includes('item') || c.includes('grid') || c.includes('fade') || c.includes('motion')) {
        classes.add(c);
      }
    });
  });
  console.log('Relevant classes:', Array.from(classes).slice(0, 30));
});
