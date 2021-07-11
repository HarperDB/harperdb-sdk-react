const { fontFamily, colors } = require("tailwindcss/defaultTheme");

module.exports = {
  prefix: "tw-",
  darkMode: false,
  theme: {
    extend: {
      colors: {
        ...colors,
        accent1: "var(--accent1)",
        accent2: "var(--accent2)",
        accent3: "var(--accent3)",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      spacing: {
        108: "28rem",
        116: "32rem",
        128: "36rem",
        256: "44rem",
        512: "60rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
