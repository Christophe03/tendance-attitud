'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { REVIEWS } from '../../data/reviews';
import LetterReveal from '../ui/LetterReveal';

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const totalReviews = REVIEWS.length;

  const nextReview = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  }, [totalReviews]);

  const prevReview = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  }, [totalReviews]);

  const goToReview = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  // Autoplay interval every 6s, pauses on hover or focus
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextReview();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextReview]);

  const currentReview = REVIEWS[currentIndex];

  return (
    <section
      aria-label="Avis clients - Vous nous faites confiance"
      className="relative w-full max-w-5xl mx-auto px-4 py-12 sm:py-16 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Calligraphy Header with letter-by-letter handwriting reveal */}
      <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-10 select-none">
        <h2 className="font-script text-3xl sm:text-5xl md:text-6xl text-gold-400 font-normal tracking-wide drop-shadow-sm leading-tight sm:leading-snug">
          <LetterReveal text={"Vous nous faites\nconfiance"} stagger={0.045} />
        </h2>

        {/* 5 Gold Stars below heading matching Home.png */}
        <div
          className="flex items-center justify-center gap-1.5 mt-3 text-gold-400"
          aria-label="Évaluation de 5 étoiles sur 5"
        >
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FFE88B] text-[#FFE88B]"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      {/* Reviews Carousel Wrapper */}
      <div className="relative flex items-center justify-center gap-2 sm:gap-4 md:gap-6 max-w-3xl mx-auto">
        {/* Navigation Previous Button */}
        <button
          type="button"
          onClick={prevReview}
          aria-label="Avis précédent"
          className="flex-shrink-0 p-2 sm:p-3 text-[#FFE88B] hover:text-white hover:bg-[#FFE88B]/10 active:scale-95 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFE88B]/60 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />
        </button>

        {/* Pill Card Carousel Area */}
        <div className="relative w-full min-h-[140px] sm:min-h-[120px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={currentReview.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_e, { offset, velocity }) => {
                const swipeThreshold = 50;
                if (offset.x < -swipeThreshold || velocity.x < -300) {
                  nextReview();
                } else if (offset.x > swipeThreshold || velocity.x > 300) {
                  prevReview();
                }
              }}
              className="w-full bg-white text-[#1A1A1A] rounded-3xl sm:rounded-full px-6 py-4 sm:px-10 sm:py-5 shadow-2xl border border-gray-100 flex flex-col items-center justify-center text-center cursor-grab active:cursor-grabbing select-none"
            >
              {/* Top Row: Rating badge & Author */}
              <div className="flex items-center justify-center gap-2 mb-1.5 flex-wrap">
                <span className="font-bold text-sm sm:text-base text-gray-900 tracking-tight">
                  5,0 ★
                </span>
                <span className="text-gray-300 font-light">•</span>
                <span className="text-xs sm:text-sm font-semibold text-gray-700">
                  {currentReview.author}
                </span>
                <span className="text-gray-300 font-light">•</span>
                <span className="text-[11px] sm:text-xs text-gray-500 font-medium">
                  {currentReview.date}
                </span>
              </div>

              {/* Review Comment */}
              <blockquote className="text-xs sm:text-sm md:text-base font-normal text-gray-800 italic leading-relaxed max-w-xl mx-auto">
                &ldquo;{currentReview.comment}&rdquo;
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Next Button */}
        <button
          type="button"
          onClick={nextReview}
          aria-label="Avis suivant"
          className="flex-shrink-0 p-2 sm:p-3 text-[#FFE88B] hover:text-white hover:bg-[#FFE88B]/10 active:scale-95 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFE88B]/60 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />
        </button>
      </div>

      {/* Pagination indicators / dots */}
      <div
        className="flex items-center justify-center gap-2 mt-6"
        role="tablist"
        aria-label="Indicateurs des avis"
      >
        {REVIEWS.map((review, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={review.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Aller à l'avis ${idx + 1}`}
              onClick={() => goToReview(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-400/60 ${
                isActive
                  ? 'w-6 h-2 bg-gold-400'
                  : 'w-2 h-2 bg-gold-400/30 hover:bg-gold-400/60'
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
