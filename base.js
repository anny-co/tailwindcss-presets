const plugin = require("tailwindcss/plugin");

const fontWeights = {
  300: "light",
  600: "semibold",
  800: "extrabold",
};

module.exports = plugin(function ({ addBase, addUtilities, addComponents, theme }) {
  addBase({
    h1: {
      fontFamily: theme("fontFamily.headline"),
      fontWeight: theme("fontWeight.semibold"),
    },
    h2: {
      fontFamily: theme("fontFamily.headline"),
      fontWeight: theme("fontWeight.semibold"),
    },
    h3: {
      fontFamily: theme("fontFamily.headline"),
      fontWeight: theme("fontWeight.semibold"),
    },
  });

  Object.entries(fontWeights).forEach(([weight, name]) => addUtilities({
    [`.font-gilroy-${name}`]: {
      fontFamily: "'Gilroy', sans-serif",
      fontWeight: weight
    }
  }));

  addUtilities({
    ".font-gilroy": {
      fontFamily: "'Gilroy', sans-serif",
    }
  });

  addComponents({
    ".full-page": {
      display: "flex",
      flexDirection: "column",
      flexGrow: "1"
    }
  });
});
