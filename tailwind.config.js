/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    
    extend: {
      colors:
      {
        'datesprimary': '#fafafa',
        'datessecondary': '#969696',
        'border':'#eeeeee',
        'datesDarkPrimary':'#141414',
        'darkBorder':'#2d2727'

        
  
      },
    },
    
    screens: {
      's': '320px', //small mobile
      'm': '375px', //small mobile
      'l': '425px', //large mobile
      'sm': '640px', //small Tablet
      'md': '768px	', // tablet
      '2md': '894px',
      'lg': '1024px', //laptop
      'xl': '1280px	', //large laptop
      '2xl': '1536px	', //large screens
    },
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif'],
      Roboto: ['Roboto Mono', 'monospace'],
      Chakra: ['Chakra Petch', 'sans-serif'],
    },
  },
  plugins: [],
}

