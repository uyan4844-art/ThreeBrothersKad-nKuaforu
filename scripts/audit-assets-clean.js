const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const htmlFiles = [
  'index.html',
  'hakkimizda.html',
  'balyaj.html',
  'blonde.html',
  'kaynak.html',
  'ombre.html',
  'renklendirme.html'
];

const allReferencedFiles = new Set();

function analyzeFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Match src, href, content, srcset, poster, url(...)
  const attrRegex = /(?:src|href|content|srcset|poster)\s*=\s*["']([^"']+)["']/gi;
  let match;
  while ((match = attrRegex.exec(content)) !== null) {
    const val = match[1];
    val.split(',').forEach(item => {
      const token = item.trim().split(/\s+/)[0];
      if (!token) return;
      if (token.startsWith('http://') || token.startsWith('https://') || token.startsWith('//') || 
          token.startsWith('data:') || token.startsWith('#') || token.startsWith('mailto:') || 
          token.startsWith('tel:') || token.startsWith('javascript:')) {
        return;
      }
      const clean = token.replace(/^\.\//, '').replace(/^\//, '').split('?')[0].split('#')[0];
      if (clean && clean.includes('.')) {
        allReferencedFiles.add(clean);
      }
    });
  }

  const cssUrlRegex = /url\(\s*["']?([^"')]+)["']?\s*\)/gi;
  while ((match = cssUrlRegex.exec(content)) !== null) {
    const val = match[1];
    if (!val || val.startsWith('http') || val.startsWith('data:')) continue;
    const clean = val.replace(/^\.\//, '').replace(/^\//, '').split('?')[0].split('#')[0];
    if (clean && clean.includes('.')) {
      allReferencedFiles.add(clean);
    }
  }
}

// 1. Analyze HTML
htmlFiles.forEach(f => analyzeFile(path.join(rootDir, f)));

// 2. Analyze CSS & JS
analyzeFile(path.join(rootDir, 'css', 'style.css'));
analyzeFile(path.join(rootDir, 'js', 'i18n.js'));

console.log(`\n================ ALL REFERENCED FILES (${allReferencedFiles.size}) ================`);
let totalSize = 0;
Array.from(allReferencedFiles).sort().forEach(relPath => {
  const fullPath = path.join(rootDir, relPath);
  const exists = fs.existsSync(fullPath);
  if (exists) {
    const sz = fs.statSync(fullPath).size;
    totalSize += sz;
    console.log(`✓ [${(sz / (1024 * 1024)).toFixed(2).padStart(5, ' ')} MB]  ${relPath}`);
  } else {
    console.log(`✗ [ MISSING ]  ${relPath}`);
  }
});

console.log(`\nTotal Referenced Production Assets Size: ${(totalSize / (1024 * 1024)).toFixed(2)} MB`);
