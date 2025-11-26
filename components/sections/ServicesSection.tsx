import Image from "next/image";

const serviceCards = [
  {
    title: "Export",
    description:
      "Sesame, coffee, and pulses for global buyers, with grading, cleaning, and quality checks at each step.",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1400&q=80",
    overlay: "from-black/80 via-black/40 to-amber-900/30",
    tags: ["Coffee lots", "Pulses", "Logistics"],
  },
  {
    title: "Import",
    description:
      "Selected household appliances from trusted brands, supported by local after-sales service.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80",
    overlay: "from-slate-900/80 via-slate-800/60 to-slate-600/40",
    tags: ["Electronics", "Appliances", "After-sales"],
  },
  {
    title: "Furniture Manufacturing",
    description: "Durable furniture for homes, offices, and hospitality, designed for everyday use.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    overlay: "from-amber-900/80 via-amber-700/50 to-amber-400/30",
    tags: ["Residential", "Commercial", "Custom build"],
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative space-y-10 overflow-hidden  border border-white/70 bg-gradient-to-br from-[#fefbf4] via-white to-[#f4ede3] px-6 py-14 text-gray-900 shadow-2xl shadow-amber-900/10 sm:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.15),_transparent_55%)] opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-12" />

      <div className="relative space-y-3 text-center lg:text-left">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-700/80">Services</p>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Integrated capabilities built for global trade.</h2>
        <p className="mx-auto max-w-3xl text-sm text-gray-600 lg:mx-0">
          Export, import, and manufacturing — connected through quality, reliability, and Ethiopian expertise.
        </p>
      </div>

      <div className="relative grid gap-6 lg:grid-cols-3">
        {serviceCards.map((card) => (
          <div
            key={card.title}
            className="group relative overflow-hidden border border-white/60 bg-black/20 shadow-2xl shadow-amber-900/20 transition hover:-translate-y-1.5 hover:shadow-amber-900/30"
          >
            <Image
              src={card.image}
              alt={`${card.title} visual`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(min-width: 1024px) 30vw, 100vw"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${card.overlay}`} />
            <div className="relative flex h-full flex-col justify-between p-6 text-white">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.35em] text-white/70">Service</p>
                <h3 className="text-2xl font-semibold">{card.title}</h3>
                <p className="text-sm leading-relaxed text-white/85">{card.description}</p>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.35em] text-white/70">
                  {card.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1">
                      <span className="h-1 w-1 rounded-full bg-white/60" />
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:gap-3">
                  Learn more
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
