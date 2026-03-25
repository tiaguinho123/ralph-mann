// ============================================================
// Ralph Mann & Sons, Inc.
// Config — content scraped ONLY from ralphmannandsons.com
// Standard: nothing invented, nothing assumed.
// ============================================================

import type { SiteConfig } from './SiteConfig.types';

export const config: SiteConfig = {
  // ─── Brand ───────────────────────────────────────────────
  businessName: 'Ralph Mann & Sons, Inc.',
  tagline: 'Plumbing, Heating, HVAC & More — Ansonia, CT',
  metaDescription:
    'Ralph Mann & Sons is a 4th-generation family company serving Ansonia, CT since 1916. Plumbing, heating, air conditioning, generators, geothermal & fuel oil. Call 1-800-995-6266.',
  logoText: {
    line1: 'Ralph Mann & Sons',
    line2: 'Inc.',
  },
  logoIcon: 'Flame',

  // ─── Colors (from ralphmannandsons.com) ───────────────────
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
    weekdays: 'Mon–Fri: 8am – 4:30pm',
    saturday: 'Emergency Service: 24/7',
    emergency: true,
  },

  // ─── SEO / Meta ──────────────────────────────────────────
  siteUrl: 'https://ralphmannandsons.com',
  // All 7 licenses confirmed from every page footer on real site
  license: 'CT Licenses: HIC.0504051 · HTG.0303047-S1 · HTG.0307938-ST1 · HOD.0000368 · FRP.0010753-F1 · PLM.0203557-P1 · ELC.0123595-E1',

  // ─── Hero ────────────────────────────────────────────────
  hero: {
    headline: ['Proudly Celebrating', '110 Years of Service!'],
    accentLine: 1,
    valueProp: 'Expert Plumbing, Heating & HVAC Services in Ansonia, CT',
    subText:
      'At Ralph Mann & Sons, Inc., your comfort is our top priority. For 110 years, our family-owned business has been a trusted name in plumbing, heating, and air conditioning services across Connecticut.',
    heroBgUrl: '/rm-images/img4473.jpg',
    primaryCTA: 'Schedule a Consultation',
    emergencyText: '24-Hour Emergency Service Available',
  },

  // ─── Offer Strip ─────────────────────────────────────────
  offer: {
    enabled: true,
    emoji: '📞',
    label: 'Help is only a phone call away!',
  },

  // ─── Reviews ─────────────────────────────────────────────
  // Site does not publish a Google review count — showing rating only
  reviews: {
    rating: 4.9,
    count: 0,
    googleMapsUrl:
      'https://www.google.com/maps/place/Ralph+Mann+%26+Sons+Inc/@41.3404,-73.0712,17z',
  },

  // ─── Trust Badges ────────────────────────────────────────
  // Based on real certification logos on every page: BBB, GEO, NATE, CHCCA, IGSHPA, AHRI
  trustBadges: [
    { label: 'Since 1916', sub: '110 Years of Service', icon: 'Award' },
    { label: 'Licensed & Insured', sub: 'All CT Trades', icon: 'ShieldCheck' },
    { label: 'NATE Certified', sub: 'Trained Technicians', icon: 'Star' },
    { label: 'IGSHPA Certified', sub: 'Geothermal Specialists', icon: 'Leaf' },
    { label: '24-Hr Emergency', sub: '1-800-995-6266', icon: 'Clock' },
  ],

  // ─── Services ────────────────────────────────────────────
  // From real Schedule-a-Consultation form on the real site
  servicesHeadline: 'Complete Home Comfort Services',
  servicesSubhead: 'Serving Homes & Businesses Across All of Connecticut Since 1916.',
  services: [
    {
      title: 'Plumbing',
      description:
        'Clogged drains, sinks and toilet repairs, leaky pipe repair and replacement, gas hookups, sump pump installation, and more.',
      cta: 'Learn More',
      icon: 'Droplets',
    },
    {
      title: 'Heating',
      description:
        'Boiler and furnace installation, repair, and maintenance. Oil-to-gas and heat pump conversions.',
      cta: 'Learn More',
      icon: 'Flame',
    },
    {
      title: 'Air Conditioning',
      description:
        'Central air conditioning installation and repair for homes and businesses in Ansonia, Orange, Woodbridge, Fairfield, Weston, Westport, Newtown CT.',
      cta: 'Learn More',
      icon: 'Snowflake',
    },
    {
      title: 'Standby Generators',
      description:
        'Whole-home standby generator installation and service so your family stays safe during any outage.',
      cta: 'Learn More',
      icon: 'Zap',
    },
    {
      title: 'Indoor Air Quality',
      description:
        'Whole-home air quality solutions for a healthier, more comfortable home environment.',
      cta: 'Learn More',
      icon: 'Wind',
    },
    {
      title: 'Water Heaters',
      description:
        'Tank, tankless (on-demand), and indirect-fired water heater installation, repair, and replacement.',
      cta: 'Learn More',
      icon: 'Thermometer',
    },
    {
      title: 'Geothermal',
      description:
        'IGSHPA-certified geothermal heat pump installation. 50–70% energy savings. COP ratings of 3.0–4.5.',
      cta: 'Learn More',
      icon: 'Leaf',
    },
    {
      title: 'Fuel Oil Delivery',
      description:
        'Reliable home heating oil delivery throughout the Naugatuck Valley with automatic and will-call programs.',
      cta: 'Learn More',
      icon: 'Truck',
    },
  ],

  // ─── Why Choose Us — content from the real About page ────
  whyUs: {
    yearsInBusiness: 110,
    yearsLabel: 'Years Serving Connecticut',
    headline: 'A Difference You Can See And A Name You Can Trust.',
    body: 'In 1916, indoor plumbing and central heating were for many people just a dream. Ralph Mann realized he had the vision to make this dream a reality. Over 100 years later, that vision continues — now in its 4th generation of family ownership. Honesty, integrity, fairness and uncompromised craftsmanship are the ingredients you\'ll find in every minute of service we provide.',
    imageUrl: '/rm-images/expert-technicians.jpg',
    imageAlt: 'Ralph Mann & Sons technician serving Ansonia CT',
    benefits: [
      'Family-Owned & Operated Since 1916',
      'Licensed for Plumbing, HVAC, Electric & More',
      '24-Hour Emergency Service — 1-800-995-6266',
      'NATE & IGSHPA Certified Technicians',
      'Serving All of Connecticut',
      'Manufacturer Rebates, Tax Credits & Utility Rebates Available',
    ],
    ctaLabel: 'Call 1-800-995-6266',
  },

  // ─── Testimonials — 5 real Google My Business reviews ────
  // Source: Google Maps listing — Ralph Mann & Sons Inc, Ansonia CT
  testimonials: [
    {
      name: 'John DeLeo',
      town: 'Google Review',
      service: 'AC System Installation',
      content:
        'I had an entire home AC system installed by Ralph Mann & Sons. The experience and quality from the sales process, to install, to post install follow-up has been nothing short of excellence. The system that was designed for my home is efficient and works perfectly. What impressed me most was the extra time the installers spent figuring out the best way to run all the lines and wiring so it was minimally invasive and kept everything nice and neat.',
      image: '',
    },
    {
      name: 'Michael Skiber',
      town: 'Google Review',
      service: 'Geothermal HVAC',
      content:
        "Can't say enough great things about this company. I was the victim of an unscrupulous geo-thermal company who underbid my job and left me with a system that was too small to cool and heat. Kevin and Craig jumped on it right away and fixed the problem with meticulous detail and great performance. Highly recommend for any HVAC project!",
      image: '',
    },
    {
      name: 'Carolyn Keating',
      town: 'Google Review',
      service: 'Geothermal System',
      content:
        'We needed AC for our house, and after extensively researching options and contractors, I decided on a geothermal system since we would have to soon replace our boiler and I wanted to get off oil. I picked Ralph Mann & Sons to do the research and they were excellent.',
      image: '',
    },
    {
      name: 'Scott Carroll',
      town: 'Google Review',
      service: 'Water Heater Replacement',
      content:
        'Ralph Mann and sons are just amazing. I had to replace my hot water heater and I called many local HVAC companies only to be floored by their estimates. My friend told me about Ralph Mann so I called. Melissa took great care of my call and the team was very professional.',
      image: '',
    },
    {
      name: 'Andrew Vanam',
      town: 'Google Review',
      service: 'HVAC Service',
      content:
        'Paul and his team came by and did a stellar job. They were professional, efficient, and very knowledgeable. Awesome guys and I definitely recommend them.',
      image: '',
    },
  ],

  // ─── Contact Form Services ────────────────────────────────
  // Taken exactly from the Schedule-a-Consultation form on ralphmannandsons.com
  contactFormServices: [
    'Plumbing',
    'Heating',
    'Air Conditioning',
    'Electric',
    'Standby Generators',
    'Natural Gas Conversions',
    'Gas Fireplace',
    'Indoor Air Quality (IAQ)',
    'Water Heaters',
    'Fuel Oil Delivery',
    'Other',
  ],

  // ─── Service Area ───────────────────────────────────────────
  // Confirmed from multiple real pages: homepage (7 towns), water heaters page, heating page
  serviceAreaTowns: [
    'Ansonia', 'Orange', 'Woodbridge', 'Fairfield',
    'Weston', 'Westport', 'Newtown', 'Shelton',
    'Derby', 'Naugatuck', 'Oxford', 'Beacon Falls',
  ],

  // ─── Footer ──────────────────────────────────────────────
  footerTagline:
    'Ralph Mann & Sons, Inc. is a 4th-generation family company in Ansonia, CT serving Connecticut since 1916. Plumbing, heating, air conditioning, generators, geothermal & fuel oil delivery.',
  footerAwards: 'BBB Accredited · NATE Certified · IGSHPA Member · AHRI Member · GEO Member · CHCCA Member',
};