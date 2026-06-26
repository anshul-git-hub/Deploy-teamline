import { Link } from "@tanstack/react-router";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

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
  images?: readonly string[] | string[];
  features?: string[];
  detailed?: boolean;
  whatsappUrl: string;
}

export function PropertyCard({
  slug, name, builtUp, land, price, rental, badge, imgId, image, images, features, detailed, whatsappUrl,
}: Props) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const hasImages = images && images.length > 1;
  const imageList = hasImages ? images : (image ? [image] : []);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % imageList.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  return (
    <article className="group relative flex flex-col h-full rounded-2xl bg-paper border border-khaki/10 shadow-sm overflow-hidden transition-all hover:border-khaki/20 hover:shadow-2xl hover:-translate-y-1">
      {badge && (
        <span className="absolute top-4 left-4 z-10 bg-ink text-bone text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-widest shadow-lg">
          {badge}
        </span>
      )}
      
      <div className="relative aspect-[4/3] bg-muted overflow-hidden group/img-container">
        <Link to="/properties/$slug" params={{ slug }} className="block w-full h-full relative overflow-hidden">
          <div
            id={imgId}
            className="w-full h-full transition-transform duration-500 hover:scale-105"
          >
            {imageList.length > 0 ? (
              imageList.map((img, idx) => (
                <img
                  key={img}
                  src={img}
                  alt={`${name} - Image ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    idx === currentIdx ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                />
              ))
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                <Camera size={32} className="opacity-40" />
                <span className="text-xs font-bold mt-2 opacity-60">Photo Coming Soon</span>
              </div>
            )}
          </div>
        </Link>

        {hasImages && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/45 text-white rounded-full p-2 hover:bg-black/75 md:opacity-0 md:group-hover/img-container:opacity-100 opacity-100 transition-all shadow-md active:scale-95 duration-200 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft size={16} strokeWidth={2.5} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/45 text-white rounded-full p-2 hover:bg-black/75 md:opacity-0 md:group-hover/img-container:opacity-100 opacity-100 transition-all shadow-md active:scale-95 duration-200 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight size={16} strokeWidth={2.5} />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-black/25 backdrop-blur-md px-3 py-1.5 rounded-full md:opacity-0 md:group-hover/img-container:opacity-100 opacity-100 transition-all">
              {imageList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentIdx(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIdx ? "bg-white w-3" : "bg-white/50 w-1.5"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      
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
