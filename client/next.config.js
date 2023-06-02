/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["res.cloudinary.com", "robohash.org"],
    loader: "custom",
    loaderFile: "./lib/imageLoader.js",
  },
  env: {
    STRIPE_PUBLIC_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
    MAP_BOX_KEY: process.env.NEXT_PUBLIC_MAP_BOX_KEY,
  },
};

module.exports = nextConfig
