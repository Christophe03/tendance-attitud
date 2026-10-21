'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SALON_INFO } from '../../data/salonInfo';
import LetterReveal from '../ui/LetterReveal';

interface InstagramPost {
  id: string;
  image: string;
  alt: string;
  caption: string;
}

const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'post-1',
    image: '/images/instagram/insta-1-v2.webp',
    alt: 'Transformation capillaire boucles et texture naturelle - Tendance Attitud Allauch',
    caption: 'Sublimation des boucles naturelles & diagnostic personnalisé ✨',
  },
  {
    id: 'post-2',
    image: '/images/instagram/insta-2-v2.webp',
    alt: 'Soin profond Tokio Inkarami et lissage haute brillance - Tendance Attitud Allauch',
    caption: 'Éclat absolu et soin réparateur haute précision 💫',
  },
  {
    id: 'post-3',
    image: '/images/instagram/insta-3-v2.webp',
    alt: 'Coupe et mise en forme sur-mesure au salon Tendance Attitud',
    caption: 'Coiffage et révélation de matière au salon 💛',
  },
];

function InstagramIcon({ className = 'w-5 h-5' }: { className?: string }) {
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

export default function InstagramSection() {
  const instagramUrl = SALON_INFO?.instagram?.url ?? 'https://www.instagram.com/tendanceattitud/';

  return (
    <section
      id="instagram"
      aria-label="Rejoignez-nous sur Instagram @Tendanceattitud"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 overflow-hidden"
    >
      {/* Calligraphy Gold Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center mb-10 sm:mb-14"
      >
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block group focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-4 focus:ring-offset-olive-800 rounded-lg"
        >
          <h2 className="font-luxurious text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gold-400 transition-transform duration-300 group-hover:scale-105 tracking-wide leading-tight sm:leading-snug py-2 [text-shadow:_0_0_1px_rgba(255,232,139,0.8)]">
            <LetterReveal text="Rejoignez-nous sur @Tendanceattitud" stagger={0.035} />
          </h2>
        </a>
      </motion.div>

      {/* 3 Responsive Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {INSTAGRAM_POSTS.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
          >
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Voir la publication sur Instagram @tendanceattitud : ${post.caption}`}
              className="group relative block aspect-[4/5] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-gold-400/25 bg-olive-900 shadow-xl shadow-black/50 transition-all duration-300 hover:border-gold-400/60 hover:shadow-2xl hover:shadow-black/70 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-olive-800"
            >
              {/* Instagram Icon Badge in Top-Left Corner */}
              <div className="absolute top-4 left-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-olive-900 group-hover:scale-110 shadow-md">
                <InstagramIcon className="w-5 h-5" />
              </div>

              {/* Feed Image with Zoom Animation on Hover */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Bottom Gradient Overlay on Hover with Instagram handle */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left pointer-events-none">
                <div className="flex items-center gap-2 text-gold-300 text-xs font-semibold uppercase tracking-wider mb-1">
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>@tendanceattitud</span>
                </div>
                <p className="text-white text-xs sm:text-sm line-clamp-2 font-light">
                  {post.caption}
                </p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
