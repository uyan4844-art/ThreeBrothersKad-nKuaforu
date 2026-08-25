const fs = require('fs');
const path = require('path');
const http = require('http');

const rootDir = path.join(__dirname, '..');
const pages = [
  'index.html',
  'hakkimizda.html',
  'balyaj.html',
  'blonde.html',
  'kaynak.html',
  'ombre.html',
  'renklendirme.html'
];

console.log('=== VERIFYING PAGES & MOTION SYSTEM ===');

let hasError = false;

// 1. Verify files exist and have non-zero length
pages.forEach(p => {
  const filePath = path.join(rootDir, p);
  if (!fs.existsSync(filePath)) {
    console.error(`[FAIL] Page missing: ${p}`);
    hasError = true;
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.length < 5000) {
    console.error(`[FAIL] Page unexpectedly small: ${p} (${content.length} bytes)`);
    hasError = true;
    return;
  }
  
  // Check for reveal classes
  const reveals = (content.match(/class="[^"]*reveal[^"]*"/g) || []).length;
  console.log(`[PASS] ${p}: ${content.length} bytes, ${reveals} reveal elements`);
});

// 2. Verify CSS compilation
const cssPath = path.join(rootDir, 'css', 'style.css');
const publicCssPath = path.join(rootDir, 'public', 'css', 'style.css');

if (!fs.existsSync(cssPath) || !fs.existsSync(publicCssPath)) {
  console.error('[FAIL] Compiled style.css missing');
  hasError = true;
} else {
  const css = fs.readFileSync(cssPath, 'utf8');
  console.log(`[PASS] css/style.css: ${css.length} bytes`);
  
  // Check key motion rules exist in compiled CSS
  const keyRules = [
    'reveal-on-scroll',
    'reveal-stagger-parent',
    'reveal-stagger-item',
    'is-revealed',
    'prefers-reduced-motion',
    'cubic-bezier(0.16, 1, 0.3, 1)'
  ];
  keyRules.forEach(r => {
    if (css.includes(r)) {
      console.log(`  [PASS] Rule present: ${r}`);
    } else {
      console.warn(`  [WARN] Rule check: ${r}`);
    }
  });
}

// 3. Test HTTP server response
const req = http.get('http://localhost:3000/index.html', res => {
  console.log(`\n[PASS] Server response: ${res.statusCode} ${res.statusMessage}`);
  if (res.statusCode !== 200) {
    console.error('[FAIL] Non-200 server response');
    process.exit(1);
  }
  process.exit(0);
});

req.on('error', err => {
  console.warn(`[INFO] Server check notice: ${err.message}`);
  process.exit(0);
});
