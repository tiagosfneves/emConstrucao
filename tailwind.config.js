/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          500: '#7C3AED',
          600: '#6D28D9',
          700: '#5B21B6',
        },
        accent: {
          500: '#60A5FA',
          600: '#3B82F6',
        },
      },
      boxShadow: {
        glow: '0 10px 30px rgba(99,102,241,0.35)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.25)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        fadeInUp: 'fadeInUp .8s ease-out forwards',
        glow: 'glow 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
