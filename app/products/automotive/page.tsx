const sections = [
  {
    id: "vehicle-parts",
    title: "Vehicle Parts & Accessories",
    lead:
      "Vehicle parts and accessories for workshops and fleets with verified quality, stocking programs, and training support.",
    points: [
      "Brake, suspension, filters, and electrical components sourced with supplier QA and batch testing.",
      "Stocking ladders for workshops and fleets with min/max programs and rapid replenishment.",
      "Technician clinics on fitment, diagnostics, and warranty claim handling.",
    ],
    bullets: [
      { label: "SKUs", value: "2,800+" },
      { label: "Workshop partners", value: "450+" },
      { label: "Claim rate", value: "<0.8%" },
    ],
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80",
    details: [
      "Vendor scorecards and periodic lab tests to keep defect rates low.",
      "Kitted fast-mover packs for workshops; VIN/plate lookup support where applicable.",
      "Warranty adjudication workflows with clear lead times and transparency.",
    ],
  },
  {
    id: "machinery-tools",
    title: "Machinery & Tools",
    lead:
      "Machinery spares, tools, and consumables for construction, agri, and light industrial users.",
    points: [
      "Critical spares planning for loaders, generators, and pumps with lead-time buffers.",
      "Lubricant programs aligned to OEM specs with sampling and condition monitoring options.",
      "On-site support partners for installation, commissioning, and maintenance routines.",
    ],
    bullets: [
      { label: "SKUs", value: "1,900+" },
      { label: "Industries", value: "6" },
      { label: "Field crews", value: "30+" },
    ],
    image:
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1600&q=80",
    details: [
      "Supply plans with reorder points based on runtime and failure modes for key assets.",
      "Vendor-managed inventory options for anchor clients to stabilize uptime.",
      "Safety and compliance documentation packaged with deliveries for regulated sites.",
    ],
  },
  {
    id: "building-materials",
    title: "Building Materials",
    lead:
      "Selective construction materials and fixtures for projects, with quality control and logistics built-in.",
    points: [
      "Curated lines of finishes, fixtures, and hardware suited to local climates and codes.",
      "QC and certification where applicable; batch tracking for traceability.",
      "Project delivery playbooks with staging, call-offs, and site coordination.",
    ],
    bullets: [
      { label: "Projects/year", value: "140+" },
      { label: "Cities", value: "22" },
      { label: "SKUs", value: "1,100+" },
    ],
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
    details: [
      "Specification support for developers and contractors with vetted product sets.",
      "Logistics options: consolidated loads, site drops, and phased deliveries to match schedules.",
      "Installation partners for select categories to maintain warranty integrity.",
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

export default function AutomotiveProductsPage() {
  return (
    <div className="space-y-12 px-4 pb-24 pt-14 sm:px-8 lg:px-16 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.72),transparent_35%),radial-gradient(circle_at_86%_10%,rgba(226,232,240,0.5),transparent_30%)]">
      <header className="mx-auto max-w-5xl text-center space-y-3">
        <p className="text-sm uppercase tracking-[0.25em] text-amber-700">Automotive & Industrial</p>
        <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl">Parts, Industrial, Materials</h1>
        <p className="text-lg text-gray-700">
          Deeper detail for the automotive and industrial column: vehicle parts, equipment spares, and select building materials
          with logistics and QA.
        </p>
      </header>

      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-900 hover:border-slate-300 hover:bg-slate-100"
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
            className="overflow-hidden rounded-2xl border border-gray-100 bg-white/95 shadow-lg shadow-slate-900/5"
          >
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-amber-700">Automotive column</p>
                    <h2 className="mt-2 text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {section.bullets.map((b) => (
                      <StatPill key={`${section.id}-${b.label}`} label={b.label} value={b.value} />
                    ))}
                  </div>
                </div>

                <p className="text-base text-gray-700">{section.lead}</p>

                <ul className="space-y-2 text-sm text-gray-700">
                  {section.points.map((p, i) => (
                    <li key={`${section.id}-pt-${i}`} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-700" aria-hidden="true" />
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
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-slate-900/10" aria-hidden="true" />
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