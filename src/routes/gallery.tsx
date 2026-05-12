import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { CTABanner } from "@/components/CTABanner";
import { galleryItems, type GalleryCategory } from "@/lib/data";
import { ChevronLeft, ChevronRight, X, Camera } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Team Line Eco Resort" },
      { name: "description", content: "Photo gallery of Team Line Eco Resort villas, amenities, layout and location at Alair, Hyderabad–Warangal Highway." },
      { property: "og:title", content: "Gallery — Team Line Eco Resort" },
      { property: "og:description", content: "Explore villas, amenities and layout photos of Team Line Eco Resort." },
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
    <Layout>
      <section className="bg-forest text-cream py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Our Project <span className="text-gold">Gallery</span></h1>
        <p className="mt-4 text-cream/80">Team Line Eco Resort — Alair, Hyderabad–Warangal Highway</p>
      </section>

      <section className="py-10 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition border ${
                  filter === t
                    ? "bg-forest text-cream border-forest"
                    : "bg-card text-forest border-border hover:border-gold"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {items.map((g, i) => (
              <button
                key={g.id}
                id={g.id}
                onClick={() => open(i)}
                className="mb-4 w-full break-inside-avoid bg-[#D1D5DB] rounded-xl overflow-hidden hover:ring-2 hover:ring-gold transition group block"
                style={{ aspectRatio: i % 3 === 0 ? "4/5" : i % 3 === 1 ? "4/3" : "1/1" }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground gap-2">
                  <Camera size={28} />
                  <span className="text-sm font-semibold text-forest">{g.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeIdx !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={close}
        >
          <button onClick={close} className="absolute top-4 right-4 text-white p-2" aria-label="Close">
            <X size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 text-white p-3 bg-white/10 rounded-full hover:bg-white/20"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>
          <div
            className="bg-[#D1D5DB] w-full max-w-4xl aspect-[4/3] rounded-xl flex flex-col items-center justify-center text-forest gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <Camera size={64} />
            <p className="text-2xl font-bold">{items[activeIdx].label}</p>
            <p className="text-sm text-muted-foreground">📷 Photo Coming Soon</p>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 text-white p-3 bg-white/10 rounded-full hover:bg-white/20"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>
          <div className="absolute bottom-6 left-0 right-0 text-center text-white/80 text-sm">
            {activeIdx + 1} / {items.length}
          </div>
        </div>
      )}

      <CTABanner />
    </Layout>
  );
}
