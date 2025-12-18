import Image from "next/image";
import Link from "next/link";
import { Plane } from "lucide-react";

const trustBadges = [
  "AEO Accreditation · In Progress",
  "Customs Level II",
  "Best Taxpayer Award",
  "Exclusive KRYSTER & BERKLAYS Agent",
];

const stats = [
  { value: "10+", label: "Years of operations" },
  { value: "4", label: "Integrated divisions" },
  { value: "25+", label: "International partners" },
  { value: "8", label: "Global trade routes" },
];

const tradeDestinations = [
  "France",
  "Turkey",
  "China",
  "UAE",
  "Germany",
  "Korea",
  "Italy",
  "Spain",
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#0f172a] text-white shadow-2xl shadow-emerald-900/20"
    >
      <div className="absolute inset-0 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,187,82,0.25),transparent_50%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.2),transparent_50%)]" />
        <div className="hero-carousel absolute inset-0 mix-blend-soft-light">
          {[
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1600&q=80",
          ].map((src, index) => (
            <div
              key={src}
              className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-[2500ms]"
              style={{
                backgroundImage: `url(${src})`,
                animation: `heroFade 18s infinite`,
                animationDelay: `${index * 6}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative grid items-stretch gap-12 px-6 py-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] sm:px-10 sm:py-16 lg:px-16">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded border border-white/20 px-1 py-2 font-semibold uppercase tracking-[0.35em] bg-red-700">
            Afro Addis · Ethiopia
          </div>
          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-serif  text-gray-100 sm:text-4xl lg:text-4xl">
              Transforming Trade, Manufacturing, and Export for a Better Future
            </h1>
            <p className="max-w-2xl text-base text-gray-100 font-sans sm:text-lg">
              A multi-sector enterprise transforming Ethiopia’s economy through
              advanced trading and retail systems, flexible credit access,
              global standard import and export operations, and high-quality
              local manufacturing all delivered with strong governance and
              international partnerships.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium text-slate-100"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/divisions"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:scale-[1.01]"
            >
              Explore our services
            </Link>
            <Link
              href="/resources#downloads"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Download company profile
            </Link>
          </div>

          <dl className="grid gap-5 text-sm text-white/80 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className=" uppercase  text-white">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative grid gap-5">
          <div className="relative overflow-hidden border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",

                "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
              ].map((src, index) => (
                <div
                  key={index}
                  className="group relative h-40 overflow-hidden border border-white/10"
                >
                  <Image
                    src={src}
                    alt={`Hero collage ${index}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 20vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-70" />
                </div>
              ))}
            </div>
            <div className="mt-4 border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                Integrated capability
              </p>
              <p className="mt-2 text-sm text-white/90">
                Trading · Import & retail · Manufacturing · Global logistics
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded border border-white/10 bg-[#040f2a] p-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                Global trade routes
              </p>
              <p className="text-base text-white/90">
                Addis Ababa → Key international partners
              </p>
            </div>
            <div className="relative mt-6">
              <div className="h-48 w-full rounded-2xl ">
                <div className="absolute inset-0 opacity-50">
                  <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/BlankMap-World.svg/1024px-BlankMap-World.svg.png')] bg-contain bg-center bg-no-repeat invert" />
                </div>
                <div className="relative flex h-full flex-col justify-between p-4 text-xs text-white/80">
                  {tradeDestinations.map((destination) => (
                    <div
                      key={destination}
                      className="flex items-center justify-between border-b border-white/10 py-1 last:border-none"
                    >
                      <span>{destination}</span>
                      <span>
                        <Plane width={16} height={16} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-44 left-1/2 w-40 -translate-x-1/2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-center text-xs font-semibold text-white/80 backdrop-blur">
                Addis Ababa HQ · Bole
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
