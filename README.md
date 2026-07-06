# Company Portfolio

Production-grade React company portfolio built with Vite, Tailwind CSS, Framer Motion, GSAP, Lenis, and React Router.

## Scripts

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Environment

Copy `.env.example` to `.env` and provide EmailJS and Google Maps keys.

## Notes

- Uses code-split routes with `React.lazy` and `Suspense`.
- All component content is sourced from `src/data/*.js`.
- `MainLayout` wraps all pages with navbar, footer, and progress bar.
