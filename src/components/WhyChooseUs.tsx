import { strengths } from "@/data/site";
import { iconMap, Reveal } from "@/components/ui";

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-mist py-20 md:py-28"
      aria-labelledby="why-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_100%_0%,rgba(255,255,255,0.75),transparent_60%)]"
      />

      <div className="container-xl relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.12fr] lg:gap-16 xl:gap-20">
          {/* ------------------------------------------------------- Left --- */}
          <div>
            <Reveal>
              <p className="eyebrow">Why Choose JHI</p>
              <h2 id="why-title" className="mt-6 text-[clamp(2.2rem,4.6vw,3.5rem)] leading-[1.03]">
                A better kind of{" "}
                <em className="font-normal italic text-navy/70">home comfort.</em>
              </h2>
              <p className="mt-6 max-w-md text-[1rem] leading-relaxed text-charcoal/75">
                We look after the systems your home depends on — quietly, carefully, and with the
                time taken to do the job properly.
              </p>
            </Reveal>

            {/* Small supporting collage */}
            <Reveal delay={140} className="mt-10">
              <div className="grid grid-cols-5 gap-4">
                <figure className="m-0 col-span-3 overflow-hidden rounded-[1.25rem] bg-beige shadow-[0_28px_60px_-38px_rgba(35,59,80,0.4)]">
                  <img
                    src="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop"
                    alt="Close-up of skilled hands installing steel pipework with hand tools"
                    loading="lazy"
                    decoding="async"
                    width={900}
                    height={700}
                    className="aspect-[9/7] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
                  />
                </figure>
                <figure className="m-0 col-span-2 overflow-hidden rounded-[1.25rem] bg-beige shadow-[0_28px_60px_-38px_rgba(35,59,80,0.4)]">
                  <img
                    src="https://images.pexels.com/photos/7937300/pexels-photo-7937300.jpeg?auto=compress&cs=tinysrgb&w=700&h=860&fit=crop"
                    alt="Close-up of a pressure gauge on residential system pipework"
                    loading="lazy"
                    decoding="async"
                    width={700}
                    height={860}
                    className="aspect-[7/8.6] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
                  />
                </figure>
              </div>
            </Reveal>
          </div>

          {/* ------------------------------------------------------ Cards --- */}
          <ul className="grid gap-5 sm:grid-cols-2">
            {strengths.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={i * 100}
                  className="group h-full"
                >
                  <div className="flex h-full flex-col rounded-[1.5rem] border border-white/70 bg-white/72 p-7 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-white hover:shadow-[0_34px_70px_-42px_rgba(35,59,80,0.45)]">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mist p-3.5 text-navy transition-colors duration-500 group-hover:bg-navy group-hover:text-warm-white">
                      <Icon />
                    </span>
                    <h3 className="mt-6 text-[1.25rem] leading-tight">{item.title}</h3>
                    <p className="mt-3 text-[0.9rem] leading-relaxed text-charcoal/70">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
