const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

// 1. Polish index.html
let indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');

// In #teknikler, ensure both left content and right video have reveal-stagger-item
if (indexHtml.includes('<div class="tech-content-box">') && !indexHtml.includes('<div class="tech-content-box reveal-stagger-item">')) {
  indexHtml = indexHtml.replace('<div class="tech-content-box">', '<div class="tech-content-box reveal-stagger-item">');
}

// In #felsefe, add smooth slide entrance to the visual frame and text
if (indexHtml.includes('<div class="felsefe-grid reveal-on-scroll">')) {
  indexHtml = indexHtml.replace('<div class="felsefe-grid reveal-on-scroll">', '<div class="felsefe-grid reveal-stagger-parent">');
  indexHtml = indexHtml.replace('<div class="felsefe-visual-frame">', '<div class="felsefe-visual-frame reveal-stagger-item">');
}

// In #yorumlar, ensure review card container has smooth reveal
if (indexHtml.includes('<div class="single-reviews-wrapper">')) {
  indexHtml = indexHtml.replace('<div class="single-reviews-wrapper">', '<div class="single-reviews-wrapper reveal-on-scroll">');
}

fs.writeFileSync(path.join(rootDir, 'index.html'), indexHtml, 'utf8');
console.log('Polished index.html reveal markup.');

// 2. Polish hakkimizda.html
let hakkimizdaHtml = fs.readFileSync(path.join(rootDir, 'hakkimizda.html'), 'utf8');
// Check containers in hakkimizda.html
if (hakkimizdaHtml.includes('<div class="about-grid-2">') && !hakkimizdaHtml.includes('<div class="about-grid-2 reveal-stagger-parent">')) {
  hakkimizdaHtml = hakkimizdaHtml.replace('<div class="about-grid-2">', '<div class="about-grid-2 reveal-stagger-parent">');
  hakkimizdaHtml = hakkimizdaHtml.replace('<div class="about-image-card">', '<div class="about-image-card reveal-stagger-item">');
}
fs.writeFileSync(path.join(rootDir, 'hakkimizda.html'), hakkimizdaHtml, 'utf8');
console.log('Polished hakkimizda.html reveal markup.');

// 3. Polish Service Subpages
const services = ['balyaj.html', 'blonde.html', 'kaynak.html', 'ombre.html', 'renklendirme.html'];
services.forEach(s => {
  const filePath = path.join(rootDir, s);
  let html = fs.readFileSync(filePath, 'utf8');
  if (html.includes('<div class="service-grid-2">') && !html.includes('<div class="service-grid-2 reveal-stagger-parent">')) {
    html = html.replace('<div class="service-grid-2">', '<div class="service-grid-2 reveal-stagger-parent">');
    html = html.replace('<div class="service-image-card">', '<div class="service-image-card reveal-stagger-item">');
  }
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Polished ${s} reveal markup.`);
});
