'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';

export interface LetterRevealProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p' | 'div';
  delay?: number;
  stagger?: number;
  duration?: number;
  inView?: boolean;
  once?: boolean;
}

export default function LetterReveal({
  text,
  className = '',
  as: Component = 'span',
  delay = 0,
  stagger = 0.045,
  duration = 0.35,
  inView = true,
  once = true,
}: LetterRevealProps) {
  const words = text.split(' ');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 6,
      scale: 0.88,
      filter: 'blur(3px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const animationProps = inView
    ? {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once, margin: '-40px' },
      }
    : {
        initial: 'hidden',
        animate: 'visible',
      };

  const lines = text.split('\n');

  return (
    <Component className={`relative inline-block ${className}`}>
      {/* Screen-reader and SEO accessible text */}
      <span className="sr-only">{text.replace(/\n/g, ' ')}</span>

      {/* Animated visual letters */}
      <motion.span
        aria-hidden="true"
        variants={containerVariants}
        {...animationProps}
        className="inline-block select-none"
      >
        {lines.map((line, lineIndex) => {
          const words = line.split(' ');
          return (
            <React.Fragment key={lineIndex}>
              {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block whitespace-nowrap">
                  {Array.from(word).map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      variants={letterVariants}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                  {wordIndex < words.length - 1 && (
                    <span className="inline-block">&nbsp;</span>
                  )}
                </span>
              ))}
              {lineIndex < lines.length - 1 && <br />}
            </React.Fragment>
          );
        })}
      </motion.span>
    </Component>
  );
}
