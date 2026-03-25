import { motion } from 'motion/react';
import { ShieldCheck, Clock } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

// Real certification logos from ralphmannandsons.com — as they appear in every page footer
const CERT_LOGOS = [
  { src: '/rm-images/bbb-logo.png', alt: 'BBB — Better Business Bureau', href: 'https://www.bbb.org/us/ct/ansonia/profile/heating-contractors/ralph-mann-sons-inc-0111-73000157#sealclick' },
  { src: '/rm-images/nate-logo.png', alt: 'NATE — North American Technician Excellence', href: 'https://www.natex.org/site/1/Home' },
  { src: '/rm-images/igshpa-logo.png', alt: 'IGSHPA — International Ground Source Heat Pump Association', href: 'https://igshpa.org/' },
  { src: '/rm-images/ahri-logo.png', alt: 'AHRI — Air-Conditioning, Heating, and Refrigeration Institute', href: 'http://www.ahrinet.org/Home' },
  { src: '/rm-images/geo-logo.png', alt: 'GeoExchange — Geothermal Exchange Organization', href: 'https://www.geoexchange.org/' },
  { src: '/rm-images/chhs-logo.png', alt: 'CHCCA — Connecticut Home Comfort and Cooling Association', href: 'https://www.chcca.net/' },
];

export default function TrustBadges() {
  const { colors } = useSiteConfig();

  return (
    <section className="bg-white border-b border-slate-100" aria-label="Certifications and trust signals">
      {/* Key trust stats */}
      <div className="border-b border-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🏆', stat: '110 Years', label: 'In Business Since 1916', sub: '4th-generation family' },
              { icon: '🔑', stat: '7 Licenses', label: 'CT-Licensed & Insured', sub: 'All trades covered' },
              { icon: '✅', stat: 'NATE Certified', label: 'Trained Technicians', sub: 'Industry gold standard' },
              { icon: '🕐', stat: '24/7', label: 'Emergency Service', sub: 'Real person answers' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <span className="text-2xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
                <div>
                  <p className="font-bold text-slate-900 text-sm leading-tight">{item.stat}</p>
                  <p className="text-xs text-slate-600 leading-snug">{item.label}</p>
                  <p className="text-xs text-slate-400 leading-snug">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Real certification logos from original site */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-slate-400 uppercase tracking-widest font-semibold mb-6">
            Member of & Certified by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {CERT_LOGOS.map((logo, i) => (
              <motion.a
                key={i}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 w-auto object-contain"
                  loading="lazy"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
