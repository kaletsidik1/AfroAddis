"use client";
import Image from "next/image";

const sections = [
  {
    id: "company",
    title: "Company profile",
    lead: "Founded in 2015 in Addis Ababa, operating across trading & export (coffee, pulses, oilseeds), import & retail (appliances, electronics, household), and manufacturing (furniture & woodwork).",
    points: [
      "Registered in Ethiopia with multi-division operations and partner-centric model.",
      "Serving domestic retail/wholesale partners and global buyers in Africa, EU, Middle East, and North America.",
      "Value pillars: trust, integrity, professionalism, on-time quality delivery.",
    ],
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "governance",
    title: "Governance & board",
    lead: "Board and advisory oversight on strategy, capital allocation, and risk with audit & risk functions enforcing SOPs and compliance.",
    points: [
      "Audit & risk controls for procurement, FX, logistics, and documentation.",
      "Periodic audits and governance cadence to maintain transparency and performance.",
      "Compliance aligned to Ethiopian regulations and international trade standards.",
    ],
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "achievements",
    title: "Achievements & awards",
    lead: "Recognitions for transparent reporting, compliant operations, and contributions to sector associations and trade finance partnerships.",
    points: [
      "Best Taxpayer Award for compliant trade and transparent reporting.",
      "Active member of Addis Ababa Chamber of Commerce and sector bodies.",
      "Structured trade finance partnerships with leading Ethiopian banks.",
    ],
    image:
      "https://images.unsplash.com/photo-1515165562835-c3b8c2a9fdee?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "resources",
    title: "Resources",
    lead: "Corporate profile and division brochures available; compliance kit accessible on request for partners and investors.",
    points: [
      "Corporate profile PDF: concise overview for partners and investors.",
      "Division brochures: import/export catalogs, manufacturing capabilities, service menus.",
      "Compliance kit: licenses, registrations, certificates.",
    ],
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function AboutCompanyPage() {
  return (
    <div className="space-y-12 px-4 pb-24 pt-14 sm:px-8 lg:px-16 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.8),transparent_35%),radial-gradient(circle_at_82%_8%,rgba(252,211,77,0.35),transparent_32%)]">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="grid lg:grid-cols-2">
          <div className="relative h-44 sm:h-64 lg:h-full">
            <Image
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80"
              alt="Company operations"
              fill
              className="object-cover"
              sizes="(min-width:1024px) 50vw, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-red-900/10" />
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-red-700">
              About
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-4xl">
              Company, Governance & Achievements
            </h1>
            <p className="mt-3 text-sm text-gray-700">
              Detailed sections covering the company profile, governance &
              board, achievements & awards, and key resources.
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
            className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-900 hover:border-amber-300 hover:bg-amber-100"
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
            className="overflow-hidden rounded-2xl border border-gray-100 bg-white/95 shadow-lg shadow-amber-900/5 scroll-mt-24"
          >
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="p-6 sm:p-8 space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-700">
                  Company column
                </p>
                <h2 className="mt-2 text-2xl font-bold text-gray-900">
                  {section.title}
                </h2>

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
              </div>

              <div className="relative h-full min-h-[240px] bg-gray-50">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-amber-900/10"
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
