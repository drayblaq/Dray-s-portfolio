export const profile = {
  name: "Alabi Oluwa Damilare Samuel",
  shortName: "Alabi Damilare",
  school: "Epitech Paris, PGE4",
  location: "Paris, Ile de France",
  email: "alabidamilare98@gmail.com",
  github: "https://github.com/drayblaq",
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
  body: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    name: "Cedar Training Center",
    url: "https://cedartrainingcenter.com/",
    urlLabel: "cedartrainingcenter.com",
    body:
      "A bilingual learning management system built for a training center, covering courses, enrolments and student progress in French and English. I also handled related Flutter delivery app work for the same client.",
    stack: ["Next.js", "Supabase", "Flutter", "i18n"],
  },
  {
    name: "Ebene",
    badge: "Live",
    url: "https://www.xwebene.shop/",
    urlLabel: "xwebene.shop",
    body:
      "A live Next.js site for a Cotonou clothing brand: product pages, brand storytelling and a mobile first layout. It started as my pitch for the brand and is now the site they run.",
    stack: ["Next.js", "React", "Client work"],
  },
];
