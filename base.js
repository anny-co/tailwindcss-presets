const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addBase, theme }) {
  addBase({
    h1: {
      fontFamily: theme('fontFamily.headline'),
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.4xl')
    },
    h2: {
      fontFamily: theme('fontFamily.headline'),
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.3xl')
    },
    h3: {
      fontFamily: theme('fontFamily.headline'),
      fontWeight: theme('fontWeight.semibold'),
      fontSize: theme('fontSize.2xl')
    },
  });
});
