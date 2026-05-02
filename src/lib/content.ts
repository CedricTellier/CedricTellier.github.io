import {
  Achievement,
  Education,
  Experience,
  Language,
  Profile,
  Service,
  SkillGroup,
} from './types';

export const PROFILE: Profile = {
  name: 'Cédric Tellier',
  role: 'Engineering Manager',
  pitchShort:
    'Je pilote des équipes pluridisciplinaires sur des produits de paiement à forte volumétrie.',
  pitchLong:
    "18+ années d'expérience dans de multiples secteurs, dont 3 ans comme Engineering Manager à la tête d'une équipe de 10 personnes (dev + QA) sur des produits de paiement bancaire. Expert ISO 8583, EMV et normes bancaires. Disponible pour des postes salariés ou des missions ponctuelles — management de transition, audit, architecture.",
  location: 'Valdahon, France',
  status: 'Disponible pour discuter',
  yearsXP: 18,
  teamSize: 10,
  txVolume: '80M+',
  email: 'cedric.tellier25@gmail.com',
  phone: '+33 6 11 14 96 12',
  address: '11 rue Saint-Exupéry, 25800 Valdahon',
  github: 'https://github.com/cedrictellier',
  linkedin: 'https://www.linkedin.com/in/c%C3%A9dric-tellier-913224101',
  cv: 'cv.pdf',
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    value: '18+',
    label: "années d'expérience",
    note: "Multiples secteurs d'activité",
  },
  {
    value: 'ISO 8583',
    label: 'expert normes bancaires',
    note: 'EMV, PCI DSS, paiement carte',
  },
  {
    value: '10',
    label: 'personnes managées',
    note: 'Équipe pluridisciplinaire dev + QA',
  },
  {
    value: '80M+',
    label: 'transactions traitées',
    note: "Mise en production d'un projet critique",
  },
];

export const SERVICES: Service[] = [
  {
    id: '01',
    title: "Management d'équipe",
    desc: "Structuration, montée en compétences, rituels, 1:1, recrutement. Faire grandir l'équipe et les individus.",
    bullets: [
      'Cadrage des rôles & responsabilités',
      'Plans de carrière & 1:1',
      'Recrutement tech & QA',
    ],
  },
  {
    id: '02',
    title: 'Pilotage technique',
    desc: 'Mise en place de delivery sain : roadmap, rituels agiles, métriques, gestion des risques et de la dette.',
    bullets: ['Roadmap & priorisation', 'Métriques DORA, vélocité', 'Gestion de la dette technique'],
  },
  {
    id: '03',
    title: 'Architecture logicielle',
    desc: "Choix d'architecture, revues de design, scalabilité — orienté pragmatisme et coût total.",
    bullets: ["Revues d'architecture", 'Scalabilité & performance', "Choix de stack & d'outils"],
  },
  {
    id: '04',
    title: 'Audit',
    desc: "Diagnostic d'équipe, de produit ou d'organisation. Restitution actionnable et priorisée.",
    bullets: ['Audit organisationnel', 'Audit technique & dette', "Plan d'action chiffré"],
  },
];

export const SKILLS: SkillGroup = {
  management: [
    "Leadership d'équipe (10 personnes)",
    'Management transverse',
    'Vulgarisation tech',
    'Réactivité en environnement critique',
    'Organisation & gestion des priorités',
    "Esprit d'analyse et orientation solution",
  ],
  delivery: [
    'Méthodes agiles (Scrum, Kanban)',
    'Cadrage projet & planning',
    'Gestion des risques',
    'Suivi qualité & conformité PCI DSS',
    'Atlassian (Jira, Confluence)',
    'Optimisation des processus',
  ],
  tech: [
    'Python, Java, C++, Rust',
    'EMV, ISO 8583, paiement bancaire',
    'CI/CD : Jenkins, GitHub Actions',
    'Sécurité : Fortify SCA, SonarQube',
    'Versioning : Git, SVN',
    'Architecture : Lucidchart, Google Suite',
  ],
};

export const EXPERIENCES: Experience[] = [
  {
    period: "Juin 2023 — aujourd'hui",
    role: 'Engineering Manager',
    company: 'Arrive (ex Flowbird)',
    location: 'Besançon',
    desc: "Pilotage d'une équipe de 10 développeurs et intégrateurs sur des projets de paiement bancaire (EMV, ISO 8583).",
    bullets: [
      "Management d'une équipe pluridisciplinaire de 10 personnes (dev + QA)",
      "Mise en production d'un projet aboutissant à 80M+ de transactions",
      'Optimisation des processus agiles, sécurité et conformité PCI DSS',
      'Cadrage projet, gestion opérationnelle et relation clients',
    ],
  },
  {
    period: 'Juin 2022 — Juin 2023',
    role: 'Software Developer',
    company: 'Flowbird',
    location: 'Besançon',
    desc: "Développement de solutions de paiement et intégration de protocoles acquéreurs.",
    bullets: [
      'Java, Python, Rust sur applications de paiement',
      'Implémentation de protocoles EMV / ISO 8583',
      'Tests systèmes, validation PCI DSS',
      'Documentation technique et qualité logicielle',
    ],
  },
  {
    period: 'Juin 2021 — Juin 2022',
    role: 'Chargé de projets informatiques',
    company: 'SIS Group',
    location: 'Valdahon',
    desc: 'Coordination de projets de développement logiciel et accompagnement des équipes.',
    bullets: [
      'Planification, budgets, ressources et planning',
      'Suivi qualité, gestion des risques',
      'Communication avec parties prenantes internes et externes',
    ],
  },
  {
    period: 'Octobre 2017 — Juin 2021',
    role: 'Software Developer',
    company: 'Caddev',
    location: 'Saône',
    desc: 'Conception et maintenance de logiciels de modélisation 3D.',
    bullets: [
      "Optimisation d'algorithmes de calcul",
      'Intégration avec systèmes de fabrication',
      'Tests, validation, évolution UX et fonctionnelle',
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    school: 'CCI, Colmar',
    title: 'Technicien Supérieur en Développement Informatique',
  },
  {
    school: 'IUT, Rennes',
    title: 'DUT Gestion des Entreprises et des Administrations',
  },
  {
    school: 'Lycée Saint Paul, Besançon',
    title: 'Baccalauréat Économique et Social',
  },
];

export const LANGUAGES: Language[] = [
  { name: 'Français', level: 'Natif' },
  { name: 'Anglais', level: 'Courant' },
];
