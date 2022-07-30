const Image = require("@11ty/eleventy-img");

(async () => {
  await Image("./img/dscout-1.png", {
    formats: ["webp"],
  });

  await Image("./img/dscout-2.png", {
    formats: ["webp"],
    height: 1754
  });

  await Image("./img/sprout-1.png", {
    formats: ["webp"]
  });

  await Image("./img/sprout-2.png", {
    formats: ["webp"]
  });
})();

module.exports = (cfg) => {
  cfg.addPassthroughCopy("img");
};