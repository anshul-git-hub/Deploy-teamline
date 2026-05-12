import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PropertyCard } from "@/components/PropertyCard";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import {
  properties, layoutHighlights, amenities, connectivity, trustBadges, company,
} from "@/lib/data";
import { Phone, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Team Line Eco Resort — Luxury Villas at Alair, Hyderabad" },
      { name: "description", content: "DTCP & RERA approved eco resort villas on Hyderabad–Warangal Highway. Starting ₹39 Lakhs with immediate rental income." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center bg-forest-deep text-cream overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at top right, oklch(0.55 0.13 150) 0%, transparent 60%), radial-gradient(ellipse at bottom left, oklch(0.4 0.1 85) 0%, transparent 50%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/70 via-forest-deep/85 to-forest-deep" />
        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center">
          <p className="text-gold tracking-[0.3em] text-xs font-semibold">TEAM LINE ECO RESORT</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
            Experience Luxury Living in <span className="text-gold">Nature's Lap</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-cream/85 max-w-2xl mx-auto">
            DTCP & RERA Approved Eco Resort Villas on Hyderabad–Warangal Highway
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/properties"
              className="bg-gold text-forest-deep font-bold px-7 py-3.5 rounded-md hover:brightness-110 transition"
            >
              Explore Properties
            </Link>
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-cream text-cream font-bold px-7 py-3.5 rounded-md hover:bg-cream hover:text-forest-deep transition"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3 md:gap-5">
            {trustBadges.map((b) => (
              <span key={b.label} className="inline-flex items-center gap-2 bg-cream/10 border border-cream/20 backdrop-blur px-4 py-2 rounded-full text-sm">
                <span>{b.icon}</span>{b.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-forest text-cream py-8">
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "3", l: "Properties" },
            { n: "₹39 L", l: "Starting Price" },
            { n: "165", l: "Sq. Yards Land" },
            { n: "₹30K", l: "Monthly Rental" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-3xl md:text-4xl font-bold text-gold">{s.n}</div>
              <div className="text-xs md:text-sm text-cream/70 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Why Choose Us" title="A Premium Investment You Can Trust" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📍", t: "Prime Location", d: "On Hyderabad–Warangal Highway, 15 mins to Yadagirigutta Temple." },
              { icon: "🏛", t: "DTCP & RERA Approved", d: "Fully legal with bank loan facility available." },
              { icon: "💰", t: "Immediate Rental Income", d: "Earn ₹10K–₹30K per month starting day one." },
              { icon: "🌄", t: "Tourism Hub", d: "Highway facing, high footfall, premium investment zone." },
            ].map((c) => (
              <div key={c.t} className="bg-card border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition">
                <div className="text-4xl">{c.icon}</div>
                <h3 className="mt-4 font-bold text-forest text-lg">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTIES */}
      <section className="py-20 px-4 bg-secondary/40">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Our Properties" title="Choose Your Perfect Villa" subtitle="Three thoughtfully designed homes built for living, leasing, and lasting value." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((p) => <PropertyCard key={p.id} {...p} />)}
          </div>
        </div>
      </section>

      {/* LAYOUT HIGHLIGHTS */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Layout Highlights" title="Built with Premium Infrastructure" />
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

      {/* AMENITIES */}
      <section className="py-20 px-4 bg-forest-deep text-cream">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-gold font-semibold tracking-widest text-xs uppercase">Amenities</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Resort-Style Living Every Day</h2>
          </div>
          <div className="flex md:grid md:grid-cols-4 gap-5 overflow-x-auto md:overflow-visible pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 snap-x">
            {amenities.map((a) => (
              <div key={a.id} className="min-w-[260px] md:min-w-0 snap-start bg-cream/5 border border-cream/15 rounded-xl p-6 hover:border-gold transition">
                <div className="text-4xl">{a.icon}</div>
                <h3 className="mt-4 font-bold text-gold text-lg">{a.title}</h3>
                <p className="mt-2 text-sm text-cream/75">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Location" title="Strategically Connected" />
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="rounded-xl overflow-hidden border border-border min-h-[360px]">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Alair,+Yadadri+Bhuvanagiri,+Telangana&output=embed"
                className="w-full h-full min-h-[360px]"
                loading="lazy"
              />
            </div>
            <ul className="space-y-3">
              {connectivity.map((c) => (
                <li key={c} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                  <span className="text-gold font-bold">✓</span>
                  <span className="font-medium text-forest">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
