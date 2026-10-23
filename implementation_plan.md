# Implementation Plan — Menaka Jewellers Mobile-First Catalog

## Overview
Implement a mobile-first, temple jewellery catalog for Menaka Jewellers (Warangal) built on React + Vite + TypeScript + Tailwind CSS, with zero backend and WhatsApp-driven customer enquiry.

---

## Proposed Changes

### Milestone 1: Vite + React + TypeScript Project Scaffolding
- Initialize Vite project with `@vitejs/plugin-react`.
- Configure `tailwind.config.js` with bespoke burgundy, antique gold, and ivory palette, plus custom serif typography.
- Setup `react-router-dom` and `lucide-react`.

### Milestone 2: Authentic Brand Asset Extraction & Processing
- Crop high-resolution jewellery photographs and logo from the 4 user-uploaded Instagram screenshots (`media_1792763334974_e2849065.png`, `media_1792763334978_c7e08c12.png`, `media_1792763335030_31fce923.png`, `media_1792763335061_c1e924e6.png`).
- Produce optimized assets in `public/assets/` for:
  - Brand Logo (Emblem & Typography)
  - Hero Jewellery Banner
  - 6 Category Icons/Images: Gold, Diamond, Bridal, Vaddanam, Earrings, Bangles
  - 8-10 Curated Demo Products (Diamond Kada, Emerald Grandeur Choker, Royal Diamond Vaddanam, Temple Peacock Necklace, Antique Goddess Lakshmi Haram, Sculpted Temple Jhumkas, Bridal Heritage Choker, Diamond Solitaire Kada).

### Milestone 3: TypeScript Data Models & Constants
- `src/data/constants.ts`:
  - Verified claims: "Crafting elegance since 1979", "100% BIS Hallmark Gold", "Custom designs ready in 7 days", "Ships across India & USA", "Based in Warangal".
  - Configurable placeholder WhatsApp number with clear instructions.
- `src/data/categories.ts`:
  - 6 required categories (Gold, Diamond, Bridal, Vaddanam, Earrings, Bangles) with IDs, titles, descriptions, and thumbnails.
- `src/data/products.ts`:
  - 8–10 demo products with title, categoryId, short narrative description, image path, `isDemo: true`, and SKU.

### Milestone 4: Reusable UI & Layout Components
- `Navbar.tsx`: Mobile header with brand logo, quick category navigation drawer, and direct WhatsApp contact link.
- `Footer.tsx`: Rich burgundy aesthetic, Warangal atelier location, verified claims, copyright, Instagram link.
- `WhatsAppButton.tsx` & `WhatsAppFAB.tsx`: Pre-filled message generator opening `wa.me` in a new tab.
- `ProductCard.tsx`: Photography-centric card with subtle antique gold hover accents and `Demo Piece` label.

### Milestone 5: Page Implementation
- `HomePage.tsx`:
  - Hero with high-resolution jewellery background and headline.
  - Verified Trust Ribbon (5 claims with gold accents).
  - 6 Category Tiles grid.
  - Featured Demo Products showcase.
  - About Heritage section ("Rooted in Warangal since 1979").
  - Contact section with WhatsApp button and Warangal studio info.
- `CollectionPage.tsx`:
  - Category header and filter pills.
  - Responsive grid of jewellery pieces.
- `ProductDetailPage.tsx`:
  - Large photography view.
  - Verified details, demo disclaimer badge, WhatsApp enquiry button with pre-filled message including product name and SKU.
  - 3 Related products from the atelier.
- Scroll-to-top handler on route changes.

### Milestone 6: Definition of Done & Audits
- Verify `npm run build` passes cleanly with zero TypeScript errors.
- Run Playwright test suite for all routes (`/`, `/collection/:id`, `/product/:id`).
- Run web quality and accessibility tests.
- Record all commands, URLs, and outcomes into `DECISION_LOG.md`.

---

## Verification Plan

### Automated Tests
- Run `npm run build` to verify clean production compile.
- Create Playwright test script `tests/smoke.spec.ts` testing:
  - Homepage loads with hero, 6 categories, verified claims, featured products, about, contact, footer.
  - Clicking a category tile navigates to `/collection/:id` with matching products.
  - Clicking a product card navigates to `/product/:id`.
  - Product detail page displays large image, demo tag, and WhatsApp enquiry button with valid pre-filled URL.
  - Mobile viewport (375x667) renders without horizontal overflow or clipped text.

### Manual / Browser Verification
- Open in Playwright browser or local dev server.
- Inspect responsive layout on mobile (375px) and desktop (1280px).
- Verify color contrast (Burgundy, Gold, Ivory).
