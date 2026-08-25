const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const inputCssPath = path.join(rootDir, 'src', 'input.css');

console.log('--- UPGRADING MOTION SYSTEM IN src/input.css ---');
let css = fs.readFileSync(inputCssPath, 'utf8');

// 1. Upgrade Motion Tokens in :root
const rootMotionVariables = `  /* Luxury Motion System Tokens */
  --ease-luxury: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-hover: cubic-bezier(0.25, 1, 0.5, 1);
  --ease-smooth: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-spring: cubic-bezier(0.34, 1.4, 0.64, 1);
  --ease-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --dur-fast: 0.22s;
  --dur-normal: 0.35s;
  --dur-reveal: 0.6s;`;

// Replace easing curves section in :root
css = css.replace(/\/\* Easing curves \*\/[\s\S]*?--ease-spring:[^;]+;/, rootMotionVariables);

// 2. Upgrade Section 2 (MOTION DESIGN & SCROLL REVEAL ENGINE)
const modernMotionEngine = `/* ==========================================================================
   2. MOTION DESIGN & SCROLL REVEAL ENGINE
   ========================================================================== */

/* Universal Scroll Reveal Primitives */
.reveal-on-scroll,
.reveal-slide-up {
  opacity: 0;
  transform: translate3d(0, 22px, 0);
  transition: opacity 0.6s var(--ease-luxury), transform 0.6s var(--ease-luxury);
  will-change: opacity, transform;
  backface-visibility: hidden;
}

.reveal-fade {
  opacity: 0;
  transition: opacity 0.65s var(--ease-luxury);
  will-change: opacity;
}

.reveal-scale {
  opacity: 0;
  transform: scale(0.96);
  transition: opacity 0.6s var(--ease-luxury), transform 0.6s var(--ease-luxury);
  will-change: opacity, transform;
}

.reveal-slide-left {
  opacity: 0;
  transform: translate3d(-24px, 0, 0);
  transition: opacity 0.65s var(--ease-luxury), transform 0.65s var(--ease-luxury);
  will-change: opacity, transform;
}

.reveal-slide-right {
  opacity: 0;
  transform: translate3d(24px, 0, 0);
  transition: opacity 0.65s var(--ease-luxury), transform 0.65s var(--ease-luxury);
  will-change: opacity, transform;
}

/* Active Revealed States */
.reveal-on-scroll.is-revealed,
.reveal-slide-up.is-revealed,
.reveal-fade.is-revealed,
.reveal-scale.is-revealed,
.reveal-slide-left.is-revealed,
.reveal-slide-right.is-revealed {
  opacity: 1 !important;
  transform: translate3d(0, 0, 0) scale(1) !important;
}

/* Staggered Children for Grid & List Containers */
.reveal-stagger-parent .reveal-stagger-item {
  opacity: 0;
  transform: translate3d(0, 20px, 0);
  transition: opacity 0.55s var(--ease-luxury), transform 0.55s var(--ease-luxury);
  will-change: opacity, transform;
  backface-visibility: hidden;
}

.reveal-stagger-parent.is-revealed .reveal-stagger-item {
  opacity: 1 !important;
  transform: translate3d(0, 0, 0) !important;
}

/* Precise Stagger Delays (0.07s luxury cascade) */
.reveal-stagger-parent.is-revealed .reveal-stagger-item:nth-child(1) { transition-delay: 0.04s; }
.reveal-stagger-parent.is-revealed .reveal-stagger-item:nth-child(2) { transition-delay: 0.11s; }
.reveal-stagger-parent.is-revealed .reveal-stagger-item:nth-child(3) { transition-delay: 0.18s; }
.reveal-stagger-parent.is-revealed .reveal-stagger-item:nth-child(4) { transition-delay: 0.25s; }
.reveal-stagger-parent.is-revealed .reveal-stagger-item:nth-child(5) { transition-delay: 0.32s; }
.reveal-stagger-parent.is-revealed .reveal-stagger-item:nth-child(6) { transition-delay: 0.39s; }
.reveal-stagger-parent.is-revealed .reveal-stagger-item:nth-child(7) { transition-delay: 0.46s; }
.reveal-stagger-parent.is-revealed .reveal-stagger-item:nth-child(8) { transition-delay: 0.53s; }
.reveal-stagger-parent.is-revealed .reveal-stagger-item:nth-child(9) { transition-delay: 0.60s; }
.reveal-stagger-parent.is-revealed .reveal-stagger-item:nth-child(10) { transition-delay: 0.67s; }
.reveal-stagger-parent.is-revealed .reveal-stagger-item:nth-child(11) { transition-delay: 0.74s; }
.reveal-stagger-parent.is-revealed .reveal-stagger-item:nth-child(12) { transition-delay: 0.81s; }

/* Subtle Section Blend & Transitions */
.boutique-section {
  position: relative;
  transition: background-color 0.4s ease, color 0.4s ease;
}

/* Subtle Shimmer Keyframe */
@keyframes subtleShimmer {
  0%, 25% { transform: translateX(-100%) rotate(25deg); }
  60%, 100% { transform: translateX(200%) rotate(25deg); }
}

/* Keyframes */
@keyframes pulseDot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.45; transform: scale(1.18); }
}

@keyframes heroSlideRight {
  0% { opacity: 0; transform: translate3d(-30px, 0, 0); }
  100% { opacity: 1; transform: translate3d(0, 0, 0); }
}

@keyframes heroImageFadeIn {
  0% { opacity: 0; transform: scale(1.03); }
  100% { opacity: 1; transform: scale(1); }
}

@keyframes heroContentFadeUp {
  0% { opacity: 0; transform: translate3d(0, 20px, 0); }
  100% { opacity: 1; transform: translate3d(0, 0, 0); }
}

@keyframes brandSlideDown {
  0% { opacity: 0; transform: translate3d(0, -10px, 0); }
  100% { opacity: 1; transform: translate3d(0, 0, 0); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translate3d(0, 10px, 0); }
  to { opacity: 1; transform: translate3d(0, 0, 0); }
}`;

// Replace Section 2 in CSS
css = css.replace(/\/\* ==========================================================================\s+2\. MOTION DESIGN & SCROLL REVEAL ENGINE[\s\S]*?(?=\/\* ==========================================================================\s+3\. LUXURY HEADER)/, modernMotionEngine + '\n\n');

// 3. Add Universal Button & Card Motion Polish
const universalMotionPolish = `
/* ==========================================================================
   22. MODERN REFINED HOVER & MOTION INTERACTIONS
   ========================================================================== */

/* Buttons: Tactile Feedback, Smooth Lift & Nudge */
.btn-hero-primary,
.btn-espresso-cta,
.btn-header-wa,
.btn-espresso-luxury,
.drawer-wa-full-btn,
.btn-bento-link,
.btn-insta-follow {
  transition: transform 0.25s var(--ease-hover), box-shadow 0.25s var(--ease-hover), background 0.25s ease, border-color 0.25s ease, color 0.25s ease !important;
}

.btn-hero-primary:hover,
.btn-espresso-cta:hover,
.btn-header-wa:hover,
.btn-espresso-luxury:hover,
.drawer-wa-full-btn:hover {
  transform: translate3d(0, -2.5px, 0) !important;
  box-shadow: 0 12px 28px rgba(26, 25, 24, 0.28) !important;
}

.btn-hero-primary:active,
.btn-hero-secondary:active,
.btn-espresso-cta:active,
.btn-header-wa:active,
.btn-espresso-luxury:active,
.drawer-wa-full-btn:active,
.btn-bento-link:active,
.service-tab-btn:active,
.drawer-action-btn:active,
.review-nav-btn:active {
  transform: translate3d(0, 0, 0) scale(0.975) !important;
  transition: transform 0.08s ease !important;
}

/* Button Icon Micro-Nudge */
.btn-hero-primary svg,
.btn-espresso-cta svg,
.btn-espresso-luxury svg,
.btn-bento-link svg,
.btn-header-wa svg {
  transition: transform 0.25s var(--ease-hover) !important;
}

.btn-hero-primary:hover svg,
.btn-espresso-cta:hover svg,
.btn-espresso-luxury:hover svg,
.btn-bento-link:hover svg {
  transform: translateX(3px) !important;
}

/* Secondary Buttons Hover */
.btn-hero-secondary,
.service-tab-btn,
.btn-felsefe-about,
.btn-outline-gold,
.drawer-action-btn,
.footer-social-btn,
.mobile-insta-btn,
.header-insta-btn,
.review-nav-btn {
  transition: transform 0.25s var(--ease-hover), background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, color 0.25s ease !important;
}

.btn-hero-secondary:hover,
.service-tab-btn:hover,
.btn-felsefe-about:hover,
.drawer-action-btn:hover,
.review-nav-btn:hover {
  transform: translate3d(0, -2px, 0) !important;
}

/* Card Elevations & Shimmer Details */
.bento-item,
.bento-gallery-item,
.luxury-bento-card {
  transition: transform 0.45s var(--ease-luxury), box-shadow 0.45s var(--ease-luxury), border-color 0.35s ease !important;
}

.bento-item:hover,
.bento-gallery-item:hover,
.luxury-bento-card:hover {
  transform: translate3d(0, -4.5px, 0) !important;
  box-shadow: 0 20px 45px rgba(116, 109, 101, 0.16) !important;
  border-color: rgba(197, 168, 128, 0.6) !important;
}

.bento-item img,
.bento-gallery-item img,
.luxury-bento-card img {
  transition: transform 0.7s var(--ease-luxury) !important;
}

.bento-item:hover img,
.bento-gallery-item:hover img,
.luxury-bento-card:hover img {
  transform: scale(1.035) !important;
}

/* Trust Metric & Stat Cards */
.trust-metric-card,
.trust-stat-box,
.about-stat-card,
.shine-trust-card {
  transition: transform 0.35s var(--ease-luxury), box-shadow 0.35s var(--ease-luxury), border-color 0.3s ease !important;
}

.trust-metric-card:hover,
.trust-stat-box:hover,
.about-stat-card:hover,
.shine-trust-card:hover {
  transform: translate3d(0, -3.5px, 0) !important;
  box-shadow: 0 16px 36px rgba(197, 168, 128, 0.16) !important;
  border-color: var(--gold-primary) !important;
}

/* Process Step Cards */
.process-step-card,
.process-step-item {
  transition: transform 0.35s var(--ease-luxury), border-color 0.3s ease, box-shadow 0.35s var(--ease-luxury) !important;
}

.process-step-card:hover,
.process-step-item:hover {
  transform: translate3d(0, -3px, 0) !important;
  border-color: var(--gold-primary) !important;
  box-shadow: 0 12px 30px rgba(197, 168, 128, 0.12) !important;
}

/* FAQ Accordion Item Hover & Smooth Open */
.faq-item {
  transition: transform 0.25s var(--ease-hover), border-color 0.25s ease, box-shadow 0.25s ease !important;
}

.faq-item:hover {
  transform: translate3d(0, -2px, 0) !important;
  border-color: var(--gold-primary) !important;
  box-shadow: 0 8px 24px rgba(197, 168, 128, 0.12) !important;
}

.faq-chevron {
  transition: transform 0.35s var(--ease-luxury), background-color 0.25s ease, color 0.25s ease !important;
}

.faq-item.active .faq-chevron {
  transform: rotate(180deg) !important;
}

/* Reviews Dots & Carousel Controls */
.review-dot {
  transition: width 0.35s var(--ease-luxury), background-color 0.3s ease, opacity 0.3s ease !important;
}

.review-dot.active {
  width: 28px !important;
  background-color: var(--gold-primary) !important;
}

/* Subpage Sticky Image Cards */
.service-image-card,
.about-image-card {
  transition: transform 0.45s var(--ease-luxury), box-shadow 0.45s var(--ease-luxury), border-color 0.3s ease !important;
}

.service-image-card:hover,
.about-image-card:hover {
  transform: translate3d(0, -4px, 0) !important;
  border-color: var(--gold-primary) !important;
  box-shadow: 0 24px 55px rgba(116, 109, 101, 0.18) !important;
}

/* Respect User Reduced Motion Preference */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .reveal-on-scroll,
  .reveal-slide-up,
  .reveal-fade,
  .reveal-scale,
  .reveal-slide-left,
  .reveal-slide-right,
  .reveal-stagger-parent .reveal-stagger-item,
  .hero-kicker,
  .hero-headline,
  .hero-description,
  .hero-actions,
  .service-image-card,
  .about-image-card {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
`;

// Append or update section 22 in input.css
if (css.includes('/* ==========================================================================\n   22. MODERN REFINED HOVER & MOTION INTERACTIONS')) {
  css = css.replace(/\/\* ==========================================================================\s+22\. MODERN REFINED HOVER & MOTION INTERACTIONS[\s\S]*/, universalMotionPolish);
} else {
  css = css + '\n' + universalMotionPolish;
}

fs.writeFileSync(inputCssPath, css, 'utf8');
console.log('Successfully updated src/input.css with modern motion system!');
