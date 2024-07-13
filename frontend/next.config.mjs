/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Ensure font files are handled correctly
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/fonts/[name].[hash][ext]',
      },
    });

    return config;
  },
};

export default nextConfig;

