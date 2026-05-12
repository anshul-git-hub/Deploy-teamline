import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { CTABanner } from "@/components/CTABanner";
import { company, trustBadges } from "@/lib/data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Team Line Eco Resort" },
      { name: "description", content: "Team Line Infra Developers builds premium eco resort villas with DTCP & RERA approvals." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <section className="bg-forest text-cream py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">About <span className="text-gold">Team Line</span></h1>
        <p className="mt-4 text-cream/80 max-w-2xl mx-auto">Building premium eco resort villas at Alair, Hyderabad–Warangal Highway.</p>
      </section>
      <section className="py-16 px-4">
        <div className="mx-auto max-w-3xl prose prose-neutral">
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span className="font-bold text-forest">{company.parent}</span> is committed to creating sustainable, luxury communities that blend nature with modern living. Team Line Eco Resort is our flagship project — a DTCP & RERA approved gated community of villas designed for both comfortable living and strong rental returns.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {trustBadges.map((b) => (
              <div key={b.label} className="flex items-center gap-3 bg-card border border-border rounded-lg p-4">
                <span className="text-2xl">{b.icon}</span>
                <span className="font-semibold text-forest">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </Layout>
  );
}
