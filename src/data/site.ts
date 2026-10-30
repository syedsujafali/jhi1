/**
 * JHI Services LLC — site content
 * Business name, services, service area and contact details are taken from
 * the company's own website (https://jhi-self.vercel.app/).
 * No certifications, awards, guarantees or experience claims are invented.
 */

/** Build an optimised, cropped Pexels image URL. */
const px = (id: number, w: number, h?: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}${
    h ? `&h=${h}&fit=crop` : ""
  }`;

export const site = {
  name: "JHI Services LLC",
  shortName: "JHI",
  tagline: "Residential Heating & Cooling",
  phoneDisplay: "914-258-6101",
  phoneHref: "tel:+19142586101",
  location: "New Jersey",
  serviceArea: "Serving North, Central & South Jersey communities.",
  serviceAreaNote:
    "JHI Services LLC is based in New Jersey. Exact service boundaries are still being confirmed, so please call to ask whether we can help at your address.",
  intro:
    "JHI Services LLC focuses on residential heating and cooling, looking after the systems that keep homes comfortable through every season — from a first call to the final check.",
};

export const nav = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "gallery", label: "Our Work" },
  { id: "service-area", label: "Service Area" },
  { id: "contact", label: "Contact" },
] as const;

export const hero = {
  eyebrow: "Residential Heating & Cooling · New Jersey",
  title: ["Comfort You Can", "Count On,", "Every Season."],
  lede:
    "Repair, installation and maintenance for residential heating and cooling — every visit planned around your home, with clear communication from the first call to the final check.",
  image: px(7347538, 1300, 1600),
  imageAlt: "HVAC technician servicing an outdoor residential air conditioning unit",
  trust: [
    "Residential specialists",
    "Based in New Jersey",
    "Heating & cooling",
    "Clear communication",
  ],
};

export type Service = {
  id: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  points: string[];
};

/** The six services listed on the company's website. */
export const services: Service[] = [
  {
    id: "ac-installation",
    title: "Air Conditioning Installation",
    text: "Careful system selection and a clean, considered installation.",
    image: px(38353473, 900, 1100),
    alt: "Modern air conditioning condenser units installed against a bright residential facade",
    points: ["System selection", "Clean installation", "Sized for your home"],
  },
  {
    id: "heating-installation",
    title: "Heating Installation",
    text: "Efficient, comfortable heating systems sized for your home.",
    image: px(6932439, 900, 1100),
    alt: "Contemporary residential home surrounded by snow on a bright winter day",
    points: ["Efficient systems", "Right-sized output", "Season-ready setup"],
  },
  {
    id: "ac-repair",
    title: "Air Conditioning Repair",
    text: "Prompt diagnosis to bring cooling back when your home needs it most.",
    image: px(27134985, 900, 1100),
    alt: "Technician working on an outdoor residential air conditioning unit",
    points: ["Prompt diagnosis", "Cooling restored", "Clear next steps"],
  },
  {
    id: "heating-repair",
    title: "Heating Repair",
    text: "Reliable repairs that keep your home warm through the coldest nights.",
    image: px(34938439, 900, 1100),
    alt: "Technician inspecting and repairing a residential heating system",
    points: ["Reliable repairs", "Thorough inspection", "Winter-ready warmth"],
  },
  {
    id: "hvac-maintenance",
    title: "HVAC Maintenance",
    text: "Seasonal check-ups that help systems run quietly and efficiently.",
    image: px(27681472, 900, 1100),
    alt: "Two HVAC technicians maintaining air conditioning units on a building",
    points: ["Seasonal check-ups", "Quieter running", "Efficiency checks"],
  },
  {
    id: "heat-pumps",
    title: "Heat Pumps",
    text: "One efficient system that heats and cools your home year-round.",
    image: px(20046689, 900, 1100),
    alt: "Modern heat pump system installed in a clean utility space",
    points: ["Heats and cools", "Year-round comfort", "One simple system"],
  },
];

export const serviceSelectOptions = [...services.map((s) => s.title), "Not sure yet"];

export const about = {
  eyebrow: "About JHI Services",
  title: "Comfort Begins with the Details.",
  body: [
    "JHI Services LLC focuses on residential heating and cooling, looking after the systems that keep homes comfortable through every season, from a first call to the final check.",
    "Warm winter mornings, cool summer evenings and steady air in between. Good heating and cooling should feel effortless — working quietly in the background of everyday life.",
  ],
  benefits: [
    "Residential heating and cooling only",
    "Every visit planned around your home",
    "Clear communication at every step",
    "Attention to every system, large or small",
  ],
  image: px(34938442, 1100, 1400),
  imageAlt: "HVAC technician carefully servicing residential heating and cooling equipment",
  caption: "Residential heating & cooling, done with care.",
};

export const strengths = [
  {
    title: "Professional Service",
    text: "A polite, tidy approach to every visit — from the first call to the final check.",
    icon: "shield" as const,
  },
  {
    title: "Reliable Solutions",
    text: "Careful diagnosis and dependable work on the systems your home relies on.",
    icon: "gear" as const,
  },
  {
    title: "Quality Workmanship",
    text: "Precision heating, ventilation and air conditioning craftsmanship, done properly.",
    icon: "tools" as const,
  },
  {
    title: "Customer Satisfaction",
    text: "We take time to explain what we find, so you can decide with confidence.",
    icon: "heart" as const,
  },
];

export const comfort = {
  eyebrow: "Year-Round Comfort",
  title: "Every Season, a More Comfortable Home.",
  text: "Warm winter mornings, cool summer evenings and steady air in between. Good heating and cooling should feel effortless, working quietly in the background of everyday life.",
  imageA: px(8141964, 1500, 1000),
  imageAAlt: "Bright, spacious minimalist living room with wooden flooring and large windows",
  imageB: px(11408618, 900, 1200),
  imageBAlt: "Bright and airy living room with tall windows and a cosy fireplace",
  caption: "Comfort, quietly working in the background of everyday life.",
};

export const gallery = [
  {
    id: "g1",
    title: "Clean Ductwork",
    tag: "Installation",
    image: px(11538226, 900, 1150),
    alt: "Close-up of a clean, labelled residential air duct installation",
  },
  {
    id: "g2",
    title: "Condenser Placement",
    tag: "Air Conditioning",
    image: px(27427771, 900, 700),
    alt: "Air conditioning unit neatly mounted on a residential exterior wall",
  },
  {
    id: "g3",
    title: "Radiant Connections",
    tag: "Heating",
    image: px(29226620, 900, 1150),
    alt: "Technician installing a radiator pipe with specialist tools",
  },
  {
    id: "g4",
    title: "Ventilation Runs",
    tag: "Ventilation",
    image: px(36129008, 900, 700),
    alt: "White ventilation pipes aligned on a bright wall",
  },
  {
    id: "g5",
    title: "Winter Ready",
    tag: "Heating",
    image: px(15389268, 900, 1150),
    alt: "Minimalist residential facade with an air conditioner and bare winter trees",
  },
  {
    id: "g6",
    title: "Airflow Detail",
    tag: "Climate Control",
    image: px(2464428, 900, 700),
    alt: "Metallic ventilation grid in a modern ceiling",
  },
];

export const contact = {
  eyebrow: "Get In Touch",
  title: "Let's Talk About Your Home.",
  text: "Tell us a little about your home and the service you need, or call us directly and speak with JHI Services LLC.",
  cards: [
    {
      label: "Telephone",
      value: site.phoneDisplay,
      href: site.phoneHref,
      icon: "phone" as const,
      note: "The quickest way to reach us",
    },
    {
      label: "Service Location",
      value: "New Jersey",
      href: "#service-area",
      icon: "pin" as const,
      note: "Serving North, Central & South Jersey",
    },
    {
      label: "Our Services",
      value: "Heating & Cooling",
      href: "#services",
      icon: "leaf" as const,
      note: "Repair, installation and maintenance",
    },
  ],
};

export const footer = {
  blurb:
    "Residential heating and cooling care for New Jersey homes, delivered with clarity and attention to detail.",
};
