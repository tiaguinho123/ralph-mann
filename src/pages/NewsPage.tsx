import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';

// All articles extracted from ralphmannandsons.com/news-articles/
const articles = [
  { title: 'Protect Your Heating Investment with Comprehensive Boiler Maintenance', date: 'Feb 27, 2026', url: 'https://ralphmannandsons.com/residential-boiler-maintenance-efficient-solutions-ct/', excerpt: 'Protect Your Heating Investment with Comprehensive Boiler Maintenance. Professional boiler maintenance from Ralph Mann & Sons...' },
  { title: 'Why a Google Review Is So Important to a Small Business Like Ralph Mann & Sons', date: 'Feb 27, 2026', url: 'https://ralphmannandsons.com/ralph-mann-and-sons-google-reviews/', excerpt: 'For a local, family-owned business like Ralph Mann & Sons, a Google review is one of the most valuable things a customer can do...' },
  { title: 'Tips to Safely Maintain Your Generator', date: 'Feb 6, 2026', url: 'https://ralphmannandsons.com/tips-to-safely-maintain-your-generator/', excerpt: 'A properly maintained generator helps keep your family safe during a storm...' },
  { title: 'Indoor Air Quality Services for Winter: Humidifiers, Filters, and Ventilation', date: 'Jan 26, 2026', url: 'https://ralphmannandsons.com/indoor-air-quality-services-for-winter-humidifiers-filters-and-ventilation/', excerpt: 'When winter hits and temperatures drop, most of us button up our homes tight to keep the cold out and the warmth in...' },
  { title: 'No Heat–Now What??', date: 'Jan 12, 2026', url: 'https://ralphmannandsons.com/no-heat-now-what/', excerpt: 'Heating Emergency: Things to Check Yourself Before Calling for HVAC System Help. There\'s nothing worse than waking up to a cold house...' },
  { title: 'Deadline Extended!! Heat Pump Special Offer', date: 'Dec 29, 2025', url: 'https://ralphmannandsons.com/deadline-extended-heat-pump-special-offer/', excerpt: '0.99% Heat Pump Financing Now Available Through January 31, 2026. Thinking about upgrading your HVAC system?...' },
  { title: 'Furnace Turns On But No Heat', date: 'Dec 24, 2025', url: 'https://ralphmannandsons.com/furnace-turns-on-but-no-heat-ralph-mann-sons/', excerpt: 'You hear your furnace kick on. The blower\'s running. But your home isn\'t getting warm...' },
  { title: 'Frozen Pipe Prevention & Thawing Tips', date: 'Dec 17, 2025', url: 'https://ralphmannandsons.com/frozen-pipe-prevention-thawing-tips-ralph-mann-sons/', excerpt: 'What to Do If Your Pipes Freeze — and How to Prevent Frozen Pipes. Frozen pipes can cause serious damage to your home...' },
  { title: 'How to Keep Every Room Warm Without Cranking the Thermostat', date: 'Dec 5, 2025', url: 'https://ralphmannandsons.com/how-to-keep-every-room-warm-without-cranking-the-thermostat/', excerpt: 'Optimize heat distribution. Use fans strategically. Ceiling fans should spin clockwise on low in winter...' },
  { title: 'Top Five Signs Your Furnace Needs Service Before Winter', date: 'Nov 7, 2025', url: 'https://ralphmannandsons.com/top-five-signs-your-furnace-needs-service-before-winter/', excerpt: 'As temperatures drop, your furnace becomes the heart of your home\'s comfort. The last thing you want is a breakdown...' },
  { title: 'Heat Pump Savings', date: 'Nov 3, 2025', url: 'https://ralphmannandsons.com/heat-pump-savings/', excerpt: '0.99% Smart-E Loan Special Heat Pump Offer. For a limited time, enjoy incredible savings on heat pump installation...' },
  { title: 'Preventing Water Heater Disasters', date: 'Oct 31, 2025', url: 'https://ralphmannandsons.com/preventing-water-heater-disasters/', excerpt: 'Your water heater works quietly in the background — until it doesn\'t. Fortunately, most water heaters give early warning signs...' },
  { title: 'WHY A LOWER PRICE ISN\'T ALWAYS THE BETTER DEAL!!', date: 'Oct 13, 2025', url: 'https://ralphmannandsons.com/why-a-lower-price-isnt-always-the-better-deal/', excerpt: 'Comparison Shopping? Here\'s What to Know Before You Cringe at a Quote…' },
  { title: 'WHY YOU SHOULD NEVER PROCRASTINATE HVAC SERVICES', date: 'Oct 13, 2025', url: 'https://ralphmannandsons.com/why-you-should-never-procrastinate-hvac-services/', excerpt: 'When it comes to your home heating system, putting off service can lead to costly repairs and uncomfortable living conditions...' },
  { title: 'TRENDING IN HVAC: SAY GOODBYE TO OIL!', date: 'Oct 13, 2025', url: 'https://ralphmannandsons.com/trending-in-hvac-say-goodbye-to-oil/', excerpt: 'More homeowners are making the switch from oil heating — and the options keep growing: Oil to natural gas, propane, heat pump...' },
  { title: 'Heat Pumps 101: Efficient Heating and Cooling', date: 'Oct 13, 2025', url: 'https://ralphmannandsons.com/heat-pumps-101-efficient-heating-and-cooling/', excerpt: 'Looking for a single system to both heat and cool your home? Heat pump installation might be the right choice for you...' },
  { title: 'Cleaner, Healthier Air with Air Scrubber Plus®', date: 'May 4, 2020', url: 'https://ralphmannandsons.com/cleaner-healthier-air-with-air-scrubber-plus/', excerpt: 'We are so excited to offer Air Scrubber Plus®, a seamless, fully integrated or portable air purification system...' },
  { title: 'Pedaling for a Great Cause Again!', date: 'Aug 19, 2019', url: 'https://ralphmannandsons.com/pedaling-for-a-great-cause-again/', excerpt: 'For many years now, my family has been participating in an important cause...' },
  { title: 'Spring Maintenance Tip: Service Your AC Unit Now!', date: 'Mar 20, 2019', url: 'https://ralphmannandsons.com/spring-maintenance-service-your-ac-unit/', excerpt: 'It\'s time to have your cooling system professionally maintained. Over the winter, your cooling system has been sitting idle...' },
  { title: 'Did You Lose Power? CT Storms Wreak Havoc on Many!', date: 'May 18, 2018', url: 'https://ralphmannandsons.com/did-you-lose-power-ct-storms-wreak-havoc-on-many/', excerpt: 'The Connecticut spring storms that occurred on May 15, 2018 were frightening...' },
  { title: 'Celebrate 100 Years With Us!', date: 'Sep 8, 2016', url: 'https://ralphmannandsons.com/celebrate-100-years-us/', excerpt: 'For 100 years, Ralph Mann & Sons has been committed to reliable and personalized customer service...' },
];

export default function NewsPage() {
  const { colors } = useSiteConfig();

  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop"
          alt="Ralph Mann & Sons — News & Articles"
          className="w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white uppercase">News & Articles</h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-slate-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-red-700 transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-700 font-medium">News & Articles</span>
          </nav>
        </div>
      </div>

      {/* Article List */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">News & Articles</h2>
          <p className="text-slate-500 mb-2">Help is only a phone call away! <strong>800-995-6266</strong></p>
          <div className="w-12 h-1 rounded-full mb-10" style={{ backgroundColor: colors.primaryHex }} />

          <div className="space-y-6">
            {articles.map((article, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="border-b border-slate-100 pb-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">{article.date}</p>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline transition-colors"
                    style={{ color: colors.primaryHex }}
                  >
                    {article.title}
                  </a>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">{article.excerpt}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold hover:underline"
                  style={{ color: colors.primaryHex }}
                >
                  Read More →
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
