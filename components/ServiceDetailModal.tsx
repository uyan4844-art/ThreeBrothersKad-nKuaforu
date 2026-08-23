'use client';

import React, { useEffect } from 'react';

export interface ServiceDetail {
  id: string;
  badge: string;
  title: string;
  duration: string;
  description: string;
  products: string[];
  steps: string[];
  waMessage: string;
  image?: string;
}

interface ServiceDetailModalProps {
  service: ServiceDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  isOpen,
  onClose,
}) => {
  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  const waUrl = `https://wa.me/905526856907?text=${encodeURIComponent(service.waMessage)}`;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-[#0F0C0A]/65 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-4 transition-opacity duration-300 animate-in fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div
        className="w-full md:max-w-xl bg-white rounded-t-[28px] md:rounded-[28px] border border-[#C5A880]/30 shadow-2xl overflow-hidden max-h-[88vh] flex flex-col relative animate-in slide-in-from-bottom md:zoom-in-95 duration-300"
      >
        {/* Mobile Drag Indicator Bar */}
        <div className="w-11 h-1.5 bg-stone-300 rounded-full mx-auto mt-3 mb-1 md:hidden" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Pencereyi Kapat"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#C5A880]/30 text-[#1F1C19] flex items-center justify-center hover:bg-[#1F1C19] hover:text-white transition-colors cursor-pointer z-10 font-bold"
        >
          ✕
        </button>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-5">
          {/* Badge */}
          <span className="inline-block bg-[#C5A880]/15 text-[#A48358] border border-[#C5A880]/30 text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
            {service.badge}
          </span>

          {/* Title */}
          <h3 id="service-modal-title" className="font-serif text-2xl md:text-3xl font-bold text-[#1F1C19] leading-snug">
            {service.title}
          </h3>

          {/* Duration Card */}
          <div className="flex items-center gap-2 bg-[#FAF7F2] border border-[#C5A880]/20 rounded-xl px-4 py-2.5 text-sm font-semibold text-[#1F1C19]">
            <svg className="w-4 h-4 text-[#A48358]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>
              Tahmini Süre: <strong className="text-[#A48358]">{service.duration}</strong>
            </span>
          </div>

          {/* Description */}
          <p className="text-stone-600 text-sm md:text-base leading-relaxed">
            {service.description}
          </p>

          {/* Professional Products Tags */}
          {service.products.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#A48358] tracking-widest uppercase">
                Kullanılan Profesyonel Ürünler
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.products.map((prod, idx) => (
                  <span
                    key={idx}
                    className="bg-white border border-[#C5A880]/30 text-[#1F1C19] px-3 py-1 rounded-lg text-xs font-medium shadow-2xs"
                  >
                    {prod}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Process Steps */}
          {service.steps.length > 0 && (
            <div className="space-y-2.5 pt-1">
              <h4 className="text-xs font-bold text-[#A48358] tracking-widest uppercase">
                İşlem Aşamaları
              </h4>
              <ul className="space-y-2 text-sm text-stone-700">
                {service.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#C5A880] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* WhatsApp CTA Button */}
          <div className="pt-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white font-montserrat text-sm font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-[#25D366]/30 transition-all duration-200 cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
              <span>WhatsApp ile Bu İşlemi Rezerve Et</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;
