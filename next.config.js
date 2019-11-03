const withCSS = require("@zeit/next-css");
const withOptimizedImages = require("next-optimized-images");
const withPurgeCss = require("next-purgecss");
const withProgressBar = require("next-progressbar");

const nextConfig = {
  cssLoaderOptions: {
    url: false
  }
};

module.exports = withProgressBar(
  withOptimizedImages(withCSS(withPurgeCss(nextConfig)))
);
