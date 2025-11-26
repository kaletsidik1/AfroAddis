"use client";
import Image from "next/image";
import { useState } from "react";

function PartnerLogo({ name, src }: { name: string; src?: string }) {
  const [failed, setFailed] = useState(false);

  const initials = name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  if (!src || failed) {
    return (
      <div className="flex items-center justify-center bg-white/90 p-3 shadow-sm">
        <svg
          width="120"
          height="60"
          viewBox="0 0 120 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="120" height="60" rx="6" fill="#ffffff" />
          <rect width="120" height="60" rx="6" fill="#f8fafc" />
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial"
            fontSize="20"
            fill="#1f2937"
          >
            {initials}
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div className="bg-white/80 p-3 shadow-sm">
      <Image
        src={src}
        alt={name}
        width={120}
        height={60}
        className="object-contain"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

const partners = [
  { id: 1, name: "Samsung", logo: "/samsung.png" },
  { id: 2, name: "Hisense", logo: "/hisense.png" },
  { id: 3, name: "LG", logo: "/lg.png" },
  {
    id: 4,
    name: "Kumtel",
    logo: "/kumtel.png",
    note: "KYT is the exclusive Ethiopian agent for ARKEMIX, a leading French manufacturer of premium electronics for its KRYSTER and BERKLAYS branded full-range electronics appliances, demonstrating trust from international partners and recognition of our operational excellence.",
  },
  { id: 5, name: "Sony", logo: "/sony.png" },
  { id: 6, name: "Suzuki", logo: "/suzuki.png" },
];

export function WorkingWithSection() {
  return (
    <section id="working-with" className="space-y-6">
      <div className="space-y-3 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-700">
          Working with
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
          Our Strategic Partners
        </h2>
        <p className="mx-auto max-w-3xl text-base text-gray-600">
          <span className="font-bold">KYT</span> is the exclusive Ethiopian
          agent for ARKEMIX, a leading French manufacturer of premium
          electronics for its KRYSTER and BERKLAYS branded full-range
          electronics appliances, demonstrating trust from international
          partners and recognition of our operational excellence.
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 items-center">
          {partners.map((p) => (
            <div key={p.id} className="flex items-center justify-center">
              <PartnerLogo name={p.name} src={p.logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
