import { createFileRoute, Link } from "@tanstack/react-router";

import { properties } from "@/lib/data";
import { Check } from "lucide-react";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "Compare Villas — Team Line Eco Resort" },
      { name: "description", content: "Compare Duplex, 2BHK and 1BHK villas at Team Line Eco Resort. Find the best ROI and lifestyle choice for your investment." },
    ],
  }),
  component: ComparePage,
});

function ComparePage() {
  const rows = [
    { label: "Built-up Area", key: "builtUp" },
    { label: "Land", key: "land" },
    { label: "Price", key: "price" },
    { label: "Monthly Rental", key: "rental" },
    { label: "Annual Rental", key: "rentalYearly" },
    { label: "ROI (approx)", key: "roi" },
    { label: "Bedrooms", key: "bedrooms" },
    { label: "Bank Loan", value: "✅" },
    { label: "RERA Approved", value: "✅" },
    { label: "Best For", key: "bestFor" },
  ];

  return (
    <>
      <section className="bg-forest text-cream py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black">Compare <span className="text-gold">Villas</span></h1>
        <p className="mt-4 text-cream/80 max-w-2xl mx-auto">
          Choose the perfect investment that fits your budget and lifestyle.
        </p>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-6xl overflow-x-auto">
          <table className="w-full border-collapse min-w-[800px]">
            <thead>
              <tr>
                <th className="p-4 text-left bg-secondary/30 border border-border text-forest font-bold">Feature</th>
                {properties.map((p) => (
                  <th 
                    key={p.id} 
                    className={`p-6 pt-10 border border-border text-center relative ${
                      p.id === "duplex" ? "bg-gold/10 border-gold border-2" : "bg-card"
                    }`}
                  >
                    {p.id === "duplex" && (
                      <span className="absolute top-2 left-1/2 -translate-x-1/2 bg-gold text-forest-deep text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg z-20">
                        Most Popular
                      </span>
                    )}
                    <h3 className="text-xl font-black text-forest">{p.name}</h3>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="hover:bg-secondary/20 transition-colors">
                  <td className="p-4 border border-border font-bold text-forest bg-secondary/10">{row.label}</td>
                  {properties.map((p) => (
                    <td 
                      key={p.id} 
                      className={`p-4 border border-border text-center text-sm font-medium ${
                        p.id === "duplex" ? "border-gold border-x-2" : ""
                      }`}
                    >
                      {(row as any).key ? (p as any)[(row as any).key] : row.value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="p-4 border border-border bg-secondary/10" />
                {properties.map((p) => (
                  <td 
                    key={p.id} 
                    className={`p-6 border border-border text-center ${
                      p.id === "duplex" ? "border-gold border-x-2 border-b-2" : ""
                    }`}
                  >
                    <Link
                      to="/properties/$slug"
                      params={{ slug: p.slug }}
                      className="inline-block bg-forest text-cream text-xs font-bold px-6 py-2.5 rounded-md hover:bg-forest-deep transition-colors"
                    >
                      View Details
                    </Link>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </>
  );
}
