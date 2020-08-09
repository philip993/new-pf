const path = require("path");
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  webpack(config, options) {
    const { isServer } = options;
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve("./components"),
      "@public": path.resolve("./public"),
      "@redux": path.resolve("./redux"),
    };

    config.module.rules.push({
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      loader: require.resolve("url-loader"),
    });

    return config;
  },
};

module.exports = withPlugins(withImages, nextConfig);
