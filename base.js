const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addBase }) {
  addBase({
    h1: {
      fontFamily: "Gilroy",
      fontWeight: 600,
    },
    h2: {
      fontFamily: "Gilroy",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "Gilroy",
      fontWeight: 600,
    },
  });
});
