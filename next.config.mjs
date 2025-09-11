/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.prod.website-files.com', // ✅ allow your image domain
      'bymemet.vercel.app',
      'static.wixstatic.com',
      'i.vimeocdn.com',
      'images.unsplash.com'
    ],
  },
}

export default nextConfig;
