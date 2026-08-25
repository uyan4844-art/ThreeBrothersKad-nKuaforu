const { execSync } = require('child_process');
const path = require('path');

const zipPath = path.join(__dirname, '..', 'ThreeBrothers_Hostinger_Deploy.zip');

const ps = `Add-Type -AssemblyName System.IO.Compression.FileSystem; $z = [System.IO.Compression.ZipFile]::OpenRead('${zipPath.replace(/\\/g, '\\\\')}'); foreach ($e in $z.Entries) { Write-Output ($e.FullName + ' (' + [Math]::Round($e.Length/1024, 1) + ' KB)') }; $z.Dispose()`;

const res = execSync(`powershell -NoProfile -Command "${ps}"`, { encoding: 'utf8' });
console.log('--- VERIFIED ZIP FILE ENTRIES ---');
console.log(res);
