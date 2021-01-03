const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: colors,
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
