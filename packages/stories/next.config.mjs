/** @type {import('next').NextConfig} */
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["@"] = join(__dirname, "../client");
    return config;
  },
};

export default nextConfig;
