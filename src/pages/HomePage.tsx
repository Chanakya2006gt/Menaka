import React, { useEffect } from 'react';
import { Hero } from '../components/home/Hero';
import { VerifiedClaimsBanner } from '../components/home/VerifiedClaimsBanner';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { AboutHeritage } from '../components/home/AboutHeritage';
import { ContactSection } from '../components/home/ContactSection';
import { BRAND_NAME } from '../data/constants';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = `${BRAND_NAME} | Authentic Temple Jewellery & BIS Hallmark Gold`;
  }, []);

  return (
    <div className="space-y-0">
      <Hero />
      <VerifiedClaimsBanner />
      <CategoryGrid />
      <FeaturedProducts />
      <AboutHeritage />
      <ContactSection />
    </div>
  );
};
