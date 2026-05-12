import { Link } from "@tanstack/react-router";
import { company } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-cream/90 mt-16">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <h3 className="text-gold font-bold text-lg">{company.parent}</h3>
          <p className="mt-2 text-sm text-cream/70">
            Team Line Eco Resort, Alair, Hyderabad–Warangal Highway
          </p>
        </div>
        <div>
          <h4 className="text-gold font-semibold mb-3">Contact</h4>
          <p className="text-sm">Phone & WhatsApp</p>
          <a href={`tel:${company.phoneRaw}`} className="text-sm hover:text-gold">
            {company.phone}
          </a>
        </div>
        <div>
          <h4 className="text-gold font-semibold mb-3">Office</h4>
          <p className="text-sm text-cream/70">{company.office}</p>
        </div>
        <div>
          <h4 className="text-gold font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/properties" className="hover:text-gold">Properties</Link></li>
            <li><Link to="/amenities" className="hover:text-gold">Amenities</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-4 text-center text-xs text-cream/60">
        © {new Date().getFullYear()} {company.parent}. All rights reserved.
      </div>
    </footer>
  );
}
