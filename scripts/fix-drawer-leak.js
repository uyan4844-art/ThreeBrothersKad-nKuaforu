const fs = require('fs');
const path = require('path');

const allHtmlFiles = [
  'index.html',
  'public/index.html',
  'hakkimizda.html',
  'public/hakkimizda.html',
  'balyaj.html',
  'public/balyaj.html',
  'blonde.html',
  'public/blonde.html',
  'kaynak.html',
  'public/kaynak.html',
  'ombre.html',
  'public/ombre.html',
  'renklendirme.html',
  'public/renklendirme.html'
];

const strictDrawerCss = `
    /* === STRICT OFFCANVAS DRAWER & BACKDROP SYSTEM === */
    .menu-backdrop {
      display: none;
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100%;
      background: rgba(26, 23, 21, 0.75);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: 9998;
      transition: opacity 0.35s ease;
      opacity: 0;
    }

    .menu-backdrop.active {
      display: block !important;
      opacity: 1 !important;
    }

    #side-drawer,
    .side-drawer {
      display: none;
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      max-width: 420px;
      height: 100vh;
      background: #1A1715;
      color: #FAF7F2;
      z-index: 9999;
      overflow-y: auto;
      box-shadow: -15px 0 45px rgba(0, 0, 0, 0.5);
      border-left: 1px solid rgba(197, 168, 128, 0.3);
      padding: 32px 28px;
      box-sizing: border-box;
      flex-direction: column;
    }

    #side-drawer.active,
    .side-drawer.active {
      display: flex !important;
    }

    .drawer-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 20px;
      margin-bottom: 24px;
      border-bottom: 1px solid rgba(197, 168, 128, 0.2);
    }

    .drawer-brand h3 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 22px;
      font-weight: 700;
      color: #FFFFFF;
      margin: 0;
      letter-spacing: 1.5px;
    }

    .drawer-brand span {
      font-family: 'Montserrat', sans-serif;
      font-size: 8px;
      font-weight: 600;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #C5A880;
      margin-top: 4px;
      display: block;
    }

    .drawer-close-btn {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(197, 168, 128, 0.3);
      color: #FFFFFF;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 16px;
      transition: all 0.25s ease;
    }

    .drawer-close-btn:hover {
      background: #C5A880;
      color: #1A1715;
      transform: rotate(90deg);
    }

    .drawer-main-links {
      list-style: none;
      padding: 0;
      margin: 0 0 28px 0;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .drawer-main-links li a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #FAF7F2;
      text-decoration: none;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 20px;
      font-weight: 600;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      transition: all 0.25s ease;
    }

    .drawer-main-links li a:hover {
      color: #C5A880;
      padding-left: 6px;
      border-bottom-color: #C5A880;
    }

    .drawer-main-links li a .arrow {
      color: #C5A880;
      font-size: 16px;
      transition: transform 0.25s ease;
    }

    .drawer-main-links li a:hover .arrow {
      transform: translateX(6px);
    }

    .drawer-services-section {
      margin-bottom: 26px;
    }

    .drawer-section-tag {
      display: block;
      font-family: 'Montserrat', sans-serif;
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #C5A880;
      margin-bottom: 12px;
    }

    .drawer-pills-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .drawer-pill {
      display: inline-block;
      padding: 7px 14px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(197, 168, 128, 0.25);
      border-radius: 999px;
      color: #EBE0D2;
      font-size: 12px;
      font-weight: 500;
      text-decoration: none;
      transition: all 0.25s ease;
    }

    .drawer-pill:hover,
    .drawer-pill.active {
      background: #C5A880;
      color: #1A1715;
      border-color: #C5A880;
      transform: translateY(-1px);
    }

    .drawer-footer-info {
      margin-top: auto;
      padding-top: 22px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .drawer-contact-line {
      font-family: 'Montserrat', sans-serif;
      font-size: 15px;
      font-weight: 700;
      color: #FFFFFF;
      margin-bottom: 4px;
    }

    .drawer-hours-line {
      font-size: 12px;
      color: rgba(235, 224, 210, 0.7);
      margin-bottom: 16px;
      line-height: 1.4;
    }

    .drawer-action-btns {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }

    .drawer-btn-outline {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 10px 14px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 600;
      text-decoration: none;
      border: 1px solid rgba(197, 168, 128, 0.4);
      color: #FAF7F2;
      background: rgba(255, 255, 255, 0.05);
      transition: all 0.25s ease;
    }

    .drawer-btn-outline:hover {
      background: #C5A880;
      color: #1A1715;
      border-color: #C5A880;
    }
`;

allHtmlFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // Insert strict drawer css before </style>
  if (content.includes('/* === STRICT OFFCANVAS DRAWER & BACKDROP SYSTEM === */')) {
    content = content.replace(/\/\* === STRICT OFFCANVAS DRAWER & BACKDROP SYSTEM === \*\/[\s\S]*?\.drawer-btn-outline:hover\s*\{[^}]*\}/, strictDrawerCss.trim());
  } else {
    content = content.replace('</style>', `${strictDrawerCss}\n  </style>`);
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated strict drawer CSS in: ${file}`);
});
