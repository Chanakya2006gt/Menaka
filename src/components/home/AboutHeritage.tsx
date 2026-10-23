import React from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { buildWhatsAppUrl } from '../../data/constants';

export const AboutHeritage: React.FC = () => {
  return (
    <section id="heritage" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-burgundy-950 text-ivory-100 rounded-2xl p-6 sm:p-12 lg:p-16 border border-gold-500/30 relative overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs uppercase font-serif tracking-widest text-gold-400 font-bold block">
              Our Legacy &bull; Warangal
            </span>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-ivory-50">
              Crafting Elegance <br />
              <span className="text-gold-gradient">Since 1979.</span>
            </h2>

            <p className="text-sm sm:text-base text-ivory-200/80 font-light leading-relaxed">
              For more than four decades, Menaka Jewellers has been an esteemed sanctuary for authentic South Indian temple jewellery. Rooted in the heritage city of Warangal, our atelier draws inspiration from ancient temple sculpture, sacred iconography, and royal bridal traditions.
            </p>

            <p className="text-sm sm:text-base text-ivory-200/80 font-light leading-relaxed">
              Every creation is cast in certified 100% BIS Hallmark Gold and finished by hereditary goldsmiths. Whether an heirloom temple haaram or a contemporary diamond collar, we bring your vision to life with custom designs ready in 7 days.
            </p>

            {/* Verified highlights list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-ivory-200">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Certified 100% BIS Hallmark Gold</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-ivory-200">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Custom Designs Ready in 7 Days</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-ivory-200">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Ships Across India &amp; USA</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-ivory-200">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Authentic Warangal Atelier Legacy</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded bg-gold-500 hover:bg-gold-400 text-burgundy-950 font-serif text-xs sm:text-sm font-semibold tracking-wider uppercase transition shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Enquire with Our Goldsmiths</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-4/5 rounded-xl overflow-hidden border-2 border-gold-400/40 p-1.5 bg-burgundy-900/80 shadow-2xl">
              <img
                src="/assets/products/temple-peacock-necklace.png"
                alt="Sacred Temple Jewellery Heritage by Menaka Jewellers"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/80 via-transparent to-transparent flex items-end p-4">
                <div className="text-center w-full">
                  <p className="font-serif text-xs text-gold-300 uppercase tracking-widest">
                    Stories in Gold &bull; Handcrafted in Warangal
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
