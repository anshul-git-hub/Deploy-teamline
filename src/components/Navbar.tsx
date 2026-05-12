import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { company } from "@/lib/data";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/properties", label: "Properties" },
  { to: "/amenities", label: "Amenities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-forest text-cream shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-gold font-bold tracking-wide text-lg sm:text-xl">
          TEAM LINE ECO RESORT
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-cream/90 hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden text-cream"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-cream/10 bg-forest-deep px-4 py-3 flex flex-col gap-3 animate-fade-in">
          <div className="flex flex-wrap items-center gap-3 bg-cream/5 border border-cream/15 rounded-md px-3 py-2 text-xs text-cream/90">
            <a href={`tel:${company.phoneRaw}`} className="inline-flex items-center gap-1 text-gold font-semibold">
              <Phone size={14} /> {company.phone}
            </a>
            <span className="opacity-50">|</span>
            <span className="inline-flex items-center gap-1"><MapPin size={14} /> Alair, Hyderabad–Warangal Highway</span>
          </div>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-cream/90 hover:text-gold py-1"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
