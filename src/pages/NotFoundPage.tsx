import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';
import { BRAND_NAME } from '../data/constants';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = `Page Not Found | ${BRAND_NAME}`;
  }, []);

  return (
    <div className="py-24 max-w-xl mx-auto px-4 text-center">
      <div className="w-16 h-16 rounded-full bg-burgundy-950/5 border border-gold-400 mx-auto flex items-center justify-center text-gold-600 mb-6">
        <Compass className="w-8 h-8" />
      </div>
      <h1 className="font-serif text-3xl font-bold text-burgundy-950 mb-3">
        Page Not Found
      </h1>
      <p className="text-sm text-charcoal-600 mb-8 font-light">
        The jewellery piece or collection you are looking for has moved or is part of an archive.
      </p>
      <Link
        to="/"
        className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] bg-burgundy-900 text-gold-300 font-serif text-xs uppercase tracking-wider rounded border border-gold-400 hover:bg-burgundy-800 transition"
      >
        Return to Catalog Home
      </Link>
    </div>
  );
};
