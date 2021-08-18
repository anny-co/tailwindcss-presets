const plugin = require("tailwindcss/plugin");
const color = require("color");

const themeModel = {
  "anny": "#333366",
  "dark": "#131333",
  "neutral": "#ffffff",
  "neutral-muted": "#f3f3f3",
  "primary": "#2b6af8",
  "primary-muted": "#c0d0f4",
  "secondary": "#ff9814",
  "secondary-muted": "#ffc478"
};

module.exports = plugin(function ({ addUtilities, variants }) {
  Object.entries(themeModel).forEach(([key, defaultValue]) => {
    const [r, g, b] = color(defaultValue).rgb().array();
    return addUtilities(
      [["bg", "backgroundColor"], ["text", "color"], ["border", "borderColor"]]
        .map(([type, property]) => ({
          [`.${type}-${key}`]: {
            [`--tw-${type}-opacity`]: "1",
            [property]: `var(--bg-${key}, rgba(${r}, ${g}, ${b}, var(--tw-${type}-opacity)))`
          }
        }))
        .reduce((previous, current) => ({ ...previous, ...current }), {}),
      variants("theming"));
  });
});