const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('=== 1. COMPILING TAILWIND CSS ===');
try {
  execSync('node ./node_modules/@tailwindcss/cli/dist/index.mjs -i ./src/input.css -o ./css/style.css --minify', { stdio: 'inherit' });
} catch (e) {
  console.error('Tailwind build error:', e.message);
}

console.log('\n=== 2. SYNCING FILES TO PUBLIC FOLDER ===');
const filesToCopy = [
  'index.html',
  'balyaj.html',
  'blonde.html',
  'hakkimizda.html',
  'kaynak.html',
  'ombre.html',
  'renklendirme.html',
  'robots.txt',
  'sitemap.xml',
  '.htaccess'
];

fs.mkdirSync('public', { recursive: true });

filesToCopy.forEach(file => {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, path.join('public', file));
    console.log(`Synced ${file} -> public/${file}`);
  }
});

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

['css', 'js', 'images', 'assets'].forEach(dir => {
  if (fs.existsSync(dir)) {
    copyDirRecursive(dir, path.join('public', dir));
    console.log(`Synced directory ${dir}/ -> public/${dir}/`);
  }
});

console.log('\n=== 3. CREATING / UPDATING ZIP ARCHIVE ===');
// Create a clean zip for Hostinger / production deploy containing all web files
const zipPath = path.join(__dirname, '../ThreeBrothers_Hostinger_Deploy.zip');
if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
  console.log('Removed old zip archive.');
}

// Use PowerShell Compress-Archive to pack public directory contents
const psCmd = `powershell -Command "Compress-Archive -Path 'public\\*' -DestinationPath 'ThreeBrothers_Hostinger_Deploy.zip' -Force"`;
console.log('Executing:', psCmd);
execSync(psCmd, { stdio: 'inherit' });

const stats = fs.statSync(zipPath);
console.log(`Zip archive created successfully: ThreeBrothers_Hostinger_Deploy.zip (${(stats.size / (1024 * 1024)).toFixed(2)} MB)`);
