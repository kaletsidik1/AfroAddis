"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  megaMenuGroups,
  primaryLinks,
} from "@/components/navigation/menuConfig";

export function Navbar() {
  const pathname = usePathname();
  const isMagazine = pathname?.startsWith("/magazines");

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  const openMenu = (label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDesktopMenu(label);
  };

  const closeMenuWithDelay = (delay = 180) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = window.setTimeout(
      () => setOpenDesktopMenu(null),
      delay
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!mobileNavOpen) return;
      const target = event.target as Node | null;
      if (
        containerRef.current &&
        target &&
        !containerRef.current.contains(target)
      ) {
        setMobileNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
    };
  }, [mobileNavOpen]);

  const scrollToHash = (href: string) => {
    const hash = href.includes("#") ? href.split("#")[1] : "";
    if (!hash) return false;
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${hash}`);
      return true;
    }
    return false;
  };

  const headerClasses = isMagazine
    ? "relative z-50 border-b border-gray-300 bg-white"
    : "fixed inset-x-0 top-0 z-50 border-b border-gray-300 bg-white/95 backdrop-blur-xl";

  const mobileNavPosition = isMagazine
    ? "absolute left-0 right-0 top-full z-40"
    : "fixed inset-x-0 top-16 z-40";

  return (
    <header className={headerClasses}>
      <div
        ref={containerRef}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center justify-between py-1">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-16 w-20 sm:h-20 sm:w-24">
              <Image
                src="/afro_logo.png"
                alt="Afro Addis logo"
                fill
                sizes="96px"
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-semibold tracking-tight text-red-600 sm:text-2xl">
              KYT TRADING PLC.
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 lg:flex">
            {megaMenuGroups.map((group) => {
              const hasDropdown =
                Array.isArray(group.columns) && group.columns.length > 0;
              if (!hasDropdown) {
                return (
                  <Link
                    key={group.label}
                    href={group.href ?? "/"}
                    onClick={(e) => {
                      if (group.href && scrollToHash(group.href)) {
                        e.preventDefault();
                      }
                    }}
                    className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
                  >
                    {group.label}
                  </Link>
                );
              }

              return (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => openMenu(group.label)}
                  onFocus={() => openMenu(group.label)}
                  onMouseLeave={() => closeMenuWithDelay()}
                >
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
                  >
                    {group.label}
                    <svg
                      className={`h-3 w-3 transition ${
                        openDesktopMenu === group.label ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.5L6 6.5L11 1.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  <div
                    onMouseEnter={() => {
                      if (closeTimeoutRef.current) {
                        clearTimeout(closeTimeoutRef.current);
                        closeTimeoutRef.current = null;
                      }
                    }}
                    onMouseLeave={() => closeMenuWithDelay()}
                    className={`absolute left-1/2 top-full z-40 mt-3 w-[min(78vw,960px)] -translate-x-1/2 rounded-none border border-gray-100 bg-white/95 p-6 shadow-2xl shadow-gray-900/10 transition ${
                      openDesktopMenu === group.label
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                    }`}
                  >
                    <div className="grid gap-6 lg:grid-cols-3">
                      {group.columns.map((column) => (
                        <div key={column.title} className="space-y-2">
                          <p className="text-xs font-bold uppercase text-red-900 pt-0 underline underline-offset-4">
                            {column.title}
                          </p>
                          <ul className="space-y-1.5">
                            {column.items.map((item) => (
                              <li key={item.label}>
                                <Link
                                  href={item.href}
                                  className="block rounded-xl px-3 py-2 text-left text-sm text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
                                  onClick={() => setOpenDesktopMenu(null)}
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    {group.highlight && (
                      <div className="mt-6 rounded-none border border-gray-100 bg-gray-50/80 p-4 text-sm text-gray-700">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                          Featured
                        </p>
                        <p className="mt-2 text-base font-semibold text-gray-900">
                          {group.highlight.title}
                        </p>
                        <p className="mt-1 text-sm text-gray-600">
                          {group.highlight.description}
                        </p>
                        <Link
                          href={group.highlight.href}
                          className="mt-3 inline-flex text-sm font-semibold text-gray-900 underline underline-offset-4"
                        >
                          Explore →
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (scrollToHash(link.href)) {
                    e.preventDefault();
                  }
                }}
                className="text-sm font-semibold text-gray-900"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="rounded bg-red-600 px-5 py-2.5 text-white transition hover:bg-gray-800 hover:shadow-lg"
            >
              Business inquiry
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2.5 text-gray-700 transition hover:bg-gray-50 lg:hidden"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileNavOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle navigation menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              {mobileNavOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        <nav
          className={`lg:hidden ${mobileNavPosition} px-4 transition ${
            mobileNavOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <div className="mx-auto max-w-3xl rounded-none border border-gray-200 bg-white p-6 shadow-2xl shadow-gray-900/10">
            <div className="space-y-4">
              {megaMenuGroups.map((group) => (
                <div
                  key={group.label}
                  className="border-b border-gray-100 pb-4"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-2 text-left text-base font-semibold text-gray-900"
                    onClick={() =>
                      setOpenMobileGroup((prev) =>
                        prev === group.label ? null : group.label
                      )
                    }
                  >
                    {group.label}
                    <svg
                      className={`h-4 w-4 transition ${
                        openMobileGroup === group.label ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.5L6 6.5L11 1.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden text-sm text-gray-600 transition-all ${
                      openMobileGroup === group.label ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    {group.columns.map((column) => (
                      <div key={column.title} className="mt-3 space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                          {column.title}
                        </p>
                        {column.items.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block rounded-xl px-3 py-2 text-gray-700 hover:bg-gray-50"
                            onClick={(e) => {
                              if (scrollToHash(item.href)) e.preventDefault();
                              setMobileNavOpen(false);
                            }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="space-y-2">
                {primaryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-xl border border-gray-200 px-3 py-2 text-center font-semibold text-gray-900"
                    onClick={(e) => {
                      if (scrollToHash(link.href)) e.preventDefault();
                      setMobileNavOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="block rounded-full bg-gray-900 px-4 py-3 text-center text-white"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Business inquiry
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
