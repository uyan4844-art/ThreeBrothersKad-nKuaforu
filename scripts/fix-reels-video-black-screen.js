const fs = require('fs');
const path = require('path');

const targetFiles = [
  path.join(__dirname, '../index.html'),
  path.join(__dirname, '../public/index.html')
];

targetFiles.forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  let html = fs.readFileSync(filePath, 'utf8');

  // 1. Update Video Tags in Reels section to have autoplay muted loop playsinline preload="auto"
  html = html.replace(
    /<video class="reel-video-elem" src="\.\/assets\/videos\/video-1\.mp4"[^>]*>/g,
    '<video class="reel-video-elem" src="./assets/videos/video-1.mp4" playsinline loop muted autoplay preload="auto"></video>'
  );

  html = html.replace(
    /<video class="reel-video-elem" src="\.\/assets\/videos\/video-2\.mp4"[^>]*>/g,
    '<video class="reel-video-elem" src="./assets/videos/video-2.mp4" playsinline loop muted autoplay preload="auto"></video>'
  );

  html = html.replace(
    /<video class="reel-video-elem" src="\.\/assets\/videos\/video-3\.mp4"[^>]*>/g,
    '<video class="reel-video-elem" src="./assets/videos/video-3.mp4" playsinline loop muted autoplay preload="auto"></video>'
  );

  // 2. Update Video Controller Script in index.html to ensure instant playback without black screen
  const oldControllerRegex = /\/\/ 6\. Reels Video Playback & Sound Control[\s\S]*?\/\/ 7\. Interactive Likes/;

  const newControllerCode = `// 6. Reels Video Playback & Sound Control (Instant Autoplay - Zero Black Screen)
      const reelWrappers = document.querySelectorAll('[data-reel-wrapper]');
      
      reelWrappers.forEach(wrapper => {
        const video = wrapper.querySelector('video');
        const soundBtn = wrapper.querySelector('[data-sound-btn]');
        const soundOff = soundBtn ? soundBtn.querySelector('.sound-off-icon') : null;
        const soundOn = soundBtn ? soundBtn.querySelector('.sound-on-icon') : null;

        if (!video) return;

        // Ensure video is properly configured for instant playback
        video.muted = true;
        video.playsInline = true;
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');

        // Autoplay immediately so video never shows black screen
        const startAutoplay = () => {
          video.play().then(() => {
            wrapper.classList.add('is-playing');
          }).catch(() => {
            // Fallback: If autoplay was blocked, seek slightly to render initial frame
            video.currentTime = 0.001;
          });
        };

        if (video.readyState >= 2) {
          startAutoplay();
        } else {
          video.addEventListener('loadeddata', startAutoplay, { once: true });
          video.addEventListener('canplay', startAutoplay, { once: true });
        }

        // Sound toggle
        if (soundBtn) {
          soundBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            video.muted = !video.muted;
            if (video.muted) {
              if (soundOff) soundOff.classList.remove('hidden');
              if (soundOn) soundOn.classList.add('hidden');
            } else {
              if (soundOff) soundOff.classList.add('hidden');
              if (soundOn) soundOn.classList.remove('hidden');
            }
          });
        }

        // Toggle Play/Pause on Click / Tap
        async function togglePlay(e) {
          if (e && e.target.closest('[data-sound-btn]')) return;
          
          if (video.paused) {
            try {
              await video.play();
              wrapper.classList.add('is-playing');
            } catch (err) {
              video.muted = true;
              try {
                await video.play();
                wrapper.classList.add('is-playing');
              } catch (playErr) {
                console.warn('Video playback error:', playErr);
              }
            }
          } else {
            video.pause();
            wrapper.classList.remove('is-playing');
          }
        }

        wrapper.addEventListener('click', togglePlay);

        // Sync visual state with actual video events
        video.addEventListener('play', () => wrapper.classList.add('is-playing'));
        video.addEventListener('pause', () => wrapper.classList.remove('is-playing'));
        video.addEventListener('ended', () => wrapper.classList.remove('is-playing'));
      });

      // Viewport-aware playback: play when in view, pause when out of view
      if ('IntersectionObserver' in window) {
        const videoObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            const vid = entry.target.querySelector('video');
            if (vid) {
              if (entry.isIntersecting) {
                vid.play().then(() => {
                  entry.target.classList.add('is-playing');
                }).catch(() => {});
              } else {
                vid.pause();
                entry.target.classList.remove('is-playing');
              }
            }
          });
        }, { threshold: 0.15 });

        reelWrappers.forEach(w => videoObserver.observe(w));
      }

      // 7. Interactive Likes`;

  if (oldControllerRegex.test(html)) {
    html = html.replace(oldControllerRegex, newControllerCode);
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log('Fixed reels video autoplay & black screen in:', filePath);
});
