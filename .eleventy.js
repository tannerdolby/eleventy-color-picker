const metagen = require("eleventy-plugin-metagen");

module.exports = (eleventyConfig) => {

    eleventyConfig.addPlugin(metagen);

    eleventyConfig.addShortcode("getYear", function() {
        const year = new Date().getFullYear();
        return `${year}`;
    });

    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("images");

    return {
        dir: {
            input: ".",
            output: "_site",
            includes: "_includes",
            layouts: "_includes/layouts",
        },
        templateFormats: ["md", "njk", "liquid"],
        passthroughFileCopy: true
    }
};