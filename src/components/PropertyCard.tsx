import { company } from "@/lib/data";

interface Props {
  name: string;
  builtUp: string;
  land: string;
  price: string;
  rental: string;
  badge?: string | null;
  imgId?: string;
  features?: string[];
  detailed?: boolean;
}

export function PropertyCard({
  name, builtUp, land, price, rental, badge, imgId, features, detailed,
}: Props) {
  const enquireMsg = encodeURIComponent(
    `Hi, I'm interested in the ${name} at Team Line Eco Resort. Please share more details.`
  );
  return (
    <article className="group relative flex flex-col rounded-xl bg-card border border-border shadow-sm overflow-hidden transition-all hover:border-gold hover:shadow-xl">
      {badge && (
        <span className="absolute top-3 left-3 z-10 bg-gold text-forest-deep text-xs font-bold px-2.5 py-1 rounded">
          {badge}
        </span>
      )}
      <div
        id={imgId}
        className="aspect-[4/3] bg-[#D1D5DB] flex items-center justify-center text-muted-foreground text-sm"
      >
        📷 Villa Photo Coming Soon
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-forest">{name}</h3>
        <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
          <div><span className="block text-xs">Built-up</span><span className="text-foreground font-medium">{builtUp}</span></div>
          <div><span className="block text-xs">Land</span><span className="text-foreground font-medium">{land}</span></div>
        </div>
        <div className="mt-4 flex items-baseline justify-between">
          <span className="text-2xl font-bold text-forest">{price}</span>
          <span className="text-sm text-gold font-semibold">{rental}</span>
        </div>
        {detailed && features && (
          <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
            {features.map((f) => (
              <li key={f} className="flex gap-2"><span className="text-gold">✓</span>{f}</li>
            ))}
          </ul>
        )}
        <a
          href={`https://wa.me/919494291924?text=${enquireMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex justify-center rounded-md bg-forest text-cream font-semibold py-2.5 hover:bg-forest-deep transition-colors"
        >
          Enquire Now
        </a>
      </div>
    </article>
  );
}
