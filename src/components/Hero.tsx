import { hero, site } from "@/data/site";
import { ArrowRight, CheckIcon, Reveal, SnowflakeIcon, SunIcon } from "@/components/ui";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-deep text-warm-white" aria-labelledby="hero-title">
      {/* Deep ambient lighting washes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_80%_at_85%_10%,rgba(169,198,216,0.18)_0%,transparent_60%),radial-gradient(90%_70%_at_10%_90%,rgba(35,59,80,0.85)_0%,transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:24px_24px] opacity-70 [mask-image:radial-gradient(70%_60%_at_50%_40%,#000,transparent)]"
      />

      <div className="container-xl relative grid items-center gap-12 pb-16 pt-14 md:pb-24 md:pt-20 lg:grid-cols-[1.02fr_1fr] lg:gap-16 lg:pb-28 lg:pt-24 xl:gap-24">
        {/* ------------------------------------------------------- Copy ----- */}
        <div className="anim-fade-up relative max-w-2xl">
          <p className="eyebrow !text-sky !opacity-90">{hero.eyebrow}</p>

          <h1
            id="hero-title"
            className="mt-7 text-[clamp(2.6rem,6.6vw,4.75rem)] font-normal leading-[0.98] !text-warm-white"
          >
            {hero.title.map((line, i) => (
              <span key={line} className="block">
                {i === hero.title.length - 1 ? (
                  <em className="font-normal italic text-sky">Every Season.</em>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>

          <p className="mt-7 max-w-[42ch] text-[1.05rem] leading-relaxed text-warm-white/80">
            {hero.lede}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn btn-light">
              Request a Quote
              <ArrowRight />
            </a>
            <a
              href="#services"
              className="btn border border-warm-white/30 text-warm-white hover:border-warm-white hover:bg-warm-white/10"
            >
              Explore Services
            </a>
          </div>

          {/* Trust indicators */}
          <ul className="mt-11 grid max-w-lg grid-cols-1 gap-x-6 gap-y-3 border-t border-warm-white/15 pt-7 sm:grid-cols-2">
            {hero.trust.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[0.85rem] text-warm-white/85">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky/20 text-sky">
                  <CheckIcon className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ------------------------------------------------------ Media ----- */}
        <Reveal delay={120} className="relative">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 hidden h-40 w-40 rounded-tl-[5rem] border border-sky/35 md:block lg:-right-6 lg:-top-6"
            />
            <figure className="relative m-0 overflow-hidden rounded-[2rem] bg-navy-deep shadow-[0_40px_90px_-30px_rgba(0,0,0,0.6)]">
              <img
                src={hero.image}
                alt={hero.imageAlt}
                width={1300}
                height={1600}
                fetchPriority="high"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
            </figure>

            {/* Floating comfort chips */}
            <div className="absolute -left-3 bottom-8 flex items-center gap-3 rounded-2xl border border-navy/10 bg-warm-white/95 px-5 py-4 shadow-[0_20px_45px_-20px_rgba(0,0,0,0.45)] backdrop-blur-md sm:-left-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mist text-navy">
                <SnowflakeIcon className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-navy/60">
                  Winter
                </p>
                <p className="text-[0.9rem] font-semibold text-navy">Warm &amp; steady</p>
              </div>
            </div>

            <div className="absolute -right-2 top-10 hidden items-center gap-3 rounded-2xl border border-navy/10 bg-warm-white/95 px-5 py-4 shadow-[0_20px_45px_-20px_rgba(0,0,0,0.45)] backdrop-blur-md sm:flex lg:-right-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky/40 text-navy">
                <SunIcon className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-navy/60">
                  Summer
                </p>
                <p className="text-[0.9rem] font-semibold text-navy">Cool &amp; quiet</p>
              </div>
            </div>
          </div>

          {/* Phone callout */}
          <a
            href={site.phoneHref}
            className="mt-6 flex items-center justify-center gap-3 rounded-2xl border border-warm-white/15 bg-warm-white/10 px-6 py-4 text-warm-white transition-colors duration-400 hover:border-warm-white/30 hover:bg-warm-white/15"
          >
            <span className="text-[0.85rem] text-warm-white/75">Prefer to talk it through?</span>
            <span className="font-display text-xl text-warm-white">{site.phoneDisplay}</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
