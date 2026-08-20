const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('index.html', 'utf8');

// Extract all local ./images/... and ./css/... references
const regex = /(?:src|srcset|href)="([^"]+)"/g;
let match;
const localPaths = new Set();

while ((match = regex.exec(html)) !== null) {
  const val = match[1];
  const parts = val.split(/,\s*/);
  for (const part of parts) {
    const p = part.trim().split(/\s+/)[0];
    if (p.startsWith('./') || p.startsWith('images/') || p.startsWith('css/')) {
      localPaths.add(p);
    }
  }
}

console.log('Checking ' + localPaths.size + ' local asset references...');
let missing = 0;
for (const ref of localPaths) {
  const cleanPath = ref.replace(/^\.\//, '');
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
