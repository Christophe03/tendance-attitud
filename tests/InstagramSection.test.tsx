/// <reference types="@testing-library/jest-dom/vitest" />
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import InstagramSection from '../src/components/home/InstagramSection';

describe('InstagramSection Component', () => {
  it('renders heading and Instagram links', () => {
    render(<InstagramSection />);
    expect(screen.getByText(/Rejoignez-nous sur @Tendanceattitud/i)).toBeInTheDocument();
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThanOrEqual(3);
    expect(links[0]).toHaveAttribute('href', 'https://www.instagram.com/tendanceattitud/');
  });

  it('renders all 3 Instagram feed cards with images and badges', () => {
    render(<InstagramSection />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(3);

    expect(images[0].getAttribute('src')).toMatch(/insta-1(-v2)?\.webp/);
    expect(images[1].getAttribute('src')).toMatch(/insta-2(-v2)?\.webp/);
    expect(images[2].getAttribute('src')).toMatch(/insta-3(-v2)?\.webp/);

    // All links open in new tab securely
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', 'https://www.instagram.com/tendanceattitud/');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('has accessible section markup', () => {
    const { container } = render(<InstagramSection />);
    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute('aria-label');
  });
});
