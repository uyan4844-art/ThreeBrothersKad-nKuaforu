const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '..');
const targetDir = path.join(srcDir, 'threebrotherswebsitesiyedek');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const itemsToCopy = [
  'index.html',
  'package.json',
  'package-lock.json',
  'server.js',
  'tailwind.config.js',
  'vercel.json',
  '.gitignore',
  'css',
  'js',
  'images',
  'public',
  'src',
  'scripts'
];

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src);
    for (const entry of entries) {
      if (entry === 'node_modules' || entry === '.git' || entry === 'backups' || entry === 'threebrotherswebsitesiyedek') continue;
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

let copiedCount = 0;
for (const item of itemsToCopy) {
  const srcPath = path.join(srcDir, item);
  const destPath = path.join(targetDir, item);
  if (fs.existsSync(srcPath)) {
    copyRecursive(srcPath, destPath);
    console.log('Kopyalandi:', item);
    copiedCount++;
  }
}

console.log('BASARILI: ' + copiedCount + ' ana oge threebrotherswebsitesiyedek klasorune yedeklendi.');
