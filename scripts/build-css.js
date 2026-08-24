const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Building CSS...');
execSync('node ./node_modules/@tailwindcss/cli/dist/index.mjs -i ./src/input.css -o ./css/style.css --minify', { stdio: 'inherit' });
fs.mkdirSync('./public/css', { recursive: true });
fs.copyFileSync('./css/style.css', './public/css/style.css');
console.log('CSS built and copied to public/css/style.css successfully!');
