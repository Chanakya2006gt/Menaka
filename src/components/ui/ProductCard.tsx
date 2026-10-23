import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Product } from '../../data/products';
import { buildWhatsAppUrl } from '../../data/constants';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <article className="group bg-white rounded-lg overflow-hidden border border-gold-500/20 hover:border-gold-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Image container */}
      <Link 
        to={`/product/${product.id}`}
        className="relative block aspect-square bg-burgundy-950/5 overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          width="400"
          height="400"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        
        {/* Subtle Demo Tag - readable 12px text */}
        <div className="absolute top-3 left-3 bg-burgundy-950/90 backdrop-blur-sm text-gold-300 text-xs uppercase font-serif tracking-widest px-2.5 py-1 border border-gold-400/30">
          Demo Piece
        </div>

        {/* Category Badge - readable 12px text */}
        <div className="absolute top-3 right-3 bg-ivory-50/95 backdrop-blur-sm text-burgundy-900 text-xs uppercase tracking-wider font-semibold px-2.5 py-1 border border-charcoal-900/10">
          {product.categoryName}
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-charcoal-500 uppercase tracking-wider mb-1">
            <span>SKU: {product.sku}</span>
            <span className="text-gold-700 font-serif font-medium">100% BIS Hallmark</span>
          </div>

          <h3 className="font-serif text-base sm:text-lg font-semibold text-burgundy-950 group-hover:text-burgundy-800 transition line-clamp-1">
            <Link to={`/product/${product.id}`} className="hover:underline">
              {product.name}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-charcoal-600 line-clamp-2 mt-1.5 leading-relaxed font-light">
            {product.shortDescription}
          </p>
        </div>

        {/* Action Buttons with 44px min touch target */}
        <div className="mt-5 pt-4 border-t border-gold-500/15 flex items-center gap-2">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 min-h-[44px] py-2.5 px-3 text-xs font-serif font-medium uppercase tracking-wider text-burgundy-900 bg-ivory-100 hover:bg-ivory-200 rounded border border-gold-500/20 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
          >
            <span>View Piece</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href={buildWhatsAppUrl(product.name, product.sku)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
            className="w-11 h-11 min-w-[44px] min-h-[44px] inline-flex items-center justify-center text-white bg-[#25D366] hover:bg-[#20ba59] rounded transition shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
            title="Enquire on WhatsApp"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
          </a>
        </div>
      </div>
    </article>
  );
};
