import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';

// High-conversion section order:
// 1. Hero (outcome-focused headline + dual CTA + emergency strip)
// 2. TrustBadges (immediate credibility — stats + real cert logos)
// 3. Services (what we do)
// 4. Testimonials (social proof right after services, not buried at bottom)
// 5. WhyChooseUs (deeper trust + story)
// 6. FAQ (objection handling before the ask)
// 7. ContactForm (final CTA)
export default function HomePage() {
  return (
    <div>
      <Hero />
      <TrustBadges />
      <Services />
      <Testimonials />
      <WhyChooseUs />
      <FAQ />
      <ContactForm />
    </div>
  );
}
