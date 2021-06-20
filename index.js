const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Lato",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "'Helvetica Neue'",
          "Arial",
          "'Noto Sans'",
          "sans-serif",
          "'Apple Color Emoji'",
          "'Segoe UI Emoji'",
          "'Segoe UI Symbol'",
          "'Noto Color Emoji'",
        ],
        headline: [
          "Gilroy",
          "Lato",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "'Helvetica Neue'",
          "Arial",
          "'Noto Sans'",
          "sans-serif",
          "'Apple Color Emoji'",
          "'Segoe UI Emoji'",
          "'Segoe UI Symbol'",
          "'Noto Color Emoji'",
        ],
      },
      colors: {
        anny: "#333366",
        "anny-dark": "#131333",
        primary: "#2b6af8",
        "primary-muted": "#c0d0f4",
        secondary: "#ff9814",
        "secondary-muted": "#ffc478",
        neutral: "#ffffff",
        "neutral-muted": "#f3f3f3",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",

      ...colors,

      gray: colors.trueGray, // set gray to trueGray palette
    },
  },
  plugins: [require("./base")],
};
