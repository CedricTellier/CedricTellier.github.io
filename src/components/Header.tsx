import { getTokens } from '../lib/tokens';
import { Theme } from '../lib/types';
import { PROFILE } from '../lib/content';
import { useIsMobile } from '../hooks/useBreakpoint';

interface HeaderProps {
  theme: Theme;
  onThemeChange: (t: Theme) => void;
  accent: string;
}

export default function Header({ theme, onThemeChange, accent }: HeaderProps) {
  const tokens = getTokens(theme, accent);
  const isDark = theme === 'dark';
  const isMobile = useIsMobile();

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 30,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        background: tokens.bgBlur,
        borderBottom: `1px solid ${tokens.border}`,
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          padding: isMobile ? '14px 20px' : '18px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Terminal prompt */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontFamily: tokens.fontMono,
            fontSize: isMobile ? 11 : 13,
            minWidth: 0,
            overflow: 'hidden',
          }}
        >
          <span
            aria-hidden="true"
            style={{
              display: 'inline-block',
              width: 8,
              height: 8,
              borderRadius: 999,
              background: '#22c55e',
              boxShadow: '0 0 12px #22c55e',
              flexShrink: 0,
            }}
          />
          {!isMobile && (
            <span style={{ color: tokens.muted }}>cedric@tellier:~$</span>
          )}
          <span style={{ color: tokens.fg, fontWeight: 500 }}>./about</span>
          <span
            style={{
              color: accent,
              animation: 'blink 1.1s steps(1) infinite',
            }}
          >
            ▍
          </span>
        </div>

        {/* Nav + theme toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 12 : 28, flexShrink: 0 }}>
          {!isMobile && (
            <nav
              style={{
                display: 'flex',
                gap: 28,
                fontFamily: tokens.fontMono,
                fontSize: 13,
              }}
            >
              <a href="#services" style={{ color: tokens.muted, textDecoration: 'none' }}>
                services
              </a>
              <a href="#skills" style={{ color: tokens.muted, textDecoration: 'none' }}>
                compétences
              </a>
              <a href="#contact" style={{ color: tokens.muted, textDecoration: 'none' }}>
                contact
              </a>
              <a
                href={PROFILE.cv}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: accent, textDecoration: 'none', fontWeight: 500 }}
              >
                CV ↓
              </a>
            </nav>
          )}

          {isMobile && (
            <a
              href="#contact"
              style={{
                color: accent,
                textDecoration: 'none',
                fontFamily: tokens.fontMono,
                fontSize: 11,
                fontWeight: 500,
              }}
            >
              Contact
            </a>
          )}

          <button
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            onClick={() => onThemeChange(isDark ? 'light' : 'dark')}
            style={{
              background: 'none',
              border: `1px solid ${tokens.border}`,
              borderRadius: 6,
              color: tokens.muted,
              cursor: 'pointer',
              fontFamily: tokens.fontMono,
              fontSize: 12,
              padding: '4px 8px',
              lineHeight: 1,
              flexShrink: 0,
            }}
          >
            {isDark ? '☀' : '◑'}
          </button>
        </div>
      </div>
    </header>
  );
}
