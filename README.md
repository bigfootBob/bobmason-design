# bobmason-design

Source for my personal portfolio site, [bobmason.design](https://bobmason.design): case studies, a lab of side projects, my résumé timeline and testimonials.

## Tech stack

- [React 19](https://react.dev) + [Vite](https://vite.dev)
- [React Router](https://reactrouter.com) for routing
- [Framer Motion](https://motion.dev) for animation
- Sass (CSS Modules) for styling
- [Lucide](https://lucide.dev) icons
- [Cloudinary](https://cloudinary.com) for image hosting
- ESLint for linting

## Getting started

Requires Node.js 20.19 or newer.

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Scripts

| Command           | What it does                         |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server with hot reload |
| `npm run build`   | Build for production into `dist/`    |
| `npm run preview` | Serve the production build locally   |
| `npm run lint`    | Run ESLint                           |

## Project structure

```
src/
├── pages/        # Routes: Home, Lab, ProjectBrief (case studies), Timer, NotFound
├── components/
│   ├── layout/   # Header, Hero, Footer, Testimonials, Comms
│   ├── ui/       # Reusable pieces: cards, buttons, résumé timeline
│   ├── utils/    # SEO, analytics, scroll helpers
│   └── accessibility/
├── data/         # Content: projects, lab, experience, testimonials
├── styles/       # Global Sass and variables
└── utils/
```

Most site content lives in `src/data/`, so updating projects or experience usually means editing those files rather than components.

## Accessibility & security

The site includes a skip link and is checked with WCAG and security scans. A Content Security Policy is set in `index.html`.

## Contact

[LinkedIn](https://www.linkedin.com/in/robert-bob-mason/) · [GitHub](https://github.com/BigfootBob)
