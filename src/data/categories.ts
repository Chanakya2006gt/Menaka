/**
 * Category Definitions — Menaka Jewellers
 * 6 Official Categories as specified by brand highlights
 */

export interface Category {
  id: string;
  name: string;
  shortDescription: string;
  thumbnail: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "gold",
    name: "Gold",
    shortDescription: "Timeless temple jewellery handcrafted in certified 100% BIS Hallmark gold.",
    thumbnail: "/assets/categories/gold.webp",
  },
  {
    id: "diamond",
    name: "Diamond",
    shortDescription: "Exquisite diamonds set in delicate detail with vibrant natural emerald accents.",
    thumbnail: "/assets/categories/diamond.webp",
  },
  {
    id: "bridal",
    name: "Bridal",
    shortDescription: "Regal bridal sets, majestic long haarams, and statement wedding heirlooms.",
    thumbnail: "/assets/categories/bridal.webp",
  },
  {
    id: "vaddanam",
    name: "Vaddanam",
    shortDescription: "Traditional South Indian waistbelts sculpted with divine temple motifs.",
    thumbnail: "/assets/categories/vaddanam.webp",
  },
  {
    id: "earrings",
    name: "Earrings",
    shortDescription: "Sculpted jhumkas, chandelier drops, and antique studs inspired by temple pillars.",
    thumbnail: "/assets/categories/earrings.webp",
  },
  {
    id: "bangles",
    name: "Bangles",
    shortDescription: "Handcrafted kadas, regal pachalu bangles, and diamond-studded cuffs.",
    thumbnail: "/assets/categories/bangles.webp",
  },
];
