import React from 'react';
import { MessageCircle, Compass } from 'lucide-react';
import { buildWhatsAppUrl } from '../../data/constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-[92vh] flex items-center bg-burgundy-950 text-ivory-100 overflow-hidden border-b border-gold-500/20">
      
      {/* Cinematic Full-Bleed Background Visual */}
      <div 
        className="absolute inset-0 bg-cover bg-top sm:bg-right-top lg:bg-center"
        style={{ backgroundImage: "url('/assets/hero/hero.webp')" }}
      />

      {/* Lighter overlays letting the jewellery show through with readable text */}
      <div className="absolute inset-0 bg-gradient-to-r from-burgundy-950/70 via-burgundy-950/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/60 via-transparent to-transparent sm:hidden" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="max-w-2xl lg:max-w-3xl space-y-5 sm:space-y-6">
          
          {/* Clean Editorial Eyebrow (No pill blob, no pulsating dot) */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-gold-400" />
            <span className="text-xs uppercase font-serif tracking-ultra text-gold-300 font-semibold">
              Warangal, Telangana &bull; Est. 1982
            </span>
          </div>

          {/* Cinematic Title */}
          <div className="space-y-2">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ivory-50 leading-[1.08] drop-shadow-2xl">
              Sacred Heritage, <br />
              <span className="text-gold-gradient font-normal italic sm:not-italic leading-tight">
                Crafted in Pure Gold.
              </span>
            </h1>
          </div>

          {/* Clean Editorial Metadata Bar (Pure text with separators, zero pill backgrounds) */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 text-xs font-serif text-ivory-200/90 tracking-wider uppercase pt-1 leading-relaxed">
            <span className="text-gold-300 font-semibold">100% BIS Hallmark Gold</span>
            <span className="text-gold-400/40">&bull;</span>
            <span className="text-ivory-200">Bespoke Custom Orders</span>
            <span className="hidden sm:inline text-gold-400/40">&bull;</span>
            <span className="hidden sm:inline text-ivory-200">Ships across India &amp; USA</span>
          </div>

          {/* Synopsis / Craft Story */}
          <p className="text-sm sm:text-base text-ivory-200/85 font-light leading-relaxed max-w-xl drop-shadow">
            Crafting Elegance Since 1982. Inspired by Kakatiya temple sculptures and traditional South Indian bridal jewellery. Every piece is handcrafted with precision by hereditary goldsmiths in Warangal.
          </p>

          {/* Action CTAs: High-impact primary WhatsApp button + Clean Secondary */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded bg-gold-500 hover:bg-gold-400 text-burgundy-950 font-serif text-sm font-bold tracking-wider uppercase transition shadow-2xl hover:shadow-gold-500/40"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>WhatsApp Consultation</span>
            </a>

            <a
              href="#categories"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded bg-transparent hover:bg-burgundy-900/90 backdrop-blur-md border border-gold-500/40 text-gold-300 font-serif text-sm font-semibold tracking-wider uppercase transition hover:border-gold-400"
            >
              <Compass className="w-4 h-4 text-gold-400" />
              <span>Explore Collections</span>
            </a>
          </div>

          {/* Bottom verified anchor tags - shown on desktop only */}
          <div className="pt-4 hidden sm:flex items-center gap-4 text-xs font-serif text-gold-300/80 tracking-widest uppercase">
            <span>Based in Warangal</span>
            <span>&bull;</span>
            <span>Ships across India &amp; USA</span>
          </div>

        </div>
      </div>

    </section>
  );
};
