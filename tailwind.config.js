module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./shared/components/*.{js,ts,jsx,tsx}",
    "./shared/utils/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        ember: ["Amazon Ember", "sans-serif"],
      },
      colors: {
        amznPriNav: {
          DEFAULT: "#131921",
        },
        amznSecNav: {
          DEFAULT: "#232F3E",
        },
        amznYellow: {
          DEFAULT: "#FEBD69",
        },
        amznGray: {
          DEFAULT: "#D5DBDB",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
