'use client';

import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Services } from '../components/Services';
import { TrustSection } from '../components/TrustSection';
import { LanguageCode } from '../components/LanguageSelector';

export default function Home() {
  const [currentLang, setCurrentLang] = useState<LanguageCode>('tr');

  const handleLanguageChange = (lang: LanguageCode) => {
    setCurrentLang(lang);
    if (typeof window !== 'undefined' && (window as any).I18n) {
      (window as any).I18n.setLanguage(lang);
    }
  };

  return (
    <main className="min-h-[100dvh] bg-[#FAF8F5] text-[#1A1918] selection:bg-[#C5A880]/30 pb-12">
      {/* Sticky Glassmorphism Header */}
      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />

      {/* Hero Section */}
      <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <span className="inline-block bg-[#C5A880]/15 text-[#A48358] border border-[#C5A880]/30 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
            2014’TEN BERİ MANAVGAT’TA BUTİK KUAFÖR DENEYİMİ
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1A1918] leading-tight">
            Işıltı Saçlarda Başlar.
          </h1>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Manavgat’ta Doğal ve Çekici Işıltının Adresi. Saçlarınızda doğal geçişler ve göz alıcı parlaklık arıyorsanız doğru yerdesiniz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 max-w-xs sm:max-w-none mx-auto">
            {/* 1. Hizmetlerimiz (Siyah Dolgulu / Beyaz Yazılı Buton) */}
            <a
              href="#hizmetler"
              className="w-full sm:w-auto bg-[#1A1918] hover:bg-[#2C2724] text-white font-montserrat text-sm font-bold uppercase tracking-wider py-3.5 px-8 rounded-full shadow-md border border-[#1A1918] transition-all duration-300 text-center"
            >
              Hizmetlerimiz
            </a>
            {/* 2. Randevu Al (Krem Zeminli / Siyah Çerçeveli Buton) */}
            <a
              href="https://wa.me/905526856907?text=Merhaba,%20Three%20Brothers%20salonunuzdan%20randevu%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#FAF8F5] hover:bg-[#1A1918] hover:text-white text-[#1A1918] font-montserrat text-sm font-bold uppercase tracking-wider py-3.5 px-8 rounded-full shadow-md border-1.5 border-[#1A1918] transition-all duration-300 text-center"
            >
              Randevu Al
            </a>
          </div>
        </div>
      </section>

      {/* Services with Tabs and Direct Links */}
      <Services />

      {/* 01 / 02 / 03 Numaralı Güven & Standartlar Bölümü */}
      <TrustSection />
    </main>
  );
}
