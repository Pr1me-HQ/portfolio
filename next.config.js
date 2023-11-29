const withPWA = require("next-pwa");

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: !isProd,
  },
};

module.exports = withPWA({
  webpack: (config) => {
    // Continue with other webpack configurations
    config.module.rules.push({
      test: /\.(mp3|wav)$/i,
      use: {
        loader: "url-loader",
      },
    });

    return config;
  },
  ...nextConfig,
});
