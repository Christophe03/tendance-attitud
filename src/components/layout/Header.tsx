'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { SALON_INFO } from '../../data/salonInfo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#242B17]/95 backdrop-blur-md transition-all duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          {/* Desktop Left Nav */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <a
              href="#prestations"
              className="text-lg font-bold tracking-wider text-[#FFE88B] hover:text-white transition-colors"
            >
              Prestations
            </a>
            <a
              href="#equipe"
              className="text-lg font-bold tracking-wider text-[#FFE88B] hover:text-white transition-colors"
            >
              Équipe
            </a>
          </nav>

          {/* Center Logo - enlarged & overlapping center hero card */}
          <div className="absolute left-1/2 -translate-x-1/2 top-2 sm:top-2 md:top-2 z-50">
            <Link
              href="/"
              className="group relative flex items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105"
              aria-label="Retour à l'accueil Salon Tendance Attitud"
            >
              <div className="w-22 h-22 sm:w-26 sm:h-26 md:w-32 md:h-32 rounded-full overflow-hidden p-1.5 sm:p-2 bg-white flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Logo Salon Tendance Attitud Allauch"
                  width={140}
                  height={140}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Right Nav & CTA */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#contact"
              className="text-lg font-bold tracking-wider text-[#FFE88B] hover:text-white transition-colors"
            >
              Contactez-nous
            </a>
            <Button
              asLink
              href={SALON_INFO.bookingUrl}
              target="_blank"
              variant="gold"
              size="md"
              className="shadow-sm hover:shadow-md px-6 py-2.5 rounded-lg"
            >
              <span className="text-base font-bold tracking-wider">PRENDRE RDV</span>
            </Button>
          </div>

          {/* Mobile Phone & Hamburger */}
          <div className="flex items-center space-x-3 md:hidden ml-auto">
            <a
              href={`tel:${SALON_INFO.phoneRaw}`}
              className="p-2.5 text-[#FFE88B] hover:text-white rounded-full border border-[#FFE88B]/40 hover:border-[#FFE88B] transition-colors"
              aria-label="Appeler le salon au 06 59 26 65 33"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={toggleMenu}
              type="button"
              className="p-2.5 text-[#FFE88B] hover:text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFE88B]/50"
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#242B17]/98 shadow-xl"
          >
            <div className="px-5 pt-3 pb-6 space-y-4">
              <nav className="flex flex-col space-y-3 pt-2">
                <a
                  href="#prestations"
                  onClick={closeMenu}
                  className="px-3 py-2.5 rounded-md text-lg font-bold text-[#FFE88B] hover:bg-[#2E361E] hover:text-white transition-colors tracking-wide"
                >
                  Prestations
                </a>
                <a
                  href="#equipe"
                  onClick={closeMenu}
                  className="px-3 py-2.5 rounded-md text-lg font-bold text-[#FFE88B] hover:bg-[#2E361E] hover:text-white transition-colors tracking-wide"
                >
                  Équipe
                </a>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="px-3 py-2.5 rounded-md text-lg font-bold text-[#FFE88B] hover:bg-[#2E361E] hover:text-white transition-colors tracking-wide"
                >
                  Contactez-nous
                </a>
              </nav>

              <div className="pt-2 border-t border-[#FFE88B]/20 flex flex-col gap-3">
                <a
                  href={`tel:${SALON_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 px-4 py-3 text-base font-bold rounded-lg border border-[#FFE88B]/50 text-[#FFE88B] hover:bg-[#FFE88B]/10 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>06 59 26 65 33</span>
                </a>
                <Button
                  asLink
                  href={SALON_INFO.bookingUrl}
                  target="_blank"
                  variant="gold"
                  size="md"
                  className="w-full flex items-center justify-center gap-2 py-3 shadow-md rounded-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span className="text-base font-bold tracking-wider">PRENDRE RDV</span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
