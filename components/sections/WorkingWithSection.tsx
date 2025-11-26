import Image from "next/image";

const partners = [
  { id: 1, name: "Samsung", logo: "/partners/samsung.png" },
  { id: 2, name: "Hisense", logo: "/partners/hisense.png" },
  { id: 3, name: "LG", logo: "/partners/lg.png" },
  {
    id: 4,
    name: "Kumtel",
    logo: "/partners/kumtel.png",
    note:
      "KYT is the exclusive Ethiopian agent for ARKEMIX, a leading French manufacturer of premium electronics for its KRYSTER and BERKLAYS branded full-range electronics appliances, demonstrating trust from international partners and recognition of our operational excellence.",
  },
  { id: 5, name: "Sony", logo: "/partners/sony.png" },
];

export function WorkingWithSection() {
  return (
    <section id="working-with" className="space-y-6">
      <div className="space-y-3 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Working with</p>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Our Strategic Partners</h2>
        <p className="mx-auto max-w-3xl text-base text-gray-600">
          We maintain strategic partnerships with global electronics and appliance manufacturers and distributors. Below are some of the
          partners we work closely with — logos shown when available.
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 items-center">
          {partners.map((p) => (
            <div key={p.id} className="flex items-center justify-center">
              {p.logo ? (
                <div className="rounded-md bg-white/80 p-3 shadow-sm">
                  <Image src={p.logo} alt={p.name} width={120} height={60} className="object-contain" />
                </div>
              ) : (
                <div className="text-center text-sm font-semibold text-gray-900">{p.name}</div>
              )}
            </div>
          ))}
        </div>

        {/* Special note for Kumtel / KYT */}
        <div className="mt-6 mx-auto max-w-3xl rounded-lg border border-gray-100 bg-white/70 p-4 shadow-sm">
          <p className="text-sm text-gray-700">
            KYT is the exclusive Ethiopian agent for ARKEMIX, a leading French manufacturer of premium electronics for its KRYSTER and
            BERKLAYS branded full-range electronics appliances, demonstrating trust from international partners and recognition of our
            operational excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
