import { createFileRoute, Link, useParams } from "@tanstack/react-router";

import { EMICalculator } from "@/components/EMICalculator";
import { properties, projectFeatures, company, galleryItems } from "@/lib/data";
import { Phone, MessageCircle, Check, ArrowLeft, Camera } from "lucide-react";
import { useEffect } from "react";
import { GallerySlider } from "@/components/GallerySlider";

export const Route = createFileRoute("/properties/$slug")({
  head: ({ params }) => {
    const p = properties.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: `${p?.name || "Property"} — Team Line Eco Resort` },
        { name: "description", content: `Details for ${p?.name} at Team Line Eco Resort. Built-up area: ${p?.builtUp}, Land: ${p?.land}. Starting ${p?.price}.` },
      ],
    };
  },
  component: PropertyDetailPage,
});

function PropertyDetailPage() {
  const { slug } = useParams({ from: "/properties/$slug" });
  const p = properties.find((x) => x.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!p) return <div>Property not found</div>;

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-8">
        <Link to="/properties" className="inline-flex items-center gap-2 text-forest font-bold hover:text-gold transition-colors mb-6 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Properties
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {/* HERO */}
            <div className="space-y-6">
              <div
                id={`hero-img-${p.id}`}
                className="w-full h-[400px] bg-muted shimmer rounded-2xl flex flex-col items-center justify-center text-muted-foreground gap-3 border border-border overflow-hidden"
              >
                {/* REPLACE WITH CLIENT PHOTO */}
                {(p as any).image ? (
                  <img src={(p as any).image} alt={p.name} className="w-full h-full object-cover" />
                ) : (
                  <>
                    <Camera size={48} />
                    <span className="font-bold text-xl">{p.name} - Hero View</span>
                  </>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl md:text-4xl font-black text-forest">{p.name}</h1>
                    <div className="flex gap-1">
                      <span className="bg-forest/10 text-forest text-[10px] font-bold px-2 py-0.5 rounded border border-forest/20">DTCP</span>
                      <span className="bg-forest/10 text-forest text-[10px] font-bold px-2 py-0.5 rounded border border-forest/20">RERA</span>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="text-3xl font-black text-gold">{p.price}</span>
                    <span className="text-lg font-bold text-green-600">Rental: {p.rental}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SPECS */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-secondary/30 p-4 border-b border-border">
                <h2 className="font-black text-forest uppercase tracking-wider text-sm">Property Specifications</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                {[
                  { l: "Built-up Area", v: p.builtUp },
                  { l: "Land Area", v: p.land },
                  { l: "Property Type", v: p.type },
                  { l: "Facing", v: p.facing },
                  { l: "Price", v: p.price },
                  { l: "Immediate Rental", v: `${p.rental} per month` },
                  { l: "Loan Available", v: "Yes — All Major Banks" },
                  { l: "Approval", v: "DTCP & RERA Approved" },
                ].map((spec, i) => (
                  <div key={spec.l} className={`p-4 flex justify-between items-center border-b border-border md:border-r last:border-b-0 ${i % 2 === 1 ? 'md:border-r-0' : ''}`}>
                    <span className="text-muted-foreground text-sm font-medium">{spec.l}</span>
                    <span className="text-forest font-bold">{spec.v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* GALLERY STRIP */}
            <div>
              <h2 className="text-2xl font-black text-forest mb-6">Property Gallery</h2>
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                {["Front View", "Interior", "Bedroom", "Kitchen", "Garden", "Aerial View"].map((label, i) => {
                  const galleryItem = galleryItems.find(g => {
                    if (g.label === label) return true;
                    if (label === "Interior") {
                      // Check for property specific interior first, e.g., "2BHK Interior"
                      if (g.label.includes(p.bedrooms.split(' ')[0]) && g.label.includes("Interior")) return true;
                      if (g.label === "Villa Interior") return true;
                    }
                    return false;
                  });

                  return (
                    <div
                      key={label}
                      id={`detail-img-${p.id}-${i + 1}`}
                      className="min-w-[280px] md:min-w-0 md:flex-1 aspect-[4/3] bg-muted shimmer rounded-xl flex flex-col items-center justify-center text-muted-foreground gap-2 border border-border snap-start overflow-hidden relative"
                    >
                      {/* REPLACE WITH CLIENT PHOTO */}
                      {label === "Front View" && (p as any).image ? (
                        <img src={(p as any).image} alt={`${p.name} Front View`} className="w-full h-full object-cover" />
                      ) : galleryItem && (galleryItem as any).images ? (
                        <GallerySlider images={(galleryItem as any).images} alt={`${p.name} ${label}`} />
                      ) : (
                        <>
                          <Camera size={32} />
                          <span className="text-sm font-bold">{label}</span>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* FEATURES */}
            <div className="bg-forest-deep text-cream p-8 rounded-2xl">
              <h2 className="text-2xl font-black mb-6">What's Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10">
                {projectFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <div className="mt-1 bg-gold text-forest-deep rounded-full p-0.5">
                      <Check size={14} strokeWidth={4} />
                    </div>
                    <span className="text-sm font-semibold">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <EMICalculator defaultAmount={p.priceRaw} />
          </div>

          {/* SIDEBAR */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-card border-2 border-gold rounded-2xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16" />
              <h3 className="text-2xl font-black text-forest relative">Interested in this property?</h3>
              <p className="mt-2 text-muted-foreground text-sm relative">Get complete details and schedule a free site visit today.</p>

              <form className="mt-6 space-y-4 relative" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-bold text-forest uppercase tracking-widest mb-1.5">Full Name</label>
                  <input className="w-full border border-input rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold outline-none" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-forest uppercase tracking-widest mb-1.5">Phone Number</label>
                  <input className="w-full border border-input rounded-lg px-4 py-3 focus:ring-2 focus:ring-gold outline-none" placeholder="Enter phone number" />
                </div>

                <div className="pt-2 space-y-3">
                  <a
                    href={`tel:${company.phoneRaw}`}
                    className="w-full bg-ink text-bone font-black py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-black transition-colors shadow-lg shadow-ink/10 border border-khaki/10"
                  >
                    <Phone size={20} /> Call Now
                  </a>
                  <a
                    href={p.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-ink text-bone font-black py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#25D366] hover:text-white transition-colors shadow-lg shadow-green-500/10"
                  >
                    <MessageCircle size={20} /> WhatsApp Enquiry
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
