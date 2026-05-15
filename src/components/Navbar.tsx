import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, MapPin, Scale } from "lucide-react";
import { company } from "@/lib/data";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/properties", label: "Properties" },
  { to: "/compare", label: "Compare" },
  { to: "/amenities", label: "Amenities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 bg-bone text-ink border-b border-khaki/10 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/assets/logo-infra.png" alt="Logo" className="h-10 w-auto" />
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-0.5">Est. 2024</span>
            <span className="text-ink font-bold text-xl leading-none">
              TEAM LINE ECO RESORTS
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="nav-link text-[11px] font-bold uppercase tracking-widest text-ink/80 hover:text-ink transition-colors"
              activeProps={{ className: "text-ink after:!w-full" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="lg:hidden text-ink bg-ink/5 p-2 rounded-lg"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-khaki/10 bg-paper px-4 py-6 flex flex-col gap-4 animate-fade-in shadow-2xl relative z-[60]">
          <div className="flex flex-col gap-2 bg-khaki/5 border border-khaki/10 rounded-lg px-4 py-3">
            <p className="text-[10px] font-bold text-khaki uppercase tracking-widest">Contact Support</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <a href={`tel:${company.phoneRaw}`} className="inline-flex items-center gap-1.5 text-ink font-bold text-sm">
                <Phone size={14} className="text-khaki" /> {company.phone}
              </a>
              <span className="hidden sm:inline text-ink/20">|</span>
              <span className="inline-flex items-center gap-1.5 text-ink/70 text-xs font-medium">
                <MapPin size={14} className="text-khaki" /> Alair, HYD-WGL Highway
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-2">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-ink/90 hover:text-ink py-3 px-4 bg-bone rounded-lg text-xs font-bold uppercase tracking-widest transition-colors"
                activeProps={{ className: "bg-khaki/10 text-ink border border-khaki/20" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
