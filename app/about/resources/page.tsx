"use client";
import Image from "next/image";

const sections = [
  {
    id: "timeline",
    title: "Corporate timeline",
    lead: "Milestones and expansion phases from founding through export growth, manufacturing, and new initiatives.",
    lead: "Key milestones from founding through export growth, manufacturing, and new initiatives.",
    points: [
      "2015: Founded KYT Trading PLC (AFROADDIS) focused on import and trading.",
      "2018–2020: Expanded into coffee, sesame, pulses export; secured ECX seat.",
      "2021–2024: Launched manufacturing lines, strengthened retail credit, initiated mining/assembly pilots.",
    ],
    image:
      "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "news",
    title: "News & updates",
    lead: "Operational updates across export processing, retail footprint, and sustainability programs.",
    points: [
      "New coffee processing line: additional wet mills expanding specialty capacity.",
      "Retail footprint: partner showrooms added in Addis Ababa and regional hubs.",
      "Sustainability: traceability and farmer support programs expanding in key origins.",
    ],
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "resources",
    title: "Resources",
    lead: "Corporate profile, division brochures, and compliance kit available on request for partners and investors.",
    points: [
      "Corporate profile PDF: concise overview for partners and investors.",
      "Division brochures: import/export catalogs, manufacturing capabilities, service menus.",
      "Compliance kit: licenses, registrations, and certificates.",
    ],
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function AboutResourcesPage() {
  return (
    <div className="space-y-12 px-4 pb-24 pt-14 sm:px-8 lg:px-16 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.8),transparent_35%),radial-gradient(circle_at_82%_8%,rgba(226,232,240,0.4),transparent_32%)]">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="grid lg:grid-cols-2">
          <div className="relative h-44 sm:h-64 lg:h-full">
            <Image
              src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1600&q=80"
              alt="Resources and timeline"
              fill
              className="object-cover"
              sizes="(min-width:1024px) 50vw, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-slate-900/10" />
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-700">
              About
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-4xl">
              Timeline, News & Resources
            </h1>
            <p className="mt-3 text-sm text-gray-700">
              Detailed sections covering the corporate timeline, news & updates,
              and resources for partners and investors.
            </p>
          </div>
        </div>
      </div>

      {/* Subnav chips */}
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

      {/* Sections */}
      <div className="mx-auto max-w-6xl space-y-10">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="overflow-hidden rounded-2xl border border-gray-100 bg-white/95 shadow-lg shadow-slate-900/5 scroll-mt-24"
          >
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="p-6 sm:p-8 space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-700">
                  Resources column
                </p>
                <h2 className="mt-2 text-2xl font-bold text-gray-900">
                  {section.title}
                </h2>

                <p className="text-base text-gray-700">{section.lead}</p>

                <ul className="space-y-2 text-sm text-gray-700">
                  {section.points.map((p, i) => (
                    <li key={`${section.id}-pt-${i}`} className="flex gap-2">
                      <span
                        className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-700"
                        aria-hidden="true"
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-full min-h-[240px] bg-gray-50">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-slate-900/10"
                  aria-hidden="true"
                />
                <Image
                  src={section.image}
                  alt={`${section.title} illustrative`}
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
