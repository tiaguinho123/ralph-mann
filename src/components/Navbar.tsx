import React from 'react';
import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

const serviceLinks = [
  { label: 'Plumbing', path: '/plumbing' },
  { label: 'Heating', path: '/heating' },
  { label: 'Air Conditioning', path: '/air-conditioning' },
  { label: 'Standby Generators', path: '/generators' },
  { label: 'Water Heaters', path: '/water-heaters' },
  { label: 'Geothermal', path: '/geothermal' },
  { label: 'Indoor Air Quality', path: '/indoor-air-quality' },
  { label: 'Fuel Oil Delivery', path: '/fuel-oil' },
];

export default function Navbar() {
  const cfg = useSiteConfig();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `inline-flex items-center text-sm font-semibold transition-colors px-1 pb-1 border-b-2 whitespace-nowrap ${
      isActive ? 'text-red-700 border-red-700' : 'text-slate-700 border-transparent hover:text-red-700'
    }`;

  const isServiceActive = serviceLinks.some(s => location.pathname.startsWith(s.path)) || location.pathname.startsWith('/services');

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'border-b border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0" aria-label={`${cfg.businessName} — Home`}>
            <img src="/rm-images/ralph-mann-logo.png" alt="Ralph Mann & Sons logo" className="h-12 w-auto object-contain" loading="eager" />
          </Link>

          {/* ── Desktop nav (lg+) ── */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main navigation">
            <NavLink to="/" end className={navLinkClass}>HOME</NavLink>

            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <Link
                to="/services"
                className={`text-sm font-semibold flex items-center gap-1 pb-1 border-b-2 transition-colors whitespace-nowrap ${
                  isServiceActive ? 'text-red-700 border-red-700' : 'text-slate-700 border-transparent hover:text-red-700'
                }`}
              >
                SERVICES <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </Link>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-50">
                  {serviceLinks.map(s => (
                    <NavLink key={s.path} to={s.path} className={({ isActive }) =>
                      `block px-4 py-2.5 text-sm font-medium transition-colors ${isActive ? 'text-red-700 bg-red-50' : 'text-slate-700 hover:text-red-700 hover:bg-slate-50'}`
                    }>{s.label}</NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/financing" className={navLinkClass}>FINANCING</NavLink>
            <NavLink to="/news-articles" className={navLinkClass}>NEWS &amp; ARTICLES</NavLink>
            <NavLink to="/about-us" className={navLinkClass}>ABOUT US</NavLink>
            <NavLink to="/contact-us" className={navLinkClass}>CONTACT US</NavLink>
          </nav>

          {/* Phone (desktop) + hamburger (mobile/tablet) */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${cfg.phone}`}
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold text-white transition-colors shadow"
              style={{ backgroundColor: '#c0392b' }}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {cfg.phoneFormatted}
            </a>

            {/* Phone icon only on tablet (md) */}
            <a
              href={`tel:${cfg.phone}`}
              className="hidden md:flex lg:hidden items-center gap-2 px-3 py-2 rounded-lg text-sm font-bold text-white"
              style={{ backgroundColor: '#c0392b' }}
              aria-label={`Call ${cfg.phoneFormatted}`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">{cfg.phoneFormatted}</span>
            </a>

            {/* Hamburger — shown on < lg */}
            <button
              className="lg:hidden p-2 text-slate-700 hover:text-red-700 transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile / Tablet drawer (< lg) ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            <NavLink to="/" end className={navLinkClass}>HOME</NavLink>

            {/* Services group */}
            <div>
              <NavLink to="/services" className={navLinkClass}>SERVICES</NavLink>
              <div className="pl-4 mt-1 flex flex-col gap-1 border-l-2 border-slate-100 ml-1">
                {serviceLinks.map(s => (
                  <NavLink key={s.path} to={s.path} className={({ isActive }) =>
                    `text-sm py-1.5 font-medium transition-colors ${isActive ? 'text-red-700' : 'text-slate-600 hover:text-red-700'}`
                  }>{s.label}</NavLink>
                ))}
              </div>
            </div>

            <NavLink to="/financing" className={navLinkClass}>FINANCING</NavLink>
            <NavLink to="/news-articles" className={navLinkClass}>NEWS &amp; ARTICLES</NavLink>
            <NavLink to="/about-us" className={navLinkClass}>ABOUT US</NavLink>
            <NavLink to="/contact-us" className={navLinkClass}>CONTACT US</NavLink>

            <a
              href={`tel:${cfg.phone}`}
              className="mt-3 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white"
              style={{ backgroundColor: '#c0392b' }}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {cfg.phoneFormatted}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
