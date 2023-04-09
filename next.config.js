/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["shiki", "vscode-oniguruma"],
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
