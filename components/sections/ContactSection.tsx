import Image from "next/image";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 space-y-16 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="space-y-4 text-center">
        <p className="text-xs uppercase tracking-widest text-gray-500">
          Contact
        </p>
        <h2 className="text-4xl font-semibold text-gray-900">
          Let&apos;s talk
        </h2>
        <p className="mx-auto max-w-2xl text-gray-600 text-base">
          Reach out to Afro Addis for inquiries on imports, exports, retail
          programs, furniture projects, or partnerships.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
        {/* FORM */}
        <form className="space-y-6  border border-gray-100 bg-white/80 backdrop-blur p-8 ">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="home-name"
                className="text-xs uppercase tracking-widest text-gray-500 font-medium"
              >
                Name
              </label>
              <input
                id="home-name"
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:border-gray-400 focus:bg-white transition outline-none"
                placeholder="Your full name"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="home-email"
                className="text-xs uppercase tracking-widest text-gray-500 font-medium"
              >
                Email
              </label>
              <input
                id="home-email"
                type="email"
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:border-gray-400 focus:bg-white transition outline-none"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="home-subject"
              className="text-xs uppercase tracking-widest text-gray-500 font-medium"
            >
              Subject
            </label>
            <input
              id="home-subject"
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:border-gray-400 focus:bg-white transition outline-none"
              placeholder="How can we assist?"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="home-message"
              className="text-xs uppercase tracking-widest text-gray-500 font-medium"
            >
              Message
            </label>
            <textarea
              id="home-message"
              rows={5}
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:border-gray-400 focus:bg-white transition outline-none"
              placeholder="Share a bit about your needs..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-gray-900 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Send message
          </button>
        </form>

        {/* RIGHT SIDE */}
        <div className="space-y-8">
          {/* IMAGE CARD */}
          <div className="relative h-72  overflow-hidden border border-gray-100 shadow-xl bg-white/70 backdrop-blur">
            <Image
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
              alt="Addis Ababa skyline placeholder"
              fill
              sizes="(min-width: 768px) 30vw, 100vw"
              className="object-cover "
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <p className="text-xs uppercase tracking-widest text-white/70">
                Addis Ababa
              </p>
              <p className="text-xl font-semibold">HQ · Bole, Addis Ababa</p>
            </div>
          </div>

          {/* DETAILS CARD */}
          <div className=" border border-gray-100 bg-white/80 backdrop-blur p-8  text-sm text-gray-700">
            <h3 className="text-lg font-semibold text-gray-900">
              Contact details
            </h3>
            <dl className="mt-6 space-y-4">
              <div>
                <dt className="text-xs uppercase tracking-widest text-gray-500 font-medium">
                  Email
                </dt>
                <dd className="text-base text-gray-900">info@afroaddis.com</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-gray-500 font-medium">
                  Phone
                </dt>
                <dd className="text-base text-gray-900">
                  +251 (0) 11 000 0000
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-gray-500 font-medium">
                  Location
                </dt>
                <dd className="text-base text-gray-900">
                  Addis Ababa, Ethiopia
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
