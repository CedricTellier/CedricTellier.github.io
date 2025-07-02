import React from 'react';

const Footer: React.FC = () => (
    <footer
        style={{
            width: '100%',
            padding: '24px 0 16px 0',
            textAlign: 'center',
            fontSize: 14,
            color: 'var(--text-main)',
            background: 'transparent',
            position: 'fixed',
            left: 0,
            bottom: 0,
            zIndex: 20,
            letterSpacing: 1,
            userSelect: 'none'
        }}
    >
        © {new Date().getFullYear()} Cédric Tellier. Tous droits réservés. &nbsp;|&nbsp;
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
    </footer>
);

export default Footer;
