/**
 * Constants & Verified Brand Facts — Menaka Jewellers
 * 
 * IMPORTANT: Strictly verified claims from official brand assets.
 * Do NOT add unverified awards, customer counts, or invented telemetry metrics.
 */

export const BRAND_NAME = "Menaka Jewellers";
export const BRAND_TAGLINE = "Crafting elegance since 1982";
export const BRAND_ORIGIN = "Warangal, Telangana";
export const INSTAGRAM_HANDLE = "@menakajewellers__";
export const INSTAGRAM_URL = "https://www.instagram.com/menakajewellers__/";

/**
 * WhatsApp Business Configuration
 * Placeholder number: Replace with active Menaka Jewellers business contact number prior to launch.
 * Format: Country code without leading '+' or special characters (e.g. 919876543210 for India)
 * NOTE FOR LAUNCH: Set this value to the verified Menaka Jewellers business number.
 */
export const WHATSAPP_PHONE_NUMBER = "919876543210"; // DEMO_PLACEHOLDER_NUMBER

export interface VerifiedClaim {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'ShieldCheck' | 'Sparkles' | 'Clock' | 'Globe' | 'MapPin';
}

export const VERIFIED_CLAIMS: VerifiedClaim[] = [
  {
    id: "heritage",
    title: "Crafting elegance since 1982",
    subtitle: "Over 4 decades of temple jewellery heritage",
    iconName: "Sparkles",
  },
  {
    id: "hallmark",
    title: "100% BIS Hallmark Gold",
    subtitle: "Certified purity & authentic craftsmanship",
    iconName: "ShieldCheck",
  },
  {
    id: "custom-design",
    title: "Bespoke Custom Designs",
    subtitle: "Handcrafted by our master artisans",
    iconName: "Sparkles",
  },
  {
    id: "shipping",
    title: "Ships across India & USA",
    subtitle: "Secure & insured global doorstep delivery",
    iconName: "Globe",
  },
  {
    id: "origin",
    title: "Based in Warangal",
    subtitle: "Rooted in the historic city of temples",
    iconName: "MapPin",
  },
];

/**
 * Builds encoded WhatsApp enquiry URL
 * Supports product name + SKU, or category context, with fallback to general enquiry
 */
export function buildWhatsAppUrl(productName?: string, skuOrCategory?: string): string {
  let message = "Namaste Menaka Jewellers, I am browsing your catalog and would like to enquire about your jewellery collection.";
  if (productName) {
    message = `Namaste Menaka Jewellers, I am interested in enquiring about "${productName}"${skuOrCategory ? ` (Item Code: ${skuOrCategory})` : ""}. Could you please share more details and availability?`;
  } else if (skuOrCategory) {
    message = `Namaste Menaka Jewellers, I am browsing your ${skuOrCategory} collection and would like to enquire about custom designs and availability.`;
  }
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}
