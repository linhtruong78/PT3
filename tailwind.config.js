/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // PT3 Global Royal brand palette
        matte: {
          black: '#0a0a0a',
          900: '#111111',
          800: '#1a1a1a',
          700: '#222222',
          600: '#2b2b2b',
        },
        gold: {
          metallic: '#c8a04a',
          champagne: '#e8d4a0',
          rose: '#c89b8c',
          DEFAULT: '#c8a04a',
          light: '#e6c97a',
          dark: '#8c6f2e',
        },
        emerald: {
          royal: '#0f5132',
          DEFAULT: '#0f5132',
          light: '#1c7a4d',
          deep: '#062b1a',
        },
        burgundy: {
          DEFAULT: '#5a1a2b',
          light: '#7a2a3d',
          deep: '#3a0e1c',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', '"Helvetica Neue"', 'system-ui', 'sans-serif'],
        persian: ['"Vazirmatn"', '"Cormorant Garamond"', 'serif'],
      },
      letterSpacing: {
        royal: '0.25em',
        cinematic: '0.4em',
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(135deg, #8c6f2e 0%, #c8a04a 25%, #e8d4a0 50%, #c8a04a 75%, #8c6f2e 100%)',
        'rose-shimmer': 'linear-gradient(135deg, #8b5a4d 0%, #c89b8c 50%, #e8c9bd 100%)',
        'marble-black': 'radial-gradient(ellipse at top, #1a1a1a 0%, #0a0a0a 60%, #000000 100%)',
        'emerald-deep': 'linear-gradient(180deg, #062b1a 0%, #0f5132 50%, #062b1a 100%)',
        'burgundy-deep': 'linear-gradient(180deg, #3a0e1c 0%, #5a1a2b 50%, #3a0e1c 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 40px rgba(200, 160, 74, 0.35)',
        'gold-soft': '0 0 80px rgba(200, 160, 74, 0.15)',
        'cinematic': '0 30px 80px -20px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'fade-up': 'fadeUp 1s ease-out forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
