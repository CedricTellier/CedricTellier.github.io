import { useState } from 'react';
import { getTokens } from '../lib/tokens';
import { Theme } from '../lib/types';
import { PROFILE } from '../lib/content';

interface ContactSectionProps {
  theme: Theme;
  accent: string;
}

const inputStyle = (bg: string, border: string, fg: string, mono: string) => ({
  width: '100%',
  background: bg,
  border: `1px solid ${border}`,
  borderRadius: 8,
  color: fg,
  fontFamily: mono,
  fontSize: 14,
  padding: '12px 14px',
  outline: 'none',
  boxSizing: 'border-box' as const,
});

const labelStyle = (mono: string, muted: string) => ({
  display: 'block',
  fontFamily: mono,
  fontSize: 11,
  color: muted,
  letterSpacing: '0.08em',
  textTransform: 'uppercase' as const,
  marginBottom: 8,
});

export default function ContactSection({ theme, accent }: ContactSectionProps) {
  const tokens = getTokens(theme, accent);
  const isDark = theme === 'dark';
  const bgAlt = isDark ? '#121214' : '#f2f1ec';

  const mono = "'JetBrains Mono', ui-monospace, monospace";
  const serif = "'Fraunces', Georgia, serif";

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact depuis le portfolio — ${name}`);
    const body = encodeURIComponent(`De : ${name}\nEmail : ${email}\n\n${message}`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      style={{
        maxWidth: 1120,
        margin: '0 auto',
        padding: '120px 48px 100px',
      }}
    >
      {/* Section header */}
      <div style={{ marginBottom: 64 }}>
        <div
          style={{
            fontFamily: mono,
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
          <span style={{ color: tokens.muted }}>03</span>
          <span>Contact</span>
        </div>
        <h2
          style={{
            fontFamily: serif,
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            margin: '0 0 16px',
            color: tokens.fg,
          }}
        >
          Parlons de votre besoin
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
          Mission, poste, audit, simple échange — quelques lignes suffisent. Je réponds sous 48h ouvrées.
        </p>
      </div>

      {/* Two-column layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: 72,
          alignItems: 'start',
        }}
      >
        {/* Contact form */}
        <form
          aria-label="Formulaire de contact"
          onSubmit={handleSubmit}
          style={{ display: 'grid', gap: 24 }}
        >
          <div>
            <label htmlFor="contact-name" style={labelStyle(mono, tokens.muted)}>
              Nom
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Votre nom"
              style={inputStyle(tokens.inputBg, tokens.border, tokens.fg, mono)}
            />
          </div>
          <div>
            <label htmlFor="contact-email" style={labelStyle(mono, tokens.muted)}>
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              style={inputStyle(tokens.inputBg, tokens.border, tokens.fg, mono)}
            />
          </div>
          <div>
            <label htmlFor="contact-message" style={labelStyle(mono, tokens.muted)}>
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Dites-moi en quelques mots ce que vous cherchez…"
              style={{
                ...inputStyle(tokens.inputBg, tokens.border, tokens.fg, mono),
                resize: 'vertical',
              }}
            />
          </div>
          <div>
            <button
              type="submit"
              style={{
                background: accent,
                color: tokens.accentFg,
                border: 'none',
                borderRadius: 8,
                padding: '14px 28px',
                fontFamily: mono,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              Envoyer →
            </button>
          </div>
        </form>

        {/* Terminal sidebar */}
        <aside
          style={{
            background: bgAlt,
            border: `1px solid ${tokens.border}`,
            borderRadius: 12,
            padding: 32,
            fontFamily: mono,
            fontSize: 13,
          }}
        >
          <div
            style={{
              color: tokens.muted,
              fontSize: 11,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            ~/contact.txt
          </div>
          <pre
            style={{
              margin: 0,
              fontFamily: 'inherit',
              color: tokens.fg,
              lineHeight: 1.7,
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all',
            }}
          >
            {`name      = "Cédric Tellier"\nrole      = "Engineering Manager"\nlocation  = "France · remote-friendly"\nstatus    = "${PROFILE.status}"\n\n> open to:\n  - missions (audit, transition, conseil)\n  - postes salariés\n  - échanges sans engagement\n\n> contact:\n  - email     `}
            <a href={`mailto:${PROFILE.email}`} style={{ color: accent }}>
              {PROFILE.email}
            </a>
            {`\n  - linkedin  `}
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: accent }}
            >
              /in/cedric-tellier
            </a>
            {`\n  - github    `}
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: accent }}
            >
              /cedrictellier
            </a>
            {`\n  - cv        `}
            <a
              href={PROFILE.cv}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: accent }}
            >
              cv.pdf
            </a>
          </pre>
        </aside>
      </div>
    </section>
  );
}
