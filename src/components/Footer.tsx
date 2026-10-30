import { footer, nav, services, site } from "@/data/site";
import { ArrowRight, Logo, PhoneIcon, PinIcon } from "@/components/ui";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-warm-white">
      <div className="container-xl py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1.2fr] lg:gap-10">
          {/* ------------------------------------------------------ Brand --- */}
          <div>
            <Logo inverted />
            <p className="mt-7 max-w-[34ch] text-[0.95rem] leading-relaxed text-warm-white/65">
              {footer.blurb}
            </p>
            <a
              href={site.phoneHref}
              className="mt-8 inline-flex items-center gap-3 font-display text-2xl text-warm-white transition-opacity hover:opacity-80"
            >
              <PhoneIcon className="h-5 w-5 text-sky" />
              {site.phoneDisplay}
            </a>
          </div>

          {/* ------------------------------------------------- Navigation --- */}
          <nav aria-label="Footer navigation">
            <h2 className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.22em] text-sky">
              Navigate
            </h2>
            <ul className="mt-6 space-y-3">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="a-underline text-[0.95rem] text-warm-white/75 transition-colors hover:text-warm-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* --------------------------------------------------- Services --- */}
          <nav aria-label="Footer services">
            <h2 className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.22em] text-sky">
              Services
            </h2>
            <ul className="mt-6 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="a-underline text-[0.95rem] text-warm-white/75 transition-colors hover:text-warm-white"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* --------------------------------------------------- Contact ---- */}
          <div>
            <h2 className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.22em] text-sky">
              Contact
            </h2>
            <ul className="mt-6 space-y-4 text-[0.95rem] text-warm-white/75">
              <li className="flex items-start gap-3">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
                <span>
                  {site.location}
                  <br />
                  <span className="text-[0.85rem] text-warm-white/55">
                    North, Central &amp; South Jersey
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
                <a href={site.phoneHref} className="a-underline hover:text-warm-white">
                  {site.phoneDisplay}
                </a>
              </li>
            </ul>

            <a href="#contact" className="btn btn-light btn-sm mt-7">
              Request a Quote
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* ------------------------------------------------------ Bottom --- */}
        <div className="mt-14 flex flex-col gap-4 border-t border-warm-white/12 pt-7 text-[0.82rem] text-warm-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="flex flex-wrap items-center gap-x-2">
            <span>{site.tagline}</span>
            <span aria-hidden="true" className="text-sky">
              ·
            </span>
            <span>{site.location}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
