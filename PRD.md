# Product Requirements Document (PRD) — Menaka Jewellers Digital Catalog

## 1. Executive Summary & Brand Intent
**Menaka Jewellers** (Warangal, Telangana) is a heritage South Indian jewellery house specializing in authentic temple jewellery, bespoke bridal trousseau pieces, certified BIS hallmark gold, and diamond collections.
The objective is to establish an ultra-refined, mobile-first digital showcase catalog that conveys their rich South Indian temple aesthetic (deep burgundy/maroon, antique gold, and warm ivory), showcases real pieces from their atelier, and drives direct WhatsApp consultations with zero friction.

## 2. Target Audience & Persona
- **South Indian Brides & Families**: Seeking authentic temple nakshi jewellery, antique harams, vaddanams (waistbelts), kadas, and diamond emerald chokers for weddings and auspicious occasions.
- **Global Diaspora (India & USA)**: Seeking certified hallmarked gold and custom 7-day handcrafted bespoke designs shipped safely to their doorstep.
- **Mobile Browsers**: 80%+ users arriving via Instagram `@menakajewellers__` on iOS/Android smartphones looking for instant product details and WhatsApp enquiry.

## 3. Top 4 Competitor Teardown & Benchmark
1. **Tanishq (Zoya / Mia / Rivaah)**: Comprehensive regional bridal catalogs, high trust BIS hallmark certification displays, but cluttered with complex filters and cart flows.
2. **Amrapali Jewels**: Deep craft storytelling, museum-grade photography, focus on antique repoussé and deity carvings.
3. **Kalyan Jewellers (Mudhra Temple Collection)**: Hyper-focused South Indian temple heritage, heavy gold bridal narratives.
4. **Sabyasachi Fine Jewellery**: Editorial lookbook, high-contrast burgundy/gold palettes, concierge consultation via WhatsApp and salon appointments.

## 4. Feature Checklist: Core Essentials vs. Differentiating Moat
| Feature | Type | Status & Implementation |
| :--- | :--- | :--- |
| **Mobile-First Luxury Catalog** | Must-Have Core | Responsive 1-column mobile / 3-column desktop layout with sticky navigation & enquiry CTAs |
| **Temple Jewellery Aesthetic** | Must-Have Core | Rich Burgundy (`#3E0E1B`), Antique Gold (`#C5A059`, `#D4AF37`), Ivory (`#FAF7F2`) |
| **6 Category Navigation** | Must-Have Core | Gold, Diamond, Bridal, Vaddanam, Earrings, Bangles |
| **Product Detail Experience** | Must-Have Core | Large imagery, verified descriptions, 3 related items, clear `[Demo Catalog Item]` tags |
| **Instant WhatsApp Concierge** | Differentiating Moat | One-tap pre-filled WhatsApp enquiry passing exact Product Name and SKU |
| **Zero-Fluff Honesty Guardrail** | Differentiating Moat | Strict adherence to verified claims only (Zero invented prices, weights, or awards) |
| **Next.js Portability** | Architectural Core | Clean component separation, strict TypeScript types, zero runtime lock-in |

## 5. Verified Brand Claims & Content Rules
1. **"Crafting elegance since 1979"** (Heritage foundation)
2. **"100% BIS Hallmark Gold"** (Hallmark authenticity assurance)
3. **"Custom designs ready in 7 days"** (Bespoke atelier turnaround)
4. **"Ships across India & USA"** (Global courier delivery)
5. **"Based in Warangal"** (Heritage origin in Telangana)
*Guardrail*: Absolutely no invented pricing, gold weights, purity percentages, false customer numbers, or mock awards.

## 6. Page Specifications & User Flows
1. **Homepage (`/`)**:
   - Hero Section: Editorial imagery, brand tagline, WhatsApp consultation CTA.
   - Verified Trust Ribbon: 5 verified claims highlighted in an elegant antique banner.
   - 6 Category Tiles: Gold, Diamond, Bridal, Vaddanam, Earrings, Bangles.
   - Featured Showcase: 6–8 curated demo items.
   - Heritage & About Section: Rooted in Warangal's temple architecture and artisanal legacy.
   - Contact & Atelier Section: Warangal location, WhatsApp direct connect, consultation hours.
   - Footer: Verified claims, quick links, Instagram handle reference `@menakajewellers__`.
2. **Collection / Category Page (`/collection/:categoryId`)**:
   - Dynamic category title, curated collection description.
   - Clean product grid showcasing relevant demo pieces.
   - Easy category switcher pill bar.
3. **Product Detail View (`/product/:productId`)**:
   - High-resolution zoomable/full-view photograph.
   - Product title, category badge, demo disclosure badge.
   - Narrative craft description.
   - Direct "Enquire on WhatsApp" button with custom pre-filled message URL.
   - 3 Related products from the atelier.

## 7. Acceptance Criteria & Success Metrics
- 100% clean TypeScript build without errors.
- Flawless mobile rendering on 375px, 390px, 412px, 768px, and 1280px+.
- Fast load speed with WebP optimized photography.
- Fully accessible keyboard navigation and WCAG 2.2 contrast compliance.
