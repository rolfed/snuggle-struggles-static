import { defineConfig } from '@rsbuild/core';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
    html: {
        template: './src/index.html'
    },
    source: {
        assetsInclude: [/\.ttf$/, /\.woff2?$/, /\.png$/, /\.jpg$/, /\.jpeg$/], // include PNG here
    },
    output: {
        assetPrefix: isProd ? '/snuggle-struggles-static' : '/',
        filename: {
            asset: 'static/assets/[name].[hash][ext]'
        }
    }
});
