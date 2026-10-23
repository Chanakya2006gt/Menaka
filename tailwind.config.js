/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          950: '#1F050D',
          900: '#2D0A14',
          800: '#3E0E1B',
          700: '#541526',
          600: '#721E36',
          100: '#F5E6EB',
          50: '#FDF7F9',
        },
        gold: {
          700: '#8C6C26',
          600: '#A9832E',
          500: '#C5A059',
          400: '#D4AF37',
          300: '#E5C778',
          200: '#F2DFAB',
          100: '#FAF1D6',
          50: '#FDFBF4',
        },
        ivory: {
          50: '#FDFBF7',
          100: '#FAF7F2',
          200: '#F4ECE1',
          300: '#EDE0CF',
        },
        charcoal: {
          900: '#1A1616',
          800: '#2B2626',
          700: '#403A3A',
          600: '#5C5454',
          500: '#7A7272',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.28em',
      }
    },
  },
  plugins: [],
}
