import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { company, trustBadges, layoutHighlights } from "@/lib/data";
import { MapPin, Phone, MessageCircle, Target, Award, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Team Line Infra Developers | Trusted Real Estate" },
      { name: "description", content: "Learn about Team Line Infra Developers, the visionaries behind Team Line Eco Resorts at Alair. Building premium eco-living spaces near Yadagirigutta." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="bg-forest-deep text-cream py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-gold)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6">About <span className="text-gold">Team Line</span> Infra Developers</h1>
          <p className="text-xl text-cream/80 font-medium">A Legacy of Trust, Quality, and Sustainable Living.</p>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-forest">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="text-forest font-bold">TEAM LINE INFRA</span> is a trusted real estate company committed to delivering premium living spaces that blend luxury with nature. Our prestigious project, <span className="text-forest font-bold">Team Line Eco Resorts</span>, is located at Alair, right on the Hyderabad–Warangal Highway.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The project enjoys excellent connectivity and is just 15 minutes away from the sacred Yadagirigutta Sri Lakshmi Narasimha Swamy Temple, making it an ideal destination for both investment and serene living.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              {[
                { n: "3", l: "Villa Types", i: <Users className="text-gold" /> },
                { n: "165", l: "Sq. Yards Land", i: <Target className="text-gold" /> },
                { n: "100%", l: "Approved", i: <Award className="text-gold" /> },
                { n: "24/7", l: "Security", i: <Award className="text-gold" /> },
              ].map((s) => (
                <div key={s.l} className="flex items-center gap-4">
                  <div className="bg-secondary p-3 rounded-xl">{s.i}</div>
                  <div>
                    <p className="text-2xl font-black text-forest leading-none">{s.n}</p>
                    <p className="text-xs font-bold text-muted-foreground uppercase mt-1">{s.l}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-muted rounded-3xl overflow-hidden border border-border shadow-2xl relative z-10 group">
               <img 
                 src="/assets/team/founder.jpg" 
                 alt="Team Line Founder" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/90 to-transparent pt-12 pb-6 px-4">
                 <p className="text-cream font-bold text-center text-lg">Our Managing Director</p>
               </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold rounded-3xl -z-0" />
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-black text-forest mb-8">Our Vision</h2>
          <p className="text-2xl md:text-3xl font-bold text-forest/80 italic leading-snug">
            "Bringing premium eco-living to Telangana's fastest-growing corridor while ensuring maximum value and immediate returns for our investors."
          </p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
           <h2 className="text-3xl font-black text-forest text-center mb-12 uppercase tracking-widest">Project Highlights</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {layoutHighlights.map((h) => (
               <div key={h.title} className="bg-card border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all group">
                 <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">{h.icon}</span>
                 <h3 className="text-xl font-bold text-forest mb-2">{h.title}</h3>
                 <p className="text-sm text-muted-foreground">Premium infrastructure and sustainable planning for a better tomorrow.</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* CONTACT/LOCATION */}
      <section className="py-20 px-4 bg-forest text-cream">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="space-y-8">
            <h2 className="text-3xl font-black">Visit Our Office</h2>
            <div className="flex gap-4 items-start">
              <MapPin className="text-gold shrink-0" size={24} />
              <div>
                <p className="text-lg font-bold">Head Office</p>
                <p className="mt-2 text-cream/70 leading-relaxed">{company.office}</p>
              </div>
            </div>
            <div className="flex gap-6">
               <a href={`tel:${company.phoneRaw}`} className="flex items-center gap-2 bg-gold text-forest-deep px-6 py-3 rounded-full font-black hover:brightness-110 transition-all">
                 <Phone size={20} /> {company.phone}
               </a>
               <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-2 border-cream px-6 py-3 rounded-full font-black hover:bg-cream hover:text-forest-deep transition-all">
                 <MessageCircle size={20} /> WhatsApp
               </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border-4 border-cream/10 min-h-[350px]">
             <iframe
                title="Office Map"
                src="https://www.google.com/maps?q=Paramount+Heights+Uppal+Hyderabad&output=embed"
                className="w-full h-full min-h-[350px]"
                loading="lazy"
              />
          </div>
        </div>
      </section>
    </Layout>
  );
}
