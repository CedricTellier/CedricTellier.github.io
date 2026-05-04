import { getTokens } from '../lib/tokens';
import { Theme } from '../lib/types';
import { SKILLS } from '../lib/content';
import { useIsMobile } from '../hooks/useBreakpoint';

interface SkillsSectionProps {
  theme: Theme;
  accent: string;
}

const PILLARS = [
  { key: 'management' as const, label: 'Management' },
  { key: 'delivery' as const, label: 'Delivery' },
  { key: 'tech' as const, label: 'Tech' },
];

export default function SkillsSection({ theme, accent }: SkillsSectionProps) {
  const tokens = getTokens(theme, accent);
  const isMobile = useIsMobile();

  return (
    <section
      id="skills"
      style={{
        background: tokens.bgAlt,
        borderTop: `1px solid ${tokens.border}`,
        borderBottom: `1px solid ${tokens.border}`,
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          padding: isMobile ? '72px 20px' : '120px 48px',
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
            <span style={{ color: tokens.muted }}>02</span>
            <span>Compétences</span>
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
            Le terrain de jeu
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
            Management, delivery et tech — un triangle où je passe la majorité de mon temps.
          </p>
        </div>

        {/* Pillars grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? 16 : 32,
          }}
        >
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.key}
              style={{
                background: tokens.bg,
                border: `1px solid ${tokens.border}`,
                borderRadius: 12,
                padding: 32,
              }}
            >
              <div
                style={{
                  fontFamily: tokens.fontMono,
                  fontSize: 11,
                  color: accent,
                  letterSpacing: '0.1em',
                  marginBottom: 6,
                  textTransform: 'uppercase',
                }}
              >
                {`Pilier 0${i + 1}`}
              </div>
              <h3
                style={{
                  fontFamily: tokens.fontSerif,
                  fontSize: 30,
                  margin: '0 0 24px',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  color: tokens.fg,
                }}
              >
                {pillar.label}
              </h3>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gap: 0,
                }}
              >
                {SKILLS[pillar.key].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: 14,
                      color: tokens.fg,
                      display: 'flex',
                      gap: 10,
                      alignItems: 'baseline',
                      paddingBottom: 10,
                      paddingTop: 10,
                      borderBottom: `1px solid ${tokens.border}`,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: tokens.fontMono,
                        fontSize: 11,
                        color: tokens.muted,
                        flexShrink: 0,
                      }}
                    >
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
