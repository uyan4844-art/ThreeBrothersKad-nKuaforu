const fs = require('fs');

let indexHTML = fs.readFileSync('index.html', 'utf8');

// Replace all #hikayemiz navigation links in drawer and footer with hakkimizda.html
indexHTML = indexHTML.replace(
  /<li><a href="#hikayemiz" onclick="toggleMenu\(\)"><span data-i18n="nav_story">Hakkımızda<\/span>/g,
  `<li><a href="hakkimizda.html"><span data-i18n="nav_story">Hakkımızda</span>`
);

indexHTML = indexHTML.replace(
  /<li><a href="#hikayemiz" data-i18n="nav_story">Hikayemiz<\/a><\/li>/g,
  `<li><a href="hakkimizda.html" data-i18n="nav_story">Hakkımızda</a></li>`
);

fs.writeFileSync('index.html', indexHTML, 'utf8');
fs.copyFileSync('index.html', 'public/index.html');
fs.copyFileSync('hakkimizda.html', 'public/hakkimizda.html');
console.log('index.html and hakkimizda.html synced successfully');
