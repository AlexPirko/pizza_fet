/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*.googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'pizza-fet.s3.eu-north-1.amazonaws.com',
            },
        ],
    },
};

module.exports = nextConfig;
