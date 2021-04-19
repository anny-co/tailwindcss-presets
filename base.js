const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addBase, theme }) {
  addBase({
    h1: {
      fontFamily: theme('fontFamily.headline'),
      fontWeight: theme('fontWeight.semibold'),
    },
    h2: {
      fontFamily: theme('fontFamily.headline'),
      fontWeight: theme('fontWeight.semibold'),
    },
    h3: {
      fontFamily: theme('fontFamily.headline'),
      fontWeight: theme('fontWeight.semibold'),
    },
  });
});
