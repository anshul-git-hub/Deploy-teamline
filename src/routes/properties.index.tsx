import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PropertyCard } from "@/components/PropertyCard";
import { SectionHeader } from "@/components/SectionHeader";
import { properties } from "@/lib/data";

export const Route = createFileRoute("/properties/")({
  head: () => ({
    meta: [
      { title: "Villas for Sale at Alair — Team Line Eco Resort" },
      { name: "description", content: "Explore our range of Duplex, 2BHK and 1BHK villas on the Hyderabad–Warangal Highway. Starting ₹39 Lakhs with bank loan facility." },
    ],
  }),
  component: PropertiesPage,
});

function PropertiesPage() {
  return (
    <Layout>
      <section className="bg-forest text-cream py-16 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-black">Our <span className="text-gold">Villas</span></h1>
        <p className="mt-4 text-cream/80 max-w-2xl mx-auto font-medium">
          Premium DTCP & RERA approved eco resort villas designed for comfort and high ROI.
        </p>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {properties.map((p, i) => (
              <div key={p.id} className="reveal reveal-up" style={{ transitionDelay: `${i * 150}ms` }}>
                <PropertyCard {...p} detailed />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black text-forest mb-6">Investment Benefits</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-2xl shadow-sm">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="font-bold text-forest uppercase tracking-widest text-xs mb-2">High Appreciation</h3>
              <p className="text-sm text-muted-foreground">Located on the rapidly growing Hyderabad–Warangal growth corridor.</p>
            </div>
            <div className="p-6 bg-card rounded-2xl shadow-sm">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-bold text-forest uppercase tracking-widest text-xs mb-2">Passive Income</h3>
              <p className="text-sm text-muted-foreground">Immediate rental returns through our professionally managed lease model.</p>
            </div>
            <div className="p-6 bg-card rounded-2xl shadow-sm">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="font-bold text-forest uppercase tracking-widest text-xs mb-2">Clear Title</h3>
              <p className="text-sm text-muted-foreground">100% DTCP & RERA approved layout with hassle-free bank loan support.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
