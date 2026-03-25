import ServicePage from './ServicePage';

export default function FuelOilPage() {
  return (
    <ServicePage
      title="Fuel Oil Delivery"
      subtitle="Reliable Home Heating Oil Delivery — Naugatuck Valley, CT · Certified HOD.0000368"
      heroImage="/rm-images/oil-delivery.jpg"
      heroImageAlt="Ralph Mann & Sons fuel oil delivery — Naugatuck Valley CT"
      content={
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Reliable Heating Oil Delivery in Connecticut's Naugatuck Valley</h2>
          <div className="w-12 h-1 rounded-full mb-6" style={{ backgroundColor: '#c0392b' }} />

          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Ralph Mann & Sons delivers heating oil throughout the Naugatuck Valley with the same commitment to service that has
            defined our family business since 1916. We provide automatic and will-call home heating oil delivery programs that
            keep your home warm while maintaining the personal relationships that matter most to Connecticut homeowners.
          </p>
          <p className="text-slate-600 font-medium mb-8">
            We Are Certified: HOD.0000368 · Emergency Service Available 24/7
          </p>

          {/* Automatic Delivery */}
          <h3 className="text-xl font-bold text-slate-900 mb-3">Automatic Delivery Program</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Our automatic delivery program uses degree-day calculations to schedule your heating oil deliveries before you run low.
            We track weather patterns and your home's consumption history to deliver at the right time.
          </p>
          <p className="font-semibold text-slate-800 mb-2">Automatic delivery customers receive:</p>
          <ul className="space-y-2 mb-8">
            {[
              'Scheduled deliveries based on your actual usage patterns',
              'Priority service during peak winter demand',
              'Service plan options with budget payment plans that smooth seasonal cost fluctuations',
              'Safety inspections during every delivery visit',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-0.5">✓</span>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-slate-600 mb-8">
            Will-call delivery remains available for homeowners who prefer to order fuel on their own schedule. Both options
            receive the same quality fuel and excellent service that CT families have trusted since 1916.
          </p>

          {/* Payment Plans */}
          <h3 className="text-xl font-bold text-slate-900 mb-6">Payment Plans and Discounts</h3>
          <div className="space-y-5 mb-8">
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2">Early Payment Discount</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                For customers who make payment within 10 days of the date of delivery, you may take{' '}
                <strong className="text-slate-900">$.05 (5 cents) off per gallon</strong> of oil delivered.
                The payment must be postmarked or dropped off at our office by the 10th consecutive day from the date of delivery.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2">Senior Citizen Discount</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                For households with a family member over the age of 65 living in the residence, you are entitled to a senior
                discount of <strong className="text-slate-900">$.02 (2 cents) off per gallon</strong>.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2">Prepayment Savings</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                For customers who pay the driver, pay in advance, or leave a credit card on file to be charged at the time of
                each delivery, you are entitled to take a discount of{' '}
                <strong className="text-slate-900">$.10 (10 cents) per gallon</strong>.
              </p>
            </div>
            <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200">
              <h4 className="font-bold text-slate-900 mb-2">Discounts Combined</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Discounts 1 & 2 may be used in conjunction — a total of{' '}
                <strong className="text-slate-900">$.07 per gallon discount</strong> is available depending on the individual situation.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2">Budget Plan</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Spread your payments for oil deliveries out over the season with 10 equal monthly installments running from
                September through June. Should there be a balance at the end of the season, July and August are used for catch-up.
                Please note: discounts cannot be honored for budget plan households.
              </p>
              <p className="text-sm mt-2 font-medium" style={{ color: '#c0392b' }}>
                Call 1-800-995-MANN to request a customized Budget Plan packet by mail.
              </p>
            </div>
          </div>

          <p className="text-slate-600 italic text-sm">A Difference You Can See And A Name You Can Trust</p>
        </div>
      }
    />
  );
}
