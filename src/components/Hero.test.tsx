import { render, screen } from '@testing-library/react';
import Hero from './Hero';

const defaultProps = {
  theme: 'dark' as const,
  accent: '#3B82F6',
};

describe('Hero', () => {
  it('renders the greeting heading', () => {
    render(<Hero {...defaultProps} />);
    expect(screen.getByText('Bonjour, je suis')).toBeInTheDocument();
  });

  it('renders the name', () => {
    render(<Hero {...defaultProps} />);
    expect(screen.getByText(/Cédric Tellier/)).toBeInTheDocument();
  });

  it('renders the role', () => {
    render(<Hero {...defaultProps} />);
    expect(screen.getByText('Engineering Manager.')).toBeInTheDocument();
  });

  it('renders the pitch text', () => {
    render(<Hero {...defaultProps} />);
    expect(screen.getByText(/18\+/)).toBeInTheDocument();
  });

  it('renders the contact CTA link', () => {
    render(<Hero {...defaultProps} />);
    const cta = screen.getByRole('link', { name: /Discuter/i });
    expect(cta).toHaveAttribute('href', '#contact');
  });

  it('renders the CV download link', () => {
    render(<Hero {...defaultProps} />);
    const cvLink = screen.getByRole('link', { name: /CV/i });
    expect(cvLink).toHaveAttribute('href', 'cv.pdf');
    expect(cvLink).toHaveAttribute('target', '_blank');
  });

  it('renders LinkedIn and GitHub links', () => {
    render(<Hero {...defaultProps} />);
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
  });

  it('renders status and location meta line', () => {
    render(<Hero {...defaultProps} />);
    expect(screen.getAllByText(/disponible/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Valdahon/i).length).toBeGreaterThan(0);
  });
});
