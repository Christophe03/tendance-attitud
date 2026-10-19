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
    <header className="sticky top-0 z-50 bg-[#11180E]/92 backdrop-blur-md border-b border-[#E5C368]/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Desktop Left Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#prestations"
              className="text-sm font-semibold tracking-wider text-[#F7F5EE]/90 hover:text-[#E5C368] transition-colors uppercase"
            >
              Prestations
            </a>
            <a
              href="#equipe"
              className="text-sm font-semibold tracking-wider text-[#F7F5EE]/90 hover:text-[#E5C368] transition-colors uppercase"
            >
              Équipe
            </a>
          </nav>

          {/* Center Logo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <Link
              href="/"
              className="group relative flex items-center justify-center p-1 rounded-full border-2 border-[#E5C368]/60 hover:border-[#E5C368] transition-colors"
              aria-label="Retour à l'accueil Salon Tendance Attitud"
            >
              <Image
                src="/images/logo.png"
                alt="Logo Salon Tendance Attitud Allauch"
                width={56}
                height={56}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
                priority
              />
            </Link>
          </div>

          {/* Desktop Right Nav & CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#contact"
              className="text-sm font-semibold tracking-wider text-[#F7F5EE]/90 hover:text-[#E5C368] transition-colors uppercase"
            >
              Contactez-nous
            </a>
            <Button
              asLink
              href={SALON_INFO.bookingUrl}
              target="_blank"
              variant="gold"
              size="md"
              className="shadow-md hover:shadow-gold-500/20"
            >
              PRENDRE RDV
            </Button>
          </div>

          {/* Mobile Phone & Hamburger */}
          <div className="flex items-center space-x-3 md:hidden">
            <a
              href={`tel:${SALON_INFO.phoneRaw}`}
              className="p-2.5 text-[#E5C368] hover:text-[#F3DE8A] rounded-full border border-[#E5C368]/30 hover:border-[#E5C368] transition-colors"
              aria-label="Appeler le salon au 06 59 26 65 33"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={toggleMenu}
              type="button"
              className="p-2.5 text-[#F7F5EE] hover:text-[#E5C368] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#E5C368]/50"
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
            className="md:hidden overflow-hidden bg-[#182315] border-b border-[#E5C368]/20 shadow-xl"
          >
            <div className="px-5 pt-3 pb-6 space-y-4">
              <nav className="flex flex-col space-y-3 pt-2">
                <a
                  href="#prestations"
                  onClick={closeMenu}
                  className="px-3 py-2.5 rounded-md text-base font-medium text-[#F7F5EE] hover:bg-[#23301F] hover:text-[#E5C368] transition-colors uppercase tracking-wider"
                >
                  Prestations
                </a>
                <a
                  href="#equipe"
                  onClick={closeMenu}
                  className="px-3 py-2.5 rounded-md text-base font-medium text-[#F7F5EE] hover:bg-[#23301F] hover:text-[#E5C368] transition-colors uppercase tracking-wider"
                >
                  Équipe
                </a>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="px-3 py-2.5 rounded-md text-base font-medium text-[#F7F5EE] hover:bg-[#23301F] hover:text-[#E5C368] transition-colors uppercase tracking-wider"
                >
                  Contactez-nous
                </a>
              </nav>

              <div className="pt-2 border-t border-[#E5C368]/20 flex flex-col gap-3">
                <a
                  href={`tel:${SALON_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-full border border-[#E5C368]/50 text-[#E5C368] hover:bg-[#E5C368]/10 transition-colors"
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
                  className="w-full flex items-center justify-center gap-2 py-3 shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>PRENDRE RDV</span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
