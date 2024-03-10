/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height:{
        '104': '515px',
        '114': '715px'
      },
      width:{
        '500': '1255px',
        '600': '1688px'
      }
    },
  },
  plugins: [],
}
