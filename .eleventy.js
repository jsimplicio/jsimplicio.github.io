const Image = require("@11ty/eleventy-img");

(async () => {
  await Image("./images/d-1.jpeg", {
    formats: ["webp"],
  });

  await Image("./images/d-2.jpeg", {
    formats: ["webp"],
  });

  await Image("./images/ss-1.jpeg", {
    formats: ["webp"]
  });

  await Image("./images/ss-2.jpeg", {
    formats: ["webp"]
  });
})();

module.exports = (cfg) => {
  cfg.addPassthroughCopy("img");
};