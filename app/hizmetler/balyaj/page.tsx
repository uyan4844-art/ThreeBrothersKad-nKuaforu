import React from 'react';
import Link from 'next/link';
import { Header } from '../../../components/Header';
import { MobileBottomNav } from '../../../components/MobileBottomNav';

export const metadata = {
  title: 'Manavgat Balyaj & Sarı Saç Tasarımı | Three Brothers Kadın Kuaförü',
  description: 'Manavgat balyaj ve sarı saç tasarımında 6-8 ay dip boyası gerektirmeyen doğal geçişler. Three Brothers Kadın Kuaförü profesyonel balyaj randevusu.',
  keywords: [
    'manavgat balyaj',
    'manavgat kadın kuaförü',
    'manavgat kuaför',
    'threebrothers manavgat',
    'three brothers',
    'üç kardeşler kadın kuaförü'
  ],
};

export default function BalyajPage() {
  return (
    <main className="min-h-[100dvh] bg-[#FAF8F5] text-[#1A1918] selection:bg-[#C5A880]/30 pb-[calc(6rem+env(safe-area-inset-bottom,0px))] md:pb-0">
      <Header />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 mb-6 font-montserrat">
          <Link href="/" className="hover:text-[#A48358]">Anasayfa</Link>
          <span>/</span>
          <Link href="/#hizmetler" className="hover:text-[#A48358]">Hizmetler</Link>
          <span>/</span>
          <span className="text-[#1A1918]">Balyaj</span>
        </div>

        {/* Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[16/9] mb-10">
          <img
            src="/images/services/bento-5.webp"
            alt="Manavgat Balyaj ve Saç Tasarımı - Three Brothers Kadın Kuaförü"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-12 text-white">
            <span className="bg-[#C5A880] text-[#1A1918] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest w-fit mb-3">
              UZMANLIK ALANI
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight mb-2">
              Manavgat Balyaj & Sarı Saç Tasarımı
            </h1>
            <p className="text-white/90 text-sm sm:text-base max-w-2xl font-light">
              Doğal saç diplerinden başlayarak kademeli açılan, dip boyası stresini ortadan kaldıran kişiselleştirilmiş ışıltı sanatı.
            </p>
          </div>
        </div>

        {/* Service Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Info Card 1 */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <span className="text-xs font-bold text-[#A48358] uppercase tracking-wider block mb-1">
              Tahmini İşlem Süresi
            </span>
            <h3 className="font-serif text-xl font-bold text-[#1A1918]">3.5 – 5 Saat</h3>
            <p className="text-xs text-stone-500 mt-2 leading-relaxed">
              Saç uzunluğu, yoğunluğu ve hedeflenen ton derinliğine göre süre değişiklik gösterebilir.
            </p>
          </div>

          {/* Info Card 2 */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <span className="text-xs font-bold text-[#A48358] uppercase tracking-wider block mb-1">
              Kullanılan Teknolojiler
            </span>
            <h3 className="font-serif text-xl font-bold text-[#1A1918]">Plex Bağ Koruma</h3>
            <p className="text-xs text-stone-500 mt-2 leading-relaxed">
              Olaplex No.1 & No.2 ve K18 peptid bağ onarım formülleri ile saç sağlığı korunur.
            </p>
          </div>

          {/* Info Card 3 */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <span className="text-xs font-bold text-[#A48358] uppercase tracking-wider block mb-1">
              Kalıcılık & Bakım
            </span>
            <h3 className="font-serif text-xl font-bold text-[#1A1918]">6 – 8 Ay</h3>
            <p className="text-xs text-stone-500 mt-2 leading-relaxed">
              Doğal geçiş tekniği sayesinde dip boyası gerektirmeden aylarca parlaklığını korur.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center py-6">
          <a
            href="https://wa.me/905526856907?text=Merhaba,%20Balyaj%20hizmetiniz%20hakkında%20bilgi%20ve%20randevu%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#128C7E] hover:bg-[#0E7065] text-white font-montserrat text-sm font-bold py-4 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            <span>WhatsApp ile Balyaj Randevusu Al</span>
            <span>→</span>
          </a>
        </div>
      </section>

      <MobileBottomNav />
    </main>
  );
}
