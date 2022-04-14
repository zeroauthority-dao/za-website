module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'content': '1140px'
      },
      backgroundImage: {
        hero: "url('../public/trianglify.png')",
      },
      borderRadius: {
        full: "99px",
      },
      colors: {
        primary: "#14B8A6",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
