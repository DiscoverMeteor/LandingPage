module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "md",
    "pdf" // css is not yet a recognized template extension in Eleventy
  ]);
};