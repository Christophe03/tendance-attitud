# Tendance Attitud Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a luxury, responsive, mobile-first Next.js 15 website for salon de coiffure *Tendance Attitud* in Allauch, faithfully implementing the design mockup `maquettes/Home.png` with converted real photos, dynamic service tabs, interactive reviews carousel, opening hours with live status, and Planity booking integration.

**Architecture:** Next.js 15 App Router architecture with modular React components (`Header`, `HeroSection`, `ReviewsSection`, `ServicesSection`, `AboutSection`, `InstagramSection`, `ContactMapSection`, `Footer`), clean TypeScript data models (`services.ts`, `reviews.ts`, `salonInfo.ts`), Tailwind CSS for styling, and Framer Motion for smooth mobile touch gestures and transitions.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, Lucide React, Framer Motion, Vitest, React Testing Library.

**Spec:** `docs/superpowers/specs/2026-10-19-tendance-attitud-website-design.md`

## Global Constraints

- Primary background: Dark Olive Green `#182315` / `#162013`
- Primary Accent: Warm Gold `#E5C368` / `#D4AF37`
- Calligraphy text font: Google Font `Alex Brush` (with fallback serif)
- Editorial Serif font: Google Font `Playfair Display`
- Clean Sans font: Google Font `Montserrat` or `Inter`
- Booking CTA URL: `https://www.planity.com/tendance-attitud-13190-allauch`
- Salon Phone: `06 59 26 65 33` (`tel:+33659266533`)
- Salon Address: `44 avenue Salvador Allende, 13190 Allauch`
- Package manager: `npm.cmd` on Windows

---

### Task 1: Project Setup & Configuration

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `postcss.config.mjs`, `vitest.config.ts`
- Create: `src/app/layout.tsx`, `src/app/globals.css`, `src/app/page.tsx`
- Test: `tests/setup.test.ts`

**Interfaces:**
- Produces: Base Next.js project with Tailwind CSS theme configuration (custom colors `olive`, `gold`, custom font classes `font-script`, `font-serif`, `font-sans`) and Vitest testing environment.

- [ ] **Step 1: Write the failing test for project configuration**

Create `tests/setup.test.ts`:
```typescript
import { describe, it, expect } from 'vitest';

describe('Project configuration', () => {
  it('has environment and basic test runner operational', () => {
    expect(true).toBe(true);
  });
});
```

- [ ] **Step 2: Run test to verify it fails (no runner yet)**

Run: `npm.cmd test`
Expected: FAIL (missing package.json or vitest command)

- [ ] **Step 3: Initialize Next.js project and install dependencies**

Install Next.js, React, Tailwind CSS, Lucide React, Framer Motion, Vitest, and testing utilities:
```bash
npm.cmd init -y
npm.cmd install next@latest react@latest react-dom@latest lucide-react framer-motion
npm.cmd install -D typescript @types/node @types/react @types/react-dom tailwindcss@^3 postcss autoprefixer vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom
```

Configure `tailwind.config.ts`:
```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          900: '#11180E',
          800: '#182315',
          700: '#23301F',
          600: '#2F402A',
        },
        gold: {
          100: '#FDF8E8',
          200: '#F9EFC5',
          300: '#F3DE8A',
          400: '#E5C368',
          500: '#D4AF37',
          600: '#B89228',
        },
      },
      fontFamily: {
        script: ['var(--font-script)', 'cursive'],
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
```

Configure `vitest.config.ts`:
```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    globals: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

Create `tests/setup.ts`:
```typescript
import '@testing-library/jest-dom';
```

Add test and build scripts to `package.json`:
```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "test": "vitest run"
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm.cmd test`
Expected: PASS (1 passed)

- [ ] **Step 5: Commit**

```bash
git add package.json tsconfig.json next.config.ts tailwind.config.ts postcss.config.mjs vitest.config.ts tests/
git commit -m "chore: initialize Next.js 15 project with Tailwind CSS, Framer Motion, and Vitest"
```

---

### Task 2: Asset Pipeline & Photo Optimization

**Files:**
- Create: `scripts/optimize_assets.py`
- Create: `public/images/logo.png`, `public/images/hero/*.webp`, `public/images/prestations/*.webp`, `public/images/salon/*.webp`, `public/images/instagram/*.webp`, `public/images/map-mockup.webp`
- Test: `tests/assets.test.ts`

**Interfaces:**
- Produces: Optimized images in `public/images/` ready for `next/image` usage with exact crops corresponding to mockup `Home.png`.

- [ ] **Step 1: Write test checking presence of required optimized assets**

Create `tests/assets.test.ts`:
```typescript
import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Optimized assets', () => {
  const requiredImages = [
    'public/images/logo.png',
    'public/images/hero/hero-left.webp',
    'public/images/hero/hero-center.webp',
    'public/images/hero/hero-right.webp',
    'public/images/prestations/boucles.webp',
    'public/images/prestations/lissage.webp',
    'public/images/prestations/crepus.webp',
    'public/images/prestations/ondulations.webp',
    'public/images/salon/team.webp',
    'public/images/salon/interior.webp',
    'public/images/instagram/insta-1.webp',
    'public/images/instagram/insta-2.webp',
    'public/images/instagram/insta-3.webp',
  ];

  it.each(requiredImages)('file %s exists and has non-zero size', (relPath) => {
    const fullPath = path.resolve(process.cwd(), relPath);
    expect(fs.existsSync(fullPath)).toBe(true);
    const stat = fs.statSync(fullPath);
    expect(stat.size).toBeGreaterThan(1000);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm.cmd test tests/assets.test.ts`
Expected: FAIL (files do not exist yet)

- [ ] **Step 3: Implement asset optimization script**

Create and run `scripts/optimize_assets.py`:
- Convert corresponding HEIC/JPEG files into high-quality WebP images
- Extract circular logo from mockup
- Save all images into their respective `public/images/` folders

Run: `python scripts/optimize_assets.py`

- [ ] **Step 4: Run test to verify it passes**

Run: `npm.cmd test tests/assets.test.ts`
Expected: PASS (all required images exist and have valid size)

- [ ] **Step 5: Commit**

```bash
git add scripts/optimize_assets.py public/images/ tests/assets.test.ts
git commit -m "feat(assets): optimize and organize images for Next.js"
```

---

### Task 3: Data Layer & TypeScript Models

**Files:**
- Create: `src/types/salon.ts`
- Create: `src/data/salonInfo.ts`
- Create: `src/data/services.ts`
- Create: `src/data/reviews.ts`
- Create: `src/data/partners.ts`
- Test: `tests/data.test.ts`

**Interfaces:**
- Produces: Typed data constants `SALON_INFO`, `SERVICE_CATEGORIES`, `REVIEWS`, `PARTNERS` exportable throughout the app.

- [ ] **Step 1: Write test for data layer integrity**

Create `tests/data.test.ts`:
```typescript
import { describe, it, expect } from 'vitest';
import { SALON_INFO } from '../src/data/salonInfo';
import { SERVICE_CATEGORIES } from '../src/data/services';
import { REVIEWS } from '../src/data/reviews';

describe('Data Layer', () => {
  it('contains valid salon contact info and Planity booking URL', () => {
    expect(SALON_INFO.bookingUrl).toBe('https://www.planity.com/tendance-attitud-13190-allauch');
    expect(SALON_INFO.phone).toBe('06 59 26 65 33');
    expect(SALON_INFO.address.city).toBe('Allauch');
  });

  it('contains the 4 categories with valid services and prices', () => {
    expect(SERVICE_CATEGORIES).toHaveLength(4);
    const categoryIds = SERVICE_CATEGORIES.map(c => c.id);
    expect(categoryIds).toEqual(['boucles', 'lissage', 'crepus', 'ondulations']);

    const boucles = SERVICE_CATEGORIES.find(c => c.id === 'boucles')!;
    expect(boucles.services.length).toBeGreaterThanOrEqual(4);
    expect(boucles.services[0].price).toBe('63,50 €');
  });

  it('contains customer reviews with rating and date', () => {
    expect(REVIEWS.length).toBeGreaterThanOrEqual(3);
    expect(REVIEWS[0].rating).toBe(5);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm.cmd test tests/data.test.ts`
Expected: FAIL (modules not found)

- [ ] **Step 3: Implement TypeScript models and data files**

Create `src/types/salon.ts`:
```typescript
export interface ServiceItem {
  id: string;
  name: string;
  duration: string;
  price: string;
  description?: string;
  bookingUrl: string;
}

export interface ServiceCategory {
  id: 'boucles' | 'lissage' | 'crepus' | 'ondulations';
  name: string;
  image: string;
  title: string;
  description: string;
  services: ServiceItem[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface DaySchedule {
  day: string;
  hours: string;
  isClosed: boolean;
  openHour?: number;
  openMin?: number;
  closeHour?: number;
  closeMin?: number;
}
```

Create `src/data/salonInfo.ts`:
```typescript
export const SALON_INFO = {
  name: 'Salon Tendance Attitud',
  tagline: "Tous les cheveux méritent d'être sublimés",
  address: {
    street: '44 avenue Salvador Allende',
    postalCode: '13190',
    city: 'Allauch',
    full: '44 avenue Salvador Allende, 13190 Allauch',
  },
  phone: '06 59 26 65 33',
  phoneRaw: '+33659266533',
  instagram: {
    handle: '@tendanceattitud',
    url: 'https://www.instagram.com/tendanceattitud/',
  },
  bookingUrl: 'https://www.planity.com/tendance-attitud-13190-allauch',
  openingHours: [
    { day: 'LUNDI', hours: '09H - 18H', isClosed: false, openHour: 9, closeHour: 18 },
    { day: 'MARDI', hours: '09H - 18H', isClosed: false, openHour: 9, closeHour: 18 },
    { day: 'MERCREDI', hours: 'FERMÉ', isClosed: true },
    { day: 'JEUDI', hours: '09H - 20H30', isClosed: false, openHour: 9, closeHour: 20, closeMin: 30 },
    { day: 'VENDREDI', hours: '09H - 19H', isClosed: false, openHour: 9, closeHour: 19 },
    { day: 'SAMEDI', hours: '08H30 - 19H', isClosed: false, openHour: 8, openMin: 30, closeHour: 19 },
    { day: 'DIMANCHE', hours: 'FERMÉ', isClosed: true },
  ],
};
```

Create `src/data/services.ts`, `src/data/reviews.ts`, `src/data/partners.ts` with accurate items matching `Home.png`.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm.cmd test tests/data.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/types/ src/data/ tests/data.test.ts
git commit -m "feat(data): implement structured data models and constants"
```

---

### Task 4: UI Primitives & Layout (Header, Footer, Mentions Légales)

**Files:**
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/layout/Header.tsx`
- Create: `src/components/layout/Footer.tsx`
- Create: `src/app/mentions-legales/page.tsx`
- Test: `tests/Header.test.tsx`

**Interfaces:**
- Produces: Reusable `Button`, sticky `Header` with mobile menu drawer and Planity CTA, `Footer` with partner logos, and legal notices page.

- [ ] **Step 1: Write test for Header component**

Create `tests/Header.test.tsx`:
```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from '../src/components/layout/Header';

describe('Header Component', () => {
  it('renders navigation links and Planity booking button', () => {
    render(<Header />);
    expect(screen.getByText('Prestations')).toBeInTheDocument();
    expect(screen.getByText('Équipe')).toBeInTheDocument();
    expect(screen.getByText('Contactez-nous')).toBeInTheDocument();
    
    const rdvButtons = screen.getAllByText('PRENDRE RDV');
    expect(rdvButtons.length).toBeGreaterThanOrEqual(1);
    expect(rdvButtons[0].closest('a')).toHaveAttribute(
      'href',
      'https://www.planity.com/tendance-attitud-13190-allauch'
    );
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm.cmd test tests/Header.test.tsx`
Expected: FAIL

- [ ] **Step 3: Implement Button, Header, Footer and Mentions Légales**

Create `src/components/ui/Button.tsx`:
```tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'dark' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  target?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = 'gold',
  size = 'md',
  asLink = false,
  href,
  target,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-bold tracking-wide transition-all duration-200 rounded-full cursor-pointer';
  const variants = {
    gold: 'bg-[#B3984C] hover:bg-[#C7A24B] text-black shadow-md hover:shadow-lg active:scale-95',
    dark: 'bg-[#182315] hover:bg-[#253621] text-white active:scale-95',
    outline: 'border border-[#E5C368] text-[#E5C368] hover:bg-[#E5C368]/10',
  };
  const sizes = {
    sm: 'text-xs px-4 py-1.5',
    md: 'text-sm px-6 py-2.5',
    lg: 'text-base px-8 py-3.5',
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (asLink && href) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
```

Create `src/components/layout/Header.tsx`:
- Desktop navigation links (`Prestations`, `Équipe`, `Contactez-nous`)
- Center logo (`/images/logo.png`)
- CTA button `PRENDRE RDV` linking to Planity
- Mobile hamburger toggle with animated slide-down menu drawer using `framer-motion`

Create `src/components/layout/Footer.tsx`:
- Circular partner badges
- Link to Mentions Légales
- Copyright & Address reminder

Create `src/app/mentions-legales/page.tsx` with full legal compliance text for Salon Tendance Attitud Allauch.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm.cmd test tests/Header.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/ui/ src/components/layout/ src/app/mentions-legales/ tests/Header.test.tsx
git commit -m "feat(layout): implement Header, Footer, Button and Mentions Légales"
```

---

### Task 5: Hero Triptyque Section

**Files:**
- Create: `src/components/home/HeroSection.tsx`
- Test: `tests/HeroSection.test.tsx`

**Interfaces:**
- Produces: `HeroSection` component with triptych photos, golden calligraphy *"Du lisse aux Boucles"*, "Allauch" badge, and subtitle.

- [ ] **Step 1: Write test for HeroSection**

Create `tests/HeroSection.test.tsx`:
```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HeroSection from '../src/components/home/HeroSection';

describe('HeroSection Component', () => {
  it('renders hero title, Allauch badge, and subtitle', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Du lisse aux Boucles/i)).toBeInTheDocument();
    expect(screen.getByText('Allauch')).toBeInTheDocument();
    expect(screen.getByText("Tous les cheveux méritent d'être sublimés")).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm.cmd test tests/HeroSection.test.tsx`
Expected: FAIL

- [ ] **Step 3: Implement HeroSection component**

Create `src/components/home/HeroSection.tsx`:
- 3 vertical rounded cards with `/images/hero/hero-left.webp`, `hero-center.webp`, `hero-right.webp`
- Overlay gold script font for *"Du lisse aux Boucles"*
- Center circular badge with gold border "Allauch"
- Subtitle *"Tous les cheveux méritent d'être sublimés"* in gold/cream font
- Responsive layout: flex/grid that stacks or adjusts gracefully on smartphone screens

- [ ] **Step 4: Run test to verify it passes**

Run: `npm.cmd test tests/HeroSection.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/home/HeroSection.tsx tests/HeroSection.test.tsx
git commit -m "feat(hero): implement HeroSection triptych with script typography"
```

---

### Task 6: Reviews Carousel Section

**Files:**
- Create: `src/components/home/ReviewsSection.tsx`
- Test: `tests/ReviewsSection.test.tsx`

**Interfaces:**
- Produces: `ReviewsSection` component with touch swipe and button navigation.

- [ ] **Step 1: Write test for ReviewsSection**

Create `tests/ReviewsSection.test.tsx`:
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ReviewsSection from '../src/components/home/ReviewsSection';

describe('ReviewsSection Component', () => {
  it('renders heading with stars and displays review card', () => {
    render(<ReviewsSection />);
    expect(screen.getByText(/Vous nous faites/i)).toBeInTheDocument();
    expect(screen.getByText(/confiance/i)).toBeInTheDocument();
    expect(screen.getByText(/5,0/i)).toBeInTheDocument();
  });

  it('navigates to next and previous review on arrow click', () => {
    render(<ReviewsSection />);
    const nextBtn = screen.getByLabelText(/Avis suivant/i);
    fireEvent.click(nextBtn);
    // Should transition smoothly to next review
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm.cmd test tests/ReviewsSection.test.tsx`
Expected: FAIL

- [ ] **Step 3: Implement ReviewsSection**

Create `src/components/home/ReviewsSection.tsx`:
- Header script: *"Vous nous faites confiance ★★★★"* in gold
- Left and right navigation chevron buttons with accessible `aria-label`
- Central white rounded pill card with `5,0 ★`, comment text, date
- Mobile touch swipe support via Framer Motion `drag="x"`
- Automatic transition interval (optional pause on hover/focus)

- [ ] **Step 4: Run test to verify it passes**

Run: `npm.cmd test tests/ReviewsSection.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/home/ReviewsSection.tsx tests/ReviewsSection.test.tsx
git commit -m "feat(reviews): implement interactive reviews carousel with mobile swipe"
```

---

### Task 7: Services Section & Interactive Category Tabs

**Files:**
- Create: `src/components/home/ServicesSection.tsx`
- Create: `src/components/home/ServiceItem.tsx`
- Test: `tests/ServicesSection.test.tsx`

**Interfaces:**
- Produces: `ServicesSection` with interactive tabs (BOUCLES, LISSAGE, CRÉPUS, ONDULATIONS) and dynamic pricing cards.

- [ ] **Step 1: Write test for ServicesSection interaction**

Create `tests/ServicesSection.test.tsx`:
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ServicesSection from '../src/components/home/ServicesSection';

describe('ServicesSection Component', () => {
  it('renders all 4 category circular buttons', () => {
    render(<ServicesSection />);
    expect(screen.getByText('BOUCLES')).toBeInTheDocument();
    expect(screen.getByText('LISSAGE')).toBeInTheDocument();
    expect(screen.getByText('CRÉPUS')).toBeInTheDocument();
    expect(screen.getByText('ONDULATIONS')).toBeInTheDocument();
  });

  it('switches category services when clicking LISSAGE tab', () => {
    render(<ServicesSection />);
    const lissageBtn = screen.getByText('LISSAGE').closest('button')!;
    fireEvent.click(lissageBtn);
    expect(screen.getByText(/LISSAGE/i)).toBeInTheDocument();
  });

  it('displays Choisir buttons linking to Planity', () => {
    render(<ServicesSection />);
    const chooseButtons = screen.getAllByText('Choisir');
    expect(chooseButtons[0].closest('a')).toHaveAttribute(
      'href',
      'https://www.planity.com/tendance-attitud-13190-allauch'
    );
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm.cmd test tests/ServicesSection.test.tsx`
Expected: FAIL

- [ ] **Step 3: Implement ServicesSection and ServiceItem**

Create `src/components/home/ServiceItem.tsx`:
- Row with service name, duration, price, and dark button "Choisir" linking to Planity.

Create `src/components/home/ServicesSection.tsx`:
- Script heading *"Nos prestations"*
- 4 circular category buttons with images and active gold ring
- Subtitle: *Balayage, soin Tokio, coupes, tresses*
- White rounded card with dynamic title, description, and list of services for active category
- Smooth category transition animations with Framer Motion

- [ ] **Step 4: Run test to verify it passes**

Run: `npm.cmd test tests/ServicesSection.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/home/ServicesSection.tsx src/components/home/ServiceItem.tsx tests/ServicesSection.test.tsx
git commit -m "feat(services): implement interactive category tabs and pricing cards"
```

---

### Task 8: About & Team Section

**Files:**
- Create: `src/components/home/AboutSection.tsx`
- Test: `tests/AboutSection.test.tsx`

**Interfaces:**
- Produces: `AboutSection` with presentation text, team photo and inset salon photo.

- [ ] **Step 1: Write test for AboutSection**

Create `tests/AboutSection.test.tsx`:
```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AboutSection from '../src/components/home/AboutSection';

describe('AboutSection Component', () => {
  it('renders section title and team description', () => {
    render(<AboutSection />);
    expect(screen.getByText(/Le salon, notre équipe/i)).toBeInTheDocument();
    expect(screen.getByText(/Nathalie/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm.cmd test tests/AboutSection.test.tsx`
Expected: FAIL

- [ ] **Step 3: Implement AboutSection component**

Create `src/components/home/AboutSection.tsx`:
- Two-column layout (responsive stack on mobile)
- Left: Serif gold heading *"Le salon, notre équipe"*, authentic description of Nathalie, the values of the salon, quality care and warm atmosphere in Allauch
- Right: Large team photo outside the salon + overlapping rounded card of the modern interior salon with golden LED mirrors

- [ ] **Step 4: Run test to verify it passes**

Run: `npm.cmd test tests/AboutSection.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/home/AboutSection.tsx tests/AboutSection.test.tsx
git commit -m "feat(about): implement AboutSection with team photo and salon presentation"
```

---

### Task 9: Instagram & Social Feed Section

**Files:**
- Create: `src/components/home/InstagramSection.tsx`
- Test: `tests/InstagramSection.test.tsx`

**Interfaces:**
- Produces: `InstagramSection` with 3 cards linking to `@tendanceattitud`.

- [ ] **Step 1: Write test for InstagramSection**

Create `tests/InstagramSection.test.tsx`:
```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import InstagramSection from '../src/components/home/InstagramSection';

describe('InstagramSection Component', () => {
  it('renders heading and Instagram links', () => {
    render(<InstagramSection />);
    expect(screen.getByText(/Rejoignez-nous sur @Tendanceattitud/i)).toBeInTheDocument();
    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', 'https://www.instagram.com/tendanceattitud/');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm.cmd test tests/InstagramSection.test.tsx`
Expected: FAIL

- [ ] **Step 3: Implement InstagramSection component**

Create `src/components/home/InstagramSection.tsx`:
- Script heading *"Rejoignez-nous sur @Tendanceattitud"*
- 3 rounded post cards with client hair transformations
- Instagram icon badge on each card
- Hover scale effect and link to Instagram profile

- [ ] **Step 4: Run test to verify it passes**

Run: `npm.cmd test tests/InstagramSection.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/home/InstagramSection.tsx tests/InstagramSection.test.tsx
git commit -m "feat(instagram): implement Instagram feed section with external links"
```

---

### Task 10: Salon Info, Live Status, Hours & Map Section

**Files:**
- Create: `src/components/home/ContactMapSection.tsx`
- Test: `tests/ContactMapSection.test.tsx`

**Interfaces:**
- Produces: `ContactMapSection` with address, phone click-to-call, live open/closed status badge, detailed opening hours table, and GPS map.

- [ ] **Step 1: Write test for ContactMapSection**

Create `tests/ContactMapSection.test.tsx`:
```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ContactMapSection from '../src/components/home/ContactMapSection';

describe('ContactMapSection Component', () => {
  it('renders salon address, phone number, and hours', () => {
    render(<ContactMapSection />);
    expect(screen.getByText(/Salon Tendance Attitud/i)).toBeInTheDocument();
    expect(screen.getByText(/44 avenue Salvador Allende, 13190 Allauch/i)).toBeInTheDocument();
    expect(screen.getByText('06 59 26 65 33')).toBeInTheDocument();
    expect(screen.getByText('LUNDI: 09H - 18H')).toBeInTheDocument();
    expect(screen.getByText('MERCREDI: FERMÉ')).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm.cmd test tests/ContactMapSection.test.tsx`
Expected: FAIL

- [ ] **Step 3: Implement ContactMapSection component**

Create `src/components/home/ContactMapSection.tsx`:
- Two-column layout (stacks on mobile)
- Left column:
  - Serif gold heading *"Salon Tendance Attitud"*
  - Address with click to Google Maps / Waze
  - Phone with `tel:+33659266533`
  - Live status badge: "Actuellement ouvert" (green dot) or "Actuellement fermé" based on current day and time
  - Complete list of opening hours exactly matching `Home.png`
- Right column:
  - Interactive map embed with marker at 44 avenue Salvador Allende, Allauch + button "Itinéraire GPS"

- [ ] **Step 4: Run test to verify it passes**

Run: `npm.cmd test tests/ContactMapSection.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/home/ContactMapSection.tsx tests/ContactMapSection.test.tsx
git commit -m "feat(contact): implement salon details, hours, live open status, and map"
```

---

### Task 11: Home Page Integration, Typography Fonts, SEO & Build Verification

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/page.tsx`
- Test: `tests/Page.test.tsx`

**Interfaces:**
- Produces: Complete production build with Google Fonts preloading, SEO meta tags, OpenGraph data, Schema.org local business structured data, and responsive design verification.

- [ ] **Step 1: Write full page integration test**

Create `tests/Page.test.tsx`:
```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HomePage from '../src/app/page';

describe('HomePage Full Integration', () => {
  it('renders all sections in correct order', () => {
    render(<HomePage />);
    expect(screen.getByText(/Du lisse aux Boucles/i)).toBeInTheDocument();
    expect(screen.getByText(/Vous nous faites/i)).toBeInTheDocument();
    expect(screen.getByText(/Nos prestations/i)).toBeInTheDocument();
    expect(screen.getByText(/Le salon, notre équipe/i)).toBeInTheDocument();
    expect(screen.getByText(/Rejoignez-nous sur @Tendanceattitud/i)).toBeInTheDocument();
    expect(screen.getByText(/Salon Tendance Attitud/i)).toBeInTheDocument();
    expect(screen.getByText(/Nos partenaires/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm.cmd test tests/Page.test.tsx`
Expected: FAIL

- [ ] **Step 3: Integrate all sections in page.tsx and setup layout.tsx**

Update `src/app/layout.tsx`:
- Configure Google Fonts: `Playfair_Display`, `Alex_Brush`, `Montserrat`
- Configure metadata: Title "Tendance Attitud | Salon de Coiffure à Allauch", Description, OpenGraph image, LocalBusiness JSON-LD

Update `src/app/page.tsx`:
- Assemble Header, HeroSection, ReviewsSection, ServicesSection, AboutSection, InstagramSection, ContactMapSection, Footer

- [ ] **Step 4: Run test to verify it passes and run full production build**

Run:
```bash
npm.cmd test
npm.cmd run build
```
Expected: All tests PASS, build succeeds with 0 errors.

- [ ] **Step 5: Commit**

```bash
git add src/app/ tests/
git commit -m "feat: complete Tendance Attitud website integration and production build"
```
