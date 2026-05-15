import { Link } from "@tanstack/react-router";
import { company, trustBadges } from "@/lib/data";
import { Phone, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-bone pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4">
        {/* TRUST BADGE STRIP */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16 pb-12 border-b border-khaki/10">
          {trustBadges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-khaki font-bold text-[10px] md:text-xs uppercase tracking-widest">
              <span className="text-xl opacity-70">{b.icon}</span> {b.label}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex flex-col group">
              <span className="text-khaki font-bold tracking-widest text-2xl group-hover:text-white transition-colors">TEAM LINE</span>
              <span className="text-[10px] font-bold text-khaki/30 uppercase tracking-widest">Est. 2024</span>
            </Link>
            <p className="text-bone/40 text-xs leading-relaxed max-w-xs font-medium uppercase tracking-widest">
              Premium DTCP & RERA approved eco resort villas on Hyderabad–Warangal Highway.
            </p>
          </div>

          <div>
            <h4 className="text-khaki font-bold uppercase tracking-widest text-[10px] mb-6">Quick Links</h4>
            <ul className="space-y-3 text-xs font-bold text-bone/60 uppercase tracking-widest">
              {["About", "Properties", "Compare", "Amenities", "Gallery", "Contact"].map((l) => (
                <li key={l}>
                  <Link to={`/${l.toLowerCase()}`} className="hover:text-khaki transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-khaki font-bold text-sm mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm font-bold text-bone/60">
              <li className="flex gap-3">
                <MapPin className="text-khaki shrink-0" size={16} />
                <span>{company.office}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-khaki shrink-0" size={16} />
                <a href={`tel:${company.phoneRaw}`} className="hover:text-khaki">{company.phone}</a>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="text-khaki shrink-0" size={16} />
                <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-khaki">WhatsApp</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-khaki font-bold text-sm mb-6">Approvals</h4>
            <div className="space-y-4">
              <div className="bg-bone/5 border border-khaki/10 p-5 rounded-2xl">
                <p className="text-xs font-black text-khaki uppercase tracking-widest mb-1">RERA Approved</p>
                <p className="text-[10px] text-bone/40 uppercase tracking-widest">TS-RERA Registered</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-khaki/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black text-bone/20 uppercase tracking-[0.3em]">
          <p>© 2025 {company.parent}</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-khaki transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-khaki transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
