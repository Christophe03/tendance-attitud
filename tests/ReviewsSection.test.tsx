/// <reference types="@testing-library/jest-dom/vitest" />
import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ReviewsSection from '../src/components/home/ReviewsSection';
import { REVIEWS } from '../src/data/reviews';

describe('ReviewsSection Component', () => {
  it('renders heading with stars and displays review card', () => {
    render(<ReviewsSection />);
    expect(screen.getByText(/Vous nous faites/i)).toBeInTheDocument();
    expect(screen.getByText(/confiance/i)).toBeInTheDocument();
    expect(screen.getByText(/5,0/i)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(REVIEWS[0].comment, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(REVIEWS[0].date, 'i'))).toBeInTheDocument();
  });

  it('navigates to next and previous review on arrow click', async () => {
    render(<ReviewsSection />);
    const nextBtn = screen.getByLabelText(/Avis suivant/i);
    const prevBtn = screen.getByLabelText(/Avis précédent/i);

    // Initial review is REVIEWS[0]
    expect(screen.getByText(new RegExp(REVIEWS[0].comment, 'i'))).toBeInTheDocument();

    // Click next -> REVIEWS[1]
    await act(async () => {
      fireEvent.click(nextBtn);
    });
    expect(screen.getByText(new RegExp(REVIEWS[1].comment, 'i'))).toBeInTheDocument();

    // Click prev -> back to REVIEWS[0]
    await act(async () => {
      fireEvent.click(prevBtn);
    });
    expect(screen.getByText(new RegExp(REVIEWS[0].comment, 'i'))).toBeInTheDocument();
  });

  it('wraps around to the last review when clicking previous from first review', async () => {
    render(<ReviewsSection />);
    const prevBtn = screen.getByLabelText(/Avis précédent/i);
    
    // Clicking previous from first review should cycle to last review
    await act(async () => {
      fireEvent.click(prevBtn);
    });
    const lastReview = REVIEWS[REVIEWS.length - 1];
    expect(screen.getByText(new RegExp(lastReview.comment, 'i'))).toBeInTheDocument();
  });

  it('allows navigation via pagination dots', async () => {
    render(<ReviewsSection />);
    const dot3 = screen.getByLabelText(/Aller à l'avis 3/i);
    await act(async () => {
      fireEvent.click(dot3);
    });

    expect(screen.getByText(new RegExp(REVIEWS[2].comment, 'i'))).toBeInTheDocument();
  });
});
