import { site } from "@/data/site";
import { ArrowRight, PinIcon, Reveal } from "@/components/ui";

const facts = [
  { label: "Location", value: site.location },
  { label: "Service area", value: "North, Central & South Jersey" },
  { label: "Focus", value: "Residential heating & cooling" },
  { label: "Telephone", value: site.phoneDisplay, href: site.phoneHref },
];

export default function ServiceArea() {
  return (
    <section
      id="service-area"
      className="bg-beige py-20 md:py-28"
      aria-labelledby="area-title"
    >
      <div className="container-xl grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16 xl:gap-20">
        {/* -------------------------------------------------------- Copy ---- */}
        <div>
          <Reveal>
            <p className="eyebrow">Service Area</p>
            <h2 id="area-title" className="mt-6 text-[clamp(2.2rem,4.6vw,3.5rem)] leading-[1.03]">
              Rooted in <em className="font-normal italic text-navy/70">New Jersey.</em>
            </h2>
          </Reveal>

          <Reveal delay={110}>
            <p className="mt-7 max-w-lg text-[1rem] leading-relaxed text-charcoal/75">
              {site.serviceAreaNote}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <dl className="mt-10 divide-y divide-navy/10 border-y border-navy/10">
              {facts.map((fact) => (
                <div key={fact.label} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
                  <dt className="pt-0.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-navy/55">
                    {fact.label}
                  </dt>
                  <dd className="m-0 text-[1rem] font-medium text-navy">
                    {fact.href ? (
                      <a href={fact.href} className="a-underline">
                        {fact.value}
                      </a>
                    ) : (
                      fact.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={240}>
            <a href="#contact" className="btn btn-primary mt-9">
              Check your address
              <ArrowRight />
            </a>
          </Reveal>
        </div>

        {/* ------------------------------------------------------ Visual ---- */}
        <Reveal delay={120} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] bg-mist p-8 shadow-[0_36px_80px_-48px_rgba(35,59,80,0.4)] md:p-12">
            {/* Stylised New Jersey silhouette — decorative only */}
            <svg
              viewBox="0 0 400 460"
              className="mx-auto h-auto w-full max-w-sm"
              role="img"
              aria-label="Stylised map of New Jersey"
            >
              <defs>
                <linearGradient id="njFill" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FAFAF7" />
                  <stop offset="100%" stopColor="#A9C6D8" />
                </linearGradient>
              </defs>
              <path
                d="M188 18c22 4 40 12 58 10 16-2 30 4 34 18 4 15-6 26-4 40 2 15 14 24 16 39 2 16-8 28-6 44 2 15 14 24 15 39 1 16-10 28-8 43 2 16 15 25 15 41 1 17-11 29-9 45 2 17 16 26 15 42 0 15-11 27-11 42 0 16 8 27 7 42-1 16-13 27-13 43 0 12 5 22 6 33-20 12-42 20-64 26-24 7-48 11-72 13-14-14-22-33-30-51-9-20-18-40-30-58-13-20-30-37-41-58-11-21-16-45-11-68 5-22 20-40 25-62 5-23 0-47-4-70-4-22-6-45-1-67 4-18 12-35 25-48Z"
                fill="url(#njFill)"
                stroke="#233B50"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
              {[
                [232, 96],
                [212, 214],
                [196, 330],
                [268, 176],
                [178, 132],
              ].map(([cx, cy]) => (
                <g key={`${cx}-${cy}`}>
                  <circle cx={cx} cy={cy} r="5" fill="#233B50" />
                  <circle
                    cx={cx}
                    cy={cy}
                    r="12"
                    fill="none"
                    stroke="#233B50"
                    strokeWidth="1"
                    opacity="0.28"
                  />
                </g>
              ))}
            </svg>

            <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-t border-navy/12 pt-7">
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-navy/55">
                  Based in
                </p>
                <p className="mt-2 font-display text-[2rem] leading-none text-navy">
                  New Jersey
                </p>
              </div>
              <p className="flex items-center gap-2.5 text-[0.85rem] text-charcoal/70">
                <PinIcon className="h-4 w-4 text-navy" />
                {site.serviceArea}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
