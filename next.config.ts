import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets a build run beside a dev server without sharing the .next folder.
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  // Old addresses that now live elsewhere. Done here, before any page renders.
  async redirects() {
    return [
      { source: "/countries", destination: "/directory/countries", permanent: true },
      { source: "/programs", destination: "/directory/countries", permanent: true },
      { source: "/toolkit", destination: "/documents", permanent: true },
      { source: "/interviews", destination: "/roadmap#phase-10", permanent: true }
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" }
        ]
      }
    ];
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
