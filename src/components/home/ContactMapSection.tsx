'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation, Calendar, Sparkles, ExternalLink } from 'lucide-react';
import { SALON_INFO, isSalonOpenNow } from '../../data/salonInfo';
import Button from '../ui/Button';

export default function ContactMapSection() {
  const status = useMemo(() => isSalonOpenNow(SALON_INFO.openingHours), []);

  // Determine current day of week (0 = Sunday, 1 = Monday, ...)
  const todayScheduleIndex = useMemo(() => {
    const day = new Date().getDay();
    return day === 0 ? 6 : day - 1;
  }, []);

  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(SALON_INFO.address.full)}`;

  return (
    <section
      id="contact"
      aria-label="Informations, horaires et accès au salon"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
        {/* Left Column: Salon info, Live status, Opening hours, Booking CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-6 flex flex-col justify-between space-y-8"
        >
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182315] border border-gold-400/30 text-gold-300 text-xs font-semibold tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Rendez-nous visite</span>
            </div>

            {/* Main Editorial Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gold-400 font-bold leading-tight tracking-tight mb-4">
              Salon Tendance Attitud
            </h2>

            <p className="text-sm sm:text-base text-[#F7F5EE]/80 leading-relaxed font-light mb-6">
              {SALON_INFO.tagline}. Nous vous accueillons au cœur d'Allauch pour sublimer vos
              cheveux dans une ambiance chaleureuse et raffinée.
            </p>

            {/* Live Status Badge */}
            <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-[#182315] border border-gold-400/20 shadow-sm">
              <span className="relative flex h-3 w-3">
                {status.isOpen ? (
                  <>
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </>
                ) : (
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500" />
                )}
              </span>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider block text-[#F7F5EE]">
                  {status.isOpen ? 'Actuellement ouvert' : 'Actuellement fermé'}
                </span>
                <span className="text-[11px] text-[#F7F5EE]/60 block">{status.nextStatus}</span>
              </div>
            </div>

            {/* Contact details: Address & Phone */}
            <div className="space-y-3 mb-8">
              {/* Address Link */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 p-3 rounded-2xl bg-[#182315]/60 border border-[#23301F] hover:border-gold-400/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center flex-shrink-0 text-gold-400 group-hover:bg-gold-400 group-hover:text-black transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-[#F7F5EE]/60 uppercase tracking-wider font-semibold block">
                    Adresse
                  </span>
                  <span className="text-sm text-[#F7F5EE] group-hover:text-gold-300 transition-colors font-medium">
                    {SALON_INFO.address.full}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-[#F7F5EE]/40 group-hover:text-gold-400 transition-colors flex-shrink-0 self-center" />
              </a>

              {/* Phone Click-to-call Link */}
              <a
                href={`tel:${SALON_INFO.phoneRaw}`}
                className="group flex items-center gap-3 p-3 rounded-2xl bg-[#182315]/60 border border-[#23301F] hover:border-gold-400/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center flex-shrink-0 text-gold-400 group-hover:bg-gold-400 group-hover:text-black transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-[#F7F5EE]/60 uppercase tracking-wider font-semibold block">
                    Téléphone
                  </span>
                  <span className="text-sm text-[#F7F5EE] group-hover:text-gold-300 transition-colors font-semibold tracking-wide">
                    {SALON_INFO.phone}
                  </span>
                </div>
                <span className="text-xs text-gold-400 underline decoration-gold-400/40 group-hover:decoration-gold-400 transition-colors">
                  Appeler
                </span>
              </a>
            </div>

            {/* Opening Hours Table */}
            <div className="rounded-3xl bg-[#182315] border border-gold-400/20 p-5 sm:p-6 shadow-xl">
              <div className="flex items-center gap-2 text-gold-400 mb-4 pb-3 border-b border-[#23301F]">
                <Clock className="w-4 h-4" />
                <h3 className="font-semibold text-xs sm:text-sm uppercase tracking-wider text-[#F7F5EE]">
                  Horaires d'ouverture
                </h3>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm">
                {SALON_INFO.openingHours.map((schedule, idx) => {
                  const isToday = idx === todayScheduleIndex;
                  return (
                    <li
                      key={schedule.day}
                      className={`flex items-center justify-between px-3 py-2 rounded-xl transition-colors ${
                        isToday
                          ? 'bg-gold-400/15 border border-gold-400/40 text-gold-300 font-semibold'
                          : 'text-[#F7F5EE]/80 hover:bg-[#23301F]/40'
                      }`}
                    >
                      <span>
                        {schedule.day}: {schedule.hours}
                      </span>
                      {isToday && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-gold-400/25 text-gold-300 border border-gold-400/40">
                          Aujourd'hui
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Booking CTA */}
          <div className="pt-2">
            <Button
              asLink
              href={SALON_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="gold"
              size="lg"
              className="w-full sm:w-auto shadow-xl hover:shadow-gold-400/20"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span>Prendre rendez-vous</span>
            </Button>
          </div>
        </motion.div>

        {/* Right Column: Map Card & GPS Itinerary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="lg:col-span-6 flex flex-col justify-center"
        >
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:h-full lg:min-h-[500px] rounded-3xl overflow-hidden border border-gold-400/30 shadow-2xl bg-[#182315] group">
            {/* Map image mockup */}
            <Image
              src="/images/map-mockup.webp"
              alt="Carte de localisation du Salon Tendance Attitud à Allauch"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

            {/* Top Inset Badge: Location pin */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#11180E]/90 border border-gold-400/40 text-gold-300 text-xs font-semibold shadow-lg backdrop-blur-md">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>Allauch Village</span>
            </div>

            {/* Bottom Inset Overlay Card with GPS Button */}
            <div className="absolute bottom-4 inset-x-4 sm:bottom-6 sm:inset-x-6 z-10 p-4 sm:p-5 rounded-2xl bg-[#11180E]/90 border border-gold-400/30 shadow-2xl backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="min-w-0">
                <span className="font-serif font-bold text-sm sm:text-base text-gold-300 block truncate">
                  Tendance Attitud
                </span>
                <span className="text-xs text-[#F7F5EE]/75 block truncate">
                  {SALON_INFO.address.street}
                </span>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gold-400 hover:bg-gold-300 text-black font-semibold text-xs tracking-wider uppercase shadow-md transition-all active:scale-95 flex-shrink-0"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Itinéraire GPS</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
