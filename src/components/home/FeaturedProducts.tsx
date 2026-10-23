import React from 'react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../ui/ProductCard';

export const FeaturedProducts: React.FC = () => {
  // Show 6 to 8 featured demo products
  const featured = PRODUCTS.filter((p) => p.isFeatured).slice(0, 8);

  return (
    <section className="py-16 bg-ivory-100/70 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-serif uppercase tracking-widest text-gold-600 font-bold">
                Atelier Showcase
              </span>
              <span className="text-[10px] uppercase font-serif tracking-widest bg-burgundy-900 text-gold-300 px-2 py-0.5 rounded border border-gold-400/30">
                Demo Catalog
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-burgundy-950 mt-1">
              Featured Masterpieces
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-charcoal-600 max-w-md mt-2 md:mt-0 font-light">
            Selected showcase of bridal temple jewellery, uncut diamond necklaces, and artisanal kadas handcrafted in Warangal.
          </p>
        </div>

        {/* Product Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};
