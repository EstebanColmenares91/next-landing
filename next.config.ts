import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: 'export', // This will generate static HTML files
    distDir: 'build', // This will change the build directory to build
};

export default nextConfig;
