import { Link } from "@tanstack/react-router";
import { Camera } from "lucide-react";

interface Props {
  slug: string;
  name: string;
  builtUp: string;
  land: string;
  price: string;
  rental: string;
  badge?: string | null;
  imgId?: string;
  image?: string;
  features?: string[];
  detailed?: boolean;
  whatsappUrl: string;
}

export function PropertyCard({
  slug, name, builtUp, land, price, rental, badge, imgId, image, features, detailed, whatsappUrl,
}: Props) {
  return (
    <article className="group relative flex flex-col h-full rounded-2xl bg-paper border border-khaki/10 shadow-sm overflow-hidden transition-all hover:border-khaki/20 hover:shadow-2xl hover:-translate-y-1">
      {badge && (
        <span className="absolute top-4 left-4 z-10 bg-ink text-bone text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-widest shadow-lg">
          {badge}
        </span>
      )}
      <Link to="/properties/$slug" params={{ slug }} className="block relative overflow-hidden">
        <div
          id={imgId}
          className="aspect-[4/3] bg-muted shimmer flex flex-col items-center justify-center text-muted-foreground transition-transform duration-500 group-hover:scale-110"
        >
          {/* REPLACE WITH CLIENT PHOTO */}
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <>
              <Camera size={32} className="opacity-40" />
              <span className="text-xs font-bold mt-2 opacity-60">Photo Coming Soon</span>
            </>
          )}
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-1">
        <Link to="/properties/$slug" params={{ slug }}>
          <h3 className="text-2xl font-bold text-ink hover:text-khaki transition-colors min-h-[5rem] flex items-center leading-tight">{name}</h3>
        </Link>
        
        <div className="mt-4 mb-8 grid grid-cols-2 gap-4 text-sm">
          <div className="bg-bone p-3 rounded-xl border border-khaki/5 flex flex-col justify-center min-h-[80px]">
            <span className="block text-[10px] uppercase font-bold text-khaki tracking-widest mb-1">Built-up</span>
            <span className="text-ink font-bold text-lg leading-tight">{builtUp}</span>
          </div>
          <div className="bg-bone p-3 rounded-xl border border-khaki/5 flex flex-col justify-center min-h-[80px]">
            <span className="block text-[10px] uppercase font-bold text-khaki tracking-widest mb-1">Land Area</span>
            <span className="text-ink font-bold text-lg leading-tight">{land}</span>
          </div>
        </div>

        <div className="mt-auto pt-6 flex flex-col gap-1 border-t border-border">
          <div className="flex justify-between items-baseline gap-2">
            <span className="text-xs font-bold text-khaki uppercase tracking-widest whitespace-nowrap">Price</span>
            <span className="text-xl md:text-2xl font-bold text-ink text-right">{price}</span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="text-xs font-bold text-khaki uppercase tracking-widest whitespace-nowrap">Rental</span>
            <span className="text-sm md:text-md font-bold text-ink/70 leading-none text-right">{rental}</span>
          </div>
        </div>

        {detailed && features && (
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            {features.map((f) => (
              <li key={f} className="flex gap-2"><span className="text-gold font-bold">✓</span>{f}</li>
            ))}
          </ul>
        )}
        
        <div className="mt-8 grid grid-cols-2 gap-3">
          <Link
            to="/properties/$slug"
            params={{ slug }}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex justify-center items-center rounded-xl bg-bone text-ink font-bold py-4 text-xs uppercase tracking-widest hover:bg-white transition-all shadow-sm border border-khaki/10"
          >
            Details
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex justify-center items-center rounded-xl bg-ink text-bone font-bold py-4 text-xs uppercase tracking-widest hover:bg-[#25D366] hover:text-white transition-all shadow-xl shadow-ink/10"
          >
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
}
