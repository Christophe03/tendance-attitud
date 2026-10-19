/// <reference types="@testing-library/jest-dom/vitest" />
import '@testing-library/jest-dom/vitest';
import { MotionGlobalConfig } from 'framer-motion';

// Skip animations in jsdom test environment so AnimatePresence mode="wait" transitions resolve synchronously
MotionGlobalConfig.skipAnimations = true;
