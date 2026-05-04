import { getTokens } from '../lib/tokens';
import { Theme } from '../lib/types';
import { ACHIEVEMENTS } from '../lib/content';
import { useIsMobile } from '../hooks/useBreakpoint';

interface MetricsBarProps {
  theme: Theme;
  accent: string;
}

export default function MetricsBar({ theme, accent }: MetricsBarProps) {
  const tokens = getTokens(theme, accent);
  const isMobile = useIsMobile();

  return (
    <section
      style={{
        borderTop: `1px solid ${tokens.border}`,
        borderBottom: `1px solid ${tokens.border}`,
        background: tokens.bgAlt,
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          padding: isMobile ? '32px 20px' : '40px 48px',
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: isMobile ? 24 : 32,
        }}
      >
        {ACHIEVEMENTS.map((a, i) => (
          <div
            key={i}
            style={{
              borderLeft: isMobile
                ? (i % 2 === 1 ? `1px solid ${tokens.border}` : 'none')
                : (i > 0 ? `1px solid ${tokens.border}` : 'none'),
              paddingLeft: isMobile
                ? (i % 2 === 1 ? 20 : 0)
                : (i > 0 ? 32 : 0),
            }}
          >
            <div
              style={{
                fontFamily: tokens.fontSerif,
                fontSize: isMobile ? 36 : 44,
                fontWeight: 500,
                lineHeight: 1,
                letterSpacing: '-0.02em',
                color: tokens.fg,
              }}
            >
              {a.value}
            </div>
            <div
              style={{
                fontFamily: tokens.fontMono,
                fontSize: 11,
                color: tokens.muted,
                marginTop: 10,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              {a.label}
            </div>
            <div
              style={{
                fontSize: 13,
                color: tokens.fg,
                marginTop: 8,
                lineHeight: 1.45,
                opacity: 0.75,
              }}
            >
              {a.note}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
