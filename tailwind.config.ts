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
          900: '#1A2010',
          800: '#242B17',
          700: '#2E361E',
          600: '#394326',
        },
        gold: {
          100: '#FFFBEA',
          200: '#FFF8D6',
          300: '#FFF0B3',
          400: '#FFE88B',
          500: '#F5D76E',
          600: '#D4AF37',
        },
      },
      fontFamily: {
        kaushan: ['"Kaushan Script"', 'var(--font-kaushan)', 'cursive'],
        yellowtail: ['"Yellowtail"', 'var(--font-yellowtail)', 'cursive'],
        'right-attitude': ['"The Right Attitude"', 'var(--font-right-attitude)', '"Bickham Script Pro"', 'cursive'],
        bickham: ['"Bickham Script Pro"', 'var(--font-bickham)', 'var(--font-script)', 'cursive'],
        script: ['"Bickham Script Pro"', 'var(--font-bickham)', 'var(--font-script)', 'cursive'],
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
