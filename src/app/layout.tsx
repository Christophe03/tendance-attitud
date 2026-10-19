import type { Metadata } from 'next';
import { Alex_Brush, Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';

const alexBrush = Alex_Brush({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tendance Attitud | Salon de Coiffure à Allauch',
  description:
    'Salon de coiffure expert à Allauch pour sublimer tous les cheveux : boucles, lissage brésilien, cheveux crépus, ondulations et soin Tokio Inkarami. Prenez rendez-vous en ligne.',
  metadataBase: new URL('https://www.tendanceattitud.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Tendance Attitud | Salon de Coiffure à Allauch',
    description:
      'Salon de coiffure expert à Allauch pour sublimer tous les cheveux : boucles, lissage brésilien, cheveux crépus, ondulations et soin Tokio Inkarami. Prenez rendez-vous en ligne.',
    url: 'https://www.tendanceattitud.fr',
    siteName: 'Salon Tendance Attitud',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/hero/hero-center.webp',
        width: 1200,
        height: 630,
        alt: 'Salon Tendance Attitud Allauch',
      },
    ],
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['HairSalon', 'LocalBusiness'],
  name: 'Salon Tendance Attitud',
  image: 'https://www.tendanceattitud.fr/images/logo.png',
  url: 'https://www.tendanceattitud.fr',
  telephone: '+33659266533',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '44 avenue Salvador Allende',
    addressLocality: 'Allauch',
    postalCode: '13190',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.3364,
    longitude: 5.4828,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Thursday',
      opens: '09:00',
      closes: '20:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:30',
      closes: '19:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/tendanceattitud/',
    'https://www.planity.com/tendance-attitud-13190-allauch',
  ],
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.planity.com/tendance-attitud-13190-allauch',
      inLanguage: 'fr',
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform',
      ],
    },
    result: {
      '@type': 'Reservation',
      name: 'Prendre rendez-vous en ligne',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${alexBrush.variable} ${playfairDisplay.variable} ${montserrat.variable}`}>
      <body className="antialiased bg-olive-800 text-[#F7F5EE] font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
