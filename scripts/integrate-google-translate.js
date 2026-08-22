const fs = require('fs');
const path = require('path');

const allPages = [
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

const drawerLangSectionHtml = `
      <!-- Dil Seçimi (5-Language Buttons) -->
      <div class="drawer-lang-section" style="margin-bottom: 24px;">
        <span class="drawer-section-tag" data-i18n="drawer_lang_tag">DİL / LANGUAGE</span>
        <div class="lang-switcher">
          <button type="button" class="lang-btn active" data-lang-btn="tr" onclick="changeLanguage('tr')">TR</button>
          <button type="button" class="lang-btn" data-lang-btn="en" onclick="changeLanguage('en')">EN</button>
          <button type="button" class="lang-btn" data-lang-btn="de" onclick="changeLanguage('de')">DE</button>
          <button type="button" class="lang-btn" data-lang-btn="ru" onclick="changeLanguage('ru')">RU</button>
          <button type="button" class="lang-btn" data-lang-btn="ar" onclick="changeLanguage('ar')">AR</button>
        </div>
      </div>
`;

const googleTranslateStyles = `
    /* Google Translate Hidden & Reset Styles */
    #google_translate_element {
      display: none !important;
    }
    .goog-te-banner-frame.skiptranslate,
    .goog-te-banner-frame,
    iframe.goog-te-banner-frame {
      display: none !important;
      visibility: hidden !important;
      height: 0 !important;
    }
    body {
      top: 0px !important;
      position: static !important;
    }
    .goog-tooltip, .goog-tooltip:hover {
      display: none !important;
    }
    .goog-text-highlight {
      background-color: transparent !important;
      border: none !important;
      box-shadow: none !important;
    }
    body > .skiptranslate, .skiptranslate {
      display: none !important;
    }
    /* Drawer Language Buttons (Gold Active State) */
    .lang-switcher {
      display: flex !important;
      gap: 6px !important;
      justify-content: space-between !important;
      align-items: center !important;
      width: 100% !important;
      background: rgba(197, 168, 128, 0.12) !important;
      padding: 4px !important;
      border-radius: 10px !important;
      border: 1px solid rgba(197, 168, 128, 0.25) !important;
      box-sizing: border-box !important;
    }
    .lang-btn {
      flex: 1 !important;
      padding: 7px 0 !important;
      text-align: center !important;
      font-family: 'Montserrat', sans-serif !important;
      font-size: 11.5px !important;
      font-weight: 600 !important;
      color: #1F1C19 !important;
      background: transparent !important;
      border: 1px solid transparent !important;
      border-radius: 7px !important;
      cursor: pointer !important;
      transition: all 0.25s ease !important;
      outline: none !important;
    }
    .lang-btn:hover {
      background: rgba(197, 168, 128, 0.22) !important;
      color: #1F1C19 !important;
    }
    .lang-btn.active {
      background: #C5A880 !important;
      color: #FFFFFF !important;
      border-color: #C5A880 !important;
      font-weight: 700 !important;
      box-shadow: 0 3px 10px rgba(197, 168, 128, 0.4) !important;
    }
`;

const googleTranslateWidgetHtml = `
  <!-- Google Translate Hidden Container & Integration -->
  <div id="google_translate_element" style="display: none;"></div>
  <script type="text/javascript">
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({
        pageLanguage: 'tr',
        includedLanguages: 'tr,en,de,ru,ar',
        autoDisplay: false
      }, 'google_translate_element');
    }

    function changeLanguage(langCode) {
      const code = (langCode || 'tr').toLowerCase();

      // Aktif butonun arka planını altın yap
      document.querySelectorAll('[data-lang-btn]').forEach(function(btn) {
        if (btn.getAttribute('data-lang-btn') === code) {
          btn.classList.add('active');
          btn.setAttribute('aria-current', 'true');
        } else {
          btn.classList.remove('active');
          btn.removeAttribute('aria-current');
        }
      });

      // Google Translate Combo'yu tetikle
      var select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = code;
        select.dispatchEvent(new Event('change'));
      } else {
        var retryCount = 0;
        var retryInterval = setInterval(function() {
          retryCount++;
          var s = document.querySelector('.goog-te-combo');
          if (s) {
            clearInterval(retryInterval);
            s.value = code;
            s.dispatchEvent(new Event('change'));
          } else if (retryCount > 25) {
            clearInterval(retryInterval);
          }
        }, 120);
      }

      // Mevcut i18n motoru varsa onunla da senkronize et
      if (window.i18n && typeof window.i18n.setLanguage === 'function') {
        window.i18n.setLanguage(code);
      }
    }
  </script>
  <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
`;

allPages.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    // 1. Add CSS before </style>
    if (!content.includes('/* Google Translate Hidden & Reset Styles */')) {
      content = content.replace('</style>', `${googleTranslateStyles}\n  </style>`);
    }

    // 2. Ensure drawer-lang-section exists
    if (!content.includes('drawer-lang-section')) {
      if (content.includes('class="drawer-footer-info"')) {
        content = content.replace('<div class="drawer-footer-info">', `${drawerLangSectionHtml}\n      <div class="drawer-footer-info">`);
      }
    } else {
      // Update drawer language buttons to onclick="changeLanguage('...')"
      const oldBtns = [
        /onclick="window\.i18n\s*&&\s*window\.i18n\.setLanguage\('tr'\)"/g,
        /onclick="window\.i18n\s*&&\s*window\.i18n\.setLanguage\('en'\)"/g,
        /onclick="window\.i18n\s*&&\s*window\.i18n\.setLanguage\('de'\)"/g,
        /onclick="window\.i18n\s*&&\s*window\.i18n\.setLanguage\('ru'\)"/g,
        /onclick="window\.i18n\s*&&\s*window\.i18n\.setLanguage\('ar'\)"/g
      ];

      content = content.replace(oldBtns[0], 'onclick="changeLanguage(\'tr\')"');
      content = content.replace(oldBtns[1], 'onclick="changeLanguage(\'en\')"');
      content = content.replace(oldBtns[2], 'onclick="changeLanguage(\'de\')"');
      content = content.replace(oldBtns[3], 'onclick="changeLanguage(\'ru\')"');
      content = content.replace(oldBtns[4], 'onclick="changeLanguage(\'ar\')"');
    }

    // 3. Add Google Translate Widget scripts before </body>
    if (!content.includes('id="google_translate_element"')) {
      content = content.replace('</body>', `${googleTranslateWidgetHtml}\n</body>`);
    }

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file} successfully!`);
  }
});
