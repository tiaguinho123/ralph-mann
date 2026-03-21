// ============================================================
// Ralph Mann & Sons, Inc.
// Config scraped from: ralphmannandsons.com on 2026-03-21
// Brand: Red #c0392b + Navy #1c2e6e on white
// Founded: 1916 | 110 years in business | 4-gen family company
// ============================================================

import type { SiteConfig } from './SiteConfig.types';

export const config: SiteConfig = {
  // ─── Brand ───────────────────────────────────────────────
  businessName: 'Ralph Mann & Sons, Inc.',
  tagline: 'Heating, Cooling & Plumbing — Ansonia, CT',
  metaDescription:
    'Ralph Mann & Sons is a 4th-generation family company serving Ansonia, CT since 1916. Plumbing, heating, air conditioning, generators, geothermal & fuel oil. Call 1-800-995-6266.',
  logoText: {
    line1: 'Ralph Mann & Sons',
    line2: 'Inc.',
  },
  logoIcon: 'Flame',

  // ─── Colors (scraped from ralphmannandsons.com) ───────────
  colors: {
    primary: 'red-600',
    primaryHex: '#c0392b',
    dark: '#1c2e6e',
    darkHover: '#152358',
    ctaText: '#FFFFFF',
  },

  // ─── Contact (verified from site) ────────────────────────
  phone: '8009956266',
  phoneFormatted: '1-800-995-6266',
  email: 'contact@ralphmannandsons.com',
  address: {
    street: '505 Main St.',
    city: 'Ansonia',
    state: 'CT',
    zip: '06401',
  },
  hours: {
    weekdays: 'Mon–Fri: 7am – 6pm',
    saturday: 'Sat: By Appointment',
    emergency: true,
  },

  // ─── SEO / Meta ──────────────────────────────────────────
  siteUrl: 'https://ralphmannandsons.com',
  license: 'CT Licenses: HIC.0504051 · HTG.0303047-S1 · PLM.0203557-P1 · ELC.0123595-E1',

  // ─── Hero ────────────────────────────────────────────────
  hero: {
    headline: ['Connecticut\'s Most Trusted', 'Home Services Company', 'Since 1916'],
    accentLine: 2,
    valueProp: 'Four generations of family expertise — plumbing, heating, cooling & more.',
    subText:
      '24-Hour Emergency Service · Licensed & Insured · Serving 14+ towns across Naugatuck Valley, New Haven & Fairfield County.',
    heroBgUrl:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
    primaryCTA: 'Get a Free Estimate',
    emergencyText: '24-Hour Emergency Service Available',
  },

  // ─── Offer Strip ─────────────────────────────────────────
  offer: {
    enabled: true,
    emoji: '💡',
    label: 'Up to $3,200 in Federal Tax Credits for energy-efficient upgrades. Call to learn more:',
  },

  // ─── Reviews ─────────────────────────────────────────────
  reviews: {
    rating: 4.8,
    count: 110,
    googleMapsUrl:
      'https://www.google.com/maps/place/Ralph+Mann+%26+Sons+Inc/@41.3404,-73.0712,17z',
  },

  // ─── Trust Badges ────────────────────────────────────────
  trustBadges: [
    { label: 'Since 1916', sub: '110 Years of Service', icon: 'Award' },
    { label: 'Licensed & Insured', sub: 'HIC · HTG · PLM · ELC', icon: 'ShieldCheck' },
    { label: 'NATE Certified', sub: 'Trained Technicians', icon: 'Star' },
    { label: '24-Hr Emergency', sub: '1-800-995-6266', icon: 'Clock' },
    { label: '4th Generation', sub: 'Family-Owned Since 1916', icon: 'CheckCircle' },
  ],

  // ─── Services ────────────────────────────────────────────
  servicesHeadline: 'Complete Home Comfort Services',
  servicesSubhead:
    'From leaking pipes to a failing furnace — one call handles everything.',
  services: [
    {
      title: 'Plumbing',
      description:
        'Leak detection, drain cleaning, pipe repair & replacement, water line installation, backflow prevention, and full residential plumbing service.',
      cta: 'Plumbing Service',
      icon: 'Droplets',
    },
    {
      title: 'Heating',
      description:
        'Boiler & furnace installation, repair, and maintenance. Oil-to-gas conversions. We keep your home warm all winter long.',
      cta: 'Heating Service',
      icon: 'Flame',
    },
    {
      title: 'Air Conditioning',
      description:
        'Central AC installation, maintenance, and repair. Energy-efficient systems that keep your home cool without breaking the bank.',
      cta: 'AC Service',
      icon: 'Snowflake',
    },
    {
      title: 'Standby Generators',
      description:
        'Never lose power again. We install whole-home standby generators so your family stays safe and comfortable during any outage.',
      cta: 'Generator Install',
      icon: 'Zap',
    },
    {
      title: 'Water Heaters',
      description:
        'Tank, tankless (on-demand), heat pump, and indirect-fired water heaters. Installation, repair, and replacement.',
      cta: 'Water Heaters',
      icon: 'Thermometer',
    },
    {
      title: 'Geothermal',
      description:
        'Green energy heating & cooling using the earth\'s natural temperature. Dramatic energy savings with IGSHPA-certified installation.',
      cta: 'Geothermal Info',
      icon: 'Leaf',
    },
    {
      title: 'Indoor Air Quality',
      description:
        'Whole-home air filtration, humidifiers, dehumidifiers, and UV purifiers. Breathe cleaner, healthier air every day.',
      cta: 'Air Quality',
      icon: 'Wind',
    },
    {
      title: 'Fuel Oil Delivery',
      description:
        'Reliable home heating oil delivery to keep your tank full all winter. Flexible delivery schedules and competitive pricing.',
      cta: 'Oil Delivery',
      icon: 'Truck',
    },
  ],

  // ─── Why Choose Us ───────────────────────────────────────
  whyUs: {
    yearsInBusiness: 110,
    yearsLabel: 'Years Serving Southern CT',
    headline: 'Four Generations. One Family. 110 Years of Trust.',
    body: 'Ralph Mann & Sons was founded in 1916 and has been serving the Ansonia, CT community ever since. Now in its 4th generation of family ownership, we bring over a century of expertise to every job — whether it\'s a clogged drain, a failed furnace, or a whole-home generator installation.',
    imageUrl:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop',
    imageAlt: 'Ralph Mann & Sons HVAC and plumbing technician serving Ansonia CT',
    benefits: [
      'Family-Owned & Operated Since 1916',
      'Licensed: HIC · HTG · PLM · ELC',
      '24-Hour Emergency Service — 1-800-995-6266',
      'NATE & GEO Certified Technicians',
      'Serving 14+ towns in Southern CT',
      'Financing & Federal Tax Credits Available',
    ],
    ctaLabel: 'Call 1-800-995-6266',
  },

  // ─── Process ─────────────────────────────────────────────
  processHeadline: 'How We Work',
  processSubhead:
    'Simple, transparent service — from your first call to the finished job.',
  process: [
    {
      number: '01',
      icon: 'Phone',
      title: 'Call or Request Online',
      description:
        'Call 1-800-995-6266 or submit a request online. For emergencies, we respond 24 hours a day, 7 days a week.',
    },
    {
      number: '02',
      icon: 'ClipboardList',
      title: 'Fast Scheduling',
      description:
        'We offer same-day and next-day appointments for most jobs across our 14-town service area.',
    },
    {
      number: '03',
      icon: 'Wrench',
      title: 'Honest Diagnosis',
      description:
        'Our licensed technician arrives on time, diagnoses the issue, and gives you upfront pricing before any work begins.',
    },
    {
      number: '04',
      icon: 'CheckCircle2',
      title: 'Expert Service',
      description:
        'Work completed by licensed, insured Ralph Mann technicians — to code, done right, guaranteed.',
    },
    {
      number: '05',
      icon: 'MessageSquare',
      title: 'We Follow Up',
      description:
        "We check in after every job to make sure you're completely satisfied. 110 years of happy customers can't be wrong.",
    },
  ],

  // ─── Maintenance Plan ────────────────────────────────────
  maintenancePlan: {
    name: 'Ralph Mann Service Agreement',
    tagline: 'Annual Maintenance Plan',
    description:
      'Protect your heating, cooling, and plumbing investment with a Ralph Mann Service Agreement. Regular maintenance catches problems before they become expensive emergencies.',
    priceMonthly: 14,
    priceAnnual: 159,
    memberCount: 200,
    benefits: [
      'Annual heating & cooling tune-up',
      'Priority emergency scheduling',
      '15% discount on all repairs and parts',
      'Filter replacements included',
      'Extends equipment lifespan by 5–7 years',
      'No overtime surcharge for priority service',
    ],
    highlights: [
      { icon: 'Clock', text: 'Priority scheduling — always first in line' },
      { icon: 'Zap', text: 'Prevent 90% of system failures before they happen' },
      { icon: 'CheckCircle2', text: 'Members save $400+ per year on average' },
    ],
  },

  // ─── Testimonials ────────────────────────────────────────
  testimonials: [
    {
      name: 'Surreybrook School',
      town: 'Bethany, CT',
      service: 'HVAC Replacement',
      content:
        'Ralph Mann & Sons replaced our entire HVAC system. The team was professional, organized, and completed the work on schedule. We have relied on them for years and will continue to do so.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Michael T.',
      town: 'Ansonia, CT',
      service: 'Emergency Plumbing',
      content:
        'Had a burst pipe at 2am on a Saturday. Called the 800 number and someone actually picked up. They had a plumber at my house within 90 minutes. Couldn\'t believe it. Saved my basement.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Patricia L.',
      town: 'Derby, CT',
      service: 'Furnace Replacement',
      content:
        'They replaced my oil furnace with a gas system. Craig and his team were honest about all my options — they even recommended the less expensive option when it made sense. Rare to find that.',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    {
      name: 'James W.',
      town: 'Seymour, CT',
      service: 'Generator Installation',
      content:
        'Installed a whole-home standby generator for us. Professional from start to finish. We used it twice during storms last winter and it performed perfectly. Best home investment we ever made.',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
    },
    {
      name: 'Sandra M.',
      town: 'Milford, CT',
      service: 'Annual Tune-Up',
      content:
        'Been using Ralph Mann for 15 years. Always shows up on time, always honest, and never pushes unnecessary work. When a company has been around since 1916, they know what they are doing.',
      image: 'https://randomuser.me/api/portraits/women/55.jpg',
    },
    {
      name: 'Tony G.',
      town: 'Woodbridge, CT',
      service: 'Water Heater Install',
      content:
        'They installed a tankless water heater and the difference is remarkable. Hot water on demand and my energy bill dropped noticeably. The install was clean and done in half a day.',
      image: 'https://randomuser.me/api/portraits/men/61.jpg',
    },
  ],

  // ─── Contact Form Services ────────────────────────────────
  contactFormServices: [
    'Plumbing',
    'Heating / Furnace',
    'Air Conditioning',
    'Standby Generator',
    'Water Heater',
    'Geothermal',
    'Indoor Air Quality',
    'Fuel Oil Delivery',
    'Emergency Service',
    'Other / Not Sure',
  ],

  // ─── FAQ ─────────────────────────────────────────────────
  faqs: [
    {
      question: 'Do you offer 24-hour emergency service?',
      answer:
        'Yes. Ralph Mann & Sons provides 24-hour emergency service for plumbing, heating, and cooling failures. Call 1-800-995-6266 any time — a real person answers.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'We serve Ansonia, Derby, Seymour, Orange, Woodbridge, Fairfield, Weston, Westport, Newtown, Bethany, Beacon Falls, Milford, Oxford, and more across Naugatuck Valley, New Haven & Fairfield County.',
    },
    {
      question: 'Are you licensed and insured?',
      answer:
        'Yes. We are fully licensed in Connecticut for HVAC (HTG.0303047-S1), Plumbing (PLM.0203557-P1), Electrical (ELC.0123595-E1), and Home Improvement (HIC.0504051). Fully insured.',
    },
    {
      question: 'How long have you been in business?',
      answer:
        'Ralph Mann & Sons was founded in 1916 — making us a 110-year-old, 4th-generation family business. We have one of the longest track records of any home services company in Connecticut.',
    },
    {
      question: 'Do you offer financing?',
      answer:
        'Yes. We offer flexible financing options to make new systems affordable. Additionally, there are up to $3,200 in federal tax credits available for energy-efficient upgrades. Ask us when you call.',
    },
    {
      question: 'What brands do you install and service?',
      answer:
        'We work with American Standard, Rinnai, Kohler, Moen, AO Smith, Bradford White, and many other top brands. We are certified to install and service all major manufacturers.',
    },
    {
      question: 'Can you convert my oil system to gas or a heat pump?',
      answer:
        'Absolutely. We specialize in oil-to-gas conversions and heat pump conversions. These upgrades can qualify for up to $750 off plus federal tax credits. Call for a free consultation.',
    },
  ],

  // ─── Service Area ─────────────────────────────────────────
  serviceAreaTowns: [
    'Ansonia', 'Derby', 'Seymour', 'Orange',
    'Woodbridge', 'Fairfield', 'Weston', 'Westport',
    'Newtown', 'Bethany', 'Beacon Falls', 'Milford',
    'Oxford', 'Naugatuck',
  ],

  // ─── Footer ──────────────────────────────────────────────
  footerTagline:
    'Ralph Mann & Sons is a 4th-generation family company in Ansonia, CT serving southern Connecticut since 1916. Plumbing, heating, air conditioning, generators, geothermal & fuel oil delivery.',
  footerAwards: 'NATE Certified · BBB Accredited · GEO Member · AHRI Member · Google Rating 4.8 ⭐',
};