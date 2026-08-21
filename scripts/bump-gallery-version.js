const fs = require('fs');

['index.html', 'public/index.html'].forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/(gallery-[a-z]+-new-(?:sm|md)\.(?:webp|jpg))\?v=\d+/g, '$1?v=14');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Bumped cache bust to v=14 in', filePath);
  }
});
