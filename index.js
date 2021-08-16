const colors = require("tailwindcss/colors");
const transform = require("./transform");

const { translate, scale } = transform();

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
      translate,
      scale,
      colors: {
        "anny": "var(--anny, #333366)",
        "dark": "var(--dark, #131333)",
        "primary": "var(--primary, #2b6af8)",
        "primary-muted": "var(--primary-muted, #c0d0f4)",
        "secondary": "var(--secondary, #ff9814)",
        "secondary-muted": "var(--secondary-muted, #ffc478)",
        "neutral": "var(--neutral-b, #ffffff)",
        "neutral-muted": "var(--neutral-b, #f3f3f3)",
        "anny-default": "#333366",
        "anny-dark-default": "#131333",
        "primary-default": "#2b6af8",
        "primary-muted-default": "#c0d0f4",
        "secondary-default": "#ff9814",
        "secondary-muted-default": "#ffc478",
        "neutral-default": "#ffffff",
        "neutral-muted-default": "#f3f3f3",
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

      ...colors, // TODO(fix): this causes warnings due to deprecation of lightBlue
      lightBlue: undefined,
      gray: colors.trueGray, // set gray to trueGray palette
    },
  },
  plugins: [require("./base"), require("./fades")],
};
