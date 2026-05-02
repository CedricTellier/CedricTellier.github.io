import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

const defaultProps = {
  theme: 'dark' as const,
  onThemeChange: jest.fn(),
  accent: '#3B82F6',
};

describe('Header', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the terminal prompt', () => {
    render(<Header {...defaultProps} />);
    expect(screen.getByText('cedric@tellier:~$')).toBeInTheDocument();
    expect(screen.getByText('./about')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header {...defaultProps} />);
    expect(screen.getByRole('link', { name: 'services' })).toHaveAttribute('href', '#services');
    expect(screen.getByRole('link', { name: 'compétences' })).toHaveAttribute('href', '#skills');
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '#contact');
  });

  it('renders CV download link', () => {
    render(<Header {...defaultProps} />);
    const cvLink = screen.getByRole('link', { name: /CV/i });
    expect(cvLink).toHaveAttribute('href', 'cv.pdf');
    expect(cvLink).toHaveAttribute('target', '_blank');
    expect(cvLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('calls onThemeChange when theme toggle is clicked', () => {
    render(<Header {...defaultProps} />);
    const toggle = screen.getByRole('button', { name: /theme/i });
    fireEvent.click(toggle);
    expect(defaultProps.onThemeChange).toHaveBeenCalledWith('light');
  });

  it('calls onThemeChange with dark when current theme is light', () => {
    render(<Header {...defaultProps} theme="light" />);
    const toggle = screen.getByRole('button', { name: /theme/i });
    fireEvent.click(toggle);
    expect(defaultProps.onThemeChange).toHaveBeenCalledWith('dark');
  });

  it('renders the status indicator dot', () => {
    render(<Header {...defaultProps} />);
    const dot = document.querySelector('[aria-hidden="true"]');
    expect(dot).toBeInTheDocument();
  });
});
