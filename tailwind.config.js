/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        secondary: '#FFD700',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        'scale-up': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.97)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'scale-up': 'scale-up 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in': 'fade-in 0.25s ease-in-out',
        'slide-up': 'slide-up 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
      }
    },
  },
  plugins: [],
}
