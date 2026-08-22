const http = require('http');

function checkUrl(path) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:3000${path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          path,
          statusCode: res.statusCode,
          contentType: res.headers['content-type'],
          length: data.length
        });
      });
    }).on('error', reject);
  });
}

async function run() {
  const paths = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/i18n.js',
    '/images/hero-salon-desktop.webp',
    '/images/gallery-balyaj-new-md.webp',
    '/images/before-hair-desktop.webp',
    '/images/logo.webp'
  ];

  console.log('Testing HTTP Endpoints on http://localhost:3000...\n');
  for (const p of paths) {
    try {
      const res = await checkUrl(p);
      console.log(`[${res.statusCode}] ${p.padEnd(35)} -> ${res.contentType} (${(res.length / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`[ERR] ${p} -> ${err.message}`);
    }
  }
}

run();
