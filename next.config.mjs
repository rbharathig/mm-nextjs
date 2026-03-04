/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/store-new',
  assetPrefix: '/store-new',
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
