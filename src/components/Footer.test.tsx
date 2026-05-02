import { render, screen } from '@testing-library/react';
import Footer from './Footer';

const defaultProps = {
  theme: 'dark' as const,
  accent: '#3B82F6',
};

describe('Footer', () => {
  it('renders the copyright year and name', () => {
    render(<Footer {...defaultProps} />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`${year}.*Cédric Tellier`, 'i'))).toBeInTheDocument();
  });

  it('renders the built-with note', () => {
    render(<Footer {...defaultProps} />);
    expect(screen.getByText(/Built with care/i)).toBeInTheDocument();
  });

  it('renders in light theme without crashing', () => {
    render(<Footer theme="light" accent="#FF5B22" />);
    expect(screen.getByText(/Cédric Tellier/i)).toBeInTheDocument();
  });
});
