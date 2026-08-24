const fs = require('fs');
const path = require('path');

console.log('=== Starting Three Brothers Real Address & Schema Update ===');

const targetFiles = [
  'index.html',
  'hakkimizda.html',
  'balyaj.html',
  'blonde.html',
  'kaynak.html',
  'ombre.html',
  'renklendirme.html',
  'public/index.html',
  'public/hakkimizda.html',
  'public/balyaj.html',
  'public/blonde.html',
  'public/kaynak.html',
  'public/ombre.html',
  'public/renklendirme.html',
  'js/i18n.js',
  'public/js/i18n.js',
  'app/layout.tsx',
  'app/hakkimizda/page.tsx'
];

// 1. Update i18n files
function updateI18nFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace address values
  content = content.replace(
    /"c_address_val":\s*"Bahçelievler Mah\. Demokrasi Blv\. No: 8Z1, Manavgat \/ Antalya"/g,
    '"c_address_val": "Bahçelievler Mahallesi, Demokrasi Bulvarı No:8 D:0, 07600 Manavgat / Antalya"'
  );
  content = content.replace(
    /"footer_address":\s*"Bahçelievler Mah\. Demokrasi Blv\. No: 8Z1, Manavgat \/ Antalya"/g,
    '"footer_address": "Bahçelievler Mahallesi, Demokrasi Bulvarı No:8 D:0, 07600 Manavgat / Antalya"'
  );

  // Arabic addresses
  content = content.replace(
    /"c_address_val":\s*"حي باهتشيلي إيفلر، شارع الديمقراطية 8Z1، ماناavgat \/ أنطاليا"/g,
    '"c_address_val": "حي باهتشيلي إيفلر، شارع الديمقراطية رقم 8 D:0، ماناvgat / أنطاليا 07600"'
  );
  content = content.replace(
    /"footer_address":\s*"حي باهتشيلي إيفلر، شارع الديمقراطية 8Z1، ماناavgat \/ أنطاليا"/g,
    '"footer_address": "حي باهتشيلي إيفلر، شارع الديمقراطية رقم 8 D:0، ماناvgat / أنطاليا 07600"'
  );

  // Review rating texts (119+ -> 134+)
  content = content.replace(
    /"reviews_rating_text":\s*"★★★★★ 119\+ Doğrulanmış Gerçek Müşteri Yorumu"/g,
    '"reviews_rating_text": "★★★★★ 134+ Doğrulanmış Gerçek Müşteri Yorumu"'
  );
  content = content.replace(
    /"reviews_rating_text":\s*"★★★★★ 119\+ Verified Real Client Reviews"/g,
    '"reviews_rating_text": "★★★★★ 134+ Verified Real Client Reviews"'
  );
  content = content.replace(
    /"reviews_rating_text":\s*"★★★★★ 119\+ Verifizierte echte Bewertungen"/g,
    '"reviews_rating_text": "★★★★★ 134+ Verifizierte echte Bewertungen"'
  );
  content = content.replace(
    /"reviews_rating_text":\s*"★★★★★ 119\+ Подтвержденных отзывов"/g,
    '"reviews_rating_text": "★★★★★ 134+ Подтвержденных отзывов"'
  );
  content = content.replace(
    /"reviews_rating_text":\s*"★★★★★ 119\+ تقييم حقيقي موثق"/g,
    '"reviews_rating_text": "★★★★★ 134+ تقييم حقيقي موثق"'
  );

  // Update Eskihisar references in tech_desc and eskihisar_*
  // TR
  content = content.replace(
    /"tech_desc":\s*"Manavgat Eskihisar’daki salonumuzda; Ombre, Sombre ve Balyaj uygulamalarını saçın bağ dokusunu koruyan transparan tekniklerle gerçekleştiriyoruz\. Saç yapınızı yıpratmadan, yüz hatlarınıza ve ten renginize en çok yakışan sağlıklı tonları tasarlıyoruz\."/g,
    '"tech_desc": "Manavgat Demokrasi Bulvarı’ndaki salonumuzda; Ombre, Sombre ve Balyaj uygulamalarını saçın bağ dokusunu koruyan transparan tekniklerle gerçekleştiriyoruz. Saç yapınızı yıpratmadan, yüz hatlarınıza ve ten renginize en çok yakışan sağlıklı tonları tasarlıyoruz."'
  );
  content = content.replace(
    /"eskihisar_kicker":\s*"MANAVGAT ESKİHİSAR'DA PROFESYONEL DOKUNUŞ"/g,
    '"eskihisar_kicker": "MANAVGAT DEMOKRASİ BULVARI\'NDA PROFESYONEL DOKUNUŞ"'
  );
  content = content.replace(
    /"eskihisar_p1":\s*"Manavgat Eskihisar Mahallesi’ndeki salonumuzda, özellikle ağır kimyasal süreçlerden yorulmuş saçlar için uzman çözümler sunuyoruz\. Saçın kendi doğal tonuna uygun transparan boya teknikleriyle yıpranmış telleri yeniden canlandırıyoruz\."/g,
    '"eskihisar_p1": "Manavgat Bahçelievler Mahallesi, Demokrasi Bulvarı’ndaki salonumuzda, özellikle ağır kimyasal süreçlerden yorulmuş saçlar için uzman çözümler sunuyoruz. Saçın kendi doğal tonuna uygun transparan boya teknikleriyle yıpranmış telleri yeniden canlandırıyoruz."'
  );

  // EN
  content = content.replace(
    /"tech_desc":\s*"In our Manavgat Eskihisar studio, we perform Ombre, Sombre, and Balayage using bond-protecting transparent techniques\. We craft healthy, luminous tones that enhance your facial features and skin complexion without compromising hair integrity\."/g,
    '"tech_desc": "In our Manavgat Demokrasi Boulevard studio, we perform Ombre, Sombre, and Balayage using bond-protecting transparent techniques. We craft healthy, luminous tones that enhance your facial features and skin complexion without compromising hair integrity."'
  );
  content = content.replace(
    /"eskihisar_kicker":\s*"PROFESSIONAL TOUCH IN MANAVGAT ESKIHISAR"/g,
    '"eskihisar_kicker": "PROFESSIONAL TOUCH ON MANAVGAT DEMOKRASI BOULEVARD"'
  );
  content = content.replace(
    /"eskihisar_p1":\s*"In our salon in Manavgat Eskihisar, we offer specialized solutions for hair fatigued by heavy chemical procedures\. With transparent dyeing techniques tailored to your hair's natural undertones, we revitalize fragile strands\."/g,
    '"eskihisar_p1": "In our salon on Manavgat Demokrasi Boulevard, we offer specialized solutions for hair fatigued by heavy chemical procedures. With transparent dyeing techniques tailored to your hair\'s natural undertones, we revitalize fragile strands."'
  );

  // DE
  content = content.replace(
    /"tech_desc":\s*"In unserem Salon in Manavgat Eskihisar führen wir Ombré, Sombré und Balayage mit strukturschonenden, transparenten Methoden durch\. Wir gestalten gesunde, strahlende Nuancen, die harmonisch zu Ihrem Hautton passen\."/g,
    '"tech_desc": "In unserem Salon am Demokrasi Boulevard in Manavgat führen wir Ombré, Sombré und Balayage mit strukturschonenden, transparenten Methoden durch. Wir gestalten gesunde, strahlende Nuancen, die harmonisch zu Ihrem Hautton passen."'
  );
  content = content.replace(
    /"eskihisar_kicker":\s*"PROFESSIONELLE HANDWERKSKUNST IN ESKIHISAR"/g,
    '"eskihisar_kicker": "PROFESSIONELLE HANDWERKSKUNST AM DEMOKRASI BOULEVARD"'
  );
  content = content.replace(
    /"eskihisar_p1":\s*"In unserem Salon in Manavgat Eskihisar bieten wir maßgeschneiderte Lösungen für chemisch beanspruchtes Haar\. Mit transparenten Tönungstechniken beleben wir strapazierte Haarfasern sanft wieder\."/g,
    '"eskihisar_p1": "In unserem Salon am Demokrasi Boulevard in Manavgat bieten wir maßgeschneiderte Lösungen für chemisch beanspruchtes Haar. Mit transparenten Tönungstechniken beleben wir strapazierte Haarfasern sanft wieder."'
  );

  // RU
  content = content.replace(
    /"tech_desc":\s*"В нашем салоне в Эскихисаре \(Манавгат\) мы выполняем омбре, сомбре и балаяж с применением защитных прозрачных техник\. Создаем естественные и здоровые оттенки без повреждения структуры волос\."/g,
    '"tech_desc": "В нашем салоне на бульваре Демокраси (Манавгат) мы выполняем омбре, сомбре и балаяж с применением защитных прозрачных техник. Создаем естественные и здоровые оттенки без повреждения структуры волос."'
  );
  content = content.replace(
    /"eskihisar_kicker":\s*"ПРОФЕССИОНАЛЬНЫЙ УХОД В ЭСКИХИСАРЕ \(МАНАВГАТ\)"/g,
    '"eskihisar_kicker": "ПРОФЕССИОНАЛЬНЫЙ УХОД НА БУЛЬВАРЕ ДЕМОКРАСИ (МАНАВГАТ)"'
  );
  content = content.replace(
    /"eskihisar_p1":\s*"В нашем салоне в районе Эскихисар мы предлагаем экспертные решения для волос, уставших от химических процедур\. Прозрачные техники бережно возвращают волосам блеск и силу\."/g,
    '"eskihisar_p1": "В нашем салоне на бульваре Демокраси в Манавгате мы предлагаем экспертные решения для волос, уставших от химических процедур. Прозрачные техники бережно возвращают волосам блеск и силу."'
  );

  // AR
  content = content.replace(
    /"tech_desc":\s*"في صالوننا بحي إسكي حصار في مانافجات، ننفذ تقنيات الأومبري، السومبري والبالياج بأسلوب شفاف يحمي بنية الشعر ويمنحكِ درجات صحية وساحرة تتناغم مع ملامحكِ وبشرتكِ\."/g,
    '"tech_desc": "في صالوننا بشارع الديمقراطية في مانافجات، ننفذ تقنيات الأومبري، السومبري والبالياج بأسلوب شفاف يحمي بنية الشعر ويمنحكِ درجات صحية وساحرة تتناغم مع ملامحكِ وبشرتكِ."'
  );
  content = content.replace(
    /"eskihisar_kicker":\s*"لمسة احترافية في إسكي حصار مانافجات"/g,
    '"eskihisar_kicker": "لمسة احترافية في شارع الديمقراطية مانافجات"'
  );
  content = content.replace(
    /"eskihisar_p1":\s*"في صالوننا بحي إسكي حصار في مانافجات، نقدم حلولاً متخصصة للشعر المجهد بالعمليات الكيميائية السابقة، معيدين الحيوية والنعومة لخصلاتكِ بتقنيات متقدمة\."/g,
    '"eskihisar_p1": "في صالوننا بشارع الديمقراطية في مانافجات، نقدم حلولاً متخصصة للشعر المجهد بالعمليات الكيميائية السابقة، معيدين الحيوية والنعومة لخصلاتكِ بتقنيات متقدمة."'
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${filePath}`);
}

// 2. Update HTML files
function updateHtmlFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace address in schema
  content = content.replace(
    /"streetAddress":\s*"Bahçelievler Mahallesi, Demokrasi Bulvarı No: 8Z1"/g,
    '"streetAddress": "Bahçelievler Mahallesi, Demokrasi Bulvarı No:8 D:0"'
  );
  content = content.replace(
    /"reviewCount":\s*"119"/g,
    '"reviewCount": "134"'
  );

  // Replace tech_desc Eskihisar text
  content = content.replace(
    /Manavgat Eskihisar’daki salonumuzda;/g,
    'Manavgat Demokrasi Bulvarı’ndaki salonumuzda;'
  );

  // Replace review badge
  content = content.replace(
    /119\+\s+Doğrulanmış Gerçek Müşteri Yorumu/g,
    '134+ Doğrulanmış Gerçek Müşteri Yorumu'
  );

  // Replace contact section address
  content = content.replace(
    /<strong data-i18n="c_address_val">Bahçelievler Mah\. Demokrasi Blv\. No: 8Z1, Manavgat \/ Antalya<\/strong>/g,
    '<strong data-i18n="c_address_val">Bahçelievler Mahallesi, Demokrasi Bulvarı No:8 D:0, 07600 Manavgat / Antalya</strong>'
  );

  // Replace footer address
  content = content.replace(
    /<span data-i18n="footer_address">Bahçelievler Mah\. Demokrasi Blv\. No: 8Z1, Manavgat \/ Antalya<\/span>/g,
    '<span data-i18n="footer_address">Bahçelievler Mahallesi, Demokrasi Bulvarı No:8 D:0, 07600 Manavgat / Antalya</span>'
  );
  content = content.replace(
    /<span>Bahçelievler Mah\. Demokrasi Blv\. No: 8Z1, Manavgat \/ Antalya<\/span>/g,
    '<span>Bahçelievler Mahallesi, Demokrasi Bulvarı No:8 D:0, 07600 Manavgat / Antalya</span>'
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${filePath}`);
}

// Run updates
updateI18nFile('js/i18n.js');
updateI18nFile('public/js/i18n.js');

[
  'index.html',
  'hakkimizda.html',
  'balyaj.html',
  'blonde.html',
  'kaynak.html',
  'ombre.html',
  'renklendirme.html',
  'public/index.html',
  'public/hakkimizda.html',
  'public/balyaj.html',
  'public/blonde.html',
  'public/kaynak.html',
  'public/ombre.html',
  'public/renklendirme.html'
].forEach(updateHtmlFile);

console.log('=== All files updated successfully! ===');
