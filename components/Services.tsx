'use client';

import React, { useState } from 'react';
import { ServiceDetailModal, ServiceDetail } from './ServiceDetailModal';

export type ServiceCategory = 'all' | 'renklendirme' | 'kaynak' | 'bakim';

export interface ServiceCardData extends ServiceDetail {
  category: ServiceCategory[];
  image: string;
  pageUrl: string;
  isTall?: boolean;
}

export const SERVICES_LIST: ServiceCardData[] = [
  {
    id: 'balyaj',
    category: ['renklendirme'],
    badge: 'UZMANLIK ALANI',
    title: 'Profesyonel Balyaj & Sarı Saç',
    duration: '3.5 – 5 Saat',
    description: 'Doğal dip tonuyla yumuşak geçişler sunan, 6-8 ay dip boyası gerektirmeyen kişiselleştirilmiş ışıltılı sarı saç tasarımı.',
    products: ['Olaplex No.1 & No.2', 'L’Oréal Blond Studio 9', 'Schwarzkopf Fibreplex'],
    steps: [
      'Saç elastikiyet ve geçmiş işlem analizi',
      'Plex korumalı kontrollü mikro açma',
      'Ten rengine özel soğuk/bej tonlama',
      'Yoğun nemlendirici bakım & fön'
    ],
    waMessage: 'Merhaba, Balyaj hizmetiniz hakkında bilgi ve randevu almak istiyorum.',
    image: './images/services/bento-5.webp',
    pageUrl: 'balyaj.html',
    isTall: true,
  },
  {
    id: 'blonde',
    category: ['renklendirme'],
    badge: 'ÖZEL UZMANLIK',
    title: 'Blonde & İpeksi Renk Tasarımı',
    duration: '4 – 6 Saat',
    description: 'Bebek sarısı, bej blonde ve platin tonlarında, bağ yapısını koruyarak uygulanan saf sarışınlık sanatı.',
    products: ['Olaplex Bond Multiplier', 'Davines Century of Light', 'Kérastase Blond Absolu'],
    steps: [
      'Mukavemet ve pH analizi',
      'Kademeli homojen açma protokolü',
      'Sararma karşıtı cila ve parlatma',
      'Hyalüronik asit nem terapisi'
    ],
    waMessage: 'Merhaba, Blonde ve Sarı Saç hizmetiniz hakkında bilgi ve randevu almak istiyorum.',
    image: './images/services/bento-2.webp',
    pageUrl: 'blonde.html',
  },
  {
    id: 'kaynak',
    category: ['kaynak'],
    badge: 'KONFOR & HACİM',
    title: 'Mikro Kapsül Kaynak',
    duration: '2.5 – 4 Saat',
    description: '%100 doğal el değmemiş saçlar ve nano keratin kapsüllerle uygulanan, görünmez ve hafif saç uzatma çözümü.',
    products: ['%100 Virgin Human Hair', 'Medical Grade Nano-Keratin'],
    steps: [
      'Doğal saç rengi ve doku eşleştirme',
      'Hassas mikro kapsül yerleşimi',
      'Doğal geçiş kesimi ve şekillendirme'
    ],
    waMessage: 'Merhaba, Mikro Kaynak hizmetiniz hakkında bilgi ve randevu almak istiyorum.',
    image: './images/services/bento-6.webp',
    pageUrl: 'kaynak.html',
  },
  {
    id: 'ombre',
    category: ['renklendirme'],
    badge: 'ZARİF GEÇİŞLER',
    title: 'Ombre & Sombre Geçişleri',
    duration: '3 – 4.5 Saat',
    description: 'Doğal dip tonundan ışıltılı uçlara kesintisiz renk degrade geçişi.',
    products: ['L’Oréal Majirel Glow', 'Wella Blondor', 'Moroccanoil Calypso'],
    steps: [
      'Kontrast seviyesi belirleme',
      'Yumuşak krepe tekniğiyle açma',
      'Zengin pigmentli cila tonlaması'
    ],
    waMessage: 'Merhaba, Ombre ve Sombre hizmetiniz hakkında bilgi ve randevu almak istiyorum.',
    image: './images/services/bento-4.webp',
    pageUrl: 'ombre.html',
  },
  {
    id: 'renklendirme',
    category: ['renklendirme', 'bakim'],
    badge: 'KİŞİYE ÖZEL',
    title: 'Kişiye Özel Renklendirme & Tonlama',
    duration: '2 – 3 Saat',
    description: 'Ten alt tonunuza özel amonyaksız zengin pigmentli saç boyası ve parlaklık cilaları.',
    products: ['L’Oréal Inoa (Ammonia-Free)', 'K18 Biomimetic Hairscience'],
    steps: [
      'Cilt alt tonu analizi',
      'Özel pigment formülasyonu',
      'K18 Moleküler saç onarımı'
    ],
    waMessage: 'Merhaba, Renklendirme ve Tonlama hizmetiniz hakkında bilgi ve randevu almak istiyorum.',
    image: './images/services/bento-1.webp',
    pageUrl: 'renklendirme.html',
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
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredServices = SERVICES_LIST.filter((srv) =>
    activeCategory === 'all' ? true : srv.category.includes(activeCategory)
  );

  const handleOpenDetail = (service: ServiceDetail) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section id="hizmetler" className="py-20 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-[#A48358] text-xs font-bold tracking-widest uppercase">
            UZMANLIK ALANLARIMIZ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1C19]">
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
                      ? 'bg-[#1F1C19] text-white shadow-md'
                      : 'text-stone-600 hover:text-[#1F1C19]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {filteredServices.map((service) => {
            const isTall = service.isTall;
            return (
              <div
                key={service.id}
                onClick={() => handleOpenDetail(service)}
                className={`group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200/70 transition-all duration-500 cursor-pointer ${
                  isTall ? 'md:row-span-2' : ''
                }`}
              >
                {/* Background Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-6 md:p-8 text-white">
                  <span className="text-[#C5A880] text-[10px] font-bold tracking-widest uppercase mb-1">
                    {service.badge}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl font-bold mb-3 leading-snug">
                    {service.title}
                  </h3>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-1">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenDetail(service);
                      }}
                      className="inline-flex items-center gap-1.5 bg-[#C5A880]/20 hover:bg-[#C5A880] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-[#C5A880]/40 transition-colors"
                    >
                      <span>Detayları Gör</span>
                      <span>→</span>
                    </button>
                    <a
                      href={service.pageUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs text-white/75 hover:text-white underline underline-offset-4"
                    >
                      Sayfayı İncele
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Sheet / Modal */}
      <ServiceDetailModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Services;
