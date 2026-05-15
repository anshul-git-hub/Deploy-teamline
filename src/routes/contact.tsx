import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { company } from "@/lib/data";
import { Phone, MessageCircle, MapPin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Team Line Eco Resort" },
      { name: "description", content: "Get in touch with Team Line Infra Developers. Visit our office in Uppal, Hyderabad or call +91 94942 91924." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", interest: "Duplex Villa", message: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Team Line, my name is ${form.name}. My number is ${form.phone}. I am interested in ${form.interest}. ${form.message}`;
    window.open(`https://wa.me/919494291924?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <Layout>
      <section className="bg-forest text-cream py-16 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-black">Get in <span className="text-gold">Touch</span></h1>
        <p className="mt-4 text-cream/80 max-w-2xl mx-auto font-medium">We'd love to help you find your perfect villa and answer any questions.</p>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16">
          <form onSubmit={submit} className="bg-card border border-border rounded-3xl p-8 md:p-10 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16" />
            <h2 className="text-3xl font-black text-forest relative">Enquiry Form</h2>

            <div className="space-y-4 relative">
              {[
                { k: "name", l: "Full Name", t: "text", p: "Your full name" },
                { k: "phone", l: "Phone Number", t: "tel", p: "Your contact number" },
                { k: "email", l: "Email Address", t: "email", p: "Your email address" },
              ].map((f) => (
                <div key={f.k}>
                  <label className="block text-xs font-black text-forest uppercase tracking-widest mb-1.5">{f.l}</label>
                  <input
                    required
                    type={f.t}
                    placeholder={f.p}
                    value={(form as any)[f.k]}
                    onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold transition-all"
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs font-black text-forest uppercase tracking-widest mb-1.5">Interested In</label>
                <select
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold transition-all appearance-none cursor-pointer"
                >
                  <option>Duplex Villa</option>
                  <option>2BHK Villa</option>
                  <option>1BHK Villa</option>
                  <option>Just Exploring</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black text-forest uppercase tracking-widest mb-1.5">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us more about your requirements..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold transition-all"
                />
              </div>
            </div>

            <button type="submit" className="w-full bg-gold text-forest-deep font-black py-4 rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-gold/20">
              <Send size={20} /> Submit & Open WhatsApp
            </button>
          </form>

          <div className="space-y-8">
            <div className="bg-forest-deep text-cream rounded-3xl p-10 shadow-xl relative overflow-hidden group">
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-gold/5 rounded-full -mr-24 -mb-24 group-hover:scale-125 transition-transform duration-700" />
              <h3 className="text-2xl font-black flex items-center gap-3 mb-8"><MapPin size={28} className="text-gold" /> Office Address</h3>

              <div className="space-y-6 relative">
                <p className="text-cream/80 text-lg leading-relaxed font-medium">
                  {company.office}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href={`tel:${company.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-gold text-forest-deep font-black px-6 py-3.5 rounded-xl hover:scale-105 transition-all w-full sm:w-auto">
                    <Phone size={18} /> {company.phone}
                  </a>
                  <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-cream/30 font-black px-6 py-3.5 rounded-xl hover:bg-cream hover:text-forest-deep transition-all w-full sm:w-auto">
                    <MessageCircle size={18} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border-4 border-secondary shadow-2xl h-[350px]">
              <iframe
                title="Office Map"
                src="https://www.google.com/maps?q=Paramount+Heights+Uppal+Hyderabad&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
