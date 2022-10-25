/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: { 
        "serif" : ["Cormorant SC","serif"],
        "sans-serif":["Lato","sans-serif"],
      },
     
      minHeight: {
        "card":"15rem"
      },
      colors: {
        "blue":{
          "header":"#22223b",
          "card":"#4A4E69"
          },
        "purple":"#9A8C98",
        "sauvignon-cr":"#F2E9E4",
        "light-p":"#9a8c98",
        "red":"#E10606",
        },
        screens: {
          "sm": '480px',
          "md": '768px',
          "lg": '976px',
          "lg-2":'1200px',
          "xl": '1440px',
      },
      fontSize:{
        "4.5xl":"2.3rem",
        "5.5xl":"3rem",
        "8.5xl":"6.9rem",
      }
  },
},
plugins: [
    function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
    }
  ],
}