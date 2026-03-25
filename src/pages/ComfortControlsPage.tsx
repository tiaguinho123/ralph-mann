import ServicePage from './ServicePage';
import { CheckCircle2 } from 'lucide-react';

// Ralph Mann & Sons — Comfort Controls / Smart Thermostats
// Content based on brands listed on original site: Honeywell, Ecobee, Aprilaire
export default function ComfortControlsPage() {
  return (
    <ServicePage
      title="Comfort Controls & Smart Thermostats"
      subtitle="Honeywell · Ecobee · Aprilaire · Programmable & Smart Thermostat Installation — Connecticut"
      heroImage="/rm-images/web4.jpg"
      heroImageAlt="Ralph Mann & Sons comfort controls and smart thermostat installation — Connecticut"
      content={
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Comfort Controls & Smart Thermostats</h2>
          <div className="w-12 h-1 rounded-full mb-6" style={{ backgroundColor: '#c0392b' }} />

          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Upgrading to a smart thermostat or programmable control system lets you manage your heating and cooling
            from anywhere, save on energy costs, and keep every room exactly the way you like it. Ralph Mann &amp; Sons
            installs and services leading brands including Honeywell, Ecobee, and Aprilaire throughout Connecticut.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mb-4">Brands We Install &amp; Service</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {['Honeywell', 'Ecobee', 'Aprilaire', 'Carrier', 'Bryant', 'American Standard'].map((brand) => (
              <span key={brand} className="px-3 py-1 text-sm rounded-full bg-slate-100 text-slate-700 font-medium border border-slate-200">
                {brand}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-4">Comfort Control Services</h3>
          <ul className="space-y-3 mb-8">
            {[
              'Programmable thermostat installation and programming',
              'Smart Wi-Fi thermostat setup and app configuration',
              'Ecobee and Honeywell certified installation',
              'Zoning systems for multi-room comfort control',
              'Aprilaire whole-home humidity and air quality controls',
              'Thermostat repair and replacement',
              'Integration with existing HVAC systems',
              'Energy usage monitoring and optimization',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#c0392b' }} aria-hidden="true" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Energy Savings</h3>
            <p className="text-slate-600 leading-relaxed">
              Smart and programmable thermostats can reduce heating and cooling costs by 10–20% annually.
              Our technicians will help you choose the right system and configure it for your exact schedule
              and comfort preferences. Call <strong>1-800-995-6266</strong> to schedule an installation.
            </p>
          </div>
        </div>
      }
    />
  );
}
