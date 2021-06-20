const plugin = require("tailwindcss/plugin");

const linearMasksStartPoints = {
  2: "50%",
  3: "66.67%",
  4: "75%",
  5: "80%",
  50: "50%",
  60: "60%",
  70: "70%",
  75: "75%",
  80: "80%",
  90: "90%"
};

module.exports = plugin(function ({ addUtilities, variants }) {
  Object.entries(linearMasksStartPoints).forEach(([key, value]) => addUtilities({
    [`.fade-right-${key}`]: {
      "mask-image": `linear-gradient(to right, black ${value}, transparent 100%)`,
      "-webkit-mask-image": `linear-gradient(to right, black ${value}, transparent 100%)`
    },
    [`.fade-bottom-${key}`]: {
      "mask-image": `linear-gradient(to bottom, black ${value}, transparent 100%)`,
      "-webkit-mask-image": `linear-gradient(to bottom, black ${value}, transparent 100%)`
    },
    [`.fade-left-${key}`]: {
      "mask-image": `linear-gradient(to left, black ${value}, transparent 100%)`,
      "-webkit-mask-image": `linear-gradient(to left, black ${value}, transparent 100%)`
    },
    [`.fade-top-${key}`]: {
      "mask-image": `linear-gradient(to top, black ${value}, transparent 100%)`,
      "-webkit-mask-image": `linear-gradient(to top, black ${value}, transparent 100%)`
    },
  }, variants("fades")));
});