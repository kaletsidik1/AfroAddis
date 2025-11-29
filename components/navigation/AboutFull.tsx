"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { megaMenuGroups } from "@/components/navigation/menuConfig";

// Single-file About subnav + sections. Click a subnav item to scroll to
// the corresponding section and update URL hash. Highlights active item.

export default function AboutFull() {
  const group = useMemo(() => megaMenuGroups.find((g) => g.label.toLowerCase() === "about"), []);
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
      { label: "Achievements & awards", id: labelToId["Achievements & awards"] },
      { label: "Resources", id: labelToId["Resources"] },
      { label: "Corporate timeline", id: labelToId["Corporate timeline"] },
      { label: "News & updates", id: labelToId["News & updates"] },
    ],
    []
  );

  useEffect(() => {
    const sectionIds = items.map((i) => i.id);
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { root: null, rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((s) => obs.observe(s));
    observerRef.current = obs;

    return () => obs.disconnect();
  }, [items]);

  useEffect(() => {
    // If the URL has a hash on mount, scroll to it
    const hash = typeof window !== "undefined" ? window.location.hash.replace("#", "") : "";
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
      if (typeof window !== "undefined") window.history.pushState(null, "", `#${id}`);
      setActiveId(id);
    }
  };

  if (!group) return null;

  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 py-6">
          {/* Subnav */}
          <div className="sticky top-16 z-30 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="overflow-x-auto">
              <nav className="flex gap-3 bg-white py-2" aria-label="About sub navigation">
                {items.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleClick(e, item.id)}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${activeId === item.id ? "bg-red-600 text-white" : "text-gray-700 hover:bg-gray-50"}`}
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
              <p>
                Brief company profile content goes here. Replace this placeholder with the real company profile
                content. You can expand this block with images, lists, and more structured content as required.
              </p>
            </section>

            <section id="governance" className="prose max-w-none">
              <h2>Governance &amp; board</h2>
              <p>Information about governance, board members, roles and responsibilities.</p>
            </section>

            <section id="achievements" className="prose max-w-none">
              <h2>Achievements &amp; awards</h2>
              <p>List notable achievements and awards the company has received over the years.</p>
            </section>

            <section id="timeline" className="prose max-w-none">
              <h2>Corporate timeline</h2>
              <p>Corporate history and timeline — milestones, founding, major events.</p>
            </section>

            <section id="news" className="prose max-w-none">
              <h2>News &amp; updates</h2>
              <p>Latest news items and updates. Consider listing items with dates and short descriptions.</p>
            </section>
            <section id="resources" className="prose max-w-none">
              <h2>Resources</h2>
              <p>Other resources and useful links related to the About section.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
