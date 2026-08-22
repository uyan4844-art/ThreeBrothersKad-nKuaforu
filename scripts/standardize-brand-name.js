const fs = require('fs');
const path = require('path');

// 1. UPDATE js/i18n.js
let i18n = fs.readFileSync('js/i18n.js', 'utf8');

// TR dictionary replacements
i18n = i18n.replace(
  /"meta_description":\s*"[^"]*"/,
  '"meta_description": "2014\'ten beri Manavgat\'ta Three Brothers olarak sarı saçta doğallık ve ustalık, kişiye özel renk analizi ve saç sağlığı odaklı butik kuaför deneyimi."'
);

i18n = i18n.replace(
  /"badge_trust_sub":\s*"[^"]*"/,
  '"badge_trust_sub": "Three Brothers Uzmanlığı"'
);

i18n = i18n.replace(
  /"story_title_accent":\s*"[^"]*"/,
  '"story_title_accent": "Saçın Doğal Sağlığı ve Sanatı"'
);

i18n = i18n.replace(
  /"story_p1":\s*"[^"]*"/,
  '"story_p1": "2014 yılından bu yana Manavgat’ta Three Brothers olarak bayan kuaförlüğü alanında estetik, dürüstlük ve teknik uzmanlığı bir arada sunuyoruz."'
);

i18n = i18n.replace(
  /"about_page_p1":\s*"[^"]*"/,
  '"about_page_p1": "2014 yılından bu yana Manavgat’ta Three Brothers olarak bayan kuaförlüğü sektöründe hizmet veriyor, yılların verdiği tecrübe ve birikimle her geçen gün kendimizi geliştirmeye devam ediyoruz."'
);

i18n = i18n.replace(
  /"r2_text":\s*"[^"]*"/,
  '"r2_text": "“Three Brothers ekibinin samimiyeti, temizliği ve mesleki bilgisi takdire şayan. Saçımın analizini yapıp en doğru işlemi uyguladılar. Salonun sakin ve butik havası harika.”"'
);

// English dictionary
i18n = i18n.replace(
  /"about_page_p1":\s*"Since 2014, as three brothers[^"]*"/,
  '"about_page_p1": "Since 2014, as Three Brothers, we have been serving in the women\'s hairdressing industry, continuously developing ourselves with years of experience."'
);

// German dictionary
i18n = i18n.replace(
  /"about_page_p1":\s*"Seit 2014 bieten wir als drei Brüder[^"]*"/,
  '"about_page_p1": "Seit 2014 bieten wir als Three Brothers erstklassige Friseurdienstleistungen in Manavgat mit langjähriger Erfahrung."'
);

// Russian dictionary
i18n = i18n.replace(
  /"about_page_p1":\s*"С 2014 года мы втроем[^"]*"/,
  '"about_page_p1": "С 2014 года мы в Three Brothers работаем в сфере женского парикмахерского искусства в Манавгате, постоянно совершенствуя свое мастерство."'
);

// Arabic dictionary
i18n = i18n.replace(
  /"about_page_p1":\s*"منذ عام 2014، نقدم كـ 3 إخوة[^"]*"/,
  '"about_page_p1": "منذ عام 2014، نقدم في Three Brothers خدمات تصفيف الشعر للسيدات مع سنوات من الخبرة والاحترافية."'
);

fs.writeFileSync('js/i18n.js', i18n, 'utf8');
fs.writeFileSync('public/js/i18n.js', i18n, 'utf8');
console.log('js/i18n.js standardized with official brand name "Three Brothers"');

// 2. UPDATE index.html
let indexHTML = fs.readFileSync('index.html', 'utf8');

indexHTML = indexHTML.replace(
  /<meta name="description" content="2014'ten beri Manavgat'ta üç kardeşin ortak tutkusu[^"]*"/,
  '<meta name="description" content="2014\'ten beri Manavgat\'ta Three Brothers olarak sarı saçta doğallık ve ustalık, kişiye özel renk analizi ve saç sağlığı odaklı butik kuaför deneyimi."'
);

indexHTML = indexHTML.replace(
  /Üç Kardeş, Tek Tutku:<br><span style="font-style: italic; color: #A48358;" data-i18n="story_title_accent">Saçın Doğal Sağlığı ve Sanatı<\/span>/g,
  'Three Brothers — Tek Tutku:<br><span style="font-style: italic; color: #A48358;" data-i18n="story_title_accent">Saçın Doğal Sağlığı ve Sanatı</span>'
);

indexHTML = indexHTML.replace(
  /2014 yılından bu yana Manavgat’ta üç kardeş olarak bayan kuaförlüğü/g,
  '2014 yılından bu yana Manavgat’ta Three Brothers olarak bayan kuaförlüğü'
);

indexHTML = indexHTML.replace(
  /“Üç kardeşin samimiyeti, temizliği ve mesleki bilgisi takdire şayan/g,
  '“Three Brothers ekibinin samimiyeti, temizliği ve mesleki bilgisi takdire şayan'
);

indexHTML = indexHTML.replace(
  /\/\* Hikaye & Felsefe \(Üç Kardeş\) \*\//g,
  '/* Hikaye & Felsefe (Three Brothers) */'
);

fs.writeFileSync('index.html', indexHTML, 'utf8');
fs.writeFileSync('public/index.html', indexHTML, 'utf8');
console.log('index.html standardized with official brand name "Three Brothers"');

// 3. UPDATE hakkimizda.html
let hakkimizdaHTML = fs.readFileSync('hakkimizda.html', 'utf8');

hakkimizdaHTML = hakkimizdaHTML.replace(
  /<meta name="description" content="2014 yılından bu yana Manavgat'ta üç kardeş olarak[^"]*"/,
  '<meta name="description" content="2014 yılından bu yana Manavgat\'ta Three Brothers Bayan Kuaförü olarak sarı saç uzmanlığı ve modern saç renklendirmede zarafetin adresi."'
);

hakkimizdaHTML = hakkimizdaHTML.replace(
  /2014 yılından bu yana üç kardeş olarak bayan kuaförlüğü/g,
  '2014 yılından bu yana Three Brothers olarak bayan kuaförlüğü'
);

fs.writeFileSync('hakkimizda.html', hakkimizdaHTML, 'utf8');
fs.writeFileSync('public/hakkimizda.html', hakkimizdaHTML, 'utf8');
console.log('hakkimizda.html standardized with official brand name "Three Brothers"');

// 4. Check all service pages
const servicePages = ['balyaj.html', 'blonde.html', 'kaynak.html', 'ombre.html', 'renklendirme.html'];
servicePages.forEach(p => {
  if (fs.existsSync(p)) {
    let srvHTML = fs.readFileSync(p, 'utf8');
    srvHTML = srvHTML.replace(/üç kardeşler/gi, 'Three Brothers');
    srvHTML = srvHTML.replace(/üç kardeş/gi, 'Three Brothers');
    srvHTML = srvHTML.replace(/Üç Kardeşler/g, 'Three Brothers');
    srvHTML = srvHTML.replace(/Üç Kardeş/g, 'Three Brothers');
    fs.writeFileSync(p, srvHTML, 'utf8');
    fs.writeFileSync(path.join('public', p), srvHTML, 'utf8');
  }
});
console.log('All service pages verified and standardized');
