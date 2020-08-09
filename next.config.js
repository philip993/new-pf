const path = require("path");
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  webpack(config, options) {
    config.resolve.alias = {
      ...config.resolve.alias,

      "@public": path.resolve("./public"),
    };

    return config;
  },
};

module.exports = nextConfig;
