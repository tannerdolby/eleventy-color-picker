---
title: Color Picker
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

<ul class="colors">
  <div class="column">
    <label for="res1">RGB</label>
    <li id="res1"></li>
  </li>
  </div>
  <div class="column">
    <label for="res2">Hex</label>
    <li id="res2"></li>
  </div>
  <div class="column">
    <label for="res3">HSL</label>
    <li id="res3"></li>
  </div>
</ul>

Hex: [Hexadecimal color](https://en.wikipedia.org/wiki/Web_colors) codes are expressed as a six-digit combination of numbers and letters defined by it's mix of red, green and blue (RGB). Hexademical colors can be used like `#f06f06` using six-digits or in a more shorthand form using only three-digits `#f06`. A hex color code is shorthand for its equivalent `rgb()` definition. 

RGB: The [RGB cubic-coordinate system](https://en.wikipedia.org/wiki/RGB_color_model#Geometric_representation) can use either #-hexadecimal color codes or `rgb()`. This color value can be used for CSS properties: `background`, `background-color` and `color` The notation for specifying RGB colors is `rgb(240, 30, 200)`

HSL: The [HSL cylindrical-coordinate system](https://en.wikipedia.org/wiki/HSL_and_HSV) can only be used when specifiying values for the `color` property in CSS. The syntax for using HSL is `hsl(20%, 40%, 60%)`

<h3 id="general_knowledge">General knowledge</h3>

Read more about [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) values on MDN.