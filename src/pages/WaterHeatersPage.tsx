import ServicePage from './ServicePage';
import { CheckCircle2 } from 'lucide-react';

export default function WaterHeatersPage() {
  return (
    <ServicePage
      title="Water Heater Replacement"
      subtitle="Connecticut Water Heater Replacement — Same-Day Service Available — Since 1916"
      heroImage="/rm-images/water-heater.jpg"
      heroImageAlt="Ralph Mann & Sons water heater replacement — Connecticut"
      content={
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Connecticut Water Heater Replacement Done Right the First Time</h2>
          <div className="w-12 h-1 rounded-full mb-6" style={{ backgroundColor: '#c0392b' }} />

          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Ralph Mann & Sons provides comprehensive water heater replacement and installation services throughout
            New Haven and Fairfield Counties. Since 1916, four generations of the Mann family have helped
            Connecticut homeowners achieve reliable, energy-efficient hot water through expert design, quality
            installation, and honest pricing.
          </p>

          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 mb-8">
            <p className="font-semibold text-slate-900 mb-1">Same-Day Service Available</p>
            <p className="text-slate-600 text-sm leading-relaxed">
              We provide same-day water heater replacement service for most emergencies in Ansonia, Beacon Falls,
              Derby, Shelton, Seymour, Naugatuck, Orange, Oxford, Woodbridge, Milford, Fairfield, Westport,
              Wilton, and Darien. Complete replacement typically takes <strong>2–4 hours</strong> from arrival
              to hot water restoration.
            </p>
            <p className="text-sm font-semibold mt-2" style={{ color: '#c0392b' }}>
              Call Now for Same-Day Service: 1-800-995-MANN
            </p>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-4">Water Heater Options We Install & Service</h3>
          <ul className="space-y-3 mb-8">
            {[
              { title: 'Standard Tank Water Heaters', desc: 'Bradford White and A.O. Smith — natural gas, propane, electric, or oil. 40–80 gallon storage.' },
              { title: 'Tankless Water Heaters', desc: 'Rinnai, Navien, and Rheem — endless hot water on demand. Compact wall-mounted units.' },
              { title: 'Heat Pump Water Heaters', desc: 'A.O. Smith and LG — cut water heating costs up to 60%. Qualify for Energize CT rebates ($500–$750).' },
              { title: 'Indirect-Fired Water Heaters', desc: 'Pair with your boiler for exceptional longevity and recovery rates. Ideal for homes with hydronic heating.' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#c0392b' }} aria-hidden="true" />
                <div>
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mb-4">Signs It's Time to Replace Your Water Heater</h3>
          <ul className="space-y-2 mb-8">
            {[
              'Age exceeds 10 years and you\'re facing a repair cost above $400',
              'Rust-colored water indicates internal tank corrosion',
              'Moisture or pooling water around the base signals tank failure',
              'Insufficient hot water despite thermostat adjustments',
              'Rumbling or popping sounds — sediment accumulation reducing efficiency',
              'Rising energy bills suggest your water heater isn\'t operating efficiently',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#c0392b' }} aria-hidden="true" />
                <span className="text-slate-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 mb-6">
            <h3 className="font-bold text-slate-900 mb-2">Pricing & Rebates</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-2">
              Our fair hourly pricing is <strong>$195/hour</strong> for actual work performed — materials are
              listed separately for complete transparency.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              High-efficiency models qualify for <strong>Energize CT rebates</strong> (heat pump water heaters:
              $500–$750) and federal tax credits (up to 30% under the Inflation Reduction Act). Financing options
              through the Connecticut Green Bank available — as low as 0.99% interest, up to 10 years.
            </p>
          </div>

          <p className="text-slate-600 italic text-sm">A Difference You Can See And A Name You Can Trust</p>
        </div>
      }
    />
  );
}
