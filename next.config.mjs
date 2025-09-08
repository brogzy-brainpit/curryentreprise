/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.prod.website-files.com', // ✅ allow your image domain
      'bymemet.vercel.app',
    ],
  },
}

export default nextConfig;
