import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Phone } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

export default function AboutPage() {
  const { phone, phoneFormatted, colors, license } = useSiteConfig();

  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="/rm-images/about-banner.jpg"
          alt="Ralph Mann & Sons — About Us"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white uppercase">About Us</h1>
              <p className="text-white/80 mt-2 text-lg">Since 1916 — 110 years later!</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-slate-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-red-700 transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-700 font-medium">About Us</span>
          </nav>
        </div>
      </div>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — Real Story */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Since 1916</h2>
              <div className="w-12 h-1 rounded-full mb-8" style={{ backgroundColor: colors.primaryHex }} aria-hidden="true" />

              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                In 1916, indoor plumbing and central heating systems were for many people just a dream. Ralph Mann realized
                that he had the vision to make this dream a reality for the people in his community. He probably never imagined
                that his vision would carry on through four generations and into a new millennium, but over 100 years later,
                Ralph's vision continues to thrive, and grow.
              </p>

              {/* Real 110-year badge from original site */}
              <div className="mb-6">
                <img
                  src="/rm-images/ralph-110-yrs.png"
                  alt="Ralph Mann & Sons — 110 Years of Service"
                  className="h-24 w-auto object-contain"
                  loading="lazy"
                />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">After Serving Their Country</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Ralph Mann was joined by his sons, Ralph and George, after serving our country in WWII. The new team of
                father and sons expanded the company to include new services and products and reached out to surrounding areas.
                Complete kitchen and bathroom remodeling, appliance sales and service, home heating oil sales, and commercial
                and industrial services were some of the extensions to this once small local business. By the 1970s, Ralph Mann
                & Sons had grown to serve over 10,000 customers with more than 30 employees.
              </p>

              <p className="text-slate-600 mb-6 leading-relaxed">
                As the Valley has seen change, so has Ralph Mann & Sons. Being up to date with all industry standards and
                products has allowed the company to sustain and thrive for over a century. New technology has allowed us to
                branch out all over the state of Connecticut.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-3">Changing Technologies</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Geothermal, radiant, solar, tankless, and ductless are just a few of the buzzwords that are changing the
                market, and Ralph Mann & Sons, Inc. has always been ahead of the curve. Manufacturer rebates, government
                and utility rebates, tax credits, and energy efficiency promotions are keeping the industry on its toes,
                and Ralph Mann & Sons, Inc. is proud to be able to offer all these incentives to customers.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-3">Consistency Is What We Are All About</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Consistency is what we are all about, and why our customers keep calling us back, many for decades and generations.
                We are large enough to provide prompt and reliable service, but also fortunate enough to recognize our customers
                by name instead of a number. Honesty, integrity, fairness and uncompromised craftsmanship are the ingredients
                you'll find in every minute of service we provide.
              </p>

              <p className="text-slate-700 font-semibold italic mb-8">
                So, how can we help you?<br />
                <span className="not-italic font-bold text-slate-900">— Craig Mann</span>
              </p>

              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: colors.primaryHex }}
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call Us: {phoneFormatted}
              </a>
            </motion.div>

            {/* Right — Certifications & Licenses */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Real facts */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h4 className="font-bold text-slate-900 text-lg mb-5">Serving Connecticut Since 1916</h4>
                <ul className="space-y-3">
                  {[
                    '4th-generation family-owned and operated',
                    '110 years of service to Connecticut homeowners',
                    'Over 10,000 customers served by the 1970s',
                    'Serving all of Connecticut — from Ansonia to Fairfield County',
                    'NATE Certified & IGSHPA Certified Technicians',
                    'BBB Accredited Business',
                    'Manufacturer rebates, tax credits & utility rebates available',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.primaryHex }} aria-hidden="true" />
                      <span className="text-slate-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* License Box */}
              <div className="rounded-2xl p-6 text-white" style={{ backgroundColor: colors.dark }}>
                <h4 className="font-bold text-lg mb-3">Fully Licensed & Insured</h4>
                <p className="text-white/70 text-sm leading-relaxed">{license}</p>
              </div>

              {/* Testimonial */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 italic">
                <p className="text-slate-600 leading-relaxed mb-3 text-sm">
                  "We recently had all of our HVAC equipment replaced, and the experience was excellent from start to finish.
                  The team was professional, efficient, and knowledgeable. I highly recommend Ralph Mann to anyone in need
                  of HVAC services."
                </p>
                <p className="text-sm font-semibold text-slate-800 not-italic">— The Surreybrook School, Bethany, CT</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
