import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';

export const CategoryGrid: React.FC = () => {
  return (
    <section id="categories" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <span className="text-xs font-serif uppercase tracking-widest text-gold-600 font-bold block mb-1">
          Explore By Category
        </span>
        <h2 className="font-serif text-2xl sm:text-4xl font-bold text-burgundy-950">
          Sacred Heritage Collections
        </h2>
        <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-3 mb-3" />
        <p className="text-sm text-charcoal-600 font-light">
          Each design is rooted in the rich traditions of South Indian temple jewellery, sculpted in 100% BIS Hallmark gold.
        </p>
      </div>

      {/* 6 Category Tiles: 2 columns on mobile, 3 on tablet, 6 on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            to={`/collection/${cat.id}`}
            className="group flex flex-col items-center p-4 rounded-xl bg-white border border-gold-500/20 hover:border-gold-500 hover:shadow-lg transition-all duration-300 text-center"
          >
            {/* Elegant Jewellery Category Artwork */}
            <div className="relative w-full aspect-square rounded-lg p-1 border border-gold-400/40 group-hover:border-gold-500 transition-colors bg-burgundy-950/5 overflow-hidden mb-3.5">
              <img
                src={cat.thumbnail}
                alt={cat.name}
                loading="lazy"
                className="w-full h-full object-cover rounded group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <h3 className="font-serif text-base font-semibold text-burgundy-950 group-hover:text-gold-600 transition">
              {cat.name}
            </h3>

            <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-charcoal-500 group-hover:text-gold-700 transition mt-1 font-serif">
              <span>View Pieces</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};
