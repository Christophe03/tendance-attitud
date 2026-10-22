'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUp, MapPin, Phone, Sparkles } from 'lucide-react';
import { PARTNERS } from '../../data/partners';
import { SALON_INFO } from '../../data/salonInfo';
import LetterReveal from '../ui/LetterReveal';

function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A2010] text-[#F7F5EE] border-t border-[#FFE88B]/20 relative">
      {/* Partners Section */}
      <div className="border-b border-[#23301F] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182315] border border-[#FFE88B]/30 text-[#FFE88B] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Excellence & Soins d'exception</span>
          </div>

          <h2 className="font-luxurious text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gold-400 font-normal tracking-wide drop-shadow-sm leading-tight sm:leading-snug py-2 [text-shadow:_0_0_1px_rgba(255,232,139,0.8)] mb-4">
            <LetterReveal text="Nos partenaires" stagger={0.045} />
          </h2>
          <p className="text-sm sm:text-base text-[#F7F5EE]/70 max-w-2xl mx-auto mb-10">
            Nous sélectionnons les plus grandes maisons professionnelles pour sublimer et protéger durablement vos cheveux.
          </p>

          {/* Partner Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {PARTNERS.map((partner) => (
              <div
                key={partner.id}
                className="group p-4 rounded-2xl bg-[#182315] border border-[#23301F] hover:border-[#FFE88B]/50 transition-all duration-300 flex flex-col items-center justify-center text-center hover:scale-105"
              >
                <div className="w-14 h-14 rounded-full bg-[#FDF8E8] text-[#11180E] flex items-center justify-center font-serif font-bold text-lg mb-2 shadow-sm group-hover:bg-[#FFE88B] transition-colors">
                  {partner.name.charAt(0)}
                </div>
                <h3 className="font-semibold text-sm text-[#F7F5EE] group-hover:text-[#FFE88B] transition-colors">
                  {partner.name}
                </h3>
                {partner.description && (
                  <p className="text-[11px] text-[#F7F5EE]/60 mt-1 line-clamp-2">
                    {partner.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Salon Identity */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Logo Salon Tendance Attitud"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full border border-[#FFE88B]/60 object-cover"
              />
              <div>
                <span className="font-serif font-bold text-lg text-[#FFE88B] block">
                  Tendance Attitud
                </span>
                <span className="text-xs text-[#F7F5EE]/70 tracking-widest uppercase">
                  Coiffure mixte & Barbier
                </span>
              </div>
            </div>
            <p className="text-xs text-[#F7F5EE]/70 leading-relaxed">
              {SALON_INFO.tagline}. Situé au cœur d'Allauch, notre équipe vous accueille pour une expérience personnalisée et bienveillante.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase text-[#FFE88B] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#prestations" className="hover:text-[#FFE88B] transition-colors">
                  Nos prestations
                </a>
              </li>
              <li>
                <a href="#equipe" className="hover:text-[#FFE88B] transition-colors">
                  L'équipe & Le salon
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FFE88B] transition-colors">
                  Horaires & Accès
                </a>
              </li>
              <li>
                <a
                  href={SALON_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFE88B] transition-colors font-medium text-[#FFE88B]"
                >
                  Prendre rendez-vous (Planity)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Coordonnées */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase text-[#FFE88B] mb-4">
              Contact & Salon
            </h4>
            <div className="space-y-3 text-xs text-[#F7F5EE]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFE88B] flex-shrink-0 mt-0.5" />
                <span>{SALON_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FFE88B] flex-shrink-0" />
                <a
                  href={`tel:${SALON_INFO.phoneRaw}`}
                  className="hover:text-[#FFE88B] transition-colors"
                >
                  {SALON_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <InstagramIcon className="w-4 h-4 text-[#FFE88B] flex-shrink-0" />
                <a
                  href={SALON_INFO.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFE88B] transition-colors"
                >
                  {SALON_INFO.instagram.handle}
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Horaires succincts & Back to Top */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="font-semibold text-sm tracking-wider uppercase text-[#FFE88B] mb-4">
                Horaires d'ouverture
              </h4>
              <p className="text-xs text-[#F7F5EE]/70 leading-relaxed mb-3">
                Lundi & Mardi : 9h - 18h<br />
                Jeudi : 9h - 20h30 (Nocturne)<br />
                Vendredi : 9h - 19h<br />
                Samedi : 8h30 - 19h<br />
                Mercredi & Dimanche : Fermé
              </p>
            </div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#FFE88B]/40 text-[#FFE88B] text-xs font-semibold hover:bg-[#E5C368]/10 transition-colors w-fit mt-2"
              aria-label="Retour en haut de page"
            >
              <span>Haut de page</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-[#23301F] flex flex-col sm:flex-row items-center justify-between text-xs text-[#F7F5EE]/60 gap-4">
          <p>© {currentYear} Salon Tendance Attitud — Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/mentions-legales"
              className="hover:text-[#FFE88B] transition-colors underline-offset-4 hover:underline"
            >
              MENTIONS LÉGALES
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
