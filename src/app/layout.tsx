import type { Metadata } from 'next';
import { Alex_Brush, Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';

const alexBrush = Alex_Brush({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-script',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Tendance Attitud | Salon de Coiffure & Barbier à Saint-Maur',
  description: 'Salon de coiffure mixte et barbier à Saint-Maur-des-Fossés. Soins d’exception, coupes sur-mesure et rituels bien-être.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${alexBrush.variable} ${playfairDisplay.variable} ${montserrat.variable}`}>
      <body className="antialiased bg-olive-800 text-[#F7F5EE] font-sans">
        {children}
      </body>
    </html>
  );
}
