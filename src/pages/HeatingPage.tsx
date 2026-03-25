import ServicePage from './ServicePage';
import { CheckCircle2 } from 'lucide-react';

const HEATING_BRANDS = [
  'Aprilaire', 'Bryant', 'Trane', 'Midea', 'LG', 'Lochinvar',
  'Fujitsu', 'Honeywell', 'Weil-McLain', 'Thermo Pride', 'Water Furnace',
  'Ecobee', 'Burnham', 'Reme Halo', 'American Standard',
];

export default function HeatingPage() {
  return (
    <ServicePage
      title="Heating Installation CT"
      subtitle="Furnace · Boiler · Heat Pump · Oil-to-Gas Conversions — Naugatuck Valley, Litchfield Hills & Fairfield County"
      heroImage="/rm-images/geo-truck.jpg"
      heroImageAlt="Ralph Mann & Sons heating installation — Connecticut"
      content={
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Professional Heating Equipment Installations in CT Backed by 110 Years of Expertise</h2>
          <div className="w-12 h-1 rounded-full mb-6" style={{ backgroundColor: '#c0392b' }} />

          <p className="text-slate-600 text-lg leading-relaxed mb-4">
            Ralph Mann & Sons delivers heating installation services designed to keep your Connecticut home warm
            for decades. We serve homeowners, landlords, property managers, and light commercial properties
            throughout the Naugatuck Valley, Litchfield Hills, and Fairfield County shoreline with comprehensive
            furnace installation, heating replacement, and 24/7 emergency repair services.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            We serve Orange, Woodbridge, Fairfield, Weston, Westport, Newtown, Shelton, Southbury, Ansonia,
            Derby, Naugatuck, Oxford, Beacon Falls, and Woodbury with same-day emergency response and scheduled
            heating equipment installations.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mb-4">Complete Heating System Installation Process</h3>
          <ul className="space-y-3 mb-8">
            {[
              'Comprehensive home assessment analyzing structure, insulation values, window efficiency, and air leakage patterns',
              'Manual J load calculations determining precise heating needs for proper equipment sizing',
              'Personalized system design using proprietary software to create blueprints specific to your home or business',
              'Equipment selection from Bryant, American Standard, and Trane product lines with appropriate staging and blower configurations',
              'Permit acquisition and inspection coordination for mechanical, gas, and electrical work across all CT municipalities',
              'Professional installation by certified technicians holding Connecticut state licenses for heating, plumbing, and electrical work',
              'Thermostat integration with Ecobee or Honeywell smart thermostats for optimal comfort control',
              'System commissioning with complete startup testing, combustion analysis, and safety verification',
              'Customer education covering operation, maintenance requirements, and warranty information',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#c0392b' }} aria-hidden="true" />
                <span className="text-slate-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mb-4">High-Efficiency Options and Performance Standards</h3>
          <ul className="space-y-2 mb-8">
            {[
              'Condensing technology capturing heat from water vapor in combustion gases for efficient heating',
              'Sealed combustion drawing outside air directly to the burner for improved safety and efficiency',
              'Modulating gas valves adjusting fuel input to match heating demand precisely',
              'Advanced controls including outdoor reset and multi-stage operation for optimal comfort',
              'Rebate eligibility through Energize CT and utility programs reducing installation costs',
              'Lower operating costs: 15–30% fuel savings compared to standard efficiency equipment',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#c0392b' }} aria-hidden="true" />
                <span className="text-slate-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mb-4">Preferred Brands</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {HEATING_BRANDS.map((brand) => (
              <span key={brand} className="px-3 py-1 text-sm rounded-full bg-slate-100 text-slate-700 font-medium border border-slate-200">
                {brand}
              </span>
            ))}
          </div>

          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 mb-6">
            <p className="font-bold text-slate-900 mb-1">24/7 Emergency Furnace Repair</p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Heating system failures don't wait for convenient timing. Call <strong>1-800-995-6266</strong> for
              24/7 emergency repair throughout our Connecticut service areas.
            </p>
            <p className="text-sm mt-2 text-slate-500">Office Hours: Mon–Fri, 8:00 AM – 4:30 PM | Emergency Service: Available 24/7</p>
          </div>

          <p className="text-slate-600 italic text-sm">A Difference You Can See And A Name You Can Trust</p>
        </div>
      }
    />
  );
}
