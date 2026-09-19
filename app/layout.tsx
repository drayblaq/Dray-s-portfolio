import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alabi Oluwa Damilare Samuel | Full stack & mobile developer",
  description:
    "Junior full stack and mobile developer in Paris. Flutter, Next.js and Supabase. Founder of Sedo, a parcel delivery app for Cotonou, Benin.",
  openGraph: {
    title: "Alabi Oluwa Damilare Samuel",
    description:
      "Flutter, Next.js and Supabase developer based in Paris. Founder of Sedo.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
