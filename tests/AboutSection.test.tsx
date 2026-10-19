/// <reference types="@testing-library/jest-dom/vitest" />
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AboutSection from '../src/components/home/AboutSection';

describe('AboutSection Component', () => {
  it('renders section title and team description', () => {
    render(<AboutSection />);
    expect(screen.getByText(/Le salon, notre équipe/i)).toBeInTheDocument();
    expect(screen.getByText(/Nathalie/i)).toBeInTheDocument();
  });

  it('has section id "equipe" for anchor navigation', () => {
    const { container } = render(<AboutSection />);
    const section = container.querySelector('#equipe');
    expect(section).toBeInTheDocument();
  });

  it('renders team photo and salon interior photo with alt attributes', () => {
    render(<AboutSection />);
    const teamImg = screen.getByAltText(/équipe.*tendance attitud/i);
    const interiorImg = screen.getByAltText(/intérieur.*salon.*allauch/i);

    expect(teamImg).toBeInTheDocument();
    expect(interiorImg).toBeInTheDocument();
    expect(teamImg.getAttribute('src')).toMatch(/team(-v2)?\.webp/);
    expect(interiorImg.getAttribute('src')).toMatch(/interior(-v2)?\.webp/);
  });

  it('highlights salon expertise and values', () => {
    render(<AboutSection />);
    expect(screen.getByText(/Allauch/i)).toBeInTheDocument();
    expect(screen.getByText(/Tokio Inkarami/i)).toBeInTheDocument();
  });
});
