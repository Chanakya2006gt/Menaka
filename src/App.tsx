import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppFAB } from './components/layout/WhatsAppFAB';
import { ScrollToTop } from './components/layout/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { CollectionPage } from './pages/CollectionPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Skip to Main Content Link for WCAG Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-gold-500 text-burgundy-950 px-4 py-2 rounded font-serif text-xs uppercase tracking-wider font-bold shadow-lg"
      >
        Skip to main content
      </a>
      <div className="min-h-screen flex flex-col bg-ivory-50 text-charcoal-900 font-sans selection:bg-gold-200 selection:text-burgundy-950">
        <Navbar />
        
        <main id="main-content" className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collection/:categoryId" element={<CollectionPage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppFAB />
      </div>
    </BrowserRouter>
  );
};

export default App;
