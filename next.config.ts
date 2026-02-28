import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",

    "http://192.168.56.1:3000",
    "http://192.168.56.1",
    "https://192.168.56.1:3000",
    "https://192.168.56.1",
  ],
};

export default nextConfig;