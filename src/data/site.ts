import { Wrench, Flame, Droplet, Search, Bath, Home as HomeIcon, ShieldAlert, Hammer, LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
}

export const services: Service[] = [
  {
    slug: "emergency",
    title: "Emergency Plumbing",
    short: "24/7 rapid response across Auckland for burst pipes, leaks and floods.",
    description: "When something goes wrong, every minute matters. Our on-call team responds fast, contains the issue and fixes it right the first time.",
    icon: ShieldAlert,
    bullets: ["Burst & leaking pipes", "Overflowing toilets", "Hot water failures", "After-hours callouts"],
  },
  {
    slug: "general",
    title: "General Plumbing",
    short: "Repairs, installations and upgrades for every part of your home.",
    description: "From a leaky tap to a full repipe, our licensed plumbers handle it cleanly, neatly and with no surprises on your invoice.",
    icon: Wrench,
    bullets: ["Tap & toilet repairs", "Pipe installs", "Fixture upgrades", "Compliance work"],
  },
  {
    slug: "hot-water",
    title: "Hot Water Services",
    short: "Repair, replace or upgrade your hot water cylinder or gas system.",
    description: "Same-day hot water restoration. We service all major brands and recommend the right system for your home and budget.",
    icon: Flame,
    bullets: ["Cylinder repair & replace", "Gas & electric systems", "Heat pumps & continuous flow", "Same-day install"],
  },
  {
    slug: "drains",
    title: "Drain & Blockages",
    short: "Clear blocked drains fast with high-pressure jetting and CCTV.",
    description: "Persistent blockage? We diagnose with CCTV and clear it with hydro-jetting — no guesswork, no repeat callouts.",
    icon: Droplet,
    bullets: ["High-pressure jetting", "CCTV drain inspection", "Tree root removal", "Drain repair"],
  },
  {
    slug: "leak-detection",
    title: "Leak Detection",
    short: "Pinpoint hidden leaks without tearing up walls or floors.",
    description: "Acoustic and thermal tools find leaks accurately so we only repair what's needed — saving you time, water and money.",
    icon: Search,
    bullets: ["Hidden pipe leaks", "Slab leak detection", "Thermal imaging", "Insurance reports"],
  },
  {
    slug: "bathroom-kitchen",
    title: "Bathroom & Kitchen",
    short: "New installs and renovations done right, on time and tidy.",
    description: "Working with you or your builder to install fixtures, run new lines and finish to a standard you'll love every day.",
    icon: Bath,
    bullets: ["Renovation plumbing", "Tapware & basin installs", "Showers & wet areas", "Dishwasher & laundry"],
  },
  {
    slug: "roofing",
    title: "Roof Plumbing",
    short: "Spouting, downpipes and roof repairs that stand up to Auckland weather.",
    description: "From cleaning gutters to full re-spouting, our roof plumbers protect your home from leaks and water damage.",
    icon: HomeIcon,
    bullets: ["Spouting & downpipes", "Roof leak repair", "Gutter cleaning", "Continuous spouting"],
  },
  {
    slug: "maintenance",
    title: "Maintenance Plumbing",
    short: "Scheduled servicing for landlords, property managers and businesses.",
    description: "Stay ahead of breakdowns with proactive plans, fast tenant responses and clean digital reporting.",
    icon: Hammer,
    bullets: ["Property manager plans", "Tenant callouts", "Compliance checks", "Digital reporting"],
  },
];

export const areas = [
  { group: "Auckland Central", suburbs: ["CBD", "Ponsonby", "Grey Lynn", "Newmarket", "Parnell", "Mt Eden", "Remuera"] },
  { group: "North Shore", suburbs: ["Takapuna", "Devonport", "Albany", "Browns Bay", "Milford", "Northcote", "Glenfield"] },
  { group: "West Auckland", suburbs: ["Henderson", "New Lynn", "Te Atatū", "Titirangi", "Massey", "Westgate"] },
  { group: "East Auckland", suburbs: ["Howick", "Botany", "Pakuranga", "Half Moon Bay", "Bucklands Beach"] },
  { group: "South Auckland", suburbs: ["Manukau", "Papakura", "Manurewa", "Botany Downs", "Ōtāhuhu"] },
  { group: "Hibiscus Coast", suburbs: ["Orewa", "Silverdale", "Whangaparāoa", "Red Beach", "Stanmore Bay"] },
];

export const reviews = [
  { name: "Sarah M.", area: "Mt Eden", rating: 5, text: "Called at 7am with a burst pipe — they were here by 8:30 and sorted before lunch. Calm, professional and fairly priced. Couldn't ask for more." },
  { name: "James W.", area: "Takapuna", rating: 5, text: "Replaced our hot water cylinder same day. Clean install, explained everything and tidied up better than they found it. Highly recommend." },
  { name: "Priya K.", area: "Howick", rating: 5, text: "Found a slab leak two other plumbers missed. Saved us thousands in damage. Honest, skilled, and great communication throughout." },
  { name: "Tom R.", area: "Ponsonby", rating: 5, text: "Did a full bathroom reno with our builder. On time every day, no shortcuts. The finish is genuinely beautiful." },
  { name: "Linda H.", area: "Albany", rating: 5, text: "Property manager here — we use Mr. Plumber across 40+ rentals. Reliable, great with tenants, easy invoicing. They're our team." },
  { name: "Mike P.", area: "Henderson", rating: 5, text: "Quoted three plumbers for a repipe. Mr. Plumber wasn't the cheapest but I'm so glad I went with them. Quality work." },
];

export const trustPoints = [
  "Fast response across Auckland",
  "Licensed Master Plumbers",
  "24/7 emergency callouts",
  "Upfront, transparent pricing",
  "Workmanship guaranteed",
];

export const faqs = [
  { q: "How quickly can you get here?", a: "For emergencies we aim to be on-site within 60 minutes across most of Auckland. For non-urgent jobs we typically book within 24–48 hours." },
  { q: "Do you charge a callout fee?", a: "Quotes are always free. For urgent work we'll explain any callout charge upfront before starting — no surprises on your invoice." },
  { q: "Are your plumbers licensed?", a: "Yes. Every plumber is fully licensed under the NZ Plumbers, Gasfitters and Drainlayers Board, and we're Registered Master Plumbers." },
  { q: "Do you offer a guarantee?", a: "Absolutely. All workmanship is guaranteed and we stand behind every job. If something isn't right, we'll come back and make it right." },
  { q: "Do you do commercial work?", a: "Yes — from cafés and offices to body corporates and property managers. Ask about our maintenance plans for ongoing servicing." },
  { q: "Can I get a fixed-price quote?", a: "For most planned work yes — we'll inspect, scope and provide a fixed quote so you know exactly what you're paying." },
];
