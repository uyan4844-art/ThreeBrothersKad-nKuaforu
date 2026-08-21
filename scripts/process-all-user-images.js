const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const brainDir = 'C:\\Users\\pc\\.gemini\\antigravity-ide\\brain\\41794f0b-56fe-4e4f-9fb4-fd749059942e';
const uploadDir = path.join(brainDir, '.user_uploaded');
const desktopDir = 'C:\\Users\\pc\\Desktop\\görsel';
const imagesDir = path.join(__dirname, '..', 'images');
const publicImagesDir = path.join(__dirname, '..', 'public', 'images');

async function processAll() {
  console.log('--- Processing All User-Provided Images ---');

  // 1. BEFORE & AFTER TRANSFORMATION (from media_1787354811417.png)
  const baSideBySide = path.join(uploadDir, 'media_1787354811417.png');
  if (fs.existsSync(baSideBySide)) {
    const meta = await sharp(baSideBySide).metadata();
    const halfWidth = Math.floor(meta.width / 2); // 400

    const beforeBuf = await sharp(baSideBySide)
      .extract({ left: 0, top: 0, width: halfWidth, height: meta.height })
      .toBuffer();

    const afterBuf = await sharp(baSideBySide)
      .extract({ left: halfWidth, top: 0, width: halfWidth, height: meta.height })
      .toBuffer();

    // Generate responsive before-hair
    const baVariants = [
      { suffix: '-mobile', width: 480, height: 600 },
      { suffix: '-desktop', width: 800, height: 1000 }
    ];

    for (const v of baVariants) {
      // Before WebP & JPG
      const bWebp = await sharp(beforeBuf).resize(v.width, v.height, { fit: 'cover' }).webp({ quality: 85 }).toBuffer();
      const bJpg = await sharp(beforeBuf).resize(v.width, v.height, { fit: 'cover' }).jpeg({ quality: 88, mozjpeg: true }).toBuffer();
      fs.writeFileSync(path.join(imagesDir, `before-hair${v.suffix}.webp`), bWebp);
      fs.writeFileSync(path.join(imagesDir, `before-hair${v.suffix}.jpg`), bJpg);
      fs.writeFileSync(path.join(publicImagesDir, `before-hair${v.suffix}.webp`), bWebp);
      fs.writeFileSync(path.join(publicImagesDir, `before-hair${v.suffix}.jpg`), bJpg);

      // After WebP & JPG
      const aWebp = await sharp(afterBuf).resize(v.width, v.height, { fit: 'cover' }).webp({ quality: 85 }).toBuffer();
      const aJpg = await sharp(afterBuf).resize(v.width, v.height, { fit: 'cover' }).jpeg({ quality: 88, mozjpeg: true }).toBuffer();
      fs.writeFileSync(path.join(imagesDir, `after-hair${v.suffix}.webp`), aWebp);
      fs.writeFileSync(path.join(imagesDir, `after-hair${v.suffix}.jpg`), aJpg);
      fs.writeFileSync(path.join(publicImagesDir, `after-hair${v.suffix}.webp`), aWebp);
      fs.writeFileSync(path.join(publicImagesDir, `after-hair${v.suffix}.jpg`), aJpg);
    }
    console.log('✓ Successfully processed matching Before & After transformation images.');
  }

  // 2. SERVICES CARDS
  const serviceJobs = [
    {
      // Sarı / Ombre & Balyaj (Salon Balayage with Stylist)
      input: path.join(desktopDir, 'WhatsApp Image 2026-08-22 at 01.34.22 (2).jpeg'),
      baseName: 'service-ombre'
    },
    {
      // Gelin Başı (User provided bridal photo)
      input: path.join(uploadDir, 'media_1787354539749.jpg'),
      baseName: 'service-gelin'
    },
    {
      // Mikro Kaynak (User provided hair extensions micro beads)
      input: path.join(uploadDir, 'media_1787354762036.png'),
      baseName: 'service-kaynak'
    },
    {
      // Katlı Kesim & Fön (ThreeBrothers branded cape model)
      input: path.join(desktopDir, 'WhatsApp Image 2026-08-22 at 01.34.22 (5).jpeg'),
      baseName: 'service-kesim'
    }
  ];

  for (const job of serviceJobs) {
    if (!fs.existsSync(job.input)) {
      console.warn('Service input missing:', job.input);
      continue;
    }
    const buf = fs.readFileSync(job.input);
    const serviceSizes = [
      { suffix: '-sm', width: 400, height: 500, quality: 84 },
      { suffix: '-md', width: 600, height: 750, quality: 86 }
    ];

    for (const s of serviceSizes) {
      const webp = await sharp(buf).resize(s.width, s.height, { fit: 'cover', position: 'top' }).webp({ quality: s.quality }).toBuffer();
      const jpg = await sharp(buf).resize(s.width, s.height, { fit: 'cover', position: 'top' }).jpeg({ quality: s.quality, mozjpeg: true }).toBuffer();
      
      fs.writeFileSync(path.join(imagesDir, `${job.baseName}${s.suffix}.webp`), webp);
      fs.writeFileSync(path.join(imagesDir, `${job.baseName}${s.suffix}.jpg`), jpg);
      fs.writeFileSync(path.join(publicImagesDir, `${job.baseName}${s.suffix}.webp`), webp);
      fs.writeFileSync(path.join(publicImagesDir, `${job.baseName}${s.suffix}.jpg`), jpg);
    }
    console.log(`✓ Processed service card: ${job.baseName}`);
  }

  // 3. UPDATE CACHE BUSTERS TO v=20
  ['index.html', 'public/index.html'].forEach(filePath => {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      content = content.replace(/(service-[a-z]+-(?:sm|md)\.(?:webp|jpg))\?v=\d+/g, '$1?v=20');
      content = content.replace(/(before-hair-(?:mobile|desktop)\.(?:webp|jpg))\?v=\d+/g, '$1?v=20');
      content = content.replace(/(after-hair-(?:mobile|desktop)\.(?:webp|jpg))\?v=\d+/g, '$1?v=20');
      content = content.replace(/(gallery-[a-z]+-new-(?:sm|md)\.(?:webp|jpg))\?v=\d+/g, '$1?v=20');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Cache busters updated to v=20 in ${filePath}`);
    }
  });

  console.log('\n--- All user images processed and HTML cache busters updated! ---');
}

processAll().catch(console.error);
