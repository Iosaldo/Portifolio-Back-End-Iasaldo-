import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Define explicit root to silence multi-lockfile warning on Windows
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  // NEXT_PUBLIC_API_URL removed - using Next.js API Routes instead
  // API routes are accessed via relative paths: /api/feedback
};

export default nextConfig;
