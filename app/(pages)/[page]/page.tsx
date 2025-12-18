import { notFound } from "next/navigation";
import { pageBlueprints } from "@/content/pageBlueprints";

type PageProps = {
  params: Promise<{ page: string }>;
};

export function generateStaticParams() {
  return Object.keys(pageBlueprints).map((page) => ({ page }));
}

const toId = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default async function SectionPage({ params }: PageProps) {
  const { page: pageKey } = await params;
  const page = pageBlueprints[pageKey];

  if (!page) {
    notFound();
  }

  return (
    <div className="space-y-12">
      <section className="rounded-[32px] border border-white/60 bg-white/80 p-8 shadow-xl shadow-gray-900/5 sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
          {page.kicker}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900">
          {page.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-gray-600">
          {page.description}
        </p>
        {page.stats && (
          <dl className="mt-8 grid gap-6 text-sm text-gray-700 sm:grid-cols-3">
            {page.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-gray-100 bg-white/70 p-4 text-center shadow-sm"
              >
                <dt className="text-xs uppercase tracking-[0.3em] text-gray-500">
                  {stat.label}
                </dt>
                <dd className="mt-2 text-2xl font-semibold text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </section>

      {page.sections.map((section) => (
        <section
          key={section.title}
          id={toId(section.title)}
          className="rounded-[28px] border border-white/60 bg-white/90 p-8 shadow-lg shadow-gray-900/5"
        >
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
              {section.title}
            </p>
            <p className="text-base text-gray-600">{section.description}</p>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {section.items.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-sm shadow-gray-900/5"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
