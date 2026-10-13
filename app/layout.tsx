import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alabi Oluwa Damilare Samuel | Learning full stack & DevOps",
  description:
    "Learning full stack development and training to become a DevOps engineer, based in Paris. Flutter, Next.js and Supabase. Founder of Sedo, a parcel delivery app for Cotonou, Benin.",
  openGraph: {
    title: "Alabi Oluwa Damilare Samuel",
    description:
      "Learning full stack & DevOps, based in Paris. Flutter, Next.js and Supabase. Founder of Sedo.",
    type: "website",
  },
};

const THEME_INIT_SCRIPT = `
  try {
    var t = localStorage.getItem("theme");
    if (t === "light") document.documentElement.setAttribute("data-theme", "light");
  } catch (e) {}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
