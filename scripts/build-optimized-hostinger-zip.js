const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { ZipArchive } = require('archiver');

const rootDir = path.resolve(__dirname, '..');
const deployZipRoot = path.join(rootDir, 'ThreeBrothers_Hostinger_Deploy.zip');
const desktopZip = 'C:\\Users\\pc\\Desktop\\ThreeBrothers_Hostinger_Deploy.zip';

console.log('🚀 THREE BROTHERS - LINUX/HOSTINGER POSIX-COMPLIANT ZIP BUILDER');
console.log('=================================================================\n');

// 1. Compile Latest Minified CSS
console.log('1. Compiling Tailwind CSS...');
try {
  execSync('node ./node_modules/@tailwindcss/cli/dist/index.mjs -i ./src/input.css -o ./css/style.css --minify', {
    cwd: rootDir,
    stdio: 'inherit'
  });
} catch (e) {
  console.warn('Tailwind build warning:', e.message);
}

// 2. Remove old zip files
if (fs.existsSync(deployZipRoot)) fs.unlinkSync(deployZipRoot);
if (fs.existsSync(desktopZip)) fs.unlinkSync(desktopZip);

// 3. Create zip stream with Archiver (Strict Unix/POSIX Forward Slashes `/`)
const output = fs.createWriteStream(deployZipRoot);
const archive = new ZipArchive({
  zlib: { level: 9 } // Maximum compression
});

output.on('close', function() {
  const sizeMb = (archive.pointer() / (1024 * 1024)).toFixed(2);
  console.log(`\n=================================================================`);
  console.log(`🎉 POSIX LINUX-COMPLIANT ZIP CREATED: ${sizeMb} MB (${archive.pointer()} bytes)`);
  console.log(`=================================================================`);

  // Copy to Desktop
  try {
    fs.copyFileSync(deployZipRoot, desktopZip);
    console.log(`🖥️ Masaüstü:     ${desktopZip}`);
  } catch (e) {
    console.warn('Could not copy to Desktop:', e.message);
  }
  console.log(`📁 Proje Dizini: ${deployZipRoot}\n`);
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);

// 4. Append HTML files
console.log('2. Appending HTML Pages:');
const htmlPages = [
  'index.html',
  'hakkimizda.html',
  'balyaj.html',
  'blonde.html',
  'kaynak.html',
  'ombre.html',
  'renklendirme.html'
];
htmlPages.forEach(p => {
  const full = path.join(rootDir, p);
  archive.file(full, { name: p });
  console.log(`  ✓ ${p}`);
});

// 5. Append Server & SEO Configs (.htaccess, robots.txt, sitemap.xml)
console.log('\n3. Appending Server & SEO Configs:');
const htaccessContent = `# ==============================================================================
# THREE BROTHERS BAYAN KUAFÖRÜ - HOSTINGER PRODUCTION CONFIG
# ==============================================================================

# 1. Enable Rewrite Engine & Force HTTPS
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>

# 2. Browser Caching & Performance (LiteSpeed / Apache)
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresDefault "access plus 1 month"
  ExpiresByType text/html "access plus 0 seconds"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType video/mp4 "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

# 3. Gzip / Deflate Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript application/json image/svg+xml
</IfModule>

# 4. Security Headers & UTF-8
AddDefaultCharset UTF-8
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
</IfModule>
`;
archive.append(htaccessContent, { name: '.htaccess' });
console.log('  ✓ .htaccess (LiteSpeed / Apache Cache & HTTPS)');

const robotsContent = `User-agent: *
Allow: /
Sitemap: https://threebrothers.com.tr/sitemap.xml
`;
archive.append(robotsContent, { name: 'robots.txt' });
console.log('  ✓ robots.txt');

archive.file(path.join(rootDir, 'sitemap.xml'), { name: 'sitemap.xml' });
console.log('  ✓ sitemap.xml');

// 6. Append CSS & JS (strictly with forward slashes)
console.log('\n4. Appending Styles & Scripts:');
archive.file(path.join(rootDir, 'css', 'style.css'), { name: 'css/style.css' });
console.log('  ✓ css/style.css');
archive.file(path.join(rootDir, 'js', 'i18n.js'), { name: 'js/i18n.js' });
console.log('  ✓ js/i18n.js');

// 7. Append Images (strictly with forward slashes)
console.log('\n5. Appending Production Images:');
const images = [
  'images/logo.webp',
  'images/logo.jpg',
  'images/hero-model.webp',
  'images/hero-model-mobile.webp',
  'images/story-salon.webp',
  'images/services/bento-1.webp',
  'images/services/bento-2.webp',
  'images/services/bento-4.webp',
  'images/services/bento-5.webp',
  'images/services/bento-6.webp'
];
images.forEach(img => {
  const full = path.join(rootDir, img.replace(/\//g, path.sep));
  // Note POSIX name with forward slash
  archive.file(full, { name: img });
  console.log(`  ✓ ${img}`);
});

// 8. Append Assets & Videos (strictly with forward slashes)
console.log('\n6. Appending Showcase Videos & Storefront Asset:');
const assets = [
  'assets/images/three-brothers-storefront.jpg',
  'assets/videos/video-technique.mp4',
  'assets/videos/video-1.mp4',
  'assets/videos/video-2.mp4',
  'assets/videos/video-3.mp4'
];
assets.forEach(asset => {
  const full = path.join(rootDir, asset.replace(/\//g, path.sep));
  // Note POSIX name with forward slash
  archive.file(full, { name: asset });
  console.log(`  ✓ ${asset}`);
});

archive.finalize();
