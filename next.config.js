const path = require("path");
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
    };
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      loader: "file-loader",
      options: {
        outputPath: "../public/",
        publicPath: "/",
      },
    });

    return config;
  },
};

module.exports = nextConfig;
