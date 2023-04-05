/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["shiki", "vscode-oniguruma"],
  },
};

module.exports = nextConfig;
