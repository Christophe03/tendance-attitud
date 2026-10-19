/// <reference types="@testing-library/jest-dom/vitest" />
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LetterReveal from '../src/components/ui/LetterReveal';

describe('LetterReveal Component', () => {
  it('renders the complete text with accessibility support', () => {
    render(<LetterReveal text="Du lisse aux Boucles" className="font-script text-gold-400" />);
    
    // Accessible text is readable for screen readers and search engines
    expect(screen.getByText('Du lisse aux Boucles')).toBeInTheDocument();
  });

  it('renders individual characters for handwriting animation', () => {
    const { container } = render(
      <LetterReveal text="Salon Tendance" as="h2" className="text-2xl" />
    );
    
    const h2 = container.querySelector('h2');
    expect(h2).toBeInTheDocument();
    
    // Contains aria-hidden container with letter spans
    const animatedContainer = container.querySelector('[aria-hidden="true"]');
    expect(animatedContainer).toBeInTheDocument();
    expect(animatedContainer?.textContent?.replace(/\u00A0/g, ' ').trim()).toBe('Salon Tendance');
  });

  it('preserves words with word-wrapping spans', () => {
    const { container } = render(<LetterReveal text="Nos prestations" />);
    const words = container.querySelectorAll('.inline-block.whitespace-nowrap');
    expect(words.length).toBe(2);
  });
});
