import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { CTABanner } from "@/components/CTABanner";
import { galleryItems, type GalleryCategory } from "@/lib/data";
import { ChevronLeft, ChevronRight, X, Camera, Image as ImageIcon } from "lucide-react";
import { GallerySlider } from "@/components/GallerySlider";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Team Line Eco Resort" },
      { name: "description", content: "Photo gallery of Team Line Eco Resort villas, amenities, layout and location at Alair, Hyderabad–Warangal Highway." },
    ],
  }),
  component: GalleryPage,
});

const tabs: GalleryCategory[] = ["All", "Villas", "Amenities", "Layout", "Location"];

function GalleryPage() {
  const [filter, setFilter] = useState<GalleryCategory>("All");
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const items = filter === "All" ? [...galleryItems] : galleryItems.filter((g) => g.category === filter);

  const open = (i: number) => setActiveIdx(i);
  const close = () => setActiveIdx(null);
  const prev = () => setActiveIdx((i) => (i === null ? null : (i - 1 + items.length) % items.length));
  const next = () => setActiveIdx((i) => (i === null ? null : (i + 1) % items.length));

  return (
    <>
      <section className="bg-ink text-bone py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight">Our Project <span className="text-khaki italic font-serif">Gallery</span></h1>
        <p className="mt-4 text-bone/60 max-w-2xl mx-auto font-medium uppercase tracking-widest text-[10px]">
          A visual tour of Team Line Eco Resort — Alair, Hyderabad.
        </p>
      </section>

      <section className="py-12 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all border-2 ${
                  filter === t
                    ? "bg-khaki text-ink border-khaki shadow-xl shadow-khaki/10"
                    : "bg-bone text-ink/60 border-khaki/10 hover:border-khaki/30"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {items.map((g, i) => (
              <button
                key={g.id}
                id={g.id}
                onClick={() => open(i)}
                className="mb-6 w-full break-inside-avoid bg-muted shimmer rounded-2xl overflow-hidden hover:ring-4 hover:ring-gold transition-all group block shadow-sm hover:shadow-2xl hover:-translate-y-1 relative"
                style={{ aspectRatio: i % 3 === 0 ? "4/5" : i % 3 === 1 ? "4/3" : "1/1" }}
              >
                {/* REPLACE WITH CLIENT PHOTO */}
                <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground gap-2">
                  {(g as any).images ? (
                    <GallerySlider images={(g as any).images} alt={g.label} interval={(g as any).interval} />
                  ) : (
                    <>
                      <Camera size={32} className="opacity-40 group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-forest/60">{g.label}</span>
                    </>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeIdx !== null && (
        <div
          className="fixed inset-0 z-[80] bg-forest-deep/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={close}
        >
          <button onClick={close} className="absolute top-6 right-6 text-cream hover:text-gold transition-colors p-2" aria-label="Close">
            <X size={32} />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-10 text-cream p-4 bg-cream/10 rounded-full hover:bg-gold hover:text-forest-deep transition-all"
            aria-label="Previous"
          >
            <ChevronLeft size={32} />
          </button>
          
          <div
            className="bg-muted shimmer w-full max-w-5xl aspect-[16/9] rounded-3xl flex flex-col items-center justify-center text-forest gap-4 shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* REPLACE WITH CLIENT PHOTO */}
            {(items[activeIdx] as any).images ? (
              <GallerySlider images={(items[activeIdx] as any).images} alt={items[activeIdx].label} interval={(items[activeIdx] as any).interval || 3000} />
            ) : (
              <>
                <Camera size={80} className="opacity-30" />
                <p className="text-3xl font-black text-forest-deep">{items[activeIdx].label}</p>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">📷 High Resolution Photo Coming Soon</p>
              </>
            )}
          </div>
          
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-10 text-cream p-4 bg-cream/10 rounded-full hover:bg-gold hover:text-forest-deep transition-all"
            aria-label="Next"
          >
            <ChevronRight size={32} />
          </button>
          
          <div className="absolute bottom-10 left-0 right-0 text-center text-gold font-black uppercase tracking-[0.3em] text-sm">
            {activeIdx + 1} <span className="text-cream/50">/</span> {items.length}
          </div>
        </div>
      )}

      <CTABanner />
    </>
  );
}
