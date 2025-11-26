import Image from "next/image";

export function ContactSection() {
  return (
    <section id="contact" className="space-y-10">
      <div className="space-y-3 text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Contact</p>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Let&apos;s talk</h2>
        <p className="mx-auto max-w-3xl text-base text-gray-600">
          Get in touch with Afro Addis to discuss exports, imports, furniture projects, or partnership opportunities.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <form className="space-y-4  border border-white/70 bg-white/90 p-6 shadow-xl shadow-gray-900/5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500" htmlFor="home-name">
                Name
              </label>
              <input
                id="home-name"
                className="w-full rounded-2xl border border-gray-200 bg-gray-50/70 px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:bg-white"
                placeholder="Your full name"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500" htmlFor="home-email">
                Email
              </label>
              <input
                id="home-email"
                type="email"
                className="w-full rounded-2xl border border-gray-200 bg-gray-50/70 px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:bg-white"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500" htmlFor="home-subject">
              Subject
            </label>
            <input
              id="home-subject"
              className="w-full rounded-2xl border border-gray-200 bg-gray-50/70 px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:bg-white"
              placeholder="How can we help?"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500" htmlFor="home-message">
              Message
            </label>
            <textarea
              id="home-message"
              rows={4}
              className="w-full rounded-2xl border border-gray-200 bg-gray-50/70 px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:bg-white"
              placeholder="Share a bit about your needs or project."
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Send message
          </button>
        </form>

        <div className="space-y-5">
          <div className="relative h-64 overflow-hidden  border border-white/60 bg-white/70 shadow-lg shadow-gray-900/5">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <Image
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
              alt="Addis Ababa skyline placeholder"
              fill
              sizes="(min-width: 768px) 30vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">Addis Ababa</p>
              <p className="text-lg font-semibold">HQ · Bole, Addis Ababa</p>
            </div>
          </div>
          <div className=" border border-white/70 bg-white/90 p-6 text-sm text-gray-700 shadow-lg shadow-gray-900/5">
            <h3 className="text-base font-semibold text-gray-900">Contact details</h3>
            <dl className="mt-4 space-y-3">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Email</dt>
                <dd className="text-base text-gray-900">info@afroaddis.com</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Phone</dt>
                <dd className="text-base text-gray-900">+251 (0) 11 000 0000</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Location</dt>
                <dd className="text-base text-gray-900">Addis Ababa, Ethiopia</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
