import ServicePage from './ServicePage';
import { CheckCircle2 } from 'lucide-react';

export default function GeneratorsPage() {
  return (
    <ServicePage
      title="Standby Generators"
      subtitle="Automatic Emergency Standby Generators — Kohler Authorized Installer"
      heroImage="/rm-images/generator.jpg"
      heroImageAlt="Ralph Mann & Sons Kohler standby generator — Connecticut"
      content={
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Standby Generators</h2>
          <div className="w-12 h-1 rounded-full mb-6" style={{ backgroundColor: '#c0392b' }} />

          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Ralph Mann & Sons keeps your electricity running with <strong>Kohler Generators</strong> — automatic
            emergency standby generators to get your family through New England storms.
          </p>

          {/* Real Kohler logo from original site */}
          <div className="mb-8">
            <img
              src="/rm-images/kohler-logo.png"
              alt="Kohler Generators — authorized installer"
              className="h-12 w-auto object-contain"
              loading="lazy"
            />
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-4">Benefits of a Standby Generator</h3>
          <ul className="space-y-3 mb-8">
            {[
              'Ideal for backing up your home',
              'Automatically starts and restores power in seconds — whether you\'re home or away',
              'Powers your home, including critical hard-wired systems like AC, heat, sump pumps, well pumps, security systems and large appliances',
              'Runs on your home\'s natural or liquid propane gas',
              'Delivers high-quality power — won\'t harm your electronics',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#c0392b' }} aria-hidden="true" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mb-4">Full Service — We Do the Entire Job Start to Finish</h3>
          <ul className="space-y-3 mb-8">
            {[
              'Supply concrete pad to set generator on',
              'Electrical panel inspection to determine size of unit for installation',
              'Gas piping for both natural and liquid propane units',
              'Installation of the transfer switch and load control module',
              'Wire generator and automatic transfer switch',
              'Factory start-up and testing',
              'Maintenance plans available',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#c0392b' }} aria-hidden="true" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mb-4">Automatic Generator Service and Repair</h3>
          <p className="text-slate-600 leading-relaxed mb-8">
            In the unlikely event that your generator develops a problem or simply stops working, we're available
            24/7 to get you up and running again.
          </p>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-6">
            <h3 className="font-bold text-slate-900 mb-2">Cost of Automatic Whole House Generators</h3>
            <p className="text-slate-600 leading-relaxed">
              Standby generators for the average home cost between{' '}
              <strong className="text-slate-900">$10,000 and $15,000 with complete installation</strong>, and
              Ralph Mann & Sons, Inc. is happy to offer <strong>low-interest financing</strong> to get you
              protected right away.
            </p>
          </div>

          <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
            <p className="font-bold text-slate-900 mb-1">Don't wait until you see storms on the weather forecast.</p>
            <p className="text-slate-600 text-sm">
              Be proactive and contact us today for a free, no-obligation recommendation and cost estimate.
              Call <strong>1-800-995-MANN</strong>.
            </p>
          </div>
        </div>
      }
    />
  );
}
