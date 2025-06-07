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
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/totm/apropos/";
          },
        },{id: "dropdown-aspects-réglementaires",
              title: "Aspects réglementaires",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/totm/nosinitiatives/initiative-1/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/totm/nosinitiatives/initiative-2/";
              },
            },{id: "nav-actualités",
          title: "Actualités",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/totm/nosactualites/index.html";
          },
        },{id: "nav-nous-soutenir",
          title: "Nous soutenir",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/totm/noussoutenir/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/totm/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/totm/blog/";
              },
            },{id: "post-signez-la-pétiton-wwf-pour-protéger-les-tortues",
        
          title: 'Signez la pétiton WWF pour protéger les tortues <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Alors que la troisième Conférence des Nations Unies pour l&#39;Océan débutera à Nice dans quelques jours, le WWF a hier publié une pétition appelant à protéger les tortues marines.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.wwf.fr/petition-tortue", "_blank");
          
        },
      },{id: "post-voeux-2025",
        
          title: "Voeux 2025",
        
        description: "TOTM ne cesse de grandir et d’augmenter son impact,  en 2025 gardons ce cap pour protéger les océans et leurs habitants. Meilleur vœux à tous !",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/totm/nosactualites/2025/voeux-2025/";
          
        },
      },{id: "post-recrutement-d-39-une-chargé-de-mision",
        
          title: "Recrutement d&#39;une chargé de mision",
        
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
              window.location.href = "/totm/apropos/team/alexandra-moal/";
            },},{id: "team-cécile-gaspar",
          title: 'Cécile Gaspar',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/apropos/team/cecile-gaspar/";
            },},{id: "team-claire-jean",
          title: 'Claire Jean',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/apropos/team/claire-jean/";
            },},{id: "team-damien-chevallier",
          title: 'Damien Chevallier',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/apropos/team/damien-chevallier/";
            },},{id: "team-anne-emmanuelle-landes",
          title: 'Anne-Emmanuelle Landes',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/apropos/team/emmanuelle-landes/";
            },},{id: "team-eric-delcroix",
          title: 'Eric Delcroix',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/apropos/team/eric-delcroix/";
            },},{id: "team-flora-siegwalt",
          title: 'Flora Siegwalt',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/apropos/team/flora-siegwalt/";
            },},{id: "team-francois-elie-paute",
          title: 'Francois-Elie Paute',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/apropos/team/francois-paute/";
            },},{id: "team-jonathan-monsinjon",
          title: 'Jonathan Monsinjon',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/apropos/team/jonathan-monsinjon/";
            },},{id: "team-lorene-jeantet",
          title: 'Lorene Jeantet',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/apropos/team/lorene-jeantet/";
            },},{id: "team-mathieu-barret",
          title: 'Mathieu Barret',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/apropos/team/mathieu-barret/";
            },},{id: "team-mayeul-dalleau",
          title: 'Mayeul Dalleau',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/apropos/team/mayeul-dalleau/";
            },},{id: "team-mireille-quillard",
          title: 'Mireille Quillard',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/apropos/team/mireille-quillard/";
            },},{id: "team-tony-nalovic",
          title: 'Tony Nalovic',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/apropos/team/tony-nalovic/";
            },},{id: "team-tyffen-read",
          title: 'Tyffen Read',
          description: "",
          section: "Team",handler: () => {
              window.location.href = "/totm/apropos/team/tyffen-read/";
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
