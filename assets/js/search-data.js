// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-totm",
    title: "TOTM",
    section: "Navigation",
    handler: () => {
      window.location.href = "/totm/";
    },
  },{id: "nav-about-us",
          title: "About Us",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/totm/en/aboutus/";
          },
        },{id: "nav-a-propos",
          title: "A Propos",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/totm/apropos/";
          },
        },{id: "nav-our-team",
          title: "Our Team",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/totm/en/team/";
          },
        },{id: "nav-notre-equipe",
          title: "Notre Equipe",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/totm/equipe/";
          },
        },{id: "dropdown-initiatives-program",
              title: "Initiatives Program",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/totm/en/initiatives/";
              },
            },{id: "dropdown-our-projects",
              title: "Our Projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/totm/en/projects/";
              },
            },{id: "dropdown-our-projects-bis",
              title: "Our Projects bis",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/totm/en/projects_1/";
              },
            },{id: "dropdown-publications",
              title: "Publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/totm/en/publications/";
              },
            },{id: "dropdown-programme-initiatives",
              title: "Programme Initiatives",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/totm/nosinitiatives/";
              },
            },{id: "dropdown-nos-projets",
              title: "Nos Projets",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/totm/nosprojets/";
              },
            },{id: "dropdown-nos-projets-bis",
              title: "Nos Projets bis",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/totm/nosprojets_1/";
              },
            },{id: "dropdown-publications",
              title: "Publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/totm/publications/";
              },
            },{id: "nav-actualités",
          title: "Actualités",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/totm/nosactualites/index.html";
          },
        },{id: "nav-support-us",
          title: "Support Us",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/totm/en/supportus/";
          },
        },{id: "nav-nous-soutenir",
          title: "Nous Soutenir",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/totm/noussoutenir/";
          },
        },{id: "post-totm-participe-à-la-conférence-sur-le-climat-cop30-à-belém",
        
          title: "TOTM participe à la Conférence sur le climat COP30 à Belém",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/totm/nosactualites/2025/cop30/";
          
        },
      },{id: "post-totm-a-remporté-le-marché-de-l-39-animation-du-plan-national-d-39-actions-en-faveur-des-tortues-marines-des-antilles-françaises",
        
          title: "TOTM a remporté le marché de l&#39;animation du Plan National d&#39;Actions en faveur...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/totm/nosactualites/2025/pna-antilles/";
          
        },
      },{id: "post-participation-de-totm-à-l-assemblée-générale-du-ccrup-aux-canaries",
        
          title: "Participation de TOTM à l’assemblée générale du CCRUP aux Canaries",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/totm/nosactualites/2025/ccrup/";
          
        },
      },{id: "post-dernière-ligne-droite-pour-laure-et-son-stage-sur-la-pêcherie-crevettière-au-chalut-en-guyane-française-et-son-adoption-des-ted",
        
          title: "Dernière ligne droite pour Laure et son stage sur la pêcherie crevettière au...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/totm/nosactualites/2025/Laure-last-week/";
          
        },
      },{id: "post-recrutement-d-39-anouck-pour-une-mission-de-6-mois-sur-l-identification-individuelle-des-tortues-marines",
        
          title: "Recrutement d&#39;Anouck pour une mission de 6 mois sur l’identification individuelle des tortues...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/totm/nosactualites/2025/recrutement-anouck/";
          
        },
      },{id: "post-en-avant-pour-l-39-unoc-2025",
        
          title: "En avant pour l&#39;UNOC 2025 !",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/totm/nosactualites/2025/UNOC-2025/";
          
        },
      },{id: "post-une-pétition-citoyenne-pour-les-tortues-marines",
        
          title: "Une pétition citoyenne pour les tortues marines",
        
        description: "Chaque année, des dizaines milliers de tortues marines sont capturées accidentellement dans les filets de chalutiers ciblant les crevettes tropicales. Il existe pourtant des solutions parmis elles, le Dispositif d’Exclusion des Tortues (TED).",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/totm/nosactualites/2025/petition-ted/";
          
        },
      },{id: "post-recrutement-d-une-nouvelle-chargée-de-mission-conservation-chez-totm",
        
          title: "Recrutement d’une nouvelle chargée de mission Conservation chez TOTM",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/totm/nosactualites/2025/recrutement-cm-vs2/";
          
        },
      },{id: "post-participation-de-totm-à-l-international-sea-turtle-society-symposium-2025",
        
          title: "Participation de TOTM à l’International Sea Turtle Society Symposium 2025",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/totm/nosactualites/2025/ISTS-2025/";
          
        },
      },{id: "post-recrutement-de-léna-pour-son-stage-de-master-2-sur-l-39-impact-de-la-pêche-au-chalut-sur-les-tortues-marines",
        
          title: "Recrutement de Léna pour son stage de Master 2 sur l&#39;impact de la...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/totm/nosactualites/2025/recrutement-Lena/";
          
        },
      },{id: "post-voeux-2025",
        
          title: "Voeux 2025",
        
        description: "TOTM ne cesse de grandir et d’augmenter son impact,  en 2025 gardons ce cap pour protéger les océans et leurs habitants. Meilleur vœux à tous !",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/totm/nosactualites/2025/voeux-2025/";
          
        },
      },{id: "post-recrutement-d-39-une-chargée-de-mission",
        
          title: "Recrutement d&#39;une chargée de mission",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/totm/nosactualites/2024/recrutement-cm/";
          
        },
      },{id: "post-voeux-2024",
        
          title: "Voeux 2024",
        
        description: "L’année 2024 marque le début de la mise en œuvre du Programme Initiatives TOTM en faveur des tortues marines de tous nos territoires. Merci à tous pour votre soutien et meilleurs vœux pour 2024 !",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/totm/nosactualites/2024/voeux-2024/";
          
        },
      },{id: "post-finalisation-du-programme-initiatives",
        
          title: "Finalisation du programme initiatives",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/totm/nosactualites/2023/finalisation-programme-initiatives/";
          
        },
      },{id: "post-organisation-du-colloque-gtmf-2022",
        
          title: "Organisation du colloque GTMF 2022",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/totm/nosactualites/2022/organisation-gtmf/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/totm/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/totm/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "nosinitiatives-regulatory-aspects",
          title: 'Regulatory aspects',
          description: "",
          section: "Nosinitiatives",handler: () => {
              window.location.href = "/totm/nosinitiatives/initiative-1-en/";
            },},{id: "nosinitiatives-aspects-réglementaires",
          title: 'Aspects réglementaires',
          description: "",
          section: "Nosinitiatives",handler: () => {
              window.location.href = "/totm/nosinitiatives/initiative-1/";
            },},{id: "nosinitiatives-climate-noise-and-renewable-energy",
          title: 'Climate, Noise, and Renewable Energy',
          description: "",
          section: "Nosinitiatives",handler: () => {
              window.location.href = "/totm/nosinitiatives/initiative-2-en/";
            },},{id: "nosinitiatives-climat-bruit-et-énergies-renouvelables",
          title: 'Climat, bruit et énergies renouvelables',
          description: "",
          section: "Nosinitiatives",handler: () => {
              window.location.href = "/totm/nosinitiatives/initiative-2/";
            },},{id: "nosinitiatives-identification",
          title: 'Identification',
          description: "",
          section: "Nosinitiatives",handler: () => {
              window.location.href = "/totm/nosinitiatives/initiative-3-en/";
            },},{id: "nosinitiatives-identification",
          title: 'Identification',
          description: "",
          section: "Nosinitiatives",handler: () => {
              window.location.href = "/totm/nosinitiatives/initiative-3/";
            },},{id: "nosinitiatives-training",
          title: 'Training',
          description: "",
          section: "Nosinitiatives",handler: () => {
              window.location.href = "/totm/nosinitiatives/initiative-4-en/";
            },},{id: "nosinitiatives-formations",
          title: 'Formations',
          description: "",
          section: "Nosinitiatives",handler: () => {
              window.location.href = "/totm/nosinitiatives/initiative-4/";
            },},{id: "nosinitiatives-indicators-and-standard-minimums",
          title: 'Indicators and Standard Minimums',
          description: "",
          section: "Nosinitiatives",handler: () => {
              window.location.href = "/totm/nosinitiatives/initiative-5-en/";
            },},{id: "nosinitiatives-indicateurs-et-minima-standard",
          title: 'Indicateurs et minima standard',
          description: "",
          section: "Nosinitiatives",handler: () => {
              window.location.href = "/totm/nosinitiatives/initiative-5/";
            },},{id: "nosinitiatives-fishing-interactions",
          title: 'Fishing Interactions',
          description: "",
          section: "Nosinitiatives",handler: () => {
              window.location.href = "/totm/nosinitiatives/initiative-6-en/";
            },},{id: "nosinitiatives-interactions-avec-les-activités-de-pêche",
          title: 'Interactions avec les activités de pêche',
          description: "",
          section: "Nosinitiatives",handler: () => {
              window.location.href = "/totm/nosinitiatives/initiative-6/";
            },},{id: "nosinitiatives-marine-debris-interactions",
          title: 'Marine Debris Interactions',
          description: "",
          section: "Nosinitiatives",handler: () => {
              window.location.href = "/totm/nosinitiatives/initiative-7-en/";
            },},{id: "nosinitiatives-interactions-avec-les-déchets-marins",
          title: 'Interactions avec les déchets marins',
          description: "",
          section: "Nosinitiatives",handler: () => {
              window.location.href = "/totm/nosinitiatives/initiative-7/";
            },},{id: "nosinitiatives-pathologie-et-centre-de-soins",
          title: 'Pathologie et centre de soins',
          description: "",
          section: "Nosinitiatives",handler: () => {
              window.location.href = "/totm/nosinitiatives/initiative-8-en/";
            },},{id: "nosinitiatives-pathologie-et-centre-de-soins",
          title: 'Pathologie et centre de soins',
          description: "",
          section: "Nosinitiatives",handler: () => {
              window.location.href = "/totm/nosinitiatives/initiative-8/";
            },},{id: "nosinitiatives-awareness",
          title: 'Awareness',
          description: "",
          section: "Nosinitiatives",handler: () => {
              window.location.href = "/totm/nosinitiatives/initiative-9-en/";
            },},{id: "nosinitiatives-sensibilisation",
          title: 'Sensibilisation',
          description: "",
          section: "Nosinitiatives",handler: () => {
              window.location.href = "/totm/nosinitiatives/initiative-9/";
            },},{id: "projects-developing-a-practical-guide-to-blood-sampling-in-marine-turtles",
          title: 'Developing a Practical Guide to Blood Sampling in Marine Turtles',
          description: "Preparing a practical guide for blood sampling and interpretation in marine turtles.",
          section: "Projects",handler: () => {
              window.location.href = "/totm/en/projects_1/blood-sampling-guide/";
            },},{id: "projects-développer-un-guide-pratique-pour-la-réalisation-et-l-interprétation-des-prises-de-sang-des-tortues-marines",
          title: 'Développer un guide pratique pour la réalisation et l’interprétation des prises de sang...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/totm/nosprojets_1/guide-prises-de-sang/";
            },},{id: "projects-coordinating-nesting-activity-monitoring-in-guadeloupe",
          title: 'Coordinating Nesting Activity Monitoring in Guadeloupe',
          description: "Coordinated monitoring of marine turtle nesting activity across the Guadeloupe archipelago.",
          section: "Projects",handler: () => {
              window.location.href = "/totm/en/projects_1/guadeloupe-nesting-monitoring/";
            },},{id: "projects-coordination-et-mise-en-oeuvre-du-suivi-de-l-39-activite-de-ponte-en-guadeloupe",
          title: 'Coordination et mise en oeuvre du suivi de l&amp;#39;activite de ponte en Guadeloupe...',
          description: "Coordination du suivi des pontes sur les plages de l&#39;archipel de Guadeloupe.",
          section: "Projects",handler: () => {
              window.location.href = "/totm/nosprojets_1/suivi-pontes-guadeloupe/";
            },},{id: "projects-defining-a-methodology-for-selecting-identification-techniques",
          title: 'Defining a Methodology for Selecting Identification Techniques',
          description: "Building a shared framework to choose the most relevant sea turtle identification methods.",
          section: "Projects",handler: () => {
              window.location.href = "/totm/en/projects_1/identification-methodology/";
            },},{id: "projects-définir-une-méthodologie-pour-sélectionner-les-techniques-d-identification",
          title: 'Définir une méthodologie pour sélectionner les techniques d’identification',
          description: "Structurer le choix des meilleures techniques d&#39;identification pour les tortues marines.",
          section: "Projects",handler: () => {
              window.location.href = "/totm/nosprojets_1/methodologie-identification/";
            },},{id: "projects-developing-a-data-collection-protocol-for-iuu-fishing-in-french-guiana",
          title: 'Developing a Data Collection Protocol for IUU Fishing in French Guiana',
          description: "Standardizing illegal fishing data collection to better monitor pressures on turtles and habitats.",
          section: "Projects",handler: () => {
              window.location.href = "/totm/en/projects_1/inn-data-protocol/";
            },},{id: "projects-développement-d-un-protocole-de-collecte-de-données-sur-la-pêche-inn-en-guyane-française",
          title: 'Développement d’un protocole de collecte de données sur la pêche INN en Guyane...',
          description: "Harmoniser la collecte des données sur la pêche illégale pour mieux suivre les pressions.",
          section: "Projects",handler: () => {
              window.location.href = "/totm/nosprojets_1/protocole-peche-inn/";
            },},{id: "projects-impact-of-iuu-fishing-on-leatherback-turtle-population-dynamics-in-french-guiana",
          title: 'Impact of IUU Fishing on Leatherback Turtle Population Dynamics in French Guiana',
          description: "Studying how illegal, unreported and unregulated fishing affects marine turtle populations in French Guiana.",
          section: "Projects",handler: () => {
              window.location.href = "/totm/en/projects_1/inn-fishing-french-guiana/";
            },},{id: "projects-impact-de-la-pêche-inn-sur-la-dynamique-de-population-des-tortues-luth-en-guyane-française",
          title: 'Impact de la pêche INN sur la dynamique de population des tortues luth...',
          description: "Etudier les interactions entre pêche illégale et populations de tortues marines en Guyane.",
          section: "Projects",handler: () => {
              window.location.href = "/totm/nosprojets_1/impact-peche-inn-guyane/";
            },},{id: "projects-developing-methods-to-assess-pain-and-stress-in-marine-turtles",
          title: 'Developing Methods to Assess Pain and Stress in Marine Turtles',
          description: "Improving the clinical assessment of pain and stress in marine turtles.",
          section: "Projects",handler: () => {
              window.location.href = "/totm/en/projects_1/pain-stress-methods/";
            },},{id: "projects-développer-des-méthodes-d-évaluation-de-la-douleur-et-du-stress-chez-les-tortues",
          title: 'Développer des méthodes d’évaluation de la douleur et du stress chez les tortues...',
          description: "Mieux caracteriser la douleur et le stress chez les tortues marines pour ameliorer leur prise en charge.",
          section: "Projects",handler: () => {
              window.location.href = "/totm/nosprojets_1/douleur-stress/";
            },},{id: "projects-coordinating-the-french-west-indies-national-action-plan-for-marine-turtles",
          title: 'Coordinating the French West Indies National Action Plan for Marine Turtles',
          description: "Coordinating implementation of the national marine turtle action plan across the French West Indies.",
          section: "Projects",handler: () => {
              window.location.href = "/totm/en/projects_1/pnatmaf-coordination/";
            },},{id: "projects-animation-du-plan-national-d-39-action-tortues-marines-des-antilles-francaises",
          title: 'Animation du Plan National d&amp;#39;Action Tortues Marines des Antilles francaises',
          description: "Animer le PNATMAF et coordonner sa mise en oeuvre dans les Antilles francaises.",
          section: "Projects",handler: () => {
              window.location.href = "/totm/nosprojets_1/pnatmaf/";
            },},{id: "projects-evaluating-the-benefits-of-voluntary-turtle-excluder-device-adoption",
          title: 'Evaluating the Benefits of Voluntary Turtle Excluder Device Adoption',
          description: "Measuring the conservation benefits of voluntary Turtle Excluder Device use in French Guiana.",
          section: "Projects",handler: () => {
              window.location.href = "/totm/en/projects_1/ted-evaluation/";
            },},{id: "projects-évaluation-des-impacts-positifs-de-l-39-adoption-volontaire-de-dispositifs-d-39-exclusion-des-tortues-ted-par-la-flotte-de-chalutiers-crevettiers-de-guyane-française",
          title: 'Évaluation des impacts positifs de l&amp;#39;adoption volontaire de dispositifs d&amp;#39;exclusion des tortues (TED)...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/totm/nosprojets_1/evaluation-ted/";
            },},{id: "projects-assessing-trawl-fishery-impacts-for-tropical-shrimp-exported-to-the-eu",
          title: 'Assessing Trawl Fishery Impacts for Tropical Shrimp Exported to the EU',
          description: "Estimating sea turtle bycatch in tropical shrimp fisheries supplying the European Union.",
          section: "Projects",handler: () => {
              window.location.href = "/totm/en/projects_1/trawl-impact-eu/";
            },},{id: "projects-évaluer-l-impact-de-la-pêche-au-chalut-sur-les-tortues-marines-dans-les-pêcheries-de-crevettes-tropicales-exportant-vers-l-ue",
          title: 'Évaluer l’impact de la pêche au chalut sur les tortues marines dans les...',
          description: "Estimer les captures accidentelles de tortues dans les pecheries tropicales exportant vers l&#39;Union europeenne.",
          section: "Projects",handler: () => {
              window.location.href = "/totm/nosprojets_1/impact-chalut-ue/";
            },},{id: "team-alexandra-le-moal",
          title: 'Alexandra Le Moal',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/alexandra-moal-en/";
            },},{id: "team-alexandra-le-moal",
          title: 'Alexandra Le Moal',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/alexandra-moal/";
            },},{id: "team-alexis-guilleux",
          title: 'Alexis Guilleux',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/alexis-guilleux-en/";
            },},{id: "team-alexis-guilleux",
          title: 'Alexis Guilleux',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/alexis-guilleux/";
            },},{id: "team-cécile-gaspar",
          title: 'Cécile Gaspar',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/cecile-gaspar-en/";
            },},{id: "team-cécile-gaspar",
          title: 'Cécile Gaspar',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/cecile-gaspar/";
            },},{id: "team-claire-jean",
          title: 'Claire Jean',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/claire-jean-en/";
            },},{id: "team-claire-jean",
          title: 'Claire Jean',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/claire-jean/";
            },},{id: "team-damien-chevallier",
          title: 'Damien Chevallier',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/damien-chevallier-en/";
            },},{id: "team-damien-chevallier",
          title: 'Damien Chevallier',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/damien-chevallier/";
            },},{id: "team-anne-emmanuelle-landes",
          title: 'Anne-Emmanuelle Landes',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/emmanuelle-landes-en/";
            },},{id: "team-anne-emmanuelle-landes",
          title: 'Anne-Emmanuelle Landes',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/emmanuelle-landes/";
            },},{id: "team-eric-delcroix",
          title: 'Eric Delcroix',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/eric-delcroix-en/";
            },},{id: "team-eric-delcroix",
          title: 'Eric Delcroix',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/eric-delcroix/";
            },},{id: "team-flora-siegwalt",
          title: 'Flora Siegwalt',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/flora-siegwalt-en/";
            },},{id: "team-flora-siegwalt",
          title: 'Flora Siegwalt',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/flora-siegwalt/";
            },},{id: "team-francois-elie-paute",
          title: 'Francois-Elie Paute',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/francois-paute-en/";
            },},{id: "team-francois-elie-paute",
          title: 'Francois-Elie Paute',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/francois-paute/";
            },},{id: "team-jonathan-monsinjon",
          title: 'Jonathan Monsinjon',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/jonathan-monsinjon-en/";
            },},{id: "team-jonathan-monsinjon",
          title: 'Jonathan Monsinjon',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/jonathan-monsinjon/";
            },},{id: "team-katia-ballorain",
          title: 'Katia Ballorain',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/katia-ballorain-en/";
            },},{id: "team-katia-ballorain",
          title: 'Katia Ballorain',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/katia-ballorain/";
            },},{id: "team-lorène-jeantet",
          title: 'Lorène Jeantet',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/lorene-jeantet-en/";
            },},{id: "team-lorène-jeantet",
          title: 'Lorène Jeantet',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/lorene-jeantet/";
            },},{id: "team-manon-nivière",
          title: 'Manon Nivière',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/manon-niviere-en/";
            },},{id: "team-manon-nivière",
          title: 'Manon Nivière',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/manon-niviere/";
            },},{id: "team-margaux-boyer",
          title: 'Margaux Boyer',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/margaux-boyer-en/";
            },},{id: "team-margaux-boyer",
          title: 'Margaux Boyer',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/margaux-boyer/";
            },},{id: "team-mathieu-barret",
          title: 'Mathieu Barret',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/mathieu-barret-en/";
            },},{id: "team-mathieu-barret",
          title: 'Mathieu Barret',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/mathieu-barret/";
            },},{id: "team-mayeul-dalleau",
          title: 'Mayeul Dalleau',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/mayeul-dalleau-en/";
            },},{id: "team-mayeul-dalleau",
          title: 'Mayeul Dalleau',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/mayeul-dalleau/";
            },},{id: "team-mireille-quillard",
          title: 'Mireille Quillard',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/mireille-quillard-en/";
            },},{id: "team-mireille-quillard",
          title: 'Mireille Quillard',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/mireille-quillard/";
            },},{id: "team-nicolas-paranthoen",
          title: 'Nicolas Paranthoen',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/nicolas-paranthoen-en/";
            },},{id: "team-nicolas-paranthoen",
          title: 'Nicolas Paranthoen',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/nicolas-paranthoen/";
            },},{id: "team-tania-gilbert",
          title: 'Tania Gilbert',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/tania-gilbert-en/";
            },},{id: "team-tania-gilbert",
          title: 'Tania Gilbert',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/tania-gillbert/";
            },},{id: "team-thea-jacob",
          title: 'Thea Jacob',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/thea-jacob-en/";
            },},{id: "team-thea-jacob",
          title: 'Thea Jacob',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/thea-jacob/";
            },},{id: "team-tony-nalovic",
          title: 'Tony Nalovic',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/tony-nalovic-en/";
            },},{id: "team-tony-nalovic",
          title: 'Tony Nalovic',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/tony-nalovic/";
            },},{id: "team-tyffen-read",
          title: 'Tyffen Read',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/tyffen-read-en/";
            },},{id: "team-tyffen-read",
          title: 'Tyffen Read',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/tyffen-read/";
            },},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/company/tortuesmarines", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
