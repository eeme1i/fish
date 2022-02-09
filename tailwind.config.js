module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding:{
        '1/2': '50%',
        full: '100%',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}