import { render, screen } from '@testing-library/react';
import SkillsSection from './SkillsSection';

const defaultProps = {
  theme: 'dark' as const,
  accent: '#3B82F6',
};

describe('SkillsSection', () => {
  it('renders the section heading', () => {
    render(<SkillsSection {...defaultProps} />);
    expect(screen.getByText(/Le terrain de jeu/i)).toBeInTheDocument();
  });

  it('renders the three pillar headings', () => {
    render(<SkillsSection {...defaultProps} />);
    expect(screen.getByText('Management')).toBeInTheDocument();
    expect(screen.getByText('Delivery')).toBeInTheDocument();
    expect(screen.getByText('Tech')).toBeInTheDocument();
  });

  it('renders pillar labels', () => {
    render(<SkillsSection {...defaultProps} />);
    expect(screen.getByText('Pilier 01')).toBeInTheDocument();
    expect(screen.getByText('Pilier 02')).toBeInTheDocument();
    expect(screen.getByText('Pilier 03')).toBeInTheDocument();
  });

  it('renders management skill items', () => {
    render(<SkillsSection {...defaultProps} />);
    expect(screen.getByText(/Leadership d'équipe/i)).toBeInTheDocument();
    expect(screen.getByText(/Vulgarisation tech/i)).toBeInTheDocument();
  });

  it('renders delivery skill items', () => {
    render(<SkillsSection {...defaultProps} />);
    expect(screen.getByText(/Méthodes agiles/i)).toBeInTheDocument();
    expect(screen.getByText(/Gestion des risques/i)).toBeInTheDocument();
  });

  it('renders tech skill items', () => {
    render(<SkillsSection {...defaultProps} />);
    expect(screen.getByText(/Python, Java/i)).toBeInTheDocument();
    expect(screen.getByText(/EMV, ISO 8583/i)).toBeInTheDocument();
  });

  it('has the correct section id for anchor navigation', () => {
    const { container } = render(<SkillsSection {...defaultProps} />);
    expect(container.querySelector('#skills')).toBeInTheDocument();
  });
});
