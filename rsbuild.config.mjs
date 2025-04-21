import { defineConfig } from '@rsbuild/core';

export default defineConfig({
    html: {
        template: './src/index.html'
    },
    source: {
        assetsInclude: [/\.ttf%/],
    },
    output: {
        assetPrefix: '/snuggle-struggles-static',
        assetsPrefix: './',
    }
});
