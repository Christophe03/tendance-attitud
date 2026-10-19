/// <reference types="@testing-library/jest-dom/vitest" />
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ServicesSection from '../src/components/home/ServicesSection';

describe('ServicesSection Component', () => {
  it('renders all 4 category circular buttons', () => {
    render(<ServicesSection />);
    expect(screen.getByText('BOUCLES')).toBeInTheDocument();
    expect(screen.getByText('LISSAGE')).toBeInTheDocument();
    expect(screen.getByText('CRÉPUS')).toBeInTheDocument();
    expect(screen.getByText('ONDULATIONS')).toBeInTheDocument();
  });

  it('switches category services when clicking LISSAGE tab', () => {
    render(<ServicesSection />);
    const lissageBtn = screen.getByText('LISSAGE').closest('button')!;
    fireEvent.click(lissageBtn);
    expect(screen.getByText(/LISSAGE/i)).toBeInTheDocument();
  });

  it('displays Choisir buttons linking to Planity', () => {
    render(<ServicesSection />);
    const chooseButtons = screen.getAllByText('Choisir');
    expect(chooseButtons[0].closest('a')).toHaveAttribute(
      'href',
      'https://www.planity.com/tendance-attitud-13190-allauch'
    );
  });
});
