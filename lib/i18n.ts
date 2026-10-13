export type Lang = "en" | "fr";

export const translations = {
  en: {
    nav: { about: "about", work: "work", skills: "skills", contact: "contact" },
    eyebrow: {
      role: "Learning full stack & DevOps",
      experience: "Shipping real products along the way",
    },
    hero: {
      lead:
        "I'm still learning full stack development and training to become a DevOps engineer, but I build and ship real products, not just classroom exercises. Flutter, Next.js and Supabase, based in Paris, currently studying at Epitech.",
      available: "Open to internships and freelance work",
      cta: "Get in touch",
    },
    about: {
      title: "Who am I?",
      lead: "A developer who ships what he builds",
      p1:
        "I'm new to full stack development, based in Paris and studying at Epitech (PGE4). I'm also learning to become a DevOps engineer, picking up both by building products that real people actually use.",
      p2:
        "I am Alabi Damilare. I treat code as a craft and a product decision at the same time: clean interfaces, fast apps, and a backend I can trust in production. Founder of Sedo, a parcel delivery app live for Cotonou, Benin.",
      p3:
        "I'm learning across the stack, from Flutter mobile apps to Next.js web apps, Supabase or Firebase backends, and Docker and CI/CD on the DevOps side, and I keep shipping side projects to learn faster.",
      facts: {
        school: "school",
        role: "role",
        roleValue: "Founder, Sedo",
        basedIn: "based in",
        languages: "languages",
        languagesValue: "French, English",
      },
    },
    work: {
      title: "Selected work",
      sedo: {
        tag: "Founder",
        note: "launching on Google Play and the App Store",
        body:
          "A parcel delivery app connecting customers with independent riders in Cotonou, Benin. I designed the product, built the Flutter apps for customers and riders, the Supabase backend and the Next.js landing site, and I am now preparing the store launch.",
        bullets: [
          "Live order tracking and rider assignment",
          "Auth, pricing and delivery state machine on Supabase",
          "Built for a market where most deliveries are still arranged by phone",
        ],
      },
    },
    skills: { title: "Skills" },
    contact: {
      title: "Contact",
      lead:
        "Looking for a developer who ships. Happy to talk about internships, freelance work or Sedo.",
      labels: { email: "email", linkedin: "linkedin", instagram: "instagram", location: "location" },
    },
  },
  fr: {
    nav: { about: "profil", work: "projets", skills: "compétences", contact: "contact" },
    eyebrow: {
      role: "J'apprends le full stack & le DevOps",
      experience: "Je livre de vrais produits en chemin",
    },
    hero: {
      lead:
        "J'apprends encore le développement full stack et je me forme pour devenir ingénieur DevOps, mais je construis et je livre de vrais produits, pas juste des exercices d'école. Flutter, Next.js et Supabase, basé à Paris, actuellement étudiant à Epitech.",
      available: "Ouvert aux stages et missions freelance",
      cta: "Me contacter",
    },
    about: {
      title: "Qui suis-je ?",
      lead: "Un développeur qui livre ce qu'il construit",
      p1:
        "Je débute en développement full stack, basé à Paris et étudiant à Epitech (PGE4). J'apprends aussi à devenir ingénieur DevOps, les deux en construisant des produits utilisés par de vraies personnes.",
      p2:
        "Je suis Alabi Damilare. Je vois le code comme un artisanat autant qu'une décision produit : des interfaces propres, des applis rapides, et un backend fiable en production. Fondateur de Sedo, une app de livraison de colis en service à Cotonou, au Bénin.",
      p3:
        "J'apprends sur toute la stack, des apps mobiles Flutter aux apps web Next.js, aux backends Supabase ou Firebase, et côté DevOps avec Docker et le CI/CD, et je continue de livrer des projets perso pour apprendre plus vite.",
      facts: {
        school: "école",
        role: "rôle",
        roleValue: "Fondateur, Sedo",
        basedIn: "basé à",
        languages: "langues",
        languagesValue: "Français, Anglais",
      },
    },
    work: {
      title: "Projets sélectionnés",
      sedo: {
        tag: "Fondateur",
        note: "lancement prévu sur Google Play et l'App Store",
        body:
          "Une app de livraison de colis qui connecte des clients à des livreurs indépendants à Cotonou, au Bénin. J'ai conçu le produit, développé les apps Flutter pour les clients et les livreurs, le backend Supabase et le site Next.js, et je prépare maintenant le lancement sur les stores.",
        bullets: [
          "Suivi de commande en direct et attribution des livreurs",
          "Authentification, tarification et état des livraisons sur Supabase",
          "Pensé pour un marché où la plupart des livraisons se gèrent encore par téléphone",
        ],
      },
    },
    skills: { title: "Compétences" },
    contact: {
      title: "Contact",
      lead:
        "À la recherche d'un développeur qui livre. Je discute volontiers stages, freelance ou Sedo.",
      labels: { email: "email", linkedin: "linkedin", instagram: "instagram", location: "localisation" },
    },
  },
} as const;
