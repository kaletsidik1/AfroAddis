"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { megaMenuGroups } from "@/components/navigation/menuConfig";

// Single-file About subnav + sections. Click a subnav item to scroll to
// the corresponding section and update URL hash. Highlights active item.

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
    "News & update": "news",
    Resources: "resources",
  };

  // Use a fixed ordered list for the About subnav so clicking always
  // navigates to the corresponding section in this page.
  const items = useMemo(
    () => [
      { label: "Company profile", id: labelToId["Company profile"] },
      { label: "Governance & board", id: labelToId["Governance & board"] },
      {
        label: "Achievements & awards",
        id: labelToId["Achievements & awards"],
      },
      { label: "Resources", id: labelToId["Resources"] },
      { label: "Corporate timeline", id: labelToId["Corporate timeline"] },
      { label: "News & updates", id: labelToId["News & updates"] },
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
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((s) => obs.observe(s));
    observerRef.current = obs;

    return () => obs.disconnect();
  }, [items]);

  useEffect(() => {
    // If the URL has a hash on mount, scroll to it
    const hash =
      typeof window !== "undefined"
        ? window.location.hash.replace("#", "")
        : "";
    if (hash) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // update hash without jumping
      if (typeof window !== "undefined")
        window.history.pushState(null, "", `#${id}`);
      setActiveId(id);
    }
  };

  if (!group) return null;

  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 py-6">
          {/* Subnav */}
          <div className="sticky top-14 z-30 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="overflow-x-auto">
              <nav
                className="mt-8 flex gap-3 bg-white py-2 border-b border-red-500"
                aria-label="About sub navigation"
              >
                {items.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleClick(e, item.id)}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                      activeId === item.id
                        ? "bg-red-600 text-white"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            <section id="company" className="prose max-w-none">
              <h2>Company profile</h2>
              <p className="text-gray-700">
                KYT Trading PLC (AFROADDIS) is a diversified Ethiopian group
                founded in 2015 and headquartered in Addis Ababa. We operate
                across trading and export (coffee, pulses, oilseeds), import and
                retail (appliances, electronics, household), and manufacturing
                (furniture and woodwork), with new ventures in mining and
                assembly. Our footprint serves domestic retail/wholesale
                partners and global buyers in Africa, the EU, the Middle East,
                and North America.
              </p>
              <ul className="text-gray-700">
                <li>
                  Registered in Ethiopia with a multi-division operating model.
                </li>
                <li>
                  Value pillars: trust, integrity, professionalism; consistent
                  quality and on-time delivery.
                </li>
                <li>
                  Partner-centric: financeable trade flows, transparent
                  documentation, and after-sales support.
                </li>
              </ul>
            </section>

            <section id="governance" className="prose max-w-none">
              <h2>Governance &amp; board</h2>
              <p className="text-gray-700">
                Governance is structured with board and advisory oversight on
                strategy, capital allocation, and risk. Audit and risk functions
                enforce policies for procurement, FX, logistics, and operational
                controls, with periodic audits and SOPs for quality and
                documentation.
              </p>
              <ul className="text-gray-700">
                <li>
                  Board &amp; advisors: guide growth bets, partnerships, and
                  compliance posture.
                </li>
                <li>
                  Audit &amp; risk: controls for supply chain, finance, and
                  trade documentation.
                </li>
                <li>
                  Compliance: aligned to Ethiopian regulations and international
                  trade standards.
                </li>
              </ul>
            </section>

            <section id="achievements" className="prose max-w-none">
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

            <section id="timeline" className="prose max-w-none">
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

            <section id="news" className="prose max-w-none">
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
            <section id="resources" className="prose max-w-none">
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
