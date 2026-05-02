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

  it('updates email field on input', () => {
    render(<ContactSection {...defaultProps} />);
    const input = screen.getByLabelText(/email/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    expect(input.value).toBe('test@example.com');
  });

  it('updates message field on input', () => {
    render(<ContactSection {...defaultProps} />);
    const textarea = screen.getByLabelText(/message/i) as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: 'Bonjour!' } });
    expect(textarea.value).toBe('Bonjour!');
  });

  it('form submit constructs correct mailto href', () => {
    const originalLocation = window.location;
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { href: '' },
    });

    render(<ContactSection {...defaultProps} />);
    fireEvent.change(screen.getByLabelText(/nom/i), { target: { value: 'Alice' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'alice@example.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Bonjour!' } });
    fireEvent.submit(screen.getByRole('form'));

    const subject = encodeURIComponent('Contact depuis le portfolio — Alice');
    const body = encodeURIComponent('De : Alice\nEmail : alice@example.com\n\nBonjour!');
    expect(window.location.href).toBe(
      `mailto:cedric.tellier25@gmail.com?subject=${subject}&body=${body}`
    );

    Object.defineProperty(window, 'location', { writable: true, value: originalLocation });
  });
});
