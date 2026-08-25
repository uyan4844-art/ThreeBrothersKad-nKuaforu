const fs = require('fs');

const css = fs.readFileSync('src/input.css', 'utf8');

// Find all keyframes
const keyframes = css.match(/@keyframes[^{]+{[^}]+({[^}]+})*[^}]*}/g) || [];
console.log('--- KEYFRAMES FOUND ---');
keyframes.forEach(k => {
  const name = k.match(/@keyframes\s+([a-zA-Z0-9_-]+)/);
  if (name) console.log(name[1]);
});

// Find animation classes
console.log('\n--- REVEAL & MOTION CLASSES ---');
const motionLines = css.split('\n').filter(l => l.includes('reveal-') || l.includes('fade') || l.includes('slide') || l.includes('hero-anim') || l.includes('transition:') || l.includes('transform:'));
console.log('Sample count of transition/transform lines:', motionLines.length);

// Let's find sections of motion in input.css
const sections = css.match(/\/\* ===+[^*]+===+ \*\//g) || [];
console.log('\n--- CSS MAJOR SECTIONS ---');
sections.forEach(s => console.log(s.replace(/[\n\r]/g, ' ')));
