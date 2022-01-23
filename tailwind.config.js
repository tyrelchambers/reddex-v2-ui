module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "2200px",
      },

      colors: {
        primary: {
          black: "#0D0C1D",
          "dark-blue": "#12162B",
          "off-white": "#F5F5F5",
        },
        accent: {
          primary: "#DA4167",
        },
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
