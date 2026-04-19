/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'framerusercontent.com' },
      { protocol: 'https', hostname: 'vimeo.com' },
      { protocol: 'https', hostname: 'player.vimeo.com' }
    ],
    unoptimized: true
  },
  reactStrictMode: true,
  trailingSlash: true
};

export default nextConfig;
