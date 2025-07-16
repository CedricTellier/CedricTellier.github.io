import React, { useEffect, useRef, useState } from 'react';

const NAME = "Cédric Tellier";
const ROLES = ["développeur", "engineering manager", "sportif", "curieux"];

const MarioTypewriter: React.FC<{
    onNameDone: () => void;
}> = ({ onNameDone }) => {
    const [displayed, setDisplayed] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [roleDisplayed, setRoleDisplayed] = useState('');
    const [roleTyping, setRoleTyping] = useState(true);
    const [showPipe, setShowPipe] = useState(true);
    const [showRoleLine, setShowRoleLine] = useState(false);
    const [nameDone, setNameDone] = useState(false); // Ajouté pour contrôler l'animation du nom
    const nameRef = useRef<HTMLDivElement>(null);

    // Typewriter effect for name (corrigé pour ne jouer qu'une fois)
    useEffect(() => {
        if (nameDone) return;
        let i = 0;
        setShowPipe(true);
        setShowRoleLine(false);
        setRoleDisplayed('');
        const interval = setInterval(() => {
            setDisplayed(NAME.slice(0, i + 1));
            i++;
            if (i === NAME.length) {
                clearInterval(interval);
                setNameDone(true);
                onNameDone();
                setTimeout(() => {
                    setShowRoleLine(true);
                }, 400);
            }
        }, 160);
        return () => clearInterval(interval);
    }, [onNameDone, nameDone]);

    // Typewriter effect for roles
    useEffect(() => {
        if (!showRoleLine) return;
        let timeout: NodeJS.Timeout;
        let i = 0;
        setShowPipe(true);
        if (roleTyping) {
            timeout = setInterval(() => {
                setRoleDisplayed(ROLES[roleIndex].slice(0, i + 1));
                i++;
                if (i === ROLES[roleIndex].length) {
                    clearInterval(timeout);
                    setTimeout(() => setRoleTyping(false), 1200);
                }
            }, 100);
        } else {
            timeout = setInterval(() => {
                setRoleDisplayed((prev) => prev.slice(0, -1));
                i++;
                if (i === ROLES[roleIndex].length) {
                    clearInterval(timeout);
                    setTimeout(() => {
                        setRoleIndex((prev) => (prev + 1) % ROLES.length);
                        setRoleTyping(true);
                    }, 200);
                }
            }, 50);
        }
        return () => clearInterval(timeout);
    }, [roleTyping, roleIndex, showRoleLine]);

    return (
        <>
            <div
                ref={nameRef}
                className="mario-title typewriter flex items-center justify-center"
                style={{
                    minHeight: 80,
                    marginBottom: 0,
                    textAlign: 'center',
                    fontSize: 'clamp(1.1rem, 6vw, 3rem)',
                    lineHeight: 1.2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                }}
            >
                {displayed}
                {showPipe && !showRoleLine && (
                    <span className="blinking-cursor" style={{
                        display: 'inline-block',
                        width: '1ch',
                        animation: 'blink 1s steps(1) infinite',
                        fontStyle: 'normal',
                    }}>|</span>
                )}
            </div>
            {showRoleLine && (
                <div
                    className="flex items-center justify-center mario-title"
                    style={{
                        minHeight: 40,
                        marginTop: 10,
                        textAlign: 'center',
                        fontSize: 'clamp(0.9rem, 4vw, 2rem)',
                        lineHeight: 1.2,
                        height: 48,
                        width: '100%',
                        fontFamily: "'Press Start 2P', cursive, sans-serif",
                        letterSpacing: 1,
                        fontStyle: 'normal',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        animation: 'fadeInUp 0.3s',
                    }}
                >
                    {roleDisplayed}
                    {showPipe && (
                        <span className="blinking-cursor" style={{
                            display: 'inline-block',
                            width: '1ch',
                            animation: 'blink 1s steps(1) infinite',
                            fontStyle: 'normal',
                        }}>|</span>
                    )}
                </div>
            )}
        </>
    );
};

export default MarioTypewriter;
