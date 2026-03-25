import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';

// Real social media links from ralphmannandsons.com
const SOCIAL_LINKS = [
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://www.facebook.com/Ralph-Mann-Sons-Inc-193271374050900',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/ralphmannandsons/',
  },
  {
    icon: Youtube,
    label: 'YouTube',
    href: 'https://www.youtube.com/@RalphMannandSons',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/ralphmannandsons/',
  },
];

export default function Footer() {
  const {
    businessName, colors, phone, phoneFormatted,
    email, address, hours, license, footerTagline, footerAwards,
    serviceAreaTowns,
  } = useSiteConfig();

  return (
    <footer className="border-t border-slate-800" id="footer" style={{ backgroundColor: colors.dark }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand + Social */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center gap-3 mb-6">
              <img
                src="/rm-images/ralph-mann-logo.png"
                alt="Ralph Mann & Sons logo"
                className="h-10 w-auto object-contain brightness-200"
              />
            </Link>
            <p className="text-slate-400 max-w-sm mb-5 leading-relaxed text-sm">{footerTagline}</p>

            {/* Social media icons — directly from ralphmannandsons.com */}
            <div className="flex gap-3 mb-5">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${businessName} on ${label}`}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                  onMouseOver={e => (e.currentTarget.style.backgroundColor = colors.primaryHex)}
                  onMouseOut={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)')}
                >
                  <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                </a>
              ))}
            </div>

            <p className="text-xs text-slate-500 mb-1">{license}</p>
            <p className="text-xs text-slate-500">© {new Date().getFullYear()} {businessName}. All rights reserved.</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Contact</h4>
            <ul className="space-y-5 text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" style={{ color: colors.primaryHex }} aria-hidden="true" />
                <span className="text-sm">{address.street}<br />{address.city}, {address.state} {address.zip}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0" style={{ color: colors.primaryHex }} aria-hidden="true" />
                <a href={`tel:${phone}`} className="hover:text-white transition-colors font-semibold">{phoneFormatted}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0" style={{ color: colors.primaryHex }} aria-hidden="true" />
                <a href={`mailto:${email}`} className="hover:text-white transition-colors text-sm">{email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 shrink-0 mt-0.5" style={{ color: colors.primaryHex }} aria-hidden="true" />
                <div className="text-sm">
                  <p>{hours.weekdays}</p>
                  <p>{hours.saturday}</p>
                  {hours.emergency && (
                    <p className="font-semibold mt-1" style={{ color: colors.primaryHex }}>Emergency: Always Available</p>
                  )}
                </div>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Service Area</h4>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2" aria-label="Towns we serve">
              {serviceAreaTowns.map((town) => (
                <li key={town}>
                  <Link to="/contact-us" className="text-sm text-slate-400 hover:text-amber-400 transition-colors">
                    {town}, CT
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 mt-4">
              Don't see your town?{' '}
              <a href={`tel:${phone}`} className="hover:opacity-80" style={{ color: colors.primaryHex }}>
                Call us
              </a>{' '}
              — we likely serve it.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{footerAwards}</p>
          <div className="flex gap-6">
            <Link to="/contact-us" className="hover:text-white transition-colors">Contact Us</Link>
            <Link to="/about-us" className="hover:text-white transition-colors">About Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
