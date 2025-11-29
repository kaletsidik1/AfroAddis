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
      <div className="flex h-16 items-center justify-center">
        <span className="text-sm font-semibold text-gray-700">{initials}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-16">
      <Image
        src={src}
        alt={name}
        width={120}
        height={60}
        className="object-contain max-h-12 w-auto"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

const partners = [
  { id: 1, name: "Samsung", logo: "/samsung.svg" },
  { id: 2, name: "Hisense", logo: "/hisense.svg" },
  { id: 3, name: "LG", logo: "/lg.svg" },

  { id: 5, name: "Sony ", logo: "/sony.svg" },
  { id: 6, name: "Suzuki", logo: "/suzuki.svg" },
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

      <div className="mx-auto max-w-5xl">
        <div className="grid items-center justify-items-center gap-6 [grid-template-columns:repeat(auto-fit,minmax(140px,1fr))]">
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
