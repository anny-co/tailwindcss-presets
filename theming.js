const plugin = require("tailwindcss/plugin");
const defaultColors = require("./colors");

module.exports = plugin(function ({ addUtilities, variants }) {
  Object.entries(defaultColors).forEach(([key, defaultValue]) => {
    const [r, g, b] = defaultValue;
    return addUtilities(
      [["bg", "backgroundColor"], ["text", "color"], ["border", "borderColor"]]
        .map(([type, property]) => ({
          [`.${type}-${key}`]: {
            [`--tw-${type}-opacity`]: "1",
            [property]: `var(--${type}-${key}, rgba(${r}, ${g}, ${b}, var(--tw-${type}-opacity)))`
          }
        }))
        .reduce((previous, current) => ({ ...previous, ...current }), {}),
      variants("theming"));
  });
});
