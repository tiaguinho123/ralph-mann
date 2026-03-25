import ServicePage from './ServicePage';
import { CheckCircle2 } from 'lucide-react';

export default function GeothermalPage() {
  return (
    <ServicePage
      title="Geothermal Heat and Cooling Installation"
      subtitle="IGSHPA-Certified Specialists · Naugatuck Valley · Litchfield County · Fairfield County, CT"
      heroImage="/rm-images/geo.jpg"
      heroImageAlt="Ralph Mann & Sons geothermal installation — Connecticut"
      content={
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Connecticut Geothermal Systems Designed for Performance</h2>
          <div className="w-12 h-1 rounded-full mb-6" style={{ backgroundColor: '#c0392b' }} />

          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Ralph Mann & Sons designs and installs geothermal heat pumps for Connecticut homeowners throughout Naugatuck Valley,
            Litchfield County, and Fairfield County. Our IGSHPA-certified specialists harness geothermal power from deep inside the
            earth to deliver efficient heating and cooling systems that eliminate oil and propane dependence. We serve residential
            retrofits, new construction, and multi-family properties in Ansonia, Stratford, Shelton, and surrounding communities.
          </p>

          <p className="text-slate-600 leading-relaxed mb-8">
            Geothermal heat pumps deliver year-round comfort with substantially lower operating costs than oil, propane, or
            conventional air conditioning. Ground-source systems achieve <strong>COP ratings of 3.0–4.5 and EER ratings of 15–25</strong>,
            reducing your heating and cooling expenses while minimizing greenhouse gas emissions.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mb-4">Who Can Use Geothermal Energy Systems</h3>
          <ul className="space-y-3 mb-8">
            {[
              { title: 'Replacing Oil or Propane', desc: 'Eliminate fuel oil and propane dependence while adding central air conditioning where natural gas is not available. Reduce operating costs 50–70%.' },
              { title: 'New Construction & Renovations', desc: 'Loop field installation integrates seamlessly during construction, maximizing ground-source efficiency.' },
              { title: 'Uneven Comfort Issues', desc: 'Ground-source systems maintain consistent temperatures. Integrated dehumidification controls summer humidity without overcooling.' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#c0392b' }} aria-hidden="true" />
                <div>
                  <p className="font-bold text-slate-900">{item.title}</p>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mb-4">Loop Field Options</h3>
          <ul className="space-y-3 mb-8">
            {[
              { title: 'Closed-Loop Vertical Bores', desc: 'Drilled 150–400 feet deep. Preferred for small lots where land area limits horizontal options.' },
              { title: 'Closed-Loop Horizontal Trenches', desc: 'Requires 400–600 feet of pipe per ton in 4–6 foot deep trenches. Suited for properties with adequate land area.' },
              { title: 'Open-Loop Well Systems', desc: 'Uses ground water from geothermal wells as direct heat exchange medium. Requires adequate flow rates and water quality.' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#c0392b' }} aria-hidden="true" />
                <div>
                  <p className="font-bold text-slate-900">{item.title}</p>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mb-4">Performance Benefits</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'Exceptional Efficiency', desc: 'COP 3.0–4.5 and EER 15–25. Every dollar spent on electricity delivers 3–4.5 dollars worth of heating or cooling.' },
              { title: 'Substantial Savings', desc: 'Typically reduce heating and cooling costs 50–70% compared to oil or propane plus conventional air conditioning.' },
              { title: 'Stable Comfort', desc: 'Ground temperatures remain constant 50–55°F year-round, eliminating performance degradation during temperature extremes.' },
              { title: 'Quiet Operation', desc: 'Water-to-air and water-to-water systems operate quietly without outdoor compressor noise common in conventional equipment.' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <p className="font-bold text-slate-900 mb-1">{item.title}</p>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-2">Ready to Start Your Geothermal Project?</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Ralph Mann & Sons provides same-day site assessments in priority Connecticut towns including Ansonia, Waterbury, and Shelton.
              We conduct virtual feasibility reviews for properties throughout our service area with proposal turnaround in 1–3 business days.
              Call <strong>1-800-995-MANN</strong> to schedule your consultation.
            </p>
          </div>
        </div>
      }
    />
  );
}
