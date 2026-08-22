const fs = require('fs');
const path = require('path');

const inputCssPath = path.join(__dirname, '../src/input.css');

// 1. Update src/input.css with Subpage Motion Styling
let css = fs.readFileSync(inputCssPath, 'utf8');

const subpagesMotionCss = `
/* ==========================================================================
   18. SUBPAGES (HAKKIMIZDA & SERVICE DETAIL PAGES) MOTION SYSTEM
   ========================================================================== */
.service-main-container,
.about-main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 130px 24px 80px;
  position: relative;
  z-index: 2;
  animation: fadeIn 0.65s var(--ease-expo) forwards;
}

.breadcrumb-nav {
  font-size: 13px;
  color: var(--text-muted);
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  opacity: 0;
  animation: heroContentFadeUp 0.6s var(--ease-expo) 0.1s forwards;
}

.breadcrumb-nav a {
  color: var(--gold-dark);
  text-decoration: none;
  transition: color 0.2s ease;
}

.breadcrumb-nav a:hover {
  color: var(--text-espresso);
}

.service-grid-2,
.about-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 56px;
  align-items: flex-start;
}

.service-image-card,
.about-image-card {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(116, 109, 101, 0.12);
  border: 1px solid rgba(197, 168, 128, 0.35);
  background-color: #EFE8DF;
  position: sticky;
  top: 110px;
  aspect-ratio: 4 / 5;
  transition: transform 0.5s var(--ease-expo), box-shadow 0.5s var(--ease-expo), border-color 0.3s ease;
  animation: heroImageFadeIn 0.9s var(--ease-expo) 0.15s forwards;
}

.service-image-card:hover,
.about-image-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 26px 60px rgba(116, 109, 101, 0.18);
  border-color: var(--gold-primary);
}

.service-image-card img,
.about-image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.75s var(--ease-expo);
}

.service-image-card:hover img,
.about-image-card:hover img {
  transform: scale(1.05);
}

.service-kicker,
.about-kicker {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #A48358;
  display: block;
  margin-bottom: 12px;
  opacity: 0;
  animation: heroContentFadeUp 0.7s var(--ease-expo) 0.15s forwards;
}

.service-headline,
.about-headline {
  font-family: var(--font-serif);
  font-size: clamp(2.4rem, 3.8vw, 3.2rem);
  font-weight: 800;
  color: #1F1C19;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 18px;
  opacity: 0;
  animation: heroContentFadeUp 0.75s var(--ease-expo) 0.22s forwards;
}

.service-lead {
  font-size: 1.12rem;
  font-weight: 600;
  line-height: 1.7;
  color: #2D2926;
  margin-bottom: 18px;
  opacity: 0;
  animation: heroContentFadeUp 0.75s var(--ease-expo) 0.3s forwards;
}

.service-paragraph,
.about-paragraph {
  font-size: 1rem;
  line-height: 1.75;
  color: #5A554E;
  margin-bottom: 16px;
  opacity: 0;
  animation: heroContentFadeUp 0.75s var(--ease-expo) 0.36s forwards;
}

/* Service Process Steps (01 -> 02 -> 03) */
.service-process-section {
  background: #FFFFFF;
  border-radius: 18px;
  padding: 28px 24px;
  border: 1px solid rgba(197, 168, 128, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  margin: 28px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.process-title {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 700;
  color: #1F1C19;
  margin-bottom: 6px;
}

.process-step-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 14px 16px;
  border-radius: 12px;
  background: #FAF7F2;
  border: 1px solid rgba(197, 168, 128, 0.2);
  transition: transform 0.3s var(--ease-expo), background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.process-step-item:hover {
  transform: translateX(4px);
  background: #FFFFFF;
  border-color: var(--gold-primary);
  box-shadow: 0 6px 18px rgba(197, 168, 128, 0.12);
}

.process-step-item .process-step-badge {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(197, 168, 128, 0.15);
  border: 1px solid rgba(197, 168, 128, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-serif);
  font-size: 15px;
  font-weight: 700;
  color: var(--gold-dark);
  flex-shrink: 0;
  transition: transform 0.3s var(--ease-spring), background 0.3s ease;
}

.process-step-item:hover .process-step-badge {
  transform: scale(1.1) rotate(4deg);
  background: var(--gold-primary);
  color: #FFFFFF;
}

.process-step-info h4 {
  font-family: var(--font-serif);
  font-size: 1.05rem;
  font-weight: 700;
  color: #1F1C19;
  margin-bottom: 4px;
}

.process-step-info p {
  font-size: 0.9rem;
  line-height: 1.55;
  color: #635E57;
  margin: 0;
}

/* About Stats Grid */
.about-stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 28px 0;
}

.about-stat-card {
  background: #FFFFFF;
  border: 1px solid rgba(197, 168, 128, 0.35);
  border-radius: 16px;
  padding: 22px 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.03);
  transition: all 0.35s var(--ease-expo);
}

.about-stat-card:hover {
  border-color: #C5A880;
  transform: translateY(-4px);
  box-shadow: 0 16px 36px rgba(197, 168, 128, 0.18);
}

.about-stat-num {
  font-family: var(--font-serif);
  font-size: 1.85rem;
  font-weight: 800;
  color: #A48358;
  margin-bottom: 4px;
  line-height: 1.1;
}

.about-stat-label {
  font-size: 0.88rem;
  line-height: 1.5;
  color: #635E57;
}

/* CTA Buttons in Subpages */
.btn-espresso-cta {
  background: #1F1C19;
  color: #FFFFFF !important;
  border: 1px solid #1F1C19;
  box-shadow: 0 10px 26px rgba(31, 28, 25, 0.22);
  border-radius: 999px;
  padding: 14px 30px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.03em;
  text-decoration: none;
  transition: all 0.35s var(--ease-expo);
  cursor: pointer;
  margin-top: 10px;
  opacity: 0;
  animation: heroContentFadeUp 0.75s var(--ease-expo) 0.45s forwards;
}

.btn-espresso-cta:hover {
  background: #36312C;
  border-color: #36312C;
  transform: translateY(-3px);
  box-shadow: 0 16px 36px rgba(31, 28, 25, 0.32);
}

@media (max-width: 900px) {
  .service-main-container,
  .about-main-container {
    padding: 100px 16px 50px !important;
  }
  .service-grid-2,
  .about-grid-2 {
    grid-template-columns: 1fr !important;
    gap: 32px !important;
  }
  .service-image-card,
  .about-image-card {
    position: static !important;
    max-width: 440px !important;
    margin: 0 auto !important;
    aspect-ratio: 4 / 3 !important;
  }
  .about-stats-grid {
    grid-template-columns: 1fr !important;
  }
  .btn-espresso-cta {
    width: 100% !important;
    justify-content: center !important;
  }
}
`;

if (!css.includes('/* ==========================================================================\n   18. SUBPAGES')) {
  css += '\n' + subpagesMotionCss;
}

fs.writeFileSync(inputCssPath, css, 'utf8');
console.log('src/input.css updated with subpage motion classes!');

// 2. Subpage Motion Controller Script
const subpageMotionScript = `
  <script src="./js/i18n.js"></script>
  <script>
    // Global Drawer Toggle
    function toggleMenu() {
      const drawer = document.getElementById('side-drawer');
      const backdrop = document.getElementById('menu-backdrop');
      if (drawer && backdrop) {
        drawer.classList.toggle('active');
        backdrop.classList.toggle('active');
        document.body.classList.toggle('menu-open');
      }
    }
    window.toggleMenu = toggleMenu;

    document.addEventListener('DOMContentLoaded', () => {
      // 1. High-Performance IntersectionObserver for Scroll Reveals
      const observerOptions = {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      };

      const revealTargets = document.querySelectorAll('.reveal-on-scroll, .reveal-stagger-parent');

      if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              observer.unobserve(entry.target);
            }
          });
        }, observerOptions);

        revealTargets.forEach(el => revealObserver.observe(el));
      } else {
        revealTargets.forEach(el => el.classList.add('is-revealed'));
      }

      // 2. Drawer Links Auto Close
      const drawerLinks = document.querySelectorAll('.side-drawer a');
      drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
          const drawer = document.getElementById('side-drawer');
          const backdrop = document.getElementById('menu-backdrop');
          if (drawer && drawer.classList.contains('active')) {
            drawer.classList.remove('active');
            if (backdrop) backdrop.classList.remove('active');
            document.body.classList.remove('menu-open');
          }
        });
      });
    });
  </script>
`;

// 3. Process subpages
const subpages = [
  'hakkimizda.html',
  'balyaj.html',
  'blonde.html',
  'kaynak.html',
  'ombre.html',
  'renklendirme.html'
];

subpages.forEach(fileName => {
  const filePaths = [
    path.join(__dirname, '../', fileName),
    path.join(__dirname, '../public/', fileName)
  ];

  filePaths.forEach(fp => {
    if (!fs.existsSync(fp)) return;
    let html = fs.readFileSync(fp, 'utf8');

    // Add motion classes to containers
    html = html.replace('<div class="service-process-section">', '<div class="service-process-section reveal-stagger-parent">');
    html = html.replace(/<div class="process-step-item">/g, '<div class="process-step-item reveal-stagger-item">');
    html = html.replace('<div class="about-stats-grid">', '<div class="about-stats-grid reveal-stagger-parent">');
    html = html.replace(/<div class="about-stat-card">/g, '<div class="about-stat-card reveal-stagger-item">');
    html = html.replace('<div class="footer-grid-4">', '<div class="footer-grid-4 reveal-stagger-parent">');
    html = html.replace(/<div class="footer-col[^"]*">/g, '<div class="footer-col reveal-stagger-item">');

    // Replace bottom script with subpageMotionScript
    const scriptPos = html.lastIndexOf('<script');
    const bodyClosePos = html.lastIndexOf('</body>');
    if (scriptPos !== -1 && bodyClosePos !== -1) {
      html = html.substring(0, scriptPos) + subpageMotionScript + '\n' + html.substring(bodyClosePos);
    }

    fs.writeFileSync(fp, html, 'utf8');
    console.log('Applied universal motion design to:', fp);
  });
});
