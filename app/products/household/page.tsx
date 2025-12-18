const sections = [
  {
    id: "home-appliances",
    title: "Home Appliances",
    lead: "Core household appliances with localized specs, warranties, and delivery + installation support for retail and project buyers.",
    points: [
      "Cooling, laundry, cooking, and small appliances tuned to voltage, water, and space realities.",
      "Warranty-backed with spare-parts coverage and technician training for quick turnaround.",
      "Retail, B2B, and project bundles with financing and merchandising support.",
    ],
    bullets: [
      { label: "SKUs", value: "280+" },
      { label: "Service hubs", value: "5" },
      { label: "Brands", value: "18" },
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
    details: [
      "Tiered price points across brands; demo and floor models for anchor partners.",
      "After-sales kits per SKU family plus installer onboarding guides.",
      "Delivery and basic install options to reduce friction and returns.",
    ],
  },
  {
    id: "furniture-decor",
    title: "Furniture & Decor",
    lead: "Residential and hospitality furniture plus decor accents, combining local craftsmanship with durable finishes.",
    points: [
      "Sofa, bedroom, dining, storage, and accent pieces with fabric and finish selections.",
      "Project-fit packages for hotels, residences, and offices with measured drawings and install teams.",
      "Material sourcing blends local timber with imported hardware for longevity and aesthetics.",
    ],
    bullets: [
      { label: "Collections", value: "14" },
      { label: "Projects/year", value: "120+" },
      { label: "Factories", value: "2" },
    ],
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1600&q=80",
    details: [
      "Design support for layouts, BOQs, and finish schedules aligned to budgets and timelines.",
      "QC from frame build to upholstery and final inspection before dispatch.",
      "White-glove delivery and installation with punch-list closeout.",
    ],
  },
  {
    id: "kitchenware",
    title: "Kitchenware",
    lead: "Cookware, tableware, and storage curated for durability, safety, and modern aesthetics.",
    points: [
      "Non-stick, stainless, and cast options covering daily cooking and entertaining needs.",
      "Tabletop lines for home and hospitality with coordinated sets and replenishment programs.",
      "Displays, planograms, and training for retailers to maintain presentation and attach rates.",
    ],
    bullets: [
      { label: "SKUs", value: "320+" },
      { label: "Retail partners", value: "800+" },
      { label: "Collections", value: "22" },
    ],
    image:
      "https://images.unsplash.com/photo-1484156818044-c040038b0710?auto=format&fit=crop&w=1600&q=80",
    details: [
      "Durability and food-safety standards validated with supplier QA and periodic batch testing.",
      "Bundle programs (cookware + storage + knives) to lift basket sizes in retail.",
      "Hospitality packs with reorder cadences and breakage buffers built in.",
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

export default function HouseholdProductsPage() {
  return (
    <div className="space-y-12 px-4 pb-24 pt-14 sm:px-8 lg:px-16 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.72),transparent_35%),radial-gradient(circle_at_82%_8%,rgba(252,211,77,0.4),transparent_32%)]">
      <header className="mx-auto max-w-5xl text-center space-y-3">
        <p className="text-sm uppercase tracking-[0.25em] text-amber-700">
          Household Goods
        </p>
        <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl">
          Appliances, Furniture, Kitchen
        </h1>
        <p className="text-lg text-gray-700">
          Detailed view of our household lines: appliances with service support,
          furniture programs, and kitchen/tabletop ranges. Anchors match the
          Products column for quick jumps.
        </p>
      </header>

      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-900 hover:border-amber-300 hover:bg-amber-100"
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
                      Household column
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
