const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#9bff00",
        secondary: "#23262f",
        neutral: "#353945",
        "light-neutral": "#777E90",
        black: "#141416",
      },
    },
  },
  plugins: [],
});
