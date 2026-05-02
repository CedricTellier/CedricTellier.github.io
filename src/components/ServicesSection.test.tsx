import { render, screen } from '@testing-library/react';
import ServicesSection from './ServicesSection';

const defaultProps = {
  theme: 'dark' as const,
  accent: '#3B82F6',
};

describe('ServicesSection', () => {
  it('renders the section heading', () => {
    render(<ServicesSection {...defaultProps} />);
    expect(screen.getByText(/Comment je peux intervenir/i)).toBeInTheDocument();
  });

  it('renders all 4 service titles', () => {
    render(<ServicesSection {...defaultProps} />);
    expect(screen.getByText("Management d'équipe")).toBeInTheDocument();
    expect(screen.getByText('Pilotage technique')).toBeInTheDocument();
    expect(screen.getByText('Architecture logicielle')).toBeInTheDocument();
    expect(screen.getByText('Audit')).toBeInTheDocument();
  });

  it('renders service IDs', () => {
    render(<ServicesSection {...defaultProps} />);
    expect(screen.getAllByText('01').length).toBeGreaterThan(0);
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('03')).toBeInTheDocument();
    expect(screen.getByText('04')).toBeInTheDocument();
  });

  it('renders bullet points for each service', () => {
    render(<ServicesSection {...defaultProps} />);
    expect(screen.getByText('Cadrage des rôles & responsabilités')).toBeInTheDocument();
    expect(screen.getByText('Roadmap & priorisation')).toBeInTheDocument();
    expect(screen.getByText("Revues d'architecture")).toBeInTheDocument();
    expect(screen.getByText('Audit organisationnel')).toBeInTheDocument();
  });

  it('has the correct section id for anchor navigation', () => {
    const { container } = render(<ServicesSection {...defaultProps} />);
    expect(container.querySelector('#services')).toBeInTheDocument();
  });

  it('renders in light theme without crashing', () => {
    render(<ServicesSection theme="light" accent="#FF5B22" />);
    expect(screen.getByText(/Comment je peux intervenir/i)).toBeInTheDocument();
  });
});
