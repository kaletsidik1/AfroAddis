const workingWith = [
  {
    title: "For coffee & agro-commodity buyers",
    bullets: [
      "Work directly with an Ethiopian group close to origin.",
      "Access multiple origins and processing profiles.",
      "Transparent communication throughout the shipment.",
    ],
  },
  {
    title: "For appliance & furniture partners",
    bullets: [
      "Develop distribution for selected appliance brands.",
      "Collaborate on furniture concepts for projects and retail.",
      "Leverage our local market knowledge in Ethiopia.",
    ],
  },
];

export function WorkingWithSection() {
  return (
    <section id="work-with-us" className="space-y-10">
      <div className="space-y-3 text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Working with us</p>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Partnership-ready</h2>
        <p className="mx-auto max-w-3xl text-base text-gray-600">
          We build long-term partnerships with exporters, importers, roasters, and distributors who share our commitment
          to quality and transparency.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {workingWith.map((card) => (
          <div
            key={card.title}
            className="border border-emerald-100/70 bg-white/80 p-6 shadow-lg shadow-emerald-900/5"
          >
            <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {card.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
