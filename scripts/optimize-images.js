const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function downloadIfMissing(url, destPath) {
  if (fs.existsSync(destPath)) {
    console.log(`Already exists: ${destPath}`);
    return;
  }
  console.log(`Downloading ${url} -> ${destPath}`);
  const response = await fetch(url);
  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(destPath, buffer);
}

async function processImage(inputPath, outputBaseName, dir, variants) {
  if (!fs.existsSync(inputPath)) {
    console.warn(`File not found: ${inputPath}`);
    return;
  }

  const inputBuffer = fs.readFileSync(inputPath);

  for (const variant of variants) {
    const { suffix, width, quality = 80, height, fit = 'cover' } = variant;
    
    // WebP output
    const webpFilename = `${outputBaseName}${suffix}.webp`;
    const webpPath = path.join(dir, webpFilename);
    
    let pipelineWebp = sharp(inputBuffer);
    if (width || height) {
      pipelineWebp = pipelineWebp.resize(width, height, { fit, withoutEnlargement: true });
    }
    const webpData = await pipelineWebp
      .webp({ quality, effort: 6 })
      .toBuffer();
    
    fs.writeFileSync(webpPath, webpData);
    console.log(`Generated: ${webpFilename} (${(webpData.length / 1024).toFixed(1)} KB)`);

    // Also generate an optimized fallback JPG/PNG
    const isPng = inputPath.endsWith('.png');
    const fallbackExt = isPng ? '.png' : '.jpg';
    const fallbackFilename = `${outputBaseName}${suffix}${fallbackExt}`;
    const fallbackPath = path.join(dir, fallbackFilename);

    let pipelineFallback = sharp(inputBuffer);
    if (width || height) {
      pipelineFallback = pipelineFallback.resize(width, height, { fit, withoutEnlargement: true });
    }
    let fallbackData;
    if (isPng) {
      fallbackData = await pipelineFallback.png({ quality, compressionLevel: 9 }).toBuffer();
    } else {
      fallbackData = await pipelineFallback.jpeg({ quality, mozjpeg: true }).toBuffer();
    }
    fs.writeFileSync(fallbackPath, fallbackData);
    console.log(`Generated fallback: ${fallbackFilename} (${(fallbackData.length / 1024).toFixed(1)} KB)`);
  }
}

async function main() {
  const imagesDir = path.join(__dirname, '..', 'images');
  const publicImagesDir = path.join(__dirname, '..', 'public', 'images');

  if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
  if (!fs.existsSync(publicImagesDir)) fs.mkdirSync(publicImagesDir, { recursive: true });

  const beforeUrl = "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80";
  const afterUrl = "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80";

  await downloadIfMissing(beforeUrl, path.join(imagesDir, 'before-hair.jpg'));
  await downloadIfMissing(afterUrl, path.join(imagesDir, 'after-hair.jpg'));

  const jobs = [
    {
      input: path.join(imagesDir, 'logo.jpg'),
      outputBase: 'logo',
      variants: [
        { suffix: '', width: 120, height: 120, quality: 90 },
        { suffix: '-sm', width: 64, height: 64, quality: 90 }
      ]
    },
    {
      input: path.join(imagesDir, 'hero-salon.jpg'),
      outputBase: 'hero-salon',
      variants: [
        { suffix: '-mobile', width: 640, quality: 78 },
        { suffix: '-tablet', width: 1080, quality: 80 },
        { suffix: '-desktop', width: 1920, quality: 82 }
      ]
    },
    {
      input: path.join(imagesDir, 'before-hair.jpg'),
      outputBase: 'before-hair',
      variants: [
        { suffix: '-mobile', width: 480, height: 360, quality: 78 },
        { suffix: '-desktop', width: 800, height: 600, quality: 82 }
      ]
    },
    {
      input: path.join(imagesDir, 'after-hair.jpg'),
      outputBase: 'after-hair',
      variants: [
        { suffix: '-mobile', width: 480, height: 360, quality: 78 },
        { suffix: '-desktop', width: 800, height: 600, quality: 82 }
      ]
    },
    // Services
    {
      input: path.join(imagesDir, 'service-ombre.jpg'),
      outputBase: 'service-ombre',
      variants: [
        { suffix: '-sm', width: 400, height: 300, quality: 80 },
        { suffix: '-md', width: 700, height: 525, quality: 82 }
      ]
    },
    {
      input: path.join(imagesDir, 'service-gelin.jpg'),
      outputBase: 'service-gelin',
      variants: [
        { suffix: '-sm', width: 400, height: 300, quality: 80 },
        { suffix: '-md', width: 700, height: 525, quality: 82 }
      ]
    },
    {
      input: path.join(imagesDir, 'service-keratin.jpg'),
      outputBase: 'service-keratin',
      variants: [
        { suffix: '-sm', width: 400, height: 300, quality: 80 },
        { suffix: '-md', width: 700, height: 525, quality: 82 }
      ]
    },
    {
      input: path.join(imagesDir, 'service-kaynak.jpg'),
      outputBase: 'service-kaynak',
      variants: [
        { suffix: '-sm', width: 400, height: 300, quality: 80 },
        { suffix: '-md', width: 700, height: 525, quality: 82 }
      ]
    },
    // Gallery
    {
      input: path.join(imagesDir, 'gallery-1-fon.jpg'),
      outputBase: 'gallery-1-fon',
      variants: [
        { suffix: '-sm', width: 360, height: 360, quality: 80 },
        { suffix: '-md', width: 600, height: 600, quality: 82 }
      ]
    },
    {
      input: path.join(imagesDir, 'gallery-2-makyaj.jpg'),
      outputBase: 'gallery-2-makyaj',
      variants: [
        { suffix: '-sm', width: 360, height: 360, quality: 80 },
        { suffix: '-md', width: 600, height: 600, quality: 82 }
      ]
    },
    {
      input: path.join(imagesDir, 'gallery-3-spa.jpg'),
      outputBase: 'gallery-3-spa',
      variants: [
        { suffix: '-sm', width: 360, height: 360, quality: 80 },
        { suffix: '-md', width: 600, height: 600, quality: 82 }
      ]
    },
    {
      input: path.join(imagesDir, 'gallery-4-hazirlik.jpg'),
      outputBase: 'gallery-4-hazirlik',
      variants: [
        { suffix: '-sm', width: 360, height: 360, quality: 80 },
        { suffix: '-md', width: 600, height: 600, quality: 82 }
      ]
    },
    {
      input: path.join(imagesDir, 'gallery-5-renk.jpg'),
      outputBase: 'gallery-5-renk',
      variants: [
        { suffix: '-sm', width: 360, height: 360, quality: 80 },
        { suffix: '-md', width: 600, height: 600, quality: 82 }
      ]
    },
    {
      input: path.join(imagesDir, 'gallery-6-salon.jpg'),
      outputBase: 'gallery-6-salon',
      variants: [
        { suffix: '-sm', width: 360, height: 360, quality: 80 },
        { suffix: '-md', width: 600, height: 600, quality: 82 }
      ]
    }
  ];

  for (const job of jobs) {
    await processImage(job.input, job.outputBase, imagesDir, job.variants);
  }

  const files = fs.readdirSync(imagesDir);
  for (const file of files) {
    const src = path.join(imagesDir, file);
    const dest = path.join(publicImagesDir, file);
    fs.copyFileSync(src, dest);
  }
  console.log(`\nSuccessfully synchronized all ${files.length} assets to public/images/`);
}

main().catch(console.error);
