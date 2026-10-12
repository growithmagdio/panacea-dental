import React, { useState } from 'react';
import CrestLogo from '../components/CrestLogo';
import { MapPin, Phone, Clock, MessageSquare, ExternalLink, Navigation } from 'lucide-react';

export default function Footer() {
  const [mapError, setMapError] = useState(false);

  // Verified Google Maps Listing URL supplied by client
  const googleMapsListingUrl = "https://www.google.com/maps/place/PANACEA+DENTAL+CARE/@12.954425,80.0989591,14z/data=!4m10!1m2!2m1!1sdental+clinic+chrompet!3m6!1s0x3a525e5264a020b1:0x2a0a6f4ef3b3372a!8m2!3d12.9493044!4d80.1451159!15sChZkZW50YWwgY2xpbmljIGNocm9tcGV0WhgiFmRlbnRhbCBjbGluaWMgY2hyb21wZXSSAQ1kZW50YWxfY2xpbmlj4AEA!16s%2Fg%2F11dx97_0v9";
  
  // Directions navigation link
  const getDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=12.9493044,80.1451159";

  return (
    <footer className="relative bg-navy-dark text-ivory pt-20 pb-12 border-t border-gold/30 overflow-hidden">
      {/* Top Ornamental Gold Hairline */}
      <div className="absolute top-0 left-0 right-0 gold-hairline opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-gold/20">
          
          {/* Brand & Clinic Column */}
          <div className="md:col-span-4 flex flex-col items-start">
            <a href="#" className="inline-block" aria-label="PANACEA DENTAL CARE">
              <CrestLogo variant="footer" />
            </a>
            
            <p className="font-sans text-xs text-ivory/75 font-light leading-relaxed mt-6 mb-8 max-w-sm">
              PANACEA DENTAL CARE delivers bespoke porcelain veneer design, precision implants, root canal therapy, and smile architecture in Chromepet, Chennai.
            </p>

            {/* Direct Action Badges */}
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+917401675675"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-sm border border-gold/40 text-gold hover:bg-gold hover:text-navy text-xs tracking-wider uppercase font-medium transition-all"
                title="Call 07401 675675"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Clinic</span>
              </a>

              <a
                href="https://wa.me/917401675675?text=Hello%20Panacea%20Dental%20Care,%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-sm border border-gold/40 text-gold hover:bg-gold hover:text-navy text-xs tracking-wider uppercase font-medium transition-all"
                title="WhatsApp Consultation"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={googleMapsListingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-sm border border-gold/40 text-gold hover:bg-gold hover:text-navy text-xs tracking-wider uppercase font-medium transition-all"
                title="View on Google Maps"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Location & Hours */}
          <div className="md:col-span-4 flex flex-col gap-5 text-xs font-sans text-ivory/80">
            <span className="text-gold uppercase tracking-ultra font-medium text-xs mb-1">
              Clinic Location &amp; Hours
            </span>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <strong className="block text-ivory font-medium text-sm mb-1">Address</strong>
                <span className="leading-relaxed block text-ivory/90">
                  No. 5/3, VOC Street, Subhash Nagar,
                  <br />
                  Chromepet, Chennai, Tamil Nadu 600044
                </span>
                <span className="text-[11px] text-gold/90 block mt-1">
                  (Landmark: Near Radha Nagar Bus Depot)
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <strong className="block text-ivory font-medium text-sm mb-1">Phone / WhatsApp</strong>
                <a 
                  href="tel:+917401675675" 
                  className="text-ivory hover:text-gold transition-colors block text-sm font-medium tracking-wide"
                >
                  +91 74016 75675 <span className="text-xs text-ivory/60 font-normal">(07401 675675)</span>
                </a>
                <a
                  href="https://wa.me/917401675675?text=Hello%20Panacea%20Dental%20Care,%20I%20would%20like%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline text-xs inline-block mt-0.5"
                >
                  Click to chat on WhatsApp &rarr;
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <strong className="block text-ivory font-medium text-sm mb-1">Consultation Hours</strong>
                <span className="block text-ivory/90">
                  Mon &ndash; Sat: <strong>9:30 AM &ndash; 1:00 PM</strong> &amp; <strong>5:30 PM &ndash; 9:30 PM</strong>
                </span>
                <span className="block text-[11px] text-ivory/60 mt-0.5">
                  Sunday: By Prior Appointment / Emergency
                </span>
              </div>
            </div>
          </div>

          {/* Google Maps Embed & Get Directions */}
          <div className="md:col-span-4 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gold uppercase tracking-ultra font-medium text-xs">
                Google Map Location
              </span>
              <a
                href={googleMapsListingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-gold hover:underline flex items-center gap-1 font-sans"
              >
                <span>Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="relative w-full h-44 rounded-sm border border-gold/30 overflow-hidden bg-navy-surface shadow-luxury group">
              {!mapError ? (
                <iframe
                  title="PANACEA DENTAL CARE Chromepet Google Map"
                  src="https://maps.google.com/maps?q=12.9493044,80.1451159&hl=en&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onError={() => setMapError(true)}
                  className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-navy-surface">
                  <MapPin className="w-6 h-6 text-gold mb-2" />
                  <p className="text-xs text-ivory/80 mb-2">No. 5/3, VOC Street, Chromepet, Chennai 600044</p>
                  <a
                    href={googleMapsListingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gold underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              )}
            </div>

            {/* Functional Get Directions Button */}
            <div className="mt-3 flex items-center gap-2">
              <a
                href={getDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-gold hover:bg-gold-light text-navy text-xs uppercase tracking-widest font-medium rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-gold-glow"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions (Chromepet)</span>
              </a>
            </div>

            <div className="mt-2 text-[11px] text-ivory/50 font-sans flex items-center justify-between">
              <span>Coords: 12.9493° N, 80.1451° E</span>
              <a
                href={googleMapsListingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold/80 hover:text-gold hover:underline"
              >
                Google Maps Listing &rarr;
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-ivory/50 gap-4">
          <span>&copy; {new Date().getFullYear()} PANACEA DENTAL CARE, Chromepet, Chennai. All Rights Reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-gold transition-colors">About</a>
            <a href="#treatments" className="hover:text-gold transition-colors">Treatments</a>
            <a href="#booking" className="hover:text-gold transition-colors">Contact &amp; Book</a>
            <a href={googleMapsListingUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Location</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
