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
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-2.5 items-stretch">
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

        {/* Subtitle spanning across the cards matching Canva mockup */}
        <div className="absolute bottom-8 sm:bottom-14 md:bottom-20 lg:bottom-24 left-1/2 -translate-x-1/2 z-20 w-full px-2 sm:px-4 text-center pointer-events-none">
          <p className="font-aileron font-extrabold text-xs sm:text-base md:text-xl lg:text-2xl text-[#FFE88B] tracking-[-0.04em] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] leading-tight select-none">
            {"Tous les cheveux méritent d'être sublimés"}
          </p>
        </div>

        {/* Calligraphy text overlay across the triptych */}
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center">
          <h1 className="w-full">
            {/* Accessible screen-reader heading with high-value local SEO keywords */}
            <span className="sr-only">Tendance Attitud - Salon de Coiffure à Allauch : Du lisse aux Boucles</span>

            {/* Visual stylized typography matching maquette Home.png with handwriting letter-by-letter reveal */}
            <div aria-hidden="true" className="w-full select-none">
              {/* Row: "Du" on upper left + "Allauch" oval badge positioned right next to it */}
              <div className="w-full flex items-center justify-start pl-4 sm:pl-8 md:pl-12 lg:pl-16 gap-2 sm:gap-3.5 md:gap-5 -mb-3 sm:-mb-6 md:-mb-9 lg:-mb-14">
                <LetterReveal
                  text="Du"
                  delay={0.2}
                  stagger={0.08}
                  inView={false}
                  className="font-luxurious text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] xl:text-[12.5rem] text-[#FFE88B] drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] leading-none"
                />

                {/* Oval badge "Allauch" matching Canva mockup */}
                <div className="inline-flex items-center justify-center px-3.5 py-1 sm:px-5 sm:py-1.5 md:px-6 md:py-2 lg:px-7 lg:py-2.5 rounded-full border-[1.5px] sm:border-2 md:border-[2.5px] border-[#FFE88B] bg-transparent backdrop-blur-[2px] shadow-[0_2px_12px_rgba(0,0,0,0.6)] translate-y-1.5 sm:translate-y-2 md:translate-y-3">
                  <span className="font-times-cond font-bold text-sm sm:text-lg md:text-2xl lg:text-3xl text-[#FFE88B] tracking-[-0.03em] leading-none select-none">
                    Allauch
                  </span>
                </div>
              </div>

              {/* "lisse aux Boucles" spanning across cards in Luxurious Script */}
              <div className="w-full text-center">
                <LetterReveal
                  text="lisse aux Boucles"
                  delay={0.45}
                  stagger={0.045}
                  inView={false}
                  className="font-luxurious text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10.5rem] 2xl:text-[12.5rem] text-[#FFE88B] tracking-tight sm:tracking-normal drop-shadow-[0_4px_26px_rgba(0,0,0,0.95)] leading-tight"
                />
              </div>
            </div>
          </h1>
        </div>
      </div>
    </section>
  );
}
