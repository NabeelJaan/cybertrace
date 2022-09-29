/** @type {import('tailwindcss').Config} */

module.exports = {

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {

    extend: {

      textColor: {
        'golden'  : '#b8894b',
        'gold'    : '#BA8C49'
      },

      backgroundColor: {
        'golden'  : '#b8894b',
        'gold'    : '#BA8C49'
      },

      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },

      lineHeight: {
        '73px'  : '73px',
        '66px'  : '66px',
        '50px'  : '50px',
        '45px'  : '45px',
        '42px'  : '42px',
        '40px'  : '40px',
        '30px'  : '30px',
        '28px'  : '28px',
        '27px'  : '27px',
        '26px'  : '26px',
        '25px'  : '25px',
        '22px'  : '22px',
        '16px'  : '16px'
      },
      fontSize: {
        '52px'  : '52px',
        '58px'  : '58px',
        '38px'  : '38px',
        '32px'  : '32px',
        '31px'  : '31px',
        '26px'  : '26px',
        '23px'  : '23px',
        '19px'  : '19px',
        '17px'  : '17px',
        '15px'  : '15px',
        '11px'  : '11px'
      },

      maxWidth: {
        '1140px' : '1140px'
      },

      margin: {
        '38px' : '38px',
        '15px' : '15px'
      },

      spacing: {
        '45px': '45px'
      }
    },
  },

  plugins: [],
}
