import { getTokens } from '../lib/tokens';
import { Theme } from '../lib/types';
import { ACHIEVEMENTS } from '../lib/content';

interface MetricsBarProps {
  theme: Theme;
  accent: string;
}

export default function MetricsBar({ theme, accent }: MetricsBarProps) {
  const tokens = getTokens(theme, accent);
  const isDark = theme === 'dark';
  const bgAlt = isDark ? '#121214' : '#f2f1ec';

  const mono = "'JetBrains Mono', ui-monospace, monospace";
  const serif = "'Fraunces', Georgia, serif";

  return (
    <section
      style={{
        borderTop: `1px solid ${tokens.border}`,
        borderBottom: `1px solid ${tokens.border}`,
        background: bgAlt,
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          padding: '40px 48px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 32,
        }}
      >
        {ACHIEVEMENTS.map((a, i) => (
          <div
            key={i}
            style={{
              borderLeft: i > 0 ? `1px solid ${tokens.border}` : 'none',
              paddingLeft: i > 0 ? 32 : 0,
            }}
          >
            <div
              style={{
                fontFamily: serif,
                fontSize: 44,
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
                fontFamily: mono,
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
