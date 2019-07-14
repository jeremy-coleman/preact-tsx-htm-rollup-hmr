let node_resolve = require('rollup-plugin-node-resolve');
let buble = require('rollup-plugin-buble');
let hotcss = require('rollup-plugin-hot-css');
let jscc = require('rollup-plugin-jscc');
let static_files = require('rollup-plugin-static-files');
let tsc = require('rollup-plugin-typescript')

module.exports = {
    input: './src/app/main.tsx',
    output: {
        dir: 'dist',
        format: 'esm',
        entryFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash][extname]'
    },
    plugins: [
        jscc({
            values: {
                _DEBUG: (process.env.NODE_ENV !== 'production')
            }
        }),
        tsc({
            //tsconfig uses preserve to avoid coupling to a specific h factory
            //jsx: "react" really just means don't preserve jsx and not react-native
            typescript: require('typescript'),
            jsx:"react",
            jsxFactory: "h",
        }),
        hotcss({
            hot: process.env.NODE_ENV !== 'production',
            filename: 'styles.css'
        }),
        // buble({
        //     jsx: 'h'
        // }),
        node_resolve(),
        process.env.NODE_ENV === 'production' && static_files({
            include: ['./public']
        })
    ]
}