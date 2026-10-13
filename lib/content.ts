export const profile = {
  name: "Alabi Oluwa Damilare Samuel",
  shortName: "Alabi Damilare",
  school: "Epitech Paris, PGE4",
  location: "Paris, Ile de France",
  email: "damilare.alabi.dev@gmail.com",
  linkedin:
    "https://www.linkedin.com/in/alabi-damilare-2b500227b/recent-activity/all/?skipRedirect=true",
  instagram: "https://www.instagram.com/dray_blaq/",
  available: true,
};

export const skills = [
  "Flutter / Dart",
  "Next.js / React",
  "Supabase",
  "Firebase",
  "C / C++",
  "Git",
  "Docker",
  "Claude Code",
];

export type Project = {
  name: string;
  badge?: string;
  note?: string;
  url: string;
  urlLabel: string;
  body: { en: string; fr: string };
  stack: string[];
};

export const projects: Project[] = [
  {
    name: "Cedar Training Center",
    url: "https://cedartrainingcenter.com/",
    urlLabel: "cedartrainingcenter.com",
    body: {
      en:
        "A bilingual learning management system built for a training center, covering courses, enrolments and student progress in French and English. I also handled related Flutter delivery app work for the same client.",
      fr:
        "Un système de gestion de formation bilingue pour un centre de formation, couvrant les cours, les inscriptions et le suivi des élèves en français et en anglais. J'ai aussi développé une app Flutter de livraison pour le même client.",
    },
    stack: ["Next.js", "Supabase", "Flutter", "i18n"],
  },
  {
    name: "Ebene",
    badge: "Live",
    url: "https://www.xwebene.shop/",
    urlLabel: "xwebene.shop",
    body: {
      en:
        "A live Next.js site for a Cotonou clothing brand: product pages, brand storytelling and a mobile first layout. It started as my pitch for the brand and is now the site they run.",
      fr:
        "Un site Next.js en production pour une marque de vêtements à Cotonou : pages produits, storytelling de marque et une mise en page mobile first. C'était un pitch au départ, c'est maintenant leur site en ligne.",
    },
    stack: ["Next.js", "React", "Client work"],
  },
];
