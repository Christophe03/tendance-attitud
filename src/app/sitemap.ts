import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tendanceattitud.fr';
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [
        `${baseUrl}/images/hero/hero-center-v2.webp`,
        `${baseUrl}/images/hero/hero-left-v2.webp`,
        `${baseUrl}/images/hero/hero-right-v2.webp`,
        `${baseUrl}/images/salon/team-v2.webp`,
      ],
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
