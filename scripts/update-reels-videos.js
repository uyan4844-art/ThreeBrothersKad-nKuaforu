const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const baseSource = 'C:\\Users\\pc\\Desktop\\Yeni klasör (3)\\threebrothersiçerik\\video2';

const mappings = [
  { src: '3.mp4', dest: 'video-1.mp4' },
  { src: '4.mp4', dest: 'video-2.mp4' },
  { src: '5.mp4', dest: 'video-3.mp4' }
];

mappings.forEach(item => {
  const srcPath = path.join(baseSource, item.src);
  const dest1 = path.join(rootDir, 'assets', 'videos', item.dest);
  const dest2 = path.join(rootDir, 'public', 'assets', 'videos', item.dest);

  if (!fs.existsSync(srcPath)) {
    console.error('Source file not found:', srcPath);
    process.exit(1);
  }

  fs.copyFileSync(srcPath, dest1);
  fs.copyFileSync(srcPath, dest2);

  const stats = fs.statSync(dest1);
  console.log(`Successfully updated ${item.dest} with ${item.src} (${(stats.size / (1024 * 1024)).toFixed(2)} MB)`);
});

console.log('All reels videos updated successfully!');
