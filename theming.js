const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities, variants }) {
  Object.entries(themeModel).forEach(([key, defaultValue]) => {
    const [r, g, b] = color(defaultValue).rgb().array();
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
