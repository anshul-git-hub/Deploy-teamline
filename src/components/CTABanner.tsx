import { company } from "@/lib/data";
import { Phone, MessageCircle } from "lucide-react";

export function CTABanner() {
  return (
    <section className="bg-ink text-bone py-24 px-4">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-khaki leading-tight">
          Ready to Invest? Talk to Our Expert
        </h2>
        <p className="mt-4 text-bone/50 text-lg font-medium">
          Get personalized site visits and pricing details today.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${company.phoneRaw}`}
            className="group relative inline-flex items-center justify-center bg-khaki text-ink font-bold px-8 py-4 rounded-xl hover:bg-[#2563EB] hover:text-white transition-all shadow-xl shadow-khaki/10 uppercase tracking-widest text-xs overflow-hidden"
          >
            <span className="flex items-center gap-2 group-hover:-translate-x-full transition-transform duration-500">
              <Phone size={18} /> Call Now
            </span>
            <span className="absolute inset-0 flex items-center justify-center gap-2 translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-[#2563EB]">
               <Phone size={18} /> {company.phone}
            </span>
          </a>
          <a
            href={company.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center border-2 border-khaki/30 text-bone font-bold px-8 py-4 rounded-xl hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all uppercase tracking-widest text-xs overflow-hidden"
          >
            <span className="flex items-center gap-2 group-hover:-translate-x-full transition-transform duration-500">
              <MessageCircle size={18} /> WhatsApp
            </span>
            <span className="absolute inset-0 flex items-center justify-center gap-2 translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-[#25D366]">
               <MessageCircle size={18} /> Chat with Us
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
