import { ContactSection } from "@/components/sections/ContactSection";

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[3px] border border-white/60 bg-white/80 p-8 shadow-xl shadow-gray-900/5 sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900">
          Corporate inquiries
        </h1>
        <p className="mt-4 max-w-2xl text-base text-gray-600">
          Reach Afro Addis for partnerships, trade opportunities, supplier
          onboarding, or government engagement. The team typically replies
          within two business days.
        </p>
      </section>
      <ContactSection />
    </div>
  );
}
