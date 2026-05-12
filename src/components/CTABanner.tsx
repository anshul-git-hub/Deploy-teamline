import { company } from "@/lib/data";
import { Phone, MessageCircle } from "lucide-react";

export function CTABanner() {
  return (
    <section className="bg-forest text-cream py-14 px-4">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gold">
          Ready to Invest? Talk to Our Expert Today
        </h2>
        <p className="mt-3 text-cream/80">
          Get personalized site visits, pricing & EMI options.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${company.phoneRaw}`}
            className="inline-flex items-center gap-2 bg-gold text-forest-deep font-bold px-6 py-3 rounded-md hover:brightness-110"
          >
            <Phone size={18} /> Call Now
          </a>
          <a
            href={company.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-cream text-cream font-bold px-6 py-3 rounded-md hover:bg-cream hover:text-forest-deep transition"
          >
            <MessageCircle size={18} /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
