const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
const publicIndexPath = path.join(__dirname, '../public/index.html');

function updateReelsAndPlayback(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');

  // 1. Update Reel 2 link to https://www.instagram.com/reel/DYVBpEhsoFD/
  const reel2Start = html.indexOf('<!-- Reel 2: Ombre & Sombre -->');
  const reel3Start = html.indexOf('<!-- Reel 3: Professional Hair Masterclass -->');

  if (reel2Start !== -1 && reel3Start !== -1) {
    let reel2Html = html.substring(reel2Start, reel3Start);
    reel2Html = reel2Html.replace(
      '<a href="https://www.instagram.com/threebrotherss/" target="_blank" rel="noopener noreferrer" class="reel-view-profile-btn" data-i18n="insta_view_profile">Profili Gör</a>',
      '<a href="https://www.instagram.com/reel/DYVBpEhsoFD/" target="_blank" rel="noopener noreferrer" class="reel-view-profile-btn" data-i18n="insta_view_profile">Profili Gör</a>'
    );
    reel2Html = reel2Html.replace(
      '<a href="https://www.instagram.com/threebrotherss/" target="_blank" rel="noopener noreferrer" class="reel-see-more-link" data-i18n="insta_see_more">',
      '<a href="https://www.instagram.com/reel/DYVBpEhsoFD/" target="_blank" rel="noopener noreferrer" class="reel-see-more-link" data-i18n="insta_see_more">'
    );
    html = html.substring(0, reel2Start) + reel2Html + html.substring(reel3Start);
  }

  // 2. Upgrade the video playback controller in the script to be rock solid
  const oldPlaybackLogic = `      // 6. Reels Video Playback & Sound Control
      const reelWrappers = document.querySelectorAll('[data-reel-wrapper]');
      reelWrappers.forEach(wrapper => {
        const video = wrapper.querySelector('video');
        const soundBtn = wrapper.querySelector('[data-sound-btn]');
        const soundOff = soundBtn ? soundBtn.querySelector('.sound-off-icon') : null;
        const soundOn = soundBtn ? soundBtn.querySelector('.sound-on-icon') : null;

        if (!video) return;

        if (soundBtn) {
          soundBtn.addEventListener('click', (e) => {
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

        wrapper.addEventListener('click', () => {
          if (video.paused) {
            reelWrappers.forEach(otherWrap => {
              const otherVid = otherWrap.querySelector('video');
              if (otherVid && otherVid !== video && !otherVid.paused) {
                otherVid.pause();
                otherWrap.classList.remove('is-playing');
              }
            });

            video.play().then(() => {
              wrapper.classList.add('is-playing');
            }).catch(() => {});
          } else {
            video.pause();
            wrapper.classList.remove('is-playing');
          }
        });

        video.addEventListener('pause', () => wrapper.classList.remove('is-playing'));
        video.addEventListener('play', () => wrapper.classList.add('is-playing'));
        video.addEventListener('ended', () => wrapper.classList.remove('is-playing'));
      });`;

  const newPlaybackLogic = `      // 6. Reels Video Playback & Sound Control (Ultra-Reliable Cross-Browser Controller)
      const reelWrappers = document.querySelectorAll('[data-reel-wrapper]');
      
      reelWrappers.forEach(wrapper => {
        const video = wrapper.querySelector('video');
        const soundBtn = wrapper.querySelector('[data-sound-btn]');
        const soundOff = soundBtn ? soundBtn.querySelector('.sound-off-icon') : null;
        const soundOn = soundBtn ? soundBtn.querySelector('.sound-on-icon') : null;

        if (!video) return;

        // Ensure video is properly configured for instant touch/click playback
        video.playsInline = true;
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');

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
            // Pause any other active reel
            reelWrappers.forEach(otherWrap => {
              const otherVid = otherWrap.querySelector('video');
              if (otherVid && otherVid !== video && !otherVid.paused) {
                otherVid.pause();
                otherWrap.classList.remove('is-playing');
              }
            });

            try {
              await video.play();
              wrapper.classList.add('is-playing');
            } catch (err) {
              // Retry with muted on browser policy restriction
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
      });`;

  if (html.includes(oldPlaybackLogic)) {
    html = html.replace(oldPlaybackLogic, newPlaybackLogic);
  } else {
    // If exact match fails, search for the section comment
    const startIdx = html.indexOf('// 6. Reels Video Playback');
    const endIdx = html.indexOf('// Auto-pause videos when scrolled away');
    if (startIdx !== -1 && endIdx !== -1) {
      html = html.substring(0, startIdx) + newPlaybackLogic + '\n\n' + html.substring(endIdx);
    }
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log('Updated Reel 2 link and Video Playback Engine in', filePath);
}

updateReelsAndPlayback(indexPath);
updateReelsAndPlayback(publicIndexPath);
