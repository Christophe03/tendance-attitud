/// <reference types="@testing-library/jest-dom/vitest" />
import '@testing-library/jest-dom/vitest';
import { MotionGlobalConfig } from 'framer-motion';

// Skip animations in jsdom test environment so AnimatePresence mode="wait" transitions resolve synchronously
MotionGlobalConfig.skipAnimations = true;

// Mock IntersectionObserver for Framer Motion viewport triggers in jsdom
if (typeof window !== 'undefined' && !window.IntersectionObserver) {
  class MockIntersectionObserver {
    readonly root: Element | null = null;
    readonly rootMargin: string = '';
    readonly thresholds: ReadonlyArray<number> = [];
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  }
  window.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;
}

