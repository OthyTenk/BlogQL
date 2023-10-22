/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost'],
    },
    experimental: {
        optimizeFonts: true,
        appDir: true,
    },
    env: {
        GRAPHQL_API: process.env.GRAPHQL_API,
    },
}

module.exports = nextConfig
