const withPlugins = require("next-compose-plugins");
const CSS = require("@zeit/next-css");
const optimizedImages = require("next-optimized-images");
const progressBar = require("next-progressbar");

module.exports = withPlugins([
  [optimizedImages, {}],
  [progressBar, {}],
  [CSS, { url: false }]
]);
