# Portfolio, Next.js App Router

Static portfolio site. No database, no env vars. Content lives in `lib/content.ts`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

- `app/layout.tsx` root layout, metadata, Google Fonts
- `app/page.tsx` the whole page (nav, hero, about, work, skills, contact)
- `app/globals.css` all styling, dark theme tokens at the top under `:root`
- `lib/content.ts` your text, links and project list, edit here first
- `public/sedo-home.jpeg` Sedo app screenshot

## Deploy to GitHub and Vercel

1. `git init && git add . && git commit -m "portfolio"`
2. Create an empty repo on GitHub, then:
   `git remote add origin git@github.com:drayblaq/<repo>.git`
   `git branch -M main && git push -u origin main`
3. On vercel.com, New Project, import the repo. Framework preset detects Next.js. Build command
   `next build`, no env vars needed. Deploy.
4. Optional: add your domain in Vercel, Settings, Domains.

## Notes

- Accent color, background and text colors are CSS variables in `globals.css`.
- Replace `public/sedo-home.jpeg` with a higher resolution export when you have one, and add more
  screenshots by duplicating the `.flagship__shot` image block.
