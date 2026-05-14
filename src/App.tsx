import React, { useState, useEffect } from 'react';
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
  ChevronDown,
  Coins,
  Vote,
} from 'lucide-react';

// English content
const enBusinesses = [
  {
    icon: <Wallet className="w-12 h-12" />,
    title: 'Digital Assets',
    description: 'Strategic cryptocurrency fund management focused on building long-term value reserves through careful asset selection.',
    futureProjects: [
      {
        icon: <Wallet />,
        title: 'Value Reserve',
        description: 'Strategic crypto asset accumulation'
      },
      {
        icon: <Shield />,
        title: 'Asset Security',
        description: 'Institutional-grade custody solutions'
      }
    ]
  },
  {
    icon: <Computer className="w-12 h-12" />,
    title: 'Technology & Digital',
    description: 'Cutting-edge solutions including blockchain, web3, and enterprise software and hardware development.',
    futureProjects: [
      {
        icon: <Computer />,
        title: 'DaaS Platform',
        description: 'Desktop-as-a-Service solution for individuals'
      },
      {
        icon: <Coins />,
        title: 'Mining Store',
        description: 'Niche cryptocurrency mining equipment'
      }
    ]
  },
  {
    icon: <LineChart className="w-12 h-12" />,
    title: 'Finance/Stocks/Trading',
    description: 'Expert financial services and trading solutions for optimal market performance.',
    futureProjects: [
      {
        icon: <LineChart />,
        title: 'Pick and Hold',
        description: 'Long-term investment strategy platform'
      },
      {
        icon: <Wallet />,
        title: 'Crypto Trading',
        description: 'Advanced cryptocurrency trading solutions'
      },
      {
        icon: <LineChart />,
        title: 'Forex Trading',
        description: 'Foreign exchange trading solutions'
      }
    ]
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: 'Private Business Club',
    description: 'Exclusive network of business leaders fostering collaboration and growth.',
    futureProjects: [
      {
        icon: <Users2 />,
        title: 'Ultra Private Club',
        description: 'Elite membership network for high-value connections'
      }
    ]
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'Insurance',
    description: 'Solutions to protect yourself and secure your future.',
    futureProjects: [
      {
        icon: <Shield />,
        title: 'Wealth Protection',
        description: 'Comprehensive asset protection solutions'
      },
      {
        icon: <Users2 />,
        title: 'Family Security',
        description: 'Multi-generational wealth preservation'
      }
    ]
  },
  {
    icon: <Brain className="w-12 h-12" />,
    title: 'Consulting',
    description: 'Expert consulting services in AI, Web3, and Blockchain technology, combined with business optimization, turnaround strategies, and growth planning.',
    futureProjects: [
      {
        icon: <Brain />,
        title: 'AI Solutions',
        description: 'Advanced AI implementation strategies'
      },
      {
        icon: <LineChart />,
        title: 'Business Optimization',
        description: 'Comprehensive growth and profitability planning'
      }
    ]
  },
  {
    icon: <Utensils className="w-12 h-12" />,
    title: 'Food',
    description: 'Innovative culinary ventures reimagining and elevating traditional classics with modern techniques and premium ingredients.',
    futureProjects: [
      {
        icon: <Utensils />,
        title: 'Modern Classics',
        description: 'Contemporary interpretations of traditional cuisine'
      }
    ]
  },
  {
    icon: <Home className="w-12 h-12" />,
    title: 'Real Estate',
    description: 'Diverse real estate investment opportunities through blockchain RWAs, direct ownership, and REITs, focusing on profitable physical assets.',
    futureProjects: [
      {
        icon: <Building />,
        title: 'Tokenized Properties',
        description: 'Blockchain-based real estate investment'
      },
      {
        icon: <LineChart />,
        title: 'REIT Portfolio',
        description: 'Curated selection of high-performing REITs'
      }
    ]
  },
  {
    icon: <Trees className="w-12 h-12" />,
    title: 'Land',
    description: 'Strategic land investments focused on crisis-resilient properties with strong appreciation potential and sustainable returns.',
    futureProjects: [
      {
        icon: <Trees />,
        title: 'Crisis-Resilient Lands',
        description: 'Strategic land acquisition in stable markets'
      }
    ]
  }
];

// French content
const frBusinesses = [
  {
    icon: <Wallet className="w-12 h-12" />,
    title: 'Actifs Numériques',
    description: 'Gestion stratégique de fonds crypto axée sur la constitution de réserves de valeur à long terme par une sélection minutieuse des actifs.',
    futureProjects: [
      {
        icon: <Wallet />,
        title: 'Réserve de Valeur',
        description: 'Accumulation stratégique d\'actifs crypto'
      },
      {
        icon: <Shield />,
        title: 'Sécurité des Actifs',
        description: 'Solutions de conservation de niveau institutionnel'
      }
    ]
  },
  {
    icon: <Computer className="w-12 h-12" />,
    title: 'Technologie & Numérique',
    description: 'Solutions de pointe incluant la blockchain, le web3 et le développement de logiciels et matériels d\'entreprise.',
    futureProjects: [
      {
        icon: <Computer />,
        title: 'Plateforme DaaS',
        description: 'Solution Bureau-as-a-Service pour particuliers'
      },
      {
        icon: <Coins />,
        title: 'Boutique Mining',
        description: 'Équipement de mining crypto de niche'
      }
    ]
  },
  {
    icon: <LineChart className="w-12 h-12" />,
    title: 'Finance/Actions/Trading',
    description: 'Services financiers experts et solutions de trading pour une performance optimale sur le marché.',
    futureProjects: [
      {
        icon: <LineChart />,
        title: 'Pick and Hold',
        description: 'Plateforme de stratégie d\'investissement à long terme'
      },
      {
        icon: <Wallet />,
        title: 'Trading Crypto',
        description: 'Solutions avancées de trading de cryptomonnaies'
      },
      {
        icon: <LineChart />,
        title: 'Trading Forex',
        description: 'Solutions de trading sur le marché des changes'
      }
    ]
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: 'Club d\'Affaires Privé',
    description: 'Réseau exclusif de dirigeants d\'entreprises favorisant la collaboration et la croissance.',
    futureProjects: [
      {
        icon: <Users2 />,
        title: 'Club Ultra Privé',
        description: 'Réseau d\'adhésion élite pour des connexions de haute valeur'
      }
    ]
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'Assurance',
    description: 'Solutions pour se protéger et protéger son futur.',
    futureProjects: [
      {
        icon: <Shield />,
        title: 'Protection Patrimoniale',
        description: 'Solutions complètes de protection des actifs'
      },
      {
        icon: <Users2 />,
        title: 'Sécurité Familiale',
        description: 'Préservation du patrimoine multi-générationnel'
      }
    ]
  },
  {
    icon: <Brain className="w-12 h-12" />,
    title: 'Conseil',
    description: 'Services de conseil expert en IA, Web3 et technologie Blockchain, combinés à l\'optimisation commerciale, aux stratégies de redressement et à la planification de la croissance.',
    futureProjects: [
      {
        icon: <Brain />,
        title: 'Solutions IA',
        description: 'Stratégies avancées d\'implémentation d\'IA'
      },
      {
        icon: <LineChart />,
        title: 'Optimisation Commerciale',
        description: 'Planification complète de croissance et rentabilité'
      }
    ]
  },
  {
    icon: <Utensils className="w-12 h-12" />,
    title: 'Alimentation',
    description: 'Entreprises culinaires innovantes réinventant et élevant les classiques traditionnels avec des techniques modernes et des ingrédients premium.',
    futureProjects: [
      {
        icon: <Utensils />,
        title: 'Classiques Modernes',
        description: 'Interprétations contemporaines de la cuisine traditionnelle'
      }
    ]
  },
  {
    icon: <Home className="w-12 h-12" />,
    title: 'Immobilier',
    description: 'Opportunités d\'investissement immobilier diversifiées via RWA blockchain, propriété directe et REIT, axées sur des actifs physiques rentables.',
    futureProjects: [
      {
        icon: <Building />,
        title: 'Propriétés Tokenisées',
        description: 'Investissement immobilier basé sur la blockchain'
      },
      {
        icon: <LineChart />,
        title: 'Portefeuille REIT',
        description: 'Sélection curatée de REIT performants'
      }
    ]
  },
  {
    icon: <Trees className="w-12 h-12" />,
    title: 'Terrains',
    description: 'Investissements stratégiques dans des terrains résilients aux crises avec un fort potentiel d\'appréciation et des rendements durables.',
    futureProjects: [
      {
        icon: <Trees />,
        title: 'Terrains Résilients aux Crises',
        description: 'Acquisition stratégique de terrains sur des marchés stables'
      }
    ]
  }
];

const frStrategy = [
  {
    icon: <Building className="w-12 h-12" />,
    title: 'Structure d\'Entreprise',
    description: 'Chaque domaine d\'activité fonctionne comme une entreprise indépendante enregistrée, avec Alpha Alliance Group servant de société holding et d\'actionnaire majoritaire, assurant l\'alignement stratégique et l\'autonomie opérationnelle.'
  },
  {
    icon: <Users2 className="w-12 h-12" />,
    title: 'Partenariat d\'Experts',
    description: 'Nous nous associons à des experts du domaine en tant qu\'actionnaires minoritaires dans chaque filiale. Leur participation au capital garantit des intérêts alignés et un leadership motivé, favorisant l\'excellence et l\'innovation dans leurs domaines respectifs.'
  },
  {
    icon: <BarChart3 className="w-12 h-12" />,
    title: 'Excellence Opérationnelle',
    description: 'Nos filiales bénéficient d\'un soutien stratégique centralisé tout en maintenant leur indépendance opérationnelle, créant un écosystème d\'entreprise efficace et agile.'
  },
  {
    icon: <ChevronRight className="w-12 h-12" />,
    title: 'Synergies Stratégiques',
    description: 'En favorisant la collaboration entre nos diverses unités commerciales, nous créons des opportunités uniques d\'innovation et de croissance à travers les secteurs.'
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: 'Vision Globale',
    description: 'Notre perspective internationale nous permet d\'identifier et de capitaliser sur les opportunités émergentes à travers les marchés et les industries.'
  }
];

const enStrategy = [
  {
    icon: <Building className="w-12 h-12" />,
    title: 'Corporate Structure',
    description: 'Each business domain operates as an independent registered company, with Alpha Alliance Group serving as the holding company and majority shareholder, ensuring strategic alignment and operational autonomy.'
  },
  {
    icon: <Users2 className="w-12 h-12" />,
    title: 'Expert Partnership',
    description: 'We partner with domain experts as minority shareholders in each subsidiary. Their equity stake ensures aligned interests and motivated leadership, driving excellence and innovation in their respective fields.'
  },
  {
    icon: <BarChart3 className="w-12 h-12" />,
    title: 'Operational Excellence',
    description: 'Our subsidiaries benefit from centralized strategic support while maintaining operational independence, creating an efficient and agile business ecosystem.'
  },
  {
    icon: <ChevronRight className="w-12 h-12" />,
    title: 'Strategic Synergies',
    description: 'By fostering collaboration between our diverse business units, we create unique opportunities for innovation and growth across sectors.'
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: 'Global Vision',
    description: 'Our international perspective allows us to identify and capitalize on emerging opportunities across markets and industries.'
  }
];

const enGovernanceFeatures = [
  {
    icon: <Vote className="w-12 h-12" />,
    title: 'Governance Power',
    description: 'DAO token holders have the power to participate in key decisions through a decentralized voting system, shaping the future of Alpha Alliance Group.'
  },
  {
    icon: <Coins className="w-12 h-12" />,
    title: 'Revenue Sharing',
    description: 'Token holders receive 5% of all revenues generated across our business ecosystem, distributed quarterly based on token ownership.'
  }
];

const frGovernanceFeatures = [
  {
    icon: <Vote className="w-12 h-12" />,
    title: 'Pouvoir de Gouvernance',
    description: 'Les détenteurs de jetons DAO ont le pouvoir de participer aux décisions clés via un système de vote décentralisé, façonnant l\'avenir d\'Alpha Alliance Group.'
  },
  {
    icon: <Coins className="w-12 h-12" />,
    title: 'Partage des Revenus',
    description: 'Les détenteurs de jetons reçoivent 5% de tous les revenus générés dans notre écosystème d\'affaires, distribués trimestriellement en fonction de la propriété des jetons.'
  }
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('en'); // 'en' for English, 'fr' for French

  // Select content based on language
  const businesses = language === 'en' ? enBusinesses : frBusinesses;
  const strategy = language === 'en' ? enStrategy : frStrategy;
  const governanceFeatures = language === 'en' ? enGovernanceFeatures : frGovernanceFeatures;

  // Language-specific text
  const text = {
    en: {
      shaping: 'Shaping Tomorrow',
      virtuous: 'Building a Thriving Ecosystem through Cross-Industry Collaboration and Strategic Investments.',
      explore: 'Explore Our Business Universe',
      businessUniverse: 'Our Business Universe',
      businessDesc: 'Through our diverse portfolio of businesses, we create a Virtuous Circle of value, innovation, and sustainable growth across industries.',
      strategic: 'Strategic',
      approach: 'Approach',
      strategicDesc: 'A comprehensive business model that combines expertise, innovation, and sustainable growth',
      blockchain: 'Blockchain Innovation',
      decentralized: 'Decentralized',
      governance: 'Governance',
      governanceDesc: 'Participate in our ecosystem through our DAO governance tokens, enabling democratic decision-making and revenue sharing',
      monthlyRevenue: 'Quarterly Revenue Share',
      percentRevenue: '5% of Total Revenue',
      revenueDesc: 'Token holders receive their share of 5% of all revenues generated across our business ecosystem, distributed quarterly based on their token holdings.',
      connect: 'Connect',
      withUs: 'With Us',
      connectDesc: 'Let\'s explore how we can create value together',
      name: 'Name',
      email: 'Email',
      message: 'Your Message',
      send: 'Send Message',
      rights: 'All rights reserved.',
      futureInitiatives: 'Future Initiatives',
      comingSoon: 'Coming Soon'
    },
    fr: {
      shaping: 'Façonner Demain',
      virtuous: 'Créer un Cercle Vertueux grâce à une collaboration synergique à travers de multiples industries et des investissements stratégiques.',
      explore: 'Explorez Notre Univers d\'Affaires',
      businessUniverse: 'Notre Univers d\'Affaires',
      businessDesc: 'Grâce à notre portefeuille diversifié d\'entreprises, nous créons un Cercle Vertueux de valeur, d\'innovation et de croissance durable à travers les industries.',
      strategic: 'Approche',
      approach: 'Stratégique',
      strategicDesc: 'Un modèle d\'affaires complet qui combine expertise, innovation et croissance durable',
      blockchain: 'Innovation Blockchain',
      decentralized: 'Gouvernance',
      governance: 'Décentralisée',
      governanceDesc: 'Participez à notre écosystème grâce à nos jetons de gouvernance DAO, permettant une prise de décision démocratique et un partage des revenus',
      monthlyRevenue: 'Partage Trimestriel des Revenus',
      percentRevenue: '5% du Revenu Total',
      revenueDesc: 'Les détenteurs de jetons reçoivent leur part de 5% de tous les revenus générés dans notre écosystème d\'affaires, distribués trimestriellement en fonction de leurs avoirs en jetons.',
      connect: 'Connectez',
      withUs: 'Avec Nous',
      connectDesc: 'Explorons ensemble comment nous pouvons créer de la valeur',
      name: 'Nom',
      email: 'Email',
      message: 'Votre Message',
      send: 'Envoyer le Message',
      rights: 'Tous droits réservés.',
      futureInitiatives: 'Initiatives Futures',
      comingSoon: 'À Venir'
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-950">
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-dark-950/95 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-dark-800 to-dark-900 border border-gold-500/20">
                  <img src="/logo.svg" alt="Alpha Alliance Group" className="w-8 h-8" />
                </div>
              </div>
              <div className="pl-2">
                <span className="font-bold text-2xl text-white tracking-tight">
                  Alpha <span className="gold-gradient font-extrabold">Alliance</span>
                </span>
              </div>
            </div>
            <button 
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-dark-800/50 to-dark-900/50 border border-gold-500/20 backdrop-blur-sm hover:border-gold-500/40 transition-all"
              aria-label="Toggle language"
            >
              <div className="flex items-center">
                <span className={`text-sm font-medium transition-all ${language === 'en' ? 'text-white' : 'text-gold-500'}`}>EN</span>
                <span className="mx-1"></span>
                <span className={`text-sm font-medium transition-all ${language === 'fr' ? 'text-white' : 'text-gold-500'}`}>FR</span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/90 to-dark-950/50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-dark-950/30 to-dark-950"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-32">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-dark-800/50 to-dark-900/50 border border-gold-500/20 backdrop-blur-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-gold-500"></span>
                  </span>
                  <span className="text-sm text-gold-500 font-medium tracking-wider uppercase">{text[language].shaping}</span>
                </div>
                <h1 className="text-8xl md:text-9xl font-black tracking-tight leading-none">
                  <div className="text-white opacity-95">Alpha</div>
                  <div className="relative">
                    <span className="gold-gradient">Alliance</span>
                    <div className="absolute -right-12 top-0 w-24 h-24 bg-gold-500/10 rounded-full blur-3xl"></div>
                  </div>
                </h1>
              </div>

              <p className="text-2xl md:text-3xl text-gray-300 font-light max-w-3xl leading-relaxed">
                {text[language].virtuous}
              </p>

              <div className="pt-16 flex items-center space-x-4">
                <div className="relative">
                  <ChevronDown className="w-6 h-6 text-gold-500 animate-bounce" />
                  <div className="absolute -inset-2 bg-gold-500/20 rounded-full blur-lg -z-10"></div>
                </div>
                <span className="text-gray-400 text-sm tracking-wider uppercase">{text[language].explore}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-32 bg-dark-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-8">
              <span className="text-white">{text[language].businessUniverse.split(' ')[0]}</span>
              <span className="gold-gradient"> {text[language].businessUniverse.split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {text[language].businessDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businesses.map((business, index) => (
              <div 
                key={index}
                className={`card-luxury p-6 rounded-2xl hover-scale group ${index === 0 ? 'md:col-span-2 lg:col-span-3' : ''}`}
              >
                <div className="text-gold-500 mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {business.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">{business.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{business.description}</p>
                
                {business.futureProjects && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <h4 className="text-xs font-medium text-gold-500 mb-3 uppercase tracking-wider">
                      {text[language].futureInitiatives}
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {business.futureProjects.map((project, projectIndex) => (
                        <div key={projectIndex} className="bg-dark-800/50 p-3 rounded-lg border border-gold-500/10 hover:border-gold-500/30 transition-colors">
                          <div className="flex items-center space-x-2 mb-1.5">
                            <div className="text-gold-500">
                              {React.cloneElement(project.icon, { className: 'w-5 h-5' })}
                            </div>
                            <h5 className="text-xs font-medium text-white">{project.title}</h5>
                          </div>
                          <p className="text-gray-400 text-xs leading-relaxed">{project.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-dark-950">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-8">
              <span className="text-white">{text[language].strategic}</span>
              <span className="gold-gradient"> {text[language].approach}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {text[language].strategicDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategy.map((item, index) => (
              <div 
                key={index}
                className="card-luxury p-10 rounded-2xl hover-scale group"
              >
                <div className="text-gold-500 mb-8 transform transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-dark-800/50 to-dark-900/50 border border-gold-500/20 backdrop-blur-sm mb-8">
              <span className="text-sm text-gold-500 font-medium tracking-wider uppercase">{text[language].blockchain}</span>
            </div>
            <h2 className="text-6xl font-bold mb-8">
              <span className="text-white">{text[language].decentralized}</span>
              <span className="gold-gradient"> {text[language].governance}</span>
            </h2>
            <p className=" text-xl text-gray-300 max-w-3xl mx-auto">
              {text[language].governanceDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {governanceFeatures.map((feature, index) => (
              <div 
                key={index}
                className="card-luxury p-10 rounded-2xl hover-scale group"
              >
                <div className="text-gold-500 mb-8 transform transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="inline-block card-luxury p-8 rounded-2xl">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 flex items-center justify-center">
                  <Wallet className="w-8 h-8 text-dark-950" />
                </div>
                <div className="text-left">
                  <h4 className="text-2xl font-bold text-white">{text[language].monthlyRevenue}</h4>
                  <p className="text-gold-500">{text[language].percentRevenue}</p>
                </div>
              </div>
              <p className="text-gray-300 max-w-lg mx-auto">
                {text[language].revenueDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-dark-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-6xl font-bold mb-8">
                <span className="text-white">{text[language].connect}</span>
                <span className="gold-gradient"> {text[language].withUs}</span>
              </h2>
              <p className="text-xl text-gray-300">
                {text[language].connectDesc}
              </p>
            </div>

            <form className="card-luxury p-10 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <input
                  type="text"
                  placeholder={text[language].name}
                  className="w-full px-6 py-4 bg-dark-800 rounded-xl border border-dark-700 focus:border-gold-500 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder={text[language].email}
                  className="w-full px-6 py-4 bg-dark-800 rounded-xl border border-dark-700 focus:border-gold-500 focus:outline-none transition-colors"
                />
              </div>
              <textarea
                rows={6}
                placeholder={text[language].message}
                className="w-full px-6 py-4 bg-dark-800 rounded-xl border border-dark-700 focus:border-gold-500 focus:outline-none transition-colors mb-8"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gold-500 text-dark-950 font-semibold py-5 rounded-xl hover:bg-gold-600 transition-colors duration-300"
              >
                {text[language].send}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-16 bg-dark-950 border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-8 md:mb-0">
              <img src="/logo.svg" alt="Alpha Alliance Group" className="h-12 w-12 mr-4" />
              <span className="text-2xl font-bold gold-gradient">Alpha Alliance Group</span>
            </div>
            <div className="text-gray-400">
              © {new Date().getFullYear()} Alpha Alliance Group. {text[language].rights}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;