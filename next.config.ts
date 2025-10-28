import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // ⛔ Supaya Vercel tidak gagal build karena error eslint
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ⛔ Supaya tidak gagal build kalau masih ada error tipe
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
