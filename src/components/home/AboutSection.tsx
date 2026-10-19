'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section
      id="equipe"
      aria-label="Le salon, notre équipe"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Heading and presentation text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          {/* Gold Serif Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gold-400 font-bold leading-tight tracking-tight mb-6">
            Le salon, notre <br className="hidden sm:inline" />
            équipe
          </h2>

          {/* Description Copy */}
          <div className="space-y-4 text-sm sm:text-base text-[#F7F5EE]/85 leading-relaxed font-light">
            <p>
              Fondé par <span className="text-gold-300 font-medium">Nathalie</span>, le salon{' '}
              <strong className="font-semibold text-white">Tendance Attitud</strong> à Allauch est né
              d&apos;une passion : révéler la beauté singulière et l&apos;éclat naturel de chaque chevelure.
            </p>
            <p>
              Entourée d&apos;une équipe de coiffeuses dévouées et certifiées, elle vous accueille dans
              une atmosphère conviviale et soignée. Notre salon est spécialisé dans l&apos;accompagnement
              de toutes les textures capillaires : du lissage brésilien haute précision à la révélation des
              boucles naturelles, sans oublier les soins profonds d&apos;exception tels que le protocole{' '}
              <span className="text-gold-300 font-medium">Tokio Inkarami</span>.
            </p>
            <p>
              Nos valeurs reposent sur un diagnostic sur-mesure, des conseils personnalisés et
              l&apos;utilisation des meilleures techniques pour sublimer vos cheveux tout en préservant
              durablement leur vitalité.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Large Team Photo + Overlapping Salon Interior Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="lg:col-span-7 relative w-full max-w-lg mx-auto lg:max-w-none pt-4 pb-10 pl-6 sm:pl-10"
        >
          <div className="relative">
            {/* Main Team Photo */}
            <div className="relative ml-auto w-full sm:w-[85%] aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden border border-gold-400/25 shadow-2xl shadow-black/80 bg-olive-900 group">
              <Image
                src="/images/salon/team-v2.webp"
                alt="L'équipe de coiffeuses du Salon Tendance Attitud à Allauch avec Nathalie"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 600px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Inset Overlapping Salon Interior Photo */}
            <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 w-[62%] sm:w-[56%] aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gold-400/50 shadow-[0_16px_40px_rgba(0,0,0,0.9)] bg-olive-900 z-10 transition-transform duration-300 hover:scale-105 group">
              <Image
                src="/images/salon/interior-v2.webp"
                alt="Intérieur moderne du salon de coiffure Tendance Attitud à Allauch avec miroirs dorés"
                fill
                sizes="(max-width: 640px) 60vw, (max-width: 1024px) 45vw, 360px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle gold glow & gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
