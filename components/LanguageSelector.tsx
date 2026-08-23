'use client';

import React, { useState, useRef, useEffect } from 'react';

export type LanguageCode = 'tr' | 'en' | 'ru' | 'de' | 'ar';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  flag: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'tr', label: 'Türkçe (TR)', flag: '🇹🇷' },
  { code: 'en', label: 'English (EN)', flag: '🇬🇧' },
  { code: 'ru', label: 'Русский (RU)', flag: '🇷🇺' },
  { code: 'de', label: 'Deutsch (DE)', flag: '🇩🇪' },
  { code: 'ar', label: 'العربية (AR)', flag: '🇦🇪' },
];

interface LanguageSelectorProps {
  currentLang?: LanguageCode;
  onLanguageChange?: (code: LanguageCode) => void;
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLang = 'tr',
  onLanguageChange,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<LanguageCode>(currentLang);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sync with prop if it changes
  useEffect(() => {
    setSelectedLang(currentLang);
  }, [currentLang]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleSelect = (code: LanguageCode) => {
    setSelectedLang(code);
    setIsOpen(false);
    if (onLanguageChange) {
      onLanguageChange(code);
    }
  };

  const currentOption = LANGUAGES.find((l) => l.code === selectedLang) || LANGUAGES[0];

  return (
    <div ref={dropdownRef} className={`relative inline-block ${className}`}>
      {/* Dropdown Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Dil Seçimi"
        className="flex items-center gap-1.5 bg-white/85 hover:bg-white border border-[#C5A880]/35 hover:border-[#C5A880] rounded-full px-3.5 py-1.5 text-xs font-bold text-[#1A1918] shadow-sm backdrop-blur-md transition-all duration-200 cursor-pointer"
      >
        <span>{currentOption.flag}</span>
        <span className="font-montserrat uppercase tracking-wider">{currentOption.code}</span>
        <svg
          className={`w-2.5 h-2.5 text-[#A48358] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Floating Dropdown Card */}
      {isOpen && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-40 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-stone-200 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          {LANGUAGES.map((lang) => {
            const isSelected = lang.code === selectedLang;
            return (
              <button
                key={lang.code}
                role="menuitem"
                onClick={() => handleSelect(lang.code)}
                className={`w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold transition-colors duration-150 cursor-pointer ${
                  isSelected
                    ? 'bg-[#C5A880]/20 text-[#A48358] font-bold'
                    : 'text-[#1A1918] hover:bg-[#FAF8F5] hover:text-[#A48358]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">{lang.flag}</span>
                  <span>{lang.label}</span>
                </div>
                {isSelected && (
                  <svg className="w-3.5 h-3.5 text-[#A48358]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
