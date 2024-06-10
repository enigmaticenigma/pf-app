/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "wp.navigraph.com",
            }
        ]
    }
};

export default nextConfig;
