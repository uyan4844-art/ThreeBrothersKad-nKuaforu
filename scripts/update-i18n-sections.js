const fs = require('fs');
const path = require('path');

const i18nPath = path.join(__dirname, '../js/i18n.js');
const publicI18nPath = path.join(__dirname, '../public/js/i18n.js');

const newKeysByLang = {
  tr: {
    // 1. Profesyonel Teknikler
    tech_kicker: "PROFESYONEL RENKLENDİRME TEKNİKLERİ",
    tech_title: "Ombre, Sombre ve Balyaj ile Saçlarınızda Doğal Işıltı",
    tech_p1: "Manavgat’ta doğal geçişler ve göz alıcı parlaklık arıyorsanız doğru yerdesiniz. Three Brothers olarak Ombre, Sombre, Balyaj ve Blonde uygulamalarında saç sağlığınızı koruyan profesyonel ürünler ve modern teknikler kullanıyoruz.",
    tech_p2: "Saç tellerinizin yıpranmasına izin vermeden, yüz hatlarınıza en çok yakışan tonları birlikte belirliyoruz. Amacımız yalnızca güzel bir görünüm değil, sağlıklı ve uzun süre keyifle kullanabileceğiniz bir saç tasarımı sunmak.",

    // 2. Önce Sağlık, Sonra Güzellik (Dark Section)
    health_kicker: "ÖNCE SAĞLIK, SONRA GÜZELLİK",
    health_title: "Saç Analizi ve Dürüst Hizmet Anlayışı",
    health_p1: "Manavgat’ta güvenebileceğiniz bir saç tasarım deneyimi için işlem öncesinde saç yapınızı analiz ediyoruz. Yıpranacak bir işleme girmek yerine, sizi dürüstçe bilgilendiriyor ve saçınız için en doğru alternatifi öneriyoruz.",
    health_p2: "Dürüstlük, hijyen ve şeffaflık Three Brothers’ın temelidir. Saçınıza zarar verecek hiçbir adımı atmıyor, sağlıklı ve sürdürülebilir sonuçlara odaklanıyoruz.",
    health_btn: "Ön Görüşme İçin İletişime Geç",

    // 3. Manavgat Eskihisar'da Profesyonel Dokunuş
    eskihisar_kicker: "MANAVGAT ESKİHİSAR'DA PROFESYONEL DOKUNUŞ",
    eskihisar_title: "Yıpranmış Saçlara Transparan Boya Çözümleri",
    eskihisar_p1: "Manavgat Eskihisar Mahallesi’ndeki salonumuzda, özellikle ağır kimyasal süreçlerden yorulmuş saçlar için uzman çözümler sunuyoruz. Saçın kendi doğal tonuna uygun transparan boya teknikleriyle yıpranmış telleri yeniden canlandırıyoruz.",
    eskihisar_c1_title: "Doğal Ton Uyumu",
    eskihisar_c1_desc: "Saç renginize ve cilt tonunuza uygun geçişler.",
    eskihisar_c2_title: "Saç Sağlığı Odaklı İşlem",
    eskihisar_c2_desc: "Yıpranmayı azaltan profesyonel yaklaşım.",
    eskihisar_c3_title: "Modern Teknikler",
    eskihisar_c3_desc: "Ombre, Sombre, Balyaj ve Blonde uygulamalarında uzmanlık.",

    // 4. Kişiye Özel Stil Danışmanlığı
    consult_kicker: "KİŞİYE ÖZEL STİL DANIŞMANLIĞI",
    consult_title: "Sizi Dinliyor, Saçlarınızı Analiz Ediyoruz",
    consult_p1: "Bizim için her misafir bir dosttur. Beklentilerinizi dinliyor, saç yapınızı inceliyor ve birlikte en doğru kararı veriyoruz. Manavgat’ın merkezinde profesyonel kuaförlük hizmetini samimiyet ve uzmanlıkla birleştiriyoruz.",
    consult_card1_num: "2014",
    consult_card1_label: "Yılından bu yana tecrübe",
    consult_card2_title: "Hijyen",
    consult_card2_label: "Salonumuzun değişmez standardı",
    consult_card3_title: "Analiz",
    consult_card3_label: "Her işlem öncesi kişiye özel değerlendirme",
    consult_card4_title: "Güven",
    consult_card4_label: "Dürüst ve şeffaf hizmet yaklaşımı",

    // 5. Neden Biz?
    why_kicker: "NEDEN THREE BROTHERS?",
    why_title: "Manavgat’ta Güven Veren Saç Tasarım Deneyimi",
    why_c1_num: "01",
    why_c1_title: "Uzman Analiz",
    why_c1_desc: "Saç stilistlerimizin 2014'ten bu yana süregelen tecrübesiyle, saç yapınızı bozmadan en doğru işlemi belirliyoruz.",
    why_c2_num: "02",
    why_c2_title: "Önce Hijyen",
    why_c2_desc: "Salonumuzda hijyen kuralları bir seçenek değil, sizin sağlığınız için değişmez bir standarttır.",
    why_c3_num: "03",
    why_c3_title: "Güven ve Samimiyet",
    why_c3_desc: "Saçınıza zarar verecek hiçbir adımı atmıyor, size en doğru sonucu samimiyetle sunuyoruz."
  },

  en: {
    tech_kicker: "PROFESSIONAL COLORING TECHNIQUES",
    tech_title: "Natural Glow with Ombre, Sombre and Balayage",
    tech_p1: "If you are looking for seamless transitions and eye-catching radiance in Manavgat, you are in the right place. At Three Brothers, we use professional products and modern techniques that preserve hair health during Ombre, Sombre, Balayage and Blonde applications.",
    tech_p2: "Without compromising your hair's integrity, we determine the tones that best harmonize with your facial features. Our aim is to deliver not just beautiful looks, but a healthy and long-lasting hair design you can enjoy.",

    health_kicker: "HEALTH FIRST, BEAUTY FOLLOWS",
    health_title: "Hair Analysis & Honest Service Philosophy",
    health_p1: "For a hair design experience you can truly trust in Manavgat, we thoroughly analyze your hair structure before every procedure. Rather than proceeding with damaging processes, we inform you transparently and recommend the healthiest alternatives.",
    health_p2: "Honesty, hygiene, and transparency are the pillars of Three Brothers. We avoid harmful steps and focus purely on healthy, sustainable hair outcomes.",
    health_btn: "Contact for Consultation",

    eskihisar_kicker: "PROFESSIONAL TOUCH IN MANAVGAT ESKIHISAR",
    eskihisar_title: "Transparent Dye Solutions for Damaged Hair",
    eskihisar_p1: "In our salon in Manavgat Eskihisar, we offer specialized solutions for hair fatigued by heavy chemical procedures. With transparent dyeing techniques tailored to your hair's natural undertones, we revitalize fragile strands.",
    eskihisar_c1_title: "Natural Tone Harmony",
    eskihisar_c1_desc: "Transitions suited perfectly to your hair and skin tone.",
    eskihisar_c2_title: "Hair Health-Centric Process",
    eskihisar_c2_desc: "Professional methodology minimizing breakage and stress.",
    eskihisar_c3_title: "Modern Techniques",
    eskihisar_c3_desc: "Mastery in Ombre, Sombre, Balayage, and Blonde styling.",

    consult_kicker: "PERSONALIZED STYLE CONSULTATION",
    consult_title: "We Listen to You & Analyze Your Hair",
    consult_p1: "To us, every guest is a dear friend. We listen to your desires, assess your hair's condition, and decide on the best path together. We blend professional salon artistry with genuine care in the heart of Manavgat.",
    consult_card1_num: "2014",
    consult_card1_label: "Years of proven expertise",
    consult_card2_title: "Hygiene",
    consult_card2_label: "Uncompromising salon cleanliness",
    consult_card3_title: "Analysis",
    consult_card3_label: "Custom hair evaluation before every step",
    consult_card4_title: "Trust",
    consult_card4_label: "Honest and transparent communication",

    why_kicker: "WHY THREE BROTHERS?",
    why_title: "A Trusted Hair Design Experience in Manavgat",
    why_c1_num: "01",
    why_c1_title: "Expert Analysis",
    why_c1_desc: "With expertise honed since 2014, our stylists determine the optimal treatment without compromising hair structure.",
    why_c2_num: "02",
    why_c2_title: "Hygiene First",
    why_c2_desc: "Hygiene in our salon is not an option, it is an immutable standard for your safety and comfort.",
    why_c3_num: "03",
    why_c3_title: "Trust & Sincerity",
    why_c3_desc: "We never take steps that risk damaging your hair, providing sincere guidance and top results."
  },

  de: {
    tech_kicker: "PROFESSIONELLE FÄRBETECHNIKEN",
    tech_title: "Natürlicher Glanz mit Ombré, Sombré und Balayage",
    tech_p1: "Wenn Sie in Manavgat nach nahtlosen Übergängen und strahlendem Glanz suchen, sind Sie bei Three Brothers genau richtig. Wir verwenden haarschonende Spitzenprodukte und moderne Methoden für Ombré, Sombré, Balayage und Blond-Nuancen.",
    tech_p2: "Ohne Ihr Haar zu strapazieren, bestimmen wir gemeinsam die Farbtöne, die ideal mit Ihren Gesichtszügen harmonieren. Unser Ziel ist ein gesundes und langanhaltendes Haarergebnis.",

    health_kicker: "ERST DIE GESUNDHEIT, DANN DIE SCHÖNHEIT",
    health_title: "Haaranalyse & Ehrliche Beratung",
    health_p1: "Für ein vertrauensvolles Salonerlebnis in Manavgat analysieren wir vor jeder Behandlung Ihre Haarstruktur. Statt schädlicher Behandlungen beraten wir Sie ehrlich und empfehlen die beste gesunde Alternative.",
    health_p2: "Ehrlichkeit, Hygiene und Transparenz bilden das Fundament von Three Brothers. Wir verzichten auf riskante Schritte und setzen auf nachhaltige Haargesundheit.",
    health_btn: "Beratungstermin vereinbaren",

    eskihisar_kicker: "PROFESSIONELLE HANDWERKSKUNST IN ESKIHISAR",
    eskihisar_title: "Transparente Farblösungen für strapaziertes Haar",
    eskihisar_p1: "In unserem Salon in Manavgat Eskihisar bieten wir maßgeschneiderte Lösungen für chemisch beanspruchtes Haar. Mit transparenten Tönungstechniken beleben wir strapazierte Haarfasern sanft wieder.",
    eskihisar_c1_title: "Natürliche Farbharmonie",
    eskihisar_c1_desc: "Fließende Übergänge abgestimmt auf Haut- und Naturton.",
    eskihisar_c2_title: "Fokus Haargesundheit",
    eskihisar_c2_desc: "Schonende Technik zur Vermeidung von Haarbruch.",
    eskihisar_c3_title: "Moderne Techniken",
    eskihisar_c3_desc: "Spezialisierung auf Ombré, Sombré, Balayage und Blond.",

    consult_kicker: "INDIVIDUELLE STILBERATUNG",
    consult_title: "Wir hören zu & analysieren Ihr Haar",
    consult_p1: "Jede Kundin ist für uns wie ein persönlicher Gast. Wir nehmen uns Zeit für Ihre Wünsche, prüfen die Haarstruktur und finden gemeinsam die optimale Lösung im Zentrum von Manavgat.",
    consult_card1_num: "2014",
    consult_card1_label: "Erfahrung & Tradition seit 2014",
    consult_card2_title: "Hygiene",
    consult_card2_label: "Höchste Sauberkeit & Sterilität",
    consult_card3_title: "Analyse",
    consult_card3_label: "Individuelle Beurteilung vor jedem Schritt",
    consult_card4_title: "Vertrauen",
    consult_card4_label: "Ehrliche und transparente Betreuung",

    why_kicker: "WARUM THREE BROTHERS?",
    why_title: "Ihr vertrauensvoller Partnersalon in Manavgat",
    why_c1_num: "01",
    why_c1_title: "Expertenanalyse",
    why_c1_desc: "Dank langjähriger Praxis seit 2014 finden unsere Stylisten stets die sicherste und schönste Lösung für Ihr Haar.",
    why_c2_num: "02",
    why_c2_title: "Hygiene an erster Stelle",
    why_c2_desc: "Strenge Hygiene ist bei uns kein Kompromiss, sondern fester Salonstandard für Ihr Wohlbefinden.",
    why_c3_num: "03",
    why_c3_title: "Vertrauen & Herzlichkeit",
    why_c3_desc: "Wir vermeiden schädigende Schritte und garantieren ehrliche, erstklassige Ergebnisse.",
  },

  ru: {
    tech_kicker: "ПРОФЕССИОНАЛЬНЫЕ ТЕХНИКИ ОКРАШИВАНИЯ",
    tech_title: "Естественное сияние с омбре, сомбре и балаяж",
    tech_p1: "Если вы ищете плавные переходы и ослепительный блеск в Манавгате, вы в правильном месте. В Three Brothers мы применяем профессиональные составы и современные методы для бережного окрашивания омбре, сомбре, балаяж и блонд.",
    tech_p2: "Не повреждая структуру волос, мы подбираем оттенки, идеально гармонирующие с чертами вашего лица. Наша цель — долговечный и здоровый результат.",

    health_kicker: "СНАЧАЛА ЗДОРОВЬЕ, ЗАТЕМ КРАСОТА",
    health_title: "Анализ структуры волос и честный подход",
    health_p1: "Для безопасного преображения в Манавгате мы детально оцениваем состояние ваших волос перед каждой процедурой. Вместо агрессивных воздействий мы честно предлагаем наилучшую здоровую альтернативу.",
    health_p2: "Честность, гигиена и прозрачность — главные принципы Three Brothers. Мы никогда не идем на риск ради минутного эффекта.",
    health_btn: "Записаться на консультацию",

    eskihisar_kicker: "ПРОФЕССИОНАЛЬНЫЙ УХОД В ЭСКИХИСАРЕ (МАНАВГАТ)",
    eskihisar_title: "Прозрачное тонирование для поврежденных волос",
    eskihisar_p1: "В нашем салоне в районе Эскихисар мы предлагаем экспертные решения для волос, уставших от химических процедур. Прозрачные техники бережно возвращают волосам блеск и силу.",
    eskihisar_c1_title: "Гармония оттенков",
    eskihisar_c1_desc: "Плавные переходы под ваш цветотип и тон кожи.",
    eskihisar_c2_title: "Защита структуры волос",
    eskihisar_c2_desc: "Профессиональный подход, минимизирующий ломкость.",
    eskihisar_c3_title: "Современные техники",
    eskihisar_c3_desc: "Мастерство в техниках омбре, сомбре, балаяж и блонд.",

    consult_kicker: "ИНДИВИДУАЛЬНАЯ КОНСУЛЬТАЦИЯ ПО СТИЛЮ",
    consult_title: "Мы внимательно слушаем и анализируем ваши волосы",
    consult_p1: "Для нас каждый гость — друг. Мы прислушиваемся к вашим пожеланиям, изучаем волосы и вместе принимаем верное решение в самом сердце Манавгата.",
    consult_card1_num: "2014",
    consult_card1_label: "Год основания и опыт работы",
    consult_card2_title: "Гигиена",
    consult_card2_label: "Непререкаемый стандарт чистоты",
    consult_card3_title: "Анализ",
    consult_card3_label: "Персональная оценка перед процедурой",
    consult_card4_title: "Доверие",
    consult_card4_label: "Честный и открытый подход к клиенту",

    why_kicker: "ПОЧЕМУ THREE BROTHERS?",
    why_title: "Салон красоты в Манавгате, которому доверяют",
    why_c1_num: "01",
    why_c1_title: "Экспертная диагностика",
    why_c1_desc: "Опыт наших стилистов с 2014 года позволяет выбрать идеальную процедуру без вреда для волос.",
    why_c2_num: "02",
    why_c2_title: "Безупречная гигиена",
    why_c2_desc: "Стерильность инструментов и чистота салона — наш неизменный приоритет.",
    why_c3_num: "03",
    why_c3_title: "Доверие и забота",
    why_c3_desc: "Мы не делаем опасных процедур и всегда работаем на безопасный и красивый результат."
  },

  ar: {
    tech_kicker: "تقنيات التلوين الاحترافية",
    tech_title: "إشراقة طبيعية مع الأومبري والسومبري والبالياج",
    tech_p1: "إذا كنتِ تبحثين عن تدرجات طبيعية ولمعان فائق في مانافجات، فأنتِ في المكان المناسب. في Three Brothers نستخدم منتجات احترافية وتقنيات حديثة تحافظ على صحة الشعر أثناء تلوين الأومبري والسومبري والبالياج والأشقر.",
    tech_p2: "دون إلحاق أي ضرر ببنية شعركِ، نحدد معاً الدرجات التي تتناغم مع ملامح وجهكِ لضمان مظهر صحي ومستدام يدوم طويلاً.",

    health_kicker: "الصحة أولاً، ثم الجمال",
    health_title: "تحليل بنية الشعر وخدمة قائمة على الصدق",
    health_p1: "لتجربة موثوقة لتصميم الشعر في مانافجات، نقوم بتحليل دقيق لبنية شعركِ قبل أي إجراء. وبدلاً من المغامرة بعمليات مجهدة، نقدم لكِ المشورة الصادقة والبديل الصحي الأنسب.",
    health_p2: "الصدق، النظافة والشفافية هي أساس Three Brothers. لا نتخذ أي خطوة قد تضر بشعركِ ونركز دائماً على النتائج الصحية.",
    health_btn: "تواصل للاستشارة المسبقة",

    eskihisar_kicker: "لمسة احترافية في إسكي حصار مانافجات",
    eskihisar_title: "حلول الصبغة الشفافة للشعر التالف والمجهد",
    eskihisar_p1: "في صالوننا بحي إسكي حصار في مانافجات، نقدم حلولاً متخصصة للشعر المجهد بالعمليات الكيميائية السابقة، معيدين الحيوية والنعومة لخصلاتكِ بتقنيات متقدمة.",
    eskihisar_c1_title: "تناغم لوني طبيعي",
    eskihisar_c1_desc: "تدرجات ملائمة للون بشرتكِ وشعركِ الطبيعي.",
    eskihisar_c2_title: "إجراء يركز على صحة الشعر",
    eskihisar_c2_desc: "نهج احترافي يقلل من التلف والتقصف.",
    eskihisar_c3_title: "تقنيات عصرية",
    eskihisar_c3_desc: "خبرة فائقة في الأومبري، السومبري، البالياج والأشقر.",

    consult_kicker: "استشارات مظهر مخصصة",
    consult_title: "نستمع إليكِ ونحلل بنية شعركِ بعناية",
    consult_p1: "كل ضيفة لدينا هي بمثابة صديقة. نستمع لتطلعاتكِ ونفحص طبيعة شعركِ لنتخذ القرار الأنسب معاً في قلب مانافجات بلمسة راقية من الدفء والاحترافية.",
    consult_card1_num: "2014",
    consult_card1_label: "سنوات من الخبرة والتميز منذ 2014",
    consult_card2_title: "النظافة والتعقيم",
    consult_card2_label: "معيار لا نساوم عليه في صالوننا",
    consult_card3_title: "التحليل المسبق",
    consult_card3_label: "تقييم مخصص قبل كل خطوة",
    consult_card4_title: "الثقة المتبادلة",
    consult_card4_label: "شفافية مطلقة في كل تعامل",

    why_kicker: "لماذا THREE BROTHERS؟",
    why_title: "تجربة تصميم شعر تمنحكِ الثقة في مانافجات",
    why_c1_num: "01",
    why_c1_title: "تحليل الخبراء",
    why_c1_desc: "بفضل خبرة مصففينا منذ 2014، نختار الإجراء المناسب تماماً دون الإضرار بشعركِ.",
    why_c2_num: "02",
    why_c2_title: "أولوية التعقيم",
    why_c2_desc: "قواعد النظافة في صالوننا معيار ثابت لسلامتكِ وراحتكِ التامة.",
    why_c3_num: "03",
    why_c3_title: "الثقة والصدق",
    why_c3_desc: "نحرص على تجنب أي ضرر لشعركِ وتقديم النتائج المثالية بكل صدق."
  }
};

let i18nContent = fs.readFileSync(i18nPath, 'utf8');

// Insert keys into each language dictionary
for (const [lang, keys] of Object.entries(newKeysByLang)) {
  const langKeyAnchor = `"${lang}": {`;
  const insertIndex = i18nContent.indexOf(langKeyAnchor);
  if (insertIndex !== -1) {
    const afterOpenBrace = insertIndex + langKeyAnchor.length;
    let keyLines = '\n';
    for (const [k, v] of Object.entries(keys)) {
      keyLines += `    "${k}": ${JSON.stringify(v)},\n`;
    }
    i18nContent = i18nContent.slice(0, afterOpenBrace) + keyLines + i18nContent.slice(afterOpenBrace);
  }
}

fs.writeFileSync(i18nPath, i18nContent, 'utf8');
fs.writeFileSync(publicI18nPath, i18nContent, 'utf8');
console.log('Translations updated successfully in js/i18n.js and public/js/i18n.js');
