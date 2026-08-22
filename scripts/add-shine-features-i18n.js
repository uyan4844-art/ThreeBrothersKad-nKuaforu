const fs = require('fs');
const path = require('path');

const i18nPath = path.join(__dirname, '../js/i18n.js');
const publicI18nPath = path.join(__dirname, '../public/js/i18n.js');

let i18nContent = fs.readFileSync(i18nPath, 'utf8');

const newTranslations = {
  tr: {
    // Process Section
    process_kicker: "PROFESYONEL DENEYİM & SÜREÇ",
    process_title: "4 Adımda Kusursuz ve Sağlıklı Saç Tasarımı",
    process_desc: "Three Brothers stüdyomuzda saç sağlığınızı asla riske atmayan, bilimsel ve sanatsal 4 aşamalı yaklaşımımız.",
    step1_num: "01",
    step1_title: "Saç Yapısı Analizi & Konsültasyon",
    step1_desc: "İşlem öncesinde saçınızın geçmiş kimyasal geçmişi, elastikiyeti ve ten renginiz detaylıca incelenir.",
    step2_num: "02",
    step2_title: "Kişiye Özel Formülasyon",
    step2_desc: "Saç tellerini koruyan bağ güçlendirici formüller ve yüz hatlarınıza en çok yakışan tonlar belirlenir.",
    step3_num: "03",
    step3_title: "Hassas & Usta Uygulama",
    step3_desc: "Balyaj, blonde veya ombre tekniği saçın biyolojik yapısını yormadan milimetrik özenle uygulanır.",
    step4_num: "04",
    step4_title: "Parlaklık & Ev Bakım Rehberi",
    step4_desc: "Rengin ışıltısını ve saçınızın ipeksi dokusunu aylarca korumanız için kişisel bakım önerileri sunulur.",

    // Repair Callout
    repair_kicker: "ÖZEL UZMANLIK & RENK DÜZELTME",
    repair_title: "Yıpranmış ve Yorulmuş Saçlar İçin Transparan Boya Çözümleri",
    repair_desc: "Ağır kimyasal işlemlerden yıpranmış veya matlaşmış saçlar için saçın doğal tonuna saygılı, bağ onarıcı ve transparan renklendirme teknikleriyle saça yeniden hayat veriyoruz.",
    repair_badge1: "Doğal Ton Uyumu & Canlılık",
    repair_badge2: "Sıfır Yıpranma & Bağ Koruma",
    repair_badge3: "Dürüst & Şeffaf Değerlendirme",
    repair_btn: "Ön Görüşme ve Analiz Randevusu Al",

    // FAQ Section
    faq_kicker: "MERAK EDİLENLER",
    faq_title: "Sıkça Sorulan Sorular",
    faq_desc: "Three Brothers salonumuzdaki hizmetler, saç analizi ve randevu süreci hakkında en çok sorulan sorular.",
    faq1_q: "İşlem öncesinde saç analizi ve ön görüşme yapıyor musunuz?",
    faq1_a: "Evet. Misafirlerimizin saç yapısını, geçmiş boya/açma geçmişini ve saçın elastikiyetini analiz etmeden hiçbir ağır işleme başlamıyoruz. Saç sağlığını tehlikeye atacak bir durum varsa dürüstçe alternatif çözümler öneriyoruz.",
    faq2_q: "Yıpranmış veya yanmış saçlara sarı saç / balyaj yapılabilir mi?",
    faq2_a: "Saçın mevcut yapısı incelenir; şayet saç teli açma işlemine uygun değilse önce yoğun bağ güçlendirici ve onarıcı protein bakımı planlanır. Saç hazır olduğunda güvenli aşamalarla renklendirme yapılır.",
    faq3_q: "Balyaj ve Ombre ne kadar süre dayanır, dip boyası gerektirir mi?",
    faq3_a: "Balyaj ve Ombre uygulamalarımız saçın kendi doğal dip rengiyle yumuşak bir geçiş sağlayacak şekilde tasarlandığı için saçınız uzadığında keskin bir dip çizgisi oluşmaz. Ortalama 4–8 ay boyunca rahatlıkla kullanılabilir.",
    faq4_q: "Mikro kaynak uygulaması kendi saçıma zarar verir mi?",
    faq4_a: "Hayır. Salonumuzda %100 doğal saçlar ve ultra ince mikro kapsüller kullanılır. Doğru gramaj ve açıyla uygulandığında saçınızı çekmez, kırmaz ve doğal saçınızın sağlıklı uzamasına engel olmaz.",
    faq5_q: "Randevu almak için ne kadar önceden iletişime geçmeliyim?",
    faq5_a: "Özellikle balyaj, sarı saç ve mikro kaynak gibi uzun süren özel işlemler için en az 1-3 gün önceden WhatsApp (+90 552 685 69 07) veya telefon ile randevu almanızı tavsiye ederiz."
  },
  en: {
    process_kicker: "PROFESSIONAL EXPERIENCE & PROCESS",
    process_title: "Flawless & Healthy Hair Design in 4 Steps",
    process_desc: "Our 4-step scientific and artistic methodology at Three Brothers that never compromises your hair health.",
    step1_num: "01",
    step1_title: "Hair Structure Analysis & Consultation",
    step1_desc: "Your hair's chemical history, elasticity, and skin undertones are thoroughly evaluated before any procedure.",
    step2_num: "02",
    step2_title: "Customized Formulation",
    step2_desc: "Bond-strengthening formulas and shades that best flatter your facial features are selected.",
    step3_num: "03",
    step3_title: "Precise & Masterful Application",
    step3_desc: "Balayage, blonde, or ombre techniques are applied with millimeter precision without stressing the hair.",
    step4_num: "04",
    step4_title: "Shine Lock & Home Care Guide",
    step4_desc: "Personal care recommendations are provided so you can enjoy your color's radiant shine for months.",

    repair_kicker: "SPECIALIZED EXPERTISE & COLOR CORRECTION",
    repair_title: "Transparent Color Solutions for Damaged Hair",
    repair_desc: "For hair tired of harsh chemicals or dull tones, we breathe new life into your hair using bond-rebuilding and transparent glossing techniques respectful of your natural shades.",
    repair_badge1: "Natural Shade Harmony & Vitality",
    repair_badge2: "Zero Damage & Bond Protection",
    repair_badge3: "Honest & Transparent Assessment",
    repair_btn: "Book Consultation & Hair Analysis",

    faq_kicker: "FAQ & ADVICE",
    faq_title: "Frequently Asked Questions",
    faq_desc: "Common questions about services, hair analysis, and appointment booking at Three Brothers.",
    faq1_q: "Do you perform hair analysis and consultation prior to procedures?",
    faq1_a: "Yes. We never begin chemical lightening without examining elasticity and past color history. If hair integrity is compromised, we honestly recommend restorative alternatives first.",
    faq2_q: "Can blonde or balayage be applied to damaged or sensitized hair?",
    faq2_a: "We inspect the hair fibers first; if the hair is not ready for lifting, intensive bond-repair treatments are applied first until healthy lightening can be safely achieved.",
    faq3_q: "How long do Balayage and Ombre last, and do they require root touch-ups?",
    faq3_a: "Our balayage seamlessly blends with your natural root color, so there is no harsh line of demarcation as it grows. Clients enjoy flawless wear for 4–8 months.",
    faq4_q: "Does micro-capsule extension damage natural hair?",
    faq4_a: "No. We utilize 100% human virgin hair and ultra-fine micro capsules. Applied at proper weight ratios and angles, it will never pull or break your natural hair.",
    faq5_q: "How far in advance should I book an appointment?",
    faq5_a: "For elaborate treatments such as balayage, blonde, and extensions, we recommend booking 1–3 days in advance via WhatsApp (+90 552 685 69 07) or phone."
  },
  de: {
    process_kicker: "PROFESSIONELLER ABLAUF & ERLEBNIS",
    process_title: "Makelloses & gesundes Haardesign in 4 Schritten",
    process_desc: "Unser wissenschaftlicher und künstlerischer 4-Stufen-Ansatz bei Three Brothers, der Ihre Haargesundheit niemals gefährdet.",
    step1_num: "01",
    step1_title: "Haaranalyse & persönliche Beratung",
    step1_desc: "Vor der Behandlung werden chemische Vorgeschichte, Elastizität und Ihr Hautton detailliert analysiert.",
    step2_num: "02",
    step2_title: "Individuelle Rezeptur",
    step2_desc: "Bindungsstärkende Formeln und perfekt auf Ihre Gesichtszüge abgestimmte Farbnuancen werden gewählt.",
    step3_num: "03",
    step3_title: "Präzise & meisterhafte Ausführung",
    step3_desc: "Balayage-, Blond- oder Ombre-Techniken werden mit höchster Sorgfalt schonend eingearbeitet.",
    step4_num: "04",
    step4_title: "Glanz-Versiegelung & Pflegeanleitung",
    step4_desc: "Individuelle Pflegehinweise sichern langanhaltenden Glanz und Geschmeidigkeit für viele Monate.",

    repair_kicker: "SPEZIALEXPERTISE & FARBKORREKTUR",
    repair_title: "Transparente Farblösungen für strapaziertes Haar",
    repair_desc: "Für durch chemische Behandlungen ermüdetes Haar verleihen wir mit bindungsstärkenden und transparenten Glanztechniken neue Vitalität.",
    repair_badge1: "Natürliche Farbharmonie & Strahlkraft",
    repair_badge2: "Null Haarschädigung & Bindungsschutz",
    repair_badge3: "Ehrliche & transparente Beratung",
    repair_btn: "Beratung & Haaranalyse vereinbaren",

    faq_kicker: "HÄUFIG GESTELLTE FRAGEN",
    faq_title: "Fragen & Antworten",
    faq_desc: "Die wichtigsten Fragen zu unseren Behandlungen, Haaranalyse und Terminvereinbarungen bei Three Brothers.",
    faq1_q: "Führen Sie vor der Behandlung eine Haaranalyse und Vorbesprechung durch?",
    faq1_a: "Ja. Wir beginnen keine chemische Aufhellung, ohne zuvor die Elastizität und Farbgeschichte genau zu prüfen. Bei Risiken schlagen wir ehrliche, gesunde Alternativen vor.",
    faq2_q: "Kann bei strapaziertem Haar eine Balayage oder Blondierung durchgeführt werden?",
    faq2_a: "Wir prüfen die Haarfaser; ist das Haar geschwächt, erfolgt zunächst eine intensive Tiefenpflege zum Strukturaufbau, bevor sicher aufgehellt wird.",
    faq3_q: "Wie lange halten Balayage und Ombre und ist ein Nachfärben des Ansatzes nötig?",
    faq3_a: "Da der Farbverlauf weich mit Ihrem Naturton verschmilzt, entsteht kein harter Ansatz. Sie können das Ergebnis 4–8 Monate genießen.",
    faq4_q: "Schädigen Mikro-Bonding-Extensions das Eigenhaar?",
    faq4_a: "Nein. Wir verwenden 100% Echthaar und ultrafeine Mikrokapseln. Fachgerecht angebracht schützt es Ihr Naturhaar und lässt es ungestört wachsen.",
    faq5_q: "Wie frühzeitig sollte ich einen Termin vereinbaren?",
    faq5_a: "Für zeitintensive Anwendungen wie Balayage, Blond oder Haarverlängerungen empfehlen wir 1–3 Tage im Voraus per WhatsApp (+90 552 685 69 07) zu reservieren."
  },
  ru: {
    process_kicker: "ПРОФЕССИОНАЛЬНЫЙ ПОДХОД И ПРОЦЕСС",
    process_title: "Безупречный и здоровый дизайн волос за 4 шага",
    process_desc: "Наш 4-этапный научный и эстетический подход в Three Brothers, сохраняющий здоровье ваших волос.",
    step1_num: "01",
    step1_title: "Анализ структуры волос и консультация",
    step1_desc: "Перед процедурой детально оценивается история окрашиваний, эластичность волос и тон кожи.",
    step2_num: "02",
    step2_title: "Индивидуальная формула",
    step2_desc: "Подбираются укрепляющие связи составы и оттенки, идеально подчеркивающие ваши черты лица.",
    step3_num: "03",
    step3_title: "Деликатное мастерское исполнение",
    step3_desc: "Техники балаяж, блонд или омбре наносятся с ювелирной точностью без повреждения структуры.",
    step4_num: "04",
    step4_title: "Фиксация блеска и домашний уход",
    step4_desc: "Персональные рекомендации по уходу помогут сохранить сияние цвета на долгие месяцы.",

    repair_kicker: "ЭКСПЕРТНОЕ ВОССТАНОВЛЕНИЕ И КОРРЕКЦИЯ ЦВЕТА",
    repair_title: "Прозрачное тонирование для поврежденных волос",
    repair_desc: "Для волос, уставших от агрессивных химических процедур, мы возвращаем жизнь с помощью прозрачных техник тонирования и защиты связей.",
    repair_badge1: "Гармония естественного тона и блеск",
    repair_badge2: "Без повреждений и защита структуры",
    repair_badge3: "Честная и прозрачная оценка",
    repair_btn: "Записаться на консультацию и анализ",

    faq_kicker: "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ",
    faq_title: "Вопросы и ответы",
    faq_desc: "Популярные вопросы об услугах, диагностике волос и записи в салон Three Brothers.",
    faq1_q: "Проводите ли вы консультацию и диагностику перед процедурой?",
    faq1_a: "Да. Мы никогда не начинаем осветление без проверки эластичности и истории окрашиваний. При наличии рисков мы честно предлагаем безопасные восстановительные альтернативы.",
    faq2_q: "Можно ли делать блонд или балаяж на поврежденные волосы?",
    faq2_a: "Мы оцениваем состояние прядей; если волосы ослаблены, сначала проводится интенсивный восстановительный уход, и только затем безопасное окрашивание.",
    faq3_q: "Сколько держатся балаяж и омбре, нужно ли красить корни?",
    faq3_a: "Наши техники создают плавный переход от натуральных корней, поэтому при отрастании резкая граница отсутствует. Результат радует от 4 до 8 месяцев.",
    faq4_q: "Вредит ли микрокапсульное наращивание собственным волосам?",
    faq4_a: "Нет. Мы используем 100% натуральные волосы и ультратонкие микрокапсулы. При правильном распределении нагрузки ваши волосы не ломаются и свободно растут.",
    faq5_q: "За сколько дней необходимо записываться на визит?",
    faq5_a: "Для сложных процедур (балаяж, блонд, наращивание) рекомендуем записываться за 1–3 дня через WhatsApp (+90 552 685 69 07) или по телефону."
  },
  ar: {
    process_kicker: "الخبرة والعملية الاحترافية",
    process_title: "تصميم شعر صحي ومثالي في 4 خطوات",
    process_desc: "نهجنا العلمي والفني المكون من 4 مراحل في Three Brothers الذي يضمن صحة شعرك دون أي مساومة.",
    step1_num: "01",
    step1_title: "تحليل بنية الشعر والاستشارة",
    step1_desc: "يتم فحص التاريخ الكيميائي للشعر ومرونته ولون بشرتك بدقة قبل أي إجراء.",
    step2_num: "02",
    step2_title: "تركيبة مخصصة لكِ",
    step2_desc: "تحديد تركيبات تقوية الروابط والدرجات اللونية الأكثر ملائمة لملامح وجهك.",
    step3_num: "03",
    step3_title: "تطبيق دقيق واحترافي",
    step3_desc: "تطبيق تقنيات البالياج أو الأشقر أو الأومبري بعناية فائقة دون إجهاد الشعر.",
    step4_num: "04",
    step4_title: "تثبيت اللمعان ودليل العناية المنزلية",
    step4_desc: "نصائح عناية مخصصة للحفاظ على إشراقة اللون وملمسه الحريري لأشهر طويلة.",

    repair_kicker: "خبرة متخصصة وتصحيح الألوان",
    repair_title: "حلول الصبغات الشفافة للشعر التالف والمجهد",
    repair_desc: "للشعر المتعب من المواد الكيميائية القاسية، نعيد له الحيوية واللمعان بتقنيات الصبغ الشفاف وإعادة بناء روابط الشعر.",
    repair_badge1: "تناغم لوني طبيعي وحيوية",
    repair_badge2: "صفر تلف وحماية فائقة للروابط",
    repair_badge3: "تقييم أمين وشفاف",
    repair_btn: "حجز موعد استشارة وتحليل الشعر",

    faq_kicker: "الأسئلة الشائعة",
    faq_title: "الأسئلة الأكثر تكراراً",
    faq_desc: "كل ما تودين معرفته حول خدماتنا وتحليل الشعر وحجز المواعيد في Three Brothers.",
    faq1_q: "هل تقومون بتحليل الشعر واستشارة مسبقة قبل البدء؟",
    faq1_a: "نعم. لا نبدأ أي عملية تفتيح دون فحص مرونة الشعر وتاريخه الكيميائي. وإذا كان هناك أي خطر على صحة الشعر، نقترح بصدق بدائل علاجية آمنة.",
    faq2_q: "هل يمكن تطبيق الأشقر أو البالياج على الشعر التالف؟",
    faq2_a: "نقوم بفحص خصلات الشعر أولاً؛ إذا كان الشعر غير جاهز، يتم تطبيق جلسات علاج مكثفة لتقوية الروابط حتى يصبح الشعر مهيأً للتفتيح الآمن.",
    faq3_q: "كم تدوم نتائج البالياج والأومبري وهل تتطلب صبغ الجذور باستمرار؟",
    faq3_a: "نظراً لأن التقنية تندمج بسلاسة مع لون الجذور الطبيعي، فلا يظهر خط فاصل حاد عند نمو الشعر. تدوم النتيجة بكل راحة من 4 إلى 8 أشهر.",
    faq4_q: "هل يسبب وصل الشعر الدقيق (المايكرو) ضرراً للشعر الطبيعي؟",
    faq4_a: "لا. نستخدم شعراً طبيعياً 100% وكبسولات مايكرو متناهية الدقة. عند توزيعها بالوزن والزاوية الصحيحة، لا تشد الشعر ولا تمنع نموه الطبيعي.",
    faq5_q: "كم من الوقت مسبقاً يجب أن أحجز موعدي؟",
    faq5_a: "للجلسات المتخصصة مثل البالياج والصبغات ووصل الشعر، نوصي بالحجز قبل 1-3 أيام عبر واتساب (+90 552 685 69 07) أو الهاتف."
  }
};

for (const lang of ['tr', 'en', 'de', 'ru', 'ar']) {
  const targetTag = `${lang}: {`;
  const entries = Object.entries(newTranslations[lang])
    .map(([k, v]) => `    ${k}: ${JSON.stringify(v)},`)
    .join('\n');
  
  if (i18nContent.includes(targetTag)) {
    i18nContent = i18nContent.replace(targetTag, `${targetTag}\n${entries}`);
  }
}

fs.writeFileSync(i18nPath, i18nContent, 'utf8');
fs.writeFileSync(publicI18nPath, i18nContent, 'utf8');
console.log('Updated i18n.js and public/js/i18n.js successfully!');
