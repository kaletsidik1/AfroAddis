"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { megaMenuGroups } from "@/components/navigation/menuConfig";

export default function AboutFull() {
  const group = useMemo(
    () => megaMenuGroups.find((g) => g.label.toLowerCase() === "about"),
    []
  );
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Map menu labels to section ids used on this page
  const labelToId: Record<string, string> = {
    "Company profile": "company",
    "Governance & board": "governance",
    "Achievements & awards": "achievements",
    "Corporate timeline": "timeline",
    "News & updates": "news",
    Resources: "resources",
  };

  // Use a fixed ordered list for the About subnav
  const items = useMemo(
    () => [
      { label: "Company profile", id: labelToId["Company profile"] },
      { label: "Governance & board", id: labelToId["Governance & board"] },
      {
        label: "Achievements & awards",
        id: labelToId["Achievements & awards"],
      },
      { label: "Corporate timeline", id: labelToId["Corporate timeline"] },
      { label: "News & updates", id: labelToId["News & updates"] },
      { label: "Resources", id: labelToId["Resources"] },
    ],
    []
  );

  useEffect(() => {
    const sectionIds = items.map((i) => i.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-30% 0px -50% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((s) => obs.observe(s));
    observerRef.current = obs;

    return () => obs.disconnect();
  }, [items]);

  // Set initial activeId based on URL hash on mount
  useEffect(() => {
    const hash =
      typeof window !== "undefined"
        ? window.location.hash.replace("#", "")
        : "";

    // If there's a hash in URL, set it as active
    if (hash && items.some((item) => item.id === hash)) {
      setActiveId(hash);
      // Scroll to element after a small delay to ensure DOM is ready
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // Default to first section if no hash
      setActiveId(items[0]?.id || null);
    }
  }, [items]);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      // Update active ID immediately for better UX
      setActiveId(id);

      // Update URL hash without jumping
      if (typeof window !== "undefined") {
        window.history.pushState(null, "", `#${id}`);
      }

      // Scroll to element
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!group) return null;

  return (
    <div className="w-full bg-white/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 py-6">
          {/* Hero banner */}
          <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-44 sm:h-64 lg:h-full">
                <Image
                  src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80"
                  alt="Afro Addis team and operations"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 50vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-red-900/10" />
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-red-700">
                  About Afro Addis
                </p>
                <h1 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-4xl">
                  Company, Governance, Achievements & Resources
                </h1>
                <p className="mt-3 text-sm text-gray-700">
                  KYT Trading PLC (AFROADDIS) is a diversified Ethiopian group
                  operating across trading/export, import/retail, and
                  manufacturing, with growth initiatives in mining and assembly.
                  Use the sub navigation below to jump to any section.
                </p>
              </div>
            </div>
          </div>
          {/* Subnav */}
          <div className="sticky top-14 z-30 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="overflow-x-auto">
              <nav
                className="mt-8 flex gap-3 bg-white py-2 border-b border-red-500"
                aria-label="About sub navigation"
              >
                {items.map((item) => (
                  <button
                    key={item.id}
                    onClick={(e) => handleClick(e, item.id)}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                      activeId === item.id
                        ? "bg-red-600 text-white"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Rest of your sections remain the same */}
          <div className="space-y-12">
            <section id="company" className="prose max-w-none scroll-mt-24">
              <h2>Company profile</h2>
              <p className="text-gray-700">
                Founded in 2015 in Addis Ababa, we operate across trading &
                export (coffee, pulses, oilseeds), import & retail (appliances,
                electronics, household), and manufacturing (furniture &
                woodwork), with new initiatives in mining and assembly. We serve
                domestic retail/wholesale partners and global buyers in Africa,
                the EU, the Middle East, and North America.
              </p>
              <ul className="text-gray-700">
                <li>Registered in Ethiopia with multi-division operations.</li>
                <li>Value pillars: trust, integrity, professionalism.</li>
                <li>
                  Partner-centric: transparent documentation and after-sales
                  support.
                </li>
              </ul>
            </section>

            <section id="governance" className="prose max-w-none scroll-mt-24">
              <h2>Governance &amp; board</h2>
              <p className="text-gray-700">
                Governance is overseen by a board and advisors focused on
                strategy, capital allocation, and risk. Audit & risk functions
                enforce policies for procurement, FX, logistics, and operations,
                with periodic audits and SOPs for quality and documentation.
              </p>
              <ul className="text-gray-700">
                <li>
                  Board &amp; advisors: guide growth bets and compliance
                  posture.
                </li>
                <li>
                  Audit &amp; risk: controls for supply chain, finance, and
                  documentation.
                </li>
                <li>
                  Compliance: aligned to Ethiopian regulations and international
                  trade standards.
                </li>
              </ul>
            </section>

            <section
              id="achievements"
              className="prose max-w-none scroll-mt-24"
            >
              <h2>Achievements &amp; awards</h2>
              <ul className="text-gray-700">
                <li>
                  Best Taxpayer Award for transparent reporting and compliant
                  trade operations.
                </li>
                <li>
                  Active member of Addis Ababa Chamber of Commerce and sector
                  associations.
                </li>
                <li>
                  Structured trade finance partnerships with leading Ethiopian
                  banks.
                </li>
              </ul>
            </section>

            <section id="timeline" className="prose max-w-none scroll-mt-24">
              <h2>Corporate timeline</h2>
              <ul className="text-gray-700">
                <li>
                  <strong>2015</strong>: Founded KYT Trading PLC (AFROADDIS)
                  focusing on import and trading.
                </li>
                <li>
                  <strong>2018–2020</strong>: Expanded into export of coffee,
                  sesame, and pulses; secured ECX seat.
                </li>
                <li>
                  <strong>2021–2024</strong>: Launched manufacturing lines,
                  strengthened retail credit programs, and initiated
                  mining/assembly pilots.
                </li>
              </ul>
            </section>

            <section id="news" className="prose max-w-none scroll-mt-24">
              <h2>News &amp; updates</h2>
              <ul className="text-gray-700">
                <li>
                  New coffee processing line: commissioned additional wet mills
                  to expand specialty capacity.
                </li>
                <li>
                  Retail footprint: added partner showrooms in Addis Ababa and
                  regional hubs.
                </li>
                <li>
                  Sustainability: rolling out traceability and farmer support
                  programs in key coffee origins.
                </li>
              </ul>
            </section>

            <section id="resources" className="prose max-w-none scroll-mt-24">
              <h2>Resources</h2>
              <ul className="text-gray-700">
                <li>
                  Corporate profile PDF: concise overview for partners and
                  investors.
                </li>
                <li>
                  Division brochures: import/export catalogs, manufacturing
                  capabilities, and service menus.
                </li>
                <li>
                  Compliance kit: licenses, registrations, and certificates
                  available on request.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
