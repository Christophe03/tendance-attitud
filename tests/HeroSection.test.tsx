/// <reference types="@testing-library/jest-dom/vitest" />
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HeroSection from '../src/components/home/HeroSection';

describe('HeroSection Component', () => {
  it('renders hero title, Allauch badge, and subtitle', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Du lisse aux Boucles/i)).toBeInTheDocument();
    expect(screen.getByText('Allauch')).toBeInTheDocument();
    expect(screen.getByText("Tous les cheveux méritent d'être sublimés")).toBeInTheDocument();
  });

  it('renders the 3 hero triptych images with proper attributes', () => {
    render(<HeroSection />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThanOrEqual(3);
    const srcs = images.map((img) => img.getAttribute('src'));
    expect(srcs.some((s) => s?.includes('hero-left'))).toBe(true);
    expect(srcs.some((s) => s?.includes('hero-center'))).toBe(true);
    expect(srcs.some((s) => s?.includes('hero-right'))).toBe(true);
  });
});
