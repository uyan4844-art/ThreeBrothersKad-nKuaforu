'use client';

import React from 'react';

export const TRUST_POINTS = [
  {
    number: '01',
    title: 'Uzman Saç Analizi',
    description: 'İşlem öncesinde saç yapınızı analiz ediyor, sağlığını riske atacak hiçbir agresif adıma girmiyoruz.',
  },
  {
    number: '02',
    title: 'Değişmez Hijyen Standardı',
    description: 'Salonumuzda kullanılan tüm ekipmanlar kişiye özel sterilize edilir.',
  },
  {
    number: '03',
    title: 'Dürüst ve Şeffaf Hizmet',
    description: 'Beklentilerinizi dinliyor, saçınıza en çok yakışan sürdürülebilir tonları belirliyoruz.',
  },
];

export const TrustSection: React.FC = () => {
  return (
    <section id="neden-biz" className="py-16 md:py-24 bg-[#F0EAE1]/40 border-y border-[#C5A880]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-[#A48358] text-xs font-bold tracking-widest uppercase">
            GÜVEN & KALİTE STANDARTLARIMIZ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1918]">
            Manavgat’ta Güven Veren Saç Tasarım Deneyimi
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light">
            Three Brothers stüdyomuzda her misafirimiz için şeffaf, samimi ve tavizsiz standartlarla çalışıyoruz.
          </p>
        </div>

        {/* 01 / 02 / 03 Numaralı Minimalist Güven Blokları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TRUST_POINTS.map((item) => (
            <div
              key={item.number}
              className="bg-[#FAF8F5] border border-[#C5A880]/25 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden"
            >
              <div className="text-4xl sm:text-5xl font-serif font-extrabold text-[#C5A880]/30 group-hover:text-[#A48358]/50 transition-colors mb-4">
                {item.number}
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1A1918] mb-2.5">
                {item.title}
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
