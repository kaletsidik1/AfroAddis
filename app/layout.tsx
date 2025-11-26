import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Mail, Phone, MapPin, FileText, Linkedin, Twitter, Facebook } from "lucide-react";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Afro Addis",
  description: "Afro Addis official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f7f4ed] text-gray-900`}
      >
        <Navbar />

        <main className="mx-auto max-w-7xl space-y-20 px-4 pb-16 pt-28 sm:px-6 lg:px-10">
          {children}
        </main>

        <footer className="mt-16 bg-red-700 text-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
            <div className="grid gap-10 md:grid-cols-3">
              <div className="space-y-4">
                <p className="text-lg font-bold">Afro Addis</p>
                <p className="max-w-sm text-sm text-red-100">
                  A diversified Ethiopian group working across agro-commodities, imports, and furniture manufacturing.
                </p>
                <div className="flex items-center gap-3 text-red-100">
                  <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={18} /></a>
                  <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter size={18} /></a>
                  <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook size={18} /></a>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-red-200">Quick links</p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li><Link href="/about" className="hover:text-white">About</Link></li>
                  <li><Link href="/services" className="hover:text-white">Services</Link></li>
                  <li><Link href="/products" className="hover:text-white">Products</Link></li>
                  <li><Link href="/work-with-us" className="hover:text-white">Work with us</Link></li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-red-200">Contact</p>
                <ul className="mt-3 space-y-3 text-sm text-red-100">
                  <li className="flex items-center gap-2"><Mail size={16} /> <span>info@afroaddis.com</span></li>
                  <li className="flex items-center gap-2"><Phone size={16} /> <span>+251 (0) 11 000 0000</span></li>
                  <li className="flex items-center gap-2"><MapPin size={16} /> <span>Addis Ababa, Ethiopia</span></li>
                </ul>

                <div className="mt-4">
                  <Link
                    href="/corporate-profile.pdf"
                    className="inline-flex items-center gap-2 rounded bg-white/10 px-3 py-2 text-sm font-semibold hover:bg-white/20"
                  >
                    <FileText size={16} />
                    Download corporate profile
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-red-600 bg-red-800">
            <div className="mx-auto max-w-7xl px-4 py-3 text-xs text-red-200 sm:px-6 lg:px-10">
              © {new Date().getFullYear()} Afro Addis. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
