import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Droplets, Flame, Wind, Zap, Thermometer, Leaf,
  AirVent, Fuel, ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Droplets,
    label: 'Plumbing',
    path: '/plumbing',
    img: '/rm-images/plumber.jpg',
    desc: 'Licensed plumbing for residential and commercial — drains, pipes, gas hookups, sump pumps and more.',
    license: 'PLM.0203557-P1',
  },
  {
    icon: Flame,
    label: 'Heating',
    path: '/heating',
    img: '/rm-images/geo-truck.jpg',
    desc: 'Furnace, boiler, heat pump, and oil-to-gas conversion installation across Naugatuck Valley and Fairfield County.',
  },
  {
    icon: Wind,
    label: 'Air Conditioning',
    path: '/air-conditioning',
    img: '/rm-images/air-conditioning.jpg',
    desc: 'Central AC and ductless mini-split installation and repair for homes and businesses throughout Connecticut.',
  },
  {
    icon: Zap,
    label: 'Standby Generators',
    path: '/generators',
    img: '/rm-images/generator.jpg',
    desc: 'Kohler authorized installer — automatic whole-home standby generators with full-service installation.',
  },
  {
    icon: Thermometer,
    label: 'Water Heaters',
    path: '/water-heaters',
    img: '/rm-images/water-heater.jpg',
    desc: 'Same-day water heater replacement for tank and tankless systems. Licensed and insured.',
  },
  {
    icon: Leaf,
    label: 'Geothermal',
    path: '/geothermal',
    img: '/rm-images/geo.jpg',
    desc: 'IGSHPA-certified geothermal heat pump specialists — closed-loop, open-loop and pond systems.',
  },
  {
    icon: AirVent,
    label: 'Indoor Air Quality',
    path: '/indoor-air-quality',
    img: '/rm-images/web4.jpg',
    desc: 'Humidifiers, air purifiers, MERV filters, ERV/HRV ventilation systems and duct cleaning.',
  },
  {
    icon: Fuel,
    label: 'Fuel Oil Delivery',
    path: '/fuel-oil',
    img: '/rm-images/oil-delivery.jpg',
    desc: 'Automatic and will-call fuel oil delivery across Naugatuck Valley. Budget plans and senior discounts available.',
    license: 'HOD.0000368',
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src="/rm-images/about-banner.jpg"
          alt="Ralph Mann & Sons — Our Services"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-tight">Our Services</h1>
              <p className="text-white/80 mt-2 text-lg">Complete home comfort since 1916 — choose a service below</p>
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
            <span className="text-slate-700 font-medium">Services</span>
          </nav>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-700 mb-2">WHAT WE DO</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Complete Home Comfort Services</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
              Serving homes and businesses across all of Connecticut since 1916.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.path}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={svc.path}
                    className="group flex flex-col rounded-2xl border border-slate-200 overflow-hidden hover:border-red-300 hover:shadow-lg transition-all h-full"
                  >
                    {/* Image */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={svc.img}
                        alt={svc.label}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-4 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-white" aria-hidden="true" />
                        </div>
                        <span className="text-white font-bold text-sm">{svc.label}</span>
                      </div>
                    </div>

                    {/* Text */}
                    <div className="p-5 flex flex-col flex-1">
                      <p className="text-slate-600 text-sm leading-relaxed flex-1">{svc.desc}</p>
                      {svc.license && (
                        <p className="text-slate-400 text-xs mt-2">License: {svc.license}</p>
                      )}
                      <div className="mt-4 flex items-center gap-1 text-red-700 font-semibold text-sm group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
