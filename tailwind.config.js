module.exports = {
  purge: [
    './public/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      translate: ['motion-reduce']
    },
  },
  plugins: [],
}
