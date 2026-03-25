import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

// All Q&As sourced directly from scraped ralphmannandsons.com pages
const REAL_FAQS = [
  {
    question: 'How long will my home be without heat (or hot water) during a replacement?',
    answer: 'Most residential heating installations take 1–3 hours. Water heater replacements typically take 2–4 hours from arrival to restoration. We schedule installations to minimize disruption and can often complete work while you\'re away.',
  },
  {
    question: 'Do you offer 24-hour emergency service?',
    answer: 'Yes. Call 1-800-995-6266 any time — day or night, 365 days a year. Our emergency line is answered by a real person who dispatches a licensed technician fast. Heating or cooling emergencies don\'t wait for business hours.',
  },
  {
    question: 'Are your technicians licensed in Connecticut?',
    answer: 'Yes. Ralph Mann & Sons holds 7 active Connecticut licenses covering heating, cooling, plumbing, fuel oil, electrical, and home improvement: HIC.0504051 · HTG.0303047-S1 · HTG.0307938-ST1 · HOD.0000368 · FRP.0010753-F1 · PLM.0203557-P1 · ELC.0123595-E1.',
  },
  {
    question: 'Can you help us qualify for Connecticut energy rebates?',
    answer: 'Yes. We handle Energize CT Smart-E Loan rebate applications on your behalf. Heat pump water heaters qualify for $500–$750. High-efficiency HVAC systems may also qualify. Federal tax credits under the Inflation Reduction Act can cover up to 30% of equipment and installation costs.',
  },
  {
    question: 'How often should my heating or cooling system be serviced?',
    answer: 'Annual preventive maintenance provides optimal reliability and efficiency. Fall is the ideal time for heating systems so they\'re ready before the season. We send automated maintenance reminders based on your installation date.',
  },
  {
    question: 'What payment and financing options are available?',
    answer: 'We accept Visa, MasterCard, Discover, and American Express. Financing is available through the Connecticut Green Bank (Smart-E Loans) and GreenSky — as low as 0.99% interest with terms up to 10 years. Fuel oil customers receive Early Payment, Senior ($0.02/gal), Prepayment ($0.10/gal), and Budget Plan discounts.',
  },
];

export default function FAQ() {
  const { colors, phone, phoneFormatted } = useSiteConfig();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = REAL_FAQS;

  return (
    <section className="py-24 bg-slate-50" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-semibold tracking-wide uppercase mb-3 text-sm" style={{ color: colors.primaryHex }}>
            Common Questions
          </h2>
          <h3 id="faq-heading" className="text-4xl font-bold text-slate-900 mb-4">
            Questions Homeowners Ask Us Most
          </h3>
          <p className="text-slate-500 max-w-xl mx-auto">
            We believe informed customers make better decisions — straight answers from four generations of Connecticut HVAC and plumbing pros.
          </p>
        </div>

        <div className="space-y-3" role="list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const btnId = `faq-btn-${index}`;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
                role="listitem"
              >
                <button
                  id={btnId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset"
                  style={{ '--tw-ring-color': colors.primaryHex } as React.CSSProperties}
                >
                  <span className="font-semibold text-base text-slate-900 pr-4 leading-snug">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                    style={{ color: colors.primaryHex }}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-6 pb-5 text-slate-600 leading-relaxed text-sm border-t border-slate-100 pt-4">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center p-8 rounded-3xl border" style={{ backgroundColor: `${colors.primaryHex}0D`, borderColor: `${colors.primaryHex}33` }}>
          <p className="text-slate-700 font-semibold mb-2">Still have a question?</p>
          <p className="text-slate-500 mb-4 text-sm">Our team picks up the phone. No bots, no hold music.</p>
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center justify-center px-8 py-3 font-bold rounded-xl transition-opacity hover:opacity-90"
            style={{ backgroundColor: colors.primaryHex, color: '#FFFFFF' }}
          >
            Call {phoneFormatted}
          </a>
        </div>
      </div>
    </section>
  );
}
