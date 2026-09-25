/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sciBlue: {
          DEFAULT: '#00E5FF',
          50: '#E0FCFF',
          100: '#B3F8FF',
          200: '#80F3FF',
          300: '#4DEEFF',
          400: '#26E9FF',
          500: '#00E5FF',
          600: '#00B8D4',
          700: '#0097A7',
          800: '#00838F',
          900: '#006064',
        },
        bioTeal: {
          DEFAULT: '#00B8D4',
          50: '#E0F7FA',
          100: '#B2EBF2',
          200: '#80DEEA',
          300: '#4DD0E1',
          400: '#26C6DA',
          500: '#00B8D4',
          600: '#0097A7',
          700: '#00838F',
          800: '#006064',
          900: '#004D40',
        },
        deepNavy: {
          DEFAULT: '#031525',
          50: '#F4FAFF',
          100: '#A9C4D8',
          200: '#688FA8',
          300: '#3A6380',
          400: '#1F435E',
          500: '#0E2E47',
          600: '#0A253C',
          700: '#06243A',
          800: '#031525',
          900: '#02101F',
        },
        lab: {
          bg: '#031525',
          secondaryBg: '#06243A',
          deepBg: '#02101F',
          card: 'rgba(7, 30, 48, 0.75)',
          border: 'rgba(0, 229, 255, 0.25)',
          borderHover: 'rgba(0, 229, 255, 0.50)',
          cyanAccent: '#00E5FF',
          cyanSecondary: '#00B8D4',
          textMain: '#F4FAFF',
          textMuted: '#A9C4D8',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Space Grotesk', 'Sora', 'Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'subtle-glow': '0 0 25px -5px rgba(14, 165, 233, 0.15)',
        'biotech-glow': '0 0 30px -5px rgba(16, 185, 129, 0.2)',
        'premium-card': '0 10px 30px -10px rgba(15, 23, 42, 0.08)',
        'premium-hover': '0 20px 40px -15px rgba(14, 165, 233, 0.18)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-very-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '0.4' },
        }
      }
    },
  },
  plugins: [],
}
