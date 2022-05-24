module.exports = (cfg) => {
  cfg.addPassthroughCopy("images");
};

const Image = require("@11ty/eleventy-img");

(async () => {
  let img = "/images/ss.webp";
  let stats = await Image(img, {
    widths: [300]
  });

  console.log( stats );
})();