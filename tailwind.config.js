/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'xs': '480px'
      },
      colors:{
        'coffee': {
            50:'#e8d6b0',
            200: '#c89f94',
            400:'#A25f4b',
            600:'#744838',
        }
      },
      fontFamily:{
        Karla:['Karla', 'sans-serif']
      },
      keyframes: {
        slideDown: {
          '0%': {transform: 'translateY(-100%)'},
          '100%': {transform: 'translateY(0)' },
        },
        fadeInt:{
          from:{ opacity:0},
          to:{ pacity: 1 }
        }
      },
      animation: {
        slideDown:'slideDown .5s ease-in-out',
        fadeInt: 'fadeInt .5s ease-in-out'
      }
    }
  },
  plugins: [],
}

