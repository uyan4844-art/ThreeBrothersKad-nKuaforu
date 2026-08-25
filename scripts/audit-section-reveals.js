const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const sections = [
  'hero',
  'hizmetler',
  'teknikler',
  'felsefe',
  'neden-biz',
  'surec',
  'reels',
  'yorumlar',
  'galeri',
  'sss',
  'iletisim'
];

sections.forEach(secId => {
  const regex = new RegExp(`<section[^>]*id="${secId}"[^>]*>([\\s\\S]*?)<\\/section>`);
  const match = html.match(regex);
  if (!match) {
    console.log(`[!] Section #${secId} NOT FOUND`);
    return;
  }
  const content = match[1];
  console.log(`\n=================== Section #${secId} ===================`);
  const headerMatch = content.match(/<div class="[^"]*section-header[^"]*"[^>]*>[\s\S]*?<\/div>/);
  if (headerMatch) {
    console.log('Header:', headerMatch[0].substring(0, 120).replace(/\n/g, ' '));
  } else {
    console.log('No header match found, inspecting first 200 chars:', content.substring(0, 150).replace(/\n/g, ' '));
  }
  
  const staggerParents = content.match(/class="[^"]*reveal-stagger-parent[^"]*"/g) || [];
  const staggerItems = content.match(/class="[^"]*reveal-stagger-item[^"]*"/g) || [];
  const revealScroll = content.match(/class="[^"]*reveal-on-scroll[^"]*"/g) || [];
  console.log(`Reveal counts: on-scroll=${revealScroll.length}, stagger-parent=${staggerParents.length}, stagger-items=${staggerItems.length}`);
});
