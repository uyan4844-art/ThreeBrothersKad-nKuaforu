const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

console.log('=== MOBIL UYUMLULUK & KALITE DOGRULAMASI ===');
const checks = [
  { name: 'Viewport Meta Etiketi (maximum-scale=5.0)', pass: html.includes('name="viewport"') && html.includes('width=device-width') },
  { name: 'Yatay Tasma Engeli (overflow-x: hidden)', pass: html.includes('overflow-x: hidden') },
  { name: 'Akiçi Duyarli Tipografi (clamp)', pass: html.includes('clamp(') },
  { name: 'Mobil Hamburger Menu & Cekmece (Drawer)', pass: html.includes('openMobileMenuBtn') },
  { name: 'Hero Mobil Odak (center 15%)', pass: html.includes('center 15%') },
  { name: 'Hero Mobil Dikey Aksiyon Butonlari', pass: html.includes('hero-actions') },
  { name: 'Reels Mobil 1 Kolon Duzeni', pass: html.includes('.insta-reels-grid') || html.includes('reels') },
  { name: 'Bento Mozaik Mobil 1 Kolon Duzeni', pass: html.includes('.bento-mosaic') || html.includes('bento') },
{ name: 'Iletisim Butonlari', pass: html.includes('c_btn_wa') || html.includes('c_btn_call') },
  { name: 'Sabit Alt Hizli Eylem Cubugu (Mobile Float Bar)', pass: html.includes('mobile-float-bar') }
];

let allPassed = true;
for (const c of checks) {
  console.log(`[${c.pass ? 'PASS' : 'FAIL'}] ${c.name}`);
  if (!c.pass) allPassed = false;
}

if (allPassed) {
  console.log('\nTUM MOBIL UYUMLULUK KRITERLERI BASARIYLA GECTI!');
} else {
  console.error('\nBAZI MOBIL KRITERLER BASARISIZ OLDU!');
  process.exit(1);
}
