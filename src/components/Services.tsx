import { services, site } from "@/data/site";
import { ArrowRight, Reveal } from "@/components/ui";
import { cn } from "@/utils/cn";

export default function Services() {
  return (
    <section id="services" className="bg-warm-white py-20 md:py-28" aria-labelledby="services-title">
      <div className="container-xl">
        {/* ------------------------------------------------------- Heading -- */}
        <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16">
          <Reveal>
            <p className="eyebrow">What We Do</p>
            <h2
              id="services-title"
              className="mt-6 text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.03]"
            >
              Heating and cooling care for the{" "}
              <em className="font-normal italic text-sky">home you love.</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md text-[1rem] leading-relaxed text-charcoal/70 lg:pb-3">
              Repair, installation and maintenance for residential heating and cooling — each visit
              planned around your home, with clear communication at every step.
            </p>
            <a href="#contact" className="link-arrow mt-6">
              <span className="link-underline">Discuss your system</span>
              <ArrowRight />
            </a>
          </Reveal>
        </div>

        {/* --------------------------------------------------------- Cards -- */}
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 md:mt-20 lg:grid-cols-3 lg:gap-8">
          {services.map((service, i) => (
            <Reveal
              as="li"
              key={service.id}
              delay={(i % 3) * 110}
              className={cn("group h-full")}
            >
              <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-navy/8 bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-navy/15 hover:shadow-[0_36px_70px_-40px_rgba(35,59,80,0.4)]">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    decoding="async"
                    width={900}
                    height={1100}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-warm-white/92 px-3.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-navy backdrop-blur-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="text-[1.35rem] leading-tight transition-colors duration-400 group-hover:text-navy/80">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-charcoal/70">
                    {service.text}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-full bg-ivory px-3 py-1 text-[0.72rem] font-medium text-charcoal/70"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <a
                      href="#contact"
                      className="link-arrow"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <span className="link-underline">Learn More</span>
                      <ArrowRight />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        {/* ------------------------------------------------------- Footnote - */}
        <Reveal delay={80}>
          <div className="mt-12 flex flex-col gap-4 rounded-[1.5rem] bg-ivory p-6 text-[0.85rem] leading-relaxed text-charcoal/65 sm:flex-row sm:items-center sm:justify-between md:mt-16 md:p-8">
            <p className="max-w-2xl">
              Not sure which service you need? Describe what your home is doing and we&apos;ll help
              you work it out — or call {site.phoneDisplay} and speak with {site.name} directly.
            </p>
            <a href="#contact" className="btn btn-outline btn-sm shrink-0">
              Ask a question
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
