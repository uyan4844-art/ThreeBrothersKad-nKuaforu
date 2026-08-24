'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LanguageSelector, LanguageCode } from './LanguageSelector';

interface HeaderProps {
  currentLang?: LanguageCode;
  onLanguageChange?: (lang: LanguageCode) => void;
}

const HEADER_LABELS: Record<LanguageCode, {
  home: string;
  about: string;
  contact: string;
  services: string;
  process: string;
  gallery: string;
  reviews: string;
  faq: string;
  book: string;
  callNow: string;
  openMap: string;
  waBook: string;
  hours: string;
  featuredServices: string;
  selectLanguage: string;
  balyaj: string;
  blonde: string;
  kaynak: string;
  ombre: string;
  renklendirme: string;
  kesim: string;
}> = {
  tr: {
    home: 'Ana Sayfa',
    about: 'Hakkımızda',
    contact: 'İletişim',
    services: 'Hizmetlerimiz',
    process: 'Süreç',
    gallery: 'Galeri',
    reviews: 'Yorumlar',
    faq: 'SSS',
    book: 'Randevu Al',
    callNow: 'Hemen Ara',
    openMap: 'Konumu Aç',
    waBook: 'WhatsApp Randevu Al',
    hours: 'Salı – Pazar | 08:30 – 20:30',
    featuredServices: 'HİZMETLERİMİZ',
    selectLanguage: 'DİL SEÇİMİ · LANGUAGE',
    balyaj: 'Profesyonel Balyaj',
    blonde: 'Blonde Saç Tasarımı',
    kaynak: 'Mikro Kapsül Kaynak',
    ombre: 'Ombre & Sombre',
    renklendirme: 'Saç Boyama & Tonlama',
    kesim: 'Kişiye Özel Saç Kesimi',
  },
  en: {
    home: 'Home',
    about: 'About Us',
    contact: 'Contact',
    services: 'Services',
    process: 'Process',
    gallery: 'Gallery',
    reviews: 'Reviews',
    faq: 'FAQ',
    book: 'Book Now',
    callNow: 'Call Now',
    openMap: 'Open Map',
    waBook: 'Book via WhatsApp',
    hours: 'Tue – Sun | 08:30 – 20:30',
    featuredServices: 'OUR SERVICES',
    selectLanguage: 'SELECT LANGUAGE',
    balyaj: 'Professional Balayage',
    blonde: 'Blonde Hair Artistry',
    kaynak: 'Micro Capsule Extensions',
    ombre: 'Ombré & Sombré',
    renklendirme: 'Coloring & Toning',
    kesim: 'Bespoke Haircut & Styling',
  },
  de: {
    home: 'Startseite',
    about: 'Über Uns',
    contact: 'Kontakt',
    services: 'Leistungen',
    process: 'Ablauf',
    gallery: 'Galerie',
    reviews: 'Bewertungen',
    faq: 'FAQ',
    book: 'Termin Buchen',
    callNow: 'Jetzt Anrufen',
    openMap: 'Wegbeschreibung',
    waBook: 'WhatsApp Termin',
    hours: 'Di – So | 08:30 – 20:30',
    featuredServices: 'UNSERE LEISTUNGEN',
    selectLanguage: 'SPRACHE WÄHLEN',
    balyaj: 'Professionelle Balayage',
    blonde: 'Blond & Farbdesign',
    kaynak: 'Mikrokapsel Verlängerung',
    ombre: 'Ombré & Sombré',
    renklendirme: 'Coloration & Glossing',
    kesim: 'Individueller Haarschnitt',
  },
  ru: {
    home: 'Главная',
    about: 'О Нас',
    contact: 'Контакты',
    services: 'Услуги',
    process: 'Процесс',
    gallery: 'Галерея',
    reviews: 'Отзывы',
    faq: 'Частые вопросы',
    book: 'Записаться',
    callNow: 'Позвонить',
    openMap: 'Как добраться',
    waBook: 'Запись в WhatsApp',
    hours: 'Вт – Вс | 08:30 – 20:30',
    featuredServices: 'НАШИ УСЛУГИ',
    selectLanguage: 'ВЫБОР ЯЗЫКА',
    balyaj: 'Профессиональный Балаяж',
    blonde: 'Блонд и Колористика',
    kaynak: 'Микрокапсульное Наращивание',
    ombre: 'Омбре и Сомбре',
    renklendirme: 'Окрашивание и Тонирование',
    kesim: 'Индивидуальная Стрижка',
  },
  ar: {
    home: 'الرئيسية',
    about: 'من نحن',
    contact: 'اتصل بنا',
    services: 'خدماتنا',
    process: 'الخطوات',
    gallery: 'المعرض',
    reviews: 'التقييمات',
    faq: 'الأسئلة الشائعة',
    book: 'حجز موعد',
    callNow: 'اتصل الآن',
    openMap: 'الاتجاهات',
    waBook: 'حجز عبر واتساب',
    hours: 'الثلاثاء – الأحد | 08:30 – 20:30',
    featuredServices: 'خدماتنا',
    selectLanguage: 'اختر اللغة',
    balyaj: 'بالياج احترافي',
    blonde: 'تصميم الشعر الأشقر',
    kaynak: 'وصلات شعر ميكرو كبسول',
    ombre: 'أومبري وسومبري',
    renklendirme: 'صبغ وتلوين مخصص',
    kesim: 'قص شعر عصري مخصص',
  },
};

export const Header: React.FC<HeaderProps> = ({
  currentLang = 'tr',
  onLanguageChange,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const t = HEADER_LABELS[currentLang] || HEADER_LABELS.tr;

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

  const handleLangSelect = (code: LanguageCode) => {
    if (onLanguageChange) {
      onLanguageChange(code);
    }
    if (typeof window !== 'undefined' && (window as any).I18n) {
      (window as any).I18n.setLanguage(code);
    }
  };

  return (
    <>
      {/* =========================================================================
          1. SHINE HAIR MOBİL HEADER (md:hidden)
      ========================================================================== */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/75 backdrop-blur-md border-b border-stone-200/40 px-5 py-3.5 flex items-center justify-between transition-all duration-300 pt-[calc(0.875rem+env(safe-area-inset-top,0px))]">
        {/* SOL: Sadece Minimal Instagram İkonu */}
        <a 
          href="https://www.instagram.com/threebrotherrrs/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center text-[#1A1918] hover:text-[#C5A880] transition-colors cursor-pointer"
          aria-label="Instagram"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>

        {/* ORTA: Ortalanmış Logo & Alt Başlık */}
        <Link href="/" className="flex flex-col items-center text-center no-underline">
          <span className="text-[#1A1918] font-serif text-lg font-bold tracking-tight notranslate" translate="no">
            Three Brothers
          </span>
          <span className="text-[9px] uppercase tracking-[0.25em] text-stone-500 font-medium -mt-0.5">
            KADIN KUAFÖRÜ
          </span>
        </Link>

        {/* SAĞ: İki Çizgili Minimal Menü İkonu */}
        <button 
          onClick={() => setIsDrawerOpen(true)}
          className="w-10 h-10 flex flex-col items-end justify-center gap-1.5 text-[#1A1918] cursor-pointer"
          aria-label="Menüyü Aç"
        >
          <span className="w-6 h-[2px] bg-[#1A1918] rounded-full"></span>
          <span className="w-4 h-[2px] bg-[#1A1918] rounded-full"></span>
        </button>
      </header>

      {/* =========================================================================
          2. DESKTOP LUXURY STICKY HEADER (hidden md:flex - 100% Intact)
      ========================================================================== */}
      <header
        className={`hidden md:flex fixed top-0 left-0 w-full z-40 px-4 sm:px-8 py-3.5 sm:py-4.5 pt-[calc(0.875rem+env(safe-area-inset-top,0px))] items-center justify-between transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#C5A880]/20 shadow-sm'
            : 'bg-[#FAF8F5]/60 backdrop-blur-xs border-b border-[#C5A880]/15'
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
            <span className="font-serif text-lg font-bold text-[#1A1918] tracking-wider leading-none notranslate" translate="no">
              Three Brothers
            </span>
            <span className="text-[9px] font-bold text-[#A48358] tracking-widest uppercase mt-0.5">
              BAYAN KUAFÖRÜ · MANAVGAT
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-[#1A1918] font-montserrat">
          <Link href="/#hizmetler" className="hover:text-[#A48358] transition-colors">
            {t.services}
          </Link>
          <Link href="/hakkimizda" className="hover:text-[#A48358] transition-colors">
            {t.about}
          </Link>
          <Link href="/#surec" className="hover:text-[#A48358] transition-colors">
            {t.process}
          </Link>
          <Link href="/#galeri" className="hover:text-[#A48358] transition-colors">
            {t.gallery}
          </Link>
          <Link href="/#yorumlar" className="hover:text-[#A48358] transition-colors">
            {t.reviews}
          </Link>
          <Link href="/#sss" className="hover:text-[#A48358] transition-colors">
            {t.faq}
          </Link>
          <Link href="/#iletisim" className="hover:text-[#A48358] transition-colors">
            {t.contact}
          </Link>
        </nav>

        {/* Right Actions: Language Selector + Instagram + Randevu Al */}
        <div className="flex items-center gap-3">
          {/* Tıklanabilir Lüks Dil Seçici (Language Dropdown) */}
          <LanguageSelector
            currentLang={currentLang}
            onLanguageChange={handleLangSelect}
          />

          {/* Instagram Butonu (Masaüstü) */}
          <a
            href="https://www.instagram.com/threebrotherrrs/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hidden sm:inline-flex w-9 h-9 rounded-full bg-[#C5A880]/10 hover:bg-[#C5A880] border border-[#C5A880]/25 text-[#1A1918] hover:text-white items-center justify-center transition-all duration-200"
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
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#1A1918] hover:bg-[#2C2724] text-white text-xs font-semibold px-4 py-2 rounded-full border border-[#C5A880]/30 shadow-sm transition-all duration-200"
          >
            <svg className="w-3.5 h-3.5 text-[#128C7E] fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
            <span>{t.book}</span>
          </a>
        </div>
      </header>

      {/* =========================================================================
          3. "SHINE HAIR" TARZI LÜKS AÇILIR MOBİL MENÜ ÇEKMECESİ (md:hidden)
      ========================================================================== */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end animate-in fade-in duration-200">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setIsDrawerOpen(false)}
          />

          {/* Drawer Panel */}
          <aside className="relative w-full max-w-[360px] bg-[#FAF8F5] h-[100dvh] min-h-[100dvh] shadow-2xl p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] flex flex-col justify-between overflow-y-auto z-10 animate-in slide-in-from-right duration-300 overscroll-contain">
            <div>
              {/* Üst Kısım: Başlık & Kapat Butonu */}
              <div className="flex items-center justify-between border-b border-[#C5A880]/20 pb-4 mb-4">
                <div>
                  <h3 className="font-serif font-bold text-xl text-[#1A1918] notranslate" translate="no">Three Brothers</h3>
                  <span className="text-[9px] text-[#A48358] font-bold tracking-widest uppercase">
                    BAYAN KUAFÖRÜ · MANAVGAT
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(false)}
                  aria-label="Menüyü Kapat"
                  className="w-9 h-9 rounded-full border border-[#C5A880]/30 bg-white flex items-center justify-center font-bold text-sm text-[#1A1918] hover:bg-[#1A1918] hover:text-white transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* 4'lü Lüks Mobil Dil Seçici Barı */}
              <div className="mb-5 pb-4 border-b border-[#C5A880]/20">
                <span className="text-[10px] font-bold text-[#A48358] tracking-widest uppercase mb-2.5 block px-1">
                  {t.selectLanguage}
                </span>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { code: 'tr' as LanguageCode, label: 'TR', flag: '🇹🇷', title: 'Türkçe' },
                    { code: 'en' as LanguageCode, label: 'EN', flag: '🇬🇧', title: 'English' },
                    { code: 'ru' as LanguageCode, label: 'RU', flag: '🇷🇺', title: 'Русский' },
                    { code: 'de' as LanguageCode, label: 'DE', flag: '🇩🇪', title: 'Deutsch' },
                  ].map((lang) => {
                    const isSelected = lang.code === currentLang;
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => handleLangSelect(lang.code)}
                        className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl border text-xs font-montserrat font-bold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#1A1918] text-white border-[#1A1918] shadow-sm ring-1 ring-[#C5A880]/40 scale-102'
                            : 'bg-white text-[#1A1918] border-[#C5A880]/25 hover:border-[#C5A880] hover:bg-[#FAF8F5]'
                        }`}
                        aria-label={lang.title}
                      >
                        <span className="text-base leading-none mb-1">{lang.flag}</span>
                        <span className="text-[11px] font-bold tracking-wider">{lang.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Ana Sayfa Linkleri */}
              <nav className="space-y-2 font-montserrat text-sm font-semibold text-[#1A1918] mb-5">
                <Link
                  href="/"
                  onClick={() => setIsDrawerOpen(false)}
                  className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-white hover:text-[#A48358] transition-colors"
                >
                  <span>{t.home}</span>
                  <span className="text-[#A48358]">→</span>
                </Link>
                <Link
                  href="/hakkimizda"
                  onClick={() => setIsDrawerOpen(false)}
                  className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-white hover:text-[#A48358] transition-colors"
                >
                  <span>{t.about}</span>
                  <span className="text-[#A48358]">→</span>
                </Link>
                <Link
                  href="/#iletisim"
                  onClick={() => setIsDrawerOpen(false)}
                  className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-white hover:text-[#A48358] transition-colors"
                >
                  <span>{t.contact}</span>
                  <span className="text-[#A48358]">→</span>
                </Link>
              </nav>

              {/* Hizmetler Bölümü */}
              <div className="space-y-2 mb-6">
                <span className="text-xs uppercase tracking-widest text-[#A48358] font-bold mb-2.5 block px-3">
                  {t.featuredServices}
                </span>
                <div className="space-y-1.5 font-montserrat text-xs font-semibold text-[#1A1918]">
                  <Link
                    href="/hizmetler/balyaj"
                    onClick={() => setIsDrawerOpen(false)}
                    className="flex items-center justify-between p-3 bg-white border border-[#C5A880]/20 rounded-xl hover:border-[#C5A880] transition-colors shadow-2xs min-h-[44px]"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#A48358]">•</span>
                      <span>{t.balyaj}</span>
                    </div>
                    <span className="text-[#A48358]">→</span>
                  </Link>

                  <Link
                    href="/hizmetler/blonde"
                    onClick={() => setIsDrawerOpen(false)}
                    className="flex items-center justify-between p-3 bg-white border border-[#C5A880]/20 rounded-xl hover:border-[#C5A880] transition-colors shadow-2xs min-h-[44px]"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#A48358]">•</span>
                      <span>{t.blonde}</span>
                    </div>
                    <span className="text-[#A48358]">→</span>
                  </Link>

                  <Link
                    href="/hizmetler/kaynak"
                    onClick={() => setIsDrawerOpen(false)}
                    className="flex items-center justify-between p-3 bg-white border border-[#C5A880]/20 rounded-xl hover:border-[#C5A880] transition-colors shadow-2xs min-h-[44px]"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#A48358]">•</span>
                      <span>{t.kaynak}</span>
                    </div>
                    <span className="text-[#A48358]">→</span>
                  </Link>

                  <Link
                    href="/hizmetler/ombre"
                    onClick={() => setIsDrawerOpen(false)}
                    className="flex items-center justify-between p-3 bg-white border border-[#C5A880]/20 rounded-xl hover:border-[#C5A880] transition-colors shadow-2xs min-h-[44px]"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#A48358]">•</span>
                      <span>{t.ombre}</span>
                    </div>
                    <span className="text-[#A48358]">→</span>
                  </Link>

                  <Link
                    href="/hizmetler/renklendirme"
                    onClick={() => setIsDrawerOpen(false)}
                    className="flex items-center justify-between p-3 bg-white border border-[#C5A880]/20 rounded-xl hover:border-[#C5A880] transition-colors shadow-2xs min-h-[44px]"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#A48358]">•</span>
                      <span>{t.renklendirme}</span>
                    </div>
                    <span className="text-[#A48358]">→</span>
                  </Link>

                  <Link
                    href="/hizmetler/renklendirme#kesim"
                    onClick={() => setIsDrawerOpen(false)}
                    className="flex items-center justify-between p-3 bg-white border border-[#C5A880]/20 rounded-xl hover:border-[#C5A880] transition-colors shadow-2xs min-h-[44px]"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#A48358]">•</span>
                      <span>{t.kesim}</span>
                    </div>
                    <span className="text-[#A48358]">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Alt İletişim & Aksiyon Kartı */}
            <div className="pt-4 border-t border-[#C5A880]/20 space-y-3">
              <div className="text-[11px] font-montserrat text-stone-600 space-y-1">
                <div className="flex items-center gap-2 font-bold text-[#1A1918]">
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
                  <span>{t.hours}</span>
                </div>
              </div>

              {/* Yan Yana İki Buton: Hemen Ara & Konumu Aç */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+905526856907"
                  className="flex items-center justify-center gap-1.5 bg-[#1A1918] hover:bg-[#2C2724] text-white min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-bold font-montserrat shadow-sm transition-colors text-center active:scale-95 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span>{t.callNow}</span>
                </a>
                <a
                  href="https://maps.google.com/?cid=16986332279537405342"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-white border border-[#C5A880]/40 hover:bg-[#FAF8F5] text-[#1A1918] min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-bold font-montserrat shadow-2xs transition-colors text-center active:scale-95 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 text-[#A48358]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <circle cx="12" cy="11" r="3" />
                  </svg>
                  <span>{t.openMap}</span>
                </a>
              </div>

              {/* Geniş WhatsApp Randevu Butonu */}
              <a
                href="https://wa.me/905526856907?text=Merhaba,%20Three%20Brothers%20salonunuzdan%20randevu%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#128C7E] to-[#128C7E] text-white min-h-[44px] py-3 px-4 rounded-xl text-xs font-bold font-montserrat shadow-md shadow-[#128C7E]/20 hover:shadow-lg transition-transform active:scale-95 cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                <span>{t.waBook}</span>
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default Header;
