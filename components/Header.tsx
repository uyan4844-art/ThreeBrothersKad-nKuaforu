'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
    };
  }, [isDrawerOpen]);

  return (
    <>
      {/* =========================================================================
          1. DESKTOP & MOBILE LUXURY STICKY HEADER (Desktop untouched)
      ========================================================================== */}
      <header
        className={`fixed top-0 left-0 w-full z-40 px-4 sm:px-8 py-3.5 sm:py-4.5 pt-[calc(0.875rem+env(safe-area-inset-top,0px))] flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#C5A880]/20 shadow-sm'
            : 'bg-[#FAF7F2]/60 backdrop-blur-xs border-b border-[#C5A880]/15'
        }`}
      >
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <img
            src="/images/logo.webp"
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
        </Link>

        {/* Center: Desktop Navigation (100% Intact) */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-[#1F1C19] font-montserrat">
          <Link href="/#hizmetler" className="hover:text-[#A48358] transition-colors">
            Hizmetlerimiz
          </Link>
          <Link href="/hakkimizda" className="hover:text-[#A48358] transition-colors">
            Hakkımızda
          </Link>
          <Link href="/#surec" className="hover:text-[#A48358] transition-colors">
            Süreç
          </Link>
          <Link href="/#galeri" className="hover:text-[#A48358] transition-colors">
            Galeri
          </Link>
          <Link href="/#yorumlar" className="hover:text-[#A48358] transition-colors">
            Yorumlar
          </Link>
          <Link href="/#sss" className="hover:text-[#A48358] transition-colors">
            SSS
          </Link>
          <Link href="/#iletisim" className="hover:text-[#A48358] transition-colors">
            İletişim
          </Link>
        </nav>

        {/* Right Actions: Language Selector + Instagram + Randevu Al + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          {/* Tıklanabilir Lüks Dil Seçici (Language Dropdown) */}
          <LanguageSelector
            currentLang={currentLang}
            onLanguageChange={onLanguageChange}
          />

          {/* Instagram Butonu (Masaüstü) */}
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

          {/* WhatsApp Randevu Butonu (Masaüstü) */}
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

          {/* Mobil Menü Butonu (Zarif İki Çizgili Hamburger + "MENU" Yazısı) */}
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Menüyü Aç"
            className="inline-flex lg:hidden items-center gap-1.5 border border-[#C5A880]/35 bg-white/80 hover:bg-white rounded-full px-3 py-1.5 text-xs font-bold text-[#1F1C19] shadow-2xs transition-colors cursor-pointer"
          >
            <span>MENU</span>
            <div className="flex flex-col gap-1 w-3.5">
              <span className="w-full h-[1.5px] bg-[#1F1C19] rounded-full" />
              <span className="w-full h-[1.5px] bg-[#1F1C19] rounded-full" />
            </div>
          </button>
        </div>
      </header>

      {/* =========================================================================
          2. "SHINE HAIR" TARZI LÜKS AÇILIR MOBİL MENÜ ÇEKMECESİ (md:hidden)
      ========================================================================== */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end animate-in fade-in duration-200">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setIsDrawerOpen(false)}
          />

          {/* Drawer Panel */}
          <aside className="relative w-full max-w-[360px] bg-[#FAF7F2] h-[100dvh] min-h-[100dvh] shadow-2xl p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] flex flex-col justify-between overflow-y-auto z-10 animate-in slide-in-from-right duration-300 overscroll-contain">
            <div>
              {/* Üst Kısım: Başlık & Kapat Butonu */}
              <div className="flex items-center justify-between border-b border-[#C5A880]/20 pb-4 mb-6">
                <div>
                  <h3 className="font-serif font-bold text-xl text-[#1F1C19]">Three Brothers</h3>
                  <span className="text-[9px] text-[#A48358] font-bold tracking-widest uppercase">
                    BAYAN KUAFÖRÜ · MANAVGAT
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(false)}
                  aria-label="Menüyü Kapat"
                  className="w-9 h-9 rounded-full border border-[#C5A880]/30 bg-white flex items-center justify-center font-bold text-sm text-[#1F1C19] hover:bg-[#1F1C19] hover:text-white transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Ana Sayfa Linkleri */}
              <nav className="space-y-2.5 font-montserrat text-sm font-semibold text-[#1F1C19] mb-6">
                <Link
                  href="/"
                  onClick={() => setIsDrawerOpen(false)}
                  className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-white hover:text-[#A48358] transition-colors"
                >
                  <span>Ana Sayfa</span>
                  <span className="text-[#A48358]">→</span>
                </Link>
                <Link
                  href="/hakkimizda"
                  onClick={() => setIsDrawerOpen(false)}
                  className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-white hover:text-[#A48358] transition-colors"
                >
                  <span>Hakkımızda</span>
                  <span className="text-[#A48358]">→</span>
                </Link>
                <Link
                  href="/#iletisim"
                  onClick={() => setIsDrawerOpen(false)}
                  className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-white hover:text-[#A48358] transition-colors"
                >
                  <span>İletişim</span>
                  <span className="text-[#A48358]">→</span>
                </Link>
              </nav>

              {/* Hizmetler Bölümü (Ayrı Linkler) */}
              <div className="space-y-2 mb-6">
                <span className="text-[10px] font-bold text-[#A48358] tracking-widest uppercase block mb-2 px-3">
                  HİZMETLERİMİZ
                </span>
                <div className="space-y-1.5 font-montserrat text-xs font-semibold text-[#1F1C19]">
                  <Link
                    href="/hizmetler/balyaj"
                    onClick={() => setIsDrawerOpen(false)}
                    className="flex items-center justify-between p-3 bg-white border border-[#C5A880]/20 rounded-xl hover:border-[#C5A880] transition-colors shadow-2xs"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#A48358]">•</span>
                      <span>Balyaj & Blonde</span>
                    </div>
                    <span className="text-[#A48358]">→</span>
                  </Link>

                  <Link
                    href="/hizmetler/kaynak"
                    onClick={() => setIsDrawerOpen(false)}
                    className="flex items-center justify-between p-3 bg-white border border-[#C5A880]/20 rounded-xl hover:border-[#C5A880] transition-colors shadow-2xs"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#A48358]">•</span>
                      <span>Mikro Kapsül Kaynak</span>
                    </div>
                    <span className="text-[#A48358]">→</span>
                  </Link>

                  <Link
                    href="/hizmetler/ombre"
                    onClick={() => setIsDrawerOpen(false)}
                    className="flex items-center justify-between p-3 bg-white border border-[#C5A880]/20 rounded-xl hover:border-[#C5A880] transition-colors shadow-2xs"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#A48358]">•</span>
                      <span>Ombre & Sombre</span>
                    </div>
                    <span className="text-[#A48358]">→</span>
                  </Link>

                  <Link
                    href="/hizmetler/renklendirme"
                    onClick={() => setIsDrawerOpen(false)}
                    className="flex items-center justify-between p-3 bg-white border border-[#C5A880]/20 rounded-xl hover:border-[#C5A880] transition-colors shadow-2xs"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#A48358]">•</span>
                      <span>Saç Boyama & Tonlama</span>
                    </div>
                    <span className="text-[#A48358]">→</span>
                  </Link>

                  <Link
                    href="/hizmetler/renklendirme"
                    onClick={() => setIsDrawerOpen(false)}
                    className="flex items-center justify-between p-3 bg-white border border-[#C5A880]/20 rounded-xl hover:border-[#C5A880] transition-colors shadow-2xs"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#A48358]">•</span>
                      <span>Kişiye Özel Kesim</span>
                    </div>
                    <span className="text-[#A48358]">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Alt İletişim & Aksiyon Kartı */}
            <div className="pt-4 border-t border-[#C5A880]/20 space-y-3">
              <div className="text-[11px] font-montserrat text-stone-600 space-y-1">
                <div className="flex items-center gap-2 font-bold text-[#1F1C19]">
                  <svg className="w-3.5 h-3.5 text-[#A48358]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>0552 685 69 07</span>
                </div>
                <div className="flex items-center gap-2 text-stone-500">
                  <svg className="w-3.5 h-3.5 text-[#A48358]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Salı – Pazar | 08:30 – 20:30</span>
                </div>
              </div>

              {/* Yan Yana İki Buton: Hemen Ara & Konum */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+905526856907"
                  className="flex items-center justify-center gap-1.5 bg-[#1F1C19] hover:bg-[#36312C] text-white py-2.5 px-3 rounded-xl text-xs font-bold font-montserrat shadow-sm transition-colors text-center"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span>Hemen Ara</span>
                </a>
                <a
                  href="https://maps.google.com/?cid=16986332279537405342"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-white border border-[#C5A880]/40 hover:bg-[#FAF7F2] text-[#1F1C19] py-2.5 px-3 rounded-xl text-xs font-bold font-montserrat shadow-2xs transition-colors text-center"
                >
                  <svg className="w-3.5 h-3.5 text-[#A48358]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <circle cx="12" cy="11" r="3" />
                  </svg>
                  <span>Konum / Yol Tarifi</span>
                </a>
              </div>

              {/* Geniş WhatsApp Randevu Butonu */}
              <a
                href="https://wa.me/905526856907?text=Merhaba,%20Three%20Brothers%20salonunuzdan%20randevu%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white py-3 px-4 rounded-xl text-xs font-bold font-montserrat shadow-md shadow-[#25D366]/20 hover:shadow-lg transition-transform active:scale-98"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                <span>WhatsApp ile Randevu Al</span>
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default Header;
