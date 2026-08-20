/**
 * ThreeBrothers Bayan Kuaförü - Multi-Language i18n System
 * Supported Languages: TR (Turkish), EN (English), DE (German), RU (Russian), AR (Arabic)
 */

const I18N_LANGUAGES = {
  tr: { name: 'Türkçe', flag: '🇹🇷', code: 'TR', dir: 'ltr' },
  en: { name: 'English', flag: '🇬🇧', code: 'EN', dir: 'ltr' },
  de: { name: 'Deutsch', flag: '🇩🇪', code: 'DE', dir: 'ltr' },
  ru: { name: 'Русский', flag: '🇷🇺', code: 'RU', dir: 'ltr' },
  ar: { name: 'العربية', flag: '🇸🇦', code: 'AR', dir: 'rtl' }
};

const I18N_TRANSLATIONS = {
  tr: {
    // Meta / SEO
    page_title: "ThreeBrothers Bayan Kuaförü | Manavgat Seçkin Saç Tasarım & Renklendirme Stüdyosu",
    meta_description: "Manavgat Bahçelievler Demokrasi Bulvarı'nda 5.0 Google puanlı lider bayan kuaförü ThreeBrothers. Ombre, balyaj, keratin botoks ve gelin saçı uzmanlığı.",
    og_title: "ThreeBrothers Bayan Kuaförü | Manavgat",
    og_description: "5.0 ★★★★★ 119 Doğrulanmış Google Yorumu. Manavgat'ta lüks saç tasarımı ve renklendirme stüdyosu.",

    // Header
    brand_sub: "Bayan Kuaförü • Manavgat",
    nav_instagram: "Instagram",
    nav_call: "Ara",
    nav_appointment: "Randevu Al",

    // Hero
    hero_brand_sub: "Bayan Kuaförü • Manavgat",
    hero_title: `Manavgat'ın Seçkin <br class="hidden sm:inline" /><span class="gold-gradient-text">Saç Tasarım & Renklendirme</span> Stüdyosu`,
    hero_desc: "Kişiye özel tonlama formülleri, yıpranma karşıtı profesyonel açma teknikleri ve kusursuz gelin tasarımlarıyla saçınızın eşsiz ışıltısını ortaya çıkarıyoruz.",
    hero_cta_wa: "WhatsApp'tan Hızlı Randevu",
    hero_cta_ig: "Instagram'da İncele",
    hero_scroll: "Keşfet",

    // Before/After Slider
    ba_badge: "Dönüşüm Vitrini",
    ba_title: "Öncesi & Sonrası Dönüşümü",
    ba_desc: "Aşağıdaki altın ayracı sağa-sola sürükleyerek renklendirme ve keratin botoks sonucunu canlı kıyaslayın.",
    ba_before: "İŞLEM ÖNCESİ",
    ba_after: "İŞLEM SONRASI",
    ba_hint: "Ayracı kaydırarak renk açma ve bakım sonucunu karşılaştırın",

    // Services
    services_badge: "İmza Hizmetlerimiz",
    services_title: "Özel Saç Tasarım Koleksiyonu",
    services_desc: "Saç bütünlüğünü koruyan açıcılar, kişiye özel tonlama formülleri ve kalıcı onarım terapileri.",
    services_cta: "Fiyat & Randevu Sor",
    
    s1_tag: "Sarı / Ombre / Balyaj",
    s1_title: "Sarı / Ombre & Balyaj",
    s1_desc: "Platin, küllü sarı, bebek sarısı ve sıcak balyaj geçişleriyle saç yıpranmadan ulaşılan kusursuz ışıltılı tonlar.",

    s2_tag: "Gelin Başı / Topuz",
    s2_title: "Gelin Başı & Özel Gün Topuzu",
    s2_desc: "Düğün ve nişan günleriniz için aksesuarlı, prova destekli ve gece boyunca bozulmayan heykelsi zarif topuz tasarımı.",

    s3_tag: "Düz & Parlak Saç",
    s3_title: "Keratin Botox & İpek Bakım",
    s3_desc: "Yıpranmış saç liflerini onaran, elektriklenme karşıtı, aylarca kalıcı ayna parlaklığı ve pürüzsüz düzlük sağlayan terapi.",

    s4_tag: "Katlı Kesim & Hacimli Fön",
    s4_title: "Katlı Kesim & Havalı Fön",
    s4_desc: "Yüz hatlarınıza özel katlı kesim mimarisi, hacimli fön ve profesyonel şekillendirme ile saçlarınıza dolgunluk kazandırın.",

    // Gallery
    gallery_badge: "Görsel Günlük",
    gallery_title: "Stüdyomuzdan Canlı Kareler",
    gallery_ig_btn: "@threebrotherrrs Instagram Hesabını Takip Et",

    // Why Us / Trust
    trust_badge: "Ayrıcalıklarımız",
    trust_title: "Neden ThreeBrothers?",
    
    trust1_title: "Tam Vaktinde Randevu",
    trust1_desc: "Misafirlerimize uyguladığımız sıfır bekleme ve ayrılmış özel koltuk protokolü ile zamanınıza saygı duyuyoruz.",

    trust2_title: "Kişiye Özel Renk Analizi",
    trust2_desc: "Ten renginiz, göz renginiz ve saç geçmişiniz analiz edilerek size en yakışacak özel ton karışımı hazırlanır.",

    trust3_title: "%100 Orijinal Premium Ürünler",
    trust3_desc: "Saç bağlarını koruyan sertifikalı açıcılar ve dünyaca kabul görmüş profesyonel bakım serileri kullanılır.",

    // Reviews
    reviews_badge: "Misafir Deneyimleri",
    reviews_title: "Doğrulanmış Google Yorumları",
    reviews_salon_name: "THREEBROTHERS",
    reviews_salon_type: "BAYAN KUAFÖRÜ",
    reviews_count_text: "119 adet Google yorumu",
    reviews_write_btn: "Siz de yorum yazın",
    reviews_owner_response_label: "İşletme Sahibinin Yanıtı:",
    reviews_view_all: "100+ mutlu müşteri yorumları incele",

    // Reviews list
    r1_meta: "3 yorum · 1 fotoğraf • bir ay önce",
    r1_text: `"Bugüne kadar gittiğim en iyi kuaför deneyimlerinden birini yaşadım. Salonun atmosferi çok sıcak ve samimi, tüm ekip son derece güler yüzlü, ilgili ve profesyonel. Özellikle Bilge Hanım’a ayrı bir teşekkür etmek istiyorum. İşini büyük bir özenle yapan harika bir uzman. Sonuç tam hayal ettiğim gibi oldu, gönül rahatlığıyla tavsiye ederim."`,
    r1_reply: `"Değerli yorumunuz ve bizi tercih ettiğiniz için çok teşekkür ederiz. Memnuniyetiniz bizim için en büyük motivasyon kaynağı. Sizleri tekrar ağırlamaktan mutluluk duyarız."`,

    r2_meta: "3 yorum · 12 fotoğraf • 9 ay önce",
    r2_text: `"Yaklaşık üç yıldır bu kuaföre gidiyorum ve başka bir yere gitmeyi hiç düşünmedim. Saç kesimi, boya, cila, balyaj gibi tüm işlemlerimi burada yaptırıyorum ve her seferinde sonuçtan çok memnun kalıyorum. Emre, İsa ve Hüseyin Bey güler yüzlü ve işlerini büyük bir özenle yapıyor. Gönül rahatlığıyla tavsiye ederim ✨🌸"`,
    r2_reply: `"Güzel geri bildiriminiz için teşekkür ederim, sizin gibi müşterilere sahip olmak büyük şans. ✨🙏😊"`,

    r3_meta: "1 yorum · 1 fotoğraf • 4 ay önce",
    r3_text: `"Sürekli gittiğim ve çok memnun kaldığım bir kuaför.. İlgilerine çok ama çok teşekkür ederimm🫶🫶"`,
    r3_reply: `"Değerli yorumunuz ve bizi tercih ettiğiniz için çok teşekkür ederiz. Memnuniyetiniz bizim için en büyük motivasyon kaynağı."`,

    r4_meta: "3 yorum • 2 ay önce",
    r4_text: `"Buraya taşındığımdan bu yana denemediğim kuaför kalmamıştı sonunda burayı da denemeye karar verdim iyi ki gelmişim bir daha başka yerin camından bakmam. O kadar iyi bir kuaför ki tamamen saçın ihtiyacına göre hareket ediyorlar. Paketli saçımdan kızıla sonra tekrar platine sıfır kopmayla çevirdiler. Kesinlikle şiddetle tavsiye ederim 👊🏻❤️"`,
    r4_reply: `"Değerli yorumunuz ve bizi tercih ettiğiniz için çok teşekkür ederiz. Memnuniyetiniz bizim için en büyük motivasyon kaynağı."`,

    r5_meta: "5 yorum • bir ay önce",
    r5_text: `"Randevusuz gittim, ona rağmen kırmayıp aldılar. Yüz şeklime yakışan bir saç kesimi yaptılar. Profesyonel bir ekip olduğunu düşünüyorum. Tekrardan teşekkürler🌸"`,
    r5_reply: `"Değerli yorumunuz ve bizi tercih ettiğiniz için çok teşekkür ederiz. Memnuniyetiniz bizim için en büyük motivasyon kaynağı. ✨"`,

    r6_meta: "4 yorum • 2 ay önce",
    r6_text: `"Her gittiğimde mutlulukla ayrıldığım kuaför :) Hepsi çok özenli, çok ilgili. Ve eklemek isterim Emre Beyin kestiği saç çok sağlıklı ve hızlı uzuyor :)"`,
    r6_reply: `"Teşekkür ederiz Rümeysa hanım güzel günlerde kullanın 🙏"`,

    r7_meta: "1 yorum • 2 ay önce",
    r7_text: `"Saçlarım yanlış kuaför seçimi ile sap sarı ve aşırı yıpranmıştı saçlarımı o halden toparlayıp eskisi gibi sağlıklı ve parlak hale getirdiler bu yüzden aşırı memnunum saç kesimleride mükemmel Emre Bey ve Bilge hanımın ilgisine bayılıyorum ❤️❤️❤️"`,
    r7_reply: `"Değerli yorumunuz ve bizi tercih ettiğiniz için çok teşekkür ederiz. Memnuniyetiniz bizim için en büyük motivasyon kaynağı."`,

    r8_meta: "2 yorum • 2 ay önce",
    r8_text: `"Yaklaşık 3 yıldır aynı kuaföre gidiyorum yaptırdığım ombrelerin hepsi çok güzel oldu. Saç kesimleri de çok iyi kesimden sonra uzamayan saçım burada kestirdikten sonra uzamaya başladı."`,
    r8_reply: `"Teşekkür ederiz Burcu hanım güzel günlerde kullanın 🙏"`,

    r9_meta: "2 yorum • bir ay önce",
    r9_text: `"İyi ki Hüseyin Bey’e saçımı emanet etmişim. Tam istediğim gibi oldu, hatta beklediğimden bile güzel. Hem çok ilgili hem de işini gerçekten severek yapıyor. Çok memnun kaldım, gönülden tavsiye ederim."`,
    r9_reply: `"Teşekkür ederiz Yıldız hanım güzel günlerde kullanmak dileğiyle 🙏"`,

    r10_meta: "1 yorum · 2 fotoğraf • 3 ay önce",
    r10_text: `"Bayıldımmm!! herkes çok ilgili ve güler yüzlüydü ne istediğinize önem veriyorlar hatta istediğinizden daha güzel sonuçlar alıyorsunuz. Saçım olaayyy💅🏻 tadını çıkarıyorum teşekkürler"`,
    r10_reply: `"Değerli yorumunuz ve bizi tercih ettiğiniz için çok teşekkür ederiz. Memnuniyetiniz bizim için en büyük motivasyon kaynağı."`,

    r11_meta: "5 yorum • 3 ay önce",
    r11_text: `"Selam, kesinlikle tavsiye edeceğim bir kuaför, işlerinde çok iyiler, kesim yaptırdım, bayıldımmm, çevremden de güzel yorumlar aldım. Çok güzel oldu. Bundan sonra tek adresim ☺️"`,
    r11_reply: `"Değerli yorumunuz ve bizi tercih ettiğiniz için çok teşekkür ederiz. Memnuniyetiniz bizim için en büyük motivasyon kaynağı."`,

    // Contact
    contact_badge: "Rezervasyon & Ulaşım",
    contact_title: "Stüdyomuza Bekliyoruz",
    contact_address_label: "Açık Adres",
    contact_address_note: "Demokrasi Bulvarı üzerinde, kolay ulaşılabilir cadde konumu.",
    contact_hours_label: "Çalışma Saatleri",
    contact_days_open: "Salı – Pazar",
    contact_day_monday: "Pazartesi",
    contact_monday_closed: "Kapalı (Haftalık İzin)",
    contact_map_directions: "Haritalarda Aç & Yol Tarifi",
    contact_wa_btn: "WhatsApp Randevu",
    contact_call_btn: "Hemen Ara",

    // Footer
    footer_copyright: "© 2026 ThreeBrothers Bayan Kuaförü & Saç Tasarım Stüdyosu. Tüm hakları saklıdır. Manavgat / Antalya.",
    footer_maps: "Google Haritalar",

    // Mobile Dock
    dock_call: "Hemen Ara",
    dock_whatsapp: "WhatsApp",

    // WhatsApp Default Link Messages
    wa_general: "Merhaba, web sitenizden ulaşıyorum. Randevu almak istiyorum.",
    wa_ombre: "Merhaba, Sarı / Ombre & Balyaj renklendirme hakkında fiyat ve randevu bilgisi almak istiyorum.",
    wa_gelin: "Merhaba, Gelin Başı ve Özel Gün Topuzu hakkında bilgi ve randevu almak istiyorum.",
    wa_keratin: "Merhaba, Keratin Botox ve İpek Bakım hakkında fiyat ve randevu bilgisi almak istiyorum.",
    wa_kesim: "Merhaba, Katlı Kesim ve Fön hizmeti hakkında randevu almak istiyorum."
  },

  en: {
    // Meta / SEO
    page_title: "ThreeBrothers Women's Hair Salon | Manavgat Luxury Hair Design & Coloring Studio",
    meta_description: "5.0 Google rated premier women's hair salon ThreeBrothers on Demokrasi Boulevard, Manavgat. Ombre, balayage, keratin botox & bridal hair expertise.",
    og_title: "ThreeBrothers Women's Hair Salon | Manavgat",
    og_description: "5.0 ★★★★★ 119 Verified Google Reviews. Luxury hair design and coloring studio in Manavgat.",

    // Header
    brand_sub: "Women's Salon • Manavgat",
    nav_instagram: "Instagram",
    nav_call: "Call",
    nav_appointment: "Book Now",

    // Hero
    hero_brand_sub: "Women's Salon • Manavgat",
    hero_title: `Manavgat's Premier <br class="hidden sm:inline" /><span class="gold-gradient-text">Hair Design & Coloring</span> Studio`,
    hero_desc: "We reveal your hair's unique radiance with custom toning formulas, anti-damage professional lightening techniques, and flawless bridal styling.",
    hero_cta_wa: "Quick WhatsApp Booking",
    hero_cta_ig: "Explore on Instagram",
    hero_scroll: "Explore",

    // Before/After Slider
    ba_badge: "Transformation Showcase",
    ba_title: "Before & After Transformation",
    ba_desc: "Drag the golden divider left and right to compare live hair coloring and keratin botox results.",
    ba_before: "BEFORE",
    ba_after: "AFTER",
    ba_hint: "Slide the handle to compare lightening and hair care results",

    // Services
    services_badge: "Signature Services",
    services_title: "Exclusive Hair Design Collection",
    services_desc: "Bond-protecting lighteners, personalized toning formulas, and lasting repair therapies.",
    services_cta: "Inquire Price & Book",
    
    s1_tag: "Blonde / Ombre / Balayage",
    s1_title: "Blonde / Ombre & Balayage",
    s1_desc: "Flawless radiant tones achieved with platinum, ash blonde, baby blonde, and warm balayage without damaging hair.",

    s2_tag: "Bridal Hair / Updo",
    s2_title: "Bridal Hair & Special Occasion Updo",
    s2_desc: "Sculpted elegant updos with accessory placement and trial sessions that stay flawless all night for weddings and engagements.",

    s3_tag: "Straight & Shiny Hair",
    s3_title: "Keratin Botox & Silk Treatment",
    s3_desc: "Anti-frizz therapy that repairs damaged hair fibers, delivering months-long mirror shine and silky smoothness.",

    s4_tag: "Layered Cut & Blowout",
    s4_title: "Layered Cut & Voluminous Blowout",
    s4_desc: "Enhance your hair's fullness with face-flattering layer architecture, voluminous blowouts, and professional styling.",

    // Gallery
    gallery_badge: "Visual Diary",
    gallery_title: "Live Moments from Our Studio",
    gallery_ig_btn: "Follow @threebrotherrrs on Instagram",

    // Why Us / Trust
    trust_badge: "Our Privileges",
    trust_title: "Why ThreeBrothers?",
    
    trust1_title: "On-Time Appointments",
    trust1_desc: "We respect your time with our zero-wait policy and dedicated reserved chair protocol for every guest.",

    trust2_title: "Custom Color Analysis",
    trust2_desc: "Your skin tone, eye color, and hair history are analyzed to formulate the custom shade that suits you best.",

    trust3_title: "100% Original Premium Products",
    trust3_desc: "We use certified bond-protecting lighteners and world-renowned professional salon care brands.",

    // Reviews
    reviews_badge: "Guest Experiences",
    reviews_title: "Verified Google Reviews",
    reviews_salon_name: "THREEBROTHERS",
    reviews_salon_type: "WOMEN'S HAIR SALON",
    reviews_count_text: "119 Google reviews",
    reviews_write_btn: "Write a Review",
    reviews_owner_response_label: "Owner's Response:",
    reviews_view_all: "View 100+ happy customer reviews",

    // Reviews list
    r1_meta: "3 reviews · 1 photo • a month ago",
    r1_text: `"I had one of the best hair salon experiences ever. The atmosphere is warm and welcoming, and the entire team is friendly, attentive, and professional. Special thanks to Ms. Bilge—a true specialist who works with great precision. The result was exactly as I dreamed!"`,
    r1_reply: `"Thank you so much for your kind words and for choosing us. Your satisfaction is our greatest motivation. We look forward to welcoming you again."`,

    r2_meta: "3 reviews · 12 photos • 9 months ago",
    r2_text: `"I've been coming here for almost three years and never considered going anywhere else. Haircuts, coloring, gloss, balayage—everything is done to perfection. Emre, İsa, and Hüseyin are always welcoming and meticulous. Highly recommended ✨🌸"`,
    r2_reply: `"Thank you for the wonderful feedback! Having wonderful clients like you is our greatest privilege. ✨🙏😊"`,

    r3_meta: "1 review · 1 photo • 4 months ago",
    r3_text: `"A salon I visit regularly and am always so happy with.. Thank you so much for your great attention and care! 🫶🫶"`,
    r3_reply: `"Thank you so much for choosing us and for your kind review. Your happiness is our greatest motivation."`,

    r4_meta: "3 reviews • 2 months ago",
    r4_text: `"Ever since I moved here, I had tried so many salons until I found this place. They act strictly according to what the hair needs. They took my hair from red to platinum with zero breakage. I strongly recommend them! 👊🏻❤️"`,
    r4_reply: `"Thank you for your valuable review and for trusting us. Your satisfaction means the world to us."`,

    r5_meta: "5 reviews • a month ago",
    r5_text: `"I walked in without an appointment, yet they kindly accommodated me. They gave me a haircut that perfectly matches my face shape. A truly professional team. Thank you again! 🌸"`,
    r5_reply: `"Thank you so much for your kind review. Your satisfaction is our top priority. ✨"`,

    r6_meta: "4 reviews • 2 months ago",
    r6_text: `"Every time I leave this salon, I leave happy :) Everyone is attentive and caring. Also, after Emre cuts my hair, it grows super healthy and fast!"`,
    r6_reply: `"Thank you Ms. Rümeysa, enjoy your gorgeous hair! 🙏"`,

    r7_meta: "1 review • 2 months ago",
    r7_text: `"My hair was severely damaged and yellowed by a bad salon choice. They completely restored it back to healthy, shiny perfection. Emre and Bilge are fantastic! ❤️❤️❤️"`,
    r7_reply: `"Thank you so much for your lovely words and for choosing us. We are thrilled you love the result."`,

    r8_meta: "2 reviews • 2 months ago",
    r8_text: `"I have been going to this salon for 3 years. All the ombres I had were stunning. The haircuts are so good that my hair started growing healthily right after."`,
    r8_reply: `"Thank you Ms. Burcu, enjoy your hair in good health! 🙏"`,

    r9_meta: "2 reviews • a month ago",
    r9_text: `"I'm so glad I trusted Hüseyin with my hair. It turned out even better than I hoped! He is caring and passionate about his craft. Wholeheartedly recommended."`,
    r9_reply: `"Thank you Ms. Yıldız, wishing you wonderful days with your new hair! 🙏"`,

    r10_meta: "1 review · 2 photos • 3 months ago",
    r10_text: `"I loved it!! Everyone was so attentive and cheerful. They care about what you want and give you results even better than you imagined. My hair is amazing 💅🏻"`,
    r10_reply: `"Thank you so much for your kind review. Your happiness is our greatest motivation."`,

    r11_meta: "5 reviews • 3 months ago",
    r11_text: `"Hello, definitely a hair salon I recommend! They are experts at what they do. I got a haircut and received so many compliments. From now on, this is my only place ☺️"`,
    r11_reply: `"Thank you so much for your kind review and for choosing us."`,

    // Contact
    contact_badge: "Booking & Location",
    contact_title: "We Welcome You to Our Studio",
    contact_address_label: "Full Address",
    contact_address_note: "Convenient main street location on Demokrasi Boulevard.",
    contact_hours_label: "Opening Hours",
    contact_days_open: "Tuesday – Sunday",
    contact_day_monday: "Monday",
    contact_monday_closed: "Closed (Weekly Rest)",
    contact_map_directions: "Open in Maps & Directions",
    contact_wa_btn: "WhatsApp Booking",
    contact_call_btn: "Call Now",

    // Footer
    footer_copyright: "© 2026 ThreeBrothers Women's Hair Salon & Design Studio. All rights reserved. Manavgat / Antalya.",
    footer_maps: "Google Maps",

    // Mobile Dock
    dock_call: "Call Now",
    dock_whatsapp: "WhatsApp",

    // WhatsApp Default Link Messages
    wa_general: "Hello, I am contacting you from your website. I would like to book an appointment.",
    wa_ombre: "Hello, I would like to get information and book an appointment for Blonde / Ombre & Balayage coloring.",
    wa_gelin: "Hello, I would like to get information and book an appointment for Bridal Hair & Updo styling.",
    wa_keratin: "Hello, I would like to get information and book an appointment for Keratin Botox & Silk Treatment.",
    wa_kesim: "Hello, I would like to book an appointment for Layered Haircut & Blowout styling."
  },

  de: {
    // Meta / SEO
    page_title: "ThreeBrothers Damenfriseur | Manavgat Exklusives Haarstyling & Colorationsstudio",
    meta_description: "Mit 5.0 Google-Sternen bewerteter führender Damenfriseur ThreeBrothers am Demokrasi Boulevard, Manavgat. Experten für Ombré, Balayage, Keratin & Brautfrisuren.",
    og_title: "ThreeBrothers Damenfriseur | Manavgat",
    og_description: "5.0 ★★★★★ 119 Verifizierte Google-Bewertungen. Luxus-Haardesign und Colorationsstudio in Manavgat.",

    // Header
    brand_sub: "Damenfriseur • Manavgat",
    nav_instagram: "Instagram",
    nav_call: "Anrufen",
    nav_appointment: "Termin Buchen",

    // Hero
    hero_brand_sub: "Damenfriseur • Manavgat",
    hero_title: `Manavgats Exklusives <br class="hidden sm:inline" /><span class="gold-gradient-text">Haarstyling & Colorations</span> Studio`,
    hero_desc: "Wir bringen den einzigartigen Glanz Ihres Haares mit individuellen Tönungsformeln, schonenden Aufhellungstechniken und perfektem Brautstyling zur Geltung.",
    hero_cta_wa: "Schneller WhatsApp Termin",
    hero_cta_ig: "Auf Instagram ansehen",
    hero_scroll: "Entdecken",

    // Before/After Slider
    ba_badge: "Vorher-Nachher Galerie",
    ba_title: "Vorher & Nachher Verwandlung",
    ba_desc: "Ziehen Sie den goldenen Regler nach links und rechts, um Colorations- und Keratin-Ergebnisse direkt zu vergleichen.",
    ba_before: "VORHER",
    ba_after: "NACHHER",
    ba_hint: "Schieben Sie den Regler, um Aufhellung und Pflegeergebnisse zu vergleichen",

    // Services
    services_badge: "Unsere Signature-Services",
    services_title: "Exklusive Haarstyling-Kollektion",
    services_desc: "Haarschonende Aufheller, individuelle Tönungsformeln und dauerhafte Pflegetherapien.",
    services_cta: "Preis anfragen & buchen",
    
    s1_tag: "Blond / Ombré / Balayage",
    s1_title: "Blond / Ombré & Balayage",
    s1_desc: "Strahlende Töne mit Platin-, Aschblond-, Babyblond- und warmen Balayage-Verläufen ohne Haarschäden.",

    s2_tag: "Brautfrisur / Hochsteckfrisur",
    s2_title: "Braut- & Festliche Hochsteckfrisuren",
    s2_desc: "Elegante Hochsteckfrisuren mit Accessoires und Probeterminen, die die ganze Nacht perfekt halten.",

    s3_tag: "Glattes & Glänzendes Haar",
    s3_title: "Keratin-Botox & Seidenpflege",
    s3_desc: "Anti-Frizz-Therapie, die geschädigtes Haar repariert und monatelang spiegelnden Glanz und Geschmeidigkeit schenkt.",

    s4_tag: "Stufenschnitt & Föhnen",
    s4_title: "Stufenschnitt & Glamour-Föhnfrisur",
    s4_desc: "Geben Sie Ihrem Haar Fülle mit typgerechtem Stufenschnitt, Volumen-Föhnen und professionellem Styling.",

    // Gallery
    gallery_badge: "Visuelles Tagebuch",
    gallery_title: "Live-Einblicke aus unserem Studio",
    gallery_ig_btn: "Folgen Sie @threebrotherrrs auf Instagram",

    // Why Us / Trust
    trust_badge: "Unsere Vorzüge",
    trust_title: "Warum ThreeBrothers?",
    
    trust1_title: "Pünktliche Termine",
    trust1_desc: "Wir respektieren Ihre Zeit mit unserem Null-Wartezeit-Versprechen und reservierten Plätzen.",

    trust2_title: "Individuelle Farbanalyse",
    trust2_desc: "Hautton, Augenfarbe und Haarhistorie werden analysiert, um Ihre perfekte Farbnuance zu kreieren.",

    trust3_title: "100% Originale Premium-Produkte",
    trust3_desc: "Wir verwenden zertifizierte, haarschonende Aufheller und weltweit renommierte Markenpflege.",

    // Reviews
    reviews_badge: "Gäste-Erfahrungen",
    reviews_title: "Verifizierte Google-Bewertungen",
    reviews_salon_name: "THREEBROTHERS",
    reviews_salon_type: "DAMENFRISEUR",
    reviews_count_text: "119 Google-Bewertungen",
    reviews_write_btn: "Bewertung schreiben",
    reviews_owner_response_label: "Antwort des Inhabers:",
    reviews_view_all: "100+ zufriedene Kundenbewertungen ansehen",

    // Reviews list
    r1_meta: "3 Bewertungen · 1 Foto • vor einem Monat",
    r1_text: `"Eine der besten Friseurerfahrungen meines Lebens! Sehr herzliche Atmosphäre, das gesamte Team ist freundlich und professionell. Ein besonderer Dank an Frau Bilge – das Ergebnis ist ein Traum!"`,
    r1_reply: `"Vielen Dank für Ihre wunderbare Bewertung und Ihr Vertrauen. Ihre Zufriedenheit ist unsere größte Motivation!"`,

    r2_meta: "3 Bewertungen · 12 Fotos • vor 9 Monaten",
    r2_text: `"Ich komme seit drei Jahren hierher und möchte nirgendwo anders hin. Haarschnitt, Tönung, Balayage – immer absolute Perfektion. Emre, İsa und Hüseyin arbeiten mit größter Sorgfalt ✨🌸"`,
    r2_reply: `"Herzlichen Dank für das tolle Feedback! Wir freuen uns jedes Mal auf Ihren Besuch ✨🙏😊"`,

    r3_meta: "1 Bewertung · 1 Foto • vor 4 Monaten",
    r3_text: `"Ein Friseur, zu dem ich regelmäßig gehe und immer überglücklich bin. Vielen Dank für die tolle Betreuung! 🫶🫶"`,
    r3_reply: `"Vielen Dank für Ihren Besuch und Ihre freundliche Rückmeldung."`,

    r4_meta: "3 Bewertungen • vor 2 Monaten",
    r4_text: `"Seit meinem Umzug hierher habe ich viele Salons ausprobiert – bis ich diesen fand. Sie haben mein Haar ohne Haarbruch von Rot auf Platinblond gebracht. Absolut empfehlenswert! 👊🏻❤️"`,
    r4_reply: `"Vielen Dank für Ihr Vertrauen und Ihre lobenden Worte."`,

    r5_meta: "5 Bewertungen • vor einem Monat",
    r5_text: `"Ich kam spontan ohne Termin vorbei und wurde sofort freundlich bedient. Der Schnitt passt perfekt zu meiner Gesichtsform. Ein tolles Team! 🌸"`,
    r5_reply: `"Vielen Dank für Ihre tolle Bewertung. Bis zum nächsten Mal! ✨"`,

    r6_meta: "4 Bewertungen • vor 2 Monaten",
    r6_text: `"Jedes Mal verlasse ich diesen Salon überglücklich :) Nach Emres Haarschnitt wächst mein Haar gesund und kräftig nach!"`,
    r6_reply: `"Vielen Dank Frau Rümeysa, viel Freude mit Ihrem schönen Haar! 🙏"`,

    r7_meta: "1 Bewertung • vor 2 Monaten",
    r7_text: `"Mein Haar war nach einem anderen Friseurbesuch stark geschädigt. Hier wurde es wieder gesund, weich und glänzend gepflegt. Emre und Bilge sind spitze! ❤️❤️❤️"`,
    r7_reply: `"Herzlichen Dank für Ihre netten Worte. Wir freuen uns sehr über Ihr Lächeln."`,

    r8_meta: "2 Bewertungen • vor 2 Monaten",
    r8_text: `"Seit 3 Jahren Stammkundin. Alle Ombré-Färbungen waren makellos schön. Auch die Haarschnitte sind hervorragend."`,
    r8_reply: `"Vielen Dank Frau Burcu, alles Gute für Sie! 🙏"`,

    r9_meta: "2 Bewertungen • vor einem Monat",
    r9_text: `"Hüseyin Bey hat meine Haare verzaubert! Es sieht noch besser aus als erhofft. Sehr aufmerksam und leidenschaftlich. Nur zu empfehlen."`,
    r9_reply: `"Vielen Dank Frau Yıldız, weiterhin viel Freude mit Ihrem Styling! 🙏"`,

    r10_meta: "1 Bewertung · 2 Fotos • vor 3 Monaten",
    r10_text: `"Ich bin begeistert!! Alle sind so aufmerksam und freundlich. Meine Haare sehen umwerfend aus 💅🏻 Vielen Dank!"`,
    r10_reply: `"Vielen Dank für Ihre wunderbare Bewertung!"`,

    r11_meta: "5 Bewertungen • vor 3 Monaten",
    r11_text: `"Ganz klare Empfehlung! Großartige Arbeit, toller Haarschnitt und viele Komplimente im Freundeskreis bekommen. Ab jetzt meine feste Adresse ☺️"`,
    r11_reply: `"Vielen Dank für Ihr Vertrauen und Ihre Weiterempfehlung."`,

    // Contact
    contact_badge: "Termine & Anfahrt",
    contact_title: "Besuchen Sie unser Studio",
    contact_address_label: "Adresse",
    contact_address_note: "Leicht erreichbare Lage direkt am Demokrasi Boulevard.",
    contact_hours_label: "Öffnungszeiten",
    contact_days_open: "Dienstag – Sonntag",
    contact_day_monday: "Montag",
    contact_monday_closed: "Geschlossen (Ruhetag)",
    contact_map_directions: "In Maps öffnen & Route",
    contact_wa_btn: "WhatsApp Termin",
    contact_call_btn: "Jetzt anrufen",

    // Footer
    footer_copyright: "© 2026 ThreeBrothers Damenfriseur & Haarstyling-Studio. Alle Rechte vorbehalten. Manavgat / Antalya.",
    footer_maps: "Google Maps",

    // Mobile Dock
    dock_call: "Anrufen",
    dock_whatsapp: "WhatsApp",

    // WhatsApp Default Link Messages
    wa_general: "Hallo, ich kontaktiere Sie über Ihre Website. Ich möchte einen Termin vereinbaren.",
    wa_ombre: "Hallo, ich möchte mich über Blond / Ombré & Balayage Färbung informieren und einen Termin vereinbaren.",
    wa_gelin: "Hallo, ich möchte mich über Brautfrisuren & Hochsteckfrisuren informieren und einen Termin vereinbaren.",
    wa_keratin: "Hallo, ich möchte mich über Keratin-Botox & Seidenpflege informieren und einen Termin vereinbaren.",
    wa_kesim: "Hallo, ich möchte einen Termin für Stufenschnitt & Föhnen vereinbaren."
  },

  ru: {
    // Meta / SEO
    page_title: "ThreeBrothers Женская парикмахерская | Манавгат Премиум Студия Дизайна и Окрашивания Волос",
    meta_description: "Ведущая женская парикмахерская ThreeBrothers в Манавгате с рейтингом 5.0 Google. Эксперты по омбре, балаяж, кератиновому ботоксу и свадебным прическам.",
    og_title: "ThreeBrothers Женская парикмахерская | Манавгат",
    og_description: "5.0 ★★★★★ 119 проверенных отзывов Google. Премиум студия дизайна и окрашивания волос в Манавгате.",

    // Header
    brand_sub: "Женский салон • Манавгат",
    nav_instagram: "Instagram",
    nav_call: "Позвонить",
    nav_appointment: "Записаться",

    // Hero
    hero_brand_sub: "Женский салон • Манавгат",
    hero_title: `Премиальная студия <br class="hidden sm:inline" /><span class="gold-gradient-text">дизайна и окрашивания волос</span> в Манавгате`,
    hero_desc: "Мы раскрываем неповторимое сияние ваших волос с помощью индивидуальных формул тонирования, бережного осветления и безупречных свадебных образов.",
    hero_cta_wa: "Быстрая запись в WhatsApp",
    hero_cta_ig: "Смотреть в Instagram",
    hero_scroll: "Узнать",

    // Before/After Slider
    ba_badge: "Витрина преображения",
    ba_title: "Преображение До и После",
    ba_desc: "Передвигайте золотой разделитель влево и вправо для сравнения окрашивания и кератина.",
    ba_before: "ДО ПРОЦЕДУРЫ",
    ba_after: "ПОСЛЕ ПРОЦЕДУРЫ",
    ba_hint: "Сдвиньте ползунок, чтобы сравнить результат осветления и ухода",

    // Services
    services_badge: "Фирменные услуги",
    services_title: "Эксклюзивная коллекция дизайна волос",
    services_desc: "Щадящие осветлители, индивидуальные формулы тонирования и восстанавливающий уход.",
    services_cta: "Узнать цену и записаться",
    
    s1_tag: "Блонд / Омбре / Балаяж",
    s1_title: "Блонд / Омбре и Балаяж",
    s1_desc: "Безупречные сияющие оттенки: платиновый, пепельный блонд, baby blond и мягкий балаяж без повреждений.",

    s2_tag: "Свадебные прически / Пучки",
    s2_title: "Свадебные и вечерние прически",
    s2_desc: "Элегантные прически с аксессуарами и репетицией, стойкие на протяжении всего торжества.",

    s3_tag: "Гладкие и блестящие волосы",
    s3_title: "Кератиновый ботокс и шелковый уход",
    s3_desc: "Антистатический уход, восстанавливающий структуру волос, обеспечивающий зеркальный блеск и гладкость на месяцы.",

    s4_tag: "Каскадная стрижка и укладка",
    s4_title: "Каскадная стрижка и объемная укладка",
    s4_desc: "Придайте волосам густоту и объем с помощью текстурной стрижки под овал лица и профессиональной укладки.",

    // Gallery
    gallery_badge: "Фотогалерея",
    gallery_title: "Живые кадры из нашей студии",
    gallery_ig_btn: "Подписывайтесь на @threebrotherrrs в Instagram",

    // Why Us / Trust
    trust_badge: "Наши преимущества",
    trust_title: "Почему ThreeBrothers?",
    
    trust1_title: "Прием точно по времени",
    trust1_desc: "Мы ценим ваше время: обслуживание без ожидания на персонально подготовленном рабочем месте.",

    trust2_title: "Персональный анализ цвета",
    trust2_desc: "Анализ тона кожи, цвета глаз и истории волос для создания идеального персонального оттенка.",

    trust3_title: "100% оригинальная премиум-косметика",
    trust3_desc: "Используются сертифицированные защитные осветлители и всемирно признанные профессиональные линейки ухода.",

    // Reviews
    reviews_badge: "Отзывы клиентов",
    reviews_title: "Проверенные отзывы в Google",
    reviews_salon_name: "THREEBROTHERS",
    reviews_salon_type: "ЖЕНСКИЙ САЛОН",
    reviews_count_text: "119 отзывов в Google",
    reviews_write_btn: "Оставить отзыв",
    reviews_owner_response_label: "Ответ владельца:",
    reviews_view_all: "Читать более 100 отзывов довольных клиентов",

    // Reviews list
    r1_meta: "3 отзыва · 1 фото • месяц назад",
    r1_text: `"Один из лучших визитов к парикмахеру в моей жизни! Очень теплая атмосфера, вежливый и профессиональный коллектив. Огромное спасибо мастеру Бильге – результат превзошел все ожидания!"`,
    r1_reply: `"Большое спасибо за ваш отзыв и выбор нашего салона. Ваша радость – наша главная цель!"`,

    r2_meta: "3 отзыва · 12 фото • 9 месяцев назад",
    r2_text: `"Хожу в этот салон уже три года и ни за что не поменяю. Стрижки, окрашивание, балаяж – все на высшем уровне. Эмре, Иса и Хюсейн работают с огромной заботой ✨🌸"`,
    r2_reply: `"Спасибо за теплые слова! Нам очень приятно иметь таких прекрасных клиенток ✨🙏😊"`,

    r3_meta: "1 отзыв · 1 фото • 4 месяца назад",
    r3_text: `"Мой любимый салон, куда хожу постоянно. Огромное спасибо за заботу и внимание! 🫶🫶"`,
    r3_reply: `"Благодарим за отзыв и доверие к нашей команде."`,

    r4_meta: "3 отзыва • 2 месяца назад",
    r4_text: `"После переезда долго искала своего мастера. В ThreeBrothers перевели мои волосы из рыжего в чистый блонд без единого повреждения. Всем рекомендую! 👊🏻❤️"`,
    r4_reply: `"Спасибо за ваш отзыв! Мы всегда рады видеть вас снова."`,

    r5_meta: "5 отзывов • месяц назад",
    r5_text: `"Пришла без предварительной записи, но меня с удовольствием приняли. Подобрали стрижку, которая идеально подошла к лицу. Очень профессионально! 🌸"`,
    r5_reply: `"Спасибо за высокую оценку нашей работы! ✨"`,

    r6_meta: "4 отзыва • 2 месяца назад",
    r6_text: `"Каждый раз ухожу отсюда счастливой :) Все очень внимательные. И после стрижки у Эмре волосы растут здоровыми и быстро!"`,
    r6_reply: `"Спасибо, Румейса! Носите новую прическу с удовольствием 🙏"`,

    r7_meta: "1 отзыв • 2 месяца назад",
    r7_text: `"Мои волосы были сожжены в другом салоне, а здесь их буквально спасли, вернув блеск и здоровье. Эмре и Бильге – настоящие волшебники! ❤️❤️❤️"`,
    r7_reply: `"Большое спасибо за доверие! Рады были помочь вашим волосам."`,

    r8_meta: "2 отзыва • 2 месяца назад",
    r8_text: `"Посещаю этот салон 3 года. Все окрашивания омбре получались шикарными. Стрижки тоже на высоте."`,
    r8_reply: `"Спасибо, Бурджу! Всегда рады вам 🙏"`,

    r9_meta: "2 отзыва • месяц назад",
    r9_text: `"Доверила волосы Хюсейну и ни капли не пожалела. Получилось даже лучше, чем на картинке. Отличный мастер!"`,
    r9_reply: `"Спасибо, Йылдыз! Радуйтесь вашей красивой прическе 🙏"`,

    r10_meta: "1 отзыв · 2 фото • 3 месяца назад",
    r10_text: `"Я в восторге!! Очень внимательный и улыбчивый персонал. Волосы выглядят потрясающе 💅🏻 Огромное спасибо!"`,
    r10_reply: `"Большое спасибо за ваш теплый отзыв!"`,

    r11_meta: "5 отзывов • 3 месяца назад",
    r11_text: `"Привет! Однозначно рекомендую этот салон. Сделала стрижку и получила море комплиментов. Теперь только сюда ☺️"`,
    r11_reply: `"Спасибо за доверие и теплый отзыв."`,

    // Contact
    contact_badge: "Запись и контакты",
    contact_title: "Ждем вас в нашей студии",
    contact_address_label: "Адрес",
    contact_address_note: "Удобное расположение прямо на проспекте Демокраси.",
    contact_hours_label: "Часы работы",
    contact_days_open: "Вторник – Воскресенье",
    contact_day_monday: "Понедельник",
    contact_monday_closed: "Выходной",
    contact_map_directions: "Открыть на карте и маршрут",
    contact_wa_btn: "Запись в WhatsApp",
    contact_call_btn: "Позвонить",

    // Footer
    footer_copyright: "© 2026 ThreeBrothers Женская парикмахерская и студия дизайна волос. Все права защищены. Манавгат / Анталья.",
    footer_maps: "Google Карты",

    // Mobile Dock
    dock_call: "Позвонить",
    dock_whatsapp: "WhatsApp",

    // WhatsApp Default Link Messages
    wa_general: "Здравствуйте! Пишу с вашего сайта. Хочу записаться на прием.",
    wa_ombre: "Здравствуйте! Хочу узнать стоимость и записаться на окрашивание Блонд / Омбре и Балаяж.",
    wa_gelin: "Здравствуйте! Хочу узнать информацию и записаться на Свадебную / Вечернюю прическу.",
    wa_keratin: "Здравствуйте! Хочу узнать стоимость и записаться на Кератиновый ботокс и шелковый уход.",
    wa_kesim: "Здравствуйте! Хочу записаться на каскадную стрижку и укладку волос."
  },

  ar: {
    // Meta / SEO
    page_title: "ThreeBrothers صالون تصفيف شعر نسائي | استوديو راقي لتصميم وصبغ الشعر في مانافغات",
    meta_description: "صالون النساء الرائد ThreeBrothers في مانافغات بتقييم 5.0 على Google. خبراء في الأومبري، البلياج، بوتوكس الكيراتين وتسريحات العرائس.",
    og_title: "ThreeBrothers صالون تصفيف شعر نسائي | مانافغات",
    og_description: "5.0 ★★★★★ 119 تقييماً موثقاً على Google. استوديو فاخر لتصميم وتلوين الشعر في مانافغات.",

    // Header
    brand_sub: "صالون نسائي • مانافغات",
    nav_instagram: "إنستغرام",
    nav_call: "اتصال",
    nav_appointment: "حجز موعد",

    // Hero
    hero_brand_sub: "صالون نسائي • مانافغات",
    hero_title: `استوديو مانافغات الراقي <br class="hidden sm:inline" /><span class="gold-gradient-text">لتصميم وصبغ وتصفيف الشعر</span>`,
    hero_desc: "نبرز إشراقة شعركِ الفريدة بتركيبات تلوين مخصصة، وتقنيات تفتيح احترافية تحمي من التلف، وتصميمات عرائس مثالية.",
    hero_cta_wa: "حجز سريع عبر واتساب",
    hero_cta_ig: "شاهد في إنستغرام",
    hero_scroll: "استكشف",

    // Before/After Slider
    ba_badge: "معرض التحول",
    ba_title: "التحول قبل وبعد",
    ba_desc: "اسحبي الفاصل الذهبي لليمين واليسار لمقارنة نتائج الصبغ وبوتوكس الكيراتين مباشرة.",
    ba_before: "قبل العملية",
    ba_after: "بعد العملية",
    ba_hint: "حركي المؤشر لمقارنة نتيجة التفتيح والعناية بالشعر",

    // Services
    services_badge: "خدماتنا المميزة",
    services_title: "مجموعة تصميم وتصفيف الشعر الخاصة",
    services_desc: "مستحضرات تفتيح تحمي ألياف الشعر، تركيبات ألوان مخصصة وعلاجات ترميم دائمة.",
    services_cta: "استفسار عن السعر والحجز",
    
    s1_tag: "أشقر / أومبري / بلياج",
    s1_title: "أشقر / أومبري وبلياج",
    s1_desc: "ألوان مشرقة مثالية: بلاتيني، أشقر رمادي، أشقر ناعم وتدرجات بلياج دافئة بدون إتلاف الشعر.",

    s2_tag: "تسريحات عرائس / رفع شعر",
    s2_title: "تسريحات العرائس والمناسبات الخاصة",
    s2_desc: "تصميم تسريحات أنيقة ومثبتة طوال السهرة مع الإكسسوارات وجلسة تجريبية لحفلات الزفاف والخطوبة.",

    s3_tag: "شعر ناعم ولامع",
    s3_title: "بوتوكس الكيراتين والعناية الحريرية",
    s3_desc: "علاج مضاد للتطاير يرمم ألياف الشعر التالفة ويمنح لمعاناً فائقاً ونعومة حريرية تدوم لشهور.",

    s4_tag: "قص مدرج وسشوار كثيف",
    s4_title: "قص شعر طبقات وتصفيف بالفير/السشوار",
    s4_desc: "امنحي شعرك كثافة وجاذبية بقصات مدرجة تناسب ملامح وجهك مع سشوار وتصفيف احترافي.",

    // Gallery
    gallery_badge: "يوميات مصورة",
    gallery_title: "لقطات حية من داخل الاستوديو",
    gallery_ig_btn: "تابعوا حساب @threebrotherrrs على إنستغرام",

    // Why Us / Trust
    trust_badge: "مميزاتنا الحصرية",
    trust_title: "لماذا ThreeBrothers؟",
    
    trust1_title: "مواعيد دقيقة بدون انتظار",
    trust1_desc: "نحترم وقتكِ الثمين من خلال بروتوكول عدم الانتظار ومقعد مخصص ومجهز مسبقاً لكِ.",

    trust2_title: "تحليل وتخصيص لون الشعر",
    trust2_desc: "يتم تحليل لون بشرتكِ، عينيكِ وتاريخ شعركِ لابتكار مزيج ألوان مخصص يبرز جمالكِ.",

    trust3_title: "منتجات أصلية وفاخرة 100%",
    trust3_desc: "نستخدم مستحضرات تفتيح معتمدة تحمي روابط الشعر مع أشهر الماركات العالمية للعناية بالشعر.",

    // Reviews
    reviews_badge: "تجارب زوارنا",
    reviews_title: "تقييمات Google الموثقة",
    reviews_salon_name: "THREEBROTHERS",
    reviews_salon_type: "صالون نسائي",
    reviews_count_text: "119 تقييماً على Google",
    reviews_write_btn: "اكتب تقييمك الآن",
    reviews_owner_response_label: "رد إدارة الصالون:",
    reviews_view_all: "اطّلع على أكثر من 100 تقييم لزبائننا السعداء",

    // Reviews list
    r1_meta: "3 تقييمات · صورة واحدة • منذ شهر",
    r1_text: `"واحدة من أفضل تجارب صالونات التجميل التي عشتها على الإطلاق! الأجواء دافئة ولطيفة وفريق العمل بأكمله بشوش ومحترف. شكر خاص للأستاذة بيلغي، النتيجة كانت تماماً كما تمنيت!"`,
    r1_reply: `"شكراً جزيلاً لتقييمكِ الرائع واختياركِ لنا. سعادتكِ هي أكبر دافع لنا."`,

    r2_meta: "3 تقييمات · 12 صورة • منذ 9 أشهر",
    r2_text: `"أتردد على هذا الصالون منذ 3 سنوات ولم أفكر يوماً في الذهاب لغيره. قص الشعر والصبغة والبلياج تتم دائماً بأعلى درجات الإتقان. إمري وعيسى وحسين رائعون ومخلصون في عملهم ✨🌸"`,
    r2_reply: `"شكراً جزيلاً على كلماتكِ اللطيفة، يسعدنا دائماً استقبالكِ ✨🙏😊"`,

    r3_meta: "تقييم واحد · صورة واحدة • منذ 4 أشهر",
    r3_text: `"صالوني المفضل الذي أزوره دائماً وأنا في غاية السعادة.. شكراً جزيلاً على اهتمامكم ورعايتكم الفائقة 🫶🫶"`,
    r3_reply: `"شكراً جزيلاً لاختياركِ صالوننا ولتقييمكِ الغالي."`,

    r4_meta: "3 تقييمات • منذ شهرين",
    r4_text: `"منذ انتقالي إلى هنا جربت العديد من الصالونات حتى وجدت هذا المكان الرائع. حولوا شعري من الأحمر إلى البلاتيني بدون أي تقصف أو تلف. أنصح به بشدة 👊🏻❤️"`,
    r4_reply: `"شكراً لثقتكِ الغالية بفريقنا، ونسعد دائماً بخدمتكِ."`,

    r5_meta: "5 تقييمات • منذ شهر",
    r5_text: `"ذهبت بدون موعد مسبق ومع ذلك استقبلوني بكل ترحاب. اختاروا لي قصة شعر ناسبت وجهي تماماً. فريق محترف بحق! 🌸"`,
    r5_reply: `"شكراً جزيلاً لتقييمكِ الكريم، أهلاً بكِ في أي وقت ✨"`,

    r6_meta: "4 تقييمات • منذ شهرين",
    r6_text: `"في كل مرة أزور فيها الصالون أخرج في قمة السعادة :) الجميع ودودون، وقصات إمري تجعل الشعر ينمو بصحة وسرعة!"`,
    r6_reply: `"شكراً لكِ آنسة رميسا، تتهنين بشعركِ الجميل 🙏"`,

    r7_meta: "تقييم واحد • منذ شهرين",
    r7_text: `"كان شعري متضرراً جداً من صالون سابق، ولكنهم أعادوا له صحته ولمعانه الرائع. إمري وبيلغي مبدعون ومحترفون جداً ❤️❤️❤️"`,
    r7_reply: `"شكراً جزيلاً لثقتكِ وكلماتكِ الطيبة."`,

    r8_meta: "تقييمان • منذ شهرين",
    r8_text: `"أتردد هنا منذ 3 سنوات، كل درجات الأومبري التي قمت بها كانت مذهلة، وقصات الشعر ممتازة جداً."`,
    r8_reply: `"شكراً جزيلاً آنسة بورجو، سعداء بخدمتكِ دائماً 🙏"`,

    r9_meta: "تقييمان • منذ شهر",
    r9_text: `"الحمد لله أنني ائتمنت حسين بيك على شعري، النتيجة جاءت أجمل مما تخيلت. إتقان واهتمام حقيقي. أنصح به من قلبي."`,
    r9_reply: `"شكراً جزيلاً آنسة يلدز، ألف مبروك الإطلالة الجديدة 🙏"`,

    r10_meta: "تقييم واحد · صورتان • منذ 3 أشهر",
    r10_text: `"أعجبني جداً!! الجميع مبتسمون ومهتمون بما تطلبينه تماماً. شعري أصبح ساحراً 💅🏻 شكراً لكم"`,
    r10_reply: `"شكراً جزيلاً لكِ ونسعد دائماً برضاكِ."`,

    r11_meta: "5 تقييمات • منذ 3 أشهر",
    r11_text: `"مرحباً، صالون ممتاز وأنصح به بكل ثقة! قصيت شعري وحصلت على الكثير من الإطراءات. سيكون وجهتي الدائمة ☺️"`,
    r11_reply: `"شكراً جزيلاً لاختياركِ لنا ولتقييمكِ الجميل."`,

    // Contact
    contact_badge: "الحجز والموقع",
    contact_title: "يسعدنا استقبالكم في استوديونا",
    contact_address_label: "العنوان بالتفصيل",
    contact_address_note: "موقع مميز وسهل الوصول على شارع الديمقراطية مباشرة.",
    contact_hours_label: "ساعات العمل",
    contact_days_open: "الثلاثاء – الأحد",
    contact_day_monday: "الإثنين",
    contact_monday_closed: "مغلق (عطلة أسبوعية)",
    contact_map_directions: "فتح في الخرائط والاتجاهات",
    contact_wa_btn: "حجز عبر واتساب",
    contact_call_btn: "اتصل الآن",

    // Footer
    footer_copyright: "© 2026 ThreeBrothers صالون وتصميم شعر السيدات. جميع الحقوق محفوظة. مانافغات / أنطاليا.",
    footer_maps: "خرائط Google",

    // Mobile Dock
    dock_call: "اتصل الآن",
    dock_whatsapp: "واتساب",

    // WhatsApp Default Link Messages
    wa_general: "مرحباً، أتواصل معكم عبر موقعكم الإلكتروني. أود حجز موعد.",
    wa_ombre: "مرحباً، أود الاستفسار عن الأسعار وحجز موعد لصبغ الشعر أشقر / أومبري وبلياج.",
    wa_gelin: "مرحباً، أود الاستفسار وحجز موعد لتسريحة عروس / مناسبة خاصة.",
    wa_keratin: "مرحباً، أود الاستفسار عن الأسعار وحجز موعد لعلاج بوتوكس الكيراتين والعناية الحريرية.",
    wa_kesim: "مرحباً، أود حجز موعد لقص الشعر طبقات وسشوار."
  }
};

/**
 * Multi-Language Controller
 */
window.I18n = {
  currentLang: 'tr',
  languages: I18N_LANGUAGES,
  translations: I18N_TRANSLATIONS,
  
  init() {
    // 1. Detect saved language or browser language
    const savedLang = localStorage.getItem('threebrothers_lang');
    if (savedLang && I18N_TRANSLATIONS[savedLang]) {
      this.currentLang = savedLang;
    } else {
      const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
      if (browserLang.startsWith('de')) this.currentLang = 'de';
      else if (browserLang.startsWith('ru')) this.currentLang = 'ru';
      else if (browserLang.startsWith('ar')) this.currentLang = 'ar';
      else if (browserLang.startsWith('en')) this.currentLang = 'en';
      else this.currentLang = 'tr';
    }

    // 2. Render Language Dropdown
    this.renderDropdown();

    // 3. Apply Language
    this.setLanguage(this.currentLang, false);

    // 4. Attach event listeners
    this.bindEvents();
  },

  renderDropdown() {
    const menuContainer = document.getElementById('lang-menu-list');
    if (!menuContainer) return;

    menuContainer.innerHTML = '';
    Object.keys(I18N_LANGUAGES).forEach(langKey => {
      const lang = I18N_LANGUAGES[langKey];
      const isSelected = langKey === this.currentLang;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `w-full text-left px-3.5 py-2 text-xs font-semibold flex items-center justify-between transition-colors rounded-xl ${
        isSelected 
          ? 'bg-brand-gold/15 text-brand-champagne font-bold' 
          : 'text-zinc-300 hover:bg-white/[0.06] hover:text-white'
      }`;
      btn.innerHTML = `
        <span class="flex items-center gap-2.5">
          <span class="text-sm leading-none">${lang.flag}</span>
          <span>${lang.name}</span>
        </span>
        ${isSelected ? '<span class="text-brand-champagne text-xs">✓</span>' : ''}
      `;
      btn.addEventListener('click', () => {
        this.setLanguage(langKey, true);
        this.closeDropdown();
      });
      menuContainer.appendChild(btn);
    });
  },

  bindEvents() {
    const triggerBtn = document.getElementById('lang-dropdown-btn');
    const menu = document.getElementById('lang-dropdown-menu');
    const chevron = document.getElementById('lang-dropdown-chevron');

    if (!triggerBtn || !menu) return;

    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = triggerBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        this.closeDropdown();
      } else {
        this.openDropdown();
      }
    });

    document.addEventListener('click', (e) => {
      if (!triggerBtn.contains(e.target) && !menu.contains(e.target)) {
        this.closeDropdown();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeDropdown();
      }
    });
  },

  openDropdown() {
    const triggerBtn = document.getElementById('lang-dropdown-btn');
    const menu = document.getElementById('lang-dropdown-menu');
    const chevron = document.getElementById('lang-dropdown-chevron');
    if (!triggerBtn || !menu) return;

    menu.classList.remove('hidden');
    triggerBtn.setAttribute('aria-expanded', 'true');
    if (chevron) chevron.style.transform = 'rotate(180deg)';
  },

  closeDropdown() {
    const triggerBtn = document.getElementById('lang-dropdown-btn');
    const menu = document.getElementById('lang-dropdown-menu');
    const chevron = document.getElementById('lang-dropdown-chevron');
    if (!triggerBtn || !menu) return;

    menu.classList.add('hidden');
    triggerBtn.setAttribute('aria-expanded', 'false');
    if (chevron) chevron.style.transform = 'rotate(0deg)';
  },

  setLanguage(langKey, saveToStorage = true) {
    if (!I18N_TRANSLATIONS[langKey]) return;
    this.currentLang = langKey;
    const langConfig = I18N_LANGUAGES[langKey];
    const dict = I18N_TRANSLATIONS[langKey];

    // 1. Save to LocalStorage
    if (saveToStorage) {
      try {
        localStorage.setItem('threebrothers_lang', langKey);
      } catch (e) {}
    }

    // 2. Set HTML attributes
    document.documentElement.lang = langKey;
    document.documentElement.setAttribute('dir', langConfig.dir);

    // 3. Update Title & Meta
    if (dict.page_title) document.title = dict.page_title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict.meta_description) metaDesc.setAttribute('content', dict.meta_description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && dict.og_title) ogTitle.setAttribute('content', dict.og_title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && dict.og_description) ogDesc.setAttribute('content', dict.og_description);

    // 4. Update Header Dropdown UI
    const flagEl = document.getElementById('current-lang-flag');
    const codeEl = document.getElementById('current-lang-code');
    if (flagEl) flagEl.textContent = langConfig.flag;
    if (codeEl) codeEl.textContent = langConfig.code;
    this.renderDropdown();

    // 5. Update Elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // 6. Update Elements with data-i18n-html
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // 7. Update Elements with data-i18n-aria
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) {
        el.setAttribute('aria-label', dict[key]);
      }
    });

    // 8. Update WhatsApp Links with Localized Messages
    this.updateWhatsAppLinks(dict);
  },

  updateWhatsAppLinks(dict) {
    const rawNumber = "905526856907";
    const waMap = {
      'wa-general': dict.wa_general,
      'wa-ombre': dict.wa_ombre,
      'wa-gelin': dict.wa_gelin,
      'wa-keratin': dict.wa_keratin,
      'wa-kesim': dict.wa_kesim
    };

    document.querySelectorAll('[data-wa-type]').forEach(link => {
      const type = link.getAttribute('data-wa-type');
      const msg = waMap[type] || dict.wa_general;
      link.href = `https://wa.me/${rawNumber}?text=${encodeURIComponent(msg)}`;
    });

    // Fallback update for any remaining wa.me links
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
      if (!link.hasAttribute('data-wa-type')) {
        link.href = `https://wa.me/${rawNumber}?text=${encodeURIComponent(dict.wa_general)}`;
      }
    });
  }
};

// Initialize i18n on DOMContentLoaded or immediately if already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => window.I18n.init());
} else {
  window.I18n.init();
}
