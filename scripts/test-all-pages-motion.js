const fs = require('fs');
const http = require('http');

const pages = [
  '/',
  '/index.html',
  '/hakkimizda.html',
  '/balyaj.html',
  '/blonde.html',
  '/kaynak.html',
  '/ombre.html',
  '/renklendirme.html'
];

async function checkPage(path) {
  return new Promise((resolve, reject) => {
    http.get('http://localhost:3000' + path, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          path,
          status: res.statusCode,
          hasRevealClasses: data.includes('reveal-on-scroll') || data.includes('reveal-stagger-parent'),
          hasI18n: data.includes('i18n.js'),
          hasFooter: data.includes('boutique-footer')
        });
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log('Testing all website routes for motion design & health:');
  for (const p of pages) {
    const res = await checkPage(p);
    console.log(`Route [${res.path}] -> Status: ${res.status} | Reveal Classes: ${res.hasRevealClasses} | i18n: ${res.hasI18n} | Footer: ${res.hasFooter}`);
  }
}

run();
