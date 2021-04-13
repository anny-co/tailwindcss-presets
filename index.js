const plugin = require("tailwindcss/plugin");
const annyConfig = require("./tailwind.config");

module.exports = {
  plugins: [plugin(function ({ addBase }) {
    addBase({
      'h1': {
        fontFamily: 'Gilroy',
        fontWeight: 600,
      },
      'h2': {
        fontFamily: 'Gilroy',
        fontWeight: 600,
      },
      'h3': {
        fontFamily: 'Gilroy',
        fontWeight: 600,
      },
      
    })
  }, annyConfig)],
};
