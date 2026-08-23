import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Three Brothers Bayan Kuaförü | Manavgat Sarı Saç & Butik Tasarım',
  description: '2014’ten beri Manavgat’ta sarı saçta doğallık ve ustalık, kişiye özel renk analizi ve saç sağlığı odaklı butik kuaför deneyimi.',
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
      </head>
      <body className="bg-[#FAF8F5] text-[#1A1918] antialiased selection:bg-[#C5A880]/30 min-h-[100dvh]">
        {children}
      </body>
    </html>
  );
}
