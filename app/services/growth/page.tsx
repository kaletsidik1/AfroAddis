const sections = [
  {
    id: "mining",
    title: "Mining Industry Solutions",
    lead: "Early-stage concessions, feasibility, and offtake programs with partners for exploration, development, and project finance.",
    points: [
      "Geological mapping, sampling, and contractor oversight to de-risk early phases.",
      "Offtake and JV structuring that aligns operator, financier, and buyer incentives.",
      "ESG, community engagement, and compliance workstreams built into project plans.",
    ],
    bullets: [
      { label: "Sites under review", value: "12" },
      { label: "Commodity focus", value: "4" },
      { label: "Partner pipeline", value: "8" },
    ],
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1600&q=80",
    details: [
      "Concession assessments with phased budgets; drill, assay, and lab partner coordination.",
      "Risk models covering logistics, compliance, and offtake certainty to inform capital stack.",
      "Structured data rooms and investor materials to accelerate diligence and approvals.",
    ],
  },
  {
    id: "assembly",
    title: "Vehicle Assembly Operations",
    lead: "Concept-to-launch vehicle and equipment assembly with OEM partners, targeting local and regional demand via localized SKD/CKD lines.",
    points: [
      "Plant layout, line design, and SOPs for pilot and scale phases.",
      "Homologation, testing, and quality gates aligned to OEM standards.",
      "Localization plans for components, workforce training, and supplier onboarding.",
    ],
    bullets: [
      { label: "OEM dialogues", value: "6" },
      { label: "Pilot capacity", value: "25k/yr" },
      { label: "Facility zones", value: "2" },
    ],
    image:
      "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1600&q=80",
    details: [
      "Facility readiness: utilities, EHS, and logistics flows mapped to takt-time targets.",
      "Procurement and vendor QA for kits, tools, jigs, and test equipment.",
      "Workforce training ladders for operators, maintenance, and quality technicians.",
    ],
  },
  {
    id: "joint-venture",
    title: "Joint Venture Partnerships",
    lead: "Equity JV and PPP formats for industrial, agriculture, and infrastructure projects with disciplined governance and capital stacks.",
    points: [
      "Deal structuring that balances equity, debt, and offtake-linked funding.",
      "Governance and KPI frameworks to keep partners aligned post-close.",
      "Local compliance, land, and permitting navigation with transparent milestone gates.",
    ],
    bullets: [
      { label: "JV formats", value: "3" },
      { label: "Deals in diligence", value: "10" },
      { label: "Sectors", value: "6" },
    ],
    image:
      "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1600&q=80",
    details: [
      "Capital stack modeling with sensitivities on demand, FX, and timeline risk.",
      "Shareholder agreements, governance charters, and reporting cadence set upfront.",
      "Stakeholder engagement and permit pathways documented for predictable execution.",
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

export default function StrategicGrowthServicesPage() {
  return (
    <div className="space-y-12 px-4 pb-24 pt-14 sm:px-8 lg:px-16 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.72),transparent_35%),radial-gradient(circle_at_86%_10%,rgba(226,232,240,0.55),transparent_30%)]">
      <header className="mx-auto max-w-5xl text-center space-y-3">
        <p className="text-sm uppercase tracking-[0.25em] text-amber-700">
          Strategic Growth Services
        </p>
        <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl">
          Mining, Assembly, Joint Ventures
        </h1>
        <p className="text-lg text-gray-700">
          The growth column covers early-stage mining, vehicle assembly
          programs, and structured joint ventures. Each section below mirrors
          the Services menu anchors for quick navigation.
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
                    <p className="text-xs uppercase tracking-[0.3em] text-amber-700">
                      Growth column
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
                  className="absolute inset-0 bg-linear-to-br from-black/20 via-transparent to-slate-900/10"
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
