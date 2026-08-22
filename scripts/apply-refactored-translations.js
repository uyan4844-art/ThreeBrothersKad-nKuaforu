const fs = require('fs');
const path = require('path');

const i18nPath = path.join(__dirname, '../js/i18n.js');
const publicI18nPath = path.join(__dirname, '../public/js/i18n.js');

const refactoredTranslations = {
  tr: {
    // 1. Birleştirilmiş Teknikler & Eskihisar Bölümü (#teknikler)
    tech_kicker: "PROFESYONEL RENKLENDİRME & BAĞ KORUMA",
    tech_title: "Transparan Renklendirme ve Kişiye Özel Doğal Işıltı",
    tech_desc: "Manavgat Eskihisar’daki salonumuzda; Ombre, Sombre ve Balyaj uygulamalarını saçın bağ dokusunu koruyan transparan tekniklerle gerçekleştiriyoruz. Saç yapınızı yıpratmadan, yüz hatlarınıza ve ten renginize en çok yakışan sağlıklı tonları tasarlıyoruz.",
    tech_c1_title: "Doğal Ton Uyumu",
    tech_c1_desc: "Saç renginize ve cilt alt tonunuza kusursuz uyum sağlayan geçişler.",
    tech_c2_title: "Bağ Dokusu Koruma",
    tech_c2_desc: "Saç tellerini yıpranmaya karşı koruyan patentli ve kontrollü açma işlemi.",
    tech_c3_title: "Modern Renk Tasarımı",
    tech_c3_desc: "Ombre, Sombre, Balyaj ve Bebek Sarısı uygulamalarında uzmanlık.",

    // 2. Koyu Kontrast Felsefe Bölümü (#felsefe)
    health_kicker: "ÖNCE SAĞLIK, SONRA GÜZELLİK",
    health_title: "Saç Analizi ve Dürüst Hizmet Anlayışı",
    health_p1: "Manavgat’ta güvenebileceğiniz bir saç tasarım deneyimi için işlem öncesinde saç yapınızı detaylıca analiz ediyoruz. Yıpranacak veya saça zarar verecek hiçbir işleme onay vermeden, dürüstçe en sağlıklı alternatifi sunuyoruz.",
    health_p2: "Dürüstlük, hijyen ve şeffaflık Three Brothers’ın temelidir. Saçınıza zarar verecek hiçbir adımı atmıyor, sağlıklı ve sürdürülebilir sonuçlara odaklanıyoruz.",
    health_btn: "Ön Görüşme İçin İletişime Geç",

    // 3. Birleştirilmiş Danışmanlık & Neden Biz? 4 Kartlı Güven Izgarası (#neden-biz)
    trust_kicker: "GÜVEN & KALİTE STANDARTLARIMIZ",
    trust_title: "Manavgat’ta Güven Veren Saç Tasarım Deneyimi",
    trust_desc: "Three Brothers stüdyomuzda her misafirimiz için şeffaf, samimi ve tavizsiz standartlarla çalışıyoruz. Beklentilerinizi dinliyor, saçınız için en doğru kararı birlikte veriyoruz.",
    trust_c1_val: "2014",
    trust_c1_title: "2014'ten Beri Tecrübe",
    trust_c1_desc: "Yılların ustalığıyla saç yapısını bozmadan en doğru işlemi uyguluyoruz.",
    trust_c2_val: "Analiz",
    trust_c2_title: "Birebir Saç Analizi",
    trust_c2_desc: "Her işlem öncesi saçın elastikiyeti ve geçmişi detaylıca değerlendirilir.",
    trust_c3_val: "%100",
    trust_c3_title: "%100 Orijinal Ürünler",
    trust_c3_desc: "Dünyaca onaylı, saç sağlığını koruyan profesyonel formüller.",
    trust_c4_val: "Hijyen",
    trust_c4_title: "Değişmez Hijyen Standardı",
    trust_c4_desc: "Kişiye özel steril ekipmanlar ve tertemiz butik salon ortamı."
  },

  en: {
    tech_kicker: "PROFESSIONAL COLORING & BOND PROTECTION",
    tech_title: "Transparent Coloring & Tailored Natural Radiance",
    tech_desc: "In our Manavgat Eskihisar studio, we perform Ombre, Sombre, and Balayage using bond-protecting transparent techniques. We craft healthy, luminous tones that enhance your facial features and skin complexion without compromising hair integrity.",
    tech_c1_title: "Natural Tone Harmony",
    tech_c1_desc: "Flawless transitions tailored to your complexion and natural undertones.",
    tech_c2_title: "Bond Structure Protection",
    tech_c2_desc: "Controlled lightening methodology that preserves the hair's internal fibers.",
    tech_c3_title: "Modern Color Artistry",
    tech_c3_desc: "Specialized mastery in Ombre, Sombre, Balayage, and Baby Blonde shades.",

    health_kicker: "HEALTH FIRST, BEAUTY FOLLOWS",
    health_title: "Hair Analysis & Honest Service Philosophy",
    health_p1: "For a hair design experience you can truly trust in Manavgat, we thoroughly analyze your hair structure before every procedure. Rather than proceeding with damaging processes, we inform you transparently and recommend the healthiest alternatives.",
    health_p2: "Honesty, hygiene, and transparency are the pillars of Three Brothers. We avoid harmful steps and focus purely on healthy, sustainable hair outcomes.",
    health_btn: "Contact for Consultation",

    trust_kicker: "OUR TRUST & QUALITY STANDARDS",
    trust_title: "A Trusted Hair Design Experience in Manavgat",
    trust_desc: "At Three Brothers studio, we work with transparent, welcoming, and uncompromising standards for every guest. We listen attentively to your wishes and decide on the healthiest path together.",
    trust_c1_val: "2014",
    trust_c1_title: "Experience Since 2014",
    trust_c1_desc: "Years of dedicated craftsmanship delivering optimal results without hair stress.",
    trust_c2_val: "Analysis",
    trust_c2_title: "1-on-1 Hair Analysis",
    trust_c2_desc: "Detailed pre-treatment evaluation of hair elasticity and chemical history.",
    trust_c3_val: "100%",
    trust_c3_title: "100% Genuine Products",
    trust_c3_desc: "Globally recognized formulas that actively protect and nourish hair health.",
    trust_c4_val: "Hygiene",
    trust_c4_title: "Strict Hygiene Standard",
    trust_c4_desc: "Individually sterilized tools and an immaculate boutique salon environment."
  },

  de: {
    tech_kicker: "PROFESSIONELLE FÄRBUNG & STRUKTURSCHUTZ",
    tech_title: "Transparente Färbung & Maßgeschneiderter Glanz",
    tech_desc: "In unserem Salon in Manavgat Eskihisar führen wir Ombré, Sombré und Balayage mit strukturschonenden, transparenten Methoden durch. Wir gestalten gesunde, strahlende Nuancen, die harmonisch zu Ihrem Hautton passen.",
    tech_c1_title: "Natürliche Farbharmonie",
    tech_c1_desc: "Fließende Übergänge abgestimmt auf Haut- und Naturton.",
    tech_c2_title: "Haarfaser-Schutz",
    tech_c2_desc: "Kontrollierte Aufhellung zum Erhalt der biologischen Haarstruktur.",
    tech_c3_title: "Modernes Farbdesign",
    tech_c3_desc: "Expertise in Ombré, Sombré, Balayage und feinsten Blondtönen.",

    health_kicker: "ERST DIE GESUNDHEIT, DANN DIE SCHÖNHEIT",
    health_title: "Haaranalyse & Ehrliche Beratung",
    health_p1: "Für ein vertrauensvolles Salonerlebnis in Manavgat analysieren wir vor jeder Behandlung Ihre Haarstruktur. Statt schädlicher Behandlungen beraten wir Sie ehrlich und empfehlen die beste gesunde Alternative.",
    health_p2: "Ehrlichkeit, Hygiene und Transparenz bilden das Fundament von Three Brothers. Wir verzichten auf riskante Schritte und setzen auf nachhaltige Haargesundheit.",
    health_btn: "Beratungstermin vereinbaren",

    trust_kicker: "QUALITÄTS- & VERTRAUENSSTANDARDS",
    trust_title: "Ihr vertrauensvoller Partnersalon in Manavgat",
    trust_desc: "Im Three Brothers Studio arbeiten wir mit transparenten und kompromisslosen Standards. Wir hören Ihnen genau zu und finden gemeinsam die schönste und gesündeste Lösung.",
    trust_c1_val: "2014",
    trust_c1_title: "Erfahrung seit 2014",
    trust_c1_desc: "Langjährige Fachkompetenz für beste Ergebnisse ohne Haarschäden.",
    trust_c2_val: "Analyse",
    trust_c2_title: "Individuelle Haaranalyse",
    trust_c2_desc: "Sorgfältige Voruntersuchung von Elastizität und Haargeschichte.",
    trust_c3_val: "100%",
    trust_c3_title: "100% Originalprodukte",
    trust_c3_desc: "Weltweit anerkannte Pflege- und Farbformeln höchster Güte.",
    trust_c4_val: "Hygiene",
    trust_c4_title: "Höchster Hygienestandard",
    trust_c4_desc: "Sterilisierte Einzelwerkzeuge und makellose Salonsauberkeit."
  },

  ru: {
    tech_kicker: "ПРОФЕССИОНАЛЬНОЕ ОКРАШИВАНИЕ И ЗАЩИТА СТРУКТУРЫ",
    tech_title: "Прозрачное окрашивание и персональное сияние",
    tech_desc: "В нашем салоне в Эскихисаре (Манавгат) мы выполняем омбре, сомбре и балаяж с применением защитных прозрачных техник. Создаем естественные и здоровые оттенки без повреждения структуры волос.",
    tech_c1_title: "Гармония оттенков",
    tech_c1_desc: "Идеальные переходы под ваш цветотип и тон кожи.",
    tech_c2_title: "Защита структуры волос",
    tech_c2_desc: "Контролируемое осветление, сохраняющее эластичность волос.",
    tech_c3_title: "Современный колоризм",
    tech_c3_desc: "Экспертиза в техниках омбре, сомбре, балаяж и блонд.",

    health_kicker: "СНАЧАЛА ЗДОРОВЬЕ, ЗАТЕМ КРАСОТА",
    health_title: "Анализ структуры волос и честный подход",
    health_p1: "Для безопасного преображения в Манавгате мы детально оцениваем состояние ваших волос перед каждой процедурой. Вместо агрессивных воздействий мы честно предлагаем наилучшую здоровую альтернативу.",
    health_p2: "Честность, гигиена и прозрачность — главные принципы Three Brothers. Мы никогда не идем на риск ради минутного эффекта.",
    health_btn: "Записаться на консультацию",

    trust_kicker: "СТАНДАРТЫ КАЧЕСТВА И ДОВЕРИЯ",
    trust_title: "Салон красоты в Манавгате, которому доверяют",
    trust_desc: "В студии Three Brothers мы работаем по строгим стандартам заботы и честности. Мы внимательно слушаем ваши пожелания и выбираем самое безопасное решение.",
    trust_c1_val: "2014",
    trust_c1_title: "Опыт работы с 2014 года",
    trust_c1_desc: "Многолетний опыт стилистов для безупречного результата без вреда волосам.",
    trust_c2_val: "Анализ",
    trust_c2_title: "Персональная диагностика",
    trust_c2_desc: "Оценка эластичности и химической истории волос перед началом работы.",
    trust_c3_val: "100%",
    trust_c3_title: "100% оригинальные составы",
    trust_c3_desc: "Сертифицированные профессиональные формулы для здоровья волос.",
    trust_c4_val: "Гигиена",
    trust_c4_title: "Безупречная чистота",
    trust_c4_desc: "Стерилизация инструментов и комфортная атмосфера бутик-салона."
  },

  ar: {
    tech_kicker: "التلوين الاحترافي وحماية الروابط",
    tech_title: "التلوين الشفاف وإشراقة طبيعية مخصصة",
    tech_desc: "في صالوننا بحي إسكي حصار في مانافجات، ننفذ تقنيات الأومبري، السومبري والبالياج بأسلوب شفاف يحمي بنية الشعر ويمنحكِ درجات صحية وساحرة تتناغم مع ملامحكِ وبشرتكِ.",
    tech_c1_title: "تناغم لوني طبيعي",
    tech_c1_desc: "تدرجات لونية متناغمة تماماً مع لون بشرتكِ وشعركِ الطبيعي.",
    tech_c2_title: "حماية روابط الشعر",
    tech_c2_desc: "تفتيح دقيق ومدروس يحافظ على ألياف الشعر من التلف.",
    tech_c3_title: "تصميم ألوان عصري",
    tech_c3_desc: "خبرة متخصصة في الأومبري، السومبري، البالياج والأشقر.",

    health_kicker: "الصحة أولاً، ثم الجمال",
    health_title: "تحليل بنية الشعر وخدمة قائمة على الصدق",
    health_p1: "لتجربة موثوقة لتصميم الشعر في مانافجات، نقوم بتحليل دقيق لبنية شعركِ قبل أي إجراء. وبدلاً من المغامرة بعمليات مجهدة، نقدم لكِ المشورة الصادقة والبديل الصحي الأنسب.",
    health_p2: "الصدق، النظافة والشفافية هي أساس Three Brothers. لا نتخذ أي خطوة قد تضر بشعركِ ونركز دائماً على النتائج الصحية.",
    health_btn: "تواصل للاستشارة المسبقة",

    trust_kicker: "معايير الجودة والثقة",
    trust_title: "تجربة تصميم شعر تمنحكِ الثقة في مانافجات",
    trust_desc: "في صالون Three Brothers، نعمل وفق معايير صارمة وشفافة تضع راحتكِ في المقام الأول. نستمع لتطلعاتكِ ونختار الأفضل لشعركِ.",
    trust_c1_val: "2014",
    trust_c1_title: "خبرة متواصلة منذ 2014",
    trust_c1_desc: "سنوات من الاحترافية لتحقيق أفضل النتائج دون إجهاد الشعر.",
    trust_c2_val: "التحليل",
    trust_c2_title: "تحليل فردي دقيق للشعر",
    trust_c2_desc: "تقييم مرونة الشعر وتاريخه الكيميائي قبل أي خطوة.",
    trust_c3_val: "%100",
    trust_c3_title: "منتجات أصلية 100%",
    trust_c3_desc: "تركيبات احترافية عالمية معتمدة لحماية وتغذية الشعر.",
    trust_c4_val: "التعقيم",
    trust_c4_title: "أعلى معايير النظافة",
    trust_c4_desc: "أدوات معقمة لكل ضيفة وبيئة صالون راقية ونظيفة تماماً."
  }
};

let i18nContent = fs.readFileSync(i18nPath, 'utf8');

for (const [lang, keys] of Object.entries(refactoredTranslations)) {
  const langAnchor = `"${lang}": {`;
  const pos = i18nContent.indexOf(langAnchor);
  if (pos !== -1) {
    const afterPos = pos + langAnchor.length;
    let newEntries = '\n';
    for (const [k, v] of Object.entries(keys)) {
      newEntries += `    "${k}": ${JSON.stringify(v)},\n`;
    }
    i18nContent = i18nContent.slice(0, afterPos) + newEntries + i18nContent.slice(afterPos);
  }
}

fs.writeFileSync(i18nPath, i18nContent, 'utf8');
fs.writeFileSync(publicI18nPath, i18nContent, 'utf8');
console.log('Refactored translations successfully applied to js/i18n.js!');
