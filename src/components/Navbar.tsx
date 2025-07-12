import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';

const ICONS = [
    {
        href: "https://github.com/cedrictellier",
        icon: <FaGithub />,
        delay: 0.05,
        label: "GitHub"
    },
    {
        href: "https://www.linkedin.com/in/c%C3%A9dric-tellier-913224101",
        icon: <FaLinkedin />,
        delay: 0.15,
        label: "LinkedIn"
    },
    {
        href: "/cv.pdf",
        icon: <FaFilePdf />,
        delay: 0.25,
        label: "CV PDF"
    }
];

const Navbar: React.FC<{ show: boolean }> = ({ show }) => {
    const [iconsVisible, setIconsVisible] = useState([false, false, false]);

    useEffect(() => {
        if (show) {
            setTimeout(() => setIconsVisible([true, false, false]), 80);
            setTimeout(() => setIconsVisible([true, true, false]), 200);
            setTimeout(() => setIconsVisible([true, true, true]), 320);
        } else {
            setIconsVisible([false, false, false]);
        }
    }, [show]);

    return (
        <div
            className="navbar-responsive"
            style={{
                position: 'fixed',
                top: 24,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 64,
                zIndex: 100,
                pointerEvents: 'auto',
                height: 100,
                // width/maxWidth/padding supprimés pour un centrage parfait
            }}
        >
            {ICONS.map((item, idx) => (
                <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="navbar-icon"
                    style={{
                        opacity: iconsVisible[idx] ? 1 : 0,
                        transition: 'opacity 0.4s, filter 0.18s',
                        transitionDelay: `${item.delay}s`,
                        fontSize: 'clamp(36px, 10vw, 88px)',
                        color: 'var(--icon-color, #fff)',
                        margin: '0 32px',
                        filter: iconsVisible[idx] ? 'drop-shadow(0 6px 16px #2228)' : 'none',
                        animation: iconsVisible[idx] ? 'icon-bounce 0.7s cubic-bezier(.22,1.5,.36,1)' : 'none'
                    }}
                >
                    {item.icon}
                </a>
            ))}
            <style>
                {`
                @keyframes icon-bounce {
                    0% { transform: translateY(-80px) scale(0.5);}
                    60% { transform: translateY(10px) scale(1.15);}
                    80% { transform: translateY(-5px) scale(0.95);}
                    100% { transform: translateY(0) scale(1);}
                }
                `}
            </style>
        </div>
    );
};

export default Navbar;