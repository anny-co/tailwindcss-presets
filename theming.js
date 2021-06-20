const plugin = require("tailwindcss/plugin");

const themeModel = {
  anny: "#333366",
  dark: "#131333",
  "neutral-a": "#ffffff",
  "neutral-b": "#f3f3f3",
  "primary": "#2b6af8",
  "primary-muted": "#c0d0f4",
  "secondary": "#ff9814",
  "secondary-muted": "#ffc478"
};

module.exports = plugin(function ({ addUtilities, variants }) {
  Object.entries(themeModel).forEach(([key, defaultValue]) => addUtilities({
    [`.bg-theme-${key}`]: {
      backgroundColor: `var(--${key}, ${defaultValue})`
    },
    [`.text-theme-${key}`]: {
      color: `var(--${key}, ${defaultValue})`
    }
  }, variants("theming")));
});