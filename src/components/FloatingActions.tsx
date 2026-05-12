import { Phone, MessageCircle } from "lucide-react";
import { company } from "@/lib/data";

export function FloatingActions() {
  return (
    <>
      {/* Desktop / tablet floating buttons */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-50 flex-col gap-3">
        <a
          href={`tel:${company.phoneRaw}`}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg hover:scale-105 transition-transform"
          aria-label="Call"
        >
          <Phone size={24} />
        </a>
        <a
          href={company.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:scale-105 transition-transform"
          aria-label="WhatsApp"
        >
          <MessageCircle size={24} />
        </a>
      </div>

      {/* Mobile bottom bar */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 flex border-t border-border bg-background shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
        <a
          href={`tel:${company.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600 text-white font-semibold"
        >
          <Phone size={18} /> Call Now
        </a>
        <a
          href={company.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-500 text-white font-semibold"
        >
          <MessageCircle size={18} /> WhatsApp
        </a>
      </div>
      {/* spacer for mobile bar */}
      <div className="sm:hidden h-14" aria-hidden />
    </>
  );
}
