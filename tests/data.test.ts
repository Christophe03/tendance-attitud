import { describe, it, expect } from 'vitest';
import { SALON_INFO, isSalonOpenNow } from '../src/data/salonInfo';
import { SERVICE_CATEGORIES } from '../src/data/services';
import { REVIEWS } from '../src/data/reviews';
import { PARTNERS } from '../src/data/partners';

describe('Data Layer', () => {
  it('contains valid salon contact info and Planity booking URL', () => {
    expect(SALON_INFO.bookingUrl).toBe('https://www.planity.com/tendance-attitud-13190-allauch');
    expect(SALON_INFO.phone).toBe('06 59 26 65 33');
    expect(SALON_INFO.phoneRaw).toBe('+33659266533');
    expect(SALON_INFO.address.city).toBe('Allauch');
    expect(SALON_INFO.address.street).toBe('44 avenue Salvador Allende');
    expect(SALON_INFO.address.postalCode).toBe('13190');
    expect(SALON_INFO.openingHours).toHaveLength(7);
  });

  it('correctly calculates live salon open status with isSalonOpenNow', () => {
    // Monday at 10:00 -> Open (9h - 18h)
    const mondayOpen = new Date('2026-10-19T10:00:00'); // Oct 19, 2026 is Monday
    expect(isSalonOpenNow(SALON_INFO.openingHours, mondayOpen).isOpen).toBe(true);

    // Monday at 21:00 -> Closed
    const mondayClosed = new Date('2026-10-19T21:00:00');
    expect(isSalonOpenNow(SALON_INFO.openingHours, mondayClosed).isOpen).toBe(false);

    // Wednesday at 14:00 -> Closed (Wednesday is closed)
    const wednesday = new Date('2026-10-21T14:00:00'); // Oct 21, 2026 is Wednesday
    expect(isSalonOpenNow(SALON_INFO.openingHours, wednesday).isOpen).toBe(false);

    // Thursday at 20:15 -> Open (9h - 20h30)
    const thursdayEvening = new Date('2026-10-22T20:15:00'); // Oct 22, 2026 is Thursday
    expect(isSalonOpenNow(SALON_INFO.openingHours, thursdayEvening).isOpen).toBe(true);

    // Thursday at 20:45 -> Closed
    const thursdayLate = new Date('2026-10-22T20:45:00');
    expect(isSalonOpenNow(SALON_INFO.openingHours, thursdayLate).isOpen).toBe(false);
  });

  it('contains the 4 categories with valid services and prices matching mockup', () => {
    expect(SERVICE_CATEGORIES).toHaveLength(4);
    const categoryIds = SERVICE_CATEGORIES.map(c => c.id);
    expect(categoryIds).toEqual(['boucles', 'lissage', 'crepus', 'ondulations']);

    const boucles = SERVICE_CATEGORIES.find(c => c.id === 'boucles')!;
    expect(boucles.services.length).toBeGreaterThanOrEqual(4);
    expect(boucles.services[0].name).toContain('COURT');
    expect(boucles.services[0].price).toBe('63,50 €');
    expect(boucles.services[0].duration).toBe('1h 20min');

    const miLong = boucles.services.find(s => s.name.includes('MI-LONG'))!;
    expect(miLong.price).toBe('67,50 €');

    const long = boucles.services.find(s => s.name.includes('LONG') && !s.name.includes('MI-LONG') && !s.name.includes('TRES'))!;
    expect(long.price).toBe('70,50 €');

    const tresLong = boucles.services.find(s => s.name.includes('TRES LONG'))!;
    expect(tresLong.price).toBe('75,50 €');

    // All services must have valid Planity bookingUrl
    SERVICE_CATEGORIES.forEach(cat => {
      expect(cat.services.length).toBeGreaterThan(0);
      cat.services.forEach(srv => {
        expect(srv.bookingUrl).toContain('planity.com');
        expect(srv.price).toMatch(/€/);
      });
    });
  });

  it('contains customer reviews with rating, author and date including mockup review', () => {
    expect(REVIEWS.length).toBeGreaterThanOrEqual(3);
    expect(REVIEWS.every(r => r.rating === 5)).toBe(true);
    
    const mockupReview = REVIEWS.find(r => r.comment.includes('Je recommande. Au top @ !'));
    expect(mockupReview).toBeDefined();
    expect(mockupReview?.rating).toBe(5);
  });

  it('contains partner brands for hair care products', () => {
    expect(PARTNERS.length).toBeGreaterThanOrEqual(4);
    const partnerNames = PARTNERS.map(p => p.name);
    expect(partnerNames).toContain('Tokio Inkarami');
    expect(partnerNames).toContain("L'Oréal Professionnel");
  });
});
