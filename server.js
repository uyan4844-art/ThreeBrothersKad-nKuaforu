const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml'
};

const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  let pathname = decodeURIComponent(parsedUrl.pathname);
  if (pathname === '/') pathname = '/index.html';
  
  let filePath = path.join(__dirname, pathname);
  
  // Fallback check: if /images/ requested, also check public/images
  if (!fs.existsSync(filePath) && pathname.startsWith('/images/')) {
    const altPath = path.join(__dirname, 'public', pathname);
    if (fs.existsSync(altPath)) filePath = altPath;
  }
  
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end('<h1>404 - Sayfa Bulunamadı</h1>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end(`Sunucu Hatası: ${err.code}`, 'utf-8');
      }
    } else {
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600'
      });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`ThreeBrothers Kuaför Sunucusu Başlatıldı: http://localhost:${PORT}`);
});
