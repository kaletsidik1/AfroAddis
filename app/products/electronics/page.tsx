const sections = [
  {
    id: "smartphones-tablets",
    title: "Smartphones & Tablets",
    lead: "Devices and wearables with localized specs, warranty support, and attach programs for accessories and services.",
    points: [
      "Tiered device lineups with language support and regional power/charging standards.",
      "Warranty and service center coverage with spare-parts buffers on fast movers.",
      "Retail and channel starter kits with merchandising, SIM/plan partners, and financing options.",
    ],
    bullets: [
      { label: "Devices", value: "150+" },
      { label: "Service hubs", value: "5" },
      { label: "Retail partners", value: "1,000+" },
    ],
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=80",
    details: [
      "Accessory attach playbooks (cases, chargers, audio) to lift basket and margin.",
      "Device protection and upgrade programs to keep churn low.",
      "Training for retail staff on demos, setup, and after-sales routing.",
    ],
  },
  {
    id: "computers-accessories",
    title: "Computers & Accessories",
    lead: "Laptops, desktops, peripherals, and displays for consumer and commercial buyers with reliable sourcing and SLAs.",
    points: [
      "Spec tiers across ultrabooks, creator, and business lines with regional keyboards and power standards.",
      "Peripheral bundles (monitors, docks, input) with warranty and swap options.",
      "Rollout playbooks for SMB and education with imaging and distribution support.",
    ],
    bullets: [
      { label: "SKUs", value: "210+" },
      { label: "Commercial orders", value: "1.5k/yr" },
      { label: "Reseller hubs", value: "7" },
    ],
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1600&q=80",
    details: [
      "Warranty tiers with onsite and depot options; spare pools for priority clients.",
      "Standardized SKUs for tenders and education deployments to stabilize lead times.",
      "Channel enablement: datasheets, demo units, and financing pathways for partners.",
    ],
  },
  {
    id: "audio-video",
    title: "Audio & Video Equipment",
    lead: "Home and professional AV including displays, projectors, PA, and conferencing kits with installation support.",
    points: [
      "Segmented assortments for home entertainment, retail fit-outs, and corporate AV needs.",
      "Site survey and install partners with commissioning checklists and training.",
      "Spare-part buffers for lamps, drivers, and critical components to reduce downtime.",
    ],
    bullets: [
      { label: "Display sizes", value: "24" },
      { label: "Install partners", value: "40+" },
      { label: "Projects/year", value: "180+" },
    ],
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80",
    details: [
      "Bundled kits for classrooms, boardrooms, and retail signage with tested interoperability.",
      "Commissioning SOPs and user handover packs to ensure smooth go-live.",
      "Maintenance windows and SLAs tuned to venue type and usage intensity.",
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

export default function ElectronicsProductsPage() {
  return (
    <div className="space-y-12 px-4 pb-24 pt-14 sm:px-8 lg:px-16 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.72),transparent_35%),radial-gradient(circle_at_84%_10%,rgba(191,219,254,0.42),transparent_30%)]">
      <header className="mx-auto max-w-5xl text-center space-y-3">
        <p className="text-sm uppercase tracking-[0.25em] text-amber-700">
          Electronics & Tech
        </p>
        <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl">
          Mobility, Computing, AV
        </h1>
        <p className="text-lg text-gray-700">
          Expanded view of our electronics portfolio with anchor links aligned
          to the Products column: mobility, computing, and audio/video systems.
        </p>
      </header>

      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-900 hover:border-blue-300 hover:bg-blue-100"
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
                      Electronics column
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
