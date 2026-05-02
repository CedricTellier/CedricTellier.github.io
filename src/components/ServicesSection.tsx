import { getTokens } from '../lib/tokens';
import { Theme } from '../lib/types';
import { SERVICES } from '../lib/content';

interface ServicesSectionProps {
  theme: Theme;
  accent: string;
}

export default function ServicesSection({ theme, accent }: ServicesSectionProps) {
  const tokens = getTokens(theme, accent);

  return (
    <section
      id="services"
      style={{
        maxWidth: 1120,
        margin: '0 auto',
        padding: '120px 48px 80px',
      }}
    >
      {/* Section header */}
      <div style={{ marginBottom: 64 }}>
        <div
          style={{
            fontFamily: tokens.fontMono,
            fontSize: 11,
            color: accent,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: 16,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <span style={{ color: tokens.muted }}>01</span>
          <span>Services</span>
        </div>
        <h2
          style={{
            fontFamily: tokens.fontSerif,
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            margin: '0 0 16px',
            color: tokens.fg,
          }}
        >
          Comment je peux intervenir
        </h2>
        <p
          style={{
            fontSize: 17,
            color: tokens.muted,
            maxWidth: 560,
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          Quatre angles, à la mission ou en interne. Toujours orientés livraison et impact mesurable.
        </p>
      </div>

      {/* Services grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 1,
          background: tokens.border,
          border: `1px solid ${tokens.border}`,
          borderRadius: 12,
          overflow: 'hidden',
        }}
      >
        {SERVICES.map((s) => (
          <div
            key={s.id}
            style={{
              background: tokens.bg,
              padding: '36px 32px',
              minHeight: 240,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 14,
                marginBottom: 18,
              }}
            >
              <span
                style={{
                  fontFamily: tokens.fontMono,
                  fontSize: 12,
                  color: accent,
                  letterSpacing: '0.08em',
                }}
              >
                {s.id}
              </span>
              <h3
                style={{
                  margin: 0,
                  fontFamily: tokens.fontSerif,
                  fontSize: 26,
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  color: tokens.fg,
                }}
              >
                {s.title}
              </h3>
            </div>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.6,
                color: tokens.muted,
                margin: '0 0 22px',
              }}
            >
              {s.desc}
            </p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'grid',
                gap: 8,
              }}
            >
              {s.bullets.map((b, j) => (
                <li
                  key={j}
                  style={{
                    fontFamily: tokens.fontMono,
                    fontSize: 12,
                    color: tokens.fg,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                  }}
                >
                  <span style={{ color: accent }}>→</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
