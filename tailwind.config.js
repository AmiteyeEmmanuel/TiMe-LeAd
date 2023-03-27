const defaultTheme = require('tailwindcss/defaultTheme')
const windmill = require('@windmill/react-ui/config')

module.exports = windmill({
  purge: ['src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'white': '#fff',
        'blue': '#004db1',
        'dark-pink':'#FF577F',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'footer-color': '#000f26',
        'light-orange':'#E7AB9A',
        'light-purple': '#D09CFA',
        'light-blue': '#B1AFFF',
        'green': '#13ce66',
        'light-green': '#9DC08B',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#AAAAAA',
        'red': '#5b0e0e',
        'grey-white':'#B8B5FF'
      },
      screens: {
        'xs':
        {
          'max':'630px'
        },
     
         // => @media (max-width: 240px) { ... }
         
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      boxShadow: {
        bottom: '0 5px 6px -7px rgba(0, 0, 0, 0.6), 0 2px 4px -5px rgba(0, 0, 0, 0.06)',
      },
    },
  },
})
