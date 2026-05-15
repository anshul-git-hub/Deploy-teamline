import { Phone, MessageCircle } from "lucide-react";
import { company, whatsappGeneralUrl } from "@/lib/data";

export function FloatingActions() {
  return (
    <>
      {/* Laptop / tablet floating buttons - Restored to Bottom Right */}
      <div className="hidden sm:flex fixed bottom-8 right-8 z-50 flex-col gap-5 items-end">
        <a
          href={`tel:${company.phoneRaw}`}
          className="group flex items-center justify-end w-16 hover:w-52 h-16 rounded-full bg-[#2563EB] text-white shadow-2xl transition-all duration-500 pulse-blue border border-white/20 overflow-hidden pr-4"
          aria-label="Call"
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-4 font-black text-xs whitespace-nowrap uppercase tracking-widest">Call: {company.phoneRaw.replace('+91', '')}</span>
          <Phone size={28} className="shrink-0" />
        </a>
        <a
          href={whatsappGeneralUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-end w-16 hover:w-48 h-16 rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-500 pulse-green border border-white/20 overflow-hidden pr-4"
          aria-label="WhatsApp"
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-4 font-black text-xs whitespace-nowrap uppercase tracking-widest">WhatsApp</span>
          <MessageCircle size={28} className="shrink-0" />
        </a>
      </div>

      {/* Mobile Floating Buttons - Corner Placement with Expansion */}
      <div className="sm:hidden fixed bottom-6 right-6 z-[100] flex flex-col gap-4 items-end">
        <a
          href={whatsappGeneralUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-end w-14 hover:w-44 h-14 rounded-full bg-[#25D366] text-white shadow-2xl active:w-44 transition-all duration-500 hover:-translate-x-2 active:-translate-x-2 pulse-green border border-white/20 overflow-hidden pr-3.5"
          aria-label="WhatsApp"
        >
          <span className="opacity-0 translate-x-4 group-hover:opacity-100 group-active:opacity-100 group-hover:translate-x-0 group-active:translate-x-0 transition-all duration-500 mr-3 font-black text-xs whitespace-nowrap uppercase tracking-widest">WhatsApp</span>
          <MessageCircle size={26} fill="currentColor" className="shrink-0 transition-transform duration-500 group-hover:scale-110" />
        </a>
        <a
          href={`tel:${company.phoneRaw}`}
          className="group flex items-center justify-end w-14 hover:w-48 h-14 rounded-full bg-[#2563EB] text-white shadow-2xl active:w-48 transition-all duration-500 hover:-translate-x-2 active:-translate-x-2 pulse-blue border border-white/20 overflow-hidden pr-3.5"
          aria-label="Call"
        >
          <span className="opacity-0 translate-x-4 group-hover:opacity-100 group-active:opacity-100 group-hover:translate-x-0 group-active:translate-x-0 transition-all duration-500 mr-3 font-black text-[10px] whitespace-nowrap uppercase tracking-widest">Call: {company.phoneRaw.replace('+91', '')}</span>
          <Phone size={26} fill="currentColor" className="shrink-0 transition-transform duration-500 group-hover:scale-110" />
        </a>
      </div>
      {/* spacer for mobile bar - handled by main padding in Layout.tsx */}
    </>
  );
}
