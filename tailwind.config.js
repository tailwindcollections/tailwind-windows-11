module.exports = {
  mode : 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily : {
        sans : ['Segoe Ui', 'sans-serif']
      },
      colors: {
        purple : '#223167'
      },
      boxShadow : {
        md: '4px 4px 8px rgba(0, 0, 0, 0.09)',
        search : '0px 3px 0px #0084FF'
      },
      opacity : {
        65 : '0.65'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
