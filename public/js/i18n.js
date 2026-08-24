/**
 * Three Brothers Kadın Kuaförü - Manavgat
 * 100% Saf Türkçe Sistem ve Modal Kontrolcüsü
 */

// Global Outside Click and Keydown Listeners
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    if (typeof window.closeServiceModal === 'function') {
      window.closeServiceModal();
    }
  }
});

// Modal Controller for Services
const SERVICE_MODAL_DATA = {
  balyaj: {
    badge: 'UZMANLIK ALANI',
    title: 'Profesyonel Balyaj & Sarı Saç',
    duration: '3.5 – 5 Saat',
    desc: 'Saçınızın doğal dip rengine uygun mikro tutamlarla açma ve tonlama yapılarak, dip boyası derdi olmadan 6-8 ay boyunca ışıltısını koruyan kişiselleştirilmiş balyaj tasarımı.',
    products: ['Olaplex No.1 & No.2', "L'Oréal Blond Studio 9", 'Schwarzkopf Fibreplex', 'Davines Heart of Glass'],
    steps: [
      'Kişiye özel saç sağlığı, elastikiyet ve geçmiş boya analizi',
      'Bağ koruyucu Plex teknolojisi ile kontrollü mikro açma',
      'Ten rengine uygun soğuk/bej/sıcak ışıltılı cila tonlaması',
      'Yoğun aminoasit saç maskesi ve ipeksi fön şekillendirme'
    ],
    waText: 'Merhaba,%20Balyaj%20hizmetiniz%20hakkında%20bilgi%20ve%20randevu%20almak%20istiyorum.'
  },
  blonde: {
    badge: 'ÖZEL UZMANLIK',
    title: 'Blonde & İpeksi Renk Tasarımı',
    duration: '4 – 6 Saat',
    desc: 'Bebek sarısı, bej blonde, platin ve buz sarısı tonlarında saçın elastikiyetini koruyan lüks sarışınlık sanatı.',
    products: ['Olaplex Bond Multiplier', "L'Oréal Metal Detox", 'Kérastase Blond Absolu', 'Schwarzkopf Blondme'],
    steps: [
      'Detaylı saç bazı tespiti ve mineral arındırma (Metal Detox)',
      'Aşamalı düşük volümlü açma ve bağ onarımı',
      'Kişiye özel mikro pigmentli sarışınlık cilası',
      'Parlaklık mühürleyici asidik bakım ve şekillendirme'
    ],
    waText: 'Merhaba,%20Blonde%20hizmetiniz%20hakkında%20bilgi%20ve%20randevu%20almak%20istiyorum.'
  },
  kaynak: {
    badge: 'KONFOR & HACİM',
    title: 'Mikro Kapsül Kaynak',
    duration: '2.5 – 4 Saat',
    desc: '%100 doğal el değmemiş saçlar ve nano keratin kapsüllerle uygulanan, dışarıdan kesinlikle fark edilmeyen hafif ve konforlu saç uzatma yöntemi.',
    products: ['%100 Doğal Ham Saç', 'İtalyan Nano Keratin Kapsül', 'Özel Çıkarma Losyonu'],
    steps: [
      'Mevcut saç rengi ve dokusuna %100 uyumlu ham saç seçimi',
      'Saç derisine baskı yapmayan mikro kapsül yerleşimi',
      'Kaynaklı saçlara özel harman kesim ve kat tasarımı',
      'Evde bakım ve tarama eğitimi'
    ],
    waText: 'Merhaba,%20Mikro%20Kapsül%20Kaynak%20hakkında%20bilgi%20ve%20randevu%20almak%20istiyorum.'
  },
  ombre: {
    badge: 'ZARİF GEÇİŞLER',
    title: 'Ombre & Işıltı',
    duration: '3 – 4.5 Saat',
    desc: 'Koyu diplerden uçlara doğru yumuşak ve zarif renk geçişleri. Doğal uzama sürecinde çizgi yapmaz.',
    products: ['Olaplex', 'Wella Freelights', 'Redken Shades EQ'],
    steps: [
      'Doğal saç rengine uygun geçiş seviyesi belirleme',
      'Serbest el (Freehand) gölgeleme ve degrade açma',
      'Geçiş çizgilerini yok eden kademeli tonlama',
      'Nem terapisi ve dalgalı fön bitişi'
    ],
    waText: 'Merhaba,%20Ombre%20hizmetiniz%20hakkında%20bilgi%20ve%20randevu%20almak%20istiyorum.'
  },
  boyama: {
    badge: 'KİŞİYE ÖZEL',
    title: 'Kişiye Özel Saç Boyama & Tonlama',
    duration: '2 – 3 Saat',
    desc: 'Amonyaksız ve organik yağ içerikli profesyonel boyalarla beyaz kapatma, parlaklık kazandırma ve zengin yansımalar.',
    products: ["L'Oréal Inoa", 'Wella Illumina Color', 'Davines Mask with Vibrachrom'],
    steps: [
      'Cilt alt tonu ve göz rengine uygun renk danışmanlığı',
      'Saç derisi koruyucu serum uygulaması',
      'Eşit ve derinlemesine renk pigmentasyonu',
      'Renk sabitleyici pH dengeleyici bakım şampuanı'
    ],
    waText: 'Merhaba,%20Saç%20Boyama%20hizmetiniz%20hakkında%20bilgi%20ve%20randevu%20almak%20istiyorum.'
  },
  kesim: {
    badge: 'FORM & HAREKET',
    title: 'Kişiye Özel Saç Kesimi',
    duration: '45 – 60 Dk',
    desc: 'Yüz hatlarına, saçın doğal düşüşüne ve yaşam tarzınıza uygun, evde kolay şekillenen formda modern saç kesimi.',
    products: ['Mizutani Profesyonel Makaslar', 'Kérastase Şekillendirici Seri', 'Davines Doku Spreyi'],
    steps: [
      'Yüz şekli, kafa anatomisi ve saç yoğunluğu analizi',
      'Islak ve kuru teknikle kat ve doku oluşturma',
      'Kişiselleştirilmiş saç ucu hafifletme',
      'Hacim veren fön ve günlük şekillendirme ipuçları'
    ],
    waText: 'Merhaba,%20Saç%20Kesimi%20hakkında%20bilgi%20ve%20randevu%20almak%20istiyorum.'
  }
};

window.openServiceModal = function(serviceKey) {
  const data = SERVICE_MODAL_DATA[serviceKey];
  if (!data) return;

  const modalBackdrop = document.getElementById('serviceDetailBackdrop');
  if (!modalBackdrop) return;

  const titleEl = document.getElementById('sheetModalTitle');
  const badgeEl = document.getElementById('sheetModalBadge');
  const durationEl = document.getElementById('sheetModalDuration');
  const descEl = document.getElementById('sheetModalDesc');
  const productsContainer = document.getElementById('sheetModalProducts');
  const stepsContainer = document.getElementById('sheetModalSteps');
  const waBtn = document.getElementById('sheetModalWaBtn');

  if (titleEl) titleEl.textContent = data.title;
  if (badgeEl) badgeEl.textContent = data.badge;
  if (durationEl) durationEl.textContent = data.duration;
  if (descEl) descEl.textContent = data.desc;

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
    data.steps.forEach((step, idx) => {
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

// Safe dummy shims for any legacy handlers
window.toggleLangDropdown = function() {};
window.selectLanguage = function() {};
window.toggleDrawerLangAccordion = function() {};
