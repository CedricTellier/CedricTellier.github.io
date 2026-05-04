import { getTokens } from '../lib/tokens';
import { Theme } from '../lib/types';
import { useIsMobile } from '../hooks/useBreakpoint';

interface FooterProps {
  theme: Theme;
  accent: string;
}

export default function Footer({ theme, accent }: FooterProps) {
  const tokens = getTokens(theme, accent);
  const isMobile = useIsMobile();

  return (
    <footer
      style={{
        borderTop: `1px solid ${tokens.border}`,
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          padding: isMobile ? '24px 20px' : '32px 48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: tokens.fontMono,
          fontSize: 12,
          color: tokens.muted,
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <span>© {new Date().getFullYear()} Cédric Tellier</span>
        <span>Built with care · Updated 2026</span>
      </div>
    </footer>
  );
}
