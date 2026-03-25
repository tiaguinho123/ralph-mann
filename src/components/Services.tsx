import { motion } from 'motion/react';
import type { ElementType } from 'react';
import { Link } from 'react-router-dom';
import {
  Flame, Snowflake, Wind, Thermometer, Droplets,
  Zap, Leaf, Truck, ArrowRight
} from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

const iconMap: Record<string, ElementType> = {
  Flame, Snowflake, Wind, Thermometer, Droplets, Zap, Leaf, Truck,
};

const servicePathMap: Record<string, string> = {
  'Plumbing': '/plumbing',
  'Heating': '/heating',
  'Air Conditioning': '/air-conditioning',
  'Standby Generators': '/generators',
  'Water Heaters': '/water-heaters',
  'Geothermal': '/geothermal',
  'Indoor Air Quality': '/indoor-air-quality',
  'Fuel Oil Delivery': '/fuel-oil',
};

export default function Services() {
  const { services, servicesHeadline, servicesSubhead, colors } = useSiteConfig();

  return (
    <section className="py-24 bg-slate-50" id="services" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-semibold tracking-wide uppercase mb-3 text-sm" style={{ color: colors.primaryHex }}>
            What We Do
          </h2>
          <h3 id="services-heading" className="text-4xl font-bold text-slate-900 mb-6">{servicesHeadline}</h3>
          <p className="text-lg text-slate-600">{servicesSubhead}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Flame;
            const path = servicePathMap[service.title] ?? '/contact-us';
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="bg-white p-7 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all group"
              >
                <div
                  className="w-13 h-13 rounded-xl flex items-center justify-center mb-5 transition-colors"
                  style={{ backgroundColor: `${colors.primaryHex}18` }}
                >
                  <Icon className="w-7 h-7" style={{ color: colors.primaryHex }} aria-hidden="true" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h4>
                <p className="text-slate-500 mb-5 text-sm leading-relaxed">{service.description}</p>
                <Link
                  to={path}
                  className="inline-flex items-center text-sm font-semibold hover:opacity-80 transition-opacity"
                  style={{ color: colors.primaryHex }}
                >
                  {service.cta} <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
