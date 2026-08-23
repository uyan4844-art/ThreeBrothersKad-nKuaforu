'use client';

import React, { useState, useEffect } from 'react';
import { LanguageSelector, LanguageCode } from './LanguageSelector';

interface HeaderProps {
  currentLang?: LanguageCode;
  onLanguageChange?: (lang: LanguageCode) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang = 'tr',
  onLanguageChange,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 px-4 sm:px-8 py-3.5 sm:py-4.5 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#C5A880]/20 shadow-sm py-2.5 sm:py-3.5'
            : 'bg-[#FAF7F2]/60 backdrop-blur-xs border-b border-[#C5A880]/15'
        }`}
      >
        {/* Left: Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 no-underline">
          <img
            src="./images/logo.webp"
            alt="Three Brothers Logo"
            className="w-10 h-10 rounded-full border border-[#C5A880]/30 shadow-2xs"
          />
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold text-[#1F1C19] tracking-wider leading-none">
              Three Brothers
            </span>
            <span className="text-[9px] font-bold text-[#A48358] tracking-widest uppercase mt-0.5">
              BAYAN KUAFÖRÜ · MANAVGAT
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-[#1F1C19] font-montserrat">
          <a href="#hizmetler" className="hover:text-[#A48358] transition-colors">
            Hizmetlerimiz
          </a>
          <a href="hakkimizda.html" className="hover:text-[#A48358] transition-colors">
            Hakkımızda
          </a>
          <a href="#surec" className="hover:text-[#A48358] transition-colors">
            Süreç
          </a>
          <a href="#galeri" className="hover:text-[#A48358] transition-colors">
            Galeri
          </a>
          <a href="#yorumlar" className="hover:text-[#A48358] transition-colors">
            Yorumlar
          </a>
          <a href="#sss" className="hover:text-[#A48358] transition-colors">
            SSS
          </a>
          <a href="#iletisim" className="hover:text-[#A48358] transition-colors">
            İletişim
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Language Selector Dropdown */}
          <LanguageSelector
            currentLang={currentLang}
            onLanguageChange={onLanguageChange}
          />

          {/* Instagram Button */}
          <a
            href="https://www.instagram.com/threebrotherrrs/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hidden sm:inline-flex w-9 h-9 rounded-full bg-[#C5A880]/10 hover:bg-[#C5A880] border border-[#C5A880]/25 text-[#1F1C19] hover:text-white items-center justify-center transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          {/* WhatsApp Randevu CTA */}
          <a
            href="https://wa.me/905526856907?text=Merhaba,%20Three%20Brothers%20salonunuzdan%20randevu%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#1F1C19] hover:bg-[#36312C] text-white text-xs font-semibold px-4 py-2 rounded-full border border-[#C5A880]/30 shadow-sm transition-all duration-200"
          >
            <svg className="w-3.5 h-3.5 text-[#25D366] fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
            <span>Randevu Al</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Menüyü Aç"
            className="inline-flex lg:hidden items-center gap-1.5 border border-[#C5A880]/35 rounded-full px-3 py-1.5 text-xs font-bold text-[#1F1C19]"
          >
            <span>MENU</span>
            <span className="w-3.5 h-[1.5px] bg-[#1F1C19]" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            onClick={() => setIsDrawerOpen(false)}
          />
          <aside className="relative w-4/5 max-w-sm bg-[#FAF7F2] h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between border-b border-[#C5A880]/20 pb-4 mb-6">
                <div>
                  <h3 className="font-serif font-bold text-xl text-[#1F1C19]">Three Brothers</h3>
                  <span className="text-[10px] text-[#A48358] font-bold">BAYAN KUAFÖRÜ · MANAVGAT</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(false)}
                  className="w-8 h-8 rounded-full border border-[#C5A880]/30 flex items-center justify-center font-bold"
                >
                  ✕
                </button>
              </div>

              <nav className="space-y-4 font-montserrat text-sm font-semibold text-[#1F1C19]">
                <a href="#hero" onClick={() => setIsDrawerOpen(false)} className="block py-1 hover:text-[#A48358]">
                  Ana Sayfa →
                </a>
                <a href="hakkimizda.html" className="block py-1 hover:text-[#A48358]">
                  Hakkımızda →
                </a>
                <a href="#hizmetler" onClick={() => setIsDrawerOpen(false)} className="block py-1 hover:text-[#A48358]">
                  Hizmetlerimiz →
                </a>
                <a href="#surec" onClick={() => setIsDrawerOpen(false)} className="block py-1 hover:text-[#A48358]">
                  Süreç →
                </a>
                <a href="#galeri" onClick={() => setIsDrawerOpen(false)} className="block py-1 hover:text-[#A48358]">
                  Galeri →
                </a>
                <a href="#yorumlar" onClick={() => setIsDrawerOpen(false)} className="block py-1 hover:text-[#A48358]">
                  Yorumlar →
                </a>
                <a href="#sss" onClick={() => setIsDrawerOpen(false)} className="block py-1 hover:text-[#A48358]">
                  SSS →
                </a>
                <a href="#iletisim" onClick={() => setIsDrawerOpen(false)} className="block py-1 hover:text-[#A48358]">
                  İletişim →
                </a>
              </nav>
            </div>

            <div className="pt-6 border-t border-[#C5A880]/20 space-y-3">
              <a
                href="tel:+905526856907"
                className="w-full flex items-center justify-center py-2.5 rounded-xl border border-[#C5A880]/40 text-xs font-bold text-[#1F1C19]"
              >
                Hemen Ara: +90 552 685 69 07
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default Header;
