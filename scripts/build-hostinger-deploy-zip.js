const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.join(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const deployZipRoot = path.join(rootDir, 'ThreeBrothers_Hostinger_Deploy.zip');
const desktopZip = 'C:\\Users\\pc\\Desktop\\ThreeBrothers_Hostinger_Deploy.zip';

// 1. Create .htaccess for Hostinger Apache/LiteSpeed Caching & SEO
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

fs.writeFileSync(path.join(rootDir, '.htaccess'), htaccessContent, 'utf8');
fs.writeFileSync(path.join(publicDir, '.htaccess'), htaccessContent, 'utf8');

// 2. Create robots.txt
const robotsContent = `User-agent: *
Allow: /
Sitemap: https://threebrothers.com.tr/sitemap.xml
`;
fs.writeFileSync(path.join(rootDir, 'robots.txt'), robotsContent, 'utf8');
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent, 'utf8');

// 3. Create sitemap.xml
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://threebrothers.com.tr/</loc>
    <lastmod>2026-08-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://threebrothers.com.tr/hakkimizda.html</loc>
    <lastmod>2026-08-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://threebrothers.com.tr/balyaj.html</loc>
    <lastmod>2026-08-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://threebrothers.com.tr/blonde.html</loc>
    <lastmod>2026-08-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://threebrothers.com.tr/kaynak.html</loc>
    <lastmod>2026-08-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://threebrothers.com.tr/ombre.html</loc>
    <lastmod>2026-08-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://threebrothers.com.tr/renklendirme.html</loc>
    <lastmod>2026-08-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
</urlset>
`;
fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), sitemapContent, 'utf8');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent, 'utf8');

// 4. Ensure public folder has all images and assets synced
function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
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

copyDirRecursive(path.join(rootDir, 'images'), path.join(publicDir, 'images'));
copyDirRecursive(path.join(rootDir, 'assets'), path.join(publicDir, 'assets'));
copyDirRecursive(path.join(rootDir, 'css'), path.join(publicDir, 'css'));
copyDirRecursive(path.join(rootDir, 'js'), path.join(publicDir, 'js'));

// Also copy HTML pages from root to public
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
  fs.copyFileSync(path.join(rootDir, p), path.join(publicDir, p));
});

console.log('Synchronized all assets and HTML pages to public/ directory!');

// 5. Create the ZIP using PowerShell Compress-Archive
if (fs.existsSync(deployZipRoot)) fs.unlinkSync(deployZipRoot);
if (fs.existsSync(desktopZip)) fs.unlinkSync(desktopZip);

console.log('Generating production ZIP archive...');
const psCommand = `powershell -NoProfile -Command "Compress-Archive -Path '${publicDir}\\*' -DestinationPath '${deployZipRoot}' -Force"`;
execSync(psCommand, { stdio: 'inherit' });

// Copy to Desktop for direct user convenience
try {
  fs.copyFileSync(deployZipRoot, desktopZip);
  console.log('Copied deploy ZIP to Desktop:', desktopZip);
} catch (e) {
  console.warn('Could not copy to Desktop, but root ZIP is ready:', e.message);
}

const stats = fs.statSync(deployZipRoot);
const sizeMb = (stats.size / (1024 * 1024)).toFixed(2);
console.log(`\nSUCCESS! Hostinger Deploy ZIP created successfully (${sizeMb} MB)`);
console.log('Location 1:', deployZipRoot);
if (fs.existsSync(desktopZip)) {
  console.log('Location 2 (Desktop):', desktopZip);
}
