import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, MessageCircle, ChevronDown } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';
import { buildWhatsAppUrl, BRAND_NAME } from '../../data/constants';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setCollectionsOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    closeMenu();
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  // Close dropdown on click outside or escape key
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCollectionsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setCollectionsOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-burgundy-950/95 backdrop-blur-md border-b border-gold-500/20 text-ivory-100 transition-all">
      {/* Top subtle announcement bar */}
      <div className="hidden sm:block bg-burgundy-900 text-gold-300 text-xs py-1.5 px-4 text-center tracking-widest uppercase border-b border-gold-500/10 font-serif">
        <span>100% BIS Hallmark Gold • Ships Across India &amp; USA • Bespoke Custom Orders</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Mobile Menu Button - 44px minimum tap target */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md text-gold-300 hover:text-white hover:bg-burgundy-900 focus:outline-none focus:ring-2 focus:ring-gold-400"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Brand Logo & Title */}
          <div className="flex items-center justify-center md:justify-start flex-1 md:flex-initial">
            <Link to="/" onClick={closeMenu} className="flex items-center space-x-3 group text-center md:text-left">
              <img
                src="/assets/logo/logo.webp"
                alt={`${BRAND_NAME} Emblem`}
                width="48"
                height="48"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gold-400/40 object-cover shadow-sm group-hover:border-gold-400 transition"
              />
              <div className="flex flex-col">
                <span className="font-serif text-base sm:text-xl font-bold tracking-widest text-gold-300 group-hover:text-gold-200 transition">
                  MENAKA
                </span>
                <span className="font-serif text-xs tracking-wider text-ivory-200/70 uppercase">
                  Jewellers &bull; Est. 1982
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium tracking-wide uppercase transition hover:text-gold-300 ${
                location.pathname === '/' ? 'text-gold-400 font-semibold' : 'text-ivory-200'
              }`}
            >
              Home
            </Link>

            {/* Accessible Collections dropdown */}
            <div className="relative group" ref={dropdownRef}>
              <button 
                type="button"
                onClick={() => setCollectionsOpen(!collectionsOpen)}
                aria-expanded={collectionsOpen}
                aria-haspopup="true"
                className="text-sm font-medium tracking-wide uppercase transition hover:text-gold-300 text-ivory-200 flex items-center gap-1 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
              >
                <span>Collections</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${collectionsOpen ? 'rotate-180 text-gold-400' : ''}`} />
              </button>
              <div 
                className={`absolute left-0 mt-1 w-52 bg-burgundy-900 border border-gold-500/20 rounded shadow-xl py-2 transition-all z-50 ${
                  collectionsOpen ? 'block' : 'hidden group-hover:block'
                }`}
                role="menu"
                aria-orientation="vertical"
              >
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/collection/${cat.id}`}
                    onClick={() => setCollectionsOpen(false)}
                    role="menuitem"
                    className="block px-4 py-2 text-xs uppercase tracking-wider text-ivory-200 hover:text-gold-300 hover:bg-burgundy-800 transition focus:bg-burgundy-800 focus:text-gold-300 focus:outline-none"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/#heritage"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('heritage');
              }}
              className="text-sm font-medium tracking-wide uppercase transition hover:text-gold-300 text-ivory-200"
            >
              Heritage
            </Link>

            <Link
              to="/#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="text-sm font-medium tracking-wide uppercase transition hover:text-gold-300 text-ivory-200"
            >
              Contact
            </Link>
          </nav>

          {/* Header Action: WhatsApp Enquiry (44px min height for mobile tap compliance) */}
          <div className="flex items-center space-x-3">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2 min-h-[40px] text-xs sm:text-sm font-serif tracking-wide rounded border border-gold-400/60 bg-gold-500/10 hover:bg-gold-500/20 text-gold-300 hover:text-gold-200 transition focus:outline-none focus:ring-2 focus:ring-gold-400"
              aria-label="Enquire with Menaka Jewellers on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-gold-400" />
              <span className="hidden sm:inline">WhatsApp Enquiry</span>
              <span className="sm:hidden">Enquire</span>
            </a>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-burgundy-950 border-b border-gold-500/20 px-4 pt-3 pb-6 space-y-4">
          <div className="flex flex-col space-y-3">
            <Link
              to="/"
              onClick={closeMenu}
              className="px-3 py-2.5 rounded text-base font-medium text-ivory-100 hover:bg-burgundy-900 hover:text-gold-300"
            >
              Home
            </Link>

            <div className="pt-2 pb-1 border-t border-gold-500/10">
              <span className="px-3 text-xs tracking-widest text-gold-400 uppercase font-serif block mb-2">
                Categories
              </span>
              <div className="grid grid-cols-2 gap-2 pl-2">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/collection/${cat.id}`}
                    onClick={closeMenu}
                    className="px-3 py-2 text-sm rounded text-ivory-200 hover:text-gold-300 hover:bg-burgundy-900"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/#heritage"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('heritage');
              }}
              className="px-3 py-2.5 rounded text-base font-medium text-ivory-100 hover:bg-burgundy-900 hover:text-gold-300"
            >
              Heritage &amp; Craft
            </Link>

            <Link
              to="/#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="px-3 py-2.5 rounded text-base font-medium text-ivory-100 hover:bg-burgundy-900 hover:text-gold-300"
            >
              Contact &amp; Studio
            </Link>

            <div className="pt-3">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-burgundy-900 border border-gold-400/60 rounded text-gold-300 font-serif text-sm tracking-wide"
              >
                <MessageCircle className="w-5 h-5 text-gold-400" />
                Connect on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
