const fs = require('fs');

const pages = ['index.html', 'hakkimizda.html', 'balyaj.html', 'blonde.html', 'kaynak.html', 'ombre.html', 'renklendirme.html'];

pages.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  const scripts = content.match(/<script[\s\S]*?<\/script>/g) || [];
  console.log(`\n=================== ${p} (${scripts.length} scripts) ===================`);
  scripts.forEach((s, idx) => {
    if (s.includes('application/ld+json')) {
      console.log(`Script ${idx + 1}: JSON-LD`);
    } else if (s.includes('src=')) {
      console.log(`Script ${idx + 1}: External -> ${s.match(/src="([^"]+)"/)[1]}`);
    } else {
      console.log(`Script ${idx + 1}: Inline (${s.length} chars)`);
      console.log(s.substring(0, 180) + '...\n');
    }
  });
});
