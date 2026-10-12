import React, { useState, useEffect } from 'react';
import CrestLogo from './CrestLogo';
import { Calendar, Phone, MessageSquare, MapPin } from 'lucide-react';

export default function Navbar({ onBookClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'The Experience', href: '#experience' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#footer-location' },
    { name: 'Contact', href: '#booking' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#071710]/95 backdrop-blur-md text-ivory shadow-luxury border-b border-gold/30 py-3.5'
          : 'bg-[#071710]/85 backdrop-blur-sm text-ivory border-b border-gold/15 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Official PANACEA Brand Logo */}
        <a href="#" className="flex items-center" aria-label="PANACEA DENTAL CARE Chromepet">
          <CrestLogo className={scrolled ? "h-9 sm:h-11 md:h-12" : "h-10 sm:h-12 md:h-14"} />
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.2em] text-ivory/85 hover:text-gold transition-colors duration-300 relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Click to Call */}
          <a
            href="tel:+917401675675"
            className="p-2.5 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-navy transition-all duration-300 flex items-center gap-1.5"
            title="Call Clinic: 07401 675675"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden xl:inline text-xs tracking-wider font-sans font-medium">07401 675675</span>
          </a>

          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/917401675675?text=Hello%20Panacea%20Dental%20Care,%20I%20would%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-gold/40 text-gold hover:bg-gold/20 transition-all duration-300"
            title="WhatsApp Appointment"
          >
            <MessageSquare className="w-4 h-4 text-gold" />
          </a>

          {/* Book Appointment CTA */}
          <button
            onClick={onBookClick}
            className="relative group overflow-hidden px-5 py-2.5 text-xs tracking-[0.2em] uppercase font-medium rounded-sm border border-gold bg-gold text-navy hover:bg-gold-light hover:shadow-gold-glow transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              Book Appointment
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gold focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-dark/98 backdrop-blur-xl border-b border-gold/20 px-6 py-8 text-ivory animate-fadeIn">
          <nav className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.25em] text-ivory/80 hover:text-gold py-1.5"
              >
                {link.name}
              </a>
            ))}

            {/* Quick Contact Details in Mobile Menu */}
            <div className="pt-4 border-t border-gold/20 flex flex-col gap-3">
              <div className="text-xs text-ivory/70 flex items-center justify-center gap-1.5 mb-1 font-sans">
                <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>VOC Street, Chromepet, Chennai 600044</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+917401675675"
                  className="py-2.5 px-3 rounded-sm border border-gold/40 text-gold text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-1.5 hover:bg-gold/10"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  href="https://wa.me/917401675675?text=Hello%20Panacea%20Dental%20Care,%20I%20would%20like%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-sm border border-gold/40 text-gold text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-1.5 hover:bg-gold/10"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick?.();
                }}
                className="w-full py-3 bg-gold text-navy text-xs uppercase tracking-[0.2em] font-medium rounded-sm"
              >
                Book an Appointment
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
