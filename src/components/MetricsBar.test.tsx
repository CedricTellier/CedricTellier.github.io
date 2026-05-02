import { render, screen } from '@testing-library/react';
import MetricsBar from './MetricsBar';

const defaultProps = {
  theme: 'dark' as const,
  accent: '#3B82F6',
};

describe('MetricsBar', () => {
  it('renders all 4 achievement values', () => {
    render(<MetricsBar {...defaultProps} />);
    expect(screen.getByText('18+')).toBeInTheDocument();
    expect(screen.getByText('ISO 8583')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('80M+')).toBeInTheDocument();
  });

  it('renders achievement labels', () => {
    render(<MetricsBar {...defaultProps} />);
    expect(screen.getByText(/années d'expérience/i)).toBeInTheDocument();
    expect(screen.getByText(/expert normes bancaires/i)).toBeInTheDocument();
    expect(screen.getByText(/personnes managées/i)).toBeInTheDocument();
    expect(screen.getByText(/transactions traitées/i)).toBeInTheDocument();
  });

  it('renders achievement notes', () => {
    render(<MetricsBar {...defaultProps} />);
    expect(screen.getByText(/Multiples secteurs/i)).toBeInTheDocument();
    expect(screen.getByText(/EMV/i)).toBeInTheDocument();
    expect(screen.getByText(/pluridisciplinaire/i)).toBeInTheDocument();
    expect(screen.getByText(/Mise en production/i)).toBeInTheDocument();
  });

  it('renders in light theme without crashing', () => {
    render(<MetricsBar theme="light" accent="#FF5B22" />);
    expect(screen.getByText('18+')).toBeInTheDocument();
  });
});
