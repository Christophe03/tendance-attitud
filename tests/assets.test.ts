import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Optimized assets', () => {
  const requiredImages = [
    'public/images/logo.png',
    'public/images/hero/hero-left.webp',
    'public/images/hero/hero-center.webp',
    'public/images/hero/hero-right.webp',
    'public/images/prestations/boucles.webp',
    'public/images/prestations/lissage.webp',
    'public/images/prestations/crepus.webp',
    'public/images/prestations/ondulations.webp',
    'public/images/salon/team.webp',
    'public/images/salon/interior.webp',
    'public/images/instagram/insta-1.webp',
    'public/images/instagram/insta-2.webp',
    'public/images/instagram/insta-3.webp',
    'public/images/map-mockup.webp',
    'public/images/hero/hero-left-v2.webp',
    'public/images/hero/hero-center-v2.webp',
    'public/images/hero/hero-right-v2.webp',
    'public/images/prestations/boucles-v2.webp',
    'public/images/prestations/lissage-v2.webp',
    'public/images/prestations/crepus-v2.webp',
    'public/images/prestations/ondulations-v2.webp',
    'public/images/salon/team-v2.webp',
    'public/images/salon/interior-v2.webp',
    'public/images/instagram/insta-1-v2.webp',
    'public/images/instagram/insta-2-v2.webp',
    'public/images/instagram/insta-3-v2.webp',
    'public/images/vous-nous-faites-confiance@2x.webp',
  ];

  it.each(requiredImages)('file %s exists and has non-zero size', (relPath) => {
    const fullPath = path.resolve(process.cwd(), relPath);
    expect(fs.existsSync(fullPath)).toBe(true);
    const stat = fs.statSync(fullPath);
    expect(stat.size).toBeGreaterThan(1000);
  });
});
