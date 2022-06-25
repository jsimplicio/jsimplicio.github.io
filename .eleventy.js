const Image = require("@11ty/eleventy-img");

(async () => {
  await Image("./images/d-1.jpeg", {
    formats: ["avif"],
  });

  await Image("./images/d-2.jpeg", {
    formats: ["avif"],
  });

  await Image("./images/ss-1.jpeg", {
    formats: ["avif"]
  });

  await Image("./images/ss-2.jpeg", {
    formats: ["avif"]
  });
})();

module.exports = (cfg) => {
  cfg.addPassthroughCopy("img");
};