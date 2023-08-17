/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'light-coffee':'#c89f94'
      },
      fontFamily:{
        Karla:['Karla', 'sans-serif']
      },
      keyframes: {
        slideDown: {
          '0%': {transform: 'translateY(-100%)'},
          '100%': {transform: 'translateY(0)' },
        },
      },
      animation: {
        slideDown:'slideDown .4s ease-in-out',
      }
    }
  },
  plugins: [],
}

