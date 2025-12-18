const sections = [
  {
    id: "trading",
    title: "Trading",
    lead: "Our trading arm connects Ethiopia’s suppliers and global buyers through disciplined sourcing, financing, and distribution.",
    points: [
      "Retail & wholesale programs for household goods with credit options and merchandising support.",
      "Partner finance and trade terms to move inventory quickly while preserving margins.",
      "Compliance-first documentation and logistics coordination for domestic and export lanes.",
    ],
    bullets: [
      { label: "Retail network", value: "1,200+" },
      { label: "Credit customers", value: "18k+" },
      { label: "Service hubs", value: "5" },
    ],
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
    details: [
      "Category planning for fast movers, premium lines, and seasonal rotations with demand signals from retail partners.",
      "Store activation: planograms, POP materials, and field execution to keep shelves productive.",
      "Credit enablement with partner banks; collections and risk controls aligned to turnover targets.",
    ],
  },
  {
    id: "import",
    title: "Import & Sourcing",
    lead: "We source global-quality appliances, electronics, and materials with reliable after-sales and localized assortments.",
    points: [
      "Category planning for electronics, appliances, and household goods tailored to Ethiopian demand.",
      "Vendor selection, QC at origin, and freight consolidation to control landed cost and availability.",
      "Warranty and parts programs to protect buyers and keep channels stocked.",
    ],
    bullets: [
      { label: "Brands", value: "25+" },
      { label: "Warehouses", value: "4" },
      { label: "Retailers served", value: "1,200+" },
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
    details: [
      "Sourcing offices coordinate with OEMs for compliant labeling, voltage specs, and regional SKUs.",
      "Origin QC and pre-shipment inspection to cut defects and returns; KPI reporting to suppliers.",
      "Freight optimization: consolidation, routing, and buffer stock for predictable availability.",
    ],
  },
  {
    id: "export",
    title: "Export & Distribution",
    lead: "Export programs for coffee, pulses, oilseeds, and specialty crops backed by traceability and QC.",
    points: [
      "Origin sourcing across Sidama, Yirgacheffe, Guji, Jimma, and more with wet and dry mills.",
      "Grading, cupping, moisture and defect checks, and compliant export documentation.",
      "Multi-modal logistics and insurance to deliver reliably to Africa, EU, Middle East, and North America.",
    ],
    bullets: [
      { label: "Origins", value: "8" },
      { label: "Processing sites", value: "6" },
      { label: "Global buyers", value: "40+" },
    ],
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80",
    details: [
      "Cup profiling and sample roasting for buyers; green analysis with moisture, density, and defect counts.",
      "Lot-level traceability and farmer support programs in coffee and pulses supply chains.",
      "Export paperwork, insurance, and shipment tracking until POD to reduce buyer friction.",
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Production",
    lead: "Furniture and woodwork manufacturing for residential, hospitality, and corporate projects.",
    points: [
      "Custom and catalog lines for living, kitchen, bedroom, and commercial fit-outs.",
      "Material sourcing that combines local timber with imported finishes for durability and aesthetics.",
      "Design support plus project management from fabrication to on-site installation.",
    ],
    bullets: [
      { label: "Factories", value: "2" },
      { label: "Sqm capacity", value: "12k+" },
      { label: "Projects/year", value: "150+" },
    ],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    details: [
      "In-house design lab collaborating with architects and developers for bespoke finishes and joinery.",
      "CNC, panel saws, and finishing lines enabling repeatable quality at scale.",
      "On-site installation teams with punch-list closeout and post-handover support.",
    ],
  },
];

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
      <span className="text-gray-900">{value}</span> {label}
    </div>
  );
}

export default function CoreServicesPage() {
  return (
    <div className="space-y-12 px-4 pb-24 pt-14 sm:px-8 lg:px-16 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.7),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,237,213,0.45),transparent_30%)]">
      <header className="mx-auto max-w-5xl text-center space-y-3">
        <p className="text-sm uppercase tracking-[0.25em] text-amber-700">
          Core Business Services
        </p>
        <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl">
          Trading, Import, Export, Manufacturing
        </h1>
        <p className="text-lg text-gray-700">
          This page is the full detail for our core capabilities. Links from the
          homepage and the Services menu land here and scroll to each section
          below.
        </p>
      </header>

      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800 hover:border-amber-300 hover:bg-amber-100"
          >
            {s.title}
          </a>
        ))}
      </div>

      <div className="mx-auto max-w-6xl space-y-10">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="overflow-hidden rounded-2xl border border-gray-100 bg-white/95 shadow-lg shadow-amber-900/5"
          >
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-amber-700">
                      Core service
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {section.bullets.map((b) => (
                      <StatPill
                        key={`${section.id}-${b.label}`}
                        label={b.label}
                        value={b.value}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-base text-gray-700">{section.lead}</p>

                <ul className="space-y-2 text-sm text-gray-700">
                  {section.points.map((p, i) => (
                    <li key={`${section.id}-pt-${i}`} className="flex gap-2">
                      <span
                        className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-700"
                        aria-hidden="true"
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 space-y-1 text-sm text-gray-700">
                  {section.details.map((d, i) => (
                    <p key={`${section.id}-detail-${i}`}>{d}</p>
                  ))}
                </div>
              </div>

              <div className="relative h-full min-h-[260px] bg-gray-50">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-amber-900/10"
                  aria-hidden="true"
                />
                <img
                  src={section.image}
                  alt={`${section.title} illustrative`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
