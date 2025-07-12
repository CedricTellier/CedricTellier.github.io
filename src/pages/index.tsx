import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TypeWriter from '../components/Typewriter';
import { useState } from 'react';

const Home: React.FC = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    return (
        <div
            className="fixed inset-0 flex flex-col items-center justify-center mario-intro-container"
            style={{
                width: '100vw',
                height: '100vh',
                borderRadius: 0,
                zIndex: 50,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 32px',
            }}
        >
            {showNavbar && <Navbar show={showNavbar} />}
            <TypeWriter
                onNameDone={() => setShowNavbar(true)}
            />
            <Footer />
        </div>
    );
};

export default Home;