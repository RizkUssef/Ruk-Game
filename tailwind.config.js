/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    colors: {
      'bg': '#1E1E1E',
      'shadow': 'rgba(235, 131, 23,0.3)',
      'primary': '#EB8317',
      'secondary': '#CF965B',
      "linear-start-top" :'#000000',
      "linear-end-bottom" :'rgba(102, 102, 102,0.4)',
      "linear-start-left" :'#1e1e1e',
      "linear-end-right" :'rgba(132, 132, 132,0.2)',
      "search-shadow" : 'rgba(0,0,0,0.5)'
    },
    fontFamily: {
      serif: ['Iceberg', 'serif'],
    },
    extend: {
      spacing: {
        '230': '230px',
        '300': '300px',
        '472':'472px'
      },
      dropShadow: {
        'nav': '0px 8px 15px rgba(235, 131, 23,0.3) ', 
        'footer': '0px -8px 15px rgba(235, 131, 23,0.3) ', 
        'main': '0 0 15px rgba(235, 131, 23,0.3) ', 
      },

    },
  },
  plugins: [],
}

