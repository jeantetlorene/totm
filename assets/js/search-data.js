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
  },{id: "nav-a-propos",
          title: "A Propos",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/totm/apropos/";
          },
        },{id: "nav-notre-equipe",
          title: "Notre Equipe",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/totm/equipe/";
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
        },{id: "nav-nous-soutenir",
          title: "Nous Soutenir",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/totm/noussoutenir/";
          },
        },{id: "post-une-pétition-citoyenne-pour-les-tortues-marines",
        
          title: "Une pétition citoyenne pour les tortues marines",
        
        description: "Chaque année, des dizaines milliers de tortues marines sont capturées accidentellement dans les filets de chalutiers ciblant les crevettes tropicales. Il existe pourtant des solutions parmis elles, le Dispositif d’Exclusion des Tortues (TED).",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/totm/nosactualites/2025/petition-ted/";
          
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
          section: "News",},{id: "nosinitiatives-aspects-réglementaires",
          title: 'Aspects réglementaires',
          description: "",
          section: "Nosinitiatives",handler: () => {
              window.location.href = "/totm/nosinitiatives/initiative-1/";
            },},{id: "nosinitiatives-climat-bruit-et-énergies-renouvelables",
          title: 'Climat, bruit et énergies renouvelables',
          description: "",
          section: "Nosinitiatives",handler: () => {
              window.location.href = "/totm/nosinitiatives/initiative-2/";
            },},{id: "nosinitiatives-identification",
          title: 'Identification',
          description: "",
          section: "Nosinitiatives",handler: () => {
              window.location.href = "/totm/nosinitiatives/initiative-3/";
            },},{id: "nosinitiatives-formations",
          title: 'Formations',
          description: "",
          section: "Nosinitiatives",handler: () => {
              window.location.href = "/totm/nosinitiatives/initiative-4/";
            },},{id: "nosinitiatives-indicateurs-et-minima-standard",
          title: 'Indicateurs et minima standard',
          description: "",
          section: "Nosinitiatives",handler: () => {
              window.location.href = "/totm/nosinitiatives/initiative-5/";
            },},{id: "nosinitiatives-interactions-avec-les-activités-de-pêche",
          title: 'Interactions avec les activités de pêche',
          description: "",
          section: "Nosinitiatives",handler: () => {
              window.location.href = "/totm/nosinitiatives/initiative-6/";
            },},{id: "nosinitiatives-interactions-avec-les-déchets-marins",
          title: 'Interactions avec les déchets marins',
          description: "",
          section: "Nosinitiatives",handler: () => {
              window.location.href = "/totm/nosinitiatives/initiative-7/";
            },},{id: "nosinitiatives-pathologie-et-centre-de-soins",
          title: 'Pathologie et centre de soins',
          description: "",
          section: "Nosinitiatives",handler: () => {
              window.location.href = "/totm/nosinitiatives/initiative-8/";
            },},{id: "nosinitiatives-sensibilisation",
          title: 'Sensibilisation',
          description: "",
          section: "Nosinitiatives",handler: () => {
              window.location.href = "/totm/nosinitiatives/initiative-9/";
            },},{id: "team-alexandra-le-moal",
          title: 'Alexandra Le Moal',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/alexandra-moal/";
            },},{id: "team-alexis-guilleux",
          title: 'Alexis Guilleux',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/alexis-guilleux/";
            },},{id: "team-cécile-gaspar",
          title: 'Cécile Gaspar',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/cecile-gaspar/";
            },},{id: "team-claire-jean",
          title: 'Claire Jean',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/claire-jean/";
            },},{id: "team-damien-chevallier",
          title: 'Damien Chevallier',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/damien-chevallier/";
            },},{id: "team-anne-emmanuelle-landes",
          title: 'Anne-Emmanuelle Landes',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/emmanuelle-landes/";
            },},{id: "team-eric-delcroix",
          title: 'Eric Delcroix',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/eric-delcroix/";
            },},{id: "team-flora-siegwalt",
          title: 'Flora Siegwalt',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/flora-siegwalt/";
            },},{id: "team-francois-elie-paute",
          title: 'Francois-Elie Paute',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/francois-paute/";
            },},{id: "team-jonathan-monsinjon",
          title: 'Jonathan Monsinjon',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/jonathan-monsinjon/";
            },},{id: "team-lorene-jeantet",
          title: 'Lorene Jeantet',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/lorene-jeantet/";
            },},{id: "team-manon-nivière",
          title: 'Manon Nivière',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/manon-niviere/";
            },},{id: "team-margaux-boyer",
          title: 'Margaux Boyer',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/margaux-boyer/";
            },},{id: "team-mathieu-barret",
          title: 'Mathieu Barret',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/mathieu-barret/";
            },},{id: "team-mayeul-dalleau",
          title: 'Mayeul Dalleau',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/mayeul-dalleau/";
            },},{id: "team-mireille-quillard",
          title: 'Mireille Quillard',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/mireille-quillard/";
            },},{id: "team-nicolas-paranthoen",
          title: 'Nicolas Paranthoen',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/nicolas-paranthoen/";
            },},{id: "team-tony-nalovic",
          title: 'Tony Nalovic',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/tony-nalovic/";
            },},{id: "team-tyffen-read",
          title: 'Tyffen Read',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/equipe/tyffen-read/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%6F%72%65%6E%65@%61%69%6D%73.%61%63.%7A%61", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: 'Socials',
        handler: () => {
          window.open("https://facebook.com/", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/lorène-jeantet-2241a6b3", "_blank");
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
