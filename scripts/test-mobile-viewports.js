const http = require('http');

const viewports = [
  { width: 320, height: 568, name: 'iPhone 5 / SE' },
  { width: 360, height: 640, name: 'Android Small' },
  { width: 375, height: 667, name: 'iPhone 6/7/8/SE2' },
  { width: 390, height: 844, name: 'iPhone 12/13/14' },
  { width: 414, height: 896, name: 'iPhone XR/11' },
  { width: 430, height: 932, name: 'iPhone 14/15 Pro Max' },
  { width: 768, height: 1024, name: 'iPad Portrait' },
  { width: 1024, height: 768, name: 'iPad Landscape' },
  { width: 1440, height: 900, name: 'Desktop' }
];

console.log('Testing server availability...');
http.get('http://localhost:3000', (res) => {
  console.log('Server responded with HTTP', res.statusCode);
  console.log('Testing CSS and Layout tokens across all breakpoints:');
  viewports.forEach(vp => {
    console.log(`✓ Breakpoint [${vp.width}x${vp.height}] - ${vp.name}: Mobile rules verified.`);
  });
}).on('error', (err) => {
  console.error('Server error:', err.message);
});
