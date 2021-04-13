const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addBase, theme }) {
  addBase({
    h1: {
      fontFamily: "'Gilroy'",
      fontWeight: 600,
      fontSize: theme('fontSize.4xl')
    },
    h2: {
      fontFamily: "'Gilroy'",
      fontWeight: 600,
      fontSize: theme('fontSize.3xl')
    },
    h3: {
      fontFamily: "'Gilroy'",
      fontWeight: 600,
      fontSize: theme('fontSize.2xl')
    },
  });
});
