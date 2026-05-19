import React, { useState, useEffect, useRef } from 'react';
import {
  Computer,
  LineChart,
  Users,
  Shield,
  Wallet,
  Brain,
  Utensils,
  Home,
  Trees,
  ChevronRight,
  Building,
  Users2,
  BarChart3,
  Globe,
  Coins,
  Vote,
} from 'lucide-react';

// ============================================================
// BUSINESS UNIVERSE — content (bilingual)
// ============================================================

const enBusinesses = [
  {
    icon: <Wallet className="w-6 h-6" />,
    title: 'Digital Assets',
    description: 'Strategic cryptocurrency fund management focused on building long-term value reserves through careful asset selection.',
    futureProjects: [
      { icon: <Wallet />, title: 'Value Reserve', description: 'Strategic crypto asset accumulation' },
      { icon: <Shield />, title: 'Asset Security', description: 'Institutional-grade custody solutions' },
    ],
  },
  {
    icon: <Computer className="w-6 h-6" />,
    title: 'Technology & Digital',
    description: 'Cutting-edge solutions including blockchain, web3, and enterprise software and hardware development.',
    futureProjects: [
      { icon: <Computer />, title: 'DaaS Platform', description: 'Desktop-as-a-Service solution for individuals' },
      { icon: <Coins />, title: 'Mining Store', description: 'Niche cryptocurrency mining equipment' },
    ],
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: 'Finance / Stocks / Trading',
    description: 'Expert financial services and trading solutions for optimal market performance.',
    futureProjects: [
      { icon: <LineChart />, title: 'Pick and Hold', description: 'Long-term investment strategy platform' },
      { icon: <Wallet />, title: 'Crypto Trading', description: 'Advanced cryptocurrency trading solutions' },
      { icon: <LineChart />, title: 'Forex Trading', description: 'Foreign exchange trading solutions' },
    ],
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Private Business Club',
    description: 'Exclusive network of business leaders fostering collaboration and growth.',
    futureProjects: [
      { icon: <Users2 />, title: 'Ultra Private Club', description: 'Elite membership network for high-value connections' },
    ],
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Insurance',
    description: 'Solutions to protect yourself and secure your future.',
    futureProjects: [
      { icon: <Shield />, title: 'Wealth Protection', description: 'Comprehensive asset protection solutions' },
      { icon: <Users2 />, title: 'Family Security', description: 'Multi-generational wealth preservation' },
    ],
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Consulting',
    description: 'Expert consulting in AI, Web3, and Blockchain — combined with business optimization, turnaround strategies and growth planning.',
    futureProjects: [
      { icon: <Brain />, title: 'AI Solutions', description: 'Advanced AI implementation strategies' },
      { icon: <LineChart />, title: 'Business Optimization', description: 'Comprehensive growth and profitability planning' },
    ],
  },
  {
    icon: <Utensils className="w-6 h-6" />,
    title: 'Food',
    description: 'Innovative culinary ventures reimagining and elevating traditional classics with modern techniques and premium ingredients.',
    futureProjects: [
      { icon: <Utensils />, title: 'Modern Classics', description: 'Contemporary interpretations of traditional cuisine' },
    ],
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: 'Real Estate',
    description: 'Diverse real estate investment opportunities through blockchain RWAs, direct ownership, and REITs, focusing on profitable physical assets.',
    futureProjects: [
      { icon: <Building />, title: 'Tokenized Properties', description: 'Blockchain-based real estate investment' },
      { icon: <LineChart />, title: 'REIT Portfolio', description: 'Curated selection of high-performing REITs' },
    ],
  },
  {
    icon: <Trees className="w-6 h-6" />,
    title: 'Land',
    description: 'Strategic land investments focused on crisis-resilient properties with strong appreciation potential and sustainable returns.',
    futureProjects: [
      { icon: <Trees />, title: 'Crisis-Resilient Lands', description: 'Strategic land acquisition in stable markets' },
    ],
  },
];

const frBusinesses = [
  {
    icon: <Wallet className="w-6 h-6" />,
    title: 'Actifs Numériques',
    description: 'Gestion stratégique de fonds crypto axée sur la constitution de réserves de valeur à long terme par une sélection minutieuse des actifs.',
    futureProjects: [
      { icon: <Wallet />, title: 'Réserve de Valeur', description: 'Accumulation stratégique d\'actifs crypto' },
      { icon: <Shield />, title: 'Sécurité des Actifs', description: 'Solutions de conservation de niveau institutionnel' },
    ],
  },
  {
    icon: <Computer className="w-6 h-6" />,
    title: 'Technologie & Numérique',
    description: 'Solutions de pointe incluant la blockchain, le web3 et le développement de logiciels et matériels d\'entreprise.',
    futureProjects: [
      { icon: <Computer />, title: 'Plateforme DaaS', description: 'Solution Bureau-as-a-Service pour particuliers' },
      { icon: <Coins />, title: 'Boutique Mining', description: 'Équipement de mining crypto de niche' },
    ],
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: 'Finance / Actions / Trading',
    description: 'Services financiers experts et solutions de trading pour une performance optimale sur le marché.',
    futureProjects: [
      { icon: <LineChart />, title: 'Pick and Hold', description: 'Plateforme de stratégie d\'investissement à long terme' },
      { icon: <Wallet />, title: 'Trading Crypto', description: 'Solutions avancées de trading de cryptomonnaies' },
      { icon: <LineChart />, title: 'Trading Forex', description: 'Solutions de trading sur le marché des changes' },
    ],
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Club d\'Affaires Privé',
    description: 'Réseau exclusif de dirigeants d\'entreprises favorisant la collaboration et la croissance.',
    futureProjects: [
      { icon: <Users2 />, title: 'Club Ultra Privé', description: 'Réseau d\'adhésion élite pour des connexions de haute valeur' },
    ],
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Assurance',
    description: 'Solutions pour se protéger et protéger son futur.',
    futureProjects: [
      { icon: <Shield />, title: 'Protection Patrimoniale', description: 'Solutions complètes de protection des actifs' },
      { icon: <Users2 />, title: 'Sécurité Familiale', description: 'Préservation du patrimoine multi-générationnel' },
    ],
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Conseil',
    description: 'Services de conseil expert en IA, Web3 et Blockchain — combinés à l\'optimisation commerciale, aux stratégies de redressement et à la planification de la croissance.',
    futureProjects: [
      { icon: <Brain />, title: 'Solutions IA', description: 'Stratégies avancées d\'implémentation d\'IA' },
      { icon: <LineChart />, title: 'Optimisation Commerciale', description: 'Planification complète de croissance et rentabilité' },
    ],
  },
  {
    icon: <Utensils className="w-6 h-6" />,
    title: 'Alimentation',
    description: 'Entreprises culinaires innovantes réinventant et élevant les classiques traditionnels avec des techniques modernes et des ingrédients premium.',
    futureProjects: [
      { icon: <Utensils />, title: 'Classiques Modernes', description: 'Interprétations contemporaines de la cuisine traditionnelle' },
    ],
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: 'Immobilier',
    description: 'Opportunités d\'investissement immobilier diversifiées via RWA blockchain, propriété directe et REIT, axées sur des actifs physiques rentables.',
    futureProjects: [
      { icon: <Building />, title: 'Propriétés Tokenisées', description: 'Investissement immobilier basé sur la blockchain' },
      { icon: <LineChart />, title: 'Portefeuille REIT', description: 'Sélection curatée de REIT performants' },
    ],
  },
  {
    icon: <Trees className="w-6 h-6" />,
    title: 'Terrains',
    description: 'Investissements stratégiques dans des terrains résilients aux crises avec un fort potentiel d\'appréciation et des rendements durables.',
    futureProjects: [
      { icon: <Trees />, title: 'Terrains Résilients aux Crises', description: 'Acquisition stratégique de terrains sur des marchés stables' },
    ],
  },
];

const enStrategy = [
  { icon: <Building className="w-6 h-6" />, title: 'Corporate Structure', description: 'Each business domain operates as an independent registered company, with Alpha Alliance Group serving as the holding company and majority shareholder.' },
  { icon: <Users2 className="w-6 h-6" />, title: 'Expert Partnership', description: 'We partner with domain experts as minority shareholders in each subsidiary. Their equity stake ensures aligned interests and motivated leadership.' },
  { icon: <BarChart3 className="w-6 h-6" />, title: 'Operational Excellence', description: 'Subsidiaries benefit from centralized strategic support while maintaining operational independence — an efficient and agile ecosystem.' },
  { icon: <ChevronRight className="w-6 h-6" />, title: 'Strategic Synergies', description: 'By fostering collaboration between our diverse business units, we create unique opportunities for innovation and growth across sectors.' },
  { icon: <Globe className="w-6 h-6" />, title: 'Global Vision', description: 'Our international perspective allows us to identify and capitalize on emerging opportunities across markets and industries.' },
];

const frStrategy = [
  { icon: <Building className="w-6 h-6" />, title: 'Structure d\'Entreprise', description: 'Chaque domaine d\'activité fonctionne comme une entreprise indépendante, Alpha Alliance Group étant la société holding et actionnaire majoritaire.' },
  { icon: <Users2 className="w-6 h-6" />, title: 'Partenariat d\'Experts', description: 'Nous nous associons à des experts comme actionnaires minoritaires dans chaque filiale. Leur participation garantit des intérêts alignés.' },
  { icon: <BarChart3 className="w-6 h-6" />, title: 'Excellence Opérationnelle', description: 'Nos filiales bénéficient d\'un soutien stratégique centralisé tout en maintenant leur indépendance opérationnelle.' },
  { icon: <ChevronRight className="w-6 h-6" />, title: 'Synergies Stratégiques', description: 'En favorisant la collaboration entre nos unités, nous créons des opportunités uniques d\'innovation et de croissance.' },
  { icon: <Globe className="w-6 h-6" />, title: 'Vision Globale', description: 'Notre perspective internationale nous permet d\'identifier et de capitaliser sur les opportunités émergentes.' },
];

const enGovernanceFeatures = [
  { icon: <Vote className="w-6 h-6" />, title: 'Governance Power', description: 'DAO token holders participate in key decisions through a decentralized voting system, shaping the future of Alpha Alliance Group.' },
  { icon: <Coins className="w-6 h-6" />, title: 'Revenue Sharing', description: 'Token holders receive 5% of all revenues generated across our business ecosystem, distributed quarterly based on token ownership.' },
];

const frGovernanceFeatures = [
  { icon: <Vote className="w-6 h-6" />, title: 'Pouvoir de Gouvernance', description: 'Les détenteurs de jetons DAO participent aux décisions clés via un système de vote décentralisé, façonnant l\'avenir d\'Alpha Alliance Group.' },
  { icon: <Coins className="w-6 h-6" />, title: 'Partage des Revenus', description: 'Les détenteurs de jetons reçoivent 5% de tous les revenus, distribués trimestriellement en fonction de la propriété des jetons.' },
];

// ============================================================
// LOGO SVG (hexagonal α — same as alpha-alliance.app)
// ============================================================
function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="logoMarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E6BE8A" />
          <stop offset="100%" stopColor="#B8895E" />
        </linearGradient>
      </defs>
      <polygon points="32,5 54,18 54,46 32,59 10,46 10,18" fill="#120F1F" stroke="#D4A574" strokeWidth="1.5" />
      <text x="32" y="32" fontFamily="Georgia, serif" fontSize="30" fontWeight="600" fill="url(#logoMarkGrad)" textAnchor="middle" fontStyle="italic" dominantBaseline="central">α</text>
    </svg>
  );
}

// ============================================================
// APP
// ============================================================
const API_BASE = 'https://alphadesk-api.alpha-desk.workers.dev';

function App() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [submitMsg, setSubmitMsg] = useState<string>('');
  const businesses = language === 'en' ? enBusinesses : frBusinesses;
  const strategy = language === 'en' ? enStrategy : frStrategy;
  const governanceFeatures = language === 'en' ? enGovernanceFeatures : frGovernanceFeatures;

  const text = {
    en: {
      shaping: 'Strategic Capital Group · 2026',
      heroTitle1: 'A group of businesses.',
      heroTitle2: 'One alliance.',
      heroSub: 'Building a thriving ecosystem through cross-industry collaboration, decentralized governance, and long-term strategic investments.',
      ctaPrimary: 'Discover the universe',
      ctaSecondary: 'Explore the suite →',
      businessEyebrow: 'Our business universe',
      businessTitle1: 'Nine domains.',
      businessTitle2: 'One ecosystem.',
      businessDesc: 'Through a diversified portfolio, we create a virtuous circle of value, innovation, and sustainable growth across industries.',
      futureInitiatives: 'Future initiatives',
      strategicEyebrow: 'How we operate',
      strategicTitle1: 'A method.',
      strategicTitle2: 'No exceptions.',
      strategicDesc: 'A comprehensive model that combines expertise, autonomy, and aligned incentives across every subsidiary.',
      blockchainEyebrow: 'Blockchain innovation',
      governanceTitle1: 'Decentralized.',
      governanceTitle2: 'By design.',
      governanceDesc: 'Participate in our ecosystem through DAO governance tokens — democratic decision-making and revenue sharing built in.',
      quarterlyTitle: 'Quarterly revenue share',
      percentRevenue: '5% of total revenue',
      revenueDesc: 'Token holders receive their share of 5% of all revenues, distributed quarterly based on token holdings.',
      connectEyebrow: 'Get in touch',
      connectTitle1: 'Build something.',
      connectTitle2: 'With us.',
      connectDesc: 'Let\'s explore how we can create value together.',
      name: 'Full name',
      email: 'Professional email',
      company: 'Company (optional)',
      message: 'How can we help?',
      send: 'Send message',
      sending: 'Sending…',
      success: '✓ Message received. We\'ll be in touch shortly.',
      errorGeneric: 'Something went wrong. Please try again or email contact@alpha-alliance.xyz',
      rights: 'All rights reserved.',
    },
    fr: {
      shaping: 'Strategic Capital Group · 2026',
      heroTitle1: 'Un groupe d\'entreprises.',
      heroTitle2: 'Une alliance.',
      heroSub: 'Construire un écosystème prospère grâce à la collaboration inter-secteurs, la gouvernance décentralisée et les investissements stratégiques à long terme.',
      ctaPrimary: 'Découvrir l\'univers',
      ctaSecondary: 'Découvrir la suite →',
      businessEyebrow: 'Notre univers d\'affaires',
      businessTitle1: 'Neuf domaines.',
      businessTitle2: 'Un écosystème.',
      businessDesc: 'Grâce à un portefeuille diversifié, nous créons un cercle vertueux de valeur, d\'innovation et de croissance durable à travers les industries.',
      futureInitiatives: 'Initiatives futures',
      strategicEyebrow: 'Notre méthode',
      strategicTitle1: 'Une méthode.',
      strategicTitle2: 'Sans exception.',
      strategicDesc: 'Un modèle complet qui combine expertise, autonomie et intérêts alignés à travers chaque filiale.',
      blockchainEyebrow: 'Innovation blockchain',
      governanceTitle1: 'Décentralisée.',
      governanceTitle2: 'Par conception.',
      governanceDesc: 'Participez à notre écosystème grâce aux jetons de gouvernance DAO — décision démocratique et partage des revenus intégrés.',
      quarterlyTitle: 'Partage trimestriel des revenus',
      percentRevenue: '5% du revenu total',
      revenueDesc: 'Les détenteurs de jetons reçoivent leur part de 5% de tous les revenus, distribués trimestriellement.',
      connectEyebrow: 'Nous contacter',
      connectTitle1: 'Construisons.',
      connectTitle2: 'Ensemble.',
      connectDesc: 'Explorons comment nous pouvons créer de la valeur ensemble.',
      name: 'Nom complet',
      email: 'Email professionnel',
      company: 'Société (optionnel)',
      message: 'Comment pouvons-nous vous aider ?',
      send: 'Envoyer',
      sending: 'Envoi…',
      success: '✓ Message reçu. Nous reviendrons vers vous rapidement.',
      errorGeneric: 'Erreur d\'envoi. Réessaie ou écris à contact@alpha-alliance.xyz',
      rights: 'Tous droits réservés.',
    },
  } as const;

  const t = text[language];
  const toggleLanguage = () => setLanguage(language === 'en' ? 'fr' : 'en');

  // Reveal on scroll
  const observerRef = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, [language]);

  return (
    <div className="min-h-screen text-text">
      {/* ===== NAV ===== */}
      <nav className="px-[6vw] py-6 flex items-center justify-between border-b border-border">
        <a href="/" className="flex items-center gap-3 group">
          <LogoMark size={32} />
          <span className="font-serif text-xl font-semibold tracking-tight">
            Alpha <span className="italic text-gold">Alliance</span>
          </span>
        </a>
        <div className="flex items-center gap-6">
          <a href="https://alpha-alliance.app" className="hidden md:inline-flex text-sm text-text-muted hover:text-gold transition-colors">
            App ↗
          </a>
          <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 rounded-full border border-border-mid text-xs font-mono tracking-widest hover:border-gold transition-colors"
            aria-label="Toggle language"
          >
            <span className={language === 'en' ? 'text-gold' : 'text-text-dim'}>EN</span>
            <span className="text-text-dim mx-1">/</span>
            <span className={language === 'fr' ? 'text-gold' : 'text-text-dim'}>FR</span>
          </button>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="px-[6vw] pt-32 pb-40 max-w-[1280px] mx-auto">
        <div className="eyebrow reveal in">
          <span className="eyebrow-dot"></span>
          {t.shaping}
        </div>
        <h1 className="display mt-8 mb-10 max-w-[900px]">
          {t.heroTitle1}
          <br />
          <span className="it text-gold-gradient">{t.heroTitle2}</span>
        </h1>
        <p className="text-lg md:text-xl text-text-muted max-w-[640px] leading-relaxed mb-14">
          {t.heroSub}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#business" className="btn-primary">
            {t.ctaPrimary}
            <ChevronRight className="w-4 h-4" />
          </a>
          <a href="https://alpha-alliance.app" className="btn-ghost">
            {t.ctaSecondary}
          </a>
        </div>
      </section>

      {/* ===== BUSINESS UNIVERSE ===== */}
      <section id="business" className="px-[6vw] py-32 max-w-[1280px] mx-auto">
        <div className="max-w-[720px] mb-20">
          <div className="section-eyebrow reveal">{t.businessEyebrow}</div>
          <h2 className="section-title mt-5 mb-6 reveal d-1">
            {t.businessTitle1}
            <br />
            <span className="it text-gold-gradient">{t.businessTitle2}</span>
          </h2>
          <p className="text-base text-text-muted leading-relaxed reveal d-2">{t.businessDesc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((business, index) => (
            <div key={index} className="card reveal" style={{ transitionDelay: `${index * 60}ms` }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-gold">{business.icon}</span>
                <h3 className="font-serif text-xl font-semibold">{business.title}</h3>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">{business.description}</p>

              {business.futureProjects && (
                <div className="mt-6 pt-5 border-t border-border">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-gold mb-3">
                    {t.futureInitiatives}
                  </div>
                  <div className="space-y-2.5">
                    {business.futureProjects.map((project, projectIndex) => (
                      <div key={projectIndex} className="flex items-start gap-2.5">
                        <span className="text-gold mt-0.5 flex-shrink-0">
                          {React.cloneElement(project.icon, { className: 'w-3.5 h-3.5' })}
                        </span>
                        <div>
                          <div className="text-xs font-semibold">{project.title}</div>
                          <div className="text-[11px] text-text-dim leading-snug">{project.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ===== STRATEGY ===== */}
      <section className="px-[6vw] py-32 max-w-[1280px] mx-auto border-t border-border">
        <div className="max-w-[720px] mb-20">
          <div className="section-eyebrow reveal">{t.strategicEyebrow}</div>
          <h2 className="section-title mt-5 mb-6 reveal d-1">
            {t.strategicTitle1}
            <br />
            <span className="it text-gold-gradient">{t.strategicTitle2}</span>
          </h2>
          <p className="text-base text-text-muted leading-relaxed reveal d-2">{t.strategicDesc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategy.map((item, index) => (
            <div key={index} className="card reveal" style={{ transitionDelay: `${index * 60}ms` }}>
              <div className="text-gold mb-4">{item.icon}</div>
              <h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== GOVERNANCE ===== */}
      <section className="px-[6vw] py-32 max-w-[1280px] mx-auto border-t border-border">
        <div className="max-w-[720px] mb-20">
          <div className="section-eyebrow reveal">{t.blockchainEyebrow}</div>
          <h2 className="section-title mt-5 mb-6 reveal d-1">
            {t.governanceTitle1}
            <br />
            <span className="it text-gold-gradient">{t.governanceTitle2}</span>
          </h2>
          <p className="text-base text-text-muted leading-relaxed reveal d-2">{t.governanceDesc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {governanceFeatures.map((feature, index) => (
            <div key={index} className="card reveal" style={{ transitionDelay: `${index * 60}ms` }}>
              <div className="text-gold mb-4">{feature.icon}</div>
              <h3 className="font-serif text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Revenue share callout */}
        <div className="card reveal d-2 flex flex-col md:flex-row items-start md:items-center gap-6 max-w-[820px] mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
              <Wallet className="w-6 h-6 text-black" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold">{t.quarterlyTitle}</h4>
              <p className="text-xs font-mono uppercase tracking-widest text-gold mt-1">{t.percentRevenue}</p>
            </div>
          </div>
          <p className="text-sm text-text-muted leading-relaxed flex-1">{t.revenueDesc}</p>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="px-[6vw] py-32 max-w-[820px] mx-auto border-t border-border">
        <div className="text-center mb-14">
          <div className="section-eyebrow reveal">{t.connectEyebrow}</div>
          <h2 className="section-title mt-5 mb-6 reveal d-1">
            {t.connectTitle1}
            <br />
            <span className="it text-gold-gradient">{t.connectTitle2}</span>
          </h2>
          <p className="text-base text-text-muted leading-relaxed reveal d-2">{t.connectDesc}</p>
        </div>

        <form
          className="card reveal d-3"
          onSubmit={async (e) => {
            e.preventDefault();
            if (submitState === 'sending') return;
            const formEl = e.currentTarget;
            const data = new FormData(formEl);
            // Honeypot anti-spam: bots fill hidden field
            if (data.get('honeypot')) {
              setSubmitState('success');
              setSubmitMsg(t.success);
              formEl.reset();
              return;
            }
            setSubmitState('sending');
            setSubmitMsg('');
            try {
              const r = await fetch(`${API_BASE}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  name: data.get('name'),
                  email: data.get('email'),
                  company: data.get('company') || undefined,
                  message: data.get('message'),
                  source: 'alpha-alliance.xyz/contact',
                  honeypot: data.get('honeypot') || undefined,
                }),
              });
              const json = await r.json().catch(() => ({}));
              if (r.ok && json.ok) {
                setSubmitState('success');
                setSubmitMsg(t.success);
                formEl.reset();
              } else {
                setSubmitState('error');
                setSubmitMsg(json.error || t.errorGeneric);
              }
            } catch (err) {
              setSubmitState('error');
              setSubmitMsg(t.errorGeneric);
            }
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" name="name" placeholder={t.name} required maxLength={100} className="field-input" />
            <input type="email" name="email" placeholder={t.email} required maxLength={200} className="field-input" />
          </div>
          <input type="text" name="company" placeholder={t.company} maxLength={120} className="field-input mb-4" />
          <textarea
            name="message"
            rows={5}
            placeholder={t.message}
            required
            maxLength={5000}
            className="field-input mb-6 resize-y"
          />
          {/* Honeypot — hidden from users, filled by bots */}
          <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }} aria-hidden="true">
            <label>Leave empty</label>
            <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" />
          </div>
          <button
            type="submit"
            disabled={submitState === 'sending' || submitState === 'success'}
            className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitState === 'sending' ? t.sending : submitState === 'success' ? '✓' : t.send}
            {submitState === 'idle' && <ChevronRight className="w-4 h-4" />}
          </button>
          {submitMsg && (
            <div
              className={`mt-4 text-sm leading-relaxed ${submitState === 'success' ? 'text-green' : 'text-red-400'}`}
              role="status"
            >
              {submitMsg}
            </div>
          )}
        </form>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="px-[6vw] py-12 max-w-[1280px] mx-auto border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <LogoMark size={28} />
            <span className="font-serif text-sm font-semibold tracking-tight">
              Alpha <span className="italic text-gold">Alliance</span>
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-xs text-text-dim">
            <a href="https://alpha-alliance.app" className="hover:text-gold transition-colors">App ↗</a>
            <a href="mailto:contact@alpha-alliance.xyz" className="hover:text-gold transition-colors">Contact</a>
            <span>© {new Date().getFullYear()} Alpha Alliance Group. {t.rights}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
