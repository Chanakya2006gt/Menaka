import React from 'react';
import { MessageCircle, MapPin, Globe } from 'lucide-react';
import { buildWhatsAppUrl, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../../data/constants';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-ivory-50 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-serif uppercase tracking-widest text-gold-600 font-bold block mb-1">
            Personal Atelier Assistance
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-burgundy-950">
            Connect With Our Goldsmiths
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-3 mb-3" />
          <p className="text-xs sm:text-sm text-charcoal-600 font-light">
            We invite you to discuss custom bridal jewellery, verify hallmark authenticity, or arrange safe delivery across India and the USA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: WhatsApp Connect */}
          <div className="bg-white p-6 rounded-xl border border-gold-500/20 shadow-xs flex flex-col justify-between text-center items-center">
            <div>
              <div className="w-12 h-12 rounded bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#25D366] mx-auto mb-4">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <h3 className="font-serif text-base font-semibold text-burgundy-950">
                WhatsApp Enquiry
              </h3>
              <p className="text-xs text-charcoal-600 mt-2 leading-relaxed">
                Chat directly with our design consultants. Share inspiration photos or request custom sketches.
              </p>
            </div>
            <div className="mt-6 w-full">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-sans text-xs font-semibold uppercase tracking-wider rounded transition shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Open WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 2: Warangal Atelier */}
          <div className="bg-white p-6 rounded-xl border border-gold-500/20 shadow-xs flex flex-col justify-between text-center items-center">
            <div>
              <div className="w-12 h-12 rounded bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600 mx-auto mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-semibold text-burgundy-950">
                Atelier Location
              </h3>
              <p className="text-xs text-charcoal-600 mt-2 leading-relaxed">
                Based in the historic heritage city of Warangal, Telangana. Crafting elegance since 1979.
              </p>
            </div>
            <div className="mt-6 w-full pt-2">
              <span className="inline-block text-xs font-serif text-gold-700 bg-gold-50 px-3 py-1 rounded border border-gold-200">
                Warangal, Telangana
              </span>
            </div>
          </div>

          {/* Card 3: Worldwide Logistics */}
          <div className="bg-white p-6 rounded-xl border border-gold-500/20 shadow-xs flex flex-col justify-between text-center items-center">
            <div>
              <div className="w-12 h-12 rounded bg-burgundy-50 border border-burgundy-200 flex items-center justify-center text-burgundy-900 mx-auto mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-semibold text-burgundy-950">
                Shipping Network
              </h3>
              <p className="text-xs text-charcoal-600 mt-2 leading-relaxed">
                Insured express doorstep delivery across all Indian cities and destinations across the USA.
              </p>
            </div>
            <div className="mt-6 w-full pt-2">
              <span className="inline-block text-xs font-serif text-burgundy-900 bg-burgundy-50 px-3 py-1 rounded border border-burgundy-200">
                India &amp; USA Logistics
              </span>
            </div>
          </div>

          {/* Card 4: Official Instagram */}
          <div className="bg-white p-6 rounded-xl border border-gold-500/20 shadow-xs flex flex-col justify-between text-center items-center">
            <div>
              <div className="w-12 h-12 rounded bg-burgundy-50 border border-gold-200 flex items-center justify-center text-burgundy-900 mx-auto mb-4">
                <InstagramIcon className="w-6 h-6 text-burgundy-900" />
              </div>
              <h3 className="font-serif text-base font-semibold text-burgundy-950">
                Instagram Atelier
              </h3>
              <p className="text-xs text-charcoal-600 mt-2 leading-relaxed">
                Follow our latest temple jewellery launches, real bridal trousseau reels, and exhibitions.
              </p>
            </div>
            <div className="mt-6 w-full">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-burgundy-900 hover:bg-burgundy-800 text-gold-300 font-serif text-xs uppercase tracking-wider rounded transition"
              >
                <span>{INSTAGRAM_HANDLE}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
