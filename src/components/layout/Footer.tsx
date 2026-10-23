import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, MapPin, ShieldCheck, Sparkles, Clock, Globe } from 'lucide-react';
import { BRAND_NAME, INSTAGRAM_HANDLE, INSTAGRAM_URL, buildWhatsAppUrl } from '../../data/constants';
import { CATEGORIES } from '../../data/categories';

// Clean SVG for Instagram
const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-burgundy-950 text-ivory-200 border-t border-gold-500/20 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand & Verified Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gold-500/15">
          
          {/* Col 1: Heritage & Logo */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/assets/logo/logo.webp"
                alt={BRAND_NAME}
                width="48"
                height="48"
                className="w-12 h-12 rounded-full border border-gold-400/50 object-cover"
              />
              <div>
                <span className="font-serif text-xl font-bold tracking-widest text-gold-300 block">
                  MENAKA
                </span>
                <span className="text-xs uppercase tracking-ultra text-ivory-300/60 font-serif">
                  Jewellers &bull; Since 1982
                </span>
              </div>
            </div>
            
            <p className="text-sm text-ivory-200/80 leading-relaxed font-light">
              Crafting elegance since 1982 in the historic city of Warangal. Preserving traditional South Indian temple jewellery, certified BIS hallmark gold, and custom bespoke bridal masterpieces.
            </p>

            <div className="pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 min-h-[44px] text-xs uppercase tracking-wider text-gold-300 hover:text-gold-200 transition focus:outline-none focus:ring-1 focus:ring-gold-400"
              >
                <InstagramIcon className="w-4 h-4 text-gold-400" />
                <span>{INSTAGRAM_HANDLE}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-gold-300 mb-4 pb-1 border-b border-gold-500/20 inline-block">
              Our Collections
            </h4>
            <ul className="space-y-2.5 text-sm">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/collection/${cat.id}`}
                    className="text-ivory-200/80 hover:text-gold-300 transition block"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Verified Guarantees */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-gold-300 mb-4 pb-1 border-b border-gold-500/20 inline-block">
              Authenticity
            </h4>
            <ul className="space-y-3 text-xs text-ivory-200/80">
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>100% BIS Hallmark Gold Certified</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Bespoke Handcrafted Designs</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Ships Across India &amp; USA</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Based in Warangal, Telangana</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Crafting Elegance Since 1982</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Enquiry */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-gold-300 mb-4 pb-1 border-b border-gold-500/20 inline-block">
              Direct Enquiries
            </h4>
            <p className="text-xs text-ivory-200/80 leading-relaxed mb-4 font-light">
              Connect directly with our master goldsmiths in Warangal for custom jewellery orders, bridal consultations, or design enquiries.
            </p>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 min-h-[44px] bg-gold-500 text-burgundy-950 hover:bg-gold-400 font-serif text-xs font-semibold uppercase tracking-wider rounded transition shadow-md focus:outline-none focus:ring-2 focus:ring-gold-300"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory-300/60 text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved. Based in Warangal, Telangana.
          </p>
          <p className="text-xs bg-burgundy-900/60 px-3 py-1 rounded border border-gold-500/10">
            Catalog Showcase &bull; Selected items marked as Demo
          </p>
        </div>

      </div>
    </footer>
  );
};
