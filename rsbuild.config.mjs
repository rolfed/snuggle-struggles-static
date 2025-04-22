import { defineConfig } from '@rsbuild/core';

export default defineConfig({
    html: {
        template: './src/index.html'
    },
    source: {
        assetsInclude: [/\.ttf$/, /\.woff2?$/, /\.png$/, /\.jpg$/, /\.jpeg$/], // include PNG here
    },
    output: {
        assetPrefix: '/',
        filename: {
            asset: 'static/assets/[name].[hash][ext]'
        }
    }
});
