import React from 'react';

const Footer: React.FC = () => (
    <footer
        className="footer-responsive"
        style={{
            width: '100vw',
            maxWidth: '100vw',
            padding: '24px 0 16px 0',
            textAlign: 'center',
            fontSize: 14,
            color: 'var(--text-main)',
            background: 'transparent',
            position: 'fixed',
            bottom: 0,
            zIndex: 20,
            letterSpacing: 1,
            userSelect: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
        }}
    >
        <div>
            © {new Date().getFullYear()} Cédric Tellier. Tous droits réservés.
        </div>
        <div>
            <a
                href="https://github.com/cedrictellier/CedricTellier.github.io"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    color: 'var(--link)',
                    textDecoration: 'underline',
                    transition: 'color 0.2s'
                }}
            >
                Code source sur GitHub
            </a>
        </div>
    </footer>
);

export default Footer;
