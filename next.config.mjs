/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ALGOLIA_APPLICATION_ID: process.env.ALGOLIA_APPLICATION_ID,
    ALGOLIA_WRITE_API_KEY: process.env.ALGOLIA_WRITE_API_KEY,
  },
};

export default nextConfig;
