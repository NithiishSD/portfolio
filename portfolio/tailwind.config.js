/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#FFFEF9',
          100: '#FDF6E3',
          200: '#F5F5DC',
          300: '#EDE5C8',
          400: '#E5D5B0',
          500: '#DCC598',
        },
        gold: {
          400: '#E5C87E',
          500: '#D4AF37',
          600: '#C19B28',
        },
        ink: {
          700: '#3A3A2E',
          800: '#2C2C22',
          900: '#1E1E16',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        body: ['Merriweather', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
