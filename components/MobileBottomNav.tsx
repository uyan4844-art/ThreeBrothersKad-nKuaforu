'use client';

import React from 'react';

export const MobileBottomNav: React.FC = () => {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-lg border-t border-[#C5A880]/30 px-4 pt-2.5 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] shadow-2xl"
      aria-label="Mobil Hızlı İletişim Barı"
    >
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        {/* 1. Hemen Ara Butonu */}
        <a
          href="tel:+905526856907"
          className="flex items-center justify-center gap-2 bg-[#1F1C19] hover:bg-[#36312C] text-white min-h-[44px] px-4 py-2.5 rounded-full text-xs font-bold font-montserrat shadow-md transition-all active:scale-95 cursor-pointer"
          aria-label="Hemen Ara: 0552 685 69 07"
        >
          <svg className="w-4 h-4 text-[#C5A880]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
          </svg>
          <span>Hemen Ara</span>
        </a>

        {/* 2. WhatsApp Randevu Butonu */}
        <a
          href="https://wa.me/905526856907?text=Merhaba,%20Three%20Brothers%20salonunuzdan%20randevu%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white min-h-[44px] px-4 py-2.5 rounded-full text-xs font-bold font-montserrat shadow-md shadow-[#25D366]/25 transition-all active:scale-95 cursor-pointer"
          aria-label="WhatsApp ile Randevu Al"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
          </svg>
          <span>WhatsApp Randevu</span>
        </a>
      </div>
    </nav>
  );
};

export default MobileBottomNav;
