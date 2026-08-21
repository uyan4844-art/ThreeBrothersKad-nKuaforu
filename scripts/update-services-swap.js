const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const brainDir = 'C:\\Users\\pc\\.gemini\\antigravity-ide\\brain\\41794f0b-56fe-4e4f-9fb4-fd749059942e';
const uploadDir = path.join(brainDir, '.user_uploaded');
const imagesDir = path.join(__dirname, '..', 'images');
const publicImagesDir = path.join(__dirname, '..', 'public', 'images');

async function updateServiceCards() {
  const jobs = [
    {
      // 1. Sarı / Ombre & Balyaj -> Image 1 (WhatsApp Image ... (1).jpeg)
      input: path.join(brainDir, 'WhatsApp Image 2026-08-22 at 01.34.22 (1).jpeg'),
      baseName: 'service-ombre'
    },
    {
      // 2. Gelin Başı -> User bridal photo
      input: path.join(uploadDir, 'media_1787354539749.jpg'),
      baseName: 'service-gelin'
    },
    {
      // 3. Mikro Kaynak -> User micro extension photo
      input: path.join(uploadDir, 'media_1787354762036.png'),
      baseName: 'service-kaynak'
    },
    {
      // 4. Katlı Kesim & Havalı Fön -> Image 2 (WhatsApp Image ... (2).jpeg)
      input: path.join(brainDir, 'WhatsApp Image 2026-08-22 at 01.34.22 (2).jpeg'),
      baseName: 'service-kesim'
    }
  ];

  for (const job of jobs) {
    if (!fs.existsSync(job.input)) {
      console.error('File not found:', job.input);
      continue;
    }
    const buf = fs.readFileSync(job.input);
    const sizes = [
      { suffix: '-sm', width: 400, height: 500, quality: 86 },
      { suffix: '-md', width: 600, height: 750, quality: 88 }
    ];

    for (const s of sizes) {
      const webp = await sharp(buf).resize(s.width, s.height, { fit: 'cover', position: 'top' }).webp({ quality: s.quality }).toBuffer();
      const jpg = await sharp(buf).resize(s.width, s.height, { fit: 'cover', position: 'top' }).jpeg({ quality: s.quality, mozjpeg: true }).toBuffer();
      
      fs.writeFileSync(path.join(imagesDir, `${job.baseName}${s.suffix}.webp`), webp);
      fs.writeFileSync(path.join(imagesDir, `${job.baseName}${s.suffix}.jpg`), jpg);
      fs.writeFileSync(path.join(publicImagesDir, `${job.baseName}${s.suffix}.webp`), webp);
      fs.writeFileSync(path.join(publicImagesDir, `${job.baseName}${s.suffix}.jpg`), jpg);
    }
    console.log('✓ Successfully generated service card:', job.baseName);
  }

  // Update cache bust query param in index.html & public/index.html
  ['index.html', 'public/index.html'].forEach(f => {
    const fullPath = path.join(__dirname, '..', f);
    let html = fs.readFileSync(fullPath, 'utf8');
    html = html.replace(/\?v=20/g, '?v=21');
    fs.writeFileSync(fullPath, html, 'utf8');
    console.log('✓ Bumped cache version to v=21 in', f);
  });
}

updateServiceCards().catch(console.error);
