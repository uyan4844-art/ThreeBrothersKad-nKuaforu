const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const uploadedDir = 'C:\\Users\\pc\\.gemini\\antigravity-ide\\brain\\40c780d3-1d94-4dbe-a369-d71026fdb6d0\\.user_uploaded';
const imagesDir = path.join(__dirname, '..', 'images');
const publicImagesDir = path.join(__dirname, '..', 'public', 'images');

const newGallery = [
  {
    input: path.join(uploadedDir, 'media_1787219080021.png'),
    name: 'gallery-fon-new'
  },
  {
    input: path.join(uploadedDir, 'media_1787219133179.jpg'),
    name: 'gallery-ayna-new'
  },
  {
    input: path.join(uploadedDir, 'media_1787219176011.png'),
    name: 'gallery-spa-new'
  },
  {
    input: path.join(uploadedDir, 'media_1787219227500.jpg'),
    name: 'gallery-salon-new'
  },
  {
    input: path.join(uploadedDir, 'media_1787219259799.jpg'),
    name: 'gallery-balyaj-new'
  },
  {
    input: path.join(uploadedDir, 'media_1787219356405.jpg'),
    name: 'gallery-karamel-new'
  }
];

async function generateDistinctFiles() {
  for (const item of newGallery) {
    if (!fs.existsSync(item.input)) {
      console.error('Not found:', item.input);
      continue;
    }
    const buf = fs.readFileSync(item.input);

    const sizes = [
      { suffix: '-sm', width: 360, height: 360, quality: 85 },
      { suffix: '-md', width: 600, height: 600, quality: 88 }
    ];

    for (const s of sizes) {
      const webpName = `${item.name}${s.suffix}.webp`;
      const jpgName = `${item.name}${s.suffix}.jpg`;

      const webpBuf = await sharp(buf)
        .resize(s.width, s.height, { fit: 'cover', position: 'center' })
        .webp({ quality: s.quality, effort: 6 })
        .toBuffer();

      const jpgBuf = await sharp(buf)
        .resize(s.width, s.height, { fit: 'cover', position: 'center' })
        .jpeg({ quality: s.quality, mozjpeg: true })
        .toBuffer();

      fs.writeFileSync(path.join(imagesDir, webpName), webpBuf);
      fs.writeFileSync(path.join(imagesDir, jpgName), jpgBuf);

      fs.writeFileSync(path.join(publicImagesDir, webpName), webpBuf);
      fs.writeFileSync(path.join(publicImagesDir, jpgName), jpgBuf);

      console.log(`Created: ${webpName} and ${jpgName}`);
    }
  }
}

generateDistinctFiles().catch(console.error);
