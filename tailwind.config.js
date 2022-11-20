/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './ui/**/*.{ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        green: {
          100: '#51C5D1',
          200: '#20A2B0',
          300: '#087E8B'
        },
        orange: {
          100: '#FFB2B5',
          200: '#FF8588',
          300: '#FF5A5F'
        },
        yellow: {
          100: '#FFF0BD',
          200: '#FFDD6C',
          300: '#FFD23F'
        },
        black: '#262626',
        white: '#FDFFFF',
        gray: {
          100: '#909090',
          200: '#6B6B6B'
        },
        'transparent-black': 'rgba(38, 38, 38, 0.6)',
        'transparent-gray': 'rgba(167, 167, 167, 0.26)'
      },
      fontFamily: {
        sans: ["'Montserrat', sans-serif", "'Work Sans', sans-serif"]
      },
      
    },
  },
  plugins: [],
}
