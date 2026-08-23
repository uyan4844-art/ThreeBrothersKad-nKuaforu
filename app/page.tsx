'use client';

import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Services } from '../components/Services';
import { MobileBottomNav } from '../components/MobileBottomNav';
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
    <main className="min-h-[100dvh] bg-[#FAF7F2] text-[#1F1C19] selection:bg-[#C5A880]/30 pb-[calc(6rem+env(safe-area-inset-bottom,0px))] md:pb-0">
      {/* Sticky Glassmorphism Header */}
      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />

      {/* Hero Section */}
      <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <span className="inline-block bg-[#C5A880]/15 text-[#A48358] border border-[#C5A880]/30 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
            2014’TEN BERİ MANAVGAT’TA BUTİK KUAFÖR DENEYİMİ
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1F1C19] leading-tight">
            Sarı Saçta Doğallık & <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#A48358]">Kişiye Özel Lüks Dokunuş</span>
          </h1>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Biyolojik saç sağlığını ve bağ koruma teknolojisini merkezimize alarak, ten renginizle kusursuz uyum sağlayan sarışınlık ve saç tasarımı sunuyoruz.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/905526856907?text=Merhaba,%20Three%20Brothers%20salonunuzdan%20randevu%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1F1C19] hover:bg-[#36312C] text-white font-montserrat text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              WhatsApp ile Randevu Al
            </a>
            <a
              href="#hizmetler"
              className="bg-white/80 hover:bg-white border border-[#C5A880]/40 text-[#1F1C19] font-montserrat text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-full shadow-sm transition-all duration-300"
            >
              Hizmetleri İncele
            </a>
          </div>
        </div>
      </section>

      {/* Services with Tabs and Bottom Sheet Modal */}
      <Services />

      {/* App-Like Mobile Bottom Navigation */}
      <MobileBottomNav />
    </main>
  );
}
