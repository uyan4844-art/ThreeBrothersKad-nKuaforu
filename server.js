const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const zlib = require('zlib');

const PORT = process.env.PORT || 3000;
const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);
  if (pathname === '/') pathname = '/index.html';
  
  let filePath = path.normalize(path.join(__dirname, pathname));
  
  // Prevent Path Traversal attacks
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end('<h1>403 - Yetkisiz Erişim (Forbidden)</h1>', 'utf-8');
    return;
  }
  
  // Fallback checks for public directory
  if (!fs.existsSync(filePath)) {
    const publicPath = path.normalize(path.join(__dirname, 'public', pathname));
    if (publicPath.startsWith(path.join(__dirname, 'public')) && fs.existsSync(publicPath)) {
      filePath = publicPath;
    }
  }
  
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  if (!fs.existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end('<h1>404 - Sayfa Bulunamadı</h1>', 'utf-8');
    return;
  }

  const stat = fs.statSync(filePath);
  if (stat.isDirectory()) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  // Handle Video Range Requests for smooth streaming
  if (ext === '.mp4' || ext === '.webm') {
    const range = req.headers.range;
    const fileSize = stat.size;

    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunksize = (end - start) + 1;
      const file = fs.createReadStream(filePath, { start, end });
      const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600'
      };
      res.writeHead(206, head);
      file.pipe(res);
    } else {
      const head = {
        'Content-Length': fileSize,
        'Content-Type': contentType,
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'public, max-age=3600'
      };
      res.writeHead(200, head);
      fs.createReadStream(filePath).pipe(res);
    }
    return;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end(`Sunucu Hatası: ${err.code}`, 'utf-8');
      return;
    }

    const headers = {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
      'X-Content-Type-Options': 'nosniff'
    };

    const acceptEncoding = req.headers['accept-encoding'] || '';
    const compressible = ['text/html', 'text/css', 'text/javascript', 'application/json', 'image/svg+xml'].some(type => contentType.includes(type));

    if (compressible && acceptEncoding.includes('gzip')) {
      headers['Content-Encoding'] = 'gzip';
      res.writeHead(200, headers);
      zlib.gzip(content, (err, zipped) => {
        if (err) {
          res.end(content);
        } else {
          res.end(zipped);
        }
      });
    } else {
      res.writeHead(200, headers);
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`ThreeBrothers Kuaför Sunucusu Başlatıldı: http://localhost:${PORT}`);
});
