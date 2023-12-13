/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        // xxl
        'xxl': '1280px'
      },
      maxWidth: {
        'base': '1580px'
      },
      fontFamily: {
        'rubik': ['Rubik']
      },
      colors: {
        'primary': '#464646',
        'secondary': '#676E74',
        'pink': '#C968CB',
        'push': '#704DC2',
        'bed': '#704DC2'
      },
      backgroundImage: {
        'heropattern': "url('../images/inyer.png')"
      }
    },
  },
  plugins: [],
}

