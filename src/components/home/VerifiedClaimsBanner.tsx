import React from 'react';
import { ShieldCheck, Sparkles, Clock, Globe, MapPin } from 'lucide-react';
import { VERIFIED_CLAIMS } from '../../data/constants';

export const VerifiedClaimsBanner: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-gold-500 shrink-0" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-gold-500 shrink-0" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-gold-500 shrink-0" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-gold-500 shrink-0" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-gold-500 shrink-0" />;
      default:
        return <Sparkles className="w-5 h-5 text-gold-500 shrink-0" />;
    }
  };

  return (
    <section className="bg-ivory-100 border-y border-gold-500/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-xs font-serif uppercase tracking-widest text-burgundy-900 font-bold">
            The Menaka Assurance
          </span>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-burgundy-950 mt-1">
            Our Hallmarks of Trust &amp; Craft
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {VERIFIED_CLAIMS.map((claim) => (
            <div
              key={claim.id}
              className="bg-white p-4 rounded-lg border border-gold-500/20 shadow-xs flex items-center sm:flex-col sm:text-center gap-3.5"
            >
              <div className="w-10 h-10 rounded bg-burgundy-950/5 border border-gold-400/30 flex items-center justify-center shrink-0">
                {getIcon(claim.iconName)}
              </div>
              <div>
                <h3 className="font-serif text-sm font-semibold text-burgundy-950">
                  {claim.title}
                </h3>
                <p className="text-xs text-charcoal-600 mt-0.5">
                  {claim.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
