import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { amenities, projectFeatures } from "@/lib/data";
import { Camera, CheckCircle2 } from "lucide-react";
import { GallerySlider } from "@/components/GallerySlider";
import { galleryItems } from "@/lib/data";

export const Route = createFileRoute("/amenities")({
  head: () => ({
    meta: [
      { title: "Amenities — Team Line Eco Resort" },
      { name: "description", content: "World-class amenities including swimming pool, rain dance, box cricket, and open gym at Team Line Eco Resort." },
    ],
  }),
  component: AmenitiesPage,
});

function AmenitiesPage() {
  return (
    <Layout>
      <section className="bg-ink text-bone py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight">Resort <span className="text-khaki italic font-serif">Amenities</span></h1>
        <p className="mt-4 text-bone/60 max-w-2xl mx-auto font-medium uppercase tracking-widest text-[10px]">
          A lifestyle of leisure and wellness with our curated resort-style facilities.
        </p>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl space-y-20">
          {amenities.map((a, i) => (
            <div 
              key={a.id} 
              className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center reveal ${i % 2 === 1 ? 'reveal-left' : 'reveal-up'}`}
            >
              <div className="flex-1 w-full">
                <div 
                  id={a.id}
                  className="aspect-video bg-muted shimmer rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center justify-center text-muted-foreground border-4 border-secondary relative group"
                >
                  {/* REPLACE WITH CLIENT PHOTO */}
                  {a.image ? (
                    <img 
                      src={a.image} 
                      alt={a.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <>
                      <Camera size={64} className="opacity-20" />
                      <span className="font-black uppercase tracking-widest text-sm mt-4">{a.title}</span>
                    </>
                  )}
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <div className="text-5xl">{a.icon}</div>
                <h2 className="text-3xl md:text-4xl font-black text-ink uppercase tracking-tight">{a.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {a.desc} Our {a.title.toLowerCase()} is designed to provide residents with a premium experience, ensuring every moment spent here is filled with joy and relaxation.
                </p>
                <div className="pt-4 grid grid-cols-2 gap-4">
                  {["Premium Quality", "24/7 Access", "Safe Environment", "Well Maintained"].map(tag => (
                    <div key={tag} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-khaki" />
                      <span className="text-[10px] font-black text-ink uppercase tracking-widest">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-forest-deep text-cream">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-[0.2em]">More Infrastructure Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "CC Roads", d: "Wide 40' & 33' concrete roads for smooth connectivity.", id: "layout-road" },
              { t: "Underground Sewage", d: "Modern underground drainage system for a clean environment.", id: "layout-sewage" },
              { t: "Solar Street Lights", d: "Energy-efficient automatic street lighting across the layout.", id: "layout-solar" },
              { t: "Grand Entrance", d: "Designer entrance arch with 24/7 security cabin.", id: "layout-arch" },
              { t: "Compound Wall", d: "Entire project is secured with a high-quality compound wall.", id: "layout-wall" },
              { t: "CCTV Surveillance", d: "Round-the-clock security with smart camera monitoring.", id: "layout-cctv" },
            ].map((f) => {
              const galleryItem = galleryItems.find(g => 
                g.label.toLowerCase().includes(f.t.toLowerCase().replace("s", "")) || 
                (g as any).id === f.id ||
                g.label === f.t
              );
              return (
                <div key={f.t} className="bg-bone border border-khaki/10 p-8 rounded-2xl hover:border-khaki/30 transition-colors group">
                  <div id={f.id} className="h-40 bg-paper rounded-xl mb-6 flex flex-col items-center justify-center text-ink/10 overflow-hidden shadow-inner">
                    {/* REPLACE WITH CLIENT PHOTO */}
                    {galleryItem && (galleryItem as any).images ? (
                      <GallerySlider images={(galleryItem as any).images} alt={f.t} />
                    ) : (
                      <Camera size={32} />
                    )}
                  </div>
                  <h3 className="text-xl font-black text-ink mb-2 uppercase tracking-tight">{f.t}</h3>
                  <p className="text-xs font-medium text-ink/60 leading-relaxed uppercase tracking-widest">{f.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
