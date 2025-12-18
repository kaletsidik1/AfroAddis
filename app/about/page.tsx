import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const cards = [
    {
      title: "Company",
      description: "Company profile, governance & board, achievements & awards, and key resources.",
      href: "/about/company#company",
      image:
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Resources",
      description: "Corporate timeline, news & updates, and downloadable resources for partners.",
      href: "/about/resources#timeline",
      image:
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  return (
    <div className="space-y-12 px-4 pb-20 pt-16 sm:px-8 lg:px-16">
      <header className="mx-auto max-w-5xl text-center space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-red-700">About</p>
        <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl">Learn About Afro Addis</h1>
        <p className="text-lg text-gray-700">
          Choose a column to dive into detailed sections: Company or Resources.
        </p>
      </header>

      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
          >
            <div className="relative h-48">
              <Image
                src={card.image}
                alt={`${card.title} banner`}
                fill
                className="object-cover"
                sizes="(min-width:640px) 50vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-red-900/10" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900">{card.title}</h2>
              <p className="mt-2 text-sm text-gray-700">{card.description}</p>
              <p className="mt-4 text-sm font-semibold text-red-700">Explore →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
