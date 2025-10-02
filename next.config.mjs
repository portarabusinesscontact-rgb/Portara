/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Configure remote images here if you load images from the web.
  images: {
    remotePatterns: [
      // Example:
      // { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },

  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
};

export default nextConfig;
