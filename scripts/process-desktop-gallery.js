const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sourceDir = 'C:\\Users\\pc\\Desktop\\görsel';
const imagesDir = path.join(__dirname, '..', 'images');
const publicImagesDir = path.join(__dirname, '..', 'public', 'images');

const mappings = [
  {
    file: 'WhatsApp Image 2026-08-22 at 01.34.22.jpeg',
    baseName: 'gallery-fon-new'
  },
  {
    file: 'WhatsApp Image 2026-08-22 at 01.34.22 (1).jpeg',
    baseName: 'gallery-ayna-new'
  },
  {
    file: 'WhatsApp Image 2026-08-22 at 01.34.22 (2).jpeg',
    baseName: 'gallery-spa-new'
  },
  {
    file: 'WhatsApp Image 2026-08-22 at 01.34.22 (3).jpeg',
    baseName: 'gallery-salon-new'
  },
  {
    file: 'WhatsApp Image 2026-08-22 at 01.34.22 (4).jpeg',
    baseName: 'gallery-balyaj-new'
  },
  {
    file: 'WhatsApp Image 2026-08-22 at 01.34.22 (5).jpeg',
    baseName: 'gallery-karamel-new'
  }
];

async function run() {
  console.log('Processing gallery images from:', sourceDir);

  for (const item of mappings) {
    const srcPath = path.join(sourceDir, item.file);
    if (!fs.existsSync(srcPath)) {
      console.error('Source file missing:', srcPath);
      continue;
    }

    const inputBuf = fs.readFileSync(srcPath);

    const sizes = [
      { suffix: '-sm', width: 360, height: 360, quality: 82 },
      { suffix: '-md', width: 600, height: 600, quality: 85 }
    ];

    for (const s of sizes) {
      // 1. WebP
      const webpPath = path.join(imagesDir, `${item.baseName}${s.suffix}.webp`);
      const webpBuf = await sharp(inputBuf)
        .resize(s.width, s.height, { fit: 'cover', position: 'center' })
        .webp({ quality: s.quality, effort: 6 })
        .toBuffer();
      fs.writeFileSync(webpPath, webpBuf);

      // 2. JPG fallback
      const jpgPath = path.join(imagesDir, `${item.baseName}${s.suffix}.jpg`);
      const jpgBuf = await sharp(inputBuf)
        .resize(s.width, s.height, { fit: 'cover', position: 'center' })
        .jpeg({ quality: s.quality, mozjpeg: true })
        .toBuffer();
      fs.writeFileSync(jpgPath, jpgBuf);

      // Copy to public/images
      fs.copyFileSync(webpPath, path.join(publicImagesDir, `${item.baseName}${s.suffix}.webp`));
      fs.copyFileSync(jpgPath, path.join(publicImagesDir, `${item.baseName}${s.suffix}.jpg`));

      console.log(`✓ ${item.baseName}${s.suffix}: WebP (${(webpBuf.length / 1024).toFixed(1)} KB), JPG (${(jpgBuf.length / 1024).toFixed(1)} KB)`);
    }
  }

  console.log('\nAll 6 gallery images processed and synchronized to images/ and public/images/ successfully!');
}

run().catch(console.error);
