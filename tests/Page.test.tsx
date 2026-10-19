import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HomePage from '../src/app/page';

describe('HomePage Full Integration', () => {
  it('renders all sections in correct order', () => {
    render(<HomePage />);
    expect(screen.getByText(/Du lisse aux Boucles/i)).toBeInTheDocument();
    expect(screen.getByText(/Vous nous faites/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Nos prestations/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/Le salon, notre équipe/i)).toBeInTheDocument();
    expect(screen.getByText(/Rejoignez-nous sur @Tendanceattitud/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Salon Tendance Attitud/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/Nos partenaires/i)).toBeInTheDocument();
  });
});
