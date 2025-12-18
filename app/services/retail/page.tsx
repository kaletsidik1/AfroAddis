const sections = [
  {
    id: "retail",
    title: "Household Retail & Credit",
    lead: "Nationwide retail and wholesale programs for appliances, electronics, and household goods with flexible credit and field activation support.",
    points: [
      "Credit-enabled sales with partner banks plus collections discipline that keeps sell-through healthy.",
      "Store activation playbooks: planograms, POP kits, and field audits to keep assortments productive.",
      "Omnichannel reach across owned stores, dealers, and wholesale partners with consistent CX.",
    ],
    bullets: [
      { label: "Retail network", value: "1,200+" },
      { label: "Credit customers", value: "18k+" },
      { label: "Cities served", value: "35+" },
    ],
    image:
      "https://images.unsplash.com/photo-1505238680356-667803448bb6?auto=format&fit=crop&w=1600&q=80",
    details: [
      "Category plans tuned to local demand signals; seasonal rotations to keep baskets growing.",
      "Field teams manage merchandising, replenishment, and training with weekly execution checks.",
      "Credit lifecycle: onboarding, utilization, and repayment cadence designed for retail turnover.",
    ],
  },
  {
    id: "partnerships",
    title: "Strategic Partnership Programs",
    lead: "Structured partner tracks for dealers, distributors, and co-branded activations that accelerate market entry and growth.",
    points: [
      "Tiered partner benefits: margin protection, MDF, training, and joint marketing calendars.",
      "Assortment curation and logistics SLAs so partners can commit with confidence.",
      "Data-sharing on sell-through, returns, and inventory health to keep programs accountable.",
    ],
    bullets: [
      { label: "Active partners", value: "300+" },
      { label: "Joint launches", value: "45+" },
      { label: "Cities", value: "35+" },
    ],
    image:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1600&q=80",
    details: [
      "Partner onboarding kits with merchandising standards and service-level expectations.",
      "Joint business planning for promos, bundles, and category resets tied to local seasonality.",
      "Field support squads for launch windows and corrective actions when KPIs drift.",
    ],
  },
  {
    id: "support",
    title: "After-Sales Support Services",
    lead: "Warranty, service centers, and spare-parts logistics to keep products running reliably for consumers and institutional buyers.",
    points: [
      "Service hubs and mobile technicians with SLAs that match product category expectations.",
      "Spare-parts planning by SKU velocity; reverse logistics to keep turnaround predictable.",
      "Customer care playbooks for triage, scheduling, and feedback loops into product teams.",
    ],
    bullets: [
      { label: "Service hubs", value: "5" },
      { label: "Tech network", value: "90+" },
      { label: "Warranty SKUs", value: "400+" },
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
    details: [
      "Parts inventory governance with min/max by city and automated replenishment signals.",
      "Technician enablement: diagnostics, training, and routed schedules to cut downtime.",
      "Claim handling with transparent statuses for consumers and channel partners.",
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

export default function RetailServicesPage() {
  return (
    <div className="space-y-12 px-4 pb-24 pt-14 sm:px-8 lg:px-16 bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.7),transparent_35%),radial-gradient(circle_at_88%_12%,rgba(219,234,254,0.55),transparent_32%)]">
      <header className="mx-auto max-w-5xl text-center space-y-3">
        <p className="text-sm uppercase tracking-[0.25em] text-amber-700">
          Retail & Consumer Solutions
        </p>
        <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl">
          Retail, Partnerships, After-Sales
        </h1>
        <p className="text-lg text-gray-700">
          Deep coverage across retail execution, dealer partnerships, and
          after-sales services. These sections expand on the Retail column from
          the Services menu with anchor links for quick navigation.
        </p>
      </header>

      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-900 hover:border-blue-200 hover:bg-blue-100"
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
            className="overflow-hidden rounded-2xl border border-gray-100 bg-white/95 shadow-lg shadow-blue-900/5"
          >
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-amber-700">
                      Retail column
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
                  className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-blue-900/10"
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
