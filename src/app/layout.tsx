import type { Metadata } from 'next';
import { Alex_Brush, Playfair_Display, Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const bickhamScript = localFont({
  src: [
    {
      path: '../../public/fonts/bickham-script-pro-regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/bickham-script-pro-semibold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/bickham-script-pro-bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-bickham',
  display: 'swap',
});

const rightAttitude = localFont({
  src: [
    {
      path: '../../public/fonts/TheRightAttitude.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-right-attitude',
  display: 'swap',
});

const yellowtail = localFont({
  src: [
    {
      path: '../../public/fonts/Yellowtail-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-yellowtail',
  display: 'swap',
});

const kaushanScript = localFont({
  src: [
    {
      path: '../../public/fonts/KaushanScript-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-kaushan',
  display: 'swap',
});

const luxuriousScript = localFont({
  src: [
    {
      path: '../../public/fonts/LuxuriousScript-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-luxurious',
  display: 'swap',
});

const timesCond = localFont({
  src: [
    {
      path: '../../public/fonts/TimesNRMTPro-BoldCond.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-times-cond',
  display: 'swap',
});

const aileron = localFont({
  src: [
    {
      path: '../../public/fonts/Aileron-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Aileron-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Aileron-Heavy.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Aileron-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-aileron',
  display: 'swap',
});

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
  title: {
    default: 'Tendance Attitud | Salon de Coiffure à Allauch (13190) — Boucles & Lissage',
    template: '%s | Tendance Attitud Allauch',
  },
  description:
    'Salon de coiffure expert à Allauch (13190). Sublimation de toutes textures : boucles naturelles curly, lissage brésilien & tanin, cheveux crépus, soin Tokio Inkarami et balayage. Prenez rendez-vous en ligne sur Planity.',
  metadataBase: new URL('https://www.tendanceattitud.fr'),
  keywords: [
    'salon de coiffure Allauch',
    'coiffeur Allauch',
    'coiffure Allauch 13190',
    'spécialiste cheveux bouclés Allauch',
    'coiffeur boucles Marseille',
    'lissage brésilien Allauch',
    'lissage tanin Allauch',
    'soin Tokio Inkarami Allauch',
    'cheveux crépus Allauch',
    'coiffure cheveux texturés',
    'balayage Allauch',
    'Planity Tendance Attitud Allauch',
    'Nathalie coiffure Allauch',
    'coiffeur mixte Allauch village',
  ],
  authors: [{ name: 'Nathalie - Salon Tendance Attitud', url: 'https://www.tendanceattitud.fr' }],
  creator: 'Salon Tendance Attitud',
  publisher: 'Salon Tendance Attitud',
  category: 'beauty salon',
  classification: "Salon de coiffure, Soins capillaires d'exception",
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Tendance Attitud | Salon de Coiffure à Allauch (13190) — Boucles & Lissage',
    description:
      'Salon de coiffure expert à Allauch pour sublimer tous les cheveux : boucles naturelles, lissage brésilien, cheveux crépus, ondulations et soin Tokio Inkarami. Prenez rendez-vous en ligne sur Planity.',
    url: 'https://www.tendanceattitud.fr',
    siteName: 'Salon Tendance Attitud',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/hero/hero-center-v2.webp',
        width: 1200,
        height: 630,
        alt: 'Salon Tendance Attitud Allauch - Coiffure Boucles et Lissage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tendance Attitud | Salon de Coiffure à Allauch (13190)',
    description:
      'Salon de coiffure expert à Allauch : boucles naturelles, lissage brésilien, cheveux crépus et soin Tokio Inkarami.',
    images: ['https://www.tendanceattitud.fr/images/hero/hero-center-v2.webp'],
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  other: {
    'geo.region': 'FR-13',
    'geo.placename': 'Allauch',
    'geo.position': '43.356591;5.485938',
    ICBM: '43.356591, 5.485938',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['HairSalon', 'BeautySalon', 'HealthAndBeautyBusiness', 'LocalBusiness'],
      '@id': 'https://www.tendanceattitud.fr/#salon',
      name: 'Salon Tendance Attitud',
      legalName: 'Salon Tendance Attitud',
      description:
        "Salon de coiffure expert à Allauch pour toutes les textures capillaires : spécialiste des boucles naturelles, du lissage brésilien & au tanin, des cheveux crépus et du soin réparateur Tokio Inkarami.",
      image: [
        'https://www.tendanceattitud.fr/images/hero/hero-center-v2.webp',
        'https://www.tendanceattitud.fr/images/salon/team-v2.webp',
        'https://www.tendanceattitud.fr/images/logo.png',
      ],
      logo: 'https://www.tendanceattitud.fr/images/logo.png',
      url: 'https://www.tendanceattitud.fr',
      telephone: '+33659266533',
      priceRange: '€€',
      currenciesAccepted: 'EUR',
      paymentAccepted: 'Carte bancaire, Espèces',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '44 avenue Salvador Allende',
        addressLocality: 'Allauch',
        postalCode: '13190',
        addressRegion: 'Bouches-du-Rhône',
        addressCountry: 'FR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 43.356591,
        longitude: 5.485938,
      },
      areaServed: [
        { '@type': 'City', name: 'Allauch' },
        { '@type': 'City', name: 'Plan-de-Cuques' },
        { '@type': 'City', name: 'Marseille 13e' },
        { '@type': 'City', name: 'Marseille 12e' },
        { '@type': 'Place', name: 'Château-Gombert' },
        { '@type': 'Place', name: 'Les Trois-Lucs' },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '142',
        bestRating: '5',
        worstRating: '1',
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
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Prestations Coiffure Tendance Attitud',
        itemListElement: [
          {
            '@type': 'OfferCatalog',
            name: 'Boucles & Curly',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Shampoing + Soin + Coupe + Coiffage Curly Court',
                  description: 'Soin hydratant sur-mesure et coupe adaptée aux boucles courtes',
                },
                price: '63.50',
                priceCurrency: 'EUR',
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Shampoing + Soin + Coupe + Coiffage Curly Long',
                  description: 'Soin nutritif profond et coupe structurée pour boucles longues',
                },
                price: '70.50',
                priceCurrency: 'EUR',
              },
            ],
          },
          {
            '@type': 'OfferCatalog',
            name: 'Lissage & Soins Profonds',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Lissage Français / Tanin',
                  description: 'Lissage thermo-actif haute brillance sans formol',
                },
                price: '150.00',
                priceCurrency: 'EUR',
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Soin Tokio Inkarami',
                  description: 'Protocole régénérant japonais en 5 étapes pour consolider la kératine',
                },
                price: '110.00',
                priceCurrency: 'EUR',
              },
            ],
          },
        ],
      },
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
          name: 'Prendre rendez-vous en ligne sur Planity',
        },
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.tendanceattitud.fr/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Où se trouve le salon de coiffure Tendance Attitud à Allauch ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le salon Tendance Attitud est situé au 44 avenue Salvador Allende, 13190 Allauch, au cœur d’Allauch Village, facilement accessible depuis Marseille et Plan-de-Cuques.',
          },
        },
        {
          '@type': 'Question',
          name: 'Comment réserver un rendez-vous chez Tendance Attitud ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vous pouvez prendre rendez-vous en ligne 24h/24 et 7j/7 directement sur Planity (https://www.planity.com/tendance-attitud-13190-allauch) ou par téléphone au 06 59 26 65 33.',
          },
        },
        {
          '@type': 'Question',
          name: 'Le salon est-il spécialisé dans les cheveux bouclés, frisés et crépus ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, Nathalie et son équipe sont expertes de la mise en valeur des textures naturelles : coupe sur cheveux texturés, diagnostic personnalisé, hydratation profonde et coiffage curly mèche à mèche.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quels sont les bienfaits du soin Tokio Inkarami proposé au salon ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le soin Tokio Inkarami est un rituel japonais exclusif composé de plusieurs types de kératines et d’acides aminés qui fusionnent au cœur de la fibre capillaire pour restaurer instantanément force, souplesse et brillance miroir.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${bickhamScript.variable} ${alexBrush.variable} ${playfairDisplay.variable} ${montserrat.variable} ${rightAttitude.variable} ${yellowtail.variable} ${kaushanScript.variable} ${luxuriousScript.variable} ${timesCond.variable}`}>
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
