/** @type {import('tailwindcss').Config} */

module.exports = {

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {

    extend: {

      textColor: {
        'golden'   : '#b8894b',
        'gold'     : '#deb12b',
        'darkGray' : '#3B3B3B',
        'darkBlue' : '#4774C2',
        'lightGray' : '#9A9A9A'
      },
      
      backgroundColor: {
        'darkGold' : '#B77319',
        'golden'  : '#b8894b',
        'gold'    : '#BA8C49'
      },
      
      gradientColorStops: {
        'golden'  : '#b8894b',
        'gold'    : '#BA8C49'
      },

      fontFamily: {
        'roboto': ['Roboto Slab', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif']
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
        '22px'  : '22px',
        '19px'  : '19px',
        '17px'  : '17px',
        '15px'  : '15px',
        '11px'  : '11px'
      },

      maxWidth: {
        '1140px' : '1140px',
        '750px' : '750px',
        '430px' : '430px',
        '353px' : '353px'
      },
      minHeight: {
        '1/2': '50%',
      },
      
      margin: {
        '118px' : '118px',
        '38px' : '38px',
        '15px' : '15px'
      },
      padding: {
        '138px' : '138px',
        '100px' : '100px',
        '85px' : '85px',
        '55px' : '55px',
        '50px' : '50px',
        '45px' : '45px',
        '25px' : '25px',
        '15px' : '15px'
      },
      colors: {
        'golden': '#b8894b',
      },
      spacing: {
        '45px': '45px'
      }
    },
  },

  plugins: [],
}
