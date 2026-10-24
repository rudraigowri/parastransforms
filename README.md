# ParasTransforms website

Next.js 16 (App Router) + Tailwind CSS 4 + Motion. Design rules live in [`../design.md`](../design.md).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages are static)
npm run lint
```

## Structure

```
src/
  app/                  routes: / about services testimonials blog contact, plus not-found, icon, sitemap, robots
    globals.css         design tokens (@theme), base styles, utilities
  components/
    home/               home page sections (Hero, Pillars, TransformationIntro, TrustBar, JourneyQuote)
    Navbar, Footer, PageHero, FinalCta, Button, Logo, Script, EmptyState, ContactForm
    icons.tsx           lotus, gold leaf and journey line-art SVGs
    motion.tsx          client-side scroll reveal and brush-circle draw
  content/              all editable copy and data
  assets/images/        portraits (placeholders, see below)
```

## Before launch

- **Photos:** `src/assets/images/paras-*.jpg` are low-resolution crops from the design mockup. Replace them with real photography, keeping the same file names.
- **Contact:** set `email` and/or `bookingUrl` in `src/content/site.ts`. While both are empty, the Contact page says booking opens soon.
- **Site URL:** set `NEXT_PUBLIC_SITE_URL` (used for metadata, sitemap and robots).
- **Testimonials / blog:** add entries to `src/content/testimonials.ts` and `src/content/posts.ts`. Each page shows a placeholder while its list is empty.
