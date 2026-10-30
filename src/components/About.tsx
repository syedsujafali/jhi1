import { about, site } from "@/data/site";
import { ArrowRight, CheckIcon, Reveal } from "@/components/ui";

export default function About() {
  return (
    <section id="about" className="bg-ivory py-20 md:py-28" aria-labelledby="about-title">
      <div className="container-xl grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        {/* ------------------------------------------------------- Media ----- */}
        <Reveal className="relative order-2 lg:order-1">
          <div
            aria-hidden="true"
            className="absolute -left-5 -top-5 hidden h-32 w-32 rounded-br-[4rem] border border-navy/12 lg:block"
          />
          <figure className="relative m-0 overflow-hidden rounded-[2rem] bg-beige shadow-[0_36px_80px_-44px_rgba(35,59,80,0.35)]">
            <img
              src={about.image}
              alt={about.imageAlt}
              loading="lazy"
              decoding="async"
              width={1100}
              height={1400}
              className="aspect-[4/5] w-full object-cover"
            />
          </figure>

          <figcaption className="absolute bottom-6 left-6 right-6 rounded-2xl bg-navy/92 px-6 py-5 text-warm-white backdrop-blur-sm md:right-auto md:max-w-[19rem]">
            <p className="font-display text-[1.15rem] leading-snug">{about.caption}</p>
          </figcaption>
        </Reveal>

        {/* -------------------------------------------------------- Copy ----- */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow">{about.eyebrow}</p>
            <h2 id="about-title" className="mt-6 text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.03]">
              {about.title}
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-7 space-y-5 text-[1rem] leading-relaxed text-charcoal/75">
              {about.body.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={180}>
            <ul className="mt-9 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
              {about.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-[0.9rem] text-charcoal/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mist text-navy">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn btn-primary">
                Request Service
                <ArrowRight />
              </a>
              <a href={site.phoneHref} className="link-arrow">
                <span className="link-underline">Call {site.phoneDisplay}</span>
                <ArrowRight />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
