import { comfort } from "@/data/site";
import { Reveal, SnowflakeIcon, SunIcon, WindIcon } from "@/components/ui";

const notes = [
  { icon: SnowflakeIcon, label: "Warm winter mornings" },
  { icon: SunIcon, label: "Cool summer evenings" },
  { icon: WindIcon, label: "Steady air in between" },
];

export default function Comfort() {
  return (
    <section className="bg-warm-white py-20 md:py-28" aria-labelledby="comfort-title">
      <div className="container-xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_1fr] lg:gap-16 xl:gap-20">
          {/* ------------------------------------------------------- Media --- */}
          <Reveal className="relative">
            <figure className="m-0 overflow-hidden rounded-[2rem] bg-beige shadow-[0_36px_80px_-44px_rgba(35,59,80,0.35)]">
              <img
                src={comfort.imageA}
                alt={comfort.imageAAlt}
                loading="lazy"
                decoding="async"
                width={1500}
                height={1000}
                className="aspect-[3/2] w-full object-cover"
              />
            </figure>

            <figure className="m-0 absolute -bottom-10 right-4 hidden w-[42%] overflow-hidden rounded-[1.5rem] border-[6px] border-warm-white bg-beige shadow-[0_34px_70px_-34px_rgba(35,59,80,0.45)] md:block lg:-right-8">
              <img
                src={comfort.imageB}
                alt={comfort.imageBAlt}
                loading="lazy"
                decoding="async"
                width={900}
                height={1200}
                className="aspect-[3/4] w-full object-cover"
              />
            </figure>
          </Reveal>

          {/* -------------------------------------------------------- Copy --- */}
          <div>
            <Reveal>
              <p className="eyebrow">{comfort.eyebrow}</p>
              <h2 id="comfort-title" className="mt-6 text-[clamp(2.2rem,4.6vw,3.5rem)] leading-[1.03]">
                Every season,{" "}
                <em className="font-normal italic text-sky">a more comfortable home.</em>
              </h2>
            </Reveal>

            <Reveal delay={110}>
              <p className="mt-7 max-w-lg text-[1rem] leading-relaxed text-charcoal/75">
                {comfort.text}
              </p>
            </Reveal>

            <Reveal delay={180}>
              <ul className="mt-9 space-y-3">
                {notes.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-4 rounded-2xl bg-ivory px-5 py-4 text-[0.95rem] font-medium text-navy transition-colors duration-400 hover:bg-beige"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-warm-white p-2.5 text-sky">
                      <Icon />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-8 text-[0.85rem] italic text-charcoal/55">{comfort.caption}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
