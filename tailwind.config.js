module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': "1400px",
    },
    extend: {
      colors: {
        "color-primary": "#0FB95D",
        "color-secondary": "#3F5448",
        "color-tertiary": "#F9F9F9",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        main: "50px",
      },
    },
  },
  plugins: [],
};
