const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const uploadedDir = 'C:\\Users\\pc\\.gemini\\antigravity-ide\\brain\\40c780d3-1d94-4dbe-a369-d71026fdb6d0\\.user_uploaded';
const imagesDir = path.join(__dirname, '..', 'images');
const publicImagesDir = path.join(__dirname, '..', 'public', 'images');

const galleryItems = [
  {
    input: path.join(uploadedDir, 'media_1787219080021.png'),
    baseName: 'gallery-1-fon',
    alt: 'Hacimli profesyonel fön ve saç şekillendirme - ThreeBrothers Bayan Kuaförü'
  },
  {
    input: path.join(uploadedDir, 'media_1787219133179.jpg'),
    baseName: 'gallery-2-makyaj',
    alt: 'Işıklı kemerli aynalı kuaför salonu ve saç tasarım istasyonları - ThreeBrothers'
  },
  {
    input: path.join(uploadedDir, 'media_1787219176011.png'),
    baseName: 'gallery-3-spa',
    alt: 'Saç yıkama, arındırma ve keratin bakım terapisi - ThreeBrothers Bayan Kuaförü'
  },
  {
    input: path.join(uploadedDir, 'media_1787219227500.jpg'),
    baseName: 'gallery-4-hazirlik',
    alt: 'Modern butik salon ambiyansı ve yuvarlak ışıklı aynalar - ThreeBrothers'
  },
  {
    input: path.join(uploadedDir, 'media_1787219259799.jpg'),
    baseName: 'gallery-5-renk',
    alt: 'Doğal sıcak balyaj ve ışıltılı dalgalı saç tasarımı - ThreeBrothers'
  },
  {
    input: path.join(uploadedDir, 'media_1787219356405.jpg'),
    baseName: 'gallery-6-salon',
    alt: 'Kişiye özel karamel kumral renklendirme ve hacimli fön - ThreeBrothers'
  }
];

async function processGallery() {
  for (const item of galleryItems) {
    if (!fs.existsSync(item.input)) {
      console.error(`Input file not found: ${item.input}`);
      continue;
    }

    const inputBuf = fs.readFileSync(item.input);

    const sizes = [
      { suffix: '-sm', width: 360, height: 360, quality: 80 },
      { suffix: '-md', width: 600, height: 600, quality: 82 }
    ];

    for (const s of sizes) {
      // 1. WebP format
      const webpPath = path.join(imagesDir, `${item.baseName}${s.suffix}.webp`);
      const webpBuf = await sharp(inputBuf)
        .resize(s.width, s.height, { fit: 'cover', position: 'center' })
        .webp({ quality: s.quality, effort: 6 })
        .toBuffer();
      fs.writeFileSync(webpPath, webpBuf);
      console.log(`Generated: ${item.baseName}${s.suffix}.webp (${(webpBuf.length / 1024).toFixed(1)} KB)`);

      // 2. Fallback JPG
      const jpgPath = path.join(imagesDir, `${item.baseName}${s.suffix}.jpg`);
      const jpgBuf = await sharp(inputBuf)
        .resize(s.width, s.height, { fit: 'cover', position: 'center' })
        .jpeg({ quality: s.quality, mozjpeg: true })
        .toBuffer();
      fs.writeFileSync(jpgPath, jpgBuf);
      console.log(`Generated: ${item.baseName}${s.suffix}.jpg (${(jpgBuf.length / 1024).toFixed(1)} KB)`);

      // Copy to public/images as well
      fs.copyFileSync(webpPath, path.join(publicImagesDir, `${item.baseName}${s.suffix}.webp`));
      fs.copyFileSync(jpgPath, path.join(publicImagesDir, `${item.baseName}${s.suffix}.jpg`));
    }
  }

  console.log('\nAll 6 gallery images processed and synchronized successfully!');
}

processGallery().catch(console.error);
