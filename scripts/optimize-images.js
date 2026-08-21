const { execSync } = require('child_process');
const path = require('path');

console.log('Running safe asset optimization...');
require('./apply-exact-services.js');
