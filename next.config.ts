import type { NextConfig } from "next";
import path from "node:path";

// Note: `turbopack` config is currently not typed in NextConfig.
// @ts-expect-error - turbopack config
const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      canvas: "./shims/empty.ts",
      "pdfjs-dist/build/pdf": "pdfjs-dist/legacy/build/pdf",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      canvas: path.join(__dirname, "shims/empty.ts"),
      "pdfjs-dist/build/pdf": "pdfjs-dist/legacy/build/pdf",
    };
    config.resolve.fallback = {
      ...(config.resolve.fallback || {}),
      canvas: false,
    };
    return config;
  },
};

export default nextConfig;
