import { defineConfig } from '@rsbuild/core';

export default defineConfig({
    html: {
        template: './src/index.html'
    },
    source: {
        assetsInclude: [/\.ttf$/, /\.woff2?$/, /\.png$/], // include PNG here
    },
    output: {
        assetPrefix: './',
    }
});
