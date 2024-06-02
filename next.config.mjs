/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_ALGOLIA_APPLICATION_ID:
      process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID,
    NEXT_PUBLIC_ALGOLIA_WRITE_API_KEY:
      process.env.NEXT_PUBLIC_ALGOLIA_WRITE_API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
