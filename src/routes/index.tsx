import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";

import { PropertyCard } from "@/components/PropertyCard";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import { EMICalculator } from "@/components/EMICalculator";
import {
  properties, layoutHighlights, amenities, connectivity, trustBadges, company, testimonials,
} from "@/lib/data";
import { Phone, MessageCircle, ChevronLeft, ChevronRight, Star, Camera, Trophy, X, Check } from "lucide-react";

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
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isLuckyDrawModalOpen, setIsLuckyDrawModalOpen] = useState(false);
  const [isContestFinished, setIsContestFinished] = useState(false);

  useEffect(() => {
    const expiryDate = new Date("2026-08-15T00:00:00");
    setIsContestFinished(new Date() >= expiryDate);

    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center bg-forest-deep text-cream overflow-hidden">
        {/* VIDEO BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-70"
          >
            <source src="https://res.cloudinary.com/dhbcyydef/video/upload/v1778580302/IMG_9443_aflbs6.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/40 via-forest-deep/20 to-forest-deep/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center">
          <div className="reveal reveal-up">
            <div className="flex flex-col items-center mb-4">
              <span className="text-khaki/60 tracking-[0.6em] text-[8px] md:text-[10px] font-black uppercase mb-1">PREMIUM VILLAS · ALAIR</span>
              <div className="h-px w-12 bg-khaki/30" />
            </div>
            <h1 className="mt-4 text-4xl md:text-7xl lg:text-8xl font-bold leading-[1.1]">
              Luxury Villas <br className="hidden md:block" /> from <span className="text-khaki">₹39L</span>
            </h1>
            <p className="mt-6 text-base md:text-xl text-bone/80 max-w-2xl mx-auto font-medium">
              Hyderabad–Warangal Highway. 15 Mins from Yadagirigutta.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/properties"
                className="group relative w-full sm:w-auto bg-bone text-ink font-bold px-10 py-4 rounded-xl hover:bg-white transition-all shadow-xl shadow-ink/10 overflow-hidden"
              >
                <span className="flex items-center justify-center gap-2 group-hover:-translate-x-full transition-transform duration-500">
                   View Villas
                </span>
                <span className="absolute inset-0 flex items-center justify-center gap-2 translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-white">
                   Explore More
                </span>
              </Link>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-khaki/30 backdrop-blur-sm text-bone font-bold px-10 py-4 rounded-xl hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all overflow-hidden"
              >
                <span className="flex items-center justify-center gap-2 group-hover:-translate-x-full transition-transform duration-500">
                  <MessageCircle size={20} /> WhatsApp
                </span>
                <span className="absolute inset-0 flex items-center justify-center gap-2 translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-[#25D366]">
                  <MessageCircle size={20} /> Chat with Us
                </span>
              </a>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-3 md:gap-5">
              {trustBadges.map((b) => (
                <span key={b.label} className="inline-flex items-center gap-2 bg-cream/5 border border-cream/20 backdrop-blur px-5 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider">
                  <span>{b.icon}</span>{b.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING LUCKY DRAW ICON */}
      {!isContestFinished && (
        <button 
          onClick={() => setIsLuckyDrawModalOpen(true)}
          className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center group"
          aria-label="View Lucky Draw Contests"
        >
          <div className="bg-gold text-forest-deep py-4 px-6 rounded-l-2xl shadow-2xl border-2 border-cream/20 border-r-0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 flex items-center gap-3">
            <Trophy size={24} className="animate-bounce" />
            <span className="text-xs font-black uppercase tracking-widest whitespace-nowrap">Mega Lucky Draw</span>
          </div>
          <div className="bg-gold text-forest-deep p-4 rounded-l-2xl shadow-2xl border-2 border-cream/20 border-r-0 relative z-10 group-hover:opacity-0 transition-opacity duration-300">
            <Trophy size={28} className="animate-pulse" />
          </div>
        </button>
      )}

      {/* LUCKY DRAW BANNER MODAL */}
      {isLuckyDrawModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setIsLuckyDrawModalOpen(false)}>
          <div className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-[blaster-pop_0.6s_cubic-bezier(0.34,1.56,0.64,1)]" onClick={e => e.stopPropagation()}>
            {/* BLASTER PARTICLES */}
            {[...Array(20)].map((_, i) => {
              const angle = (i / 20) * 360;
              const velocity = 200 + Math.random() * 200;
              const dx = Math.cos(angle * Math.PI / 180) * velocity;
              const dy = Math.sin(angle * Math.PI / 180) * velocity;
              return (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 w-2 h-2 bg-gold rounded-full pointer-events-none z-50"
                  style={{
                    "--dx": `${dx}px`,
                    "--dy": `${dy}px`,
                    "--rot": `${Math.random() * 720}deg`,
                    animation: "particle-fly 1s cubic-bezier(0.1, 0.9, 0.2, 1) forwards",
                  } as any}
                />
              );
            })}
            
            <button onClick={() => setIsLuckyDrawModalOpen(false)} className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black transition-colors">
              <X size={24} />
            </button>
            <img src="/assets/promotions/lucky-draw.jpg" alt="Lucky Draw Banner" className="w-full h-auto" />
          </div>
        </div>
      )}

      {/* STATS */}
      <section className="bg-bone text-ink py-20 border-y border-khaki/5 relative z-10">
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { n: "3", l: "Properties", prefix: "" },
            { n: "39", l: "Starting Price", prefix: "₹", suffix: " L" },
            { n: "165", l: "Sq. Yards Land", suffix: "" },
            { n: "30", l: "Monthly Rental", prefix: "₹", suffix: "K" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-4xl md:text-5xl font-bold text-ink">
                {s.prefix}{s.n}{s.suffix}
              </div>
              <div className="text-[10px] font-bold text-khaki mt-2 uppercase tracking-widest">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROPERTIES */}
      <section className="py-24 px-4 bg-secondary/40">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Our Properties" title="Choose Your Perfect Investment" subtitle="Thoughtfully designed homes and premium open plots built for living, leasing, and lasting value." />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {properties.map((p, i) => (
              <div key={p.id} style={{ transitionDelay: `${i * 150}ms` }}>
                <PropertyCard {...p} />
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* WHY US */}
      <section className="py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Why Choose Us" title="A Premium Investment You Can Trust" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "📍", t: "Prime Location", d: "On Hyderabad–Warangal Highway, 15 mins to Yadagirigutta Temple." },
              { icon: "🏛", t: "DTCP & RERA Approved", d: "Fully legal with bank loan facility available from all major banks." },
              { icon: "💰", t: "Immediate Rental Income", d: "Earn ₹10K–₹30K per month starting day one with our lease model." },
              { icon: "🌄", t: "Tourism Hub", d: "Highway facing, high footfall zone with massive appreciation potential." },
            ].map((c, i) => (
              <div 
                key={c.t} 
                className="bg-card border border-border rounded-2xl p-8 hover:border-gold hover:shadow-2xl transition-all group"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="text-5xl group-hover:scale-110 transition-transform mb-6">{c.icon}</div>
                <h3 className="font-bold text-ink text-xl mb-3">{c.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="py-24 px-4 bg-forest-deep text-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="mx-auto max-w-6xl relative z-10">
          <div className="mb-16 text-center">
            <p className="text-khaki font-bold tracking-widest text-xs uppercase mb-3">Amenities</p>
            <h2 className="text-4xl md:text-5xl font-bold">Resort-Style Living</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((a, i) => (
              <div 
                key={a.id} 
                id={a.id}
                className="bg-cream/5 border border-cream/15 backdrop-blur-sm rounded-2xl overflow-hidden hover:border-gold transition-all group relative min-h-[280px] flex flex-col justify-end"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* REPLACE WITH CLIENT PHOTO */}
                {a.image ? (
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={a.image} 
                      alt={a.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent" />
                  </div>
                ) : (
                  <div className="p-8 pb-0">
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{a.icon}</div>
                  </div>
                )}
                
                <div className="p-8 relative z-10">
                  {a.image && <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{a.icon}</div>}
                  <h3 className="font-bold text-khaki text-xl mb-3 uppercase tracking-tight">{a.title}</h3>
                  <p className="text-cream/70 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-4 overflow-hidden bg-card">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeader eyebrow="Testimonials" title="What Our Customers Say" />
          
          <div className="relative mt-10">
            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
              {testimonials.map((t, i) => (
                <div key={i} className="min-w-full px-4">
                  <div className="bg-secondary/20 p-10 md:p-16 rounded-3xl relative">
                    <Star className="text-gold absolute top-10 left-10 opacity-20" size={64} />
                    <div className="flex justify-center gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={20} className="fill-gold text-gold" />)}
                    </div>
                    <p className="text-xl md:text-2xl font-bold text-forest leading-relaxed italic">"{t.text}"</p>
                    <p className="mt-8 font-bold text-khaki uppercase tracking-widest">— {t.name}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center gap-3 mt-10">
              {testimonials.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-3 rounded-full transition-all duration-300 ${activeTestimonial === i ? "w-8 bg-gold" : "w-3 bg-muted"}`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EMI CALCULATOR SECTION */}
      <section className="py-24 px-4 bg-secondary/20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <SectionHeader eyebrow="Financing" title="Investment Made Simple" />
          </div>
          <div className="reveal reveal-zoom">
            <EMICalculator />
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Location" title="Strategically Connected" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mt-12">
            <div className="reveal reveal-left rounded-3xl overflow-hidden border-4 border-secondary shadow-2xl min-h-[400px]">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Alair,+Yadadri+Bhuvanagiri,+Telangana&output=embed"
                className="w-full h-full min-h-[400px]"
                loading="lazy"
              />
            </div>
            <ul className="space-y-4">
              {connectivity.map((c, i) => (
                <li 
                  key={c} 
                  className="reveal reveal-up flex items-start gap-4 bg-card border border-border rounded-xl p-5 hover:border-gold transition-all"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="bg-gold text-forest-deep rounded-full p-1 mt-0.5">
                    <Star size={14} className="fill-current" />
                  </div>
                  <span className="font-bold text-ink text-lg">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="reveal reveal-zoom">
        <CTABanner />
      </div>
    </>
  );
}
