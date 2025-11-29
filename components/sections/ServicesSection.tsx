"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const serviceCards = [
  {
    key: "trading",
    title: "Trading",
    description: `Offering essential household goods through a customer-focused, credit-based retail model that supports local manufacturing and international partnerships making high-quality products accessible worldwide.`,
    images: [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523473827532-0e0b4d9a4b6f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
    ],
    overlay: "from-black/70 via-black/30 to-transparent",
    tags: ["Household goods", "Credit retail", "Local manufacturing", "Global partners"],
    href: "/services#trading",
  },
  {
    key: "import",
    title: "Import",
    description:
      "Sourcing global-quality household appliances and materials from international markets to meet domestic and regional demand, ensuring affordability and reliability for customers around the world.",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517249378-59f5f0f4c8d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    ],
    overlay: "from-slate-900/80 via-slate-800/60 to-slate-600/40",
    tags: ["Electronics", "Appliances", "After-sales"],
    href: "/services#import",
  },
  {
    key: "export",
    title: "Export",
    description:
      "Promoting Ethiopia’s agricultural excellence by exporting high-value products like coffee, Green Mung, sesame, pulses, and Soya Beans to international markets connecting Ethiopian farmers to worldwide trade networks.",
    images: [
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1200&q=80",
    ],
    overlay: "from-black/80 via-black/40 to-amber-900/30",
    tags: ["Coffee", "Sesame", "Pulses"],
    href: "/services#export",
  },
  {
    key: "manufacturing",
    title: "Manufacturing",
    description:
      "High-quality household furniture including sofa sets, kitchen cabinets, beds, cupboards, dressing tables, shelves, and custom woodwork using durable materials and in-house expertise.",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=1200&q=80",
    ],
    overlay: "from-amber-900/80 via-amber-700/50 to-amber-400/30",
    tags: ["Residential", "Commercial", "Custom build"],
    href: "/services#manufacturing",
  },
];

export function ServicesSection() {
  // Large featured Trading card with wider image area
  function TradingCard({ card }: { card: (typeof serviceCards)[number] }) {
    const [index, setIndex] = useState(0);
    const intervalRef = useRef<number | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      start();
      return () => stop();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const start = (delay = 4000) => {
      stop();
      intervalRef.current = window.setInterval(() => {
        setIndex((i) => (i + 1) % card.images.length);
      }, delay);
    };

    const stop = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const prev = () => {
      stop();
      setIndex((i) => (i - 1 + card.images.length) % card.images.length);
      start();
    };

    const next = () => {
      stop();
      setIndex((i) => (i + 1) % card.images.length);
      start();
    };

    // Touch support
    useEffect(() => {
      const el = containerRef.current;
      if (!el) return;
      let startX: number | null = null;
      const onTouchStart = (e: TouchEvent) => {
        startX = e.touches[0].clientX;
      };
      const onTouchEnd = (e: TouchEvent) => {
        if (startX === null) return;
        const dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 40) {
          if (dx > 0) prev();
          else next();
        }
        startX = null;
      };
      el.addEventListener("touchstart", onTouchStart);
      el.addEventListener("touchend", onTouchEnd);
      return () => {
        el.removeEventListener("touchstart", onTouchStart);
        el.removeEventListener("touchend", onTouchEnd);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [card.images.length]);

    return (
      <article
        id={card.key}
        className="group grid gap-6 rounded-lg border border-white/60 bg-white shadow-sm lg:grid-cols-2"
      >
        <div
          ref={containerRef}
          onMouseEnter={() => stop()}
          onMouseLeave={() => start()}
          className="relative h-64 lg:h-full"
        >
          {card.images.map((src, i) => (
            <div
              key={`${card.key}-slide-${i}`}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={src}
                alt={`${card.title} ${i + 1}`}
                fill
                className="object-cover"
                sizes="(min-width:1024px) 50vw, 100vw"
              />
            </div>
          ))}

          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 p-2 text-gray-900 shadow-md hover:bg-white/70"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 p-2 text-gray-900 shadow-md hover:bg-white/70"
          >
            ›
          </button>

          <div className="absolute left-6 bottom-6 rounded-sm bg-black/50 px-3 py-1 text-sm text-white">
            {card.title}
          </div>
        </div>

        <div className="p-6">
          <p className="text-xs uppercase tracking-wide text-amber-700">
            {card.title}
          </p>
          <h3 className="mt-2 text-3xl font-bold text-gray-900">
            {card.title}
          </h3>
          <p className="mt-4 text-base text-gray-700">{card.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {card.tags.map((t) => (
              <span
                key={`${card.key}-tag-${t}`}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href={card.href ?? "/services"}
              className="inline-flex items-center gap-2 rounded-md bg-red-700 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700"
            >
              See more
              <span>→</span>
            </Link>
          </div>
        </div>
      </article>
    );
  }

  // Individual card component with carousel behavior
  function ServiceCard({ card }: { card: (typeof serviceCards)[number] }) {
    const [index, setIndex] = useState(0);
    const intervalRef = useRef<number | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      start();
      return () => stop();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const start = (delay = 4000) => {
      stop();
      intervalRef.current = window.setInterval(() => {
        setIndex((i) => (i + 1) % card.images.length);
      }, delay);
    };

    const stop = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const prev = () => {
      stop();
      setIndex((i) => (i - 1 + card.images.length) % card.images.length);
      start();
    };

    const next = () => {
      stop();
      setIndex((i) => (i + 1) % card.images.length);
      start();
    };

    // Touch support for swipe
    useEffect(() => {
      const el = containerRef.current;
      if (!el) return;
      let startX: number | null = null;
      const onTouchStart = (e: TouchEvent) => {
        startX = e.touches[0].clientX;
      };
      const onTouchEnd = (e: TouchEvent) => {
        if (startX === null) return;
        const dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 40) {
          if (dx > 0) prev();
          else next();
        }
        startX = null;
      };
      el.addEventListener("touchstart", onTouchStart);
      el.addEventListener("touchend", onTouchEnd);
      return () => {
        el.removeEventListener("touchstart", onTouchStart);
        el.removeEventListener("touchend", onTouchEnd);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [card.images.length]);

    return (
      <article className="group grid gap-6 rounded-lg border border-white/60 bg-white shadow-sm lg:grid-cols-2">
        <div
          ref={containerRef}
          onMouseEnter={() => stop()}
          onMouseLeave={() => start()}
          className="relative h-64 lg:h-full"
        >
          {card.images.map((src, i) => (
            <div
              key={`${card.key}-slide-${i}`}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={src}
                alt={`${card.title} ${i + 1}`}
                fill
                className="object-cover"
                sizes="(min-width:1024px) 50vw, 100vw"
              />
            </div>
          ))}

          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/40 p-2 text-gray-900 shadow-md hover:bg-white/60"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/40 p-2 text-gray-900 shadow-md hover:bg-white/60"
          >
            ›
          </button>
        </div>

        <div className="p-6">
          <p className="text-xs uppercase tracking-wide text-amber-700">
            {card.title}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-gray-900">
            {card.title}
          </h3>
          <p className="mt-3 text-sm text-gray-600">{card.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {card.tags.map((t) => (
              <span
                key={`${card.key}-tag-${t}`}
                className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href={card.href ?? "/services"}
              className="inline-flex items-center gap-2 rounded-md bg-red-700 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700"
            >
              See more
              <span>→</span>
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <section
      id="services"
      className="relative space-y-8 px-6 py-10 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-wider text-amber-700">
            Services
          </p>
          <h2 className="mt-2 text-4xl font-semibold text-gray-900 sm:text-5xl font-sans">
            Integrated capabilities built for global trade
          </h2>
          <p className="mt-3 max-w-3xl mx-auto text-lg text-gray-700 font-sans">
            Export, import, trading and manufacturing connected through strict
            quality control, partner networks and local expertise. Trading is
            our core: retail distribution, credit-based customer models and
            in-house manufacturing support make quality products accessible
            across Ethiopia and the region.
          </p>
        </div>

        <div className="grid gap-6">
          {serviceCards.map((card) =>
            card.key === "trading" ? (
              <TradingCard key={card.key} card={card} />
            ) : (
              <ServiceCard key={card.key} card={card} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
