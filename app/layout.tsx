import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Three Brothers | Manavgat Kadın Kuaförü & Profesyonel Saç Tasarımı',
  description: 'Manavgat kadın kuaförü Three Brothers; profesyonel balyaj, sarışın renklendirme, mikro kapsül kaynak ve saç bakımı hizmetleri sunar. Threebrothers Manavgat randevu.',
  keywords: [
    'manavgat kadın kuaförü',
    'threebrothers',
    'threebrothersmanavgat',
    'kadın kuaförü',
    'three brothers',
    'three brothers kadın kuaförü',
    'manavgat kuaför',
    'manavgat balyaj',
    'manavgat mikro kaynak',
    'manavgat saç tasarımı',
  ],
  openGraph: {
    title: 'Three Brothers Kadın Kuaförü Manavgat',
    description: 'Doğal Işıltı, Kusursuz Renk. Manavgatın lider kadın kuaförü ve saç tasarım stüdyosu.',
    url: 'https://three-brothers-kad-n-kuaforu.vercel.app',
    siteName: 'Three Brothers Manavgat',
    locale: 'tr_TR',
    type: 'website',
  },
  icons: {
    icon: '/images/logo.webp',
    apple: '/images/logo.jpg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#FAF8F5',
};

const jsonLdData = {
  '@context': 'https://schema.org',
  '@type': ['HairSalon', 'BeautySalon', 'LocalBusiness'],
  name: 'Three Brothers Kadın Kuaförü',
  alternateName: [
    'Three Brothers',
    'threebrothers',
    'threebrothersmanavgat',
    'Three Brothers Manavgat',
    'Three Brothers Bayan Kuaförü',
  ],
  image: 'https://three-brothers-kad-n-kuaforu.vercel.app/og-image.jpg',
  telephone: '+905526856907',
  priceRange: '₺₺',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bahçelievler Mahallesi, Demokrasi Bulvarı No:8 D:0',
    addressLocality: 'Manavgat',
    addressRegion: 'Antalya',
    postalCode: '07600',
    addressCountry: 'TR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '36.7868',
    longitude: '31.4422',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '09:00',
    closes: '20:00',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '134',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,500;0,600;0,700;0,800;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />
      </head>
      <body className="bg-[#FAF8F5] text-[#1A1918] antialiased selection:bg-[#C5A880]/30 min-h-[100dvh]">
        {children}
      </body>
    </html>
  );
}
