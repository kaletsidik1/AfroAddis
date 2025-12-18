"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const categories = [
  {
    key: "household",
    title: "Household Goods",
    copy: "Essential household products spanning appliances, furniture and kitchenware — curated for quality, durability and local availability.",
    images: [
      "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
    ],
    href: "/products#household",
  },
  {
    key: "electronics",
    title: "Electronics & Tech",
    copy: "Smartphones, computers and audio/video equipment — sourced and tested to meet modern consumer and business needs.",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",

      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    ],
    href: "/products#electronics",
  },
  {
    key: "automotive",
    title: "Automotive & Industrial",
    copy: "Vehicle parts, machinery and building materials for professionals and repair shops — reliable supply chains and quality control.",
    images: [
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    ],
    href: "/products#automotive",
  },
];

export function ProductsSection() {
  function ProductCard({ cat }: { cat: (typeof categories)[number] }) {
    const [index, setIndex] = useState(0);
    const intervalRef = useRef<number | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      start();
      return () => stop();
    }, []);

    const start = (delay = 8000) => {
      stop();
      intervalRef.current = window.setInterval(() => {
        setIndex((i) => (i + 1) % cat.images.length);
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
      setIndex((i) => (i - 1 + cat.images.length) % cat.images.length);
      start();
    };

    const next = () => {
      stop();
      setIndex((i) => (i + 1) % cat.images.length);
      start();
    };

    // touch support
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
    }, [cat.images.length]);

    return (
      <div
        id={cat.key}
        className="group relative flex min-h-[420px] lg:min-h-[380px] flex-col lg:flex-row items-stretch overflow-hidden border border-white/60 bg-white/5 shadow-2xl transition hover:-translate-y-1 hover:shadow-amber-900/30"
      >
        <div
          ref={containerRef}
          onMouseEnter={() => stop()}
          onMouseLeave={() => start()}
          className="relative w-full lg:w-1/2 h-64 lg:h-auto"
        >
          {cat.images.map((src, i) => (
            <div
              key={`${cat.key}-slide-${i}`}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={src}
                alt={`${cat.title} ${i + 1}`}
                fill
                className="object-cover"
                sizes="(min-width:1024px) 50vw, 100vw"
              />
            </div>
          ))}

          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/60 p-2 text-gray-900 shadow-md hover:bg-white/70"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/60 p-2 text-gray-900 shadow-md hover:bg-white/70"
          >
            ›
          </button>
        </div>

        <div className="p-8 w-full lg:w-1/2 flex flex-col justify-between">
          <div>
            <p className="text-sm uppercase tracking-wide text-amber-700">
              Products
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-gray-900">
              {cat.title}
            </h3>
            <p className="mt-3 text-base text-gray-700">{cat.copy}</p>
          </div>

          <div className="mt-6 flex justify-end">
            <Link
              href={cat.href}
              className="inline-flex items-center gap-2 bg-red-700 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700"
            >
              See more
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <section
      id="products"
      className="relative space-y-10 overflow-hidden  border border-white/70 bg-gradient-to-br from-[#fdf7ef] via-white to-[#f4eee4] px-6 py-14 text-gray-900 shadow-2xl shadow-amber-900/10 sm:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.2),_transparent_45%)] opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/nistri.png')] opacity-15" />

      <div className="relative space-y-4 text-center lg:text-left">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-700/80">
          Products
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Core product lines
        </h2>
        <p className="mx-auto max-w-3xl text-sm text-gray-600 lg:mx-0">
          From coffee, pulses, and sesame to imported appliances and locally
          manufactured furniture, Afro Addis connects product lines across
          multiple sectors.
        </p>
      </div>

      <div className="relative grid gap-12">
        {categories.map((cat) => (
          <div key={cat.key} className="w-full">
            <ProductCard cat={cat} />
          </div>
        ))}
      </div>

      <div className="relative text-sm font-semibold text-gray-900/80">
        <Link
          href="/products"
          className="absolute  bg-red-700 hover:bg-amber-700 text-white right-0  p-2 -bottom-4 rounded group inline-flex items-center gap-2 transition"
        >
          View full product catalogue
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
