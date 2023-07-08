/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color1': '#C1DCDC',
        'color2': '#1E1E1E',
      },
      fontFamily: {
        popins: ['Dancing Script','cursive'],
      },
    },
  },
  plugins: [],
}

