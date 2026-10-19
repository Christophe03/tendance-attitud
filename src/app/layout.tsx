import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="fr">
      <body className="antialiased bg-olive-900 text-gold-100 font-sans">
        {children}
      </body>
    </html>
  );
}
