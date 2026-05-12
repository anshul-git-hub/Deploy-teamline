import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { company } from "@/lib/data";
import { Phone, MessageCircle, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Team Line Eco Resort" },
      { name: "description", content: "Get in touch with Team Line Infra Developers. Visit our office in Uppal, Hyderabad or call +91 94942 91924." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", interest: "Just Exploring", message: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Team Line, my name is ${form.name}. My number is ${form.phone}. I am interested in ${form.interest}. ${form.message}`;
    window.open(`https://wa.me/919494291924?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <Layout>
      <section className="bg-forest text-cream py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Get in <span className="text-gold">Touch</span></h1>
        <p className="mt-4 text-cream/80">We'd love to help you find your perfect villa.</p>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-10">
          <form onSubmit={submit} className="bg-card border border-border rounded-xl p-6 md:p-8 space-y-4">
            <h2 className="text-2xl font-bold text-forest">Enquiry Form</h2>
            {[
              { k: "name", l: "Full Name", t: "text" },
              { k: "phone", l: "Phone Number", t: "tel" },
              { k: "email", l: "Email", t: "email" },
            ].map((f) => (
              <div key={f.k}>
                <label className="block text-sm font-semibold text-forest mb-1">{f.l}</label>
                <input
                  required
                  type={f.t}
                  value={(form as any)[f.k]}
                  onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-semibold text-forest mb-1">Interested In</label>
              <select
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option>Duplex Villa</option>
                <option>2BHK Villa</option>
                <option>1BHK Villa</option>
                <option>Just Exploring</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-forest mb-1">Message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            <button type="submit" className="w-full bg-gold text-forest-deep font-bold py-3 rounded-md hover:brightness-110 transition">
              Submit & Open WhatsApp
            </button>
          </form>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-bold text-forest flex items-center gap-2"><MapPin size={20} className="text-gold" /> Office Address</h3>
              <p className="mt-3 text-muted-foreground">{company.office}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={`tel:${company.phoneRaw}`} className="inline-flex items-center gap-2 bg-forest text-cream font-semibold px-4 py-2.5 rounded-md hover:bg-forest-deep">
                  <Phone size={16}/> {company.phone}
                </a>
                <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-4 py-2.5 rounded-md">
                  <MessageCircle size={16}/> WhatsApp
                </a>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <iframe
                title="Office Map"
                src="https://www.google.com/maps?q=Paramount+Heights+Uppal+Hyderabad&output=embed"
                className="w-full h-[320px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
