const fs = require('fs');

const subpages = ['hakkimizda.html', 'balyaj.html', 'blonde.html', 'kaynak.html', 'ombre.html', 'renklendirme.html'];

subpages.forEach(file => {
  const html = fs.readFileSync(file, 'utf8');
  const classMatches = html.match(/class="([^"]+)"/g) || [];
  const cards = new Set();
  const btns = new Set();
  classMatches.forEach(m => {
    const list = m.replace('class="', '').replace('"', '').split(/\s+/);
    list.forEach(c => {
      if (c.includes('card') || c.includes('box') || c.includes('item') || c.includes('step')) cards.add(c);
      if (c.includes('btn') || c.includes('cta') || c.includes('action')) btns.add(c);
    });
  });
  console.log(`\n=== ${file} ===`);
  console.log('Cards/Items:', Array.from(cards));
  console.log('Buttons/CTAs:', Array.from(btns));
});
