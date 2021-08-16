module.exports = (function () {

  // Generates a 'translate' extension for tailwind to the base of 10, i.e. 10%, 20%, ... with their negative versions as well
  const translate = Array(10) // array of length 10
    .fill(10) // fill with base value
    .map((value, index) => value * index)
    .filter(value => (value % 100) !== 0) // filter bottom and top elements (though 100 is not even included)
    .map(ratio => ({
      [`${ratio / 10}/10`]: `${ratio}%`,
      [`-${ratio / 10}/10`]: `-${ratio}%`,
    }))
    .reduce((p, v) => ({
      ...p,
      ...v,
    }), {}); // spread all elements in list to top-level
  
  // Generates a 'scale' extension for tailwind around 1, i.e. 0.1, 0.2,..., 0.9, 1.1, 1.2,..., 1.9.
  const scale = Array(10)
    .fill(1)
    .map((value, index) => value * (index/10))
    .filter(value => (value % 1) !== 0)
    .map(ratio => ({
      [`${Math.round(10 * (1 + ratio))}/10`]: `${Number((1 + ratio).toPrecision(2))}`,
      [`${Math.round(10 * (1 - ratio))}/10`]: `${Number((1 - ratio).toPrecision(2))}`,
    }))
    .reduce((p, v) => ({
      ...p,
      ...v,
    }), {});

  return {
    translate,
    scale,
  };
});