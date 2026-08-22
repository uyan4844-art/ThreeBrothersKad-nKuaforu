const fs = require('fs');

// 1. Update js/i18n.js with custom translations
let i18n = fs.readFileSync('js/i18n.js', 'utf8');

const contactUpdates = {
  tr: {
    contact_kicker: "RANDEVU & DANIŞMANLIK",
    contact_title: "Saçınızın İhtiyacını Birlikte Belirleyelim",
    contact_desc: "Ten renginize, saçınızın geçmiş işlemlerine ve sağlığına göre en doğru tonu planlamak için stüdyomuzdan ön görüşme randevusu alabilirsiniz.",
    c_hours_title: "ÇALIŞMA SAATLERİ",
    c_phone_title: "TELEFON",
    c_address_title: "ADRES"
  },
  en: {
    contact_kicker: "APPOINTMENT & CONSULTATION",
    contact_title: "Let's Determine Your Hair Needs Together",
    contact_desc: "You can book a consultation at our studio to plan the ideal shade according to your skin tone, hair history, and overall health.",
    c_hours_title: "WORKING HOURS",
    c_phone_title: "PHONE",
    c_address_title: "ADDRESS"
  },
  de: {
    contact_kicker: "TERMIN & BERATUNG",
    contact_title: "Lassen Sie uns die Bedürfnisse Ihres Haares gemeinsam bestimmen",
    contact_desc: "Vereinbaren Sie einen Beratungstermin in unserem Studio, um den perfekten Farbton passend zu Ihrem Teint und der Haargesundheit zu planen.",
    c_hours_title: "ÖFFNUNGSZEITEN",
    c_phone_title: "TELEFON",
    c_address_title: "ADRESSE"
  },
  ru: {
    contact_kicker: "ЗАПИСЬ И КОНСУЛЬТАЦИЯ",
    contact_title: "Определим потребности ваших волос вместе",
    contact_desc: "Запишитесь на предварительную консультацию в нашу студию, чтобы подобрать идеальный оттенок с учетом тона кожи и здоровья волос.",
    c_hours_title: "ЧАСЫ РАБОТЫ",
    c_phone_title: "ТЕЛЕФОН",
    c_address_title: "АДРЕС"
  },
  ar: {
    contact_kicker: "الموعد والاستشارة",
    contact_title: "دعنا نحدد احتياجات شعركِ معاً",
    contact_desc: "يمكنكِ حجز موعد استشارة في الاستوديو لاختيار اللون المثالي بما يناسب لون بشرتكِ وحالة شعركِ.",
    c_hours_title: "ساعات العمل",
    c_phone_title: "الهاتف",
    c_address_title: "العنوان"
  }
};

for (const lang of ['tr', 'en', 'de', 'ru', 'ar']) {
  for (const [key, val] of Object.entries(contactUpdates[lang])) {
    const escapedVal = val.replace(/"/g, '\\"');
    const regex = new RegExp(`("${lang}":\\s*\\{[\\s\\S]*?"${key}":\\s*")[^"]+(")`);
    if (regex.test(i18n)) {
      i18n = i18n.replace(regex, `$1${escapedVal}$2`);
    } else {
      const target = new RegExp(`("${lang}":\\s*\\{[\\s\\S]*?"brand_name":\\s*"[^"]+",)`);
      i18n = i18n.replace(target, `$1\n    "${key}": "${escapedVal}",`);
    }
  }
}

fs.writeFileSync('js/i18n.js', i18n, 'utf8');
fs.writeFileSync('public/js/i18n.js', i18n, 'utf8');
console.log('js/i18n.js updated with Three Brothers custom contact texts');

// 2. Update index.html
let indexHTML = fs.readFileSync('index.html', 'utf8');

const oldContactSectionRegex = /<!-- ==========================================\s*9\.\s*İLETİŞİM\s*&\s*LOKASYON\s*ALANI[\s\S]*?<\/section>/;

const newContactSectionHTML = `<!-- ==========================================
       9. İLETİŞİM & LOKASYON ALANI
  =========================================== -->
  <section id="iletisim" class="boutique-section section-iletisim">
    <div class="section-container">

      <div class="contact-card-box reveal-up">

        <!-- Left Contact Text -->
        <div>
          <span class="section-kicker" data-i18n="contact_kicker">RANDEVU & DANIŞMANLIK</span>
          <h2 class="section-title" style="margin-bottom: 20px;" data-i18n="contact_title">
            Saçınızın İhtiyacını Birlikte Belirleyelim
          </h2>
          <p style="font-size: 15px; color: var(--text-muted); line-height: 1.7; margin-bottom: 32px;" data-i18n="contact_desc">
            Ten renginize, saçınızın geçmiş işlemlerine ve sağlığına göre en doğru tonu planlamak için stüdyomuzdan ön görüşme randevusu alabilirsiniz.
          </p>

          <div style="display: flex; gap: 14px; flex-wrap: wrap;">
            <a href="https://wa.me/905526856907?text=Merhaba,%20Three%20Brothers%20salonunuzdan%20randevu%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" class="btn-espresso-luxury btn-shimmer" data-i18n="c_btn_wa">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
              </svg>
              <span>WhatsApp ile Randevu Al</span>
            </a>
            <a href="tel:+905526856907" class="btn-outline-gold" data-i18n="c_btn_call">
              Hemen Arayın
            </a>
            <a href="https://maps.google.com/?cid=16986332279537405342" target="_blank" rel="noopener noreferrer" class="btn-outline-gold" data-i18n="c_btn_maps">
              Yol Tarifi Al
            </a>
          </div>
        </div>

        <!-- Right Info Items -->
        <div class="contact-info-list">

          <div class="contact-info-item">
            <span data-i18n="c_hours_title">ÇALIŞMA SAATLERİ</span>
            <strong data-i18n="c_hours_val">Salı – Pazar: 08:30 – 20:30 (Pazartesi Kapalı)</strong>
          </div>

          <div class="contact-info-item">
            <span data-i18n="c_phone_title">TELEFON</span>
            <a href="tel:+905526856907">+90 552 685 69 07</a>
          </div>

          <div class="contact-info-item">
            <span data-i18n="c_address_title">ADRES</span>
            <strong data-i18n="c_address_val">Bahçelievler Mah. Demokrasi Blv. No: 8Z1, Manavgat / Antalya</strong>
          </div>

        </div>

      </div>

    </div>
  </section>`;

indexHTML = indexHTML.replace(oldContactSectionRegex, newContactSectionHTML);

fs.writeFileSync('index.html', indexHTML, 'utf8');
fs.writeFileSync('public/index.html', indexHTML, 'utf8');
console.log('index.html contact section updated successfully');
