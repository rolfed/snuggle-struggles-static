export default {
    source: {
        entry: {
            index: './src/index.js'
        }
    },
    html: {
        template: './src/index.html'
    },
    plugins: {
        '@tailwindcss/postcss': {} 
    }
}
