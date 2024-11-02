/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}',
    './index.html'
  ],
  theme: {
    extend: {   boxShadow: {
      'inner-deep': 'inset 0 4px 8px rgba(0, 0, 0, 0.3)', // Customize shadow
    },
      fontFamily:{
      
          'PopinsStyle':['Poppins','sans-serif'],
          'InKutStyle' : ['Inknut Antiqua', 'serif'],
          'coffeeItallic':['coffeeItallic','serif'],
        
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

