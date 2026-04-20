/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'framerusercontent.com' },
      { protocol: 'https', hostname: 'vimeo.com' },
      { protocol: 'https', hostname: 'player.vimeo.com' },
      { protocol: 'https', hostname: 'screenox.in' },
      { protocol: 'https', hostname: 'www.fortishealthcare.com' },
      { protocol: 'https', hostname: 'images.mamaearth.in' },
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ],
    unoptimized: true
  },
  reactStrictMode: true,
  trailingSlash: true
};

export default nextConfig;
