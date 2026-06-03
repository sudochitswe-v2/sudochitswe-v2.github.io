import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Enable static exports for GitHub Pages
  distDir: 'out', // Specify the output directory
  trailingSlash: true, // Add trailing slashes to URLs for GitHub Pages compatibility
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  // Important: Set the basePath to your GitHub Pages URL path
  // Replace with your actual repository name (update this to match your repo name)
  basePath: '',
  assetPrefix: '',
  typescript: {
    ignoreBuildErrors: false, // Change this back to false to catch actual TypeScript errors
  },
  eslint: {
    ignoreDuringBuilds: false, // Change this back to false to catch actual ESLint errors
  },
};  

export default nextConfig;
