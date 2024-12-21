/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fixes wallet connect dependency issue
  webpack: (config, { isServer, dev }) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");

    if (dev && !isServer) {
      // Customize the webpack config for HMR in development mode
      config.watchOptions = {
        poll: true, // Enable polling
        aggregateTimeout: 300, // Timeout for aggregating changes
        ignored: /node_modules/, // Ignore changes in node_modules
      };
    }

    return config;
  },
};

export default nextConfig;
