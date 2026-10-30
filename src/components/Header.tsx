import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import { ArrowRight, CloseIcon, Logo, MenuIcon, PhoneIcon } from "@/components/ui";
import { cn } from "@/utils/cn";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track the section currently in view for nav highlighting.
  useEffect(() => {
    const ids = nav.map((n) => n.id);
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.5] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Utility bar — soft blue, keeps the page light while carrying key details */}
      <div className="hidden bg-mist text-navy lg:block">
        <div className="container-xl flex h-10 items-center justify-between text-[0.78rem] font-medium">
          <p className="flex items-center gap-2 tracking-wide text-navy/75">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-navy/40" />
            {site.tagline} · {site.location}
          </p>
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 tracking-wide transition-colors hover:text-navy"
          >
            <PhoneIcon className="h-3.5 w-3.5" />
            {site.phoneDisplay}
          </a>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-navy/10 bg-warm-white/85 shadow-[0_4px_30px_-20px_rgba(35,59,80,0.35)] backdrop-blur-xl"
            : "border-b border-transparent bg-warm-white",
        )}
      >
        <div className="container-xl flex h-[5.25rem] items-center justify-between gap-6 md:h-24">
          <a href="#home" className="flex shrink-0 items-center py-1" aria-label={`${site.name}, back to top`}>
            <Logo />
          </a>

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-8">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={cn(
                      "group relative py-2 text-[0.9rem] font-medium tracking-wide transition-colors duration-300",
                      active === item.id ? "text-navy" : "text-charcoal/70 hover:text-navy",
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute -bottom-0.5 left-0 h-px w-full origin-left bg-navy transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        active === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                      )}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 text-[0.9rem] font-semibold text-navy transition-opacity hover:opacity-70 md:flex xl:hidden"
            >
              <PhoneIcon className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
            <a href="#contact" className="btn btn-primary btn-sm hidden md:inline-flex">
              Request a Quote
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:bg-ivory xl:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-[60] xl:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-navy/25 backdrop-blur-sm transition-opacity duration-500",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "absolute inset-y-0 right-0 flex w-full max-w-[24rem] flex-col bg-warm-white shadow-2xl transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex h-[5.25rem] items-center justify-between border-b border-navy/10 px-6">
            <a href="#home" onClick={() => setOpen(false)} className="flex items-center" aria-label={`${site.name}, back to top`}>
              <Logo className="h-13 sm:h-14" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:bg-ivory"
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-6 py-8">
            <ul className="space-y-1">
              {nav.map((item, i) => (
                <li
                  key={item.id}
                  style={{ transitionDelay: `${open ? 90 + i * 55 : 0}ms` }}
                  className={cn(
                    "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                  )}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-navy/8 py-4 font-display text-2xl text-navy transition-colors hover:text-sky"
                  >
                    {item.label}
                    <ArrowRight className="h-4 w-4 opacity-40" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-3 border-t border-navy/10 bg-ivory px-6 py-7">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-navy/60">
              Speak with our team
            </p>
            <a
              href={site.phoneHref}
              className="flex items-center gap-3 font-display text-2xl text-navy"
            >
              <PhoneIcon className="h-5 w-5 text-sky" />
              {site.phoneDisplay}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary w-full"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
