'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICE_CATEGORIES } from '../../data/services';
import ServiceItem from './ServiceItem';
import LetterReveal from '../ui/LetterReveal';

export default function ServicesSection() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    SERVICE_CATEGORIES[0]?.id || 'boucles'
  );

  const activeCategory =
    SERVICE_CATEGORIES.find((cat) => cat.id === activeCategoryId) ||
    SERVICE_CATEGORIES[0];

  return (
    <section
      id="prestations"
      aria-label="Nos prestations"
      className="relative w-full max-w-6xl mx-auto px-4 py-12 sm:py-20 overflow-hidden"
    >
      {/* Calligraphy Header */}
      <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-12 select-none">
        <h2 className="font-script text-4xl sm:text-6xl md:text-7xl text-gold-400 font-normal tracking-wide drop-shadow-sm leading-tight">
          <LetterReveal text="Nos prestations" stagger={0.045} />
        </h2>
      </div>

      {/* 4 Circular Category Buttons */}
      <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12 flex-wrap mb-8 sm:mb-10">
        {SERVICE_CATEGORIES.map((category) => {
          const isActive = category.id === activeCategory.id;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategoryId(category.id)}
              className="group flex flex-col items-center focus:outline-none cursor-pointer transition-transform duration-200 hover:scale-105"
              aria-label={`Afficher les prestations pour ${category.name}`}
              aria-pressed={isActive}
            >
              {/* Circular image with active gold ring */}
              <div
                className={`relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden transition-all duration-300 ${
                  isActive
                    ? 'ring-4 ring-gold-400 ring-offset-2 ring-offset-[#0d140b] shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105'
                    : 'ring-2 ring-gold-400/30 opacity-70 group-hover:opacity-100 group-hover:ring-gold-400/70'
                }`}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, 128px"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Bold Gold Label */}
              <span
                className={`mt-2.5 sm:mt-3 text-xs sm:text-sm tracking-widest uppercase font-bold transition-colors duration-200 ${
                  isActive
                    ? 'text-gold-400 font-extrabold'
                    : 'text-gold-200/70 group-hover:text-gold-300'
                }`}
              >
                {category.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Subtitle */}
      <div className="text-center mb-8 sm:mb-10">
        <p className="text-xs sm:text-sm md:text-base italic text-gold-200/90 font-light tracking-wide">
          Balayage, soin Tokio, coupes, tresses
        </p>
      </div>

      {/* Dynamic White Card with Framer Motion Transition */}
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl text-[#1A1A1A] border border-gray-100"
          >
            {/* Category Header within Card */}
            <div className="border-b border-gray-100 pb-5 mb-5 sm:pb-6 sm:mb-6">
              <h3 className="text-base sm:text-xl font-bold text-gray-900 tracking-tight uppercase">
                {activeCategory.title}
              </h3>
              {activeCategory.description && (
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  {activeCategory.description}
                </p>
              )}
            </div>

            {/* List of Services */}
            <div className="divide-y divide-gray-100">
              {activeCategory.services.map((service) => (
                <ServiceItem key={service.id} service={service} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
