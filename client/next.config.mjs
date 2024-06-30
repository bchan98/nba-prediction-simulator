/** @type {import('next').NextConfig} */
// next.config.js or next.config.mjs
const nextConfig = {
    webpack(config, { isServer }) {
        if (!isServer) {
            config.devServer = {
                ...config.devServer,
                hot: true, // Enable webpack's Hot Module Replacement (HMR) feature
            };
        }
        return config;
    },
};

// or
export default nextConfig; // For ESM syntax (next.config.mjs)
