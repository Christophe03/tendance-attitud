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
