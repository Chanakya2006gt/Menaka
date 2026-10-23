/**
 * Product Catalog Data — Menaka Jewellers
 * 
 * Strict Honesty Invariant:
 * - All products are demo catalog representations.
 * - No invented prices, weights, purity percentages, or awards.
 */

export interface Product {
  id: string;
  sku: string;
  name: string;
  categoryId: 'gold' | 'diamond' | 'bridal' | 'vaddanam' | 'earrings' | 'bangles';
  categoryName: string;
  shortDescription: string;
  craftDetails: string;
  image: string;
  isFeatured: boolean;
  isDemo: true;
}

export const PRODUCTS: Product[] = [
  {
    id: "diamond-emerald-choker",
    sku: "MJ-DM-01",
    name: "Diamond & Emerald Grandeur Choker",
    categoryId: "diamond",
    categoryName: "Diamond",
    shortDescription: "Finely set brilliant cut diamonds complemented by luminous emerald droplets.",
    craftDetails: "Handcrafted with precision setting where diamonds meet vibrant emeralds. Designed to captivate for grand celebratory occasions.",
    image: "/assets/products/diamond-emerald-choker.webp",
    isFeatured: true,
    isDemo: true,
  },
  {
    id: "royal-diamond-vaddanam",
    sku: "MJ-VD-02",
    name: "Royal Diamond Vaddanam (Waistbelt)",
    categoryId: "vaddanam",
    categoryName: "Vaddanam",
    shortDescription: "Opulent bridal waistbelt featuring detailed diamond filigree and center emerald drop.",
    craftDetails: "A signature South Indian bridal silhouette sculpted with traditional curved symmetry and radiant diamond cluster detailing.",
    image: "/assets/products/royal-diamond-vaddanam.webp",
    isFeatured: true,
    isDemo: true,
  },
  {
    id: "diamond-kada-bangle",
    sku: "MJ-BG-03",
    name: "Diamond Kada with Emerald Accents",
    categoryId: "bangles",
    categoryName: "Bangles",
    shortDescription: "Structured diamond bracelet cuff with regal sculpted form and emerald crown motif.",
    craftDetails: "Crafted with precision, designed to captivate, and made to be treasured across generations.",
    image: "/assets/products/diamond-kada-bangle.webp",
    isFeatured: true,
    isDemo: true,
  },
  {
    id: "temple-peacock-necklace",
    sku: "MJ-GD-04",
    name: "Temple Peacock Gold Choker",
    categoryId: "gold",
    categoryName: "Gold",
    shortDescription: "Sacred temple gold necklace featuring dual dancing peacock motifs and emerald cabochons.",
    craftDetails: "Drawn from the forms and figures of traditional South Indian temple stone architecture, handcrafted in 100% BIS Hallmark gold.",
    image: "/assets/products/temple-peacock-necklace.webp",
    isFeatured: true,
    isDemo: true,
  },
  {
    id: "temple-lakshmi-haram",
    sku: "MJ-BD-05",
    name: "Sacred Goddess Lakshmi 3-Layer Haram",
    categoryId: "bridal",
    categoryName: "Bridal",
    shortDescription: "Three-tiered temple gold long haaram featuring intricately carved Lakshmi pendant.",
    craftDetails: "Traditional nakshi artisan work celebrating auspicious motifs, framed with ruby and emerald accents and hanging gold droplets.",
    image: "/assets/products/temple-lakshmi-haram.webp",
    isFeatured: true,
    isDemo: true,
  },
  {
    id: "temple-sculpted-jhumkas",
    sku: "MJ-ER-06",
    name: "Sculpted Temple Gold Jhumkas",
    categoryId: "earrings",
    categoryName: "Earrings",
    shortDescription: "Majestic bell jhumkas with carved floral crest and delicate bead fringe.",
    craftDetails: "Inspired by temple pillared corridors. Every contour is shaped by heritage goldsmiths for lightweight elegance and graceful movement.",
    image: "/assets/products/temple-sculpted-jhumkas.webp",
    isFeatured: true,
    isDemo: true,
  },
  {
    id: "temple-bridal-long-haram",
    sku: "MJ-BD-07",
    name: "Grand Bridal Temple Long Haaram",
    categoryId: "bridal",
    categoryName: "Bridal",
    shortDescription: "Statement bridal heirloom haaram with majestic Lakshmi centerpiece and ruby-emerald stone clusters.",
    craftDetails: "An exquisite bridal heirloom crafted in 100% BIS Hallmark gold, engineered for comfort and royal presence on wedding days.",
    image: "/assets/products/temple-bridal-long-haram.webp",
    isFeatured: true,
    isDemo: true,
  },
  {
    id: "emerald-grandeur-choker",
    sku: "MJ-DM-08",
    name: "Emerald Grandeur Diamond Collar",
    categoryId: "diamond",
    categoryName: "Diamond",
    shortDescription: "High-collar diamond statement piece paired with tiered emerald pear-cut hangings.",
    craftDetails: "Diamonds in delicate detail. An exquisite balance of timeless symmetry and contemporary bridal grace.",
    image: "/assets/products/emerald-grandeur-choker.webp",
    isFeatured: true,
    isDemo: true,
  },
  {
    id: "diamond-emerald-haram",
    sku: "MJ-GD-09",
    name: "Artisanal Diamond & Pearl Haar",
    categoryId: "gold",
    categoryName: "Gold",
    shortDescription: "Graceful heritage necklace with diamond accents, natural emerald center, and south sea pearl drops.",
    craftDetails: "Sacred heritage crafted with meticulous attention to stone setting and flexibility for effortless wear.",
    image: "/assets/products/diamond-emerald-haram.webp",
    isFeatured: false,
    isDemo: true,
  },
];
