import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (no Node server) — emits to `out/`.
  output: "export",
  // GitHub Pages can't run next/image optimization; serve images as-is.
  images: { unoptimized: true },
  // Cleaner static URLs (folder/index.html) on Pages.
  trailingSlash: true,
};

export default nextConfig;
