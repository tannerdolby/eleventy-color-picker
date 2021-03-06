---
title: 11ty Color Picker
date: 2021-01-17
layout: "base.njk"
tags:
  - color
  - theme
  - background
---

<div class="color-container">
  <div>
    <label class="color-label" for="colorPicker">Choose a color: </label>
    <input id="colorPicker" type="color" value="#32a852" name="colorPicker">
  </div>
  <div class="canvas"></div>
</div>

<div class="colors">
  <div class="column">
    <label for="res1">RGB</label>
    <p id="res1"></p>
  </div>
  <div class="column">
    <label for="res2">Hex</label>
    <p id="res2"></p>
  </div>
  <div class="column">
    <label for="res3">HSL</label>
    <p id="res3"></p>
  </div>
</div>

RGB: The [RGB cubic-coordinate system](https://en.wikipedia.org/wiki/RGB_color_model#Geometric_representation) can use either hexadecimal color codes or `rgb(red, green, blue)`. The values for each red, green, blue channel can range from 0-255. The notation for specifying RGB colors is `rgb(240, 30, 200)`.

Hex: [Hexadecimal color](https://en.wikipedia.org/wiki/Web_colors) codes are expressed as a six-digit combination of numbers and letters defined by it's mix of red, green and blue (RGB). Hexademical colors can be used like `#ff0066` using six-digits or in a more shorthand form using only three-digits `#f06`. The three digit hex colors are expanded to six-digits by doubling each digit.

HSL: The [HSL cylindrical-coordinate system](https://en.wikipedia.org/wiki/HSL_and_HSV) stands for hue, saturation and lightness. A hue value can range from 0-360 and saturation/lightness can range from 0% to 100%. The syntax for using HSL is `hsl(hue, saturation, lightness)` so a valid value would look like `hsl(300, 100%, 25%)`.

<h2 id="general_knowledge">General knowledge</h2>

Read more about [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) values on MDN.