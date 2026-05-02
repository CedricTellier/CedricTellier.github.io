import { getTokens } from '../lib/tokens';
import { Theme } from '../lib/types';
import { PROFILE } from '../lib/content';

interface HeroProps {
  theme: Theme;
  accent: string;
}

const iconBtnStyle = (borderColor: string, color: string) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 36,
  height: 36,
  borderRadius: 8,
  border: `1px solid ${borderColor}`,
  color,
  textDecoration: 'none',
});

export default function Hero({ theme, accent }: HeroProps) {
  const tokens = getTokens(theme, accent);
  const isDark = theme === 'dark';
  const gridColor = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)';
  const borderStrong = isDark ? 'rgba(255,255,255,0.16)' : 'rgba(0,0,0,0.20)';

  return (
    <section
      style={{
        maxWidth: 1120,
        margin: '0 auto',
        padding: '120px 48px 96px',
        position: 'relative',
      }}
    >
      {/* Grid background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse at top, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at top, black 30%, transparent 70%)',
        }}
      />

      <div style={{ position: 'relative' }}>
        {/* Meta line */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            fontFamily: tokens.fontMono,
            fontSize: 12,
            color: tokens.muted,
            marginBottom: 32,
            letterSpacing: '0.04em',
          }}
        >
          <span style={{ color: accent }}>●</span>
          <span>{PROFILE.status.toUpperCase()}</span>
          <span>·</span>
          <span>{PROFILE.location}</span>
          <span>·</span>
          <span>EST. 2021</span>
        </div>

        {/* Heading */}
        <h1
          style={{
            fontFamily: tokens.fontSerif,
            fontWeight: 400,
            fontSize: 'clamp(56px, 7vw, 92px)',
            lineHeight: 1.02,
            letterSpacing: '-0.025em',
            margin: '0 0 28px',
            maxWidth: 900,
            color: tokens.fg,
          }}
        >
          <span style={{ color: tokens.muted, fontStyle: 'italic', fontWeight: 300 }}>
            Bonjour, je suis
          </span>
          <br />
          {PROFILE.name}.
          <br />
          <span style={{ color: accent, fontStyle: 'italic' }}>Engineering Manager.</span>
        </h1>

        {/* Pitch */}
        <p
          style={{
            fontSize: 20,
            lineHeight: 1.55,
            maxWidth: 640,
            color: tokens.fg,
            margin: '0 0 40px',
            fontWeight: 400,
          }}
        >
          {PROFILE.pitchLong}
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            gap: 14,
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <a
            href="#contact"
            style={{
              background: accent,
              color: tokens.accentFg,
              padding: '14px 24px',
              borderRadius: 8,
              fontFamily: tokens.fontMono,
              fontSize: 13,
              fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            Discuter d&apos;un besoin →
          </a>
          <a
            href={PROFILE.cv}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: `1px solid ${borderStrong}`,
              color: tokens.fg,
              padding: '13px 24px',
              borderRadius: 8,
              fontFamily: tokens.fontMono,
              fontSize: 13,
              fontWeight: 500,
              textDecoration: 'none',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            Télécharger le CV ↓
          </a>

          <div style={{ display: 'flex', gap: 4, marginLeft: 8 }}>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={iconBtnStyle(tokens.border, tokens.fg)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={iconBtnStyle(tokens.border, tokens.fg)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
