import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../../data/constants';

interface WhatsAppFABProps {
  productName?: string;
  sku?: string;
}

export const WhatsAppFAB: React.FC<WhatsAppFABProps> = ({ productName, sku }) => {
  return (
    <aside aria-label="WhatsApp Concierge" className="fixed bottom-6 right-6 z-40">
      <a
        href={buildWhatsAppUrl(productName, sku)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Concierge Enquiry"
        className="group flex items-center gap-2 bg-[#25D366] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl hover:bg-[#20ba59] hover:shadow-gold-500/20 hover:scale-105 active:scale-95 transition-all duration-300 border border-white/20"
      >
        <MessageCircle className="w-6 h-6 shrink-0 fill-current" />
        <span className="hidden sm:inline-block font-sans text-xs font-semibold tracking-wide pr-1">
          WhatsApp Enquiry
        </span>
      </a>
    </aside>
  );
};
