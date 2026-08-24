'use client';

import React from 'react';
import { Header } from '../components/Header';
import { Services } from '../components/Services';
import { TrustStats } from '../components/TrustStats';
import { TrustSection } from '../components/TrustSection';

export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-[#FAF8F5] text-[#1A1918] selection:bg-[#C5A880]/30 pb-12">
      {/* Sticky Glassmorphism Header */}
      <Header />

      {/* Hero Section (Tam Ekran Arka Planlı Absolute/Layered Yapı) */}
      <section id="hero" className="relative min-h-[90dvh] w-full flex flex-col justify-end items-center px-5 pb-10 pt-24 overflow-hidden">
        {/* Arka Plan Görseli */}
        <picture className="absolute inset-0 w-full h-full -z-20 pointer-events-none">
          <source media="(max-width: 768px)" srcSet="/images/hero-model-mobile.webp" />
          <img
            src="/images/hero-model.webp"
            alt="Three Brothers Saç Tasarımı - Manavgat Kadın Kuaförü"
            className="hero-bg-image absolute inset-0 w-full h-full object-cover object-[72%_12%]"
          />
        </picture>

        {/* Sadece Alt Geçiş Degradesi */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/40 to-transparent pointer-events-none -z-10" />

        {/* İçerik (Yazılar ve Butonlar) */}
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto flex flex-col items-center">
          <span className="inline-block bg-[#C5A880]/15 text-[#A48358] border border-[#C5A880]/30 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
            2014’TEN BERİ MANAVGAT’TA BUTİK KADIN KUAFÖRÜ DENEYİMİ
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1A1918] leading-tight">
            Kusursuz Renk, <br />
            Doğal Zarafet.
          </h1>
          <p className="text-stone-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Manavgat'ta saçın sağlığını koruyan profesyonel balyaj, mikro kaynak ve kişiye özel sarışınlık tasarımı.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 max-w-xs sm:max-w-none mx-auto w-full">
            {/* 1. Hizmetlerimizi Keşfet (Siyah Dolgulu / Beyaz Yazılı Buton) */}
            <a
              href="#hizmetler"
              className="w-full sm:w-auto bg-[#1A1918] hover:bg-[#2C2724] text-white font-montserrat text-sm font-bold uppercase tracking-wider py-3.5 px-8 rounded-full shadow-md border border-[#1A1918] transition-all duration-300 text-center"
            >
              Hizmetlerimizi Keşfet
            </a>
            {/* 2. Randevu & Saç Analizi (Krem Zeminli / Siyah Çerçeveli Buton) */}
            <a
              href="https://wa.me/905526856907?text=Merhaba,%20Three%20Brothers%20salonunuzdan%20randevu%20ve%20saç%20analizi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#FAF8F5] hover:bg-[#1A1918] hover:text-white text-[#1A1918] font-montserrat text-sm font-bold uppercase tracking-wider py-3.5 px-8 rounded-full shadow-md border-1.5 border-[#1A1918] transition-all duration-300 text-center"
            >
              Randevu & Saç Analizi
            </a>
          </div>
        </div>
      </section>

      {/* Services with Tabs and Direct Links */}
      <Services />

      {/* 4'lü Güven ve Tecrübe Bölümü */}
      <TrustStats />

      {/* 01 / 02 / 03 Numaralı Güven & Standartlar Bölümü */}
      <TrustSection />
    </main>
  );
}
