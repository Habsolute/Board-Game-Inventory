const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        hostname: "cf.geekdo-images.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
