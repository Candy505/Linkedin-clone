/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: {'max': '640px'},
      // => @media (min-width: 640px) { ... }

      md: {'max':'768px'},
      // => @media (min-width: 768px) { ... }

      lg: {'max':'1024px'},
      // => @media (min-width: 1024px) { ... }
    },
    backgroundSize:{
   '100%':'100%'
    },
    extend: {},
  },
  plugins: [],
};
