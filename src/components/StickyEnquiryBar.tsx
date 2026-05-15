import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { company, whatsappGeneralUrl } from "@/lib/data";

export function StickyEnquiryBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after 600px scroll
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-50 bg-ink text-bone py-3 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] transition-all duration-500 hidden lg:block border-t border-khaki/10 ${visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
        <p className="text-xs font-bold flex items-center gap-2 uppercase tracking-widest text-bone/60">
          🏡 Team Line Eco Resort — Villas from ₹39 Lakhs | <span className="text-khaki">DTCP & RERA Approved</span>
        </p>
        <div className="flex gap-4">
          <a 
            href={`tel:${company.phoneRaw}`}
            className="group relative overflow-hidden bg-ink text-bone text-[10px] font-bold px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-[#2563EB] hover:text-white transition-all uppercase tracking-widest border border-khaki/20"
          >
            <span className="flex items-center gap-2 group-hover:-translate-x-full transition-transform duration-500">
              <Phone size={14} /> Call Now
            </span>
            <span className="absolute inset-0 flex items-center justify-center gap-2 translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-[#2563EB]">
              <Phone size={14} /> {company.phone}
            </span>
          </a>
          <a 
            href={whatsappGeneralUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-khaki text-ink text-[10px] font-bold px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-[#25D366] hover:text-white transition-all uppercase tracking-widest"
          >
            <span className="flex items-center gap-2 group-hover:-translate-x-full transition-transform duration-500">
              <MessageCircle size={14} /> WhatsApp
            </span>
            <span className="absolute inset-0 flex items-center justify-center gap-2 translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-[#25D366]">
              <MessageCircle size={14} /> Chat Now
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
