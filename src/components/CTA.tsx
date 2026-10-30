import { site } from "@/data/site";
import { ArrowRight, Reveal } from "@/components/ui";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-sky py-20 md:py-28" aria-labelledby="cta-title">
      {/* Light, airy decoration — no dark overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_80%_at_50%_0%,rgba(255,255,255,0.55),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[140%] -translate-x-1/2 rounded-[100%] border-t border-white/50"
      />

      <div className="container-xl relative text-center">
        <Reveal>
          <p className="eyebrow justify-center">Next Step</p>
          <h2
            id="cta-title"
            className="mx-auto mt-6 max-w-[24ch] text-[clamp(2.2rem,5.2vw,4rem)] leading-[1.02] text-navy"
          >
            Ready to Make Your Home More{" "}
            <em className="font-normal italic text-warm-white">Comfortable?</em>
          </h2>
        </Reveal>

        <Reveal delay={110}>
          <p className="mx-auto mt-7 max-w-[52ch] text-[1.05rem] leading-relaxed text-navy/80">
            Get in touch with {site.name} to discuss your heating and cooling needs.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#contact" className="btn btn-light">
              Request a Quote
              <ArrowRight />
            </a>
            <a
              href={site.phoneHref}
              className="btn border-navy/25 bg-transparent text-navy hover:bg-warm-white/60"
            >
              Call {site.phoneDisplay}
            </a>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-8 text-[0.82rem] text-navy/65">
            {site.tagline} · {site.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
