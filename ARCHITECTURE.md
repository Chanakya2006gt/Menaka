# System Architecture & Technical Specifications — Menaka Jewellers

## 1. Technical Stack
- **Framework**: React 18 / 19 with Vite (fast HMR, lean bundle, standard ESM)
- **Language**: TypeScript (strict type checking)
- **Styling**: Tailwind CSS + Custom CSS Variables for luxury theme tokens
- **Routing**: `react-router-dom` (v6) with scroll restoration and clean URL hierarchy
- **Icons**: `lucide-react` for lightweight, accessible SVG iconography
- **Testing & Verification**: Playwright E2E suite, Web Quality Audit, WCAG Accessibility check
- **Asset Pipeline**: Static WebP/PNG images directly in `public/assets/`, cropped from verified brand photography

## 2. Component Hierarchy & Directory Architecture
```
Menaka/
├── public/
│   ├── assets/
│   │   ├── logo.png
│   │   ├── hero.png
│   │   └── products/
│   │       ├── gold-temple-necklace.png
│   │       ├── diamond-emerald-choker.png
│   │       ├── royal-diamond-vaddanam.png
│   │       ├── diamond-kada-bangle.png
│   │       ├── temple-lakshmi-haram.png
│   │       ├── antique-jhumkas.png
│   │       ├── bridal-heritage-choker.png
│   │       └── royal-sculpted-kada.png
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── WhatsAppFAB.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── VerifiedClaimsBanner.tsx
│   │   │   ├── CategoryGrid.tsx
│   │   │   ├── FeaturedProducts.tsx
│   │   │   ├── AboutHeritage.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── ui/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── WhatsAppButton.tsx
│   │   │   └── Badge.tsx
│   ├── data/
│   │   ├── categories.ts
│   │   └── products.ts
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── CollectionPage.tsx
│   │   ├── ProductDetailPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── styles/
│   │   └── index.css
│   ├── App.tsx
│   └── main.tsx
├── PRD.md
├── ARCHITECTURE.md
├── SECURITY.md
├── DESIGN.md
├── README.md
├── DECISION_LOG.md
└── package.json
```

## 3. Data Flow & Routing Strategy
- **Client-Side State**: Zero external state library needed; standard React Router route parameters (`useParams`) and local React hooks provide atomic reactivity.
- **Next.js Portability**:
  - `src/data/products.ts` & `src/data/categories.ts` are pure TypeScript objects and can be dropped into Next.js App Router (`/app/collection/[slug]/page.tsx` or `/app/product/[id]/page.tsx`) without refactoring.
  - No DOM-polluting libraries or complex framework-specific hooks.
  - Image paths are stored as clean relative URLs compatible with Next.js `<Image src="..." />`.

## 4. WhatsApp Deep Linking Architecture
Utility function generates encoded WhatsApp URI:
```typescript
export function buildWhatsAppEnquiryUrl(productName?: string, sku?: string): string {
  // Configurable placeholder phone number (Replace with active Menaka Jewellers business number)
  const PHONE_NUMBER = "919876543210"; 
  let message = "Namaste Menaka Jewellers, I am browsing your catalog and would like to enquire about your jewellery collection.";
  if (productName) {
    message = `Namaste Menaka Jewellers, I am interested in enquiring about "${productName}"${sku ? ` (Item: ${sku})` : ""}. Could you please share more details and availability?`;
  }
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}
```

## 5. Mobile-First Responsiveness Rules
- Breakpoints: Standard Tailwind `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px).
- Bottom Safe Area: Mobile sticky floating action bar and safe-area padding for modern iOS/Android handsets.
- Touch Targets: All interactive buttons and category pills maintain a minimum 44x44px touch target area.
