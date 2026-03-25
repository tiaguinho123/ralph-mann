import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Phone } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

export default function FinancingPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();

  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop"
          alt="Ralph Mann & Sons — Financing"
          className="w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white uppercase">Financing</h1>
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
            <span className="text-slate-700 font-medium">Financing</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Financing</h2>
          <div className="w-12 h-1 rounded-full mb-8" style={{ backgroundColor: colors.primaryHex }} />

          {/* Credit Cards */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Credit Card Payments</h3>
            <p className="text-slate-600 mb-4">We accept the following credit cards:</p>
            <div className="flex flex-wrap gap-3">
              {['Visa', 'MasterCard', 'Discover', 'American Express'].map((card) => (
                <span key={card} className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                  {card}
                </span>
              ))}
            </div>
          </div>

          {/* Energize CT */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Energize CT Loan Programs</h3>
            <p className="text-slate-600 mb-4">
              We work with Connecticut's Energize CT Smart-E Loan programs to help make energy-efficient
              improvements more affordable for homeowners.
            </p>
            <a
              href="https://www.energizect.com/your-home/solutions-list/smarte"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold underline transition-opacity hover:opacity-80"
              style={{ color: colors.primaryHex }}
            >
              Learn More About Energize CT Smart-E Loans →
            </a>
          </div>

          {/* Financing Partners */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Financing Partners</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <a
                href="https://www.energizect.com/your-home/solutions-list/smarte"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col items-center hover:border-slate-300 transition-colors"
              >
                <img
                  src="/rm-images/greenbank.png"
                  alt="Connecticut Green Bank — Smart-E Loans"
                  className="h-16 w-auto object-contain mb-2"
                  loading="lazy"
                />
                <p className="text-slate-500 text-xs text-center">Smart-E Loan Programs</p>
              </a>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col items-center">
                <img
                  src="/rm-images/greensky.png"
                  alt="GreenSky — Home Improvement Financing"
                  className="h-16 w-auto object-contain mb-2"
                  loading="lazy"
                />
                <p className="text-slate-500 text-xs text-center">Home Improvement Financing</p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact-us"
              className="flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: colors.primaryHex }}
            >
              <Calendar className="w-5 h-5" aria-hidden="true" />
              Ask About Financing
            </Link>
            <a
              href={`tel:${phone}`}
              className="flex items-center justify-center gap-2 px-8 py-4 border-2 font-bold rounded-xl text-lg transition-colors"
              style={{ borderColor: colors.dark, color: colors.dark }}
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call {phoneFormatted}
            </a>
          </div>

          <p className="text-slate-500 italic text-sm mt-8">A Difference You Can See And A Name You Can Trust</p>
        </div>
      </section>
    </div>
  );
}
