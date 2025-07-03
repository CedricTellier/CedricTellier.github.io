import React, { useState } from 'react';
import Navbar from './Navbar';
import ThemeSwitch from './ThemeSwitch';
import Footer from './Footer';
import TypeWriter from './Typewriter';

const MarioIntro: React.FC = () => {
    const [showNavbar, setShowNavbar] = useState(false);

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
            {showNavbar && <Navbar show={showNavbar} />}
            <TypeWriter
                onNameDone={() => setShowNavbar(true)}
            />
            <Footer />
        </div>
    );
};

export default MarioIntro;
