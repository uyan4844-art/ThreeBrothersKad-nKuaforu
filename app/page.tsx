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
    <main className="min-h-[100dvh] bg-[#FAF7F2] text-[#1F1C19] selection:bg-[#C5A880]/30 pb-12">
      {/* Sticky Glassmorphism Header */}
      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />

      {/* Hero Section */}
      <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <span className="inline-block bg-[#C5A880]/15 text-[#A48358] border border-[#C5A880]/30 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
            2014’TEN BERİ MANAVGAT’TA BUTİK KUAFÖR DENEYİMİ
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1F1C19] leading-tight">
            Işıltı Saçlarda Başlar.
          </h1>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Manavgat’ta Doğal ve Çekici Işıltının Adresi. Saçlarınızda doğal geçişler ve göz alıcı parlaklık arıyorsanız doğru yerdesiniz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 max-w-xs sm:max-w-none mx-auto">
            {/* 1. Hizmetlerimiz (Beyaz Oval Buton) */}
            <a
              href="#hizmetler"
              className="w-full sm:w-auto bg-white hover:bg-stone-100 text-black font-montserrat text-sm font-bold uppercase tracking-wider py-3.5 px-8 rounded-full shadow-md border border-stone-200 transition-all duration-300 text-center"
            >
              Hizmetlerimiz
            </a>
            {/* 2. Randevu Al (Şeffaf/Siyah İnce Beyaz Çerçeveli Buton) */}
            <a
              href="https://wa.me/905526856907?text=Merhaba,%20Three%20Brothers%20salonunuzdan%20randevu%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-black/80 hover:bg-black text-white font-montserrat text-sm font-bold uppercase tracking-wider py-3.5 px-8 rounded-full shadow-md border border-white/80 transition-all duration-300 text-center"
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
