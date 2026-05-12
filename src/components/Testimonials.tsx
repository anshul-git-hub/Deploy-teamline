import { useEffect, useState } from "react";
import { testimonials } from "@/lib/data";
import { useReveal } from "@/hooks/use-reveal";

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const { ref, shown } = useReveal<HTMLDivElement>();

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-20 px-4 bg-secondary/40">
      <div ref={ref} className={`mx-auto max-w-3xl text-center transition-all duration-700 ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-gold tracking-widest text-xs uppercase font-semibold">Testimonials</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-forest">What Our Customers Say</h2>

        <div className="mt-10 relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${idx * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.name} className="min-w-full px-2">
                <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
                  <div className="text-gold text-xl">★★★★★</div>
                  <p className="mt-4 text-lg text-foreground/90 italic">"{t.text}"</p>
                  <p className="mt-5 font-bold text-forest">— {t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${i === idx ? "w-8 bg-forest" : "w-2.5 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
