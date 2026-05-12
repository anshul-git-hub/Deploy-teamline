import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Team Line Eco Resort" },
      { name: "description", content: "Photo gallery of Team Line Eco Resort villas and amenities." },
    ],
  }),
  component: GalleryPage,
});

const slots = Array.from({ length: 8 }, (_, i) => `gallery-img-${i + 1}`);

function GalleryPage() {
  return (
    <Layout>
      <section className="bg-forest text-cream py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Project <span className="text-gold">Gallery</span></h1>
        <p className="mt-4 text-cream/80">Photos coming soon — we're capturing every angle.</p>
      </section>
      <section className="py-16 px-4">
        <div className="mx-auto max-w-6xl grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {slots.map((id) => (
            <div key={id} id={id} className="aspect-[4/3] bg-[#D1D5DB] flex items-center justify-center text-muted-foreground rounded-xl">
              📷 Photo Coming Soon
            </div>
          ))}
        </div>
      </section>
      <CTABanner />
    </Layout>
  );
}
