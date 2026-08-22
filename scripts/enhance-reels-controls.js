const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
const publicIndexPath = path.join(__dirname, '../public/index.html');
const inputCssPath = path.join(__dirname, '../src/input.css');

// 1. Clean HTML in index.html & public/index.html
function fixReelsHtml(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');

  // Fix double closing tags
  html = html.replace(/<\/video><\/video>/g, '</video>');

  // Update JS video interaction controller
  const oldControllerRegex = /\/\/ 6\. Reels Video Playback[\s\S]*?\/\/ 7\. Interactive Likes/;

  const newController = `// 6. Reels Video Interaction (Continuous Autoplay + Tap to Pause/Resume + Sound Toggle)
      const reelWrappers = document.querySelectorAll('[data-reel-wrapper]');
      
      reelWrappers.forEach(wrapper => {
        const video = wrapper.querySelector('video');
        const soundBtn = wrapper.querySelector('[data-sound-btn]');
        const soundOff = soundBtn ? soundBtn.querySelector('.sound-off-icon') : null;
        const soundOn = soundBtn ? soundBtn.querySelector('.sound-on-icon') : null;

        if (!video) return;

        video.muted = true;
        video.playsInline = true;
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');

        // Safe continuous autoplay on load
        const safePlay = () => {
          video.play().then(() => {
            wrapper.classList.add('is-playing');
          }).catch(() => {
            video.currentTime = 0.001;
          });
        };

        if (video.readyState >= 2) {
          safePlay();
        } else {
          video.addEventListener('loadeddata', safePlay, { once: true });
          video.addEventListener('canplay', safePlay, { once: true });
        }

        // Sound Toggle Handler (Clicking sound button does NOT pause/stop video)
        if (soundBtn) {
          soundBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            video.muted = !video.muted;
            if (video.muted) {
              soundBtn.classList.remove('is-unmuted');
              if (soundOff) { soundOff.style.display = 'block'; soundOff.classList.remove('hidden'); }
              if (soundOn) { soundOn.style.display = 'none'; soundOn.classList.add('hidden'); }
            } else {
              soundBtn.classList.add('is-unmuted');
              if (soundOff) { soundOff.style.display = 'none'; soundOff.classList.add('hidden'); }
              if (soundOn) { soundOn.style.display = 'block'; soundOn.classList.remove('hidden'); }
              if (video.paused) {
                video.play();
                wrapper.classList.add('is-playing');
              }
            }
          });
        }

        // Tap / Click on Video -> Toggle Pause or Resume
        wrapper.addEventListener('click', (e) => {
          if (e.target.closest('[data-sound-btn]') || e.target.closest('.reel-view-profile-btn') || e.target.closest('a') || e.target.closest('button')) {
            return;
          }
          
          if (video.paused) {
            video.play().then(() => {
              wrapper.classList.add('is-playing');
            }).catch(() => {
              video.muted = true;
              video.play();
              wrapper.classList.add('is-playing');
            });
          } else {
            video.pause();
            wrapper.classList.remove('is-playing');
          }
        });

        // Sync visual classes with actual media state
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
    html = html.replace(oldControllerRegex, newController);
  }

  fs.writeFileSync(filePath, html, 'utf8');
}

fixReelsHtml(indexPath);
fixReelsHtml(publicIndexPath);
console.log('Fixed Reels HTML and JS controller in index.html & public/index.html!');

// 2. Enhance CSS in src/input.css
let css = fs.readFileSync(inputCssPath, 'utf8');

const soundBtnEnhancedCss = `
.reel-sound-toggle-btn {
  position: absolute;
  bottom: 14px;
  right: 14px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(31, 28, 25, 0.78);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1.5px solid rgba(255, 255, 255, 0.35);
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 25;
  transition: all 0.25s var(--ease-spring);
}

.reel-sound-toggle-btn:hover {
  background: var(--gold-primary);
  color: #141210;
  border-color: var(--gold-primary);
  transform: scale(1.1);
}

.reel-sound-toggle-btn.is-unmuted {
  background: var(--gold-primary);
  color: #141210;
  border-color: #FFFFFF;
  box-shadow: 0 0 14px rgba(197, 168, 128, 0.65);
}
`;

css = css.replace(/\.reel-sound-toggle-btn \{[\s\S]*?\}/, soundBtnEnhancedCss.trim());
fs.writeFileSync(inputCssPath, css, 'utf8');
console.log('Updated src/input.css with enhanced sound button styling!');
