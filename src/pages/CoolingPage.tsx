import ServicePage from './ServicePage';
import { CheckCircle2 } from 'lucide-react';

// Ralph Mann & Sons — Cooling / AC Services
// Content based on original site air-conditioning page
export default function CoolingPage() {
  return (
    <ServicePage
      title="Air Conditioning & Cooling"
      subtitle="Residential and Commercial AC — Ansonia, Orange, Woodbridge, Fairfield, Weston, Westport, Newtown CT"
      heroImage="/rm-images/air-conditioning.jpg"
      heroImageAlt="Ralph Mann & Sons air conditioning and cooling service — Connecticut"
      content={
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Air Conditioning &amp; Cooling Services</h2>
          <div className="w-12 h-1 rounded-full mb-8" style={{ backgroundColor: '#c0392b' }} />

          <img
            src="/rm-images/bg-ac.jpg"
            alt="Ralph Mann & Sons air conditioning service unit"
            className="w-full rounded-2xl mb-8 object-cover"
            style={{ maxHeight: '360px' }}
            loading="lazy"
            decoding="async"
          />

          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            At Ralph Mann &amp; Sons, Inc., we install the right AC equipment for homeowners and businesses across
            Connecticut. An energy-efficient air conditioning system installation can start with a brand-new system
            or a replacement of an older system. Let us put our 110 years of experience to work for you!
          </p>

          <h3 className="text-xl font-bold text-slate-900 mb-4">Our Cooling Services Include</h3>
          <ul className="space-y-3 mb-8">
            {[
              'Central air conditioning installation and repair',
              'New AC system design and installation',
              'Ductless mini-split installation and service',
              'Refrigerant recharge and leak detection',
              'Precise temperature and humidity control',
              'Annual AC tune-ups and preventive maintenance',
              'Emergency cooling service — 24 hours a day',
              'System load calculation and equipment selection',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#c0392b' }} aria-hidden="true" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mb-4">Preferred Brands</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {['American Standard', 'Water Furnace', 'Midea', 'Fujitsu', 'Trane', 'Honeywell', 'Aprilaire', 'Bryant', 'LG'].map((brand) => (
              <span key={brand} className="px-3 py-1 text-sm rounded-full bg-slate-100 text-slate-700 font-medium border border-slate-200">
                {brand}
              </span>
            ))}
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Service Area</h3>
            <p className="text-slate-600 leading-relaxed">
              We serve Ansonia, Orange, Woodbridge, Fairfield, Weston, Westport, and Newtown, CT — and all of
              Connecticut. Call <strong>1-800-995-6266</strong> to schedule a free consultation. Same-day service
              available for emergencies.
            </p>
          </div>
        </div>
      }
    />
  );
}
