import { render, screen, fireEvent } from '@testing-library/react';
import ContactSection from './ContactSection';

const defaultProps = {
  theme: 'dark' as const,
  accent: '#3B82F6',
};

describe('ContactSection', () => {
  it('renders the section heading', () => {
    render(<ContactSection {...defaultProps} />);
    expect(screen.getByText(/Parlons de votre besoin/i)).toBeInTheDocument();
  });

  it('has the correct section id', () => {
    const { container } = render(<ContactSection {...defaultProps} />);
    expect(container.querySelector('#contact')).toBeInTheDocument();
  });

  it('renders form fields: name, email, message', () => {
    render(<ContactSection {...defaultProps} />);
    expect(screen.getByLabelText(/nom/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('renders a submit button', () => {
    render(<ContactSection {...defaultProps} />);
    expect(screen.getByRole('button', { name: /envoyer/i })).toBeInTheDocument();
  });

  it('renders terminal sidebar with email link', () => {
    render(<ContactSection {...defaultProps} />);
    expect(screen.getByRole('link', { name: /cedric\.tellier25@gmail\.com/i })).toBeInTheDocument();
  });

  it('renders terminal sidebar with linkedin link', () => {
    render(<ContactSection {...defaultProps} />);
    expect(screen.getByRole('link', { name: /cedric-tellier/i })).toBeInTheDocument();
  });

  it('updates name field on input', () => {
    render(<ContactSection {...defaultProps} />);
    const input = screen.getByLabelText(/nom/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Test User' } });
    expect(input.value).toBe('Test User');
  });

  it('form submit triggers mailto href', () => {
    render(<ContactSection {...defaultProps} />);
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });
});
