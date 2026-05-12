import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PropertyCard } from "@/components/PropertyCard";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import { properties } from "@/lib/data";

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title: "Properties — Team Line Eco Resort" },
      { name: "description", content: "Explore Duplex Villas and Bangalore-style 1 & 2 BHK villas at Team Line Eco Resort, Alair." },
    ],
  }),
  component: PropertiesPage,
});

function PropertiesPage() {
  return (
    <Layout>
      <section className="bg-forest text-cream py-16 px-4">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-gold tracking-widest text-xs font-semibold uppercase">Properties</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">Villas Built for Living & Earning</h1>
          <p className="mt-4 text-cream/80 max-w-2xl mx-auto">
            DTCP & RERA approved eco resort villas with immediate rental potential.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p) => <PropertyCard key={p.id} {...p} detailed />)}
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary/40">
        <div className="mx-auto max-w-5xl">
          <SectionHeader eyebrow="Compare" title="Property Comparison" />
          <div className="overflow-x-auto rounded-xl border border-border bg-card">
            <table className="w-full text-sm">
              <thead className="bg-forest text-cream">
                <tr>
                  <th className="text-left p-4">Feature</th>
                  {properties.map((p) => (
                    <th key={p.id} className="text-left p-4">{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Built-up", (p: any) => p.builtUp],
                  ["Land", (p: any) => p.land],
                  ["Price", (p: any) => p.price],
                  ["Rental Income", (p: any) => p.rental],
                ].map(([label, fn]: any) => (
                  <tr key={label} className="border-t border-border">
                    <td className="p-4 font-semibold text-forest">{label}</td>
                    {properties.map((p) => (
                      <td key={p.id} className="p-4 text-muted-foreground">{fn(p)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
