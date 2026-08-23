'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export type ServiceCategory = 'all' | 'renklendirme' | 'kaynak' | 'bakim';

export interface ServiceCardData {
  id: string;
  category: ServiceCategory[];
  badge: string;
  title: string;
  alt: string;
  description: string;
  duration: string;
  image: string;
  href: string;
  isTall?: boolean;
}

export const SERVICES_LIST: ServiceCardData[] = [
  {
    id: 'balyaj',
    category: ['renklendirme'],
    badge: 'UZMANLIK ALANI',
    title: 'Profesyonel Balyaj & Sarı Saç',
    alt: 'Manavgat Balyaj ve Sarı Saç Tasarımı - Three Brothers Kadın Kuaförü',
    description: 'Doğal dip tonuyla yumuşak geçişler sunan, 6-8 ay dip boyası gerektirmeyen kişiselleştirilmiş ışıltılı sarı saç tasarımı.',
    duration: '3.5 – 5 Saat',
    image: '/images/services/bento-5.webp',
    href: '/hizmetler/balyaj',
    isTall: true,
  },
  {
    id: 'blonde',
    category: ['renklendirme'],
    badge: 'ÖZEL UZMANLIK',
    title: 'Blonde & İpeksi Renk Tasarımı',
    alt: 'Manavgat Sarı Saç ve Blonde Renk Tasarımı - Three Brothers Kadın Kuaförü',
    description: 'Bebek sarısı, bej blonde ve platin tonlarında, bağ yapısını koruyarak uygulanan saf sarışınlık sanatı.',
    duration: '4 – 6 Saat',
    image: '/images/services/bento-2.webp',
    href: '/hizmetler/blonde',
  },
  {
    id: 'kaynak',
    category: ['kaynak'],
    badge: 'KONFOR & HACİM',
    title: 'Mikro Kapsül Kaynak',
    alt: 'Manavgat Mikro Kapsül Saç Kaynak - Three Brothers Kadın Kuaförü',
    description: '%100 doğal el değmemiş saçlar ve nano keratin kapsüllerle uygulanan, görünmez ve hafif saç uzatma çözümü.',
    duration: '2.5 – 4 Saat',
    image: '/images/services/bento-6.webp',
    href: '/hizmetler/kaynak',
  },
  {
    id: 'ombre',
    category: ['renklendirme'],
    badge: 'ZARİF GEÇİŞLER',
    title: 'Ombre & Sombre Geçişleri',
    alt: 'Manavgat Ombre ve Sombre Saç Tasarımı - Three Brothers Kadın Kuaförü',
    description: 'Doğal dip tonundan ışıltılı uçlara kesintisiz renk degrade geçişi.',
    duration: '3 – 4.5 Saat',
    image: '/images/services/bento-4.webp',
    href: '/hizmetler/ombre',
  },
  {
    id: 'renklendirme',
    category: ['renklendirme', 'bakim'],
    badge: 'KİŞİYE ÖZEL',
    title: 'Kişiye Özel Renklendirme & Tonlama',
    alt: 'Manavgat Profesyonel Saç Boyama ve Renklendirme - Three Brothers Kadın Kuaförü',
    description: 'Ten alt tonunuza özel amonyaksız zengin pigmentli saç boyası ve parlaklık cilaları.',
    duration: '2 – 3 Saat',
    image: '/images/services/bento-1.webp',
    href: '/hizmetler/renklendirme',
  },
];

const CATEGORIES: { key: ServiceCategory; label: string }[] = [
  { key: 'all', label: 'Tümü' },
  { key: 'renklendirme', label: 'Renklendirme & Balyaj' },
  { key: 'kaynak', label: 'Mikro Kaynak' },
  { key: 'bakim', label: 'Bakım & Kesim' },
];

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const filteredServices = SERVICES_LIST.filter((srv) =>
    activeCategory === 'all' ? true : srv.category.includes(activeCategory)
  );

  return (
    <section id="hizmetler" className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-[#A48358] text-xs font-bold tracking-widest uppercase">
            UZMANLIK ALANLARIMIZ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1918]">
            Kişiye Özel Profesyonel Dokunuşlar
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light">
            Renk, form ve bakımda doğal görünümü modern kuaförlük teknikleriyle buluşturuyoruz.
          </p>
        </div>

        {/* Horizontal Category Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto py-2 no-scrollbar">
          <div className="inline-flex gap-2 bg-white/90 backdrop-blur-md p-1.5 rounded-full border border-[#C5A880]/30 shadow-sm">
            {CATEGORIES.map((tab) => {
              const isActive = activeCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveCategory(tab.key)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#1A1918] text-white shadow-md'
                      : 'text-stone-600 hover:text-[#1A1918]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid with Direct Multi-Page Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {filteredServices.map((service) => {
            const isTall = service.isTall;
            return (
              <Link
                key={service.id}
                href={service.href}
                className={`group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200/70 transition-all duration-500 block ${
                  isTall ? 'md:row-span-2' : ''
                }`}
              >
                {/* Background Image */}
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-6 md:p-8 text-white">
                  <span className="text-[#C5A880] text-[10px] font-bold tracking-widest uppercase mb-1">
                    {service.badge}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl font-bold mb-2 leading-snug">
                    {service.title}
                  </h3>

                  {/* Direct Multi-Page Link Button */}
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 bg-[#C5A880]/25 group-hover:bg-[#C5A880] border border-[#C5A880]/45 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-300">
                      <span>Hizmeti İncele</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
