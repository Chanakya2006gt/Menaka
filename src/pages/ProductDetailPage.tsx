import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, ShieldCheck, Clock, Globe, MapPin, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ui/ProductCard';
import { buildWhatsAppUrl } from '../data/constants';

export const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();

  const product = useMemo(() => {
    return PRODUCTS.find((p) => p.id === productId);
  }, [productId]);

  // Find 3 related products (from same category or general catalog, excluding current)
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    const sameCategory = PRODUCTS.filter((p) => p.categoryId === product.categoryId && p.id !== product.id);
    const others = PRODUCTS.filter((p) => p.categoryId !== product.categoryId && p.id !== product.id);
    return [...sameCategory, ...others].slice(0, 3);
  }, [product]);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  const whatsappUrl = buildWhatsAppUrl(product.name, product.sku);

  return (
    <div className="py-8 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Navigation Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-charcoal-500">
        <Link to="/" className="hover:text-burgundy-900 transition">
          Home
        </Link>
        <span>/</span>
        <Link to={`/collection/${product.categoryId}`} className="hover:text-burgundy-900 transition">
          {product.categoryName}
        </Link>
        <span>/</span>
        <span className="text-burgundy-950 font-medium truncate max-w-[200px] sm:max-w-none">
          {product.name}
        </span>
      </nav>

      {/* Product Detail Layout: Mobile Stack, Desktop 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white rounded-2xl border border-gold-500/20 p-5 sm:p-8 lg:p-10 shadow-sm">
        
        {/* Large Image View (Col 1 to 6) */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-gold-500/30 bg-burgundy-950/5 shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            {/* Demo Badge */}
            <div className="absolute top-4 left-4 bg-burgundy-950/85 backdrop-blur-sm text-gold-300 text-xs uppercase font-serif tracking-widest px-3 py-1 border border-gold-400/40">
              Demo Piece
            </div>

            {/* Category Badge */}
            <div className="absolute top-4 right-4 bg-ivory-50/95 backdrop-blur-sm text-burgundy-900 text-xs uppercase tracking-wider font-semibold px-2.5 py-1 border border-charcoal-900/10">
              {product.categoryName}
            </div>
          </div>

          <p className="text-[11px] text-charcoal-500 font-serif uppercase tracking-widest text-center mt-3">
            Handcrafted in Warangal &bull; 100% BIS Hallmark Gold
          </p>
        </div>

        {/* Product Information & Action (Col 7 to 12) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-gold-600 font-serif font-bold mb-2">
              <span>Item Code: {product.sku}</span>
              <span>&bull;</span>
              <span className="text-burgundy-900">{product.categoryName} Collection</span>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-burgundy-950 leading-tight">
              {product.name}
            </h1>

            {/* Verified Assurance Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-gold-50 border border-gold-200 text-gold-700 text-xs font-serif uppercase tracking-wider mt-3">
              <ShieldCheck className="w-4 h-4 text-gold-600" />
              <span>Certified 100% BIS Hallmark Gold</span>
            </div>

            {/* Description */}
            <div className="mt-6 space-y-3">
              <h2 className="text-xs uppercase font-serif tracking-widest text-burgundy-900 font-semibold">
                Design &amp; Craft Details
              </h2>
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-light">
                {product.shortDescription}
              </p>
              <p className="text-sm text-charcoal-600 leading-relaxed font-light border-l-2 border-gold-400 pl-3 italic">
                {product.craftDetails}
              </p>
            </div>

            {/* Verified Atelier Specifications */}
            <div className="mt-6 pt-6 border-t border-gold-500/15 grid grid-cols-2 gap-3 text-xs text-charcoal-700">
              <div className="flex items-center gap-2 p-2.5 rounded bg-ivory-100/60 border border-gold-500/10">
                <Clock className="w-4 h-4 text-gold-600 shrink-0" />
                <span>Custom ready in 7 days</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded bg-ivory-100/60 border border-gold-500/10">
                <Globe className="w-4 h-4 text-gold-600 shrink-0" />
                <span>Ships across India &amp; USA</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded bg-ivory-100/60 border border-gold-500/10">
                <MapPin className="w-4 h-4 text-gold-600 shrink-0" />
                <span>Based in Warangal</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded bg-ivory-100/60 border border-gold-500/10">
                <Sparkles className="w-4 h-4 text-gold-600 shrink-0" />
                <span>Heritage since 1979</span>
              </div>
            </div>
          </div>

          {/* Primary Action: Direct WhatsApp Enquiry with pre-filled message */}
          <div className="pt-4 border-t border-gold-500/20 space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Enquire about ${product.name} on WhatsApp`}
              className="w-full flex items-center justify-center gap-2.5 py-4 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white font-sans text-sm font-semibold uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition active:scale-98"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Enquire on WhatsApp</span>
            </a>

            <p className="text-[11px] text-charcoal-500 text-center leading-normal">
              Opens WhatsApp with a pre-filled enquiry for <strong className="text-charcoal-700">{product.name}</strong> ({product.sku}). Our master goldsmith will respond directly.
            </p>
          </div>

        </div>

      </div>

      {/* 3 Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-16 pt-12 border-t border-gold-500/20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase font-serif tracking-widest text-gold-600 font-bold block">
                Complements &amp; Heirlooms
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-burgundy-950">
                Related Creations
              </h2>
            </div>
            <Link
              to={`/collection/${product.categoryId}`}
              className="text-xs font-serif uppercase tracking-wider text-burgundy-900 hover:text-gold-700 flex items-center gap-1 font-semibold"
            >
              <span>View All {product.categoryName}</span>
              <ArrowLeft className="w-3 h-3 rotate-180" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
};
