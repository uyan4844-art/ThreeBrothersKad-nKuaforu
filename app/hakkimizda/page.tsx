import React from 'react';
import Link from 'next/link';
import { Header } from '../../components/Header';
import { MobileBottomNav } from '../../components/MobileBottomNav';

export const metadata = {
  title: 'Hakkımızda | Three Brothers Kadın Kuaförü Manavgat',
  description: '2014’ten beri Manavgat’ta sarı saç ustalığı, balyaj ve mikro kaynak alanında saç sağlığı odaklı butik kadın kuaförü deneyimi.',
  keywords: [
    'manavgat kadın kuaförü',
    'threebrothers',
    'threebrothersmanavgat',
    'manavgat kuaför',
    'three brothers kadın kuaförü',
    'three brothers manavgat'
  ],
};

export default function HakkimizdaPage() {
  return (
    <main className="min-h-[100dvh] bg-[#FAF8F5] text-[#1A1918] selection:bg-[#C5A880]/30 pb-[calc(6rem+env(safe-area-inset-bottom,0px))] md:pb-0">
      <Header />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 mb-6 font-montserrat">
          <Link href="/" className="hover:text-[#A48358]">Anasayfa</Link>
          <span>/</span>
          <span className="text-[#1A1918]">Hakkımızda</span>
        </div>

        <span className="text-xs font-bold text-[#A48358] tracking-widest uppercase">
          HİKAYEMİZ & VİZYONUMUZ
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1918] mt-2 mb-6">
          Manavgat Kadın Kuaförü Three Brothers
        </h1>

        <div className="space-y-6 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>
            2014 yılında Manavgat’ta kurulan <strong>Three Brothers Kadın Kuaförü</strong>, sarı saç renklendirme, profesyonel balyaj ve mikro kaynak alanlarında uzmanlaşmış butik bir kuaför salonudur.
          </p>
          <p>
            Bizim için her misafirimiz eşsizdir. Saçınızın geçmiş kimyasal geçmişini, elastikiyetini ve saç sağlığını analiz ederek ten alt tonunuza en uygun tonu tasarlıyoruz.
          </p>
        </div>

        <div className="mt-10 p-6 bg-white rounded-2xl border border-stone-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-[#1A1918]">Salonumuzu Ziyaret Edin</h3>
            <p className="text-xs text-stone-500">Bahçelievler Mahallesi, Demokrasi Bulvarı No:8 D:0, 07600 Manavgat / Antalya</p>
          </div>
          <a
            href="https://wa.me/905526856907?text=Merhaba,%20Three%20Brothers%20salonunuzdan%20randevu%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1A1918] hover:bg-[#2C2724] text-white text-xs font-bold px-6 py-3 rounded-full font-montserrat uppercase tracking-wider"
          >
            Randevu Al
          </a>
        </div>
      </section>

      <MobileBottomNav />
    </main>
  );
}
