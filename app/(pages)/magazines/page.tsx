import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { MagazineCoverThumb } from "@/components/magazine/MagazineCoverThumb";

export const dynamic = "force-static";

export default function MagazinesListPage() {
  const dir = path.join(process.cwd(), "public", "magazines");
  let items: { name: string; slug: string; href: string }[] = [];
  try {
    const files = fs.readdirSync(dir);
    items = files
      .filter((f) => f.toLowerCase().endsWith(".pdf"))
      .map((f) => {
        const name = f.replace(/\.pdf$/i, "");
        return {
          name,
          slug: name,
          href: `/magazines/${name}`,
        };
      });
  } catch {
    items = [];
  }

  return (
    <div className="pt-20 lg:pt-24 mx-auto max-w-5xl px-4">
      <h1 className="text-2xl font-bold">Magazines</h1>
      <p className="mt-2 text-gray-600 text-sm">
        Explore issues stored in{" "}
        <span className="font-mono">public/magazines</span>.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.length === 0 && <p className="text-gray-500">No PDFs found.</p>}
        {items.map((m) => (
          <Link
            key={m.slug}
            href={m.href}
            className="group block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <MagazineCoverThumb
              pdfUrl={`/magazines/${m.slug}.pdf`}
              title={m.name}
            />
            <div className="flex items-center justify-between px-4 py-3">
              <div>
                <p className="font-semibold text-gray-900">{m.name}</p>
                <p className="text-xs text-gray-600">PDF</p>
              </div>
              <span className="text-sm font-medium text-red-700 group-hover:underline">
                Open →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
