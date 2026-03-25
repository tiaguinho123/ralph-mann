import ServicePage from './ServicePage';
import { CheckCircle2 } from 'lucide-react';

export default function PlumbingPage() {
  return (
    <ServicePage
      title="Residential & Commercial Plumbing"
      subtitle="Licensed Plumber — Ansonia, Orange, Woodbridge, Fairfield, Weston, Westport, Newtown CT"
      heroImage="/rm-images/plumber.jpg"
      heroImageAlt="Ralph Mann & Sons plumbing service — Ansonia CT"
      content={
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Residential & Commercial Plumbing Services</h2>
          <div className="w-12 h-1 rounded-full mb-6" style={{ backgroundColor: '#c0392b' }} />
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Ralph Mann & Sons, Inc. is a licensed and insured plumber serving homeowners and businesses throughout
            Connecticut since 1916. Our licensed team provides trusted plumbing services with reliable comfort,
            quality craftsmanship, and honest pricing.
          </p>
          <p className="text-slate-600 font-medium mb-4">CT License: PLM.0203557-P1</p>

          <h3 className="text-xl font-bold text-slate-900 mb-4">Plumbing Services We Provide:</h3>
          <ul className="space-y-3 mb-8">
            {[
              'Clogged drains, sinks and toilet repairs',
              'Leaky pipes repair and replacement',
              'Gas hookups',
              'Gas line leak repair',
              'Hot water heater installation and repair',
              'New AquaPEX piping',
              'Kitchen and bathroom fixture remodeling and installation',
              'Sump pump installation',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#c0392b' }} aria-hidden="true" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-slate-600 italic text-sm">A Difference You Can See And A Name You Can Trust</p>
        </div>
      }
    />
  );
}
