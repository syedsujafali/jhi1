import { gallery } from "@/data/site";
import { Reveal } from "@/components/ui";

const ratios = [
  "aspect-[4/5]",
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[4/3]",
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-ivory py-20 md:py-28" aria-labelledby="gallery-title">
      <div className="container-xl">
        {/* ------------------------------------------------------- Heading -- */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
          <Reveal>
            <p className="eyebrow">Our Work</p>
            <h2
              id="gallery-title"
              className="mt-6 text-[clamp(2.2rem,4.6vw,3.5rem)] leading-[1.03]"
            >
              Precision heating, ventilation and{" "}
              <em className="font-normal italic text-sky">air conditioning.</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md text-[1rem] leading-relaxed text-charcoal/70 lg:pb-3">
              A closer look at the equipment, connections and careful detail behind comfortable
              homes — installations, service work and indoor climate-control systems.
            </p>
          </Reveal>
        </div>

        {/* --------------------------------------------- Masonry gallery ---- */}
        <div className="mt-14 columns-2 gap-4 md:mt-20 md:columns-3 md:gap-5">
          {gallery.map((item, i) => (
            <Reveal
              key={item.id}
              delay={(i % 3) * 110}
              className="group mb-4 break-inside-avoid md:mb-5"
            >
              <figure className="relative m-0 overflow-hidden rounded-[1.25rem] bg-beige">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  width={900}
                  height={1150}
                  className={`w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07] ${ratios[i]}`}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-sky">
                    {item.tag}
                  </p>
                  <p className="mt-1 font-display text-lg leading-tight text-warm-white">
                    {item.title}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
