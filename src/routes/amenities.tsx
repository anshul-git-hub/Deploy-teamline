import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import { amenities, layoutHighlights } from "@/lib/data";

export const Route = createFileRoute("/amenities")({
  head: () => ({
    meta: [
      { title: "Amenities — Team Line Eco Resort" },
      { name: "description", content: "Resort-style amenities: pool, box cricket, open gym, projector lounge and more." },
    ],
  }),
  component: AmenitiesPage,
});

function AmenitiesPage() {
  return (
    <Layout>
      <section className="bg-forest text-cream py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Resort-Style <span className="text-gold">Amenities</span></h1>
        <p className="mt-4 text-cream/80 max-w-2xl mx-auto">Designed for relaxation, recreation, and everyday wellness.</p>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-6xl grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {amenities.map((a) => (
            <div key={a.id} className="bg-card border border-border rounded-xl overflow-hidden hover:border-gold transition">
              <div
                id={`amenity-img-${a.id}`}
                className="aspect-[16/9] bg-[#D1D5DB] flex items-center justify-center text-muted-foreground"
              >
                📷 Photo Coming Soon
              </div>
              <div className="p-6">
                <div className="text-4xl">{a.icon}</div>
                <h3 className="mt-3 text-2xl font-bold text-forest">{a.title}</h3>
                <p className="mt-2 text-muted-foreground">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary/40">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Layout Features" title="Premium Infrastructure" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {layoutHighlights.map((h) => (
              <div key={h.title} className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-gold transition">
                <span className="text-2xl">{h.icon}</span>
                <span className="font-medium text-forest text-sm md:text-base">{h.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
