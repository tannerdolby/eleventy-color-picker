const colorPicker = document.querySelector("#colorPicker");
const body = document.querySelector("body");
const res1 = document.querySelector("#res1");
const res2 = document.querySelector("#res2");
const res3 = document.querySelector("#res3");
const palette = document.querySelector(".canvas");

function rgbToHSL(r, g, b) {

    // make r,g,b fractions of 1 (1-255 is rgb intensity), use compound assignment for speed
    r /= 255;
    g /= 255;
    b /= 255;

    // Find min/max channel values
    let cmin = Math.min(r, g, b);
    let cmax = Math.max(r, g, b);
    let delta = cmax - cmin;

    // initialize hsl
    h = 0; // hue
    s = 0; // saturation
    l = 0; // lightness

    // calculate the hue, which is determined by the greatest channel value in cmax
    // if there is no difference between r,g,b in cmax then the hue is 0

    if (delta == 0) {
        h = 0;
    // red is greatest channel value
    } else if (cmax == r) {
        h = ((g - b) / delta) % 6;
    // green is greatest channel value
    } else if (cmax == g) {
        h = (b - r) / delta + 2;
    // blue is greatest channel value
    } else {
        h = (r - g) / delta + 4;
    }

    // multiply the hue result by 60 to get value in degrees
    h = Math.round(h * 60);

    // if hues are negative make em positive
    if (h < 0) {
        h += 360;
    }

    // calculate the lightness
    l = (cmax + cmin) / 2;

    // calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    s = parseInt(s * 100).toFixed(0);
    l = parseInt(l * 100).toFixed(0);

    return `hsl(${h}, ${s}%, ${l}%)`;
};

function hexToRGB(hex) {
    let r = 0,
        g = 0,
        b = 0;
    
    // if hex code is shorthand (3-digits) #f06 
    if (hex.length == 4) {
        r = "0x" + hex[1] + hex[1];
        g = "0x" + hex[2] + hex[2];
        b = "0x" + hex[3] + hex[3];
    // if hex code is normal six-digit notation #ffddff
    } else if (hex.length == 7) {
        r = "0x" + hex[1] + hex[2];
        g = "0x" + hex[3] + hex[4];
        b = "0x" + hex[5] + hex[6];
    }
    // cast hex strings back to numbers
    return `rgb(${+r}, ${+g}, ${+b})`;
};

function extract(rgb) {
    const regex = new RegExp(/[\d]+/, "gm"); // extract r,g,b values
    let s = rgb.match(regex);
    let r = s[0];
    let g = s[1];
    let b = s[2];
    
    return rgbToHSL(r, g, b);
};

res1.textContent = colorPicker.value;
res2.textContent = hexToRGB(colorPicker.value);
res3.textContent = extract(hexToRGB(colorPicker.value));

function setColor() {
    palette.style.backgroundColor = colorPicker.value;
    res1.textContent = palette.style.backgroundColor;
    res2.textContent = colorPicker.value;

    res3.textContent = extract(palette.style.backgroundColor);
};

colorPicker.addEventListener("input", setColor);

// only way to hide outline for click with mouse
// still want :focus state to have outline for a11y reasons
const main = document.querySelector('main');
main.addEventListener("click", function() {
    main.style.outline = "none";
});