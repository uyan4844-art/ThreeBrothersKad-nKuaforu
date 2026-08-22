const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('index.html', 'utf8');

// Extract all local ./images/..., ./assets/..., ./css/..., ./js/... references
const regex = /(?:src|srcset|href)="([^"]+)"|url\(['"]?(\.\/(?:images|assets)\/[^'")]+)['"]?\)/g;
let match;
const localPaths = new Set();

while ((match = regex.exec(html)) !== null) {
  const val = match[1] || match[2];
  if (!val) continue;
  const parts = val.split(/,\s*/);
  for (const part of parts) {
    const p = part.trim().split(/\s+/)[0];
    if (p.startsWith('./') || p.startsWith('images/') || p.startsWith('assets/') || p.startsWith('css/') || p.startsWith('js/')) {
      localPaths.add(p);
    }
  }
}

console.log('Checking ' + localPaths.size + ' local asset references...');
let missing = 0;
for (const ref of localPaths) {
  const cleanPath = ref.replace(/^\.\//, '').split('?')[0];
  if (!fs.existsSync(cleanPath)) {
    console.error('MISSING:', cleanPath);
    missing++;
  } else {
    const size = fs.statSync(cleanPath).size;
    console.log('OK:', cleanPath, '(' + (size / 1024).toFixed(1) + ' KB)');
  }
}

if (missing === 0) {
  console.log('\nALL ASSET REFERENCES VERIFIED SUCCESSFULLY! 0 missing files.');
} else {
  console.error('\nERROR:', missing, 'files are missing!');
  process.exit(1);
}
