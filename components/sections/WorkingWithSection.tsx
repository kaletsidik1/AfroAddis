"use client";
import Image from "next/image";
import { useState } from "react";

function PartnerLogo({ name, src, scale }: { name: string; src?: string; scale?: number }) {
  const [failed, setFailed] = useState(false);

  const initials = name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  // fixed box for each partner logo so all logos render at the same size
  const boxClasses = "h-20 w-36 flex items-center justify-center";

  if (!src || failed) {
    return (
      <div className={`${boxClasses}`}>
        <span className="text-sm font-semibold text-gray-700">{initials}</span>
      </div>
    );
  }

  return (
    <div className={`${boxClasses}`}>
      <div className="relative h-full w-full flex items-center justify-center">
        <div
          className="h-full w-full flex items-center justify-center"
          style={scale && scale > 0 ? { transform: `scale(${scale})`, transformOrigin: 'center' } : undefined}
        >
          <Image
            src={src}
            alt={name}
            fill
            className="object-contain p-1"
            sizes="120px"
            onError={() => setFailed(true)}
          />
        </div>
      </div>
    </div>
  );
}

const partners = [
  { id: 1, name: "Samsung", logo: "/samsung.svg", scale: 1.8 },
  { id: 2, name: "Hisense", logo: "/hisense.png", scale: 2.2 },
  { id: 3, name: "LG", logo: "/lg.svg" , scale: 0.7 },
{ id: 4, name: "Kumtel", logo: "/kumtel.png", scale: 1.1 },
  { id: 5, name: "Sony ", logo: "/sony.svg", scale: 0.9 },
  { id: 6, name: "Suzuki", logo: "/suzuki.svg", scale: 0.7},
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
        <div className="grid items-center justify-items-center sm:gap-6 md:gap-8 grid-cols-[repeat(auto-fit,minmax(140px,1fr))]">
          {partners.map((p) => (
            <div key={p.id} className="flex items-center justify-center">
              <PartnerLogo name={p.name} src={p.logo} scale={p.scale} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
