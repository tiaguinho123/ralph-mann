import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

export default function Testimonials() {
  const { testimonials, colors } = useSiteConfig();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = back

  const go = useCallback(
    (next: number) => {
      setDirection(next > current ? 1 : -1);
      setCurrent((next + testimonials.length) % testimonials.length);
    },
    [current, testimonials.length],
  );

  // Auto-advance every 6 s
  useEffect(() => {
    const id = setInterval(() => go(current + 1), 6000);
    return () => clearInterval(id);
  }, [current, go]);

  const t = testimonials[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section className="py-20 bg-white" aria-labelledby="reviews-heading">
      {/* Banner photo */}
      <div className="relative h-48 md:h-64 overflow-hidden mb-16">
        <img
          src="/rm-images/testimonials.jpg"
          alt="Ralph Mann & Sons — what our customers say"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-4">
            <p className="font-semibold tracking-wide uppercase text-sm text-white/80 mb-2">
              What Our Customers Say
            </p>
            <h2 id="reviews-heading" className="text-3xl font-bold text-white">
              Trusted by Connecticut Families &amp; Businesses
            </h2>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Slide */}
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="bg-slate-50 border border-slate-100 shadow-sm rounded-3xl p-8 md:p-10 relative"
              >
                {/* Big decorative quote */}
                <Quote
                  className="absolute top-8 right-8 w-12 h-12 opacity-10"
                  style={{ color: colors.primaryHex }}
                  aria-hidden="true"
                />

                {/* Stars */}
                <div className="flex gap-1 mb-5" aria-label="5 star review">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-slate-700 text-lg leading-relaxed italic mb-8">
                  "{t.content}"
                </p>

                {/* Reviewer info */}
                <div className="flex items-center gap-4">
                  {/* Avatar initial */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                    style={{ backgroundColor: colors.primaryHex }}
                    aria-hidden="true"
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.town}</p>
                    <p className="text-sm font-semibold mt-0.5" style={{ color: colors.primaryHex }}>
                      {t.service}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrow buttons */}
          <button
            onClick={() => go(current - 1)}
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>
          <button
            onClick={() => go(current + 1)}
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Review slides">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              onClick={() => go(i)}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: i === current ? '2rem' : '0.5rem',
                backgroundColor: i === current ? colors.primaryHex : '#cbd5e1',
              }}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <p className="text-center text-sm text-slate-400 mt-3">
          {current + 1} / {testimonials.length}
        </p>
      </div>
    </section>
  );
}
