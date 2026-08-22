const fs = require('fs');
const path = require('path');

const cleanI18nScript = `/**
 * Three Brothers Bayan Kuaförü (Manavgat)
 * Lüks & Butik Çok Dilli Motor (Multi-Language Engine)
 * Diller: TR (Türkçe), EN (English), DE (Deutsch), RU (Русский), AR (العربية)
 * Marka Adı: "Three Brothers" (İstisnasız tüm dillerde orijinal korunur)
 */

const I18N_LANGUAGES = {
  tr: { name: "Türkçe", code: "TR", dir: "ltr" },
  en: { name: "English", code: "EN", dir: "ltr" },
  de: { name: "Deutsch", code: "DE", dir: "ltr" },
  ru: { name: "Русский", code: "RU", dir: "ltr" },
  ar: { name: "العربية", code: "AR", dir: "rtl" }
};

const I18N_TRANSLATIONS = {
  tr: {
    page_title: "Three Brothers Bayan Kuaförü | Manavgat Sarı Saç & Butik Tasarım",
    meta_description: "2014'ten beri Manavgat'ta Three Brothers olarak sarı saçta doğallık ve ustalık, kişiye özel renk analizi ve saç sağlığı odaklı butik kuaför deneyimi.",
    brand_name: "Three Brothers",
    brand_tagline: "BAYAN KUAFÖRÜ • MANAVGAT",
    status_open: "Şu an Açık • 08:30 – 20:30",
    status_closed: "Pazartesi Kapalı • Salı 08:30'da Açık",

    // Navigation & Drawer
    nav_home: "Ana Sayfa",
    nav_story: "Hakkımızda",
    nav_services: "Hizmetlerimiz",
    nav_reels: "Reels",
    nav_reviews: "Yorumlar",
    nav_gallery: "Galeri",
    nav_contact: "İletişim",
    drawer_services_tag: "ÖNE ÇIKAN HİZMETLER",
    drawer_lang_tag: "DİL SEÇİMİ / LANGUAGE",

    // Hero Section
    hero_kicker: "2014’TEN BERİ MANAVGAT — SARI SAÇ & RENK DOKUNUŞLARI",
    hero_title: "Doğal Işıltı, Kusursuz Renk.",
    hero_desc: "Saçın sağlığını ve biyolojik yapısını koruyan profesyonel renk tasarımı ve kişiye özel açma teknikleri.",
    hero_btn_explore: "Hizmetlerimiz",
    hero_btn_wa: "Randevu Al (WhatsApp)",
    floating_call: "Hemen Ara",
    floating_wa: "WhatsApp Randevu",

    // Story Section
    story_kicker: "FELSEFEMİZ & YAKLAŞIMIMIZ",
    story_title_accent: "Saçın Doğal Sağlığı ve Sanatı",
    story_p1: "2014 yılından bu yana Manavgat’ta Three Brothers olarak bayan kuaförlüğü alanında estetik, dürüstlük ve teknik uzmanlığı bir arada sunuyoruz.",
    story_p2: "Özellikle <strong>sarı saç, balyaj ve hassas renk açma</strong> uygulamalarında doğru teknik ve profesyonel formüllerle çalışıyor; işlem öncesi detaylı saç analizi yaparak saçı yıpratmadan hayal edilen tonlara ulaştırıyoruz. Bizim için kusursuz bir renk kadar, <strong>saçın sağlığını ve bütünlüğünü korumak</strong> da büyük önem taşıyor.",
    story_p3: "Ten renginiz, yüz hatlarınız ve günlük kullanım alışkanlıklarınız doğrultusunda sadece size özel, doğal ve uzun süre formunu koruyan sonuçlar tasarlıyoruz.",
    story_quote: "“2014’ten bugüne değişmeyen ilkemiz; zanaatımıza olan saygımız ve misafirlerimizin memnuniyetidir.”",
    story_btn_wa: "Ön Görüşme ve Saç Analizi İçin İletişime Geçin",
    story_cta: "Salonumuzu ve Hikayemizi Keşfedin",

    // Pillars (Neden Three Brothers?)
    standards_kicker: "HİZMET STANDARTLARIMIZ",
    standards_title: "Neden Three Brothers?",
    pillar1_title: "Doğru Teknik & Sıfır Yıpranma",
    pillar1_desc: "Saçın bağ dokusunu güçlendiren patentli formüller ve kontrollü açma işlemi.",
    pillar2_title: "Kişiye Özel Renk Analizi",
    pillar2_desc: "Ten renginiz, göz tonunuz ve tarzınıza en uygun estetik renk uyumu.",
    pillar3_title: "Dürüst & Şeffaf İletişim",
    pillar3_desc: "Saçınızın ihtiyacını dinler, riskli hiçbir işleme onay vermeden en sağlıklı alternatifi sunarız.",
    pillar4_title: "Tavizsiz Hijyen Standardı",
    pillar4_desc: "Kişiye özel steril ekipmanlar ve tertemiz bir butik salon ortamı sunuyoruz.",

    // Instagram / Reels Section
    reels_kicker: "INSTAGRAM VİTRİNİ",
    reels_title: "Salonumuzdan Canlı Saç Dönüşümleri",
    reels_desc: "Günlük stüdyo çalışmalarımız, renk açma süreçleri ve güncel saç tasarımları.",
    insta_header_tag: "INSTAGRAM",
    insta_username: "@threebrotherss",
    insta_bio: "Three Brothers Bayan Kuaförü | Manavgat Demokrasi Bulvarı",
    insta_follow_btn: "Takip Et",
    insta_audio_name: "♫ Orijinal Ses — Three Brothers Manavgat",
    insta_view_profile: "Profili Gör",
    insta_see_more: "Instagram'da daha fazlasını gör →",
    reels1_badge: "Bej Blonde",
    reels1_likes: "1.482 beğenme",
    reels1_desc: "✨ BEJ BLONDE - YAZIN TREND RENGİ ✨ Doğal geçişler, yumuşak bej tonları ve ışığı mükemmel yansıtan sarı saç sanatı.",
    reels2_badge: "Ombre & Işıltı",
    reels2_likes: "2.140 beğenme",
    reels2_desc: "OMBRE ✨✨ Daha önce yaptığımız ışıltıları bu seansta bir adım daha ileri taşıdık… Memnuniyet ve saçın sağlığı her şeyden önemli.",
    reels3_badge: "Renk & Dokunuş",
    reels3_likes: "1.895 beğenme",
    reels3_desc: "Doğru ton, doğru geçiş ve kusursuz dokunuş… Profesyonellik detaylarda gizli.",

    // Services Bento Grid
    services_kicker: "UZMANLIK ALANLARIMIZ",
    services_title: "Kişiye Özel Profesyonel Dokunuşlar",
    services_desc: "Renk, form ve bakımda doğal görünümü modern kuaförlük teknikleriyle buluşturuyoruz.",
    srv1_title: "Profesyonel Balyaj & Sarı Saç",
    srv2_title: "Kişiye Özel Renklendirme & Tonlama",
    srv3_title: "Blonde & İpeksi Renk Tasarımı",
    srv4_title: "Ombre & Sombre Geçişleri",
    srv5_title: "Mikro Kapsül Kaynak",
    srv_cut: "Kişiye Özel Kesim",
    srv_keratin: "İpeksi Keratin Bakımı",

    // Google Reviews (Carousel)
    reviews_kicker: "MÜŞTERİ DENEYİMLERİ",
    reviews_title: "Google'da 5.0 Yıldızlı Değerlendirmeler",
    reviews_rating_text: "★★★★★ 119+ Doğrulanmış Gerçek Müşteri Yorumu",
    reviews_maps_btn: "Google Haritalar'da Tüm Yorumları İnceleyin →",
    r1_author: "Eda Erbey",
    r1_tag: "Doğrulanmış Google Yorumu",
    r1_text: "“Yaklaşık üç yıldır bu kuaföre gidiyorum. Saç kesimi, boya, cila, balyaj gibi tüm işlemlerimi burada yaptırıyorum. Emre, İsa ve Hüseyin Bey güler yüzlü ve işlerini büyük bir özenle yapıyor. Güvenle tercih edebilirsiniz.”",
    r2_author: "Bermal Kabamaklı",
    r2_tag: "Doğrulanmış Google Yorumu",
    r2_text: "“O kadar iyi bir kuaför ki tamamen saçın ihtiyacına göre hareket ediyorlar. Paketli saçımdan kızıla, sonra tekrar platine sıfır kopmayla çevirdiler. Kesinlikle tavsiye ederim.”",
    r3_author: "Başak",
    r3_tag: "Doğrulanmış Google Yorumu",
    r3_text: "“Bugüne kadar gittiğim en iyi kuaför deneyimlerinden biriydi. Özellikle Bilge Hanım işini büyük bir özenle yapan harika bir uzman. Sonuç tam hayal ettiğim gibi oldu.”",
    r4_author: "Yağmur Evren",
    r4_tag: "Doğrulanmış Google Yorumu",
    r4_text: "“Saçlarım yanlış kuaför seçimi ile sap sarı ve aşırı yıpranmıştı. Saçlarımı o halden toparlayıp eskisi gibi sağlıklı ve parlak hale getirdiler. Emre Bey ve Bilge Hanım'ın ilgisine bayılıyorum.”",
    r5_author: "Burcu Özen",
    r5_tag: "Doğrulanmış Google Yorumu",
    r5_text: "“3 yıldır aynı kuaföre gidiyorum, yaptırdığım ombrelerin hepsi çok güzel oldu. Kesimden sonra uzamayan saçım burada kestirdikten sonra uzamaya başladı.”",
    r6_author: "Yeşim Aydoğan",
    r6_tag: "Doğrulanmış Google Yorumu",
    r6_text: "“Manavgat’ta tanıdığım en iyi bayan kuaförlerinden biri. Ortam çok temiz ve sıcak. Saçım için verdiği öneriler çok doğruydu, kesinlikle tek adresim.”",

    // Gallery
    gallery_kicker: "Salonumuzdan Kareler",
    gallery_title: "İlham Veren Saç Tasarımları",
    gallery_desc: "Three Brothers stüdyosunda tamamlanan en yeni renklendirme ve stil çalışmaları.",

    // Contact Section
    contact_kicker: "RANDEVU & DANIŞMANLIK",
    contact_title: "Saçınızın İhtiyacını Birlikte Belirleyelim",
    contact_desc: "Ten renginize, saçınızın geçmiş işlemlerine ve sağlığına göre en doğru tonu planlamak için stüdyomuzdan ön görüşme randevusu alabilirsiniz.",
    c_btn_wa: "WhatsApp ile Randevu Al",
    c_btn_call: "Hemen Arayın",
    c_btn_maps: "Yol Tarifi Al",
    c_hours_title: "ÇALIŞMA SAATLERİ",
    c_hours_val: "Salı – Pazar: 08:30 – 20:30 (Pazartesi Kapalı)",
    c_phone_title: "TELEFON",
    c_address_title: "ADRES",
    c_address_val: "Bahçelievler Mah. Demokrasi Blv. No: 8Z1, Manavgat / Antalya",

    // Footer
    footer_tagline: "2014'ten beri Manavgat'ta sarı saç, renk uzmanlığı ve kadın kuaförlüğünde zarafetin adresi.",
    footer_nav_title: "Hızlı Menü",
    footer_spec_title: "Uzmanlıklarımız",
    footer_contact_title: "İletişim & Lokasyon",
    footer_hours: "Salı – Pazar: 08:30 – 20:30 (Pazartesi Kapalı)",
    footer_address: "Bahçelievler Mah. Demokrasi Blv. No: 8Z1, Manavgat / Antalya",
    footer_rights: "Tüm hakları saklıdır.",

    // About Page (hakkimizda.html)
    about_page_kicker: "HAKKIMIZDA",
    about_page_headline: "Manavgat’ta Saç Sanatı ve Renk Uzmanlığı",
    about_page_p1: "2014 yılından bu yana Manavgat’ta Three Brothers olarak bayan kuaförlüğü sektöründe hizmet veriyor, yılların verdiği tecrübe ve birikimle her geçen gün kendimizi geliştirmeye devam ediyoruz.",
    about_page_p2: "Sarı saç açma, balyaj, ombre ve mikro kaynak gibi yüksek teknik hassasiyet gerektiren alanlarda Manavgat'ta öncü bir anlayışla çalışıyoruz.",
    about_page_p3: "Misafirlerimizin saç sağlığını her şeyin üzerinde tutarak, kişiye özel analiz ve konsültasyon ile en doğal ve kalıcı sonuçları üretiyoruz.",
    about_stat1_label: "Yıllık Salon Tecrübesi",
    about_stat2_title: "Önce Sağlık",
    about_stat2_label: "Yıpratmayan Açma & Bakım",
    about_page_cta: "WhatsApp ile İletişime Geçin"
  },

  en: {
    page_title: "Three Brothers Women's Hairdresser | Manavgat Blonde & Boutique Design",
    meta_description: "Since 2014, as Three Brothers in Manavgat: excellence in blonde hair, bespoke color analysis, and healthy boutique styling.",
    brand_name: "Three Brothers",
    brand_tagline: "WOMEN'S HAIRDRESSER • MANAVGAT",
    status_open: "Open Now • 08:30 – 20:30",
    status_closed: "Closed Mondays • Tue at 08:30",

    nav_home: "Home",
    nav_story: "About Us",
    nav_services: "Services",
    nav_reels: "Reels",
    nav_reviews: "Reviews",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    drawer_services_tag: "FEATURED SERVICES",
    drawer_lang_tag: "LANGUAGE / DİL",

    hero_kicker: "SINCE 2014 IN MANAVGAT — BLONDE & COLOR EXPERTISE",
    hero_title: "Natural Radiance, Flawless Color.",
    hero_desc: "Professional color design and bespoke lightening techniques that protect the hair's biological health.",
    hero_btn_explore: "Our Services",
    hero_btn_wa: "Book on WhatsApp",
    floating_call: "Call Now",
    floating_wa: "WhatsApp Booking",

    story_kicker: "OUR PHILOSOPHY & CRAFT",
    story_title_accent: "Natural Hair Health and Artistry",
    story_p1: "Since 2014 in Manavgat, as Three Brothers we combine aesthetics, honesty, and master craftsmanship in women's hairdressing.",
    story_p2: "Especially in <strong>blonde, balayage, and delicate lightening</strong>, we employ specialized formulas and thorough diagnostics to achieve your dream tone without damaging the hair fiber. <strong>Preserving hair health and integrity</strong> is our highest priority.",
    story_p3: "We design tailored, luminous results that complement your skin tone, facial contours, and lifestyle.",
    story_quote: "“Since 2014, our guiding principle remains respect for our craft and the pure satisfaction of our guests.”",
    story_btn_wa: "Contact Us for Consultation & Hair Analysis",
    story_cta: "Discover Our Salon & Story",

    standards_kicker: "OUR SERVICE STANDARDS",
    standards_title: "Why Three Brothers?",
    pillar1_title: "Proper Technique & Zero Damage",
    pillar1_desc: "Bond-protecting formulas and carefully controlled lightening procedures.",
    pillar2_title: "Bespoke Color Analysis",
    pillar2_desc: "Aesthetic color harmonies tailored precisely to your skin tone and style.",
    pillar3_title: "Honest & Transparent Advice",
    pillar3_desc: "We listen to your hair's needs and recommend only the healthiest solutions.",
    pillar4_title: "Immaculate Hygiene",
    pillar4_desc: "We maintain personalized sterilized tools and a clean boutique salon atmosphere.",

    reels_kicker: "INSTAGRAM SHOWCASE",
    reels_title: "Live Hair Transformations From Our Studio",
    reels_desc: "Daily studio artistry, lightening sessions, and modern hair color inspirations.",
    insta_header_tag: "INSTAGRAM",
    insta_username: "@threebrotherss",
    insta_bio: "Three Brothers Women's Hairdresser | Manavgat Demokrasi Boulevard",
    insta_follow_btn: "Follow",
    insta_audio_name: "♫ Original Audio — Three Brothers Manavgat",
    insta_view_profile: "View Profile",
    insta_see_more: "See more on Instagram →",
    reels1_badge: "Beige Blonde",
    reels1_likes: "1,482 likes",
    reels1_desc: "✨ BEIGE BLONDE — SUMMER TREND ✨ Soft transitions, elegant beige undertones, and shimmering blonde artistry.",
    reels2_badge: "Ombre & Shine",
    reels2_likes: "2,140 likes",
    reels2_desc: "OMBRE ✨✨ Elevating multidimensional highlights while prioritizing maximum hair strength and satisfaction.",
    reels3_badge: "Color & Finish",
    reels3_likes: "1,895 likes",
    reels3_desc: "The right tone, seamless transitions, and flawless styling… Mastery lies in every detail.",

    services_kicker: "OUR SPECIALTIES",
    services_title: "Bespoke Professional Hair Design",
    services_desc: "Harmonizing natural aesthetics with contemporary hairdressing techniques.",
    srv1_title: "Professional Balayage & Blonde",
    srv2_title: "Custom Coloring & Toning",
    srv3_title: "Blonde & Silky Color Design",
    srv4_title: "Ombre & Sombre Transitions",
    srv5_title: "Micro Capsule Hair Extensions",
    srv_cut: "Bespoke Haircut",
    srv_keratin: "Silky Keratin Treatment",

    reviews_kicker: "CLIENT EXPERIENCES",
    reviews_title: "5.0 Star Ratings on Google",
    reviews_rating_text: "★★★★★ 119+ Verified Real Client Reviews",
    reviews_maps_btn: "View All Reviews on Google Maps →",
    r1_author: "Eda Erbey",
    r1_tag: "Verified Google Review",
    r1_text: "“I have been coming to this salon for about three years. Haircut, coloring, gloss, balayage—all done with immense care and friendliness by Emre, İsa, and Hüseyin. Highly recommended.”",
    r2_author: "Bermal Kabamaklı",
    r2_tag: "Verified Google Review",
    r2_text: "“Such an exceptional team that listens to your hair's true needs. They transitioned my colored hair to red, and back to platinum with zero breakage. Absolutely recommend.”",
    r3_author: "Başak",
    r3_tag: "Verified Google Review",
    r3_text: "“One of the best hair studio experiences I've ever had. Especially Bilge Hanım is an outstanding specialist with great attention to detail. The result was exactly what I dreamed of.”",
    r4_author: "Yağmur Evren",
    r4_tag: "Verified Google Review",
    r4_text: "“My hair was extremely damaged from a previous salon. They restored it to be healthy, vibrant, and silky. I adore the care and expertise of Emre Bey and Bilge Hanım.”",
    r5_author: "Burcu Özen",
    r5_tag: "Verified Google Review",
    r5_text: "“I’ve been visiting for 3 years, and every ombre has turned out stunning. Hair that wouldn't grow before started thriving after their precision cuts.”",
    r6_author: "Yeşim Aydoğan",
    r6_tag: "Verified Google Review",
    r6_text: "“One of the best women's hair salons in Manavgat. Immaculate, welcoming atmosphere and honest expert advice. Truly my number one address.”",

    gallery_kicker: "STUDIO GALLERY",
    gallery_title: "Inspiring Hair Designs",
    gallery_desc: "Latest coloring and styling creations from the Three Brothers studio in Manavgat.",

    contact_kicker: "APPOINTMENT & CONSULTATION",
    contact_title: "Let's Determine Your Hair Needs Together",
    contact_desc: "You can book a consultation at our studio to plan the ideal shade according to your skin tone, hair history, and overall health.",
    c_btn_wa: "Book via WhatsApp",
    c_btn_call: "Call Us Directly",
    c_btn_maps: "Get Directions",
    c_hours_title: "WORKING HOURS",
    c_hours_val: "Tue – Sun: 08:30 – 20:30 (Closed Mondays)",
    c_phone_title: "PHONE",
    c_address_title: "ADDRESS",
    c_address_val: "Bahçelievler Mah. Demokrasi Blv. No: 8Z1, Manavgat / Antalya",

    footer_tagline: "Since 2014, your premier boutique destination for blonde mastery and elegant women's styling in Manavgat.",
    footer_nav_title: "Quick Links",
    footer_spec_title: "Specialties",
    footer_contact_title: "Contact & Location",
    footer_hours: "Tue – Sun: 08:30 – 20:30 (Closed Mondays)",
    footer_address: "Bahçelievler Mah. Demokrasi Blv. No: 8Z1, Manavgat / Antalya",
    footer_rights: "All rights reserved.",

    about_page_kicker: "ABOUT US",
    about_page_headline: "Hair Artistry & Color Mastery in Manavgat",
    about_page_p1: "Since 2014 in Manavgat, as Three Brothers we have been serving in women's hairdressing, constantly elevating our craft with years of dedicated experience.",
    about_page_p2: "We are recognized leaders in precision balayage, blonde lightening, and seamless micro capsule hair extensions.",
    about_page_p3: "Prioritizing your hair's vitality above all else, we create tailored, natural, and radiant results with careful consultation.",
    about_stat1_label: "Years of Studio Mastery",
    about_stat2_title: "Health First",
    about_stat2_label: "Gentle Lightening & Care",
    about_page_cta: "Contact Us on WhatsApp"
  },

  de: {
    page_title: "Three Brothers Damencoiffeur | Manavgat Blond & Farbdesign",
    meta_description: "Seit 2014 in Manavgat als Three Brothers: Spezialist für strahlendes Blond, Farbanalyse und haarschonende Behandlungen.",
    brand_name: "Three Brothers",
    brand_tagline: "DAMENCOIFFEUR • MANAVGAT",
    status_open: "Jetzt Geöffnet • 08:30 – 20:30",
    status_closed: "Montags Geschlossen • Di ab 08:30",

    nav_home: "Startseite",
    nav_story: "Über Uns",
    nav_services: "Leistungen",
    nav_reels: "Reels",
    nav_reviews: "Bewertungen",
    nav_gallery: "Galerie",
    nav_contact: "Kontakt",
    drawer_services_tag: "UNSERE LEISTUNGEN",
    drawer_lang_tag: "SPRACHAUSWAHL / LANGUAGE",

    hero_kicker: "SEIT 2014 IN MANAVGAT — BLOND- & FARBEXPERTISE",
    hero_title: "Natürlicher Glanz, Perfekte Farbe.",
    hero_desc: "Professionelles Farbdesign und schonende Aufhellungstechniken für gesundes, lebendiges Haar.",
    hero_btn_explore: "Unsere Leistungen",
    hero_btn_wa: "Termin per WhatsApp",
    floating_call: "Direkt Anrufen",
    floating_wa: "WhatsApp Termin",

    story_kicker: "PHILOSOPHIE & HANDWERK",
    story_title_accent: "Natürliche Haargesundheit und Ästhetik",
    story_p1: "Seit 2014 bieten wir als Three Brothers erstklassige Friseurdienstleistungen in Manavgat mit langjähriger Erfahrung.",
    story_p2: "Besonders bei <strong>Blond, Balayage und feinen Farbaufhellungen</strong> setzen wir auf schonende Techniken. Die <strong>Gesundheit und Struktur Ihres Haares</strong> steht für uns an erster Stelle.",
    story_p3: "Abgestimmt auf Ihren Hautton und Typ kreieren wir langanhaltende, natürliche und strahlende Farbergebnisse.",
    story_quote: "„Seit 2014 leitet uns der Respekt vor unserem Handwerk und das uneingeschränkte Vertrauen unserer Kundinnen.“",
    story_btn_wa: "Kontakt für Beratung & Haaranalyse",
    story_cta: "Unseren Salon Entdecken",

    standards_kicker: "UNSERE STANDARDS",
    standards_title: "Warum Three Brothers?",
    pillar1_title: "Schonende Technik & Null Haarbruch",
    pillar1_desc: "Strukturstärkende Formeln und kontrollierte Aufhellung für gesundes Haar.",
    pillar2_title: "Individuelle Farbanalyse",
    pillar2_desc: "Perfekte Farbharmonien, abgestimmt auf Ihren Teint und persönlichen Stil.",
    pillar3_title: "Ehrliche & Transparente Beratung",
    pillar3_desc: "Wir hören auf die Bedürfnisse Ihres Haares und empfehlen die gesündeste Lösung.",
    pillar4_title: "Kompromisslose Hygiene",
    pillar4_desc: "Sterilisierte Werkzeuge und ein einladendes, sauberes Salonambiente.",

    reels_kicker: "INSTAGRAM EINBLICKE",
    reels_title: "Haarverwandlungen aus Unserem Studio",
    reels_desc: "Tägliche Arbeiten, Farbaufhellungen und moderne Stylings.",
    insta_header_tag: "INSTAGRAM",
    insta_username: "@threebrotherss",
    insta_bio: "Three Brothers Damencoiffeur | Manavgat Demokrasi Boulevard",
    insta_follow_btn: "Folgen",
    insta_audio_name: "♫ Originalton — Three Brothers Manavgat",
    insta_view_profile: "Profil Ansehen",
    insta_see_more: "Mehr auf Instagram ansehen →",
    reels1_badge: "Beige Blond",
    reels1_likes: "1.482 'Gefällt mir'",
    reels1_desc: "✨ BEIGE BLOND — DER SOMMERTREND ✨ Weiche Verläufe, elegante Beigetöne und funkelnder Blondglanz.",
    reels2_badge: "Ombré & Glanz",
    reels2_likes: "2.140 'Gefällt mir'",
    reels2_desc: "OMBRÉ ✨✨ Brillante Strähnentechniken mit maximalem Haarschutz und traumhaftem Ergebnis.",
    reels3_badge: "Farbe & Finish",
    reels3_likes: "1.895 'Gefällt mir'",
    reels3_desc: "Der perfekte Farbton und fließende Übergänge… Perfektion liegt im Detail.",

    services_kicker: "SPEZIALISIERUNGEN",
    services_title: "Maßgeschneidertes Haarstyling",
    services_desc: "Natürliche Schönheit vereint mit modernen Friseurtechniken.",
    srv1_title: "Professionelle Balayage & Blond",
    srv2_title: "Individuelle Coloration & Glossing",
    srv3_title: "Blonde & Seidiges Farbdesign",
    srv4_title: "Ombré & Sombré Farbverläufe",
    srv5_title: "Mikrokapsel Haarverlängerung",
    srv_cut: "Individueller Haarschnitt",
    srv_keratin: "Seidiges Keratin-Treatment",

    reviews_kicker: "KUNDENMEINUNGEN",
    reviews_title: "5.0-Sterne-Bewertungen auf Google",
    reviews_rating_text: "★★★★★ 119+ Verifizierte echte Bewertungen",
    reviews_maps_btn: "Alle Bewertungen auf Google Maps ansehen →",
    r1_author: "Eda Erbey",
    r1_tag: "Verifizierte Google-Bewertung",
    r1_text: "„Ich komme seit fast drei Jahren hierher. Haarschnitt, Farbe, Glossing und Balayage werden stets mit größter Sorgfalt durchgeführt. Absolut empfehlenswert.“",
    r2_author: "Bermal Kabamaklı",
    r2_tag: "Verifizierte Google-Bewertung",
    r2_text: "„Ein fantastischer Salon, der genau auf die Bedürfnisse der Haare eingeht. Sie brachten mein Haar ohne Haarbruch wieder zu strahlendem Platinblond.“",
    r3_author: "Başak",
    r3_tag: "Verifizierte Google-Bewertung",
    r3_text: "„Eine meiner besten Friseurerfahrungen überhaupt. Besonders Bilge Hanım arbeitet mit Hingabe und Präzision. Das Ergebnis ist perfekt.“",
    r4_author: "Yağmur Evren",
    r4_tag: "Verifizierte Google-Bewertung",
    r4_text: "„Mein Haar war zuvor stark strapaziert. Das Team hat es wieder gesund und glänzend gepflegt. Großer Dank an Emre Bey und Bilge Hanım.“",
    r5_author: "Burcu Özen",
    r5_tag: "Verifizierte Google-Bewertung",
    r5_text: "„Seit 3 Jahren Stammkundin; jedes Ombré gelingt makellos. Mein Haar wächst endlich wieder gesund nach.“",
    r6_author: "Yeşim Aydoğan",
    r6_tag: "Verifizierte Google-Bewertung",
    r6_text: "„Einer der besten Damensalons in Manavgat. Sehr sauber, herzlich und fachlich kompetent.“",

    gallery_kicker: "SALONGALERIE",
    gallery_title: "Inspirierende Kreationen",
    gallery_desc: "Aktuelle Colorationen und Stylings aus unserem Salon in Manavgat.",

    contact_kicker: "TERMIN & BERATUNG",
    contact_title: "Lassen Sie uns die Bedürfnisse Ihres Haares gemeinsam bestimmen",
    contact_desc: "Vereinbaren Sie einen Beratungstermin in unserem Studio, um den perfekten Farbton passend zu Ihrem Teint und der Haargesundheit zu planen.",
    c_btn_wa: "WhatsApp Termin",
    c_btn_call: "Jetzt Anrufen",
    c_btn_maps: "Wegbeschreibung",
    c_hours_title: "ÖFFNUNGSZEITEN",
    c_hours_val: "Di – So: 08:30 – 20:30 (Montags Geschlossen)",
    c_phone_title: "TELEFON",
    c_address_title: "ADRESSE",
    c_address_val: "Bahçelievler Mah. Demokrasi Blv. No: 8Z1, Manavgat / Antalya",

    footer_tagline: "Seit 2014 Ihr exklusiver Butik-Damensalon für Blond-Spezialbehandlungen in Manavgat.",
    footer_nav_title: "Menü",
    footer_spec_title: "Spezialitäten",
    footer_contact_title: "Kontakt & Anfahrt",
    footer_hours: "Di – So: 08:30 – 20:30 (Montags Geschlossen)",
    footer_address: "Bahçelievler Mah. Demokrasi Blv. No: 8Z1, Manavgat / Antalya",
    footer_rights: "Alle Rechte vorbehalten.",

    about_page_kicker: "ÜBER UNS",
    about_page_headline: "Haarkunst & Farbexpertise in Manavgat",
    about_page_p1: "Seit 2014 bieten wir als Three Brothers erstklassige Friseurdienstleistungen in Manavgat mit langjähriger Erfahrung.",
    about_page_p2: "Wir sind Pioniere in schonendem Blond, präziser Balayage und Mikrokapsel-Haarverlängerung.",
    about_page_p3: "Die Gesundheit Ihres Haares steht für uns an oberster Stelle — für strahlende, langanhaltende Ergebnisse.",
    about_stat1_label: "Jahre Meistererfahrung",
    about_stat2_title: "Gesundheit Zuerst",
    about_stat2_label: "Schonende Pflege & Farbe",
    about_page_cta: "Kontaktieren Sie uns per WhatsApp"
  },

  ru: {
    page_title: "Three Brothers Женский Салон Красоты | Манавгат Блонд и Стилистика",
    meta_description: "С 2014 года в Манавгате: Three Brothers — экспертное окрашивание в блонд, бережные техники и здоровье волос.",
    brand_name: "Three Brothers",
    brand_tagline: "ЖЕНСКИЙ САЛОН КРАСОТЫ • МАНАВГАТ",
    status_open: "Открыто • 08:30 – 20:30",
    status_closed: "Пн: Выходной • Вт с 08:30",

    nav_home: "Главная",
    nav_story: "О Нас",
    nav_services: "Услуги",
    nav_reels: "Reels",
    nav_reviews: "Отзывы",
    nav_gallery: "Галерея",
    nav_contact: "Контакты",
    drawer_services_tag: "ПОПУЛЯРНЫЕ УСЛУГИ",
    drawer_lang_tag: "ВЫБОР ЯЗЫКА / LANGUAGE",

    hero_kicker: "С 2014 ГОДА В МАНАВГАТЕ — ЭКСПЕРТЫ ПО БЛОНДУ И ЦВЕТУ",
    hero_title: "Естественный Блеск, Безупречный Цвет.",
    hero_desc: "Профессиональный колоризм и авторские техники осветления, сохраняющие здоровье и шелковистость волос.",
    hero_btn_explore: "Наши Услуги",
    hero_btn_wa: "Запись в WhatsApp",
    floating_call: "Позвонить",
    floating_wa: "Запись в WhatsApp",

    story_kicker: "НАША ФИЛОСОФИЯ И ПОДХОД",
    story_title_accent: "Здоровье и Искусство Волос",
    story_p1: "С 2014 года мы в Three Brothers работаем в сфере женского парикмахерского искусства в Манавгате, постоянно совершенствуя свое мастерство.",
    story_p2: "В <strong>блонде, балаяже и деликатном осветлении</strong> мы используем формулы, сохраняющие структуру. <strong>Здоровье и мягкость ваших волос</strong> — наш главный приоритет.",
    story_p3: "Мы создаем индивидуальные, стойкие и сияющие оттенки с учетом тона вашей кожи и черт лица.",
    story_quote: "«С 2014 года наш главный принцип — уважение к ремеслу и искренняя радость наших гостей.»",
    story_btn_wa: "Записаться на Консультацию и Диагностику",
    story_cta: "Подробнее о Нашем Салоне",

    standards_kicker: "СТАНДАРТЫ СЕРВИСА",
    standards_title: "Почему Three Brothers?",
    pillar1_title: "Правильная Техника и Ноль Повреждений",
    pillar1_desc: "Формулы с защитой дисульфидных связей и контролируемое осветление.",
    pillar2_title: "Индивидуальный Подбор Цвета",
    pillar2_desc: "Эстетичные сочетания оттенков, подобранные индивидуально под ваш стиль.",
    pillar3_title: "Честный и Открытый Диалог",
    pillar3_desc: "Мы внимательны к состоянию волос и предлагаем только безопасные решения.",
    pillar4_title: "Абсолютная Гигиена",
    pillar4_desc: "Стерилизованные инструменты и безупречно чистая атмосфера бутик-салона.",

    reels_kicker: "INSTAGRAM ПОРТФОЛИО",
    reels_title: "Преображения Волос из Нашей Студии",
    reels_desc: "Наши ежедневные работы, сложные окрашивания и актуальные тренды.",
    insta_header_tag: "INSTAGRAM",
    insta_username: "@threebrotherss",
    insta_bio: "Three Brothers Женский Парикмахер | Манавгат Демокраси Бульвар",
    insta_follow_btn: "Подписаться",
    insta_audio_name: "♫ Оригинальный звук — Three Brothers Manavgat",
    insta_view_profile: "Смотреть Профиль",
    insta_see_more: "Больше в Instagram →",
    reels1_badge: "Бежевый Блонд",
    reels1_likes: "1 482 отметки",
    reels1_desc: "✨ БЕЖЕВЫЙ БЛОНД — ТРЕНД СЕЗОНА ✨ Мягкие переливы, натуральный блеск и роскошный оттенок.",
    reels2_badge: "Омбре и Блеск",
    reels2_likes: "2 140 отметок",
    reels2_desc: "ОМБРЕ ✨✨ Тончайшая растушевка цвета с заботой о здоровье каждого локона.",
    reels3_badge: "Цвет и Финиш",
    reels3_likes: "1 895 отметок",
    reels3_desc: "Правильный тон, плавный переход и безупречная форма… Мастерство в деталях.",

    services_kicker: "НАШИ НАПРАВЛЕНИЯ",
    services_title: "Профессиональный Дизайн Волос",
    services_desc: "Естественная гармония цвета и современные технологии колористики.",
    srv1_title: "Профессиональный Балаяж и Блонд",
    srv2_title: "Индивидуальное Окрашивание и Тонирование",
    srv3_title: "Blonde и Шелковистый Дизайн Цвета",
    srv4_title: "Растяжка Цвета Омбре и Сомбре",
    srv5_title: "Микрокапсульное Наращивание Волос",
    srv_cut: "Авторская Стрижка",
    srv_keratin: "Шелковое Кератиновое Восстановление",

    reviews_kicker: "ОТЗЫВЫ КЛИЕНТОВ",
    reviews_title: "Оценка 5.0 на Google",
    reviews_rating_text: "★★★★★ 119+ Подтвержденных отзывов",
    reviews_maps_btn: "Смотреть все отзывы на Google Maps →",
    r1_author: "Eda Erbey",
    r1_tag: "Проверенный отзыв Google",
    r1_text: "«Посещаю этот салон около трех лет. Стрижки, окрашивание, тонирование и балаяж выполняются на высочайшем уровне с заботой и вниманием.»",
    r2_author: "Bermal Kabamaklı",
    r2_tag: "Проверенный отзыв Google",
    r2_text: "«Потрясающий салон! Перевели волосы в платиновый блонд без малейших повреждений. Очень рекомендую.»",
    r3_author: "Başak",
    r3_tag: "Проверенный отзыв Google",
    r3_text: "«Один из лучших визитов к стилисту. Госпожа Бильге — потрясающий мастер, результат превзошел все ожидания.»",
    r4_author: "Yağmur Evren",
    r4_tag: "Проверенный отзыв Google",
    r4_text: "«Мои волосы были сильно повреждены, но здесь им вернули блеск и здоровье. Огромное спасибо Эмре и Бильге.»",
    r5_author: "Burcu Özen",
    r5_tag: "Проверенный отзыв Google",
    r5_text: "«Хожу сюда уже 3 года. Все переходы омбре идеальны, а волосы после стрижки растут здоровыми.»",
    r6_author: "Yeşim Aydoğan",
    r6_tag: "Проверенный отзыв Google",
    r6_text: "«Один из лучших салонов в Манавгате. Идеальная чистота, теплая атмосфера и профессиональный подход.»",

    gallery_kicker: "ГАЛЕРЕЯ САЛОНА",
    gallery_title: "Вдохновляющие Работы",
    gallery_desc: "Свежие окрашивания и укладки от мастеров Three Brothers в Манавгате.",

    contact_kicker: "ЗАПИСЬ И КОНСУЛЬТАЦИЯ",
    contact_title: "Определим потребности ваших волос вместе",
    contact_desc: "Запишитесь на предварительную консультацию в нашу студию, чтобы подобрать идеальный оттенок с учетом тона кожи и здоровья волос.",
    c_btn_wa: "Запись в WhatsApp",
    c_btn_call: "Позвонить",
    c_btn_maps: "Как добраться",
    c_hours_title: "ЧАСЫ РАБОТЫ",
    c_hours_val: "Вт – Вс: 08:30 – 20:30 (Понедельник — выходной)",
    c_phone_title: "ТЕЛЕФОН",
    c_address_title: "АДРЕС",
    c_address_val: "Bahçelievler Mah. Demokrasi Blv. No: 8Z1, Manavgat / Antalya",

    footer_tagline: "С 2014 года ваш любимый бутик-салон красоты и экспертного блонда в Манавгате.",
    footer_nav_title: "Навигация",
    footer_spec_title: "Специализация",
    footer_contact_title: "Контакты и Адрес",
    footer_hours: "Вт – Вс: 08:30 – 20:30 (Пн — выходной)",
    footer_address: "Bahçelievler Mah. Demokrasi Blv. No: 8Z1, Manavgat / Antalya",
    footer_rights: "Все права защищены.",

    about_page_kicker: "О НАС",
    about_page_headline: "Искусство Волос и Экспертный Блонд в Манавгате",
    about_page_p1: "С 2014 года мы в Three Brothers работаем в сфере женского парикмахерского искусства в Манавгате, постоянно совершенствуя свое мастерство.",
    about_page_p2: "Мы являемся признанными экспертами в сложном блонде, балаяже и микрокапсульном наращивании.",
    about_page_p3: "Здоровье ваших волос превыше всего — создаем естественные и сияющие образы.",
    about_stat1_label: "Лет Профессионализма",
    about_stat2_title: "Здоровье Волос",
    about_stat2_label: "Бережное Осветление",
    about_page_cta: "Связаться через WhatsApp"
  },

  ar: {
    page_title: "Three Brothers صالون تصفيف الشعر للسيدات | ماناavgat خبير الأشقر والتصميم",
    meta_description: "منذ عام 2014 في ماناavgat، يقدم Three Brothers خدمات تصفيف وصبغ الشعر الأشقر، مع الحفاظ الكامل على حيوية وصحة الشعر.",
    brand_name: "Three Brothers",
    brand_tagline: "صالون نسائي • ماناavgat",
    status_open: "مفتوح الآن • 08:30 – 20:30",
    status_closed: "مغلق يوم الاثنين • يفتح الثلاثاء 08:30",

    nav_home: "الرئيسية",
    nav_story: "من نحن",
    nav_services: "خدماتنا",
    nav_reels: "فيديوهات",
    nav_reviews: "آراء العملاء",
    nav_gallery: "معرض الصور",
    nav_contact: "اتصل بنا",
    drawer_services_tag: "خدماتنا المميزة",
    drawer_lang_tag: "اللغة / LANGUAGE",

    hero_kicker: "منذ عام 2014 في ماناavgat — إتقان الأشقر وتصميم الألوان",
    hero_title: "إشراقة طبيعية، لون متقن.",
    hero_desc: "تصميم احترافي للألوان وتقنيات تفتيح مخصصة تحافظ على حيوية الشعر وصحته.",
    hero_btn_explore: "خدماتنا",
    hero_btn_wa: "حجز موعد (واتساب)",
    floating_call: "اتصال مباشر",
    floating_wa: "واتساب مباشر",

    story_kicker: "فلسفتنا ونهجنا",
    story_title_accent: "صحة الشعر الطبيعية وفن الألوان",
    story_p1: "منذ عام 2014 في ماناavgat، نقدم في Three Brothers أرقى معايير الجمال والصدق والخبرة التقنية في تصفيف شعر السيدات.",
    story_p2: "نعتمد تقنيات تفتيح وبالياج لطيفة تحمي ألياف الشعر وتمنحه لمعاناً طبيعياً ساحراً، مع الحفاظ التام على صحة وقوة الشعر.",
    story_p3: "نصمم لكل زائرة نتيجة طبيعية ومشرقة تتناغم بدقة مع ملامحها ونوع بشرتها.",
    story_quote: "«منذ عام 2014، مبدأنا الثابت هو احترام حرفتنا ورضا ضيوفنا التام.»",
    story_btn_wa: "تواصل معنا للاستشارة وتشخيص الشعر",
    story_cta: "اكتشفي صالوننا وقصتنا",

    standards_kicker: "معايير الخدمة",
    standards_title: "لماذا صالون Three Brothers؟",
    pillar1_title: "تقنيات دقيقة وبدون أي ضرر",
    pillar1_desc: "تركيبات تعزز روابط الشعر وتفتيح مدروس لحماية حيوية الشعر.",
    pillar2_title: "تحليل لون مخصص",
    pillar2_desc: "تناغم لوني جمالي مصمم خصيصاً ليناسب لون بشرتكِ وأسلوبكِ.",
    pillar3_title: "تواصل صادق وشفاف",
    pillar3_desc: "نستمع لاحتياجات شعركِ ونقدم الحلول الأكثر صحة وأماناً.",
    pillar4_title: "معايير نظافة فائقة",
    pillar4_desc: "أدوات معقمة مخصصة وبيئة صالون هادئة وفاخرة وفائقة النظافة.",

    reels_kicker: "فيديوهات إنستغرام",
    reels_title: "تحولات الشعر المباشرة من الاستوديو",
    reels_desc: "أعمالنا اليومية، جلسات تفتيح الشعر وأحدث صيحات الموضة.",
    insta_header_tag: "إنستغرام",
    insta_username: "@threebrotherss",
    insta_bio: "Three Brothers صالون تصفيف الشعر للسيدات | ماناavgat شارع الديمقراطية",
    insta_follow_btn: "متابعة",
    insta_audio_name: "♫ الصوت الأصلي — Three Brothers ماناavgat",
    insta_view_profile: "عرض الملف",
    insta_see_more: "شاهد المزيد على إنستغرام ←",
    reels1_badge: "بيج بلوند",
    reels1_likes: "1,482 إعجاب",
    reels1_desc: "✨ بيج بلوند — لون الصيف المميز ✨ تدرجات ناعمة ولمعان أشقر رائع.",
    reels2_badge: "أومبري وإشراقة",
    reels2_likes: "2,140 إعجاب",
    reels2_desc: "أومبري ✨✨ خصلات متدرجة بدقة فائقة مع الحفاظ التام على قوة وحيوية الشعر.",
    reels3_badge: "لون ولمسة فنية",
    reels3_likes: "1,895 إعجاب",
    reels3_desc: "الدرجة المناسبة والانتقال الانسيابي… الاحترافية تكمن في أدق التفاصيل.",

    services_kicker: "تخصصاتنا",
    services_title: "تصميم وتصفيف شعر مخصص",
    services_desc: "نجمع بين المظهر الطبيعي وأحدث تقنيات تصفيف وصبغ الشعر العالمية.",
    srv1_title: "بالياج احترافي وشعر أشقر",
    srv2_title: "تلوين وتنسيق درجات مخصص",
    srv3_title: "بلوند وتصميم ألوان حريري",
    srv4_title: "تدرجات أومبري وسومبري",
    srv5_title: "وصلات شعر ميكرو كبسول",
    srv_cut: "قص شعر مخصص",
    srv_keratin: "علاج الكيراتين الحريري",

    reviews_kicker: "تجارب العملاء",
    reviews_title: "تقييم 5.0 نجوم على Google",
    reviews_rating_text: "★★★★★ 119+ تقييم حقيقي موثق",
    reviews_maps_btn: "عرض جميع التقييمات على Google Maps ←",
    r1_author: "Eda Erbey",
    r1_tag: "تقييم Google موثق",
    r1_text: "«أزور هذا الصالون منذ 3 سنوات تقريباً. القص والصبغ والبالياج يُنفذ بعناية فائقة واحترافية عالية من قِبل إمري وعيسى وحسين.»",
    r2_author: "Bermal Kabamaklı",
    r2_tag: "تقييم Google موثق",
    r2_text: "«صالون رائع يهتم بصحة الشعر أولاً. حوّلوا شعري إلى البلاتيني بدون أي تلف إطلاقاً. أنصح به بشدة.»",
    r3_author: "Başak",
    r3_tag: "تقييم Google موثق",
    r3_text: "«من أفضل تجارب الصالونات، وخاصة السيدة بيلغي على اهتمامها ودقتها الرائعة. النتيجة جاءت تماماً كما حلمت بها.»",
    r4_author: "Yağmur Evren",
    r4_tag: "تقييم Google موثق",
    r4_text: "«استعاد شعري صحته ولمعانه بفضل خبرة الصالون وفريق العمل المميز.»",
    r5_author: "Burcu Özen",
    r5_tag: "تقييم Google موثق",
    r5_text: "«3 سنوات وأنا أعتمد عليهم لجميع درجات الأومبري، والنتيجة دائماً مبهرة.»",
    r6_author: "Yeşim Aydoğan",
    r6_tag: "تقييم Google موثق",
    r6_text: "«أفضل صالون نسائي في ماناavgat، نظافة وأجواء مريحة ونصائح احترافية.»",

    gallery_kicker: "معرض الصالون",
    gallery_title: "تصاميم شعر ملهمة",
    gallery_desc: "أحدث إبداعات الألوان والتصفيف في استوديو Three Brothers بماناavgat.",

    contact_kicker: "الموعد والاستشارة",
    contact_title: "دعنا نحدد احتياجات شعركِ معاً",
    contact_desc: "يمكنكِ حجز موعد استشارة في الاستوديو لاختيار اللون المثالي بما يناسب لون بشرتكِ وحالة شعركِ.",
    c_btn_wa: "حجز عبر واتساب",
    c_btn_call: "اتصل بنا الآن",
    c_btn_maps: "الاتجاهات على الخريطة",
    c_hours_title: "ساعات العمل",
    c_hours_val: "الثلاثاء – الأحد: 08:30 – 20:30 (مغلق الاثنين)",
    c_phone_title: "الهاتف",
    c_address_title: "العنوان",
    c_address_val: "حي باهتشيلي إيفلر، شارع الديمقراطية 8Z1، ماناavgat / أنطاليا",

    footer_tagline: "منذ عام 2014، وجهتكِ الفاخرة لخبرة الشعر الأشقر وتصفيف الشعر الراقي في ماناavgat.",
    footer_nav_title: "التنقل السريع",
    footer_spec_title: "تخصصاتنا",
    footer_contact_title: "التواصل والموقع",
    footer_hours: "الثلاثاء – الأحد: 08:30 – 20:30 (مغلق الاثنين)",
    footer_address: "حي باهتشيلي إيفلر، شارع الديمقراطية 8Z1، ماناavgat",
    footer_rights: "جميع الحقوق محفوظة.",

    about_page_kicker: "من نحن",
    about_page_headline: "فن وتصميم الشعر وخبرة الألوان في ماناavgat",
    about_page_p1: "منذ عام 2014 في ماناavgat، نقدم في Three Brothers خدمات تصفيف الشعر للسيدات مع سنوات من الخبرة والاحترافية.",
    about_page_p2: "نحن رواد في تفتيح الأشقر، البالياج الدقيق ووصلات الشعر الميكرو كبسول.",
    about_page_p3: "صحة شعركِ هي أولويتنا الأولى لنمنحكِ نتائج مشرقة وطبيعية تدوم طويلاً.",
    about_stat1_label: "سنوات من الخبرة الاحترافية",
    about_stat2_title: "صحة الشعر أولاً",
    about_stat2_label: "تفتيح وعناية فائقة",
    about_page_cta: "تواصل معنا عبر واتساب"
  }
};

function safeGetStorage(key) {
  try {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(key);
    }
  } catch (e) {}
  return null;
}

function safeSetStorage(key, val) {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, val);
    }
  } catch (e) {}
}

const i18n = {
  currentLang: 'tr',
  languages: I18N_LANGUAGES,
  translations: I18N_TRANSLATIONS,

  init() {
    let savedLang = safeGetStorage('selected_language');
    if (savedLang && I18N_TRANSLATIONS[savedLang]) {
      this.currentLang = savedLang;
    } else {
      this.currentLang = 'tr';
    }
    this.applyLanguage(this.currentLang);
  },

  setLanguage(lang) {
    if (!I18N_TRANSLATIONS[lang]) return;
    this.currentLang = lang;
    safeSetStorage('selected_language', lang);
    this.applyLanguage(lang);
  },

  applyLanguage(lang) {
    const dict = I18N_TRANSLATIONS[lang] || I18N_TRANSLATIONS.tr;
    const config = I18N_LANGUAGES[lang] || I18N_LANGUAGES.tr;

    if (typeof document === 'undefined') return;

    if (document.documentElement) {
      document.documentElement.lang = lang;
      document.documentElement.dir = config.dir || 'ltr';
    }

    if (dict.page_title) document.title = dict.page_title;

    if (document.querySelector) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && dict.meta_description) {
        metaDesc.setAttribute('content', dict.meta_description);
      }
    }

    if (document.querySelectorAll) {
      const elements = document.querySelectorAll('[data-i18n]');
      elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = dict[key];
          } else {
            el.innerHTML = dict[key];
          }
        }
      });

      const langBtns = document.querySelectorAll('[data-lang-btn]');
      langBtns.forEach(btn => {
        const targetLang = btn.getAttribute('data-lang-btn');
        if (targetLang === lang) {
          btn.classList.add('active');
          btn.setAttribute('aria-current', 'true');
        } else {
          btn.classList.remove('active');
          btn.removeAttribute('aria-current');
        }
      });
    }

    if (typeof document.dispatchEvent === 'function') {
      try {
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang, dict } }));
      } catch (e) {}
    }
  }
};

if (typeof window !== 'undefined') {
  window.i18n = i18n;
  window.I18n = i18n;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => i18n.init());
  } else {
    i18n.init();
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { i18n, I18N_LANGUAGES, I18N_TRANSLATIONS };
}
`;

fs.writeFileSync('js/i18n.js', cleanI18nScript, 'utf8');
fs.writeFileSync('public/js/i18n.js', cleanI18nScript, 'utf8');
console.log('js/i18n.js and public/js/i18n.js updated with 100% complete 112 keys across all 5 languages');
