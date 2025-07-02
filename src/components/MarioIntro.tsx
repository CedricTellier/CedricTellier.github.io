import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import ThemeSwitch from './ThemeSwitch';
import Footer from './Footer';

const marioSpriteUrl = "/mario_cedric.png";
const NAME = "Cédric Tellier";
const ROLES = ["développeur", "engineering manager", "sportif", "curieux"];

const getRandomArchedPath = () => {
    const arches = [];
    const archCount = 6 + Math.floor(Math.random() * 3);
    for (let i = 0; i < archCount; i++) {
        const y = Math.floor(window.innerHeight * (0.4 + Math.random() * 0.4));
        arches.push(y);
    }
    return arches;
};

const MarioIntro: React.FC = () => {
    const [displayed, setDisplayed] = useState('');
    const [showMario, setShowMario] = useState(false);
    const [jump, setJump] = useState(false);
    const [run, setRun] = useState(false);
    const [archKeyframes, setArchKeyframes] = useState<number[]>([]);
    const [marioX, setMarioX] = useState(0);
    const [marioY, setMarioY] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [roleIndex, setRoleIndex] = useState(0);
    const [roleDisplayed, setRoleDisplayed] = useState('');
    const [roleTyping, setRoleTyping] = useState(true);
    const [showPipe, setShowPipe] = useState(true);
    const [showRoleLine, setShowRoleLine] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const [nameDone, setNameDone] = useState(false); // Ajout pour trigger la navbar
    const nameRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number | null>(null);
    // Typewriter effect for name
    useEffect(() => {
        let i = 0;
        setShowPipe(true);
        setShowRoleLine(false);
        setRoleDisplayed('');
        const interval = setInterval(() => {
            setDisplayed(NAME.slice(0, i + 1));
            i++;
            if (i === NAME.length) {
                clearInterval(interval);
                setNameDone(true); // <- déclenche la navbar
                setTimeout(() => {
                    setShowRoleLine(true);
                    setTimeout(() => setShowMario(true), 500);
                }, 400);
            }
        }, 160);
        return () => clearInterval(interval);
    }, []);

    // Affiche la navbar dès que le nom est écrit
    useEffect(() => {
        if (nameDone) setShowNavbar(true);
    }, [nameDone]);

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

    // Mario animation
    useEffect(() => {
        if (!showMario) return;
        setArchKeyframes(getRandomArchedPath());
    }, [showMario]);

    useEffect(() => {
        if (!showMario || archKeyframes.length < 2) return;

        setAnimating(true);
        let start: number | null = null;
        const duration = 12000;
        const width = window.innerWidth - 48;
        const baseY = 0;
        let firstPass = true;

        const animate = (timestamp: number) => {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;
            let progress = Math.min(elapsed / duration, 1);

            const x = progress * width;
            setMarioX(x);

            const steps = archKeyframes.length;
            const step = progress * (steps - 1);
            const stepIdx = Math.floor(step);
            const stepFrac = step - stepIdx;
            let y = 0;
            if (stepIdx < steps - 1) {
                const archA = archKeyframes[stepIdx];
                const archB = archKeyframes[stepIdx + 1];
                const t = stepFrac;
                const h = Math.min(archA, archB);
                y = -4 * h * Math.pow(t - 0.5, 2) + h;
            } else {
                y = baseY;
            }
            setMarioY(y);

            if (progress < 1) {
                requestRef.current = requestAnimationFrame(animate);
            } else {
                if (firstPass) {
                    setShowNavbar(true);
                    firstPass = false;
                }
                setMarioX(0);
                setMarioY(baseY);
                setArchKeyframes(getRandomArchedPath());
                start = null;
                requestRef.current = requestAnimationFrame((t) => animate(t));
            }
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            setAnimating(false);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [archKeyframes, showMario]);

    return (
        <div
            className="fixed inset-0 flex flex-col items-center justify-center"
            style={{
                width: '100vw',
                height: '100vh',
                borderRadius: 0,
                zIndex: 50,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <ThemeSwitch />
            {/* ContactForm retiré */}
            {showNavbar && <Navbar show={showNavbar} />}
            <div
                ref={nameRef}
                className="mario-title typewriter flex items-center justify-center"
                style={{
                    minHeight: 80,
                    marginBottom: 0,
                    textAlign: 'center',
                    fontSize: '3rem',
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
                        fontSize: '2rem',
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
            {showMario && (
                <div
                    className="pointer-events-none"
                    style={{
                        position: 'absolute',
                        left: 0,
                        bottom: 0,
                        width: '100%',
                        height: 60,
                        zIndex: 10,
                    }}
                >
                    <img
                        src={marioSpriteUrl}
                        alt="Mario"
                        className="mario-sprite"
                        style={{
                            position: 'absolute',
                            left: marioX,
                            bottom: marioY,
                            width: 48,
                            height: 48,
                            transition: animating ? 'none' : 'left 0s, bottom 0s',
                        }}
                    />
                </div>
            )}
            <Footer />
        </div>
    );
};

export default MarioIntro;
