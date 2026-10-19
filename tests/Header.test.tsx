/// <reference types="@testing-library/jest-dom/vitest" />
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from '../src/components/layout/Header';

describe('Header Component', () => {
  it('renders navigation links and Planity booking button', () => {
    render(<Header />);
    expect(screen.getByText('Prestations')).toBeInTheDocument();
    expect(screen.getByText('Équipe')).toBeInTheDocument();
    expect(screen.getByText('Contactez-nous')).toBeInTheDocument();

    const rdvButtons = screen.getAllByText('PRENDRE RDV');
    expect(rdvButtons.length).toBeGreaterThanOrEqual(1);
    expect(rdvButtons[0].closest('a')).toHaveAttribute(
      'href',
      'https://www.planity.com/tendance-attitud-13190-allauch'
    );
  });

  it('toggles mobile menu drawer on mobile hamburger button click', () => {
    render(<Header />);
    const menuBtn = screen.getByLabelText(/Ouvrir le menu/i);
    expect(menuBtn).toBeInTheDocument();

    fireEvent.click(menuBtn);
    // When opened, drawer contains call link
    const telLinks = screen.getAllByRole('link', { name: /06 59 26 65 33|Appeler/i });
    expect(telLinks.length).toBeGreaterThanOrEqual(1);
    expect(telLinks[0]).toHaveAttribute('href', 'tel:+33659266533');
  });
});
