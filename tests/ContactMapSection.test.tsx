/// <reference types="@testing-library/jest-dom/vitest" />
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ContactMapSection from '../src/components/home/ContactMapSection';

describe('ContactMapSection Component', () => {
  it('renders salon address, phone number, and hours', () => {
    render(<ContactMapSection />);
    expect(screen.getByText(/Salon Tendance Attitud/i)).toBeInTheDocument();
    expect(screen.getByText(/44 avenue Salvador Allende, 13190 Allauch/i)).toBeInTheDocument();
    expect(screen.getByText('06 59 26 65 33')).toBeInTheDocument();
    expect(screen.getByText('LUNDI: 09H - 18H')).toBeInTheDocument();
    expect(screen.getByText('MARDI: 09H - 18H')).toBeInTheDocument();
    expect(screen.getByText('MERCREDI: FERMÉ')).toBeInTheDocument();
    expect(screen.getByText('JEUDI: 09H - 20H30')).toBeInTheDocument();
    expect(screen.getByText('VENDREDI: 09H - 19H')).toBeInTheDocument();
    expect(screen.getByText('SAMEDI: 08H30 - 19H')).toBeInTheDocument();
    expect(screen.getByText('DIMANCHE: FERMÉ')).toBeInTheDocument();
  });

  it('has section id "contact" and accessible label', () => {
    const { container } = render(<ContactMapSection />);
    const section = container.querySelector('#contact');
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute('aria-label');
  });

  it('renders phone link with tel: protocol', () => {
    render(<ContactMapSection />);
    const phoneLink = screen.getByRole('link', { name: /06 59 26 65 33/i });
    expect(phoneLink).toHaveAttribute('href', 'tel:+33659266533');
  });

  it('renders Planity booking CTA button', () => {
    render(<ContactMapSection />);
    const bookingLinks = screen.getAllByRole('link', { name: /Prendre rendez-vous|Réserver/i });
    expect(bookingLinks.length).toBeGreaterThanOrEqual(1);
    expect(bookingLinks[0]).toHaveAttribute(
      'href',
      'https://www.planity.com/tendance-attitud-13190-allauch'
    );
  });

  it('renders map image with alt text and GPS directions button', () => {
    render(<ContactMapSection />);
    const mapImg = screen.getByAltText(/Carte.*Allauch/i);
    expect(mapImg).toBeInTheDocument();
    expect(mapImg.getAttribute('src')).toContain('map-mockup.webp');

    const gpsLink = screen.getByRole('link', { name: /Itinéraire GPS/i });
    expect(gpsLink).toHaveAttribute(
      'href',
      expect.stringContaining('maps.google.com')
    );
  });

  it('displays dynamic open/closed status badge', () => {
    render(<ContactMapSection />);
    const badge = screen.getByText(/Actuellement (ouvert|fermé)/i);
    expect(badge).toBeInTheDocument();
  });

  it('highlights current day indicator in hours list', () => {
    render(<ContactMapSection />);
    const todayBadge = screen.getByText(/Aujourd'hui/i);
    expect(todayBadge).toBeInTheDocument();
  });
});
