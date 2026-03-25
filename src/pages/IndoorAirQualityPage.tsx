import ServicePage from './ServicePage';
import { CheckCircle2 } from 'lucide-react';

export default function IndoorAirQualityPage() {
  return (
    <ServicePage
      title="Indoor Air Quality (IAQ)"
      subtitle="Humidifiers · Air Filters · Ventilation · Air Purifiers — Connecticut"
      heroImage="/rm-images/web4.jpg"
      heroImageAlt="Ralph Mann & Sons indoor air quality — Connecticut"
      content={
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Indoor Air Quality Services for Winter: Humidifiers, Filters, and Ventilation</h2>
          <div className="w-12 h-1 rounded-full mb-6" style={{ backgroundColor: '#c0392b' }} />

          <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
            Have you ever moved around a room in the winter knowing you are about to get shocked when you touch
            something? That annoying static electricity is actually a sign of a bigger issue — dry indoor air.
          </p>

          <p className="text-slate-600 leading-relaxed mb-8">
            When winter hits and temperatures drop, most of us button up our homes tight to keep the cold out and
            the warmth in. You're also trapping indoor pollutants and creating uncomfortably dry air. Poor indoor
            air quality during winter can lead to dry skin, irritated sinuses, headaches, dizziness, and make
            asthma symptoms worse.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mb-3">Keep Humidity in Check with a Humidifier</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            The Environmental Protection Agency (EPA) suggests keeping indoor humidity between{' '}
            <strong>30–50%</strong>. Staying in that sweet spot helps reduce respiratory irritation, prevents
            mold growth, protects your furniture from cracking, and makes your home more comfortable overall.
            Options include portable units for individual rooms or whole-home systems that integrate right
            into your HVAC system.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mb-3">Upgrade Your Air Filter and Consider an Air Purifier</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            Look for a filter with a MERV rating between <strong>8 and 13</strong> — these capture dust,
            pollen, pet dander, dust mites, and volatile organic compounds (VOCs). Consider installing air
            purification systems with UV technology for even cleaner air. Replace your air filter every
            1–3 months.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mb-3">Ventilation and Duct Cleaning</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            According to the American Lung Association, the air inside your home can actually be more polluted
            than outdoor air. Professional duct cleaning can remove accumulated debris and contaminants hiding
            in your air duct system.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            For newer, energy-efficient homes, consider <strong>Energy Recovery Ventilators (ERVs)</strong> or{' '}
            <strong>Heat Recovery Ventilators (HRVs)</strong> — these bring in fresh air while keeping your
            heat where it belongs: inside.
          </p>

          <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 mb-6">
            <h3 className="font-bold text-slate-900 mb-2">When to Call in the Pros</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              An experienced HVAC company can assess your air quality concerns and recommend solutions
              tailored to your home — IAQ testing, air purifier installation, duct cleaning, humidity
              control systems, and advanced filter upgrades.
            </p>
          </div>

          <ul className="space-y-2 mb-8">
            {[
              'Whole-home humidifier installation',
              'MERV 8–13 filter upgrades',
              'Air purifier with UV technology installation',
              'Duct cleaning',
              'ERV / HRV ventilation systems',
              'IAQ testing and assessment',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#c0392b' }} aria-hidden="true" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-slate-600 font-medium">
            Call Us Today: <strong>1-800-995-MANN</strong>
          </p>
        </div>
      }
    />
  );
}
