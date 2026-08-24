import React from 'react';

export const TrustStats: React.FC = () => {
  return (
    <section className="py-20 bg-white px-5 sm:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* SOL ALAN: Başlık ve Açıklama (6 Kolon) */}
        <div className="lg:col-span-6 space-y-5">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-bold">
            UZMANLIK & SAÇ SAĞLIĞI
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1918] leading-tight">
            Saçınıza Değer Katan, Sağlığı Önceleyen Dokunuşlar
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed pt-2">
            Three Brothers olarak her misafirimizin saç yapısını, ten uyumunu ve beklentilerini işlem öncesinde detaylıca dinliyoruz. Manavgat Bahçelievler'deki stüdyomuzda, saçınızı yıpratmadan hayalinizdeki renge ve ışıltıya kavuşmanız için samimiyetle çalışıyoruz.
          </p>
        </div>

        {/* SAĞ ALAN: 2x2 Lüks Güven Kartları (6 Kolon) */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* 1. Kart: 2014 Yılı */}
          <div className="bg-[#FAF8F5] p-7 rounded-none border border-stone-200/60 flex flex-col justify-center shadow-sm">
            <span className="text-4xl sm:text-5xl font-bold text-[#1A1918] tracking-tight">
              2014
            </span>
            <p className="text-stone-600 text-sm font-medium mt-3 leading-snug">
              Yılından bu yana Manavgat'ta kesintisiz tecrübe
            </p>
          </div>

          {/* 2. Kart: 5.0 Yıldız / Yorumlar */}
          <div className="bg-[#FAF8F5] p-7 rounded-none border border-stone-200/60 flex flex-col justify-center shadow-sm">
            <span className="text-4xl sm:text-5xl font-bold text-[#1A1918] tracking-tight flex items-center gap-1">
              5.0 <span className="text-[#C5A880] text-3xl">★</span>
            </span>
            <p className="text-stone-600 text-sm font-medium mt-3 leading-snug">
              134+ Doğrulanmış mutlu misafir değerlendirmesi
            </p>
          </div>

          {/* 3. Kart: Dürüst Teşhis */}
          <div className="bg-[#FAF8F5] p-7 rounded-none border border-stone-200/60 flex flex-col justify-center shadow-sm">
            <span className="text-2xl sm:text-3xl font-bold text-[#1A1918] tracking-tight">
              Saç Analizi
            </span>
            <p className="text-stone-600 text-sm font-medium mt-3 leading-snug">
              İşlem öncesinde saç yapısına özel dürüst ve şeffaf değerlendirme
            </p>
          </div>

          {/* 4. Kart: Kişiye Özel Tasarım */}
          <div className="bg-[#FAF8F5] p-7 rounded-none border border-stone-200/60 flex flex-col justify-center shadow-sm">
            <span className="text-2xl sm:text-3xl font-bold text-[#1A1918] tracking-tight">
              Özel Tasarım
            </span>
            <p className="text-stone-600 text-sm font-medium mt-3 leading-snug">
              Yüz hatlarınıza ve tarzınıza en uygun renk & form kombinasyonu
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustStats;
