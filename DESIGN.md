# Design System & Aesthetic Guidelines — Menaka Jewellers

## 1. Aesthetic Identity & Creative Direction
- **Heritage**: Traditional South Indian Temple Jewellery, Kakatiya/Dravidian stone carvings, Nakshi handcrafted gold, regal emeralds, and uncut diamonds.
- **Mood**: Timeless, regal, sacred, artisanal, whisper-luxury (understated opulence, not flashy ecommerce).
- **Core Archetype**: The Heritage Atelier — warm, personal, deeply authentic.

## 2. Color Palette Tokens
Derived directly from Menaka Jewellers' official brand assets and Instagram identity:

| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| `color-burgundy-900` | `#2D0A14` | Deepest background accents, dark footer, contrast headers |
| `color-burgundy-800` | `#3E0E1B` | Primary brand deep maroon / burgundy, hero card backdrops |
| `color-burgundy-700` | `#581427` | Borders, subtle burgundy overlays |
| `color-gold-500` | `#D4AF37` | Vibrant polished antique gold for CTAs and highlights |
| `color-gold-400` | `#C5A059` | Muted antique gold for borders, labels, and iconography |
| `color-gold-300` | `#E8D19F` | Pale gold shimmer, hover accents, subtle dividers |
| `color-ivory-50` | `#FAF7F2` | Primary page background (warm ivory / raw silk tone) |
| `color-ivory-100` | `#F3EDE4` | Card surface, subtle container backgrounds |
| `color-charcoal-900`| `#1A1616` | Main body typography (softer than harsh pure black) |
| `color-charcoal-600`| `#544E4D` | Secondary body text and metadata |

## 3. Typography Scale & Font Pairings
- **Headings (Display / Serif)**: `Cinzel` / `Playfair Display` / `Cormorant Garamond` (classic temple architecture letterforms, high contrast, regal).
- **Body & Subtitles (Sans-Serif)**: `Plus Jakarta Sans` or `Inter` (neutral, crisp, highly legible on small mobile screens).
- **Scale**:
  - Hero Heading: `clamp(2rem, 5vw, 3.5rem)`
  - Section Title: `clamp(1.5rem, 3.5vw, 2.25rem)`
  - Subtitle / Eyebrow: `0.75rem` - `0.875rem` uppercase with wide letter-spacing (`tracking-widest`)
  - Body Text: `1rem` (16px base) with relaxed line-height (1.6)

## 4. UI Components & Layout Principles
- **Mobile-First Geometry**:
  - Single column fluid flow with generous touch padding (16px horizontal margins).
  - Cards feature subtle 1px antique gold borders (`border-gold-400/20`) on warm ivory or deep burgundy.
  - Image ratios: 1:1 square or 4:5 portrait to preserve jewellery aspect ratios without cropping stones or pendants.
- **Photography-First**:
  - Jewellery images take center stage with rich shadows and soft warmth.
  - No harsh bright white drop-shadows; warm ambient lighting.
- **Micro-Interactions**:
  - Gentle image zoom on card hover (`scale-102` with 300ms cubic-bezier transition).
  - Clear tactile focus rings on accessible navigation.
  - Unobtrusive floating WhatsApp concierge for mobile browsers.
