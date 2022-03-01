const transform = require("./transform");
const defaultColors = require("./colors");
const { neutral } = require("tailwindcss/colors")
/**
 * Converts a given color variable into a tailwindcss-compliant color with opacity modifier
 * @param {string} variable CSS variable name that encodes the color compliant to the CSS rgb() function spec, i.e., as space-separated tuple of channels
 * @param {string} defaultValue
 * @returns CSS property value for tailwind color
 */
function withOpacityValue(variable, defaultValue) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}, ${defaultValue}) / ${opacityValue})`;
  };
}

const themeModel = Object.entries(defaultColors)
  .map(([name, tuple]) => ({ name, color: tuple.join(" ") })) // join channel array to CSS-compliant space-separated string
  .map(({ name, color }) => ({
    name,
    color: withOpacityValue(`--${name}`, color),
  })) // create function closure for opacity levels
  .reduce((acc, { name, color }) => ({ ...acc, [name]: color }), {}); // zip-up array to object again

const fallbackModel = Object.entries(defaultColors)
  .map(([name, tuple]) => ({ name: `${name}-default`, color: tuple.join(" ") })) // join channel array to CSS-compliant space-separated string
  .map(({ name, color }) => ({
    name,
    color: ({ opacityValue }) =>
      opacityValue === undefined
        ? `rgb(${color})`
        : `rgb(${color} / ${opacityValue})`,
  })) // create function closure for opacity levels
  .reduce((acc, { name, color }) => ({ ...acc, [name]: color }), {}); // zip-up array to object again

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
        ...themeModel,
        ...fallbackModel,
        // "anny-default": "#333366",
        // "anny-dark-default": "#131333",
        // "neutral-default": "#ffffff",
        // "neutral-muted-default": "#f3f3f3",
        // "primary-default": "#2b6af8",
        // "primary-muted-default": "#c0d0f4",
        // "secondary-default": "#ff9814",
        // "secondary-muted-default": "#ffc478",
        gray: neutral, // reset default blue-ish gray to neutral gray
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    }
  },
  plugins: [require("./base"), require("./fades"), /* require('./theming') */],
};
