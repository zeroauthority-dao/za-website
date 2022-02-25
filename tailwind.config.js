module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/trianglify.png')"
      },
      borderRadius: {
        'full': '99px'
      }
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    }
  },
  plugins: [],
}