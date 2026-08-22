const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
const publicIndexPath = path.join(__dirname, '../public/index.html');
const inputCssPath = path.join(__dirname, '../src/input.css');

let html = fs.readFileSync(indexPath, 'utf8');

// 1. Adjust Desktop Hero model position to be shifted slightly left so she is safely in frame
html = html.replace(/\.hero-bg-layer\s*\{[^}]+\}/, `
    .hero-bg-layer {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 58%;
      height: 100%;
      overflow: hidden;
      z-index: 0;
      opacity: 0;
      transform: translateX(-40px);
      animation: heroSlideRight 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
    }
`);

html = html.replace(/\.hero-bg-image\s*\{[^}]+\}/, `
    .hero-bg-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 72% 12%;
      filter: contrast(105%) saturate(104%);
      will-change: transform;
      transform: scale(1.02);
      animation: heroKenBurns 22s ease-in-out infinite alternate;
      display: block;
    }
`);

// 2. Ensure .reveal-up and .reveal-stagger-item are never invisible
html = html.replace(/\.reveal-up\s*\{[^}]+\}/g, `
    .reveal-up {
      opacity: 1;
      transform: none;
    }
`);

html = html.replace(/\.reveal-stagger-item\s*\{[^}]+\}/g, `
    .reveal-stagger-item {
      opacity: 1;
      transform: none;
    }
`);

fs.writeFileSync(indexPath, html, 'utf8');
fs.writeFileSync(publicIndexPath, html, 'utf8');

// Also update src/input.css
let inputCss = fs.readFileSync(inputCssPath, 'utf8');
inputCss = inputCss.replace(/\.hero-bg-image\s*\{[^}]+\}/g, `
.hero-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 72% 12%;
  filter: contrast(105%) saturate(104%);
  display: block;
}
`);
fs.writeFileSync(inputCssPath, inputCss, 'utf8');

console.log('Hero framing & visibility polished!');
