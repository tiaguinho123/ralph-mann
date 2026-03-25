import ServicePage from './ServicePage';
import { CheckCircle2 } from 'lucide-react';

export default function AirConditioningPage() {
  return (
    <ServicePage
      title="Air Conditioning Contractor"
      subtitle="Residential and Commercial HVAC — Ansonia, Orange, Woodbridge, Fairfield, Weston, Westport, Newtown CT"
      heroImage="/rm-images/air-conditioning.jpg"
      heroImageAlt="Ralph Mann & Sons air conditioning service — Ansonia CT"
      content={
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Air Conditioning Contractor</h2>
          <div className="w-12 h-1 rounded-full mb-6" style={{ backgroundColor: '#c0392b' }} />

          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            At Ralph Mann & Sons, Inc., we would like the chance to install the right piece of AC equipment for home or
            business owners in Ansonia, Orange, Woodbridge, Fairfield, Weston, Westport, Newtown, CT, and all across
            the state. An energy-efficient air conditioning system installation can start with a brand-new system or a
            replacement of an older system. Our professional air conditioning contractors can help you make important
            decisions regarding your air conditioning system. Let us put our 100+ years of experience to work for you!
          </p>

          {/* Installation Process */}
          <h3 className="text-xl font-bold text-slate-900 mb-4">Air Conditioning Installation Process</h3>
          <p className="text-slate-600 mb-3">What we will do:</p>
          <ol className="space-y-2 mb-8 list-decimal list-inside text-slate-700">
            <li>Visit your house</li>
            <li>Discuss your AC needs including areas to condition, types of systems to consider, & efficiency</li>
            <li>Design the system, including load calculation, equipment selection, duct layout, and number of zones</li>
            <li>Finalize the air conditioning plan, complete with pricing information</li>
          </ol>

          {/* Warning Signs */}
          <h3 className="text-xl font-bold text-slate-900 mb-4">Signs That You Need an Air Conditioning Contractor</h3>
          <ul className="space-y-3 mb-8">
            {[
              { title: 'Weak, Warm, or No Airflow', desc: 'Could be a sign of a leak or a compressor issue.' },
              { title: 'Frequent Cycles', desc: 'Cycling on and off too frequently can stress your system and drive energy bills up.' },
              { title: 'High Humidity Levels', desc: 'Your AC should pull humidity from the air — sticky indoor air may mean the system is not functioning properly.' },
              { title: 'Unusual Noises or Smells', desc: 'Grinding, squealing, or scraping noises, or foul smells from your vents.' },
              { title: 'Water Leaks', desc: 'Excessive moisture or puddling around your unit requires prompt attention.' },
              { title: 'Increased Energy Bills', desc: 'Unexplained increases may indicate your system is no longer running efficiently.' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#c0392b' }} aria-hidden="true" />
                <span className="text-slate-700"><strong>{item.title}:</strong> {item.desc}</span>
              </li>
            ))}
          </ul>

          {/* Preferred Brands */}
          <h3 className="text-xl font-bold text-slate-900 mb-4">Preferred Brands</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {['American Standard', 'Water Furnace', 'Midea', 'Weil-McLain', 'Fujitsu', 'Trane', 'Honeywell', 'Aprilaire', 'Bryant', 'LG'].map((brand) => (
              <span key={brand} className="px-3 py-1 text-sm rounded-full bg-slate-100 text-slate-700 font-medium border border-slate-200">
                {brand}
              </span>
            ))}
          </div>

          {/* Real testimonial */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 italic">
            <p className="text-slate-600 leading-relaxed mb-3">
              "We recently had all of our HVAC equipment replaced, and the experience was excellent from start to finish.
              The team was professional, efficient, and knowledgeable. The installation was done on schedule, with great
              attention to detail, and the crew left everything clean and organized. Our new system is working beautifully,
              and we've already noticed a big improvement in comfort and efficiency. I highly recommend Ralph Mann to anyone
              in need of HVAC services."
            </p>
            <p className="text-sm font-semibold text-slate-800">— The Surreybrook School, Bethany, CT</p>
          </div>
        </div>
      }
    />
  );
}
