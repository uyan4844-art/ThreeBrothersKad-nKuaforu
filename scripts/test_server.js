const http = require('http');

const routes = [
  '/',
  '/index.html',
  '/balyaj.html',
  '/blonde.html',
  '/kaynak.html',
  '/ombre.html',
  '/renklendirme.html',
  '/hakkimizda.html',
  '/css/style.css',
  '/js/i18n.js'
];

async function testRoute(route) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${route}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          route,
          status: res.statusCode,
          length: data.length,
          hasThreeBrothers: data.includes('Three Brothers'),
          hasInstagram: data.includes('threebrotherrrs')
        });
      });
    }).on('error', (err) => {
      resolve({ route, error: err.message });
    });
  });
}

async function run() {
  console.log('Testing server endpoints:');
  for (const r of routes) {
    const res = await testRoute(r);
    console.log(JSON.stringify(res));
  }
}

run();
