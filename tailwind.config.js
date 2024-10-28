/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily:{
      
          'PopinsStyle':['Poppins','sans-serif'],
          'InKutStyle' : ['Inknut Antiqua', 'serif']
        
      },
    width:{
      'calc-100vw/4': { width: 'calc(100vw /4)'}
    },
  keyframes:{
    Custom1:{
      '0%':{transform:'translateY(-9rem)'},
      '100%':{transform:'translateY(0rem)'},

    },
  },

  animation:{
    Custom1:'Custom1 1s ease-out forward',
  },

}},
  plugins: [],
}

