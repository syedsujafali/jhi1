import { useState, type FormEvent } from "react";
import { contact, serviceSelectOptions, site } from "@/data/site";
import { ArrowRight, iconMap, PhoneIcon, Reveal } from "@/components/ui";
import { cn } from "@/utils/cn";

type Values = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type Errors = Partial<Record<keyof Values, string>>;

const initial: Values = { name: "", phone: "", email: "", service: "", message: "" };

export default function Contact() {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof Values) => (value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please tell us your name.";
    if (!values.phone.trim()) next.phone = "Please enter a phone number.";
    else if (!/^[\d\s()+.-]{7,}$/.test(values.phone.trim()))
      next.phone = "Please enter a valid phone number, including the area code.";
    if (!values.email.trim()) next.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = "Please enter a valid email address, such as name@example.com.";
    if (!values.service) next.service = "Please choose the service you need.";
    if (values.message.trim().length < 10)
      next.message = "Please add a little more detail (at least 10 characters).";
    return next;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  return (
    <section id="contact" className="bg-warm-white py-20 md:py-28" aria-labelledby="contact-title">
      <div className="container-xl grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 xl:gap-20">
        {/* -------------------------------------------------- Info column --- */}
        <div>
          <Reveal>
            <p className="eyebrow">{contact.eyebrow}</p>
            <h2
              id="contact-title"
              className="mt-6 text-[clamp(2.2rem,4.6vw,3.5rem)] leading-[1.03]"
            >
              Let&apos;s talk about <em className="font-normal italic text-sky">your home.</em>
            </h2>
            <p className="mt-7 max-w-md text-[1rem] leading-relaxed text-charcoal/75">
              {contact.text}
            </p>
          </Reveal>

          <Reveal delay={130}>
            <ul className="mt-10 space-y-4">
              {contact.cards.map((card) => {
                const Icon = iconMap[card.icon];
                return (
                  <li key={card.label}>
                    <a
                      href={card.href}
                      className="group flex items-start gap-5 rounded-[1.25rem] border border-navy/8 bg-ivory p-5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-navy/15 hover:bg-white hover:shadow-[0_28px_60px_-40px_rgba(35,59,80,0.4)]"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mist p-2.5 text-navy transition-colors duration-500 group-hover:bg-navy group-hover:text-warm-white">
                        <Icon />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-navy/50">
                          {card.label}
                        </span>
                        <span className="mt-1 block font-display text-xl leading-tight text-navy">
                          {card.value}
                        </span>
                        <span className="mt-1 block text-[0.82rem] text-charcoal/60">
                          {card.note}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 rounded-[1.25rem] bg-navy p-6 text-warm-white md:p-7">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-sky">
                Speak with us
              </p>
              <a
                href={site.phoneHref}
                className="mt-3 flex items-center gap-3 font-display text-[clamp(1.75rem,3.5vw,2.4rem)] leading-none transition-opacity hover:opacity-80"
              >
                <PhoneIcon className="h-6 w-6 text-sky" />
                {site.phoneDisplay}
              </a>
              <p className="mt-4 text-[0.85rem] leading-relaxed text-warm-white/70">
                {site.serviceArea} Exact boundaries are still being confirmed, so please call to
                ask whether we can help at your address.
              </p>
            </div>
          </Reveal>
        </div>

        {/* ------------------------------------------------------- Form ----- */}
        <Reveal delay={110}>
          <div className="rounded-[1.75rem] border border-navy/8 bg-white p-6 shadow-[0_40px_90px_-55px_rgba(35,59,80,0.55)] md:p-10">
            {sent ? (
              <div className="anim-fade flex min-h-[26rem] flex-col items-start justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-mist p-3 text-navy">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12.5l4.4 4.4L19 7.4"
                    />
                  </svg>
                </span>
                <h3 className="mt-6 text-[1.9rem]">Thank you, {values.name.split(" ")[0]}.</h3>
                <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-charcoal/70">
                  We&apos;ve noted your request about{" "}
                  <strong className="font-semibold text-navy">
                    {values.service === "Not sure yet" ? "your home" : values.service.toLowerCase()}
                  </strong>
                  . For the fastest response, please call {site.name} directly and we&apos;ll pick
                  it up from there.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={site.phoneHref} className="btn btn-primary">
                    <PhoneIcon className="h-4 w-4" />
                    {site.phoneDisplay}
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setValues(initial);
                      setSent(false);
                    }}
                    className="btn btn-outline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <h3 className="text-[1.6rem]">Request a quote</h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-charcoal/65">
                  Share your details and we will follow up about your heating or cooling needs.
                  Fields marked with <span className="text-sky">*</span> are required.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <Field
                    id="name"
                    label="Your name"
                    required
                    error={errors.name}
                    value={values.name}
                    onChange={set("name")}
                    placeholder="Jane Doe"
                    autoComplete="name"
                  />
                  <Field
                    id="phone"
                    label="Phone"
                    type="tel"
                    required
                    error={errors.phone}
                    value={values.phone}
                    onChange={set("phone")}
                    placeholder="(555) 555-5555"
                    autoComplete="tel"
                  />

                  <div className="sm:col-span-2">
                    <Field
                      id="email"
                      label="Email"
                      type="email"
                      required
                      error={errors.email}
                      value={values.email}
                      onChange={set("email")}
                      placeholder="name@example.com"
                      autoComplete="email"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="field-label" htmlFor="service">
                      Service needed <span className="text-sky">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={values.service}
                      onChange={(e) => set("service")(e.target.value)}
                      className={cn(
                        "field field-select cursor-pointer",
                        errors.service && "border-[#b4553f]",
                      )}
                      aria-invalid={Boolean(errors.service)}
                      aria-describedby={errors.service ? "service-error" : undefined}
                    >
                      <option value="">Select a service…</option>
                      {serviceSelectOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.service && <ErrorText id="service-error">{errors.service}</ErrorText>}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="field-label" htmlFor="message">
                      How can we help? <span className="text-sky">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={(e) => set("message")(e.target.value)}
                      placeholder="Briefly describe your home and what you need help with."
                      className={cn("field resize-y", errors.message && "border-[#b4553f]")}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && <ErrorText id="message-error">{errors.message}</ErrorText>}
                  </div>
                </div>

                <button type="submit" className="btn btn-primary mt-8 w-full sm:w-auto">
                  Send request
                  <ArrowRight />
                </button>

                <p className="mt-5 text-[0.78rem] leading-relaxed text-charcoal/55">
                  This site has no backend — your details stay in your browser. To reach {site.name}
                  straight away, call {site.phoneDisplay}.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Sub-fields --- */

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  required,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="field-label" htmlFor={id}>
        {label} {required && <span className="text-sky">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className={cn("field", error && "border-[#b4553f]")}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && <ErrorText id={`${id}-error`}>{error}</ErrorText>}
    </div>
  );
}

function ErrorText({ id, children }: { id: string; children: string }) {
  return (
    <p id={id} className="anim-fade mt-2 text-[0.8rem] font-medium text-[#a9491f]">
      {children}
    </p>
  );
}
