# @anny.co/tailwindcss-presets

Some quick and handy presets for TailwindCSS (> v.2.0.0) that converge the anny Corporate Identity with Tailwind's color scheme, supports dynamic theming
using CSS variables and more.

## Colors

Among the largest change are the custom color utilities for supporting dynamic theming using a given color model: The values of the colors are provided dynamically,
and the generated utility classes respect that:

```javascript
const themeModel = {
  "anny": "#333366",
  "dark": "#131333",
  "neutral": "#ffffff",
  "neutral-muted": "#f3f3f3",
  "primary": "#2b6af8",
  "primary-muted": "#c0d0f4",
  "secondary": "#ff9814",
  "secondary-muted": "#ffc478"
};
```

Then, inside your code, you can use the usual Tailwind color classes, e.g. `bg-dark`, `text-primary` with the modifiers for the theme model.

## Fonts

The `base.js` file adds utility classes for applying the anny Headline font, namely Gilroy Sans, to any object using the provided utilities, i.e.

```
.font-gilroy, .font-gilroy-light, .font-gilroy-semibold, .font-gilroy-bold
```

as well as base styles for `h1, h2, h3`. 

## Fades

`fade` utilities are an easy way to mask an object using CSS's `mask-image` with `linear-gradient`. The following keys provide the mask starting point

```javascript
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
```

## Transforms

`transform.js` provides utilities for translation on the interval [-1,1] in 0.1th steps, as well as sale utilities for scaling in [0,2] in 0.1th steps. Use them for example like this:

```html
<div class="transform translate-x-15/10 scale-8/10"></div>
```

which moves the 1.5x its width to the right and scales it down by a factor of 0.8.

> NOTE: this is done by simply extending the value range in the tailwind.config.js file, thus autocompletion can work with that!