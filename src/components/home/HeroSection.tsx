'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import LetterReveal from '../ui/LetterReveal';

export default function HeroSection() {
  return (
    <section
      aria-label="Salon Tendance Attitud à Allauch - Du lisse aux Boucles"
      className="relative w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-4 pb-12 sm:pt-6 sm:pb-16"
    >
      <div className="relative mx-auto max-w-5xl">
        {/* Triptych Grid: 3 vertical cards */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 items-stretch">
          {/* Card 1: Left - Smooth blonde hair waves */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="group relative h-[360px] sm:h-[460px] md:h-[560px] lg:h-[620px] rounded-2xl sm:rounded-3xl overflow-hidden border border-gold-500/25 shadow-2xl shadow-black/70 bg-olive-900"
          >
            <Image
              src="/images/hero/hero-left-v2.webp"
              alt="Coiffure lissage et ondulations blondes - Salon Tendance Attitud"
              fill
              priority
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 30vw, 320px"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle dark gradient overlay for optimal text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/35 pointer-events-none" />
          </motion.div>

          {/* Card 2: Center - Nathalie smiling in front of the salon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="group relative h-[360px] sm:h-[460px] md:h-[560px] lg:h-[620px] rounded-2xl sm:rounded-3xl overflow-hidden border border-gold-400/40 shadow-2xl shadow-black/80 bg-olive-900"
          >
            <Image
              src="/images/hero/hero-center-v2.webp"
              alt="Nathalie devant le salon de coiffure Tendance Attitud à Allauch"
              fill
              priority
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 30vw, 320px"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/40 pointer-events-none" />

            {/* Circular badge on center photo: Allauch */}
            <div className="absolute top-3 sm:top-5 md:top-6 left-1/2 -translate-x-1/2 z-20 pointer-events-auto">
              <div className="relative inline-flex items-center justify-center px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-gold-400/80 bg-olive-900/85 backdrop-blur-md shadow-[0_0_15px_rgba(229,195,104,0.35)]">
                <div className="absolute inset-0.5 rounded-full border border-gold-400/30 pointer-events-none" />
                <span className="text-[10px] sm:text-xs md:text-sm font-serif tracking-[0.25em] text-gold-300 uppercase font-semibold">
                  Allauch
                </span>
              </div>
            </div>

            {/* Subtitle below: Tous les cheveux méritent d'être sublimés */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 w-[92%] text-center pointer-events-none">
              <p className="text-[10px] sm:text-xs md:text-sm lg:text-base font-serif text-gold-200/95 tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] leading-snug">
                {"Tous les cheveux méritent d'être sublimés"}
              </p>
            </div>
          </motion.div>

          {/* Card 3: Right - Voluminous curly hair */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="group relative h-[360px] sm:h-[460px] md:h-[560px] lg:h-[620px] rounded-2xl sm:rounded-3xl overflow-hidden border border-gold-500/25 shadow-2xl shadow-black/70 bg-olive-900"
          >
            <Image
              src="/images/hero/hero-right-v2.webp"
              alt="Coiffure boucles volumineuses et naturelles - Salon Tendance Attitud"
              fill
              priority
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 30vw, 320px"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/35 pointer-events-none" />
          </motion.div>
        </div>

        {/* Calligraphy text overlay across the triptych */}
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center">
          <h1 className="w-full">
            {/* Accessible screen-reader heading with high-value local SEO keywords */}
            <span className="sr-only">Tendance Attitud - Salon de Coiffure à Allauch : Du lisse aux Boucles</span>

            {/* Visual stylized typography matching maquette Home.png with handwriting letter-by-letter reveal */}
            <div aria-hidden="true" className="w-full select-none">
              {/* "Du" on upper left/center */}
              <div className="w-full flex items-center justify-start pl-4 sm:pl-10 md:pl-16 lg:pl-24 -mb-3 sm:-mb-6 md:-mb-10 lg:-mb-14">
                <LetterReveal
                  text="Du"
                  delay={0.2}
                  stagger={0.08}
                  inView={false}
                  className="font-script text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-gold-400 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
                />
              </div>

              {/* "lisse aux Boucles" spanning across cards */}
              <div className="w-full text-center">
                <LetterReveal
                  text="lisse aux Boucles"
                  delay={0.45}
                  stagger={0.045}
                  inView={false}
                  className="font-script text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-gold-400 tracking-tight sm:tracking-normal drop-shadow-[0_4px_22px_rgba(0,0,0,0.95)]"
                />
              </div>
            </div>
          </h1>
        </div>
      </div>
    </section>
  );
}
