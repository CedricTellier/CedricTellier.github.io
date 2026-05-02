import { render, screen } from '@testing-library/react';
import Home from '../../pages/index';

jest.mock('next/head', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('Home page', () => {
  it('renders the terminal prompt in the header', () => {
    render(<Home />);
    expect(screen.getByText('cedric@tellier:~$')).toBeInTheDocument();
  });

  it('renders the hero heading', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders the metrics bar', () => {
    render(<Home />);
    expect(screen.getByText('18+')).toBeInTheDocument();
  });

  it('renders the services section', () => {
    render(<Home />);
    expect(screen.getByText(/Comment je peux intervenir/i)).toBeInTheDocument();
  });

  it('renders the skills section', () => {
    render(<Home />);
    expect(screen.getByText(/Le terrain de jeu/i)).toBeInTheDocument();
  });

  it('renders the contact section', () => {
    render(<Home />);
    expect(screen.getByText(/Parlons de votre besoin/i)).toBeInTheDocument();
  });

  it('renders the footer', () => {
    render(<Home />);
    expect(screen.getByText(/Built with care/i)).toBeInTheDocument();
  });
});
