module.exports = function (eleventyConfig) {
  // Copy whole folders so new images and fonts don't need to be listed one by one.
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("fonts");

  // The README is for GitHub, not the website.
  eleventyConfig.ignores.add("README.md");
};
