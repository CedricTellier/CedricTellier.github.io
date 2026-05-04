import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Theme } from '../lib/types';
import { getTokens } from '../lib/tokens';
import { ACCENT_DEFAULT_VALUE } from '../lib/tokens';
import { PROFILE } from '../lib/content';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MetricsBar from '../components/MetricsBar';
import ServicesSection from '../components/ServicesSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const accent = ACCENT_DEFAULT_VALUE;

export default function Home() {
  const [theme, setTheme] = useState<Theme>('dark');
  const tokens = getTokens(theme, accent);

  useEffect(() => {
    document.body.style.background = tokens.bg;
    document.documentElement.style.background = tokens.bg;
  }, [tokens.bg]);

  return (
    <>
      <Head>
        <title>{PROFILE.name} — {PROFILE.role}</title>
        <meta name="description" content={PROFILE.pitchShort} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          background: tokens.bg,
          color: tokens.fg,
          minHeight: '100vh',
          fontFamily: "'Inter', system-ui, sans-serif",
        }}
      >
        <Header theme={theme} onThemeChange={setTheme} accent={accent} />
        <main>
          <Hero theme={theme} accent={accent} />
          <MetricsBar theme={theme} accent={accent} />
          <ServicesSection theme={theme} accent={accent} />
          <SkillsSection theme={theme} accent={accent} />
          <ContactSection theme={theme} accent={accent} />
        </main>
        <Footer theme={theme} accent={accent} />
      </div>
    </>
  );
}
