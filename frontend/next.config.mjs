/** @type {import('next').NextConfig} */
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.forEach((rule) => {
        if (rule.test && rule.test.toString().includes('.css')) {
          rule.use.push({
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          });
        }
      });
    }
    config.plugins.push(new MiniCssExtractPlugin());

    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192, // Limiting size of font file (in bytes) to be inlined as data URL
            fallback: 'file-loader', // Fallback to file-loader if font file exceeds limit
            publicPath: '/_next/', // Path prefix where assets will be served from
            outputPath: path.join(config.output.path, 'static/fonts/'), // Directory within the output path where the file will be emitted
            name: '[name].[hash].[ext]', // File name pattern for emitted files
            esModule: false, // Important for file-loader to work correctly
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
