/** @type {import('next').NextConfig} */
const nextConfig = {};

// next.config.mjs
export default {
  devServer: {
    allowedOrigins: ["http://172.20.10.2:3000"], // Your laptop's IP address
  },
};
