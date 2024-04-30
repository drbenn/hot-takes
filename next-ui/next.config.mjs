/** @type {import('next').NextConfig} */
const nextConfig = {
    // allow images from these outside urls
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "utfs.io"
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com"
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com"
            },
        ],
    },
};

export default nextConfig;
