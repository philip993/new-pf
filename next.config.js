const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  webpack(config, options) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve("./components"),
      "@public": path.resolve("./public"),
      "@redux": path.resolve("./redux"),
      "@utils": path.resolve("./utils"),
    };

    return config;
  },
};

module.exports = withPlugins([withCSS], nextConfig);
