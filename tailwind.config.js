/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container :{
      center: true,
      padding: '4rem',
    },
    extend: {
      colors: {
        primary: '#FF9F43',
        secondary: '#27AE60',
        light: '#FAFAFA',
        title: '#B7B6B6'
      },
      fontFamily : {
        spaceGrotest: ['Space Grotesk'],
        roboto: ['Roboto'],
        sourceSerifPro: ['Source Serif Pro']
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}
