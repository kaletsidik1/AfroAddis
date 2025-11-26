const collaborators = [
  {
    title: "Farmers & cooperatives",
    description:
      "Long-term relationships with Ethiopian farmers and cooperatives, built on transparency and fair returns.",
    tag: "Origin",
  },
  {
    title: "Export & logistics partners",
    description: "Logistics and shipping collaborators who help us deliver on-time and in full to buyers worldwide.",
    tag: "Distribution",
  },
  {
    title: "Brand & project partners",
    description:
      "Appliance and furniture brands, project developers, and distributors who rely on Afro Addis as a local partner.",
    tag: "Market",
  },
];

export function CollaboratorsSection() {
  return (
    <section id="collaborators" className="space-y-10">
      <div className="space-y-3 text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Collaborators</p>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Network at every stage</h2>
        <p className="mx-auto max-w-3xl text-base text-gray-600">
          Afro Addis works with a network of farmers, cooperatives, logistics providers, and brand partners to deliver
          consistent quality from origin to end customer.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {collaborators.map((card, index) => (
          <div
            key={card.title}
            className=" border border-white/70 bg-white/80 p-6 shadow-lg shadow-gray-900/5 ring-1 ring-gray-100/60"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700">{card.tag}</div>
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
              <span className="h-px w-10 bg-gray-200" />
              Step {index + 1}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{card.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
