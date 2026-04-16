/*== Photo & Illustration Imports  == */
import BigDataIAIllustration from "../assets/images/illustrations/long.term.training/big-data-ai.jpg";
import ItProgrammingIllustration from "../assets/images/illustrations/long.term.training/it-programming.jpg";
import MotionDesignIllustration from "../assets/images/illustrations/long.term.training/motion-design.jpg";
import WebDevelopmentIllustration from "../assets/images/illustrations/continuing.education/web-development.jpeg";
import DataAnalysisIllustration from "../assets/images/illustrations/continuing.education/data-analysis.jpeg";
import ComputerMaintenanceIllustration from "../assets/images/illustrations/continuing.education/computer-maintenance.jpeg";
import WebDesignIllustration from "../assets/images/illustrations/continuing.education/web-design.jpeg";

export const trainingList = [
  // Long-term Trainings
  {
    id: 1,
    title: "Big Data & Intelligence Artificielle",
    description: "La filière Big Data & Intelligence Artificielle forme des experts capables de collecter, analyser et exploiter des données massives pour concevoir des modèles prédictifs et des solutions d'automatisation intelligente.",
    illustration: BigDataIAIllustration,
    departement: "Département Numérique",
    label: "Pôle Numérique",
    presentation: "La filière Big Data et Intelligence Artificielle forme des experts capables de traiter, analyser et exploiter de grandes quantités de données pour en extraire des informations stratégiques et des modèles prédictifs. Elle couvre des domaines tels que la science des données, l'apprentissage automatique, le traitement du langage naturel et la visualisation de données, permettant ainsi de développer des solutions innovantes pour la prise de décision et l'automatisation des tâches. Cette formation répond aux besoins croissants des entreprises souhaitant optimiser leurs performances à l'aide des technologies avancées de l'IA et du Big Data.",
    goals: null,
    openings: [
      "Data Scientist",
      "Data Engineer", 
      "Ingénieur en Intelligence Artificielle",
      "Analyste Big Data",
      "Consultant en transformation digitale",
      "Développeur en Machine Learning"
    ],
    target_audience: null,
    materials: [
      "Ordinateur portable", 
      "Clé USB ou disque dur externe", 
      "Rallonge Multi-prise"
    ],
    preview: null,
    duration: "2 ans",
    cost: "1 200 000 FCFA",
    beginning: "02 Mars 2026"
  },
  {
    id: 2,
    title: "Programmation Informatique",
    description: "La filière Programmation Informatique forme des professionnels capables de concevoir, développer et optimiser des logiciels, applications web et mobiles ainsi que des systèmes informatiques.",
    illustration: ItProgrammingIllustration,
    departement: "Département Numérique",
    label: "Pôle Numérique",
    presentation: "La filière Programmation Informatique forme des professionnels capables de concevoir, développer et optimiser des logiciels, applications web et mobiles ainsi que des systèmes informatiques. Elle couvre les langages de programmation essentiels (comme Python, Java, C++, et JavaScript), les principes d'algorithmique, et les méthodes de développement collaboratif. Grâce à cette formation, les étudiants acquièrent des compétences en analyse et en résolution de problèmes techniques, en respectant les standards de qualité et de sécurité. Cette filière répond aux besoins croissants du marché pour des développeurs polyvalents et spécialisés, indispensables dans tous les secteurs du numérique.",
    goals: null,
    openings: [
      "Développeur web",
      "Développeur d'applications mobiles",
      "Développeur logiciel",
      "Ingénieur DevOps",
      "Ingénieur système et réseaux",
      "Analyste programmeur",
      "Consultant en technologie"
    ],
    target_audience: null,
    materials: [
      "Ordinateur portable", 
      "Clé USB ou disque dur externe", 
      "Rallonge Multi-prise"
    ],
    preview: null,
    duration: "2 ans",
    cost: "1 000 000 FCFA",
    beginning: "02 Mars 2026"
  },
  {
    id: 3,
    title: "Sécurité Informatique",
    description: "La filière Sécurité Informatique forme des spécialistes capables de protéger les systèmes d'information, les réseaux et les données contre les cybermenaces.",
    illustration: ItProgrammingIllustration,
    departement: "Département Numérique",
    label: "Pôle Numérique",
    presentation: "La filière Sécurité Informatique forme des spécialistes capables de protéger les systèmes d'information, les réseaux et les données contre les cybermenaces. Elle couvre les domaines de la cybersécurité, de la cryptographie, de l'analyse de risques, ainsi que des techniques de défense et de réponse aux incidents. Cette formation enseigne aux étudiants comment détecter, analyser et contrer les menaces de sécurité tout en assurant la confidentialité, l'intégrité et la disponibilité des informations. Dans un contexte de hausse des cyberattaques, cette filière est essentielle pour garantir la sécurité des entreprises et des organisations.",
    goals: null,
    openings: [
      "Analyste en cybersécurité",
      "Ingénieur en sécurité informatique",
      "Responsable de la sécurité des systèmes d'information (RSSI)",
      "Pentester (testeur d'intrusion)",
      "Consultant en sécurité informatique",
      "Auditeur en sécurité informatique",
      "Cryptographe"
    ],
    target_audience: null,
    materials: [
      "Ordinateur portable", 
      "Clé USB ou disque dur externe", 
      "Rallonge Multi-prise", 
      "Accès à des plateformes virtuelles et cloud (comme VirtualBox, VMware, ou AWS)"
    ],
    preview: null,
    duration: "2 ans",
    cost: "1 000 000 FCFA",
    beginning: "02 Mars 2026"
  },
  {
    id: 4,
    title: "Cybersécurité",
    description: "La filière Cybersécurité forme des experts de la défense numérique capable d'anticiper les attaques, de sécuriser les infrastructures critiques et de répondre aux incidents de sécurité en temps réel.",
    illustration: ItProgrammingIllustration,
    departement: "Département Numérique",
    label: "Pôle Numérique",
    presentation: "La formation en Cybersécurité est conçue pour transformer les étudiants en véritables remparts contre la cybercriminalité. Ce cursus intensif se concentre sur la mise en œuvre de stratégies de défense avancées, la surveillance des réseaux via les SOC (Security Operations Center), et la gestion des vulnérabilités. Vous apprendrez à maîtriser les outils de détection d'intrusion, à mener des investigations numériques (forensics) et à élaborer des plans de continuité d'activité. L'objectif est de former des profils opérationnels capables d'évoluer dans un paysage technologique où la menace est constante, en alliant compétences techniques pointues et conformité réglementaire.",
    goals: null,
    openings: [
      "Analyste SOC (Security Operations Center)",
      "Ingénieur en sécurité informatique",
      "Enquêteur numérique",
      "Responsable de la sécurité des systèmes d'information (RSSI)"
    ],
    target_audience: null,
    materials: [
      "Ordinateur portable performant (8Go RAM min.)",
      "Clé USB de sécurité",
      "Disque dur externe",
      "Rallonge Multi-prise",
      "Environnements de virtualisation (Kali Linux, Parrot OS)",
      "Accès aux Labs Cloud (AWS/Azure)"
    ],
    preview: null,
    duration: "1 an",
    cost: "500 000 FCFA",
    beginning: "02 Mars 2026"
  },
  {
    id: 5,
    title: "Installation et Maintenance Informatique",
    description: "La filière Installation et Maintenance Informatique forme des techniciens qualifiés pour assurer la mise en place, la configuration, l'entretien et la réparation des systèmes informatiques et réseaux.",
    illustration: ItProgrammingIllustration,
    departement: "Département Numérique",
    label: "Pôle Numérique",
    presentation: "La filière Installation et Maintenance Informatique forme des techniciens qualifiés pour assurer la mise en place, la configuration, l'entretien et la réparation des systèmes informatiques et réseaux. Elle couvre les aspects techniques du matériel (hardware), les logiciels (software), ainsi que la gestion des réseaux et des périphériques. Les étudiants apprennent à diagnostiquer et résoudre des pannes, à effectuer des installations et des mises à jour, et à garantir le bon fonctionnement des infrastructures informatiques. Cette formation est essentielle pour soutenir les entreprises et organisations dans la continuité de leurs opérations informatiques.",
    goals: null,
    openings: [
      "Technicien de maintenance informatique",
      "Technicien réseau",
      "Administrateur système junior",
      "Technicien support informatique",
      "Responsable technique en centre de service",
      "Installateur de matériel informatique"
    ],
    target_audience: null,
    materials: [
      "Ordinateur portable",
      "Clé USB ou disque dur externe",
      "Rallonge Multi-prise",
      "Outils de diagnostic matériel et logiciel"
    ],
    preview: null,
    duration: "1 an",
    cost: "500 000 FCFA",
    beginning: "02 Mars 2026"
  },
  {
    id: 6,
    title: "Developpement Web & Mobile",
    description: "La filière Développement Web & Mobile forme des professionnels capables de concevoir, développer et maintenir des applications web et mobiles performantes et sécurisées.",
    illustration: ItProgrammingIllustration,
    departement: "Département Numérique",
    label: "Pôle Numérique",
    presentation: "La filière Développement Web & Mobile forme des professionnels capables de concevoir, développer et maintenir des applications web et mobiles performantes et sécurisées. Elle couvre les principaux langages et frameworks (HTML, CSS, JavaScript, React, Flutter, etc.), les bases de données, ainsi que les techniques de design UX/UI. Les étudiants apprennent à créer des applications dynamiques, intuitives et adaptées aux besoins des utilisateurs sur diverses plateformes. Cette formation répond aux exigences croissantes du marché du numérique, où les solutions en ligne et mobiles sont omniprésentes.",
    goals: null,
    openings: [
      "Développeur web",
      "Développeur mobile",
      "Intégrateur web",
      "Designer UX/UI",
      "Développeur full-stack",
      "Chef de projet web"
    ],
    target_audience: null,
    materials: [
      "Ordinateur portable",
      "Clé USB ou disque dur externe",
      "Rallonge Multi-prise"
    ],
    preview: null,
    duration: "1 an",
    cost: "500 000 FCFA",
    beginning: "02 Mars 2026"
  },
  {
    id: 7,
    title: "Motion Design",
    description: "La filière Motion Design forme des créatifs capables de donner vie à des graphismes par l'animation 2D/3D, la production de vidéos dynamiques et la conception d'effets visuels pour le digital et les médias.",
    illustration: MotionDesignIllustration,
    departement: "Département Design",
    label: "Pôle Design",
    presentation: "Le Motion Design, ou design animé, est une discipline qui allie graphisme et animation pour créer des contenus visuels dynamiques. Cette technique utilise des éléments graphiques animés, des typographies en mouvement et des effets visuels pour communiquer des idées, des récits ou des messages à travers des vidéos, des publicités, des présentations et des contenus numériques. Le Motion Design est largement utilisé dans des domaines tels que la publicité, le cinéma, la télévision et les médias numériques.",
    goals: null,
    openings: [
      "Motion Designer",
      "Animateur",
      "Directeur Artistique",
      "Concepteur 3D",
      "Graphiste Multimédia",
      "Vidéaste",
      "Designer d'Interface Animée"
    ],
    target_audience: null,
    materials: [
      "Ordinateur portable", 
      "Clé USB ou disque dur externe", 
      "Tablette graphique (facultatif) : Pour le dessin et la création d'illustrations.", 
      "Rallonge Multi-prise"
    ],
    preview: null,
    duration: "2 ans",
    cost: "1 200 000 FCFA",
    beginning: "02 Mars 2026"
  },
  {
    id: 8,
    title: "Design UI/UX",
    description: "Le Design UI/UX (Interface Utilisateur / Expérience Utilisateur) est un domaine en plein essor, centré sur la création de produits numériques intuitifs et esthétiques.",
    illustration: MotionDesignIllustration,
    departement: "Département Design",
    label: "Pôle Design",
    presentation: "Le Design UI/UX (Interface Utilisateur / Expérience Utilisateur) est un domaine en plein essor, centré sur la création de produits numériques intuitifs et esthétiques. Les designers UI/UX s'assurent que les interfaces des applications et sites web sont non seulement visuellement attrayantes, mais aussi faciles à naviguer pour offrir une expérience utilisateur optimale.",
    goals: null,
    openings: [
      "Designer UI/UX",
      "UX Researcher",
      "Product Designer",
      "Consultant en Design",
      "Responsable de la conception"
    ],
    target_audience: null,
    materials: [
      "Ordinateur portable",
      "Clé USB ou disque dur externe",
      "Tablette graphique (facultatif) : Pour le dessin et la création d'illustrations.",
      "Rallonge Multi-prise"
    ],
    preview: null,
    duration: "1 an",
    cost: "600 000 FCFA",
    beginning: "02 Mars 2026"
  },
  // Continuing Education Trainings
  {
    id: 9,
    title: "Développement Web",
    description: "Cette formation est destinée aux personnes en quête d'emploi, en situation de transition professionnelle, aux adultes qui souhaitent approfondir leurs connaissances dans le domaine du Développement Web et obtenir un certificat.",
    illustration: WebDevelopmentIllustration,
    departement: null,
    label: null,
    presentation: "Cette formation est destinée aux personnes en quête d'emploi, en situation de transition professionnelle, aux adultes qui souhaitent approfondir leurs connaissances dans le domaine du développement web et obtenir un certificat. La formation en Développement Web initie les participants aux concepts et outils fondamentaux pour créer et gérer des sites web. Elle couvre les langages de programmation essentiels (HTML, CSS, et JavaScript), les bonnes pratiques de conception web, ainsi que des bases en développement front-end et back-end. Les participants apprendront à concevoir des sites web interactifs et responsifs, adaptés aux besoins actuels du numérique. Elle permet d'acquérir les armes nécessaires en termes de compétences, d'aptitudes et de méthodologie de travail pour vous rendre opérationnel en 03 mois de formation continue en cours du soir.",
    goals: [
      "Acquérir une compréhension des langages de base du développement web (HTML, CSS, JavaScript).",
      "Découvrir les principes du développement front-end et une introduction au back-end.",
      "Apprendre à structurer, styliser et dynamiser des pages web.",
      "Savoir utiliser des outils de développement web courants (éditeur de code, navigateur pour le test, etc.)."
    ],
    openings: [
      "Créer des pages web statiques et dynamiques",
      "Comprendre les bases de la création de sites web responsifs, adaptés aux différents types d'appareils",
      "Utiliser des outils de développement web pour tester et déboguer leur code",
      "Appliquer les principes de base du développement front-end et être initiés au développement back-end"
    ],
    target_audience: "Cette formation s'adresse aux débutants souhaitant s'initier au développement web, aux professionnels souhaitant ajouter des compétences techniques à leur profil, ainsi qu'aux personnes en reconversion intéressées par une première immersion dans le domaine du web.",
    materials: [
      "Ordinateur : Pour la pratique du codage et l'utilisation d'outils de développement.",
      "Éditeur de code : Logiciels comme Visual Studio Code, Sublime Text ou Atom.",
      "Navigateurs web : Pour tester et visualiser les projets.",
    ],
    preview: "Cette formation courte en développement web offre des compétences de base qui permettent aux participants de créer leurs premières pages et de comprendre les aspects techniques essentiels pour évoluer dans le domaine.",
    duration: "3 mois",
    cost: "300 000 FCFA",
    beginning: "02 Mars 2026"
  },
  {
    id: 10,
    title: "Analyse de Données",
    description: "Cette formation est destinée aux personnes en quête d'emploi, en situation de transition professionnelle, aux adultes qui souhaitent approfondir leurs connaissances dans le domaine de l'Analyse des Données et obtenir un certificat.",
    illustration: DataAnalysisIllustration,
    departement: null,
    label: null,
    presentation: "Cette formation est destinée aux personnes en quête d’emploi, en situation de transition professionnelle, aux adultes qui souhaitent approfondir leurs connaissances dans le domaine de l’Analyse des Données et obtenir un certificat. L'Analyse des Données est également un domaine essentiel pour les entreprises et les organisations souhaitant exploiter de manière efficace leurs informations et orienter leurs prises de décision. Cette formation en analyse des données couvre les fondamentaux de la collecte, de l'interprétation et de la visualisation des données pour en tirer des conclusions exploitables. Les participants apprendront à utiliser des outils et des méthodes statistiques, tout en découvrant comment transformer des données brutes en informations utiles. Elle permet d’acquérir les armes nécessaires en termes de compétences, d’aptitudes et de méthodologie de travail pour vous rendre opérationnel en 03 mois de formation continue en cours du soir.",
    goals: [
      "Comprendre les principes de base de l'analyse des données.",
      "Maîtriser les techniques de collecte, nettoyage et préparation des données.",
      "Découvrir les outils d'analyse de données couramment utilisés (Excel, Power BI, Python, ou R).",
      "Apprendre à interpréter les résultats et à les communiquer de manière claire et visuelle."
    ],
    openings: [
      "Réaliser des analyses de données simples et interpréter les résultats pour répondre à des problématiques spécifiques",
      "Utiliser des outils de visualisation de données pour créer des graphiques et des tableaux de bord",
      "Contribuer à des projets d'analyse de données dans des secteurs variés (marketing, finance, RH, etc.)"
    ],
    target_audience: "Cette formation s'adresse aux professionnels souhaitant développer leurs compétences en analyse de données, ainsi qu'aux étudiants ou aux individus en reconversion qui souhaitent acquérir des connaissances de base dans ce domaine.",
    materials: [
      "Ordinateur : Pour accéder aux logiciels d’analyse.",
      "Logiciels de traitement de données : Excel, Power BI, ou un langage de programmation comme Python ou R (selon le programme de formation).",
    ],
    preview: "Cette formation courte et pratique permet d’acquérir des compétences essentielles en analyse des données, utiles pour une multitude de fonctions professionnelles.",
    duration: "3 mois",
    cost: "300 000 FCFA",
    beginning: "02 Mars 2026"
  },
  {
    id: 11,
    title: "Maintenance Informatique",
    description: "Cette formation est destinée aux personnes en quête d'emploi, en situation de transition professionnelle, aux adultes qui souhaitent approfondir leurs connaissances dans le domaine de la Maintenance Informatique et obtenir un certificat.",
    illustration: ComputerMaintenanceIllustration,
    departement: null,
    label: null,
    presentation: "Cette formation est destinée aux personnes en quête d’emploi, en situation de transition professionnelle, aux adultes qui souhaitent approfondir leurs connaissances dans le domaine de la Maintenance Informatique et obtenir un certificat. La formation en Maintenance Informatique vise à doter les participants des compétences essentielles pour assurer le bon fonctionnement des équipements informatiques dans divers environnements. Elle couvre les notions fondamentales de diagnostic, de réparation, de prévention des pannes, ainsi que de gestion des logiciels et des réseaux de base. Cette formation prépare les participants à résoudre efficacement les problèmes techniques courants, garantissant ainsi la continuité des opérations informatiques. Elle permet d’acquérir les armes nécessaires en termes de compétences, d’aptitudes et de méthodologie de travail pour vous rendre opérationnel en 03 mois de formation continue en cours du soir.",
    goals: [
      "Maîtriser les bases de la maintenance préventive et corrective des ordinateurs et périphériques.",
      "Apprendre à diagnostiquer et résoudre les pannes matérielles et logicielles courantes.",
      "Découvrir les principes de base des réseaux informatiques et de leur maintenance.",
      "Connaître les bonnes pratiques pour assurer la sécurité et la performance des systèmes."
    ],
    openings: [
      "Diagnostiquer et réparer des pannes matérielles courantes",
      "Installer et configurer des systèmes d'exploitation et logiciels",
      "Assurer l'entretien préventif d'un parc informatique",
      "Gérer les réseaux locaux de base et la sécurité des postes de travail"
    ],
    target_audience: "Cette formation s'adresse aux passionnés d'informatique souhaitant acquérir des bases techniques solides, aux agents de bureau désirant devenir autonomes sur leur poste de travail, ainsi qu'aux personnes en reconversion vers les métiers du support technique.",
    materials: [
      "Kit de tournevis de précision : Pour le démontage et le remontage des composants matériels.",
      "Multimètre numérique : Pour tester les composants électroniques et les alimentations.",
      "Clés USB bootables : Pour l'installation de systèmes d'exploitation et les outils de diagnostic.",
      "Bracelet antistatique : Pour manipuler les composants internes en toute sécurité.",
    ],
    preview: "Cette formation courte en maintenance informatique fournit les bases techniques indispensables pour diagnostiquer, réparer et entretenir efficacement les systèmes informatiques et leurs périphériques.",
    duration: "3 mois",
    cost: "300 000 FCFA",
    beginning: "02 Mars 2026"
  },
  {
    id: 12,
    title: "Montage Vidéo",
    description: "Cette formation est destinée aux personnes en quête d’emploi, en situation de transition professionnelle, aux adultes qui souhaitent approfondir leurs connaissances dans le domaine du Montage Vidéo et obtenir un certificat.",
    illustration: WebDevelopmentIllustration,
    departement: null,
    label: null,
    presentation: "Cette formation est destinée aux personnes en quête d’emploi, en situation de transition professionnelle, aux adultes qui souhaitent approfondir leurs connaissances dans le domaine de la Maintenance Informatique et obtenir un certificat. La formation en Montage Vidéo permet aux participants d’acquérir les compétences de base pour réaliser des vidéos professionnelles. Elle couvre les principes du montage, la gestion des séquences, l'ajout d'effets visuels et sonores, et l'exportation de projets finalisés. Les participants apprendront à manipuler les outils de montage, à structurer des récits visuels et à intégrer des effets et transitions pour des vidéos dynamiques et captivantes. Elle permet d’acquérir les armes nécessaires en termes de compétences, d’aptitudes et de méthodologie de travail pour vous rendre opérationnel en 03 mois de formation continue en cours du soir.",
    goals: [
      "Maîtriser les bases du montage vidéo et de la narration visuelle.",
      "Apprendre à utiliser un logiciel de montage pour assembler, couper et ajuster des séquences.",
      "Découvrir les techniques d'ajout d'effets, de transitions, et de bande sonore.",
      "Comprendre les étapes d'exportation et de préparation d’un projet pour différentes plateformes.",
    ],
    openings: [
      "Réaliser des montages vidéo simples pour des projets personnels ou professionnels",
      "Utiliser un logiciel de montage pour manipuler les séquences vidéo, audio et visuelles",
      "Appliquer des effets visuels de base et ajouter une bande sonore adaptée",
      "Exporter des vidéos optimisées pour divers supports (réseaux sociaux, plateformes de streaming, présentations)"
    ],
    target_audience: "Cette formation s'adresse aux débutants souhaitant acquérir des compétences de base en maintenance informatique, aux techniciens débutants en informatique, ainsi qu’aux professionnels d’autres domaines souhaitant se former à la gestion des équipements informatiques.",
    materials: [
      "Ordinateur performant : Pour exécuter les logiciels de montage vidéo sans ralentissement. ",
      "Logiciel de montage : Adobe Premiere Pro, Final Cut Pro, ou DaVinci Resolve.",
      "Casque audio (facultatif) : Pour affiner la bande sonore et la synchronisation audio.",
      "Stockage externe (facultatif) : Pour stocker des fichiers vidéo de grande taille.",
    ],
    preview: "Cette formation courte et pratique permet d’acquérir des compétences essentielles en montage vidéo, utiles pour créer des contenus visuels percutants et professionnels dans divers secteurs d'activité.",
    duration: "3 mois",
    cost: "300 000 FCFA",
    beginning: "02 Mars 2026"
  },
  {
    id: 13,
    title: "Graphisme",
    description: "Cette formation s’adapte aux adultes en quête d’emploi ou de nouvelles compétences, en reconversion professionnelle et aux cadres qui souhaitent approfondir leurs connaissances dans le domaine du Design Graphique et décrocher un certificat.",
    illustration: WebDevelopmentIllustration,
    departement: null,
    label: null,
    presentation: "Cette formation s’adapte aux adultes en quête d’emploi ou de nouvelles compétences, en reconversion professionnelle et aux cadres qui souhaitent approfondir leurs connaissances dans le domaine du Design Graphique et décrocher un certificat. La formation en Graphisme initie les participants aux bases de la conception visuelle et aux outils nécessaires pour créer des supports graphiques impactant. Elle aborde les principes fondamentaux du design, la théorie des couleurs, la typographie, et la composition visuelle. Les participants apprendront à utiliser les logiciels de création graphique pour concevoir des logos, affiches, bannières et autres supports de communication. Elle permet d’acquérir les armes nécessaires en termes de compétences, d’aptitudes et de méthodologie de travail pour vous rendre opérationnel en 03 mois de formation continue en cours du soir.",
    goals: [
      "Maîtriser les bases de la maintenance préventive et corrective.",
      "Comprendre les bases du graphisme et les principes de la communication visuelle.",
      "Maîtriser l’utilisation des logiciels de conception graphique (Photoshop, Illustrator, etc.).",
      "Apprendre à structurer des compositions harmonieuses et adaptées aux différents types de supports.",
      "Découvrir les bonnes pratiques en matière de choix de couleurs, de typographie et d’illustrations.",
    ],
    openings: [
      "Concevoir des supports graphiques simples et professionnels",
      "Utiliser les outils et fonctionnalités de base des logiciels de graphisme",
      "Créer des visuels attrayants pour des applications variées (print, web, réseaux sociaux)",
      "Savoir adapter les créations graphiques aux besoins spécifiques de chaque projet"
    ],
    target_audience: "Cette formation s'adresse aux débutants souhaitant acquérir des compétences de base en graphisme, aux professionnels souhaitant enrichir leur profil, ainsi qu’aux créateurs de contenu et entrepreneurs ayant besoin de supports graphiques.",
    materials: [
      "Ordinateur : Suffisamment puissant pour faire tourner les logiciels de graphisme.",
      "Logiciels de graphisme : Adobe Photoshop, Illustrator, ou des alternatives comme Canva pour les créations de base.",
      "Tablette graphique (facultatif) : Pour ceux souhaitant approfondir le dessin numérique.",
    ],
    preview: "Cette formation en graphisme permet de développer rapidement des compétences créatives et techniques, essentielles pour produire des visuels de qualité, adaptés aux besoins actuels du marché.",
    duration: "3 mois",
    cost: "300 000 FCFA",
    beginning: "02 Mars 2026"
  },
  {
    id: 14,
    title: "Web Design",
    description: "Cette formation est destinée aux personnes en quête d'emploi, en situation de transition professionnelle, aux adultes qui souhaitent approfondir leurs connaissances dans le domaine du Web Design et obtenir un certificat.",
    illustration: WebDesignIllustration,
    departement: null,
    label: null,
    presentation: "Cette formation s’adapte aux adultes en quête d’emploi ou de nouvelles compétences, en reconversion professionnelle et aux cadres qui souhaitent approfondir leurs connaissances dans le domaine du Web Design et décrocher un certificat. La formation en Web Design permet aux participants d'acquérir les compétences nécessaires pour concevoir des interfaces de sites web esthétiques, intuitives et adaptées aux utilisateurs. Elle aborde les fondamentaux de l’ergonomie, du design d'interface (UI) et de l'expérience utilisateur (UX). Les participants apprendront à utiliser des outils de conception pour créer des maquettes visuelles de sites web et maîtriseront les bases de la conception responsive, adaptée aux différents écrans. Elle permet d’acquérir les armes nécessaires en termes de compétences, d’aptitudes et de méthodologie de travail pour vous rendre opérationnel en 03 mois de formation continue en cours du soir.",
    goals: [
      "Comprendre les principes de base du Web Design et de l’ergonomie des interfaces.",
      "Maîtriser l’utilisation d’outils de création de maquettes (Adobe XD, Figma).",
      "Apprendre à concevoir des interfaces visuellement harmonieuses et fonctionnelles.",
      "Découvrir les bases de la conception responsive pour adapter les sites aux appareils mobiles et tablettes.",
    ],
    openings: [
      "Concevoir des maquettes de sites web esthétiques et fonctionnelles",
      "Utiliser les outils de design pour créer des interfaces adaptées aux besoins des utilisateurs",
      "Appliquer les principes d'ergonomie pour améliorer l'expérience utilisateur",
      "Savoir collaborer avec des développeurs pour la mise en œuvre des designs créés"
    ],
    target_audience: "Cette formation s'adresse aux débutants intéressés par la conception de sites web, aux designers souhaitant se spécialiser dans le web, et aux professionnels de la communication et du marketing digital.",
    materials: [
      "Ordinateur : Suffisamment puissant pour exécuter des logiciels de design.",
      "Logiciels de Web Design : Adobe XD, Figma, Lunacy ou Sketch pour les utilisateurs Mac.",
    ],
    preview: "Cette formation en Web Design offre les compétences essentielles pour créer des interfaces web modernes et fonctionnelles, en tenant compte de l'expérience utilisateur et des tendances actuelles du design digital.",
    duration: "3 mois",
    cost: "300 000 FCFA",
    beginning: "02 Mars 2026"
  }
];

