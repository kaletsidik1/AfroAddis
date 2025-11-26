import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Coffee",
    copy:
      "Ethiopian coffees processed through natural, washed, honey, and wet-hulled methods for different roasting profiles.",
    image: "https://images.unsplash.com/photo-1464306076886-da185f6a9d12?auto=format&fit=crop&w=640&q=80",
    detail: "Natural • Washed • Honey • Wet-hulled",
    badge: "Coffee Origin",
  },
  {
    title: "Pulses",
    copy: "Chickpeas, lentils, and beans sourced from trusted regions and graded for export.",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=640&q=80",
    detail: "Chickpeas • Lentils • Beans",
    badge: "Pulses Origin",
  },
  {
    title: "Sesame",
    copy: "High-quality sesame seeds supplied to international buyers and processors.",
    image: "https://images.unsplash.com/photo-1478749485505-2a903a729c63?auto=format&fit=crop&w=640&q=80",
    detail: "Humera • Wollega • White & mixed grades",
    badge: "Sesame Origin",
  },
];

export function ProductsSection() {
  return (
    <section
      id="products"
      className="relative space-y-10 overflow-hidden  border border-white/70 bg-gradient-to-br from-[#fdf7ef] via-white to-[#f4eee4] px-6 py-14 text-gray-900 shadow-2xl shadow-amber-900/10 sm:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.2),_transparent_45%)] opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/nistri.png')] opacity-15" />

      <div className="relative space-y-4 text-center lg:text-left">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-700/80">Products</p>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Core product lines</h2>
        <p className="mx-auto max-w-3xl text-sm text-gray-600 lg:mx-0">
          From coffee, pulses, and sesame to imported appliances and locally manufactured furniture, Afro Addis connects product lines
          across multiple sectors.
        </p>
      </div>

      <div className="relative grid gap-8 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.title}
            className="group relative flex min-h-[360px] flex-col justify-end overflow-hidden border border-white/60 bg-black/40 shadow-2xl shadow-amber-900/30 transition hover:-translate-y-1 hover:shadow-amber-900/50"
          >
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(min-width: 1024px) 30vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70" />
            <div className="absolute top-6 left-6">
              <span className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/80">
                {product.badge}
              </span>
            </div>
            <div className="relative space-y-4 border-t border-white/20 bg-gradient-to-b from-transparent via-black/30 to-black/70 p-6">
              <div>
                <h3 className="text-2xl font-semibold text-white">{product.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85">{product.copy}</p>
              </div>
              <div className="pt-3 text-xs uppercase tracking-[0.35em] text-white/60">{product.detail}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative text-center text-sm font-semibold text-gray-900/80">
        <Link href="/export" className="group inline-flex items-center gap-2 transition hover:text-gray-900">
          Explore our export catalogue
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}
