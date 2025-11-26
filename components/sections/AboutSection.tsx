import Image from "next/image";

const processingMethods = [
  { title: "Natural", description: "Sun-dried lots with layered sweetness." },
  { title: "Washed", description: "Clean, high-altitude clarity." },
  { title: "Honey", description: "Controlled mucilage for syrupy cups." },
  { title: "Wet-hulled", description: "Moisture-balanced for bold bodies." },
];

const partnerReasons = [
  { title: "Transparent partnerships", description: "Direct origin relationships and open-book reporting." },
  { title: "Quality control", description: "Dedicated QC labs and process checkpoints across each flow." },
  { title: "On-time logistics", description: "Multi-modal export coordination with secure warehousing." },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-[#fdf8f1] via-white to-[#f4ede3] px-6 py-12 shadow-2xl shadow-amber-900/10 sm:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.08),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-10" />

      <div className="relative grid gap-12 lg:grid-cols-[1.1fr_minmax(0,0.9fr)]">
        <div className="space-y-8 border-l border-amber-100/70 pl-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
            Est. 2015 · Trusted in global trade
          </div>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.45em] text-amber-700/80">About Afro Addis</p>
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900">An integrated Ethiopian group rooted in origin.</h2>
            <p className="text-base leading-relaxed text-gray-700">
              Our operations are led by a governance model that prioritizes Trust, Integrity, and Professionalism. From farmers to
              international distributors, every partnership is supported with disciplined execution, transparent communication, and
              disciplined pricing.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              We process coffee through natural, washed, honey, and wet-hulled methods, and we steward pulses and oilseeds with the same
              rigor to satisfy demanding export standards.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
            ].map((src, index) => (
              <div key={src} className="group relative h-48 overflow-hidden border border-white/40 bg-white/20 shadow-lg shadow-amber-900/10">
                <Image
                  src={src}
                  alt={`About collage ${index}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, 80vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 border-l border-white/40 pl-6">
          <div className="border border-white/60 bg-white/80 p-6 shadow-lg shadow-amber-900/10">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-600">Coffee processing</p>
              <span className="text-xs text-gray-500">Lab-backed QC</span>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {processingMethods.map((method) => (
                <div
                  key={method.title}
                  className="group rounded-2xl border border-amber-100/80 bg-gradient-to-br from-white to-amber-50/60 p-4 shadow-inner shadow-white/60 transition hover:-translate-y-[2px]"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-200 text-sm text-amber-700">
                      {method.title[0]}
                    </span>
                    <p className="text-sm font-semibold text-gray-900">{method.title}</p>
                  </div>
                  <p className="mt-2 text-xs text-gray-600">{method.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className=" border border-amber-200/80 bg-gradient-to-br from-amber-900/10 via-amber-50/90 to-white p-6 shadow-lg shadow-amber-900/10">
            <div className="border-l-4 border-amber-500 pl-4">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-700/90">Why partners choose us</p>
              <p className="mt-2 text-base font-semibold text-gray-900">Enterprise-level assurance for every consignment.</p>
            </div>
            <ul className="mt-5 space-y-4 text-sm text-gray-800">
              {partnerReasons.map((reason) => (
                <li key={reason.title} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-amber-400 text-xs text-amber-700">
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">{reason.title}</p>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 h-px w-32 bg-gradient-to-r from-amber-400 to-transparent" />
    </section>
  );
}
