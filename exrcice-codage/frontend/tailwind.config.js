//   tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      "my-blue": "#D2E5E9",
      placeholder: "#DCDCDC",
      white: "#fff",
      "item-gray": "#161C29",
      success: "#39BB37",
      danger: "#BB3737",
    },
    fontFamily: {
      Montserat: "Montserrat, sans-serif",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
