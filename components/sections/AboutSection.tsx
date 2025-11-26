"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

function StatItem({ value, label }: { value: string | number; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const numeric = Number(String(value).replace(/[^0-9]/g, "")) || 0;
    const duration = 1200;
    let start: number | null = null;
    let raf = 0;
    function step(ts: number) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const current = Math.floor(progress * numeric);
      setCount(current);
      if (progress < 1) raf = requestAnimationFrame(step);
      else setCount(numeric);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [visible, value]);

  const numeric = Number(String(value).replace(/[^0-9]/g, "")) || 0;
  const showPlus = String(value).includes("+");

  return (
    <div ref={ref} className="px-2 py-2">
      <div
        className={`mx-auto text-2xl font-bold text-red-800 transition-transform duration-700 ease-out transform ${
          visible ? "scale-105" : "scale-95 opacity-60"
        }`}
        aria-live="polite"
      >
        {count}
        {count >= numeric && showPlus
          ? "+"
          : showPlus && count === 0
          ? "+"
          : ""}
      </div>
      <div className="text-xs text-red-700">{label}</div>
    </div>
  );
}

const featuredImages = [
  {
    src: "https://images.unsplash.com/photo-15656800194b-41d4b54fd093?auto=format&fit=crop&w=1200&q=80",
    caption: "Global Distribution Network",
  },
  {
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    caption: "Quality Assurance Centers",
  },
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    caption: "Modern Logistics Infrastructure",
  },
  {
    src: "https://images.unsplash.com/photo-15656800194b-41d4b54fd093?auto=format&fit=crop&w=1200&q=80",
    caption: "International Trade Partnerships",
  },
];

const operationHighlights = [
  {
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
    caption: "Advanced Warehousing",
    description: "State-of-the-art storage facilities with climate control",
  },
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    caption: "Supply Chain Excellence",
    description: "End-to-end logistics management and tracking",
  },
];

export function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-slate-100 px-6 py-16 sm:px-8 lg:px-16"
    >
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.05),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(120,119,198,0.02)_50%,transparent_51%)] bg-[length:10px_10px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded bg-red-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.1rem] text-white">
            Est. 2015 · Trusted in Global Trade
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            ABOUT US
          </h1>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Content & Main Image Slider */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-slate-700 text-justify break-words whitespace-normal">
                KYT Trading Pvt. Ltd. Company, whose trade name is AFROADDIS, is
                a rapidly growing commercial enterprise owned and run by a team
                of former diaspora executives. It has been operational since
                2015. We are currently engaged in manufacturing, import, trading
                and hospitality industry. Our business has significantly grown
                over the past years and we are also engaged in the export
                business which consists of coffee, sesame, pulses and others. To
                this effect we have secured a sit at Ethiopian Commodity
                Exchange (ECX) as a direct trader. We plan to work extensively
                and achieve success in this sector as we have done in the
                others. Our operations are entirely driven by our value system
                whose pillars include Trust Integrity and Professionalism (TIP).
                In all our dealings with stakeholders we ensure consistent
                quality, delivery time and competitive price.
              </p>
              <p className="text-lg leading-relaxed text-slate-700 text-justify break-words whitespace-normal">
                Our strategy is to position ourselves as a group that is trusted
                for top-quality products and customized service. We place
                special emphasis towards building long term relationships. We
                envision to be Pacesetters as we contribute towards shaping the
                future.
              </p>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition-colors"
                  aria-label="See more about AfroAddis"
                >
                  <span>See more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Main Image Slider */}
            <div className="relative h-96 sm:h-[28rem] overflow-hidden bg-slate-200 shadow-xl">
              {featuredImages.map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.caption}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm font-medium opacity-90">
                      {image.caption}
                    </p>
                  </div>
                </div>
              ))}

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {featuredImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "w-8 bg-white"
                        : "w-2 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Operation Highlights */}
          <div className="space-y-6">
            {/* Single Operation Image (Quality Assurance Centers) */}
            <div className=" overflow-hidden bg-white shadow-sm">
              <div className="relative h-96 sm:h-[28rem] w-full">
                <Image
                  src={featuredImages[1].src}
                  alt={featuredImages[1].caption}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium opacity-90">
                    {featuredImages[1].caption}
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Feature Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900">Global Reach</h4>
                <p className="mt-1 text-sm text-slate-600">
                  20+ countries served
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900">
                  Quality Certified
                </h4>
                <p className="mt-1 text-sm text-slate-600">
                  ISO standards compliance
                </p>
              </div>
            </div>

            {/* Stats Bar */}
            <div className=" p-6 text-white">
              <div className="grid grid-cols-2 gap-4 text-center">
                <StatItem value="8+" label="Years Experience" />
                <StatItem value="50+" label="Global Partners" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-12 flex justify-center">
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
        </div>
      </div>
    </section>
  );
}
