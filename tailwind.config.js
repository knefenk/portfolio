/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        zinc: {
          850: '#1f2022',
          900: '#18181b',
          950: '#09090b',
        },
        space: {
          black: '#050505', 
          glass: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(255, 255, 255, 0.08)',
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'pulse-subtle': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 120s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}