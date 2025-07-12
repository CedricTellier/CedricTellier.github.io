import React, { useEffect, useState } from 'react';

const THEME_LINK_ID = 'theme-css-link';

const ThemeSwitch: React.FC = () => {
    // Met le mode sombre par défaut
    const [dark, setDark] = useState(() => true);

    useEffect(() => {
        document.body.style.transition = 'background 0.8s, color 0.8s, filter 0.8s';
        return () => {
            document.body.style.transition = '';
        };
    }, []);

    useEffect(() => {
        if (dark) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        let link = document.getElementById(THEME_LINK_ID) as HTMLLinkElement | null;
        if (!link) {
            link = document.createElement('link');
            link.id = THEME_LINK_ID;
            link.rel = 'stylesheet';
            // Ajoute le link AVANT le premier style/script/meta pour éviter un reflow
            const first = document.head.querySelector('style,script,meta,link');
            if (first) {
                document.head.insertBefore(link, first);
            } else {
                document.head.appendChild(link);
            }
        }
        link.href = dark ? '/theme-dark.css' : '/theme-light.css';
    }, [dark]);

    return (
        <div
            className="theme-switch-fixed"
            style={{
                position: 'fixed',
                top: 24,
                right: 32,
                zIndex: 200,
                width: 72,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                pointerEvents: 'auto',
                userSelect: 'none',
                // Empêche le shrink/grow lors du switch
                minWidth: 72,
                minHeight: 40,
            }}
        >
            <button
                aria-label={dark ? "Activer le mode clair" : "Activer le mode sombre"}
                onClick={() => setDark(v => !v)}
                style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    margin: 0,
                    cursor: 'pointer',
                    width: '100%',
                    height: '100%',
                    outline: 'none',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 20,
                        background: dark
                            ? 'linear-gradient(90deg, #23232b 60%, #444 100%)'
                            : 'linear-gradient(90deg, #ffe066 0%, #fffbe6 100%)',
                        boxShadow: dark
                            ? '0 2px 8px #0006'
                            : '0 2px 12px #ffe06688',
                        position: 'relative',
                        transition: 'background 0.8s, box-shadow 0.8s'
                    }}
                >
                    {/* Icône soleil */}
                    <span
                        style={{
                            position: 'absolute',
                            left: 10,
                            top: 8,
                            fontSize: 20,
                            opacity: dark ? 0.3 : 1,
                            transition: 'opacity 0.8s'
                        }}
                    >☀️</span>
                    {/* Icône lune */}
                    <span
                        style={{
                            position: 'absolute',
                            right: 10,
                            top: 8,
                            fontSize: 20,
                            opacity: dark ? 1 : 0.3,
                            transition: 'opacity 0.8s'
                        }}
                    >🌙</span>
                    {/* Le "bouton" qui glisse */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 4,
                            left: dark ? '50%' : 4,
                            width: 'calc(50% - 4px)',
                            height: 'calc(100% - 8px)',
                            borderRadius: 16,
                            background: dark ? '#23232b' : '#fffbe6',
                            boxShadow: dark
                                ? '0 2px 8px #0008'
                                : '0 2px 8px #ffe06688',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'left 0.6s cubic-bezier(.22,1.5,.36,1), background 0.8s, box-shadow 0.8s'
                        }}
                    >
                        <span style={{
                            fontSize: 18,
                            color: dark ? '#ffe066' : '#23232b',
                            transition: 'color 0.8s'
                        }}>
                            {dark ? '🌙' : '☀️'}
                        </span>
                    </div>
                </div>
            </button>
        </div>
    );
};

export default ThemeSwitch;
