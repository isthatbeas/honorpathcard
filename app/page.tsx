import { ContactLinks } from '@/components/contact-links'
import { WatermarkBackground } from '@/components/watermark-background'

export default function Page() {
  return (
    <main className="relative isolate flex min-h-svh items-center justify-center overflow-hidden bg-navy px-5 py-12">
      <WatermarkBackground />
      <article className="relative w-full max-w-lg rounded-lg border border-gold/40 bg-navy-light p-8 shadow-2xl shadow-black/50 sm:p-12">
        <header className="flex flex-col gap-4">
          <div className="h-px w-12 bg-gold" aria-hidden="true" />
          <h1 className="font-serif text-5xl font-semibold leading-none text-white text-balance sm:text-6xl">
            Eric Beasley
          </h1>
          <p className="flex flex-col gap-1">
            <span className="text-sm uppercase tracking-[0.2em] text-gold">
              Founder &amp; Principal
            </span>
            <span className="font-serif text-2xl text-white/90">HonorPath Advisors</span>
          </p>
        </header>

        <p className="mt-8 leading-relaxed text-white/75 text-pretty">
          HonorPath provides growth strategy, market intelligence, and program design, particularly
          to Programs of All Inclusive Care for the Elderly and community based care, including
          referral and enrollment systems.
        </p>

        <section aria-labelledby="contact-heading" className="mt-10">
          <h2 id="contact-heading" className="sr-only">
            Contact
          </h2>
          <ContactLinks />
        </section>
      </article>
    </main>
  )
}
