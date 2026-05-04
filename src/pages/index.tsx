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
        <title>Cédric Tellier — Engineering Manager Freelance | Audit & Management de Transition</title>
        <meta name="description" content="Cédric Tellier, Engineering Manager freelance en France (Franche-Comté). Expert ISO 8583, EMV, paiement bancaire. Audit informatique, management de transition, pilotage d'équipes tech." />
        <meta name="keywords" content="Cédric Tellier, Engineering Manager freelance, Engineering Manager France, audit informatique freelance, management de transition informatique, ISO 8583, EMV, paiement bancaire, Franche-Comté" />
        <meta name="author" content="Cédric Tellier" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.cedrictellier.com" />
        <link rel="me" href="https://www.linkedin.com/in/c%C3%A9dric-tellier-913224101" />
        <link rel="me" href="https://github.com/cedrictellier" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cedrictellier.com" />
        <meta property="og:site_name" content="Cédric Tellier — Engineering Manager" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:title" content="Cédric Tellier — Engineering Manager Freelance | Audit & Management de Transition" />
        <meta property="og:description" content="Cédric Tellier, Engineering Manager freelance en France. Expert ISO 8583, EMV, paiement bancaire. Audit informatique, management de transition, pilotage d'équipes tech depuis 18 ans." />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Cédric Tellier — Engineering Manager Freelance | Audit & Management de Transition" />
        <meta name="twitter:description" content="Cédric Tellier, Engineering Manager freelance en France. Expert ISO 8583, EMV, paiement bancaire. Audit informatique, management de transition." />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Cédric Tellier',
                jobTitle: 'Engineering Manager',
                url: 'https://www.cedrictellier.com',
                email: 'cedric.tellier25@gmail.com',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Valdahon',
                  addressRegion: 'Franche-Comté',
                  addressCountry: 'FR',
                },
                sameAs: [
                  'https://www.linkedin.com/in/c%C3%A9dric-tellier-913224101',
                  'https://github.com/cedrictellier',
                ],
                knowsAbout: [
                  'Engineering Manager',
                  'Management de transition informatique',
                  'Audit informatique',
                  'ISO 8583',
                  'EMV',
                  'Paiement bancaire',
                  'Architecture logicielle',
                  'Gestion d\'équipe',
                  'Méthodes agiles',
                  'PCI DSS',
                ],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'Cédric Tellier — Engineering Manager',
                url: 'https://www.cedrictellier.com',
                description: 'Portfolio de Cédric Tellier, Engineering Manager freelance en France. Expert ISO 8583, EMV et paiement bancaire. Disponible pour audit informatique, management de transition et pilotage d\'équipes tech.',
              },
            ]),
          }}
        />
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
