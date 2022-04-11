# @anny.co/tailwindcss-presets

Some quick and handy presets for TailwindCSS (>= v2.0.0) that converge the anny
Corporate Identity with Tailwind's color scheme, supports dynamic theming using
CSS variables and more.

## Colors

Among the largest change are the custom color utilities for supporting dynamic
theming using a given color model: The values of the colors are provided
dynamically, and the generated utility classes respect that:

```js
// anny-specific theming defaults
// resorts to functional patterns to make colors dynamic to opacity modifiers from tailwind
module.exports = {
  anny: [51, 51, 102], // "#333366"
  dark: [19, 19, 51], // "#131333"
  neutral: [255, 255, 255], // "#ffffff"
  "neutral-muted": [243, 243, 243], // "#f3f3f3"
  primary: [43, 106, 248], // "#2b6af8"
  "primary-muted": [192, 208, 244], // "#c0d0f4"
  secondary: [255, 152, 20], // "#ff9814"
  "secondary-muted": [255, 196, 120], // "#ffc478"
};
```

> _NOTE_ that the colors are exported as RGB tuples rather than hex colors or a
> string! This is done to make the added colors work with Tailwind's **opacity**
> modifier. Inside `index.js`, we construct the colors as **CSS Color Module 4**
> color definitions, e.g., `rgb(51 51 51 / --tw-text-opacity)` such that when we
> use `.text-anny-50`, this is resolved correctly to the "anny" color with 50%
> opacity. This is also the reason why theming in the CMS **needs to follow this
> principle of setting colors as space-separated RGB tuples**.

Then, inside your code, you can use the usual Tailwind color classes, e.g.
`bg-dark`, `text-primary` with the modifiers for the theme model.

## Fonts

The `base.js` file adds utility classes for applying the anny Headline font,
namely Gilroy Sans, to any object using the provided utilities, i.e.,
`.font-gilroy, .font-gilroy-light, .font-gilroy-semibold, .font-gilroy-bold`, as
well as base styles for `h1, h2, h3`.

## Component Layer

On the Compnent layer, this package defines a class `.full-page`, which is
equivalent to

```css
.full-page {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
```

## Fades

`fade` utilities are an easy way to mask an object using CSS's `mask-image` with
`linear-gradient`. The following keys provide the mask starting point

```js
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
  90: "90%",
};
```

## Transforms

> _NOTE_ This is obsolete with Tailwind's JIT feature for arbitrary values as it
> can be done more easily with e.g. `translate-x-[1.5]`. It remains helpful if
> you want the explicit class names and to work with autocompletion

`transform.js` provides utilities for translation on the interval [-1,1] in
0.1th steps, as well as sale utilities for scaling in [0,2] in 0.1th steps. Use
them for example like this:

```html
<div class="transform translate-x-15/10 scale-8/10"></div>
```

which moves the 1.5x its width to the right and scales it down by a factor of
0.8.

> NOTE: this is done by simply extending the value range in the
> tailwind.config.js file, thus autocompletion can work with that!
