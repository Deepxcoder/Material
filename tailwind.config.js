/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pixel-dark-charcoal': '#121212',
        'pixel-slate-grey': '#2b2d31',
        'pixel-xp-green': '#4caf50',
        'pixel-lite-navy': '#0a192f',
        'pixel-lite-charcoal': '#222222',
        'pixel-lite-offwhite': '#fcfcfc',
        'pixel-purple-deep': '#1a1a2e',
        'pixel-neon-teal': '#00fff5',
        'pixel-magenta': '#ff2e63',
        'pixel-offwhite': '#f9f9f9',
        'pixel-charcoal': '#333333',
        'pixel-mint': '#9df9ef',
        'pixel-blue': '#a2d2ff',
        'navy-dark': '#0a0f1c',
        'navy-base': '#0d1326',
        'electric-blue': '#00e5ff',
        'purple-glow': '#8a2be2',
        glass: "rgba(255, 255, 255, 0.05)",
        glassBorder: "rgba(255, 255, 255, 0.1)",
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        'pixel': '3px',
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
        'pixel': ['"Press Start 2P"', 'cursive'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
        'ambient-glow': 'radial-gradient(circle at 50% 0%, rgba(0, 229, 255, 0.15) 0%, transparent 60%)',
        'study-glow': 'radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.2) 0%, transparent 70%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-inner': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
        'glow-blue': '0 0 20px rgba(0, 229, 255, 0.3)',
        'glow-purple': '0 0 20px rgba(138, 43, 226, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'pulse-glow': 'pulseGlow 3s infinite alternate',
        'float-up': 'floatUp 1.5s ease-out forwards',
        'breathe': 'breathe 4s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 15px rgba(0, 229, 255, 0.2)' },
          '100%': { boxShadow: '0 0 25px rgba(0, 229, 255, 0.5)' },
        },
        floatUp: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-30px)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', filter: 'brightness(1)' },
          '50%': { transform: 'scale(1.02)', filter: 'brightness(1.2)' },
        },
      }
    },
  },
  plugins: [],
}
