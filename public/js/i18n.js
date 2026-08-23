/**
 * Three Brothers Bayan Kuaförü (Manavgat)
 * Lüks & Butik Çok Dilli Motor (Multi-Language Engine)
 * Diller: TR (Türkçe), EN (English), DE (Deutsch), RU (Русский), AR (العربية)
 * Marka Adı: "Three Brothers" (İstisnasız tüm dillerde orijinal korunur)
 */

const I18N_LANGUAGES = {
  "tr": {
    "name": "Türkçe",
    "code": "TR",
    "dir": "ltr"
  },
  "en": {
    "name": "English",
    "code": "EN",
    "dir": "ltr"
  },
  "de": {
    "name": "Deutsch",
    "code": "DE",
    "dir": "ltr"
  },
  "ru": {
    "name": "Русский",
    "code": "RU",
    "dir": "ltr"
  },
  "ar": {
    "name": "العربية",
    "code": "AR",
    "dir": "rtl"
  }
};

const I18N_TRANSLATIONS = {
  "tr": {
    "hero_kicker": "2014’TEN BERİ MANAVGAT — SARI SAÇ & RENK DOKUNUŞLARI",
    "tech_kicker": "PROFESYONEL RENKLENDİRME TEKNİKLERİ",
    "tech_title": "Ombre, Sombre ve Balyaj ile Saçlarınızda Doğal Işıltı",
    "tech_desc": "Manavgat Eskihisar’daki salonumuzda; Ombre, Sombre ve Balyaj uygulamalarını saçın bağ dokusunu koruyan transparan tekniklerle gerçekleştiriyoruz. Saç yapınızı yıpratmadan, yüz hatlarınıza ve ten renginize en çok yakışan sağlıklı tonları tasarlıyoruz.",
    "tech_c1_title": "Doğal Ton Uyumu",
    "tech_c1_desc": "Saç renginize ve cilt alt tonunuza kusursuz uyum sağlayan geçişler.",
    "tech_c2_title": "Bağ Dokusu Koruma",
    "tech_c2_desc": "Saç tellerini yıpranmaya karşı koruyan patentli ve kontrollü açma işlemi.",
    "tech_c3_title": "Modern Renk Tasarımı",
    "tech_c3_desc": "Ombre, Sombre, Balyaj ve Bebek Sarısı uygulamalarında uzmanlık.",
    "trust_kicker": "GÜVEN & KALİTE STANDARTLARIMIZ",
    "trust_title": "Manavgat’ta Güven Veren Saç Tasarım Deneyimi",
    "trust_desc": "Three Brothers stüdyomuzda her misafirimiz için şeffaf, samimi ve tavizsiz standartlarla çalışıyoruz. Beklentilerinizi dinliyor, saçınız için en doğru kararı birlikte veriyoruz.",
    "trust_c1_val": "2014",
    "trust_c1_title": "2014'ten Beri Tecrübe",
    "trust_c1_desc": "Yılların ustalığıyla saç yapısını bozmadan en doğru işlemi uyguluyoruz.",
    "trust_c2_val": "Analiz",
    "trust_c2_title": "Birebir Saç Analizi",
    "trust_c2_desc": "Her işlem öncesi saçın elastikiyeti ve geçmişi detaylıca değerlendirilir.",
    "trust_c3_val": "%100",
    "trust_c3_title": "%100 Orijinal Ürünler",
    "trust_c3_desc": "Dünyaca onaylı, saç sağlığını koruyan profesyonel formüller.",
    "trust_c4_val": "Hijyen",
    "trust_c4_title": "Değişmez Hijyen Standardı",
    "trust_c4_desc": "Kişiye özel steril ekipmanlar ve tertemiz butik salon ortamı.",
    "tech_p1": "Manavgat’ta doğal geçişler ve göz alıcı parlaklık arıyorsanız doğru yerdesiniz. Three Brothers olarak Ombre, Sombre, Balyaj ve Blonde uygulamalarında saç sağlığınızı koruyan profesyonel ürünler ve modern teknikler kullanıyoruz.",
    "tech_p2": "Saç tellerinizin yıpranmasına izin vermeden, yüz hatlarınıza en çok yakışan tonları birlikte belirliyoruz. Amacımız yalnızca güzel bir görünüm değil, sağlıklı ve uzun süre keyifle kullanabileceğiniz bir saç tasarımı sunmak.",
    "eskihisar_kicker": "MANAVGAT ESKİHİSAR'DA PROFESYONEL DOKUNUŞ",
    "eskihisar_title": "Yıpranmış Saçlara Transparan Boya Çözümleri",
    "eskihisar_p1": "Manavgat Eskihisar Mahallesi’ndeki salonumuzda, özellikle ağır kimyasal süreçlerden yorulmuş saçlar için uzman çözümler sunuyoruz. Saçın kendi doğal tonuna uygun transparan boya teknikleriyle yıpranmış telleri yeniden canlandırıyoruz.",
    "eskihisar_c1_title": "Doğal Ton Uyumu",
    "eskihisar_c1_desc": "Saç renginize ve cilt tonunuza uygun geçişler.",
    "eskihisar_c2_title": "Saç Sağlığı Odaklı İşlem",
    "eskihisar_c2_desc": "Yıpranmayı azaltan profesyonel yaklaşım.",
    "eskihisar_c3_title": "Modern Teknikler",
    "eskihisar_c3_desc": "Ombre, Sombre, Balyaj ve Blonde uygulamalarında uzmanlık.",
    "consult_kicker": "KİŞİYE ÖZEL STİL DANIŞMANLIĞI",
    "consult_title": "Sizi Dinliyor, Saçlarınızı Analiz Ediyoruz",
    "consult_p1": "Bizim için her misafir bir dosttur. Beklentilerinizi dinliyor, saç yapınızı inceliyor ve birlikte en doğru kararı veriyoruz. Manavgat’ın merkezinde profesyonel kuaförlük hizmetini samimiyet ve uzmanlıkla birleştiriyoruz.",
    "consult_card1_num": "2014",
    "consult_card1_label": "Yılından bu yana tecrübe",
    "consult_card2_title": "Hijyen",
    "consult_card2_label": "Salonumuzun değişmez standardı",
    "consult_card3_title": "Analiz",
    "consult_card3_label": "Her işlem öncesi kişiye özel değerlendirme",
    "consult_card4_title": "Güven",
    "consult_card4_label": "Dürüst ve şeffaf hizmet yaklaşımı",
    "why_kicker": "NEDEN THREE BROTHERS?",
    "why_title": "Manavgat’ta Güven Veren Saç Tasarım Deneyimi",
    "why_c1_num": "01",
    "why_c1_title": "Uzman Analiz",
    "why_c1_desc": "Saç stilistlerimizin 2014'ten bu yana süregelen tecrübesiyle, saç yapınızı bozmadan en doğru işlemi belirliyoruz.",
    "why_c2_num": "02",
    "why_c2_title": "Önce Hijyen",
    "why_c2_desc": "Salonumuzda hijyen kuralları bir seçenek değil, sizin sağlığınız için değişmez bir standarttır.",
    "why_c3_num": "03",
    "why_c3_title": "Güven ve Samimiyet",
    "why_c3_desc": "Saçınıza zarar verecek hiçbir adımı atmıyor, size en doğru sonucu samimiyetle sunuyoruz.",
    "page_title": "Three Brothers Bayan Kuaförü | Manavgat Sarı Saç & Butik Tasarım",
    "meta_description": "2014'ten beri Manavgat'ta Three Brothers olarak sarı saçta doğallık ve ustalık, kişiye özel renk analizi ve saç sağlığı odaklı butik kuaför deneyimi.",
    "brand_name": "Three Brothers",
    "brand_tagline": "BAYAN KUAFÖRÜ • MANAVGAT",
    "status_open": "Şu an Açık • 08:30 – 20:30",
    "status_closed": "Pazartesi Kapalı • Salı 08:30'da Açık",
    "nav_home": "Ana Sayfa",
    "nav_story": "Hakkımızda",
    "nav_services": "Hizmetlerimiz",
    "nav_reels": "Reels",
    "nav_reviews": "Yorumlar",
    "nav_gallery": "Galeri",
    "nav_contact": "İletişim",
    "drawer_services_tag": "ÖNE ÇIKAN HİZMETLER",
    "drawer_lang_tag": "DİL SEÇİMİ / LANGUAGE",
    "hero_title": "Doğal Işıltı, Kusursuz Renk.",
    "hero_desc": "Saçın sağlığını ve biyolojik yapısını koruyan profesyonel renk tasarımı ve kişiye özel açma teknikleri.",
    "hero_btn_explore": "Hizmetlerimiz",
    "hero_btn_wa": "Randevu Al (WhatsApp)",
    "floating_call": "Hemen Ara",
    "floating_wa": "WhatsApp Randevu",
    "story_kicker": "FELSEFEMİZ & YAKLAŞIMIMIZ",
    "story_title_accent": "Saçın Doğal Sağlığı ve Sanatı",
    "story_p1": "2014 yılından bu yana Manavgat’ta Three Brothers olarak bayan kuaförlüğü alanında estetik, dürüstlük ve teknik uzmanlığı bir arada sunuyoruz.",
    "story_p2": "Özellikle <strong>sarı saç, balyaj ve hassas renk açma</strong> uygulamalarında doğru teknik ve profesyonel formüllerle çalışıyor; işlem öncesi detaylı saç analizi yaparak saçı yıpratmadan hayal edilen tonlara ulaştırıyoruz. Bizim için kusursuz bir renk kadar, <strong>saçın sağlığını ve bütünlüğünü korumak</strong> da büyük önem taşıyor.",
    "story_p3": "Ten renginiz, yüz hatlarınız ve günlük kullanım alışkanlıklarınız doğrultusunda sadece size özel, doğal ve uzun süre formunu koruyan sonuçlar tasarlıyoruz.",
    "story_quote": "“2014’ten bugüne değişmeyen ilkemiz; zanaatımıza olan saygımız ve misafirlerimizin memnuniyetidir.”",
    "story_btn_wa": "Ön Görüşme ve Saç Analizi İçin İletişime Geçin",
    "story_cta": "Salonumuzu ve Hikayemizi Keşfedin",
    "standards_kicker": "HİZMET STANDARTLARIMIZ",
    "standards_title": "Neden Three Brothers?",
    "pillar1_title": "Doğru Teknik & Sıfır Yıpranma",
    "pillar1_desc": "Saçın bağ dokusunu güçlendiren patentli formüller ve kontrollü açma işlemi.",
    "pillar2_title": "Kişiye Özel Renk Analizi",
    "pillar2_desc": "Ten renginiz, göz tonunuz ve tarzınıza en uygun estetik renk uyumu.",
    "pillar3_title": "Dürüst & Şeffaf İletişim",
    "pillar3_desc": "Saçınızın ihtiyacını dinler, riskli hiçbir işleme onay vermeden en sağlıklı alternatifi sunarız.",
    "pillar4_title": "Tavizsiz Hijyen Standardı",
    "pillar4_desc": "Kişiye özel steril ekipmanlar ve tertemiz bir butik salon ortamı sunuyoruz.",
    "process_kicker": "PROFESYONEL DENEYİM & SÜREÇ",
    "process_title": "4 Adımda Kusursuz ve Sağlıklı Saç Tasarımı",
    "process_desc": "Three Brothers stüdyomuzda saç sağlığınızı asla riske atmayan, bilimsel ve sanatsal 4 aşamalı yaklaşımımız.",
    "step1_num": "01",
    "step1_title": "Saç Yapısı Analizi & Konsültasyon",
    "step1_desc": "İşlem öncesinde saçınızın geçmiş kimyasal geçmişi, elastikiyeti ve ten renginiz detaylıca incelenir.",
    "step2_num": "02",
    "step2_title": "Kişiye Özel Formülasyon",
    "step2_desc": "Saç tellerini koruyan bağ güçlendirici formüller ve yüz hatlarınıza en çok yakışan tonlar belirlenir.",
    "step3_num": "03",
    "step3_title": "Hassas & Usta Uygulama",
    "step3_desc": "Balyaj, blonde veya ombre tekniği saçın biyolojik yapısını yormadan milimetrik özenle uygulanır.",
    "step4_num": "04",
    "step4_title": "Parlaklık & Ev Bakım Rehberi",
    "step4_desc": "Rengin ışıltısını ve saçınızın ipeksi dokusunu aylarca korumanız için kişisel bakım önerileri sunulur.",
    "repair_kicker": "ÖZEL UZMANLIK & RENK DÜZELTME",
    "repair_title": "Yıpranmış ve Yorulmuş Saçlar İçin Transparan Boya Çözümleri",
    "repair_desc": "Ağır kimyasal işlemlerden yıpranmış veya matlaşmış saçlar için saçın doğal tonuna saygılı, bağ onarıcı ve transparan renklendirme teknikleriyle saça yeniden hayat veriyoruz.",
    "repair_badge1": "Doğal Ton Uyumu & Canlılık",
    "repair_badge2": "Sıfır Yıpranma & Bağ Koruma",
    "repair_badge3": "Dürüst & Şeffaf Değerlendirme",
    "repair_btn": "Ön Görüşme ve Analiz Randevusu Al",
    "reels_kicker": "INSTAGRAM VİTRİNİ",
    "reels_title": "Salonumuzdan Canlı Saç Dönüşümleri",
    "reels_desc": "Günlük stüdyo çalışmalarımız, renk açma süreçleri ve güncel saç tasarımları.",
    "insta_header_tag": "INSTAGRAM",
    "insta_username": "@threebrotherrrs",
    "insta_bio": "Three Brothers Bayan Kuaförü | Manavgat Demokrasi Bulvarı",
    "insta_follow_btn": "Takip Et",
    "insta_audio_name": "♫ Orijinal Ses — Three Brothers Manavgat",
    "insta_view_profile": "Profili Gör",
    "insta_see_more": "Instagram'da daha fazlasını gör →",
    "reels1_badge": "Bej Blonde",
    "reels1_likes": "1.482 beğenme",
    "reels1_desc": "✨ BEJ BLONDE - YAZIN TREND RENGİ ✨ Doğal geçişler, yumuşak bej tonları ve ışığı mükemmel yansıtan sarı saç sanatı.",
    "reels2_badge": "Ombre & Işıltı",
    "reels2_likes": "2.140 beğenme",
    "reels2_desc": "OMBRE ✨✨ Daha önce yaptığımız ışıltıları bu seansta bir adım daha ileri taşıdık… Memnuniyet ve saçın sağlığı her şeyden önemli.",
    "reels3_badge": "Renk & Dokunuş",
    "reels3_likes": "1.895 beğenme",
    "reels3_desc": "Doğru ton, doğru geçiş ve kusursuz dokunuş… Profesyonellik detaylarda gizli.",
    "services_kicker": "UZMANLIK ALANLARIMIZ",
    "services_title": "Kişiye Özel Profesyonel Dokunuşlar",
    "services_desc": "Renk, form ve bakımda doğal görünümü modern kuaförlük teknikleriyle buluşturuyoruz.",
    "srv1_title": "Profesyonel Balyaj & Sarı Saç",
    "srv2_title": "Kişiye Özel Renklendirme & Tonlama",
    "srv3_title": "Blonde & İpeksi Renk Tasarımı",
    "srv4_title": "Ombre & Sombre Geçişleri",
    "srv5_title": "Mikro Kapsül Kaynak",
    "srv_cut": "Kişiye Özel Kesim",
    "srv_keratin": "İpeksi Keratin Bakımı",
    "reviews_kicker": "MÜŞTERİ DENEYİMLERİ",
    "reviews_title": "Google'da 5.0 Yıldızlı Değerlendirmeler",
    "reviews_rating_text": "★★★★★ 119+ Doğrulanmış Gerçek Müşteri Yorumu",
    "reviews_maps_btn": "Google Haritalar'da Tüm Yorumları İnceleyin →",
    "r1_author": "Eda Erbey",
    "r1_tag": "Doğrulanmış Google Yorumu",
    "r1_text": "“Yaklaşık üç yıldır bu kuaföre gidiyorum. Saç kesimi, boya, cila, balyaj gibi tüm işlemlerimi burada yaptırıyorum. Emre, İsa ve Hüseyin Bey güler yüzlü ve işlerini büyük bir özenle yapıyor. Güvenle tercih edebilirsiniz.”",
    "r2_author": "Bermal Kabamaklı",
    "r2_tag": "Doğrulanmış Google Yorumu",
    "r2_text": "“O kadar iyi bir kuaför ki tamamen saçın ihtiyacına göre hareket ediyorlar. Paketli saçımdan kızıla, sonra tekrar platine sıfır kopmayla çevirdiler. Kesinlikle tavsiye ederim.”",
    "r3_author": "Başak",
    "r3_tag": "Doğrulanmış Google Yorumu",
    "r3_text": "“Bugüne kadar gittiğim en iyi kuaför deneyimlerinden biriydi. Özellikle Bilge Hanım işini büyük bir özenle yapan harika bir uzman. Sonuç tam hayal ettiğim gibi oldu.”",
    "r4_author": "Yağmur Evren",
    "r4_tag": "Doğrulanmış Google Yorumu",
    "r4_text": "“Saçlarım yanlış kuaför seçimi ile sap sarı ve aşırı yıpranmıştı. Saçlarımı o halden toparlayıp eskisi gibi sağlıklı ve parlak hale getirdiler. Emre Bey ve Bilge Hanım'ın ilgisine bayılıyorum.”",
    "r5_author": "Burcu Özen",
    "r5_tag": "Doğrulanmış Google Yorumu",
    "r5_text": "“3 yıldır aynı kuaföre gidiyorum, yaptırdığım ombrelerin hepsi çok güzel oldu. Kesimden sonra uzamayan saçım burada kestirdikten sonra uzamaya başladı.”",
    "r6_author": "Yeşim Aydoğan",
    "r6_tag": "Doğrulanmış Google Yorumu",
    "r6_text": "“Manavgat’ta tanıdığım en iyi bayan kuaförlerinden biri. Ortam çok temiz ve sıcak. Saçım için verdiği öneriler çok doğruydu, kesinlikle tek adresim.”",
    "gallery_kicker": "Salonumuzdan Kareler",
    "gallery_title": "İlham Veren Saç Tasarımları",
    "gallery_desc": "Three Brothers stüdyosunda tamamlanan en yeni renklendirme ve stil çalışmaları.",
    "faq_kicker": "MERAK EDİLENLER",
    "faq_title": "Sıkça Sorulan Sorular",
    "faq_desc": "Three Brothers salonumuzdaki hizmetler, saç analizi ve randevu süreci hakkında en çok sorulan sorular.",
    "faq1_q": "Balyaj ve Sombre renklendirme işlemleri ne kadar sürer?",
    "faq1_a": "Saçınızın uzunluğuna, yoğunluğuna ve mevcut tonuna bağlı olarak işlem süresi ortalama 3 ile 5 saat arasında değişmektedir. Randevu öncesinde saç analizi yapılarak net süre paylaşılır.",
    "faq2_q": "Açma ve sarışınlık işlemlerinde saçım yıpranır mı?",
    "faq2_a": "Biyolojik saç sağlığı protokolümüz kapsamında, açma işlemlerinde bağ koruyucu ve onarıcı profesyonel ürünler kullanıyoruz. Saçınızın sağlığını riske atacak hiçbir agresif işlemi onayınız olmadan uygulamıyoruz.",
    "faq3_q": "Mikro kapsül kaynak ne kadar süre kullanılabilir?",
    "faq3_a": "Doğru bakım ile mikro kapsül kaynaklarımız 2.5 - 4 ay boyunca konforla kullanılabilir. Süre sonunda saçınıza zarar vermeden çıkarılır ve yeniden takılabilir.",
    "faq4_q": "Randevuya gelmeden önce saçımı yıkamalı mıyım?",
    "faq4_a": "Özellikle açma ve renklendirme işlemlerinde saç derinizin doğal yağ tabakasının korunması önerilir. Bu nedenle randevu günü saçınızı yıkamadan gelmeniz tavsiye edilir.",
    "faq5_q": "İşlem öncesinde saç analizi ve ön görüşme yapıyor musunuz?",
    "faq5_a": "Evet. Misafirlerimizin saç yapısını, geçmiş boya/açma geçmişini ve saçın elastikiyetini analiz etmeden hiçbir ağır işleme başlamıyoruz. Saç sağlığını tehlikeye atacak bir durum varsa dürüstçe alternatif çözümler öneriyoruz.",
    "contact_kicker": "RANDEVU & DANIŞMANLIK",
    "contact_title": "Saçınızın İhtiyacını Birlikte Belirleyelim",
    "contact_desc": "Ten renginize, saçınızın geçmiş işlemlerine ve sağlığına göre en doğru tonu planlamak için stüdyomuzdan ön görüşme randevusu alabilirsiniz.",
    "c_btn_wa": "WhatsApp ile Randevu Al",
    "c_btn_call": "Hemen Arayın",
    "c_btn_maps": "Yol Tarifi Al",
    "c_hours_title": "ÇALIŞMA SAATLERİ",
    "c_hours_val": "Salı – Pazar: 08:30 – 20:30 (Pazartesi Kapalı)",
    "c_phone_title": "TELEFON",
    "c_address_title": "ADRES",
    "c_address_val": "Bahçelievler Mah. Demokrasi Blv. No: 8Z1, Manavgat / Antalya",
    "footer_tagline": "2014'ten beri Manavgat'ta sarı saç, renk uzmanlığı ve kadın kuaförlüğünde zarafetin adresi.",
    "footer_nav_title": "Hızlı Menü",
    "footer_spec_title": "Uzmanlıklarımız",
    "footer_contact_title": "İletişim & Lokasyon",
    "footer_hours": "Salı – Pazar: 08:30 – 20:30 (Pazartesi Kapalı)",
    "footer_address": "Bahçelievler Mah. Demokrasi Blv. No: 8Z1, Manavgat / Antalya",
    "footer_rights": "Tüm hakları saklıdır.",
    "about_page_kicker": "HAKKIMIZDA",
    "about_page_headline": "Üç Kardeş, Tek Tutku: Güzel Saçlar",
    "about_page_p1": "2014 yılından bu yana üç kardeş olarak bayan kuaförlüğü sektöründe hizmet veriyor, yılların verdiği tecrübe ve birikimle her geçen gün kendimizi geliştirmeye devam ediyoruz.",
    "about_page_p2": "Özellikle <em>sarı saç ve renk uygulamalarında</em> kendimize güveniyor, doğru teknik ve profesyonel dokunuşlarla saçın güzelliğini ortaya çıkarmayı hedefliyoruz. Bizim için güzel bir sonuç kadar, saçın sağlığını ve bütünlüğünü korumak da büyük önem taşıyor.",
    "about_page_p3": "Her müşterimizin saç yapısını, ten rengini, tarzını ve beklentisini ayrı ayrı değerlendiriyor; kişiye özel uygulamalarla doğal, ışıltılı ve uzun süre keyifle kullanılabilecek sonuçlar elde etmeye özen gösteriyoruz.",
    "about_stat1_label": "Yıllık Salon Tecrübesi",
    "about_stat2_title": "Önce Sağlık",
    "about_stat2_label": "Yıpratmayan Açma & Bakım",
    "about_page_cta": "WhatsApp ile İletişime Geçin",
    "health_kicker": "ÖNCE SAĞLIK, SONRA GÜZELLİK",
    "health_title": "Biyolojik Saç Sağlığı & Şeffaf Teşhis Standartları",
    "health_p1": "Three Brothers stüdyomuzda renklendirme ve açma işlemlerine geçmeden önce saç telinin elastikiyetini, nem dengesini ve geçmiş kimyasal geçmişini mikroskobik titizlikle değerlendiriyoruz. Saçın biyolojik yapısını riske atacak hiçbir agresif işleme onay vermiyoruz.",
    "health_p2": "Dürüst teşhis ve bağ güçlendirici koruyucu protokollerle, saçınızı yıpratmadan sürdürülebilir bir parlaklık ve sağlıklı uzayan saçlar hedefliyoruz.",
    "health_btn": "Ön Görüşme ve Analiz Randevusu",
    "felsefe_about_btn": "Hakkımızda & Hikayemiz",
    "about_quote": "“2014’ten bugüne değişmeyen tek şeyimiz; işimize olan tutkumuz ve müşterilerimizin memnuniyeti.”",
    "about_page_p4": "Üç kardeş olarak çıktığımız bu yolda, tecrübemiz, enerjimiz ve özellikle <em>sarı saç konusundaki iddiamızla</em> güzelliğinize profesyonel bir dokunuş katmak için buradayız.",
    "about_motto_brand": "Three Brothers Bayan Kuaförü",
    "about_motto_text": "Tecrübe, tutku ve sarı saçta profesyonellik.",
    "nav_process": "Süreç",
    "nav_faq": "SSS",
    "nav_book": "Randevu Al",
    "nav_call": "Hemen Ara"
  },
  "en": {
    "hero_kicker": "SINCE 2014 IN MANAVGAT — BLONDE & COLOR EXPERTISE",
    "tech_kicker": "PROFESSIONAL COLORING TECHNIQUES",
    "tech_title": "Natural Glow with Ombre, Sombre and Balayage",
    "tech_desc": "In our Manavgat Eskihisar studio, we perform Ombre, Sombre, and Balayage using bond-protecting transparent techniques. We craft healthy, luminous tones that enhance your facial features and skin complexion without compromising hair integrity.",
    "tech_c1_title": "Natural Tone Harmony",
    "tech_c1_desc": "Flawless transitions tailored to your complexion and natural undertones.",
    "tech_c2_title": "Bond Structure Protection",
    "tech_c2_desc": "Controlled lightening methodology that preserves the hair's internal fibers.",
    "tech_c3_title": "Modern Color Artistry",
    "tech_c3_desc": "Specialized mastery in Ombre, Sombre, Balayage, and Baby Blonde shades.",
    "trust_kicker": "OUR TRUST & QUALITY STANDARDS",
    "trust_title": "A Trusted Hair Design Experience in Manavgat",
    "trust_desc": "At Three Brothers studio, we work with transparent, welcoming, and uncompromising standards for every guest. We listen attentively to your wishes and decide on the healthiest path together.",
    "trust_c1_val": "2014",
    "trust_c1_title": "Experience Since 2014",
    "trust_c1_desc": "Years of dedicated craftsmanship delivering optimal results without hair stress.",
    "trust_c2_val": "Analysis",
    "trust_c2_title": "1-on-1 Hair Analysis",
    "trust_c2_desc": "Detailed pre-treatment evaluation of hair elasticity and chemical history.",
    "trust_c3_val": "100%",
    "trust_c3_title": "100% Genuine Products",
    "trust_c3_desc": "Globally recognized formulas that actively protect and nourish hair health.",
    "trust_c4_val": "Hygiene",
    "trust_c4_title": "Strict Hygiene Standard",
    "trust_c4_desc": "Individually sterilized tools and an immaculate boutique salon environment.",
    "tech_p1": "If you are looking for seamless transitions and eye-catching radiance in Manavgat, you are in the right place. At Three Brothers, we use professional products and modern techniques that preserve hair health during Ombre, Sombre, Balayage and Blonde applications.",
    "tech_p2": "Without compromising your hair's integrity, we determine the tones that best harmonize with your facial features. Our aim is to deliver not just beautiful looks, but a healthy and long-lasting hair design you can enjoy.",
    "eskihisar_kicker": "PROFESSIONAL TOUCH IN MANAVGAT ESKIHISAR",
    "eskihisar_title": "Transparent Dye Solutions for Damaged Hair",
    "eskihisar_p1": "In our salon in Manavgat Eskihisar, we offer specialized solutions for hair fatigued by heavy chemical procedures. With transparent dyeing techniques tailored to your hair's natural undertones, we revitalize fragile strands.",
    "eskihisar_c1_title": "Natural Tone Harmony",
    "eskihisar_c1_desc": "Transitions suited perfectly to your hair and skin tone.",
    "eskihisar_c2_title": "Hair Health-Centric Process",
    "eskihisar_c2_desc": "Professional methodology minimizing breakage and stress.",
    "eskihisar_c3_title": "Modern Techniques",
    "eskihisar_c3_desc": "Mastery in Ombre, Sombre, Balayage, and Blonde styling.",
    "consult_kicker": "PERSONALIZED STYLE CONSULTATION",
    "consult_title": "We Listen to You & Analyze Your Hair",
    "consult_p1": "To us, every guest is a dear friend. We listen to your desires, assess your hair's condition, and decide on the best path together. We blend professional salon artistry with genuine care in the heart of Manavgat.",
    "consult_card1_num": "2014",
    "consult_card1_label": "Years of proven expertise",
    "consult_card2_title": "Hygiene",
    "consult_card2_label": "Uncompromising salon cleanliness",
    "consult_card3_title": "Analysis",
    "consult_card3_label": "Custom hair evaluation before every step",
    "consult_card4_title": "Trust",
    "consult_card4_label": "Honest and transparent communication",
    "why_kicker": "WHY THREE BROTHERS?",
    "why_title": "A Trusted Hair Design Experience in Manavgat",
    "why_c1_num": "01",
    "why_c1_title": "Expert Analysis",
    "why_c1_desc": "With expertise honed since 2014, our stylists determine the optimal treatment without compromising hair structure.",
    "why_c2_num": "02",
    "why_c2_title": "Hygiene First",
    "why_c2_desc": "Hygiene in our salon is not an option, it is an immutable standard for your safety and comfort.",
    "why_c3_num": "03",
    "why_c3_title": "Trust & Sincerity",
    "why_c3_desc": "We never take steps that risk damaging your hair, providing sincere guidance and top results.",
    "page_title": "Three Brothers Women's Hairdresser | Manavgat Blonde & Boutique Design",
    "meta_description": "Since 2014, as Three Brothers in Manavgat: excellence in blonde hair, bespoke color analysis, and healthy boutique styling.",
    "brand_name": "Three Brothers",
    "brand_tagline": "WOMEN'S HAIRDRESSER • MANAVGAT",
    "status_open": "Open Now • 08:30 – 20:30",
    "status_closed": "Closed Mondays • Tue at 08:30",
    "nav_home": "Home",
    "nav_story": "About Us",
    "nav_services": "Services",
    "nav_reels": "Reels",
    "nav_reviews": "Reviews",
    "nav_gallery": "Gallery",
    "nav_contact": "Contact",
    "drawer_services_tag": "FEATURED SERVICES",
    "drawer_lang_tag": "LANGUAGE / DİL",
    "hero_title": "Natural Radiance, Flawless Color.",
    "hero_desc": "Professional color design and bespoke lightening techniques that protect the hair's biological health.",
    "hero_btn_explore": "Our Services",
    "hero_btn_wa": "Book on WhatsApp",
    "floating_call": "Call Now",
    "floating_wa": "WhatsApp Booking",
    "story_kicker": "OUR PHILOSOPHY & CRAFT",
    "story_title_accent": "Natural Hair Health and Artistry",
    "story_p1": "Since 2014 in Manavgat, as Three Brothers we combine aesthetics, honesty, and master craftsmanship in women's hairdressing.",
    "story_p2": "Especially in <strong>blonde, balayage, and delicate lightening</strong>, we employ specialized formulas and thorough diagnostics to achieve your dream tone without damaging the hair fiber. <strong>Preserving hair health and integrity</strong> is our highest priority.",
    "story_p3": "We design tailored, luminous results that complement your skin tone, facial contours, and lifestyle.",
    "story_quote": "“Since 2014, our guiding principle remains respect for our craft and the pure satisfaction of our guests.”",
    "story_btn_wa": "Contact Us for Consultation & Hair Analysis",
    "story_cta": "Discover Our Salon & Story",
    "standards_kicker": "OUR SERVICE STANDARDS",
    "standards_title": "Why Three Brothers?",
    "pillar1_title": "Proper Technique & Zero Damage",
    "pillar1_desc": "Bond-protecting formulas and carefully controlled lightening procedures.",
    "pillar2_title": "Bespoke Color Analysis",
    "pillar2_desc": "Aesthetic color harmonies tailored precisely to your skin tone and style.",
    "pillar3_title": "Honest & Transparent Advice",
    "pillar3_desc": "We listen to your hair's needs and recommend only the healthiest solutions.",
    "pillar4_title": "Immaculate Hygiene",
    "pillar4_desc": "We maintain personalized sterilized tools and a clean boutique salon atmosphere.",
    "process_kicker": "PROFESSIONAL EXPERIENCE & PROCESS",
    "process_title": "Flawless & Healthy Hair Design in 4 Steps",
    "process_desc": "Our 4-step scientific and artistic methodology at Three Brothers that never compromises your hair health.",
    "step1_num": "01",
    "step1_title": "Hair Structure Analysis & Consultation",
    "step1_desc": "Your hair's chemical history, elasticity, and skin undertones are thoroughly evaluated before any procedure.",
    "step2_num": "02",
    "step2_title": "Customized Formulation",
    "step2_desc": "Bond-strengthening formulas and shades that best flatter your facial features are selected.",
    "step3_num": "03",
    "step3_title": "Precise & Masterful Application",
    "step3_desc": "Balayage, blonde, or ombre techniques are applied with millimeter precision without stressing the hair.",
    "step4_num": "04",
    "step4_title": "Shine Lock & Home Care Guide",
    "step4_desc": "Personal care recommendations are provided so you can enjoy your color's radiant shine for months.",
    "repair_kicker": "SPECIALIZED EXPERTISE & COLOR CORRECTION",
    "repair_title": "Transparent Color Solutions for Damaged Hair",
    "repair_desc": "For hair tired of harsh chemicals or dull tones, we breathe new life into your hair using bond-rebuilding and transparent glossing techniques respectful of your natural shades.",
    "repair_badge1": "Natural Shade Harmony & Vitality",
    "repair_badge2": "Zero Damage & Bond Protection",
    "repair_badge3": "Honest & Transparent Assessment",
    "repair_btn": "Book Consultation & Hair Analysis",
    "reels_kicker": "INSTAGRAM SHOWCASE",
    "reels_title": "Live Hair Transformations From Our Studio",
    "reels_desc": "Daily studio artistry, lightening sessions, and modern hair color inspirations.",
    "insta_header_tag": "INSTAGRAM",
    "insta_username": "@threebrotherrrs",
    "insta_bio": "Three Brothers Women's Hairdresser | Manavgat Demokrasi Boulevard",
    "insta_follow_btn": "Follow",
    "insta_audio_name": "♫ Original Audio — Three Brothers Manavgat",
    "insta_view_profile": "View Profile",
    "insta_see_more": "See more on Instagram →",
    "reels1_badge": "Beige Blonde",
    "reels1_likes": "1,482 likes",
    "reels1_desc": "✨ BEIGE BLONDE — SUMMER TREND ✨ Soft transitions, elegant beige undertones, and shimmering blonde artistry.",
    "reels2_badge": "Ombre & Shine",
    "reels2_likes": "2,140 likes",
    "reels2_desc": "OMBRE ✨✨ Elevating multidimensional highlights while prioritizing maximum hair strength and satisfaction.",
    "reels3_badge": "Color & Finish",
    "reels3_likes": "1,895 likes",
    "reels3_desc": "The right tone, seamless transitions, and flawless styling… Mastery lies in every detail.",
    "services_kicker": "OUR SPECIALTIES",
    "services_title": "Bespoke Professional Hair Design",
    "services_desc": "Harmonizing natural aesthetics with contemporary hairdressing techniques.",
    "srv1_title": "Professional Balayage & Blonde",
    "srv2_title": "Custom Coloring & Toning",
    "srv3_title": "Blonde & Silky Color Design",
    "srv4_title": "Ombre & Sombre Transitions",
    "srv5_title": "Micro Capsule Hair Extensions",
    "srv_cut": "Bespoke Haircut",
    "srv_keratin": "Silky Keratin Treatment",
    "reviews_kicker": "CLIENT EXPERIENCES",
    "reviews_title": "5.0 Star Ratings on Google",
    "reviews_rating_text": "★★★★★ 119+ Verified Real Client Reviews",
    "reviews_maps_btn": "View All Reviews on Google Maps →",
    "r1_author": "Eda Erbey",
    "r1_tag": "Verified Google Review",
    "r1_text": "“I have been coming to this salon for about three years. Haircut, coloring, gloss, balayage—all done with immense care and friendliness by Emre, İsa, and Hüseyin. Highly recommended.”",
    "r2_author": "Bermal Kabamaklı",
    "r2_tag": "Verified Google Review",
    "r2_text": "“Such an exceptional team that listens to your hair's true needs. They transitioned my colored hair to red, and back to platinum with zero breakage. Absolutely recommend.”",
    "r3_author": "Başak",
    "r3_tag": "Verified Google Review",
    "r3_text": "“One of the best hair studio experiences I've ever had. Especially Bilge Hanım is an outstanding specialist with great attention to detail. The result was exactly what I dreamed of.”",
    "r4_author": "Yağmur Evren",
    "r4_tag": "Verified Google Review",
    "r4_text": "“My hair was extremely damaged from a previous salon. They restored it to be healthy, vibrant, and silky. I adore the care and expertise of Emre Bey and Bilge Hanım.”",
    "r5_author": "Burcu Özen",
    "r5_tag": "Verified Google Review",
    "r5_text": "“I’ve been visiting for 3 years, and every ombre has turned out stunning. Hair that wouldn't grow before started thriving after their precision cuts.”",
    "r6_author": "Yeşim Aydoğan",
    "r6_tag": "Verified Google Review",
    "r6_text": "“One of the best women's hair salons in Manavgat. Immaculate, welcoming atmosphere and honest expert advice. Truly my number one address.”",
    "gallery_kicker": "STUDIO GALLERY",
    "gallery_title": "Inspiring Hair Designs",
    "gallery_desc": "Latest coloring and styling creations from the Three Brothers studio in Manavgat.",
    "faq_kicker": "FREQUENTLY ASKED",
    "faq_title": "Frequently Asked Questions",
    "faq_desc": "Most frequently asked questions regarding our salon services, hair analysis, and appointment process.",
    "faq1_q": "How long do Balayage and Sombre coloring treatments take?",
    "faq1_a": "Depending on hair length, thickness, and base color, the process typically takes between 3 to 5 hours. An accurate duration is determined during your pre-treatment consultation.",
    "faq2_q": "Will my hair get damaged during lightening and blonde treatments?",
    "faq2_a": "Under our biological hair health protocol, we utilize bond-protecting and restorative professional formulations during all lightening services. We never perform aggressive steps without your explicit consent.",
    "faq3_q": "How long can micro capsule hair extensions be worn?",
    "faq3_a": "With proper care, our micro capsule extensions offer comfortable wear for 2.5 to 4 months. They can then be safely removed and reapplied without damaging your natural hair.",
    "faq4_q": "Should I wash my hair before coming to my appointment?",
    "faq4_a": "Especially for lightening and coloring treatments, preserving your scalp's natural lipid barrier is recommended. We advise coming in with unwashed hair on the day of your service.",
    "faq5_q": "Do you perform a consultation and hair analysis prior to treatments?",
    "faq5_a": "Yes. We never initiate chemical services without thoroughly evaluating your hair's history, porosity, and elasticity. If hair health is at risk, we transparently suggest restorative alternatives.",
    "contact_kicker": "APPOINTMENT & CONSULTATION",
    "contact_title": "Let's Determine Your Hair Needs Together",
    "contact_desc": "You can book a consultation at our studio to plan the ideal shade according to your skin tone, hair history, and overall health.",
    "c_btn_wa": "Book via WhatsApp",
    "c_btn_call": "Call Us Directly",
    "c_btn_maps": "Get Directions",
    "c_hours_title": "WORKING HOURS",
    "c_hours_val": "Tue – Sun: 08:30 – 20:30 (Closed Mondays)",
    "c_phone_title": "PHONE",
    "c_address_title": "ADDRESS",
    "c_address_val": "Bahçelievler Mah. Demokrasi Blv. No: 8Z1, Manavgat / Antalya",
    "footer_tagline": "Since 2014, your premier boutique destination for blonde mastery and elegant women's styling in Manavgat.",
    "footer_nav_title": "Quick Links",
    "footer_spec_title": "Specialties",
    "footer_contact_title": "Contact & Location",
    "footer_hours": "Tue – Sun: 08:30 – 20:30 (Closed Mondays)",
    "footer_address": "Bahçelievler Mah. Demokrasi Blv. No: 8Z1, Manavgat / Antalya",
    "footer_rights": "All rights reserved.",
    "about_page_kicker": "ABOUT US",
    "about_page_headline": "Three Brothers, One Passion: Beautiful Hair",
    "about_page_p1": "Since 2014, as three brothers, we have been serving in the women's hairdressing industry, continuously refining our craft with years of collective experience and dedication.",
    "about_page_p2": "We take exceptional pride in <em>blonde hair and bespoke coloring</em>, revealing the natural radiance of your hair through master techniques and gentle care. Protecting the health and integrity of your hair is as vital to us as achieving a stunning result.",
    "about_page_p3": "We evaluate each client's hair texture, skin tone, personal style, and desires individually, creating customized, glowing results that last effortlessly.",
    "about_stat1_label": "Years of Studio Mastery",
    "about_stat2_title": "Health First",
    "about_stat2_label": "Gentle Lightening & Care",
    "about_page_cta": "Contact Us on WhatsApp",
    "health_kicker": "HEALTH FIRST, BEAUTY FOLLOWS",
    "health_title": "Biological Hair Integrity & Transparent Consultation",
    "health_p1": "At Three Brothers Studio, before performing any lightening or coloring, we meticulously assess hair elasticity, moisture balance, and chemical history. We never approve aggressive treatments that jeopardize biological hair integrity.",
    "health_p2": "With honest diagnostics and bond-strengthening protocols, we deliver luminous, sustainable radiance and healthy growth without damage.",
    "health_btn": "Book Free Consultation & Analysis",
    "felsefe_about_btn": "About Us & Our Story",
    "about_quote": "“The one thing that has never changed since 2014 is our passion for our craft and our clients' satisfaction.”",
    "about_page_p4": "On this journey that began as three brothers, we are here to add a signature touch to your beauty with our experience, energy, and renowned expertise in blonde hair artistry.",
    "about_motto_brand": "Three Brothers Hair Studio",
    "about_motto_text": "Experience, passion, and uncompromising expertise in blonde hair.",
    "nav_process": "Process",
    "nav_faq": "FAQ",
    "nav_book": "Book Appointment",
    "nav_call": "Call Now"
  },
  "de": {
    "hero_kicker": "SEIT 2014 IN MANAVGAT — BLOND- & FARBEXPERTISE",
    "tech_kicker": "PROFESSIONELLE FÄRBETECHNIKEN",
    "tech_title": "Natürlicher Glanz mit Ombré, Sombré und Balayage",
    "tech_desc": "In unserem Salon in Manavgat Eskihisar führen wir Ombré, Sombré und Balayage mit strukturschonenden, transparenten Methoden durch. Wir gestalten gesunde, strahlende Nuancen, die harmonisch zu Ihrem Hautton passen.",
    "tech_c1_title": "Natürliche Farbharmonie",
    "tech_c1_desc": "Fließende Übergänge abgestimmt auf Haut- und Naturton.",
    "tech_c2_title": "Haarfaser-Schutz",
    "tech_c2_desc": "Kontrollierte Aufhellung zum Erhalt der biologischen Haarstruktur.",
    "tech_c3_title": "Modernes Farbdesign",
    "tech_c3_desc": "Expertise in Ombré, Sombré, Balayage und feinsten Blondtönen.",
    "trust_kicker": "QUALITÄTS- & VERTRAUENSSTANDARDS",
    "trust_title": "Ihr vertrauensvoller Partnersalon in Manavgat",
    "trust_desc": "Im Three Brothers Studio arbeiten wir mit transparenten und kompromisslosen Standards. Wir hören Ihnen genau zu und finden gemeinsam die schönste und gesündeste Lösung.",
    "trust_c1_val": "2014",
    "trust_c1_title": "Erfahrung seit 2014",
    "trust_c1_desc": "Langjährige Fachkompetenz für beste Ergebnisse ohne Haarschäden.",
    "trust_c2_val": "Analyse",
    "trust_c2_title": "Individuelle Haaranalyse",
    "trust_c2_desc": "Sorgfältige Voruntersuchung von Elastizität und Haargeschichte.",
    "trust_c3_val": "100%",
    "trust_c3_title": "100% Originalprodukte",
    "trust_c3_desc": "Weltweit anerkannte Pflege- und Farbformeln höchster Güte.",
    "trust_c4_val": "Hygiene",
    "trust_c4_title": "Höchster Hygienestandard",
    "trust_c4_desc": "Sterilisierte Einzelwerkzeuge und makellose Salonsauberkeit.",
    "tech_p1": "Wenn Sie in Manavgat nach nahtlosen Übergängen und strahlendem Glanz suchen, sind Sie bei Three Brothers genau richtig. Wir verwenden haarschonende Spitzenprodukte und moderne Methoden für Ombré, Sombré, Balayage und Blond-Nuancen.",
    "tech_p2": "Ohne Ihr Haar zu strapazieren, bestimmen wir gemeinsam die Farbtöne, die ideal mit Ihren Gesichtszügen harmonieren. Unser Ziel ist ein gesundes und langanhaltendes Haarergebnis.",
    "eskihisar_kicker": "PROFESSIONELLE HANDWERKSKUNST IN ESKIHISAR",
    "eskihisar_title": "Transparente Farblösungen für strapaziertes Haar",
    "eskihisar_p1": "In unserem Salon in Manavgat Eskihisar bieten wir maßgeschneiderte Lösungen für chemisch beanspruchtes Haar. Mit transparenten Tönungstechniken beleben wir strapazierte Haarfasern sanft wieder.",
    "eskihisar_c1_title": "Natürliche Farbharmonie",
    "eskihisar_c1_desc": "Fließende Übergänge abgestimmt auf Haut- und Naturton.",
    "eskihisar_c2_title": "Fokus Haargesundheit",
    "eskihisar_c2_desc": "Schonende Technik zur Vermeidung von Haarbruch.",
    "eskihisar_c3_title": "Moderne Techniken",
    "eskihisar_c3_desc": "Spezialisierung auf Ombré, Sombré, Balayage und Blond.",
    "consult_kicker": "INDIVIDUELLE STILBERATUNG",
    "consult_title": "Wir hören zu & analysieren Ihr Haar",
    "consult_p1": "Jede Kundin ist für uns wie ein persönlicher Gast. Wir nehmen uns Zeit für Ihre Wünsche, prüfen die Haarstruktur und finden gemeinsam die optimale Lösung im Zentrum von Manavgat.",
    "consult_card1_num": "2014",
    "consult_card1_label": "Erfahrung & Tradition seit 2014",
    "consult_card2_title": "Hygiene",
    "consult_card2_label": "Höchste Sauberkeit & Sterilität",
    "consult_card3_title": "Analyse",
    "consult_card3_label": "Individuelle Beurteilung vor jedem Schritt",
    "consult_card4_title": "Vertrauen",
    "consult_card4_label": "Ehrliche und transparente Betreuung",
    "why_kicker": "WARUM THREE BROTHERS?",
    "why_title": "Ihr vertrauensvoller Partnersalon in Manavgat",
    "why_c1_num": "01",
    "why_c1_title": "Expertenanalyse",
    "why_c1_desc": "Dank langjähriger Praxis seit 2014 finden unsere Stylisten stets die sicherste und schönste Lösung für Ihr Haar.",
    "why_c2_num": "02",
    "why_c2_title": "Hygiene an erster Stelle",
    "why_c2_desc": "Strenge Hygiene ist bei uns kein Kompromiss, sondern fester Salonstandard für Ihr Wohlbefinden.",
    "why_c3_num": "03",
    "why_c3_title": "Vertrauen & Herzlichkeit",
    "why_c3_desc": "Wir vermeiden schädigende Schritte und garantieren ehrliche, erstklassige Ergebnisse.",
    "page_title": "Three Brothers Damencoiffeur | Manavgat Blond & Farbdesign",
    "meta_description": "Seit 2014 in Manavgat als Three Brothers: Spezialist für strahlendes Blond, Farbanalyse und haarschonende Behandlungen.",
    "brand_name": "Three Brothers",
    "brand_tagline": "DAMENCOIFFEUR • MANAVGAT",
    "status_open": "Jetzt Geöffnet • 08:30 – 20:30",
    "status_closed": "Montags Geschlossen • Di ab 08:30",
    "nav_home": "Startseite",
    "nav_story": "Über Uns",
    "nav_services": "Leistungen",
    "nav_reels": "Reels",
    "nav_reviews": "Bewertungen",
    "nav_gallery": "Galerie",
    "nav_contact": "Kontakt",
    "drawer_services_tag": "UNSERE LEISTUNGEN",
    "drawer_lang_tag": "SPRACHAUSWAHL / LANGUAGE",
    "hero_title": "Natürlicher Glanz, Perfekte Farbe.",
    "hero_desc": "Professionelles Farbdesign und schonende Aufhellungstechniken für gesundes, lebendiges Haar.",
    "hero_btn_explore": "Unsere Leistungen",
    "hero_btn_wa": "Termin per WhatsApp",
    "floating_call": "Direkt Anrufen",
    "floating_wa": "WhatsApp Termin",
    "story_kicker": "PHILOSOPHIE & HANDWERK",
    "story_title_accent": "Natürliche Haargesundheit und Ästhetik",
    "story_p1": "Seit 2014 bieten wir als Three Brothers erstklassige Friseurdienstleistungen in Manavgat mit langjähriger Erfahrung.",
    "story_p2": "Besonders bei <strong>Blond, Balayage und feinen Farbaufhellungen</strong> setzen wir auf schonende Techniken. Die <strong>Gesundheit und Struktur Ihres Haares</strong> steht für uns an erster Stelle.",
    "story_p3": "Abgestimmt auf Ihren Hautton und Typ kreieren wir langanhaltende, natürliche und strahlende Farbergebnisse.",
    "story_quote": "„Seit 2014 leitet uns der Respekt vor unserem Handwerk und das uneingeschränkte Vertrauen unserer Kundinnen.“",
    "story_btn_wa": "Kontakt für Beratung & Haaranalyse",
    "story_cta": "Unseren Salon Entdecken",
    "standards_kicker": "UNSERE STANDARDS",
    "standards_title": "Warum Three Brothers?",
    "pillar1_title": "Schonende Technik & Null Haarbruch",
    "pillar1_desc": "Strukturstärkende Formeln und kontrollierte Aufhellung für gesundes Haar.",
    "pillar2_title": "Individuelle Farbanalyse",
    "pillar2_desc": "Perfekte Farbharmonien, abgestimmt auf Ihren Teint und persönlichen Stil.",
    "pillar3_title": "Ehrliche & Transparente Beratung",
    "pillar3_desc": "Wir hören auf die Bedürfnisse Ihres Haares und empfehlen die gesündeste Lösung.",
    "pillar4_title": "Kompromisslose Hygiene",
    "pillar4_desc": "Sterilisierte Werkzeuge und ein einladendes, sauberes Salonambiente.",
    "process_kicker": "PROFESSIONELLER ABLAUF & ERLEBNIS",
    "process_title": "Makelloses & gesundes Haardesign in 4 Schritten",
    "process_desc": "Unser wissenschaftlicher und künstlerischer 4-Stufen-Ansatz bei Three Brothers, der Ihre Haargesundheit niemals gefährdet.",
    "step1_num": "01",
    "step1_title": "Haaranalyse & persönliche Beratung",
    "step1_desc": "Vor der Behandlung werden chemische Vorgeschichte, Elastizität und Ihr Hautton detailliert analysiert.",
    "step2_num": "02",
    "step2_title": "Individuelle Rezeptur",
    "step2_desc": "Bindungsstärkende Formeln und perfekt auf Ihre Gesichtszüge abgestimmte Farbnuancen werden gewählt.",
    "step3_num": "03",
    "step3_title": "Präzise & meisterhafte Ausführung",
    "step3_desc": "Balayage-, Blond- oder Ombre-Techniken werden mit höchster Sorgfalt schonend eingearbeitet.",
    "step4_num": "04",
    "step4_title": "Glanz-Versiegelung & Pflegeanleitung",
    "step4_desc": "Individuelle Pflegehinweise sichern langanhaltenden Glanz und Geschmeidigkeit für viele Monate.",
    "repair_kicker": "SPEZIALEXPERTISE & FARBKORREKTUR",
    "repair_title": "Transparente Farblösungen für strapaziertes Haar",
    "repair_desc": "Für durch chemische Behandlungen ermüdetes Haar verleihen wir mit bindungsstärkenden und transparenten Glanztechniken neue Vitalität.",
    "repair_badge1": "Natürliche Farbharmonie & Strahlkraft",
    "repair_badge2": "Null Haarschädigung & Bindungsschutz",
    "repair_badge3": "Ehrliche & transparente Beratung",
    "repair_btn": "Beratung & Haaranalyse vereinbaren",
    "reels_kicker": "INSTAGRAM EINBLICKE",
    "reels_title": "Haarverwandlungen aus Unserem Studio",
    "reels_desc": "Tägliche Arbeiten, Farbaufhellungen und moderne Stylings.",
    "insta_header_tag": "INSTAGRAM",
    "insta_username": "@threebrotherrrs",
    "insta_bio": "Three Brothers Damencoiffeur | Manavgat Demokrasi Boulevard",
    "insta_follow_btn": "Folgen",
    "insta_audio_name": "♫ Originalton — Three Brothers Manavgat",
    "insta_view_profile": "Profil Ansehen",
    "insta_see_more": "Mehr auf Instagram ansehen →",
    "reels1_badge": "Beige Blond",
    "reels1_likes": "1.482 'Gefällt mir'",
    "reels1_desc": "✨ BEIGE BLOND — DER SOMMERTREND ✨ Weiche Verläufe, elegante Beigetöne und funkelnder Blondglanz.",
    "reels2_badge": "Ombré & Glanz",
    "reels2_likes": "2.140 'Gefällt mir'",
    "reels2_desc": "OMBRÉ ✨✨ Brillante Strähnentechniken mit maximalem Haarschutz und traumhaftem Ergebnis.",
    "reels3_badge": "Farbe & Finish",
    "reels3_likes": "1.895 'Gefällt mir'",
    "reels3_desc": "Der perfekte Farbton und fließende Übergänge… Perfektion liegt im Detail.",
    "services_kicker": "SPEZIALISIERUNGEN",
    "services_title": "Maßgeschneidertes Haarstyling",
    "services_desc": "Natürliche Schönheit vereint mit modernen Friseurtechniken.",
    "srv1_title": "Professionelle Balayage & Blond",
    "srv2_title": "Individuelle Coloration & Glossing",
    "srv3_title": "Blonde & Seidiges Farbdesign",
    "srv4_title": "Ombré & Sombré Farbverläufe",
    "srv5_title": "Mikrokapsel Haarverlängerung",
    "srv_cut": "Individueller Haarschnitt",
    "srv_keratin": "Seidiges Keratin-Treatment",
    "reviews_kicker": "KUNDENMEINUNGEN",
    "reviews_title": "5.0-Sterne-Bewertungen auf Google",
    "reviews_rating_text": "★★★★★ 119+ Verifizierte echte Bewertungen",
    "reviews_maps_btn": "Alle Bewertungen auf Google Maps ansehen →",
    "r1_author": "Eda Erbey",
    "r1_tag": "Verifizierte Google-Bewertung",
    "r1_text": "„Ich komme seit fast drei Jahren hierher. Haarschnitt, Farbe, Glossing und Balayage werden stets mit größter Sorgfalt durchgeführt. Absolut empfehlenswert.“",
    "r2_author": "Bermal Kabamaklı",
    "r2_tag": "Verifizierte Google-Bewertung",
    "r2_text": "„Ein fantastischer Salon, der genau auf die Bedürfnisse der Haare eingeht. Sie brachten mein Haar ohne Haarbruch wieder zu strahlendem Platinblond.“",
    "r3_author": "Başak",
    "r3_tag": "Verifizierte Google-Bewertung",
    "r3_text": "„Eine meiner besten Friseurerfahrungen überhaupt. Besonders Bilge Hanım arbeitet mit Hingabe und Präzision. Das Ergebnis ist perfekt.“",
    "r4_author": "Yağmur Evren",
    "r4_tag": "Verifizierte Google-Bewertung",
    "r4_text": "„Mein Haar war zuvor stark strapaziert. Das Team hat es wieder gesund und glänzend gepflegt. Großer Dank an Emre Bey und Bilge Hanım.“",
    "r5_author": "Burcu Özen",
    "r5_tag": "Verifizierte Google-Bewertung",
    "r5_text": "„Seit 3 Jahren Stammkundin; jedes Ombré gelingt makellos. Mein Haar wächst endlich wieder gesund nach.“",
    "r6_author": "Yeşim Aydoğan",
    "r6_tag": "Verifizierte Google-Bewertung",
    "r6_text": "„Einer der besten Damensalons in Manavgat. Sehr sauber, herzlich und fachlich kompetent.“",
    "gallery_kicker": "SALONGALERIE",
    "gallery_title": "Inspirierende Kreationen",
    "gallery_desc": "Aktuelle Colorationen und Stylings aus unserem Salon in Manavgat.",
    "faq_kicker": "HÄUFIGE FRAGEN",
    "faq_title": "Häufig Gestellte Fragen",
    "faq_desc": "Die wichtigsten Fragen zu unseren Dienstleistungen, Haaranalyse und Terminvereinbarungen.",
    "faq1_q": "Wie lange dauern Balayage- und Sombre-Färbungen?",
    "faq1_a": "Je nach Haarlänge, Dichte und Ausgangston dauert die Behandlung durchschnittlich 3 bis 5 Stunden. Die genaue Dauer wird vorab bei der Haaranalyse festgelegt.",
    "faq2_q": "Werden meine Haare beim Aufhellen und Blondieren strapaziert?",
    "faq2_a": "Im Rahmen unseres biologischen Haargesundheits-Protokolls verwenden wir bindungsstärkende und reparierende Formeln. Wir führen keine aggressiven Behandlungen ohne Ihre ausdrückliche Zustimmung durch.",
    "faq3_q": "Wie lange halten Mikrokapsel-Haarverlängerungen?",
    "faq3_a": "Bei richtiger Pflege können unsere Mikrokapsel-Extensions 2,5 bis 4 Monate lang getragen werden. Danach werden sie schonend entfernt und können wieder eingesetzt werden.",
    "faq4_q": "Sollte ich meine Haare vor dem Termin waschen?",
    "faq4_a": "Besonders bei Aufhellungen und Färbungen ist es ratsam, den natürlichen Säureschutzmantel der Kopfhaut zu schonen. Daher empfehlen wir, die Haare am Termintag ungewaschen zu lassen.",
    "faq5_q": "Führen Sie vor der Behandlung eine Haaranalyse und Beratung durch?",
    "faq5_a": "Ja. Wir beginnen keine chemischen Behandlungen, ohne zuvor die Elastizität, Struktur und Vorgeschichte Ihres Haares zu analysieren. Bei Risiken schlagen wir ehrlich schonende Alternativen vor.",
    "contact_kicker": "TERMIN & BERATUNG",
    "contact_title": "Lassen Sie uns die Bedürfnisse Ihres Haares gemeinsam bestimmen",
    "contact_desc": "Vereinbaren Sie einen Beratungstermin in unserem Studio, um den perfekten Farbton passend zu Ihrem Teint und der Haargesundheit zu planen.",
    "c_btn_wa": "WhatsApp Termin",
    "c_btn_call": "Jetzt Anrufen",
    "c_btn_maps": "Wegbeschreibung",
    "c_hours_title": "ÖFFNUNGSZEITEN",
    "c_hours_val": "Di – So: 08:30 – 20:30 (Montags Geschlossen)",
    "c_phone_title": "TELEFON",
    "c_address_title": "ADRESSE",
    "c_address_val": "Bahçelievler Mah. Demokrasi Blv. No: 8Z1, Manavgat / Antalya",
    "footer_tagline": "Seit 2014 Ihr exklusiver Butik-Damensalon für Blond-Spezialbehandlungen in Manavgat.",
    "footer_nav_title": "Menü",
    "footer_spec_title": "Spezialitäten",
    "footer_contact_title": "Kontakt & Anfahrt",
    "footer_hours": "Di – So: 08:30 – 20:30 (Montags Geschlossen)",
    "footer_address": "Bahçelievler Mah. Demokrasi Blv. No: 8Z1, Manavgat / Antalya",
    "footer_rights": "Alle Rechte vorbehalten.",
    "about_page_kicker": "ÜBER UNS",
    "about_page_headline": "Drei Brüder, Eine Leidenschaft: Schönes Haar",
    "about_page_p1": "Seit 2014 arbeiten wir als drei Brüder im Damencoiffeur-Handwerk und entwickeln unser Können mit jedem Tag und jahrelanger Erfahrung mit Hingabe weiter.",
    "about_page_p2": "Besonders bei <em>blondem Haar und individueller Coloration</em> setzen wir höchste Maßstäbe, um die natürliche Strahlkraft Ihres Haares zu entfalten. Die Gesundheit und Unversehrtheit des Haares steht für uns an oberster Stelle.",
    "about_page_p3": "Wir analysieren Haarstruktur, Hautton und persönlichen Stil jeder Kundin individuell, um maßgeschneiderte, glanzvolle und langanhaltende Ergebnisse zu erzielen.",
    "about_stat1_label": "Jahre Meistererfahrung",
    "about_stat2_title": "Gesundheit Zuerst",
    "about_stat2_label": "Schonende Pflege & Farbe",
    "about_page_cta": "Kontaktieren Sie uns per WhatsApp",
    "health_kicker": "GESUNDHEIT ZUERST, DANN SCHÖNHEIT",
    "health_title": "Biologische Haargesundheit & Ehrliche Beratung",
    "health_p1": "Im Three Brothers Studio analysieren wir vor jeder Aufhellung oder Färbung die Elastizität, Feuchtigkeitsbalance und chemische Vorgeschichte des Haares. Behandlungen, die das Haar schädigen könnten, lehnen wir konsequent ab.",
    "health_p2": "Mit ehrlicher Diagnose und bindungsstärkenden Schutzprotokollen garantieren wir nachhaltigen Glanz und gesundes Wachstum ohne Haarbruch.",
    "health_btn": "Beratung & Haaranalyse buchen",
    "felsefe_about_btn": "Über Uns & Unsere Geschichte",
    "about_quote": "“Das Einzige, was sich seit 2014 nie geändert hat: Unsere Leidenschaft für das Handwerk und das Vertrauen unserer Kundinnen.”",
    "about_page_p4": "Auf unserem Weg als drei Brüder stehen wir Ihnen mit Erfahrung, Leidenschaft und ausgewiesener Expertise in blonder Haarkunst zur Seite.",
    "about_motto_brand": "Three Brothers Damensalon",
    "about_motto_text": "Erfahrung, Leidenschaft und meisterhafte Professionalität bei blondem Haar.",
    "nav_process": "Ablauf",
    "nav_faq": "FAQ",
    "nav_book": "Termin Buchen",
    "nav_call": "Jetzt Anrufen"
  },
  "ru": {
    "hero_kicker": "С 2014 ГОДА В МАНАВГАТЕ — ЭКСПЕРТЫ ПО БЛОНДУ И ЦВЕТУ",
    "tech_kicker": "ПРОФЕССИОНАЛЬНЫЕ ТЕХНИКИ ОКРАШИВАНИЯ",
    "tech_title": "Естественное сияние с омбре, сомбре и балаяж",
    "tech_desc": "В нашем салоне в Эскихисаре (Манавгат) мы выполняем омбре, сомбре и балаяж с применением защитных прозрачных техник. Создаем естественные и здоровые оттенки без повреждения структуры волос.",
    "tech_c1_title": "Гармония оттенков",
    "tech_c1_desc": "Идеальные переходы под ваш цветотип и тон кожи.",
    "tech_c2_title": "Защита структуры волос",
    "tech_c2_desc": "Контролируемое осветление, сохраняющее эластичность волос.",
    "tech_c3_title": "Современный колоризм",
    "tech_c3_desc": "Экспертиза в техниках омбре, сомбре, балаяж и блонд.",
    "trust_kicker": "СТАНДАРТЫ КАЧЕСТВА И ДОВЕРИЯ",
    "trust_title": "Салон красоты в Манавгате, которому доверяют",
    "trust_desc": "В студии Three Brothers мы работаем по строгим стандартам заботы и честности. Мы внимательно слушаем ваши пожелания и выбираем самое безопасное решение.",
    "trust_c1_val": "2014",
    "trust_c1_title": "Опыт работы с 2014 года",
    "trust_c1_desc": "Многолетний опыт стилистов для безупречного результата без вреда волосам.",
    "trust_c2_val": "Анализ",
    "trust_c2_title": "Персональная диагностика",
    "trust_c2_desc": "Оценка эластичности и химической истории волос перед началом работы.",
    "trust_c3_val": "100%",
    "trust_c3_title": "100% оригинальные составы",
    "trust_c3_desc": "Сертифицированные профессиональные формулы для здоровья волос.",
    "trust_c4_val": "Гигиена",
    "trust_c4_title": "Безупречная чистота",
    "trust_c4_desc": "Стерилизация инструментов и комфортная атмосфера бутик-салона.",
    "tech_p1": "Если вы ищете плавные переходы и ослепительный блеск в Манавгате, вы в правильном месте. В Three Brothers мы применяем профессиональные составы и современные методы для бережного окрашивания омбре, сомбре, балаяж и блонд.",
    "tech_p2": "Не повреждая структуру волос, мы подбираем оттенки, идеально гармонирующие с чертами вашего лица. Наша цель — долговечный и здоровый результат.",
    "eskihisar_kicker": "ПРОФЕССИОНАЛЬНЫЙ УХОД В ЭСКИХИСАРЕ (МАНАВГАТ)",
    "eskihisar_title": "Прозрачное тонирование для поврежденных волос",
    "eskihisar_p1": "В нашем салоне в районе Эскихисар мы предлагаем экспертные решения для волос, уставших от химических процедур. Прозрачные техники бережно возвращают волосам блеск и силу.",
    "eskihisar_c1_title": "Гармония оттенков",
    "eskihisar_c1_desc": "Плавные переходы под ваш цветотип и тон кожи.",
    "eskihisar_c2_title": "Защита структуры волос",
    "eskihisar_c2_desc": "Профессиональный подход, минимизирующий ломкость.",
    "eskihisar_c3_title": "Современные техники",
    "eskihisar_c3_desc": "Мастерство в техниках омбре, сомбре, балаяж и блонд.",
    "consult_kicker": "ИНДИВИДУАЛЬНАЯ КОНСУЛЬТАЦИЯ ПО СТИЛЮ",
    "consult_title": "Мы внимательно слушаем и анализируем ваши волосы",
    "consult_p1": "Для нас каждый гость — друг. Мы прислушиваемся к вашим пожеланиям, изучаем волосы и вместе принимаем верное решение в самом сердце Манавгата.",
    "consult_card1_num": "2014",
    "consult_card1_label": "Год основания и опыт работы",
    "consult_card2_title": "Гигиена",
    "consult_card2_label": "Непререкаемый стандарт чистоты",
    "consult_card3_title": "Анализ",
    "consult_card3_label": "Персональная оценка перед процедурой",
    "consult_card4_title": "Доверие",
    "consult_card4_label": "Честный и открытый подход к клиенту",
    "why_kicker": "ПОЧЕМУ THREE BROTHERS?",
    "why_title": "Салон красоты в Манавгате, которому доверяют",
    "why_c1_num": "01",
    "why_c1_title": "Экспертная диагностика",
    "why_c1_desc": "Опыт наших стилистов с 2014 года позволяет выбрать идеальную процедуру без вреда для волос.",
    "why_c2_num": "02",
    "why_c2_title": "Безупречная гигиена",
    "why_c2_desc": "Стерильность инструментов и чистота салона — наш неизменный приоритет.",
    "why_c3_num": "03",
    "why_c3_title": "Доверие и забота",
    "why_c3_desc": "Мы не делаем опасных процедур и всегда работаем на безопасный и красивый результат.",
    "page_title": "Three Brothers Женский Салон Красоты | Манавгат Блонд и Стилистика",
    "meta_description": "С 2014 года в Манавгате: Three Brothers — экспертное окрашивание в блонд, бережные техники и здоровье волос.",
    "brand_name": "Three Brothers",
    "brand_tagline": "ЖЕНСКИЙ САЛОН КРАСОТЫ • МАНАВГАТ",
    "status_open": "Открыто • 08:30 – 20:30",
    "status_closed": "Пн: Выходной • Вт с 08:30",
    "nav_home": "Главная",
    "nav_story": "О Нас",
    "nav_services": "Услуги",
    "nav_reels": "Reels",
    "nav_reviews": "Отзывы",
    "nav_gallery": "Галерея",
    "nav_contact": "Контакты",
    "drawer_services_tag": "ПОПУЛЯРНЫЕ УСЛУГИ",
    "drawer_lang_tag": "ВЫБОР ЯЗЫКА / LANGUAGE",
    "hero_title": "Естественный Блеск, Безупречный Цвет.",
    "hero_desc": "Профессиональный колоризм и авторские техники осветления, сохраняющие здоровье и шелковистость волос.",
    "hero_btn_explore": "Наши Услуги",
    "hero_btn_wa": "Запись в WhatsApp",
    "floating_call": "Позвонить",
    "floating_wa": "Запись в WhatsApp",
    "story_kicker": "НАША ФИЛОСОФИЯ И ПОДХОД",
    "story_title_accent": "Здоровье и Искусство Волос",
    "story_p1": "С 2014 года мы в Three Brothers работаем в сфере женского парикмахерского искусства в Манавгате, постоянно совершенствуя свое мастерство.",
    "story_p2": "В <strong>блонде, балаяже и деликатном осветлении</strong> мы используем формулы, сохраняющие структуру. <strong>Здоровье и мягкость ваших волос</strong> — наш главный приоритет.",
    "story_p3": "Мы создаем индивидуальные, стойкие и сияющие оттенки с учетом тона вашей кожи и черт лица.",
    "story_quote": "«С 2014 года наш главный принцип — уважение к ремеслу и искренняя радость наших гостей.»",
    "story_btn_wa": "Записаться на Консультацию и Диагностику",
    "story_cta": "Подробнее о Нашем Салоне",
    "standards_kicker": "СТАНДАРТЫ СЕРВИСА",
    "standards_title": "Почему Three Brothers?",
    "pillar1_title": "Правильная Техника и Ноль Повреждений",
    "pillar1_desc": "Формулы с защитой дисульфидных связей и контролируемое осветление.",
    "pillar2_title": "Индивидуальный Подбор Цвета",
    "pillar2_desc": "Эстетичные сочетания оттенков, подобранные индивидуально под ваш стиль.",
    "pillar3_title": "Честный и Открытый Диалог",
    "pillar3_desc": "Мы внимательны к состоянию волос и предлагаем только безопасные решения.",
    "pillar4_title": "Абсолютная Гигиена",
    "pillar4_desc": "Стерилизованные инструменты и безупречно чистая атмосфера бутик-салона.",
    "process_kicker": "ПРОФЕССИОНАЛЬНЫЙ ПОДХОД И ПРОЦЕСС",
    "process_title": "Безупречный и здоровый дизайн волос за 4 шага",
    "process_desc": "Наш 4-этапный научный и эстетический подход в Three Brothers, сохраняющий здоровье ваших волос.",
    "step1_num": "01",
    "step1_title": "Анализ структуры волос и консультация",
    "step1_desc": "Перед процедурой детально оценивается история окрашиваний, эластичность волос и тон кожи.",
    "step2_num": "02",
    "step2_title": "Индивидуальная формула",
    "step2_desc": "Подбираются укрепляющие связи составы и оттенки, идеально подчеркивающие ваши черты лица.",
    "step3_num": "03",
    "step3_title": "Деликатное мастерское исполнение",
    "step3_desc": "Техники балаяж, блонд или омбре наносятся с ювелирной точностью без повреждения структуры.",
    "step4_num": "04",
    "step4_title": "Фиксация блеска и домашний уход",
    "step4_desc": "Персональные рекомендации по уходу помогут сохранить сияние цвета на долгие месяцы.",
    "repair_kicker": "ЭКСПЕРТНОЕ ВОССТАНОВЛЕНИЕ И КОРРЕКЦИЯ ЦВЕТА",
    "repair_title": "Прозрачное тонирование для поврежденных волос",
    "repair_desc": "Для волос, уставших от агрессивных химических процедур, мы возвращаем жизнь с помощью прозрачных техник тонирования и защиты связей.",
    "repair_badge1": "Гармония естественного тона и блеск",
    "repair_badge2": "Без повреждений и защита структуры",
    "repair_badge3": "Честная и прозрачная оценка",
    "repair_btn": "Записаться на консультацию и анализ",
    "reels_kicker": "INSTAGRAM ПОРТФОЛИО",
    "reels_title": "Преображения Волос из Нашей Студии",
    "reels_desc": "Наши ежедневные работы, сложные окрашивания и актуальные тренды.",
    "insta_header_tag": "INSTAGRAM",
    "insta_username": "@threebrotherrrs",
    "insta_bio": "Three Brothers Женский Парикмахер | Манавгат Демокраси Бульвар",
    "insta_follow_btn": "Подписаться",
    "insta_audio_name": "♫ Оригинальный звук — Three Brothers Manavgat",
    "insta_view_profile": "Смотреть Профиль",
    "insta_see_more": "Больше в Instagram →",
    "reels1_badge": "Бежевый Блонд",
    "reels1_likes": "1 482 отметки",
    "reels1_desc": "✨ БЕЖЕВЫЙ БЛОНД — ТРЕНД СЕЗОНА ✨ Мягкие переливы, натуральный блеск и роскошный оттенок.",
    "reels2_badge": "Омбре и Блеск",
    "reels2_likes": "2 140 отметок",
    "reels2_desc": "ОМБРЕ ✨✨ Тончайшая растушевка цвета с заботой о здоровье каждого локона.",
    "reels3_badge": "Цвет и Финиш",
    "reels3_likes": "1 895 отметок",
    "reels3_desc": "Правильный тон, плавный переход и безупречная форма… Мастерство в деталях.",
    "services_kicker": "НАШИ НАПРАВЛЕНИЯ",
    "services_title": "Профессиональный Дизайн Волос",
    "services_desc": "Естественная гармония цвета и современные технологии колористики.",
    "srv1_title": "Профессиональный Балаяж и Блонд",
    "srv2_title": "Индивидуальное Окрашивание и Тонирование",
    "srv3_title": "Blonde и Шелковистый Дизайн Цвета",
    "srv4_title": "Растяжка Цвета Омбре и Сомбре",
    "srv5_title": "Микрокапсульное Наращивание Волос",
    "srv_cut": "Авторская Стрижка",
    "srv_keratin": "Шелковое Кератиновое Восстановление",
    "reviews_kicker": "ОТЗЫВЫ КЛИЕНТОВ",
    "reviews_title": "Оценка 5.0 на Google",
    "reviews_rating_text": "★★★★★ 119+ Подтвержденных отзывов",
    "reviews_maps_btn": "Смотреть все отзывы на Google Maps →",
    "r1_author": "Eda Erbey",
    "r1_tag": "Проверенный отзыв Google",
    "r1_text": "«Посещаю этот салон около трех лет. Стрижки, окрашивание, тонирование и балаяж выполняются на высочайшем уровне с заботой и вниманием.»",
    "r2_author": "Bermal Kabamaklı",
    "r2_tag": "Проверенный отзыв Google",
    "r2_text": "«Потрясающий салон! Перевели волосы в платиновый блонд без малейших повреждений. Очень рекомендую.»",
    "r3_author": "Başak",
    "r3_tag": "Проверенный отзыв Google",
    "r3_text": "«Один из лучших визитов к стилисту. Госпожа Бильге — потрясающий мастер, результат превзошел все ожидания.»",
    "r4_author": "Yağmur Evren",
    "r4_tag": "Проверенный отзыв Google",
    "r4_text": "«Мои волосы были сильно повреждены, но здесь им вернули блеск и здоровье. Огромное спасибо Эмре и Бильге.»",
    "r5_author": "Burcu Özen",
    "r5_tag": "Проверенный отзыв Google",
    "r5_text": "«Хожу сюда уже 3 года. Все переходы омбре идеальны, а волосы после стрижки растут здоровыми.»",
    "r6_author": "Yeşim Aydoğan",
    "r6_tag": "Проверенный отзыв Google",
    "r6_text": "«Один из лучших салонов в Манавгате. Идеальная чистота, теплая атмосфера и профессиональный подход.»",
    "gallery_kicker": "ГАЛЕРЕЯ САЛОНА",
    "gallery_title": "Вдохновляющие Работы",
    "gallery_desc": "Свежие окрашивания и укладки от мастеров Three Brothers в Манавгате.",
    "faq_kicker": "ЧАСТЫЕ ВОПРОСЫ",
    "faq_title": "Часто Задаваемые Вопросы",
    "faq_desc": "Самые частые вопросы о наших услугах, анализе волос и процессе записи.",
    "faq1_q": "Сколько времени занимают процедуры балаяж и сомбре?",
    "faq1_a": "В зависимости от длины, густоты и текущего оттенка волос процедура занимает в среднем от 3 до 5 часов. Точное время определяется на предварительной консультации.",
    "faq2_q": "Повредятся ли волосы при осветлении в блонд?",
    "faq2_a": "В рамках нашего протокола биологического здоровья волос мы используем профессиональные продукты с защитой дисульфидных связей. Мы никогда не применяем агрессивные методы без вашего согласия.",
    "faq3_q": "Как долго служат микрокапсульные наращивания волос?",
    "faq3_a": "При правильном уходе микрокапсульные пряди комфортно носятся от 2,5 до 4 месяцев. По истечении этого срока они бережно снимаются и могут быть установлены повторно.",
    "faq4_q": "Нужно ли мыть голову перед визитом в салон?",
    "faq4_a": "При осветлении и окрашивании рекомендуется сохранять естественный липидный барьер кожи головы. Поэтому мы советуем не мыть волосы непосредственно перед процедурой.",
    "faq5_q": "Проводите ли вы консультацию и диагностику волос перед процедурой?",
    "faq5_a": "Да. Мы никогда не начинаем окрашивание без оценки истории, пористости и эластичности волос. При риске повреждения мы честно предлагаем бережные альтернативы.",
    "contact_kicker": "ЗАПИСЬ И КОНСУЛЬТАЦИЯ",
    "contact_title": "Определим потребности ваших волос вместе",
    "contact_desc": "Запишитесь на предварительную консультацию в нашу студию, чтобы подобрать идеальный оттенок с учетом тона кожи и здоровья волос.",
    "c_btn_wa": "Запись в WhatsApp",
    "c_btn_call": "Позвонить",
    "c_btn_maps": "Как добраться",
    "c_hours_title": "ЧАСЫ РАБОТЫ",
    "c_hours_val": "Вт – Вс: 08:30 – 20:30 (Понедельник — выходной)",
    "c_phone_title": "ТЕЛЕФОН",
    "c_address_title": "АДРЕС",
    "c_address_val": "Bahçelievler Mah. Demokrasi Blv. No: 8Z1, Manavgat / Antalya",
    "footer_tagline": "С 2014 года ваш любимый бутик-салон красоты и экспертного блонда в Манавгате.",
    "footer_nav_title": "Навигация",
    "footer_spec_title": "Специализация",
    "footer_contact_title": "Контакты и Адрес",
    "footer_hours": "Вт – Вс: 08:30 – 20:30 (Пн — выходной)",
    "footer_address": "Bahçelievler Mah. Demokrasi Blv. No: 8Z1, Manavgat / Antalya",
    "footer_rights": "Все права защищены.",
    "about_page_kicker": "О НАС",
    "about_page_headline": "Три брата, одна страсть: Красивые волосы",
    "about_page_p1": "С 2014 года мы втроем, как три брата, посвятили себя женскому парикмахерскому искусству, совершенствуя мастерство с каждым днем благодаря накопленному опыту.",
    "about_page_p2": "Мы особенно уверены в создании <em>идеального блонда и авторских окрашиваний</em>, раскрывая естественную красоту волос с помощью бережных техник. Для нас сохранение здоровья и структуры волос так же важно, как и потрясающий эстетический результат.",
    "about_page_p3": "Мы индивидуально оцениваем структуру волос, тон кожи, стиль и пожелания каждого гостя, создавая сияющие и стойкие образы.",
    "about_stat1_label": "Лет Профессионализма",
    "about_stat2_title": "Здоровье Волос",
    "about_stat2_label": "Бережное Осветление",
    "about_page_cta": "Связаться через WhatsApp",
    "health_kicker": "СНАЧАЛА ЗДОРОВЬЕ, ЗАТЕМ КРАСОТА",
    "health_title": "Биологическое здоровье волос и честная диагностика",
    "health_p1": "В студии Three Brothers перед любым осветлением или окрашиванием мы тщательно тестируем эластичность, уровень влаги и химическую историю волос. Мы никогда не беремся за процедуры, способные повредить структуру волоса.",
    "health_p2": "Честная диагностика и протоколы защиты связей обеспечивают стойкий естественный блеск и здоровый рост волос без повреждений.",
    "health_btn": "Консультация и анализ волос",
    "felsefe_about_btn": "О нас и наша история",
    "about_quote": "“Единственное, что остается неизменным с 2014 года — это наша страсть к делу и искренняя благодарность наших клиентов.”",
    "about_page_p4": "На этом пути трех братьев мы готовы подарить вашей красоте профессиональный штрих, подкрепленный опытом, энергией и безупречным мастерством в блонде.",
    "about_motto_brand": "Three Brothers Салон Красоты",
    "about_motto_text": "Опыт, страсть и непревзойденный профессионализм в искусстве блонда.",
    "nav_process": "Процесс",
    "nav_faq": "Вопросы",
    "nav_book": "Записаться",
    "nav_call": "Позвонить"
  },
  "ar": {
    "health_kicker": "الصحة أولاً، ثم الجمال",
    "health_title": "صحة الشعر البيولوجية ومعايير التشخيص الشفاف",
    "health_p1": "في استوديو Three Brothers، نقوم بتقييم مرونة الشعر وتوازن الرطوبة وتاريخ المعالجة الكيميائية بدقة متناهية قبل أي عملية تفتيح أو صبغ. لا نوافق أبداً على أي إجراء يضر ببنية الشعر.",
    "health_p2": "من خلال التشخيص الصادق وبروتوكولات حماية الروابط، نضمن لمعاناً مستداماً ونمواً صحياً دون أي تلف.",
    "health_btn": "حجز موعد استشارة وتحليل الشعر",
    "felsefe_about_btn": "من نحن وقصتنا",
    "hero_kicker": "منذ عام 2014 في ماناavgat — إتقان الأشقر وتصميم الألوان",
    "tech_kicker": "تقنيات التلوين الاحترافية",
    "tech_title": "إشراقة طبيعية مع الأومبري والسومبري والبالياج",
    "tech_desc": "في صالوننا بحي إسكي حصار في مانافجات، ننفذ تقنيات الأومبري، السومبري والبالياج بأسلوب شفاف يحمي بنية الشعر ويمنحكِ درجات صحية وساحرة تتناغم مع ملامحكِ وبشرتكِ.",
    "tech_c1_title": "تناغم لوني طبيعي",
    "tech_c1_desc": "تدرجات لونية متناغمة تماماً مع لون بشرتكِ وشعركِ الطبيعي.",
    "tech_c2_title": "حماية روابط الشعر",
    "tech_c2_desc": "تفتيح دقيق ومدروس يحافظ على ألياف الشعر من التلف.",
    "tech_c3_title": "تصميم ألوان عصري",
    "tech_c3_desc": "خبرة متخصصة في الأومبري، السومبري، البالياج والأشقر.",
    "trust_kicker": "معايير الجودة والثقة",
    "trust_title": "تجربة تصميم شعر تمنحكِ الثقة في مانافجات",
    "trust_desc": "في صالون Three Brothers، نعمل وفق معايير صارمة وشفافة تضع راحتكِ في المقام الأول. نستمع لتطلعاتكِ ونختار الأفضل لشعركِ.",
    "trust_c1_val": "2014",
    "trust_c1_title": "خبرة متواصلة منذ 2014",
    "trust_c1_desc": "سنوات من الاحترافية لتحقيق أفضل النتائج دون إجهاد الشعر.",
    "trust_c2_val": "التحليل",
    "trust_c2_title": "تحليل فردي دقيق للشعر",
    "trust_c2_desc": "تقييم مرونة الشعر وتاريخه الكيميائي قبل أي خطوة.",
    "trust_c3_val": "%100",
    "trust_c3_title": "منتجات أصلية 100%",
    "trust_c3_desc": "تركيبات احترافية عالمية معتمدة لحماية وتغذية الشعر.",
    "trust_c4_val": "التعقيم",
    "trust_c4_title": "أعلى معايير النظافة",
    "trust_c4_desc": "أدوات معقمة لكل ضيفة وبيئة صالون راقية ونظيفة تماماً.",
    "tech_p1": "إذا كنتِ تبحثين عن تدرجات طبيعية ولمعان فائق في مانافجات، فأنتِ في المكان المناسب. في Three Brothers نستخدم منتجات احترافية وتقنيات حديثة تحافظ على صحة الشعر أثناء تلوين الأومبري والسومبري والبالياج والأشقر.",
    "tech_p2": "دون إلحاق أي ضرر ببنية شعركِ، نحدد معاً الدرجات التي تتناغم مع ملامح وجهكِ لضمان مظهر صحي ومستدام يدوم طويلاً.",
    "eskihisar_kicker": "لمسة احترافية في إسكي حصار مانافجات",
    "eskihisar_title": "حلول الصبغة الشفافة للشعر التالف والمجهد",
    "eskihisar_p1": "في صالوننا بحي إسكي حصار في مانافجات، نقدم حلولاً متخصصة للشعر المجهد بالعمليات الكيميائية السابقة، معيدين الحيوية والنعومة لخصلاتكِ بتقنيات متقدمة.",
    "eskihisar_c1_title": "تناغم لوني طبيعي",
    "eskihisar_c1_desc": "تدرجات ملائمة للون بشرتكِ وشعركِ الطبيعي.",
    "eskihisar_c2_title": "إجراء يركز على صحة الشعر",
    "eskihisar_c2_desc": "نهج احترافي يقلل من التلف والتقصف.",
    "eskihisar_c3_title": "تقنيات عصرية",
    "eskihisar_c3_desc": "خبرة فائقة في الأومبري، السومبري، البالياج والأشقر.",
    "consult_kicker": "استشارات مظهر مخصصة",
    "consult_title": "نستمع إليكِ ونحلل بنية شعركِ بعناية",
    "consult_p1": "كل ضيفة لدينا هي بمثابة صديقة. نستمع لتطلعاتكِ ونفحص طبيعة شعركِ لنتخذ القرار الأنسب معاً في قلب مانافجات بلمسة راقية من الدفء والاحترافية.",
    "consult_card1_num": "2014",
    "consult_card1_label": "سنوات من الخبرة والتميز منذ 2014",
    "consult_card2_title": "النظافة والتعقيم",
    "consult_card2_label": "معيار لا نساوم عليه في صالوننا",
    "consult_card3_title": "التحليل المسبق",
    "consult_card3_label": "تقييم مخصص قبل كل خطوة",
    "consult_card4_title": "الثقة المتبادلة",
    "consult_card4_label": "شفافية مطلقة في كل تعامل",
    "why_kicker": "لماذا THREE BROTHERS؟",
    "why_title": "تجربة تصميم شعر تمنحكِ الثقة في مانافجات",
    "why_c1_num": "01",
    "why_c1_title": "تحليل الخبراء",
    "why_c1_desc": "بفضل خبرة مصففينا منذ 2014، نختار الإجراء المناسب تماماً دون الإضرار بشعركِ.",
    "why_c2_num": "02",
    "why_c2_title": "أولوية التعقيم",
    "why_c2_desc": "قواعد النظافة في صالوننا معيار ثابت لسلامتكِ وراحتكِ التامة.",
    "why_c3_num": "03",
    "why_c3_title": "الثقة والصدق",
    "why_c3_desc": "نحرص على تجنب أي ضرر لشعركِ وتقديم النتائج المثالية بكل صدق.",
    "page_title": "Three Brothers صالون تصفيف الشعر للسيدات | ماناavgat خبير الأشقر والتصميم",
    "meta_description": "منذ عام 2014 في ماناavgat، يقدم Three Brothers خدمات تصفيف وصبغ الشعر الأشقر، مع الحفاظ الكامل على حيوية وصحة الشعر.",
    "brand_name": "Three Brothers",
    "brand_tagline": "صالون نسائي • ماناavgat",
    "status_open": "مفتوح الآن • 08:30 – 20:30",
    "status_closed": "مغلق يوم الاثنين • يفتح الثلاثاء 08:30",
    "nav_home": "الرئيسية",
    "nav_story": "من نحن",
    "nav_services": "خدماتنا",
    "nav_reels": "فيديوهات",
    "nav_reviews": "التقييمات",
    "nav_gallery": "المعرض",
    "nav_contact": "اتصل بنا",
    "drawer_services_tag": "خدماتنا المميزة",
    "drawer_lang_tag": "اللغة / LANGUAGE",
    "hero_title": "إشراقة طبيعية، لون متقن.",
    "hero_desc": "تصميم احترافي للألوان وتقنيات تفتيح مخصصة تحافظ على حيوية الشعر وصحته.",
    "hero_btn_explore": "خدماتنا",
    "hero_btn_wa": "حجز موعد (واتساب)",
    "floating_call": "اتصال مباشر",
    "floating_wa": "واتساب مباشر",
    "story_kicker": "فلسفتنا ونهجنا",
    "story_title_accent": "صحة الشعر الطبيعية وفن الألوان",
    "story_p1": "منذ عام 2014 في ماناavgat، نقدم في Three Brothers أرقى معايير الجمال والصدق والخبرة التقنية في تصفيف شعر السيدات.",
    "story_p2": "نعتمد تقنيات تفتيح وبالياج لطيفة تحمي ألياف الشعر وتمنحه لمعاناً طبيعياً ساحراً، مع الحفاظ التام على صحة وقوة الشعر.",
    "story_p3": "نصمم لكل زائرة نتيجة طبيعية ومشرقة تتناغم بدقة مع ملامحها ونوع بشرتها.",
    "story_quote": "«منذ عام 2014، مبدأنا الثابت هو احترام حرفتنا ورضا ضيوفنا التام.»",
    "story_btn_wa": "تواصل معنا للاستشارة وتشخيص الشعر",
    "story_cta": "اكتشفي صالوننا وقصتنا",
    "standards_kicker": "معايير الخدمة",
    "standards_title": "لماذا صالون Three Brothers؟",
    "pillar1_title": "تقنيات دقيقة وبدون أي ضرر",
    "pillar1_desc": "تركيبات تعزز روابط الشعر وتفتيح مدروس لحماية حيوية الشعر.",
    "pillar2_title": "تحليل لون مخصص",
    "pillar2_desc": "تناغم لوني جمالي مصمم خصيصاً ليناسب لون بشرتكِ وأسلوبكِ.",
    "pillar3_title": "تواصل صادق وشفاف",
    "pillar3_desc": "نستمع لاحتياجات شعركِ ونقدم الحلول الأكثر صحة وأماناً.",
    "pillar4_title": "معايير نظافة فائقة",
    "pillar4_desc": "أدوات معقمة مخصصة وبيئة صالون هادئة وفاخرة وفائقة النظافة.",
    "process_kicker": "الخبرة والعملية الاحترافية",
    "process_title": "تصميم شعر صحي ومثالي في 4 خطوات",
    "process_desc": "نهجنا العلمي والفني المكون من 4 مراحل في Three Brothers الذي يضمن صحة شعرك دون أي مساومة.",
    "step1_num": "01",
    "step1_title": "تحليل بنية الشعر والاستشارة",
    "step1_desc": "يتم فحص التاريخ الكيميائي للشعر ومرونته ولون بشرتك بدقة قبل أي إجراء.",
    "step2_num": "02",
    "step2_title": "تركيبة مخصصة لكِ",
    "step2_desc": "تحديد تركيبات تقوية الروابط والدرجات اللونية الأكثر ملائمة لملامح وجهك.",
    "step3_num": "03",
    "step3_title": "تطبيق دقيق واحترافي",
    "step3_desc": "تطبيق تقنيات البالياج أو الأشقر أو الأومبري بعناية فائقة دون إجهاد الشعر.",
    "step4_num": "04",
    "step4_title": "تثبيت اللمعان ودليل العناية المنزلية",
    "step4_desc": "نصائح عناية مخصصة للحفاظ على إشراقة اللون وملمسه الحريري لأشهر طويلة.",
    "repair_kicker": "خبرة متخصصة وتصحيح الألوان",
    "repair_title": "حلول الصبغات الشفافة للشعر التالف والمجهد",
    "repair_desc": "للشعر المتعب من المواد الكيميائية القاسية، نعيد له الحيوية واللمعان بتقنيات الصبغ الشفاف وإعادة بناء روابط الشعر.",
    "repair_badge1": "تناغم لوني طبيعي وحيوية",
    "repair_badge2": "صفر تلف وحماية فائقة للروابط",
    "repair_badge3": "تقييم أمين وشفاف",
    "repair_btn": "حجز موعد استشارة وتحليل الشعر",
    "reels_kicker": "فيديوهات إنستغرام",
    "reels_title": "تحولات الشعر المباشرة من الاستوديو",
    "reels_desc": "أعمالنا اليومية، جلسات تفتيح الشعر وأحدث صيحات الموضة.",
    "insta_header_tag": "إنستغرام",
    "insta_username": "@threebrotherrrs",
    "insta_bio": "Three Brothers صالون تصفيف الشعر للسيدات | ماناavgat شارع الديمقراطية",
    "insta_follow_btn": "متابعة",
    "insta_audio_name": "♫ الصوت الأصلي — Three Brothers ماناavgat",
    "insta_view_profile": "عرض الملف",
    "insta_see_more": "شاهد المزيد على إنستغرام ←",
    "reels1_badge": "بيج بلوند",
    "reels1_likes": "1,482 إعجاب",
    "reels1_desc": "✨ بيج بلوند — لون الصيف المميز ✨ تدرجات ناعمة ولمعان أشقر رائع.",
    "reels2_badge": "أومبري وإشراقة",
    "reels2_likes": "2,140 إعجاب",
    "reels2_desc": "أومبري ✨✨ خصلات متدرجة بدقة فائقة مع الحفاظ التام على قوة وحيوية الشعر.",
    "reels3_badge": "لون ولمسة فنية",
    "reels3_likes": "1,895 إعجاب",
    "reels3_desc": "الدرجة المناسبة والانتقال الانسيابي… الاحترافية تكمن في أدق التفاصيل.",
    "services_kicker": "تخصصاتنا",
    "services_title": "تصميم وتصفيف شعر مخصص",
    "services_desc": "نجمع بين المظهر الطبيعي وأحدث تقنيات تصفيف وصبغ الشعر العالمية.",
    "srv1_title": "بالياج احترافي وشعر أشقر",
    "srv2_title": "تلوين وتنسيق درجات مخصص",
    "srv3_title": "بلوند وتصميم ألوان حريري",
    "srv4_title": "تدرجات أومبري وسومبري",
    "srv5_title": "وصلات شعر ميكرو كبسول",
    "srv_cut": "قص شعر مخصص",
    "srv_keratin": "علاج الكيراتين الحريري",
    "reviews_kicker": "تجارب العملاء",
    "reviews_title": "تقييم 5.0 نجوم على Google",
    "reviews_rating_text": "★★★★★ 119+ تقييم حقيقي موثق",
    "reviews_maps_btn": "عرض جميع التقييمات على Google Maps ←",
    "r1_author": "Eda Erbey",
    "r1_tag": "تقييم Google موثق",
    "r1_text": "«أزور هذا الصالون منذ 3 سنوات تقريباً. القص والصبغ والبالياج يُنفذ بعناية فائقة واحترافية عالية من قِبل إمري وعيسى وحسين.»",
    "r2_author": "Bermal Kabamaklı",
    "r2_tag": "تقييم Google موثق",
    "r2_text": "«صالون رائع يهتم بصحة الشعر أولاً. حوّلوا شعري إلى البلاتيني بدون أي تلف إطلاقاً. أنصح به بشدة.»",
    "r3_author": "Başak",
    "r3_tag": "تقييم Google موثق",
    "r3_text": "«من أفضل تجارب الصالونات، وخاصة السيدة بيلغي على اهتمامها ودقتها الرائعة. النتيجة جاءت تماماً كما حلمت بها.»",
    "r4_author": "Yağmur Evren",
    "r4_tag": "تقييم Google موثق",
    "r4_text": "«استعاد شعري صحته ولمعانه بفضل خبرة الصالون وفريق العمل المميز.»",
    "r5_author": "Burcu Özen",
    "r5_tag": "تقييم Google موثق",
    "r5_text": "«3 سنوات وأنا أعتمد عليهم لجميع درجات الأومبري، والنتيجة دائماً مبهرة.»",
    "r6_author": "Yeşim Aydoğan",
    "r6_tag": "تقييم Google موثق",
    "r6_text": "«أفضل صالون نسائي في ماناavgat، نظافة وأجواء مريحة ونصائح احترافية.»",
    "gallery_kicker": "معرض الصالون",
    "gallery_title": "تصاميم شعر ملهمة",
    "gallery_desc": "أحدث إبداعات الألوان والتصفيف في استوديو Three Brothers بماناavgat.",
    "faq_kicker": "الأسئلة الشائعة",
    "faq_title": "الأسئلة الأكثر شيوعاً",
    "faq_desc": "أبرز الأسئلة الشائعة حول خدماتنا، تحليل صحة الشعر، وإجراءات حجز المواعيد.",
    "faq1_q": "كم يستغرق وقت تطبيق البالياج والسومبري؟",
    "faq1_a": "يستغرق العمل ما بين 3 إلى 5 ساعات في المتوسط، وذلك اعتماداً على طول الشعر وكثافته ولونه الحالي. يتم تحديد الوقت بدقة خلال تحليل الشعر المسبق.",
    "faq2_q": "هل سيتضرر شعري أثناء عمليات التفتيح وصبغات الأشقر؟",
    "faq2_a": "وفقاً لبروتوكول صحة الشعر البيولوجية المعتمد لدينا، نستخدم منتجات احترافية لحماية وترميم روابط الشعر. ولا نطبق أي إجراء قاسٍ قد يعرض شعركِ للخطر دون موافقتك.",
    "faq3_q": "كم تدوم وصلات الشعر بتقنية الكبسولات الدقيقة (ميكرو كابسول)؟",
    "faq3_a": "مع العناية المناسبة، تدوم وصلات الميكرو كابسول من 2.5 إلى 4 أشهر براحة تامة. وعند انتهاء المدة يتم فكها بأمان وإعادة تركيبها دون أي ضرر لشعرك الطبيعي.",
    "faq4_q": "هل يجب عليّ غسل شعري قبل القدوم إلى موعد الصالون؟",
    "faq4_a": "يوصى بالحفاظ على طبقة الزيوت الطبيعية لفروة الرأس خاصة قبل عمليات التفتيح والتلوين. لذلك يُفضل القدوم دون غسل الشعر في يوم الموعد.",
    "faq5_q": "هل تقومون بتحليل الشعر واستشارة مسبقة قبل البدء؟",
    "faq5_a": "نعم بكل تأكيد. لا نبدأ بأي معالجة كيميائية دون تحليل بنية الشعر ومرونته وتاريخ الصبغات السابقة. وفي حال وجود أي خطر على صحة الشعر, نقترح بصدق حلولاً بديلة ومغذية.",
    "contact_kicker": "الموعد والاستشارة",
    "contact_title": "دعنا نحدد احتياجات شعركِ معاً",
    "contact_desc": "يمكنكِ حجز موعد استشارة في الاستوديو لاختيار اللون المثالي بما يناسب لون بشرتكِ وحالة شعركِ.",
    "c_btn_wa": "حجز عبر واتساب",
    "c_btn_call": "اتصل بنا الآن",
    "c_btn_maps": "الاتجاهات على الخريطة",
    "c_hours_title": "ساعات العمل",
    "c_hours_val": "الثلاثاء – الأحد: 08:30 – 20:30 (مغلق الاثنين)",
    "c_phone_title": "الهاتف",
    "c_address_title": "العنوان",
    "c_address_val": "حي باهتشيلي إيفلر، شارع الديمقراطية 8Z1، ماناavgat / أنطاليا",
    "footer_tagline": "منذ عام 2014، وجهتكِ الفاخرة لخبرة الشعر الأشقر وتصفيف الشعر الراقي في ماناavgat.",
    "footer_nav_title": "التنقل السريع",
    "footer_spec_title": "تخصصاتنا",
    "footer_contact_title": "التواصل والموقع",
    "footer_hours": "الثلاثاء – الأحد: 08:30 – 20:30 (مغلق الاثنين)",
    "footer_address": "حي باهتشيلي إيفلر، شارع الديمقراطية 8Z1، ماناavgat / أنطاليا",
    "footer_rights": "جميع الحقوق محفوظة.",
    "about_page_kicker": "من نحن",
    "about_page_headline": "ثلاثة إخوة، شغف واحد: شعر جميل ومتألق",
    "about_page_p1": "منذ عام 2014، نعمل كثلاثة إخوة في قطاع تصفيف الشعر النسائي، ونواصل تطوير مهاراتنا يوماً بعد يوم بالخبرة العميقة والتفاني المستمر.",
    "about_page_p2": "نثق تماماً في إبداعنا، لا سيما في <em>الشعر الأشقر وتقنيات التلوين المخصصة</em>، ونهدف إلى إبراز الجمال الطبيعي لشعرك بلمسات احترافية. الحفاظ على صحة الشعر وسلامته أولوية مطلقة بالنسبة لنا.",
    "about_page_p3": "نقوم بتقييم بنية الشعر ولون البشرة والأسلوب والتطلعات لكل عميلة بشكل فردي، ونحرص على تحقيق نتائج طبيعية ومشرقة تدوم طويلاً.",
    "about_stat1_label": "سنوات من الخبرة والتميز",
    "about_stat2_title": "الصحة أولاً",
    "about_stat2_label": "تفتيح وعناية فائقة",
    "about_page_cta": "تواصل معنا عبر واتساب",
    "about_quote": "“الشيء الوحيد الذي لم يتغير منذ عام 2014 هو شغفنا بعملنا ورضا زبائننا.”",
    "about_page_p4": "في هذه المسيرة التي بدأناها كإخوة ثلاثة، نحن هنا لنمنح جمالك لمسة احترافية بخبرتنا وطاقتنا وتميزنا المشهود في صبغات الشعر الأشقر.",
    "about_motto_brand": "صالون Three Brothers للسيدات",
    "about_motto_text": "الخبرة والشغف والاحترافية المطلقة في الشعر الأشقر.",
    "nav_process": "خطوات العمل",
    "nav_faq": "الأسئلة الشائعة",
    "nav_book": "حجز موعد",
    "nav_call": "اتصل الآن"
  }
};

class I18nEngine {
  constructor() {
    this.languages = I18N_LANGUAGES;
    this.translations = I18N_TRANSLATIONS;
    this.defaultLang = 'tr';
    this.currentLang = this.getSavedLanguage() || this.detectLanguage();
  }

  detectLanguage() {
    try {
      const browserLang = (navigator.language || navigator.userLanguage || '').slice(0, 2).toLowerCase();
      return this.languages[browserLang] ? browserLang : this.defaultLang;
    } catch (e) {
      return this.defaultLang;
    }
  }

  getSavedLanguage() {
    try {
      const saved = localStorage.getItem('threebrothers_lang');
      return this.languages[saved] ? saved : null;
    } catch (e) {
      return null;
    }
  }

  setLanguage(lang) {
    if (!this.languages[lang]) return;
    this.currentLang = lang;
    try {
      localStorage.setItem('threebrothers_lang', lang);
    } catch (e) {}
    this.applyTranslations();
    this.updateHtmlLangAttributes();
    this.updateActiveButtonUI();
    this.updateDropdownUI();
  }

  t(key) {
    const dict = this.translations[this.currentLang] || this.translations[this.defaultLang];
    return dict[key] || this.translations[this.defaultLang][key] || key;
  }

  updateHtmlLangAttributes() {
    const langInfo = this.languages[this.currentLang] || this.languages[this.defaultLang];
    document.documentElement.lang = this.currentLang;
    document.documentElement.dir = langInfo.dir || 'ltr';
    if (langInfo.dir === 'rtl') {
      document.documentElement.classList.add('rtl-layout');
    } else {
      document.documentElement.classList.remove('rtl-layout');
    }
  }

  updateActiveButtonUI() {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === this.currentLang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });
  }

  applyTranslations() {
    // 1. data-i18n (Text Content)
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.t(key);
      if (text) {
        el.textContent = text;
      }
    });

    // 2. data-i18n-html (HTML Content)
    const htmlElements = document.querySelectorAll('[data-i18n-html]');
    htmlElements.forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const htmlContent = this.t(key);
      if (htmlContent) {
        el.innerHTML = htmlContent;
      }
    });

    // 3. data-i18n-aria (Aria Label)
    const ariaElements = document.querySelectorAll('[data-i18n-aria]');
    ariaElements.forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      const text = this.t(key);
      if (text) {
        el.setAttribute('aria-label', text);
      }
    });

    // 4. Form Placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const text = this.t(key);
      if (text) {
        el.setAttribute('placeholder', text);
      }
    });
  }

  init() {
    this.updateHtmlLangAttributes();
    this.applyTranslations();
    this.updateActiveButtonUI();
    this.updateDropdownUI();

    // Bind click events on all language switch buttons
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetLang = btn.getAttribute('data-lang');
        if (targetLang) {
          this.setLanguage(targetLang);
        }
      });
    });
  }
}

// Global Instance
window.I18n = new I18nEngine();

// Auto-run on DOM Ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => window.I18n.init());
} else {
  window.I18n.init();
}


// ==========================================
// SERVICE DETAIL MODAL DATA & CONTROLLER
// ==========================================
const SERVICE_MODAL_DATA = {
  balyaj: {
    badge: 'UZMANLIK ALANI',
    title: {
      tr: 'Profesyonel Balyaj & Doğal Sarı Geçişler',
      en: 'Professional Balayage & Natural Blonde Tones',
      de: 'Professionelle Balayage & Natürliche Blondtöne',
      ru: 'Профессиональный Балаяж и Натуральный Блонд',
      ar: 'بالياج احترافي وتدرجات شقراء طبيعية'
    },
    duration: {
      tr: '3.5 – 5 Saat',
      en: '3.5 – 5 Hours',
      de: '3.5 – 5 Stunden',
      ru: '3.5 – 5 Часов',
      ar: '3.5 – 5 ساعات'
    },
    desc: {
      tr: 'Saçınızın doğal dip rengine uygun mikro tutamlarla açma ve tonlama yapılarak, dip boyası derdi olmadan 6-8 ay boyunca ışıltısını koruyan kişiselleştirilmiş balyaj tasarımı.',
      en: 'Personalized balayage designed with micro-strands aligned to your natural base tone, providing radiant blonde luminosity lasting 6-8 months without harsh regrowth lines.',
      de: 'Personalisierte Balayage mit feinen Strähnen, abgestimmt auf Ihren natürlichen Basiston für strahlenden Glanz über 6–8 Monate ohne harten Ansatz.',
      ru: 'Индивидуальный балаяж с микро-прядями под ваш натуральный тон, сохраняющий сияние 6-8 месяцев без резкой границы отрастания.',
      ar: 'تصميم بالياج مخصص مع خصلات دقيقة تتناسب مع لون جذورك الطبيعي، لتمنحك إشراقة تدوم 6-8 أشهر دون خطوط نمو مزعجة.'
    },
    products: ['Olaplex No.1 & No.2', 'L\x27Oréal Blond Studio 9', 'Schwarzkopf Fibreplex', 'Davines Heart of Glass'],
    steps: {
      tr: [
        'Kişiye özel saç sağlığı, elastikiyet ve geçmiş boya analizi',
        'Bağ koruyucu Plex teknolojisi ile kontrollü mikro açma',
        'Ten rengine uygun soğuk/bej/sıcak ışıltılı cila tonlaması',
        'Yoğun aminoasit saç maskesi ve ipeksi fön şekillendirme'
      ],
      en: [
        'Personalized hair health, elasticity, and color history analysis',
        'Controlled micro-lightening with bond-protecting Plex formula',
        'Custom gloss toning (cool, beige, or warm champagne) matching skin tone',
        'Intensive amino-acid treatment mask and signature silky styling'
      ],
      de: [
        'Haaranalyse, Elastizitätsprüfung und Farbhistorie',
        'Schonendes Blondieren mit bindungsstärkender Plex-Technologie',
        'Individuelle Glanztonung passend zu Ihrem Hauttyp',
        'Intensive Aminosäuren-Pflegemaske und seidenweiches Styling'
      ],
      ru: [
        'Индивидуальный анализ здоровья, эластичности и истории волос',
        'Контролируемое бережное осветление с защитным комплексом Plex',
        'Тонирование и глянцевание под тон кожи (холодный, бежевый, жемчужный)',
        'Интенсивная восстанавливающая маска и шелковая укладка'
      ],
      ar: [
        'تحليل مخصص لصحة الشعر ومرونته وتاريخ الصبغات السابقة',
        'تفتيح دقيق ومحمي بتقنية بلكس المقوية لروابط الشعر',
        'رنساج ولمعان مخصص يتناغم تماماً مع درجة بشرتك',
        'ماسك مكثف بالأحماض الأمينية وتسريح حريري أنيق'
      ]
    },
    waText: 'Merhaba,%20Balyaj%20hizmetiniz%20hakk%C4%B1nda%20bilgi%20ve%20randevu%20almak%20istiyorum.'
  },
  blonde: {
    badge: 'ÖZEL UZMANLIK',
    title: {
      tr: 'Blonde & İpeksi Sarı Saç Tasarımı',
      en: 'Signature Blonde & Silky Platinum Design',
      de: 'Signature Blond & Seidiges Platin-Design',
      ru: 'Фирменный Блонд и Шелковистый Платиновый Дизайн',
      ar: 'تصميم بلوند وشعر أشقر حريري فاخر'
    },
    duration: {
      tr: '4 – 6 Saat',
      en: '4 – 6 Hours',
      de: '4 – 6 Stunden',
      ru: '4 – 6 Часов',
      ar: '4 – 6 ساعات'
    },
    desc: {
      tr: 'Bebek sarısı, bej blonde, buz sarısı ve kremsi platin tonlarında, saç liflerini koruyarak sıfır kırılma prensibiyle uygulanan saf lüks sarışınlık.',
      en: 'Ultra-refined baby blonde, beige champagne, ice blonde, and creamy platinum shades crafted with zero-breakage bond preservation.',
      de: 'Babyblond, Champagner-Beige, Eisblond und cremiges Platin ohne Haarbruch dank tiefenwirksamer Faserprotektion.',
      ru: 'Детский блонд, бежевый шелк, ледяной платиновый блонд с абсолютной защитой структуры волос.',
      ar: 'درجات الأشقر الفاتح، والبيج، والبلاتيني الثلجي مع حماية تامة لألياف الشعر دون أي تكسر.'
    },
    products: ['Olaplex Bond Multiplier', 'Davines Century of Light', 'Kérastase Blond Absolu', 'Fanola No Yellow Pro'],
    steps: {
      tr: [
        'Detaylı saç mukavemet ve pH dengesi ölçümü',
        'Kademeli ve düşük volümlü homojen açma protokolü',
        'Sararma karşıtı moleküler nötralizasyon ve cila',
        'Derinlemesine hyalüronik asit nem yüklemesi'
      ],
      en: [
        'Detailed hair tensile strength and pH balance assessment',
        'Gradual low-volume controlled lightening protocol',
        'Anti-yellow molecular neutralization and luminous gloss',
        'Deep hyaluronic acid hydration and cuticle seal'
      ],
      de: [
        'Prüfung von Haarfestigkeit und pH-Balance',
        'Schrittweises, schonendes Aufhellen bei niedriger Oxidation',
        'Molekulare Anti-Gelb Neutralisation und Farbveredelung',
        'Tiefenwirksame Hyaluronsäure-Feuchtigkeitspflege'
      ],
      ru: [
        'Оценка плотности и pH-баланса волос',
        'Поэтапное низкооксидное осветление без перегрева',
        'Молекулярная нейтрализация желтизны и глянцевый глянец',
        'Глубокое увлажнение гиалуроновой кислотой'
      ],
      ar: [
        'تقييم متانة الشعر وتوازن درجة الحموضة pH',
        'بروتوكول تفتيح تدريجي بتركيز منخفض لحماية الشعر',
        'معادلة جزيئية ضد الاصفرار ولمعان فائق النقاء',
        'ترطيب عميق بحمض الهيالورونيك وحماية الأطراف'
      ]
    },
    waText: 'Merhaba,%20Blonde%20ve%20Sar%C4%B1%20Sa%C3%A7%20hizmetiniz%20hakk%C4%B1nda%20bilgi%20ve%20randevu%20almak%20istiyorum.'
  },
  kaynak: {
    badge: 'KONFOR & HACİM',
    title: {
      tr: 'Mikro Kapsül Görünmez Saç Kaynağı',
      en: 'Invisible Micro Capsule Hair Extensions',
      de: 'Unsichtbare Mikrokapsel-Haarverlängerung',
      ru: 'Невидимое Микрокапсульное Наращивание',
      ar: 'وصلات شعر ميكرو كبسول غير مرئية'
    },
    duration: {
      tr: '2.5 – 4 Saat',
      en: '2.5 – 4 Hours',
      de: '2.5 – 4 Stunden',
      ru: '2.5 – 4 Часа',
      ar: '2.5 – 4 ساعات'
    },
    desc: {
      tr: '%100 doğal işlenmemiş premium saçlar ve nano keratin kapsüllerle uygulanan, dışarıdan kesinlikle fark edilmeyen, saç derisini rahatsız etmeyen ultra hafif kaynak.',
      en: '100% pure cuticle-aligned human hair fused with nano-keratin capsules for completely undetectable, weightless volume and length.',
      de: '100% echtes Premium-Echthaar mit Nano-Keratinkapseln für unsichtbares Volumen und traumhafte Länge ohne Beschwerung.',
      ru: '100% натуральные премиальные славянские волосы на нано-кератиновых капсулах: неощутимо, незаметно и безопасно.',
      ar: 'شعر طبيعي 100% مع كبسولات نانو كيراتين فائقة الصغر وغير مرئية لتكثيف وتطويل الشعر براحة مطلقة.'
    },
    products: ['%100 Virgin Slavic Hair', 'Medical Grade Nano-Keratin', 'Ultrasonic Cold Fusion'],
    steps: {
      tr: [
        'Doğal saç rengine ve dalgasına %100 uyumlu saç seçimi',
        'Kişiye özel gramaj ve saç ayırma haritasının çıkarılması',
        'Mikro termal/ultrasonik hassas kapsülleme işlemi',
        'Entegre geçiş kesimi ve şekillendirme'
      ],
      en: [
        'Exact hair color and texture matching from our virgin inventory',
        'Custom sectioning map and density distribution planning',
        'Precision micro-fusion attachment point bonding',
        'Seamless blending cut and signature finishing'
      ],
      de: [
        'Exakte Farb- und Strukturanpassung aus Premium-Echthaaren',
        'Individuelle Aufteilung nach Haardichte und Tragekomfort',
        'Präzise Mikroversiegelung der Keratinverbindungen',
        'Nahtloser Übergangsschnitt und Finish'
      ],
      ru: [
        'Точный подбор оттенка и структуры из премиального среза',
        'Индивидуальная схема распределения капсул по зонам',
        'Бережное микрокапсулирование',
        'Адаптационная стрижка и моделирование'
      ],
      ar: [
        'مطابقة تامة للون الشعر الطبيعي وكثافته',
        'رسم خريطة توزيع الكبسولات المخصصة لراحة فروة الرأس',
        'تثبيت دقيق بتقنية النانو كبسول المريحة',
        'قص دمج احترافي لتسريحة طبيعية متجانسة'
      ]
    },
    waText: 'Merhaba,%20Mikro%20Kaynak%20hizmetiniz%20hakk%C4%B1nda%20bilgi%20ve%20randevu%20almak%20istiyorum.'
  },
  ombre: {
    badge: 'ZARİF GEÇİŞLER',
    title: {
      tr: 'Ombre & Sombre Geçiş Tasarımı',
      en: 'Ombre & Soft Sombre Gradient Artistry',
      de: 'Ombre & Soft Sombre Farbverläufe',
      ru: 'Омбре и Мягкое Сомбре',
      ar: 'أومبري وسومبري بتدرجات ناعمة'
    },
    duration: {
      tr: '3 – 4.5 Saat',
      en: '3 – 4.5 Hours',
      de: '3 – 4.5 Stunden',
      ru: '3 – 4.5 Часа',
      ar: '3 – 4.5 ساعات'
    },
    desc: {
      tr: 'Koyu dipten ışıltılı uçlara yumuşak ve kademeli geçiş sunan, dip rötuşu gerektirmeyen şık ve modern renklendirme.',
      en: 'Seamless graduated transition from natural roots to sun-kissed luminous ends, offering effortless maintenance.',
      de: 'Sanfte Farbverläufe vom natürlichen Ansatz zu hellen Spitzen für mühelose Eleganz ohne ständiges Nachfärben.',
      ru: 'Плавный градиент от темных корней к сияющим кончикам без необходимости частого подкрашивания.',
      ar: 'تدرج لوني انسيابي من الجذور الطبيعية إلى الأطراف المشرقة دون الحاجة لصبغ الجذور المتكرر.'
    },
    products: ['L\x27Oréal Majirel Glow', 'Wella Blondor Multi Blonde', 'Moroccanoil Color Calypso'],
    steps: {
      tr: [
        'Kişisel kontrast seviyesi ve geçiş yüksekliği belirleme',
        'Tarakla krepe tekniğiyle yumuşak degradé açma',
        'Altın/bronz/soğuk tonlarda zengin pigmentli cila',
        'Kütikül mühürleyici parlaklık bakımı'
      ],
      en: [
        'Custom contrast level and graduation height planning',
        'Backcombing & teasing technique for seamless gradient',
        'Multi-tonal glossing in bespoke golden or cool hues',
        'Cuticle sealing shine treatment'
      ],
      de: [
        'Bestimmung von Farbkontrast und Verlaufshöhe',
        'Toupiertes Anwenden für nahtlosen Farbverlauf',
        'Multi-Ton Glossing für maximale Farbbrillanz',
        'Glanzversiegelung und Pflege'
      ],
      ru: [
        'Определение уровня контраста и высоты растяжки',
        'Техника мягкой растушевки для плавного перехода',
        'Многогранное тонирование выбранным оттенком',
        'Глянцевое запечатывание кутикулы'
      ],
      ar: [
        'تحديد مستوى التباين وارتفاع التدرج اللوني',
        'تقنية الدمج المتدرج لنعومة فائقة في الانتقال',
        'رنساج متعدد الأبعاد بألوان ذهبية أو باردة',
        'علاج حبس اللمعان وحماية أطراف الشعر'
      ]
    },
    waText: 'Merhaba,%20Ombre%20ve%20Sombre%20hizmetiniz%20hakk%C4%B1nda%20bilgi%20ve%20randevu%20almak%20istiyorum.'
  },
  renklendirme: {
    badge: 'KİŞİYE ÖZEL',
    title: {
      tr: 'Kişiye Özel Renklendirme & Cila',
      en: 'Custom Hair Color & Gloss Toning',
      de: 'Individuelle Coloration & Glanz-Toning',
      ru: 'Индивидуальное Окрашивание и Тонирование',
      ar: 'تلوين مخصص ورنساج اللمعان الفائق'
    },
    duration: {
      tr: '2 – 3 Saat',
      en: '2 – 3 Hours',
      de: '2 – 3 Stunden',
      ru: '2 – 3 Часа',
      ar: '2 – 3 ساعات'
    },
    desc: {
      tr: 'Ten alt tonunuz ve göz renginizle mükemmel uyum sağlayan, amonyaksız veya bağ güçlendirici formüllerle uygulanan zengin pigmentli renk tasarımı.',
      en: 'Ammonia-free, bond-infused color formulation tailored to your skin undertone and eye color for deep luminous radiance.',
      de: 'Ammoniakfreie, faserpflegende Haarfarbe, perfekt abgestimmt auf Ihren Hautunterton und Ihre Augenfarbe.',
      ru: 'Безаммиачное окрашивание с фибро-защитой, подобранное под ваш цветотип для глубокого стойкого сияния.',
      ar: 'صبغات خالية من الأمونيا ومدعمة بمقويات الروابط، مصممة خصيصاً لتناسب لون بشرتك وعينيك بإشراقة عميقة.'
    },
    products: ['L\x27Oréal Inoa (Ammonia Free)', 'Wella Color Touch', 'K18 Biomimetic Hairscience'],
    steps: {
      tr: [
        'Cilt alt tonu analizi (Sıcak/Soğuk/Nötr)',
        'Özel pigment karışımının hazırlanması',
        'Kökten uca eşit ve parlak uygulama',
        'K18 Moleküler saç onarım terapisi'
      ],
      en: [
        'Skin undertone colorimetry consultation',
        'Custom multi-pigment formula compounding',
        'Even root-to-tip application with gloss lock',
        'K18 Molecular peptide repair therapy'
      ],
      de: [
        'Farbanalyse des Hautuntertons',
        'Mischung individueller Pigmentnuancen',
        'Gleichmäßiges Auftragen für maximale Farbbrillanz',
        'K18 Molekular-Peptid Reparaturpflege'
      ],
      ru: [
        'Анализ цветотипа и подтона кожи',
        'Создание авторского коктейля пигментов',
        'Равномерное нанесение и фиксация блеска',
        'Молекулярное восстановление K18'
      ],
      ar: [
        'تحليل درجة البشرة ولونها الأساسي',
        'مزج تركيبة صبغة خاصة غنية بالبيجمنت',
        'تطبيق متساوٍ من الجذور حتى الأطراف مع قفل اللمعان',
        'علاج K18 الجزيئي لترميم الشعر'
      ]
    },
    waText: 'Merhaba,%20Renklendirme%20ve%20Tonlama%20hizmetiniz%20hakk%C4%B1nda%20bilgi%20ve%20randevu%20almak%20istiyorum.'
  },
  bakim: {
    badge: 'SAÇ SAĞLIĞI',
    title: {
      tr: 'Biyolojik Saç Onarım & Keratin Bakımı',
      en: 'Biological Hair Repair & Liquid Keratin Care',
      de: 'Biologische Haarreparatur & Keratin-Therapie',
      ru: 'Биологическое Восстановление и Кератиновый Уход',
      ar: 'علاج بيولوجي لترميم الشعر وعناية الكيراتين'
    },
    duration: {
      tr: '1.5 – 2.5 Saat',
      en: '1.5 – 2.5 Hours',
      de: '1.5 – 2.5 Stunden',
      ru: '1.5 – 2.5 Часа',
      ar: '1.5 – 2.5 ساعات'
    },
    desc: {
      tr: 'Isı, açıcı veya çevresel faktörlerle yıpranmış saç tellerini moleküler seviyede onaran, elektriklenmeyi önleyen ve cam gibi pürüzsüz parlaklık kazandıran yoğun terapi.',
      en: 'Molecular repair therapy for heat or chemical damage, eliminating frizz while imparting mirror-like smoothness and strength.',
      de: 'Molekulare Intensivtherapie gegen Hitze- und Farbschäden, bändigt Frizz und schenkt spiegelnden Glanz.',
      ru: 'Молекулярное восстановление после термо- и химических повреждений, устранение пушистости и зеркальный блеск.',
      ar: 'علاج جزيئي مكثف للشعر التالف من الحرارة أو الصبغات، يزيل النفشة ويمنحه نعومة ولمعاناً كالمرآة.'
    },
    products: ['K18 Molecular Mist & Mask', 'Olaplex Broad Spectrum Chelating', 'Brazillian Blowout Original'],
    steps: {
      tr: [
        'Mineral ve kireç arındırıcı şelasyon yıkaması',
        'K18 Peptid ve sıvı keratin yüklemesi',
        'Mikro buhar infüzyon terapisi',
        'Kütikül kapatıcı ve ısıyla mühürleme fönü'
      ],
      en: [
        'Deep clarifying and mineral chelating wash',
        'K18 Peptide and liquid keratin infusion',
        'Micro-steam deep penetrative treatment',
        'Thermal cuticle sealing and mirror finish styling'
      ],
      de: [
        'Tiefenreinigende Chelat-Wäsche gegen Mineralablagerungen',
        'K18 Peptid- und Flüssigkeratin-Infusion',
        'Mikrodampf-Tiefenbehandlung',
        'Thermische Glanzversiegelung und Finish'
      ],
      ru: [
        'Хелатирующее очищение от минералов и солей',
        'Инфузия пептидов K18 и жидкого кератина',
        'Микро-паровая терапия глубокого действия',
        'Термо-запечатывание кутикулы и укладка'
      ],
      ar: [
        'غسيل منقي يزيل الترسبات الكلسية والمعادن',
        'تشبيع الشعر بببتيدات K18 والكيراتين السائل',
        'علاج بالبخار الدقيق لامتصاص عميق',
        'إغلاق حراري لمسام الشعر وتصفيف حريري'
      ]
    },
    waText: 'Merhaba,%20Saç%20Bakımı%20hakkında%20bilgi%20ve%20randevu%20almak%20istiyorum.'
  },
  kesim: {
    badge: 'STİL & TASARIM',
    title: {
      tr: 'Kişiye Özel Trend Kesim & Şekillendirme',
      en: 'Custom Trend Haircut & Signature Styling',
      de: 'Individueller Trendhaarschnitt & Styling',
      ru: 'Авторская Стрижка и Фирменная Укладка',
      ar: 'قص شعر عصري مخصص وتسريح مميز'
    },
    duration: {
      tr: '45 – 75 Dakika',
      en: '45 – 75 Minutes',
      de: '45 – 75 Minuten',
      ru: '45 – 75 Минут',
      ar: '45 – 75 دقيقة'
    },
    desc: {
      tr: 'Yüz hatlarınıza, saçınızın doğal düşüşüne ve yaşam tarzınıza uygun katlı, küt veya hareketli modern kesim mimarisi.',
      en: 'Face-contouring bespoke haircut architecture harmonized with your natural hair fall and personal lifestyle.',
      de: 'Gesichtskonturierender Haarschnitt, abgestimmt auf Ihre natürliche Haarstruktur und Ihren persönlichen Stil.',
      ru: 'Анатомическая стрижка с учетом формы лица, плотности волос и легкой самостоятельной укладки.',
      ar: 'هندسة قص متناسقة مع ملامح وجهك وطبيعة شعرك لتمنحك إطلالة عصرية يسهل تصفيفها يومياً.'
    },
    products: ['Davines OI All In One Milk', 'Kérastase Elixir Ultime', 'Balmain Texturizing Volume Spray'],
    steps: {
      tr: [
        'Yüz şekli ve saç yoğunluğu konsültasyonu',
        'Kişiselleştirilmiş doku ve boy kesimi',
        'Uç hafifletme ve hacim kazandırma',
        'İmzalı fön ve kalıcı dalgalandırma'
      ],
      en: [
        'Facial shape and hair density consultation',
        'Precision customized length and textural cutting',
        'Weight removal and volume enhancement',
        'Signature blowout and voluminous beach wave finish'
      ],
      de: [
        'Beratung zu Gesichtsform und Haardichte',
        'Präziser Längen- und Strukturschnitt',
        'Volumenaufbau und Spitzenveredelung',
        'Signature Blowout und langanhaltendes Wellenfinish'
      ],
      ru: [
        'Консультация по форме лица и структуре волос',
        'Точный текстурированный срез',
        'Создание динамичного объема',
        'Фирменная укладка на брашинг'
      ],
      ar: [
        'استشارة لتحديد أنسب قصة لشكل وجهك',
        'قص دقيق للأطوال وإضافة حركة للشعر',
        'تخفيف الثقل ومنح كثافة طبيعية',
        'تسريح احترافي وتمويج أنيق يدوم طويلاً'
      ]
    },
    waText: 'Merhaba,%20Saç%20Kesimi%20hakkında%20bilgi%20ve%20randevu%20almak%20istiyorum.'
  }
};

// Global Dropdown Handler
window.toggleLangDropdown = function(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const dropdownContainers = document.querySelectorAll('.lang-dropdown-container');
  dropdownContainers.forEach(container => {
    container.classList.toggle('open');
  });
};

window.selectLanguage = function(langCode) {
  if (window.I18n) {
    window.I18n.setLanguage(langCode);
  }
  const dropdownContainers = document.querySelectorAll('.lang-dropdown-container');
  dropdownContainers.forEach(container => {
    container.classList.remove('open');
  });
};

// Global Category Filter Handler
window.filterServices = function(category, btnElement) {
  const tabButtons = document.querySelectorAll('.service-tab-btn');
  tabButtons.forEach(b => b.classList.remove('active'));
  if (btnElement) {
    btnElement.classList.add('active');
  } else {
    const matchingBtn = document.querySelector(`.service-tab-btn[data-category="${category}"]`);
    if (matchingBtn) matchingBtn.classList.add('active');
  }

  const cards = document.querySelectorAll('.bento-card, .service-item-card, [data-service-cat]');
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category') || card.getAttribute('data-service-cat') || 'all';
    if (category === 'all' || cardCat.includes(category)) {
      card.style.display = '';
      card.style.opacity = '1';
      card.style.transform = 'scale(1)';
    } else {
      card.style.display = 'none';
      card.style.opacity = '0';
      card.style.transform = 'scale(0.95)';
    }
  });
};

// Global Bottom Sheet / Modal Controller
window.openServiceModal = function(serviceKey) {
  const data = SERVICE_MODAL_DATA[serviceKey];
  if (!data) return;

  const currentLang = (window.I18n && window.I18n.currentLang) ? window.I18n.currentLang : 'tr';
  const modalBackdrop = document.getElementById('serviceDetailBackdrop');
  if (!modalBackdrop) return;

  const titleEl = document.getElementById('sheetModalTitle');
  const badgeEl = document.getElementById('sheetModalBadge');
  const durationEl = document.getElementById('sheetModalDuration');
  const descEl = document.getElementById('sheetModalDesc');
  const productsContainer = document.getElementById('sheetModalProducts');
  const stepsContainer = document.getElementById('sheetModalSteps');
  const waBtn = document.getElementById('sheetModalWaBtn');

  if (titleEl) titleEl.textContent = data.title[currentLang] || data.title.tr;
  if (badgeEl) badgeEl.textContent = data.badge;
  if (durationEl) durationEl.textContent = data.duration[currentLang] || data.duration.tr;
  if (descEl) descEl.textContent = data.desc[currentLang] || data.desc.tr;

  if (productsContainer) {
    productsContainer.innerHTML = '';
    data.products.forEach(p => {
      const tag = document.createElement('span');
      tag.className = 'sheet-product-tag';
      tag.textContent = p;
      productsContainer.appendChild(tag);
    });
  }

  if (stepsContainer) {
    stepsContainer.innerHTML = '';
    const stepsList = data.steps[currentLang] || data.steps.tr;
    stepsList.forEach((step, idx) => {
      const li = document.createElement('li');
      li.className = 'sheet-step-item';
      li.innerHTML = `<span class="sheet-step-number">${idx + 1}</span><span>${step}</span>`;
      stepsContainer.appendChild(li);
    });
  }

  if (waBtn) {
    const waBase = 'https://wa.me/905526856907?text=';
    waBtn.href = waBase + data.waText;
  }

  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeServiceModal = function() {
  const modalBackdrop = document.getElementById('serviceDetailBackdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('active');
  }
  document.body.style.overflow = '';
};

// Global Outside Click Listeners
document.addEventListener('click', function(e) {
  // Close Language Dropdown when clicked outside
  if (!e.target.closest('.lang-dropdown-container')) {
    const dropdownContainers = document.querySelectorAll('.lang-dropdown-container');
    dropdownContainers.forEach(container => {
      container.classList.remove('open');
    });
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    window.closeServiceModal();
    const dropdownContainers = document.querySelectorAll('.lang-dropdown-container');
    dropdownContainers.forEach(container => {
      container.classList.remove('open');
    });
  }
});
