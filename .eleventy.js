const Image = require("@11ty/eleventy-img");

(async () => {
  await Image("./img/d-1.jpeg", {
    formats: ["webp"],
  });

  await Image("./img/d-2.jpeg", {
    formats: ["webp"],
  });

  await Image("./img/ss-1.jpeg", {
    formats: ["webp"]
  });

  await Image("./img/ss-2.jpeg", {
    formats: ["webp"]
  });
})();

module.exports = (cfg) => {
  cfg.addPassthroughCopy("img");
};