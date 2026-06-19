/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
