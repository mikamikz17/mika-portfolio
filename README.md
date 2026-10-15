# kael — portfolio

Refresh of https://mikamikz17.github.io/TEOPACO---FINAL-PORTFOLIO/ built with React + Vite.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static site in dist/
```

## Structure

- `index.html`, `about.html`, `background.html`, `projects.html`, `contact.html` — one entry per page, so the old URLs keep working. Each sets `<body data-page="...">`.
- `src/pages/` — page components. `src/components/Layout.jsx` — header (pill nav) and footer.
- `src/data/` — all text content (projects, resume, links). Edit content here.
- `src/components/reactbits/` — components from [React Bits](https://reactbits.dev) (MIT + Commons Clause): Split Text, Rotating Text, Bounce Cards, Circular Text, Tilted Card, Animated Content. Wrapped in `src/components/Motion.jsx`, which also handles reduced motion.
- `src/styles/styles.css` — design tokens and all styles.
- `public/assets/img/` — compressed screenshots (max 1400px). Full-size originals are in `design/originals/` and are not deployed.

## Deploy to GitHub Pages

`base: './'` is set in `vite.config.js`, so `dist/` works from any repo sub-path. Push the contents of `dist/` to the Pages branch (or use a GitHub Action that runs `npm run build`).

## Open items for the client

- LinkedIn profile URL (`src/data/site.js`, `LINKEDIN_URL`). The old link pointed to the LinkedIn feed.
- Real dates for the two future-dated jobs (`src/data/resume.js`, see TODO).
