const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverComponentsExternalPackages: ["shiki", "vscode-oniguruma"],
  },
};

module.exports = withContentlayer(nextConfig);
