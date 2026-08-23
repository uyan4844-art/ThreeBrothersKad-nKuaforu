'use client';

import React, { useState, useEffect } from 'react';

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  isSpecial?: boolean;
}

export const MobileBottomNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'hizmetler', 'yorumlar'];
      const scrollPos = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    {
      id: 'hero',
      label: 'Anasayfa',
      href: '#hero',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: 'hizmetler',
      label: 'Hizmetler',
      href: '#hizmetler',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="20" y1="4" x2="8.12" y2="15.88" />
          <line x1="14.47" y1="14.48" x2="20" y2="20" />
          <line x1="8.12" y1="8.12" x2="12" y2="12" />
        </svg>
      ),
    },
    {
      id: 'yorumlar',
      label: 'Yorumlar',
      href: '#yorumlar',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      href: 'https://wa.me/905526856907?text=Merhaba,%20Three%20Brothers%20salonunuzdan%20randevu%20almak%20istiyorum.',
      isSpecial: true,
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
        </svg>
      ),
    },
  ];

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-[#C5A880]/25 px-4 pt-2 flex justify-around items-center shadow-lg pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))]"
      aria-label="Mobil Alt Gezinme Barı"
    >
      {navItems.map((item) => {
        if (item.isSpecial) {
          return (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-3.5 py-1.5 rounded-full shadow-md shadow-[#25D366]/30 text-xs font-bold font-montserrat transition-transform active:scale-95"
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          );
        }

        const isActive = activeTab === item.id;
        return (
          <a
            key={item.id}
            href={item.href}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center gap-0.5 text-[10px] font-semibold font-montserrat px-2 py-1 rounded-xl transition-all ${
              isActive ? 'text-[#A48358] font-bold scale-105' : 'text-stone-500 hover:text-[#1F1C19]'
            }`}
          >
            <div className={isActive ? 'text-[#A48358]' : 'text-stone-500'}>{item.icon}</div>
            <span>{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
};

export default MobileBottomNav;
