import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ui/ProductCard';
import { buildWhatsAppUrl } from '../data/constants';

export const CollectionPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  const currentCategory = useMemo(() => {
    return CATEGORIES.find((c) => c.id.toLowerCase() === categoryId?.toLowerCase());
  }, [categoryId]);

  const filteredProducts = useMemo(() => {
    if (!currentCategory) return [];
    return PRODUCTS.filter((p) => p.categoryId === currentCategory.id);
  }, [currentCategory]);

  if (!currentCategory) {
    return <Navigate to="/collection/gold" replace />;
  }

  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Back link */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-charcoal-600 hover:text-burgundy-900 transition font-serif"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Collection Header */}
      <div className="bg-burgundy-950 text-ivory-100 rounded-2xl p-6 sm:p-10 border border-gold-500/30 mb-10 flex flex-col md:flex-row items-center gap-6 justify-between">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg border border-gold-400 p-1 shrink-0 overflow-hidden bg-burgundy-900">
            <img
              src={currentCategory.thumbnail}
              alt={currentCategory.name}
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-serif uppercase tracking-widest text-gold-400 font-bold">
                Menaka Atelier Collection
              </span>
              <span className="text-[10px] font-serif uppercase tracking-widest bg-burgundy-900 text-gold-300 px-2 py-0.5 rounded border border-gold-400/30">
                Demo Catalog
              </span>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-ivory-50 mt-1">
              {currentCategory.name} Jewellery
            </h1>
            <p className="text-xs sm:text-sm text-ivory-200/80 mt-1 max-w-xl font-light">
              {currentCategory.shortDescription}
            </p>
          </div>
        </div>

        <a
          href={buildWhatsAppUrl(undefined, undefined)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded bg-gold-500 hover:bg-gold-400 text-burgundy-950 font-serif text-xs font-semibold uppercase tracking-wider transition shrink-0 shadow-md"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Bespoke Enquiry</span>
        </a>
      </div>

      {/* Category Pills Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isActive = cat.id === currentCategory.id;
          return (
            <Link
              key={cat.id}
              to={`/collection/${cat.id}`}
              className={`px-4 py-2 rounded text-xs font-serif uppercase tracking-wider whitespace-nowrap transition border ${
                isActive
                  ? 'bg-burgundy-900 text-gold-300 border-gold-400 font-semibold shadow-xs'
                  : 'bg-white text-charcoal-700 border-gold-500/20 hover:border-gold-400 hover:text-burgundy-900'
              }`}
            >
              {cat.name}
            </Link>
          );
        })}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl p-12 text-center border border-gold-500/20 max-w-md mx-auto my-8">
          <Sparkles className="w-8 h-8 text-gold-500 mx-auto mb-3" />
          <h3 className="font-serif text-lg font-bold text-burgundy-950">
            More Pieces Coming Soon
          </h3>
          <p className="text-xs text-charcoal-600 mt-2 mb-6">
            Our atelier crafts custom {currentCategory.name} designs in 7 days. Connect directly with our master craftsmen on WhatsApp.
          </p>
          <a
            href={buildWhatsAppUrl(undefined, currentCategory.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-2.5 px-4 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider rounded"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Request {currentCategory.name} Designs</span>
          </a>
        </div>
      )}

      {/* Other Categories Recommendations */}
      <div className="mt-16 pt-12 border-t border-gold-500/20">
        <h3 className="font-serif text-xl font-bold text-burgundy-950 mb-6 text-center">
          Explore Other Collections
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATEGORIES.filter((c) => c.id !== currentCategory.id).slice(0, 5).map((cat) => (
            <Link
              key={cat.id}
              to={`/collection/${cat.id}`}
              className="flex items-center gap-3 p-3 rounded-lg bg-white border border-gold-500/20 hover:border-gold-400 transition"
            >
              <img
                src={cat.thumbnail}
                alt={cat.name}
                className="w-10 h-10 rounded object-cover border border-gold-400/40"
              />
              <span className="font-serif text-xs font-medium text-burgundy-950 uppercase tracking-wider">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};
