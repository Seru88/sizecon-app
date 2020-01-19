module.exports = {
  theme: {
    fontFamily: {
      'main': ['"M PLUS Rounded 1c"', 'sans-serif']
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'twitter-lighter': '#2bc4ff',
      'twitter': '#00acee',
      'twitter-darker': '#008abe'
    }),
    extend: {}
  },
  variants: {},
  plugins: []
}
