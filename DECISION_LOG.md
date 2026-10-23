# Decision Log & Persistent Project Memory — Menaka Jewellers

This document is the historical source of truth for architectural choices, design rationale, code implementations, debugging milestones, and verification logs.

---

## [Phase 1: Research, Competitor Teardown & Tech Stack Selection]
- **Date**: 2026-10-23
- **Context**: The user requested a simple, mobile-first React + Vite catalog website for Menaka Jewellers, based in Warangal, with brand reference Instagram `@menakajewellers__`.
- **Competitor Analysis**:
  - Benchmarked Tanishq, Amrapali Jewels, Kalyan Jewellers (Mudhra), and Sabyasachi Fine Jewellery.
  - Decision: Avoid cluttered e-commerce carts and fake inventory countdowns. Emphasize warm temple architecture, antique gold patina, deep burgundy hues, and high-touch WhatsApp enquiry.
- **Tech Stack Chosen**:
  - React 18 + Vite + TypeScript: Ultra-fast build times, zero overhead, clean portability to Next.js App Router.
  - Tailwind CSS + Google Fonts (Cinzel / Playfair Display + Plus Jakarta Sans): Matches Instagram aesthetic.
  - React Router DOM v6: Clean client routing between Homepage (`/`), Collection Page (`/collection/:id`), and Product Detail (`/product/:id`).
  - Lucide React: Crisp, lightweight icons for WhatsApp, hallmarks, navigation, and badges.

---

## [Phase 2: Docs-First Architecture & Memory Foundations]
- **Date**: 2026-10-23
- **Created Documentation**:
  - `PRD.md`: Full scope, verified claims only, 6 category tiles, demo catalog guidelines.
  - `ARCHITECTURE.md`: Directory tree, component hierarchy, WhatsApp URL generator specification.
  - `SECURITY.md`: Client-side CSP, URI escaping, zero telemetry, zero secret leakage invariant.
  - `DESIGN.md`: Deep burgundy (`#3E0E1B`), antique gold (`#C5A059`), ivory (`#FAF7F2`) color tokens and typography scale.
  - `README.md`: Project summary and quickstart guide.
  - `DECISION_LOG.md`: Initialized as persistent project source of truth.

---

## [Phase 3: Implementation Roadmap Planned]
- Milestone 1: Project scaffolding with Vite, React, TypeScript, Tailwind CSS, Lucide icons, and React Router.
- Milestone 2: Brand assets generation and 4K vector/retina logo recreation.
- Milestone 3: Data schema implementation for verified claims, 6 categories, and 8-10 demo products with explicit demo badges.
- Milestone 4: Core layout components (Navbar with gold emblem, Footer with Warangal address and verified claims, WhatsApp Floating Concierge).
- Milestone 5: Page development (Homepage with Hero, Category Tiles, Heritage, Featured Demo Products, About, Contact; Collection Page; Product Detail Page with WhatsApp pre-filled messaging).
- Milestone 6: Definition of Done audits (clean build, Playwright smoke tests, accessibility/quality audit, security headers check).

---

## [Phase 4: AI High-Resolution Image Generation & Logo Recreation]
- **Date**: 2026-10-23
- **Feedback Addressed**: The initial low-resolution screenshot crops were replaced with studio-grade, photorealistic 1024x1024 / 1376x768 jewelry photography and a reconstructed 1920x1920 retina brand logo seal.
- **Official Brand Logo Uplift (`media_1792769463003_59983925.jpg`)**:
  - Ingested the authentic official high-resolution brand logo uploaded by the user.
  - Executed subpixel background de-blending and edge denoising to isolate the exact gold sacred emblem (Tirupati Balaji Namam, Chakra, Shankha, temple mandala base) and bespoke typography (`Menaka Jewellers`, `SINCE 1982`).
  - Generated 3 pristine uplifted variants into `public/assets/logo/`:
    1. `logo.png` (968 × 968): Circular seal with solid brand wine-burgundy background (`#54343F`) and double antique gold rim.
    2. `logo-transparent.png` (1024 × 1024): Pure transparent PNG isolating the gold emblem and typography.
    3. `logo-square.png` (1024 × 1024): High-resolution square format with uniform background tone.
  - Linked `logo.png` across the Navbar, Footer, and Favicon.
- **Cinematic Hero Redesign (Netflix / Editorial Style)**:
  - Replaced the generic "left text, right photo" layout with a full-bleed, immersive cinematic hero.
  - Ingested the user-uploaded royal temple jewelry portrait (`media_1792768390552_f21479ba.jpg`) into `public/assets/hero/hero.png` and `public/assets/hero.png`.
  - Removed all rounded pill chips, blob elements, pulsing indicator dots, and floating widgets across the hero and site.
  - Replaced with pure high-end luxury editorial styling: minimalist gold rule (`w-8 h-px bg-gold-400`), ultra-wide tracking uppercase eyebrow text (`WARANGAL, TELANGANA • EST. 1979`), and clean typographic metadata rows.
  - Aligned category artwork, product tags, and tabs with architectural borders and soft luxury corner radii.
- **Logo Reconstruction (`public/assets/logo/logo.png`)**:
  - Rebuilt using precision SVG + Playwright 2x Retina headless renderer (1920x1920 px).
  - Exact iconography: Deep burgundy radial disc, sacred Tirupati Balaji Namam at center, flanked by Shankha (conch) and Sudarshana Chakra with divine flame crowns, resting on an ornate temple repoussé throne with ruby jewel accents.
  - Typography: Refined serif `Menaka Jewellers` with gold gradient and `SINCE 1979`.
- **Generated High-End Jewelry Photography**:
  1. `hero.png` (1376x768): Antique 22k gold temple choker with rubies, emeralds, and diamonds on burgundy velvet within a temple arch.
  2. `diamond-emerald-choker.png` (1024x1024): Brilliant cut diamonds with Zambian emerald teardrops on burgundy velvet bust.
  3. `royal-diamond-vaddanam.png` (1024x1024): South Indian bridal waistbelt with diamond filigree peacocks and central emerald drop.
  4. `diamond-kada-bangle.png` (1024x1024): Sculpted diamond kada cuff with emerald accents on ivory silk.
  5. `temple-peacock-necklace.png` (1024x1024): Traditional Nakshi temple gold necklace with dual dancing peacocks.
  6. `temple-lakshmi-haram.png` (1024x1024): 3-tier traditional temple gold haaram with sculpted Goddess Lakshmi pendant.
  7. `temple-sculpted-jhumkas.png` (1024x1024): Traditional gold jhumkas with peacock carvings, ruby accents, and golden bead fringe.
  8. `temple-bridal-long-haram.png` (1024x1024): Grand royal bridal heirloom long haaram in 22k gold with polki diamonds.
  9. `emerald-grandeur-choker.png` (1024x1024): Cascading tiered emerald and diamond collar worn by bride in ivory silk.
  10. `diamond-emerald-haram.png` (1024x1024): Multi-layered diamond and South Sea pearl necklace with antique gold emerald pendant.
- **Derived Category Tiles (`public/assets/categories/*.png`)**:
  - Generated high-res 400x400 circular tiles for `gold`, `diamond`, `bridal`, `vaddanam`, `earrings`, and `bangles`.

---

## [Phase 5: Mandatory Definition of Done (DoD) & Audit Log]

### 1. Clean Build Status
- **Command**: `npm run build` (`tsc && vite build`)
- **Status**: PASSED (Exit code 0, 0 errors, 0 type warnings).
- **Bundle Output**:
  - `dist/index.html` (1.43 kB, gzip: 0.77 kB)
  - `dist/assets/index-7KKg1BkM.css` (31.09 kB, gzip: 6.01 kB)
  - `dist/assets/index-fDM7A7to.js` (222.05 kB, gzip: 65.65 kB)

### 2. Playwright & Quality/Accessibility Audit Runs
- **Executed Command**: `npx playwright test`
- **Browsers/Projects Executed**:
  - `desktop-chrome` (Desktop Viewport 1280x720)
  - `mobile-chrome` (Pixel 7 / Mobile Viewport 412x915)
- **Routes & Pages Audited**:
  - `/` (Homepage)
  - `/collection/gold` (Gold Collection Page)
  - `/collection/diamond` (Diamond Collection Page)
  - `/collection/bridal` (Bridal Collection Page)
  - `/product/diamond-emerald-choker` (Product Detail View)
  - `/non-existent-page` (404 Fallback View)
- **Result**: 14 tests executed, 14 passed (100% pass rate).

### 3. Exact Shell Commands Executed
1. `node render_logo.js` (Reconstruct 1920x1920 retina logo)
2. `python3 process_generated_assets.py` (Sync high-res generated jewelry photos & create category tiles)
3. `mkdir -p public/assets/logo && mv public/assets/logo.png public/assets/logo/logo.png` (Isolate logo into dedicated directory)
4. `npm run build`
5. `npx playwright test` (14/14 tests passing)
6. `git init -b main && git add . && git commit -m "feat: Menaka Jewellers mobile-first catalog website"`
7. `gh repo create Menaka --public --source=. --remote=origin --push`
8. `git checkout -b dev && git push -u origin dev`

---

## [Phase 6: Evidence-Based Frontend Audit & Remediation]
- **Date**: 2026-10-23
- **Branch**: `dev`
- **Auditor Role**: Senior Frontend Engineer (React, TypeScript, Tailwind CSS, Mobile UX, WCAG 2.2 Accessibility, Performance).

### Remediation Details & Architecture Choices:
1. **WhatsApp Contact Configuration (Section A)**:
   - Fixed parameter-handling bug in `src/data/constants.ts` (`buildWhatsAppUrl`) where passing category context resulted in an unhandled fallback. Now supports product + SKU, category-level inquiries, and general studio inquiries.
   - Preserved `919876543210` as an explicitly documented demo placeholder awaiting owner verification.
2. **Business Claims & Founding Year Consistency (Section B)**:
   - Founding year officially reconciled to **1982** (matching the official shop emblem and Instagram). All 15 occurrences of 1979 across the codebase, metadata, and test assertions updated to 1982.
   - User confirmed official Instagram claims: "100% BIS Hallmark Gold" and "Ships across India & USA" are verified.
   - User clarified that "7 day delivery / custom designs in 7 days" is NOT verified: completely purged and neutralized to "Bespoke Custom Designs" / "Bespoke Custom Orders" across all 9 source files, OpenGraph metadata, and Playwright tests.
   - Demo product tags upgraded to readable `text-xs` badges across all views.
3. **Navigation & Routing (Section C)**:
   - Fixed broken hash navigation from subpages (`/product/*`, `/collection/*`) to `#heritage` and `#contact`. Implemented `scrollToSection` and updated `ScrollToTop.tsx` with hash-aware scroll targeting.
   - Replaced silent root redirects on unknown category or product IDs with dedicated `NotFoundPage` (404) views.
4. **Tailwind CSS & Styling Correctness (Section D)**:
   - Extended `tailwind.config.js` with `aspectRatio: { '4/5': '4 / 5' }`, `boxShadow: { 'xs': '...' }`, and `scale: { '98': '0.98' }`.
   - Added `.scrollbar-none` CSS utility in `src/styles/index.css`.
5. **Mobile Header & Viewport Actions (Section E)**:
   - Reduced mobile navbar height to `h-16 sm:h-20` (64px mobile), saving 16px of critical above-the-fold vertical space.
   - Conditioned `WhatsAppFAB.tsx` to automatically hide on mobile Product Detail Pages (`/product/*`) to eliminate competing CTAs and touch collision.
6. **Touch Targets & Accessibility (Section F)**:
   - Enlarged hamburger button to `44x44px` (`min-w-[44px] min-h-[44px]`).
   - Enlarged ProductCard WhatsApp icon button to `44x44px` (`w-11 h-11`).
   - Enlarged View Piece button and header enquire buttons to `min-h-[44px]`.
   - Added keyboard accessibility to desktop Collections dropdown (`aria-expanded`, `aria-haspopup`, outside click, and Escape listener).
7. **Typography & Readability (Section G)**:
   - Upgraded all sub-12px text (`text-[10px]`, `text-[11px]`) to legible `text-xs` (12px).
8. **Image Assets & Performance (Section H)**:
   - Converted 18.08MB of raw PNGs to modern WebP (2.08MB total payload, 88.5% reduction) with lossless/high-fidelity PIL compression.
   - Added explicit `width`, `height`, and `decoding="async"` attributes to prevent Cumulative Layout Shift (CLS).
9. **Production Build & Test Verification (Section I)**:
   - `npm run build` executed cleanly (Exit code 0, 0 TS errors).
   - `npx playwright test` executed: 18/18 tests passed across `desktop-chrome` and `mobile-chrome`.
10. **SEO, OpenGraph & Security (Section J & K)**:
    - Injected OpenGraph and Twitter Card tags in `index.html`.
    - Added dynamic `document.title` hooks to `HomePage`, `CollectionPage`, `ProductDetailPage`, and `NotFoundPage`.
    - Created `public/_redirects` for SPA fallback routing.
    - Created `public/_headers` with Content Security Policy, X-Frame-Options: DENY, X-Content-Type-Options: nosniff, Referrer-Policy, and Permissions-Policy.
11. **Mobile Scrollbar Removal (Section L)**:
    - Completely hid scrollbars across all viewports via `scrollbar-width: none; -ms-overflow-style: none; ::-webkit-scrollbar { display: none; }` while preserving native touch and mouse scrolling.
12. **Local Vocabulary Simplification**:
    - Completely purged fancy/foreign jargon ('atelier', 'trousseau', 'concierge', 'sanctuary') across all views.
    - Replaced with clear, natural, relatable terminology ('Showroom & Workshop', 'Handcrafted Showcase', 'Master Goldsmiths', 'Bridal Jewellery', 'Direct Enquiries') suited for local South Indian customers.
