const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');

const dist = path.resolve(__dirname, 'dist');

module.exports = {
    // experiments: {
    //     asyncWebAssembly: true,
    // },
    mode: 'production',
    entry: {
        index: './www/index.js',
    },
    output: {
        path: dist,
        filename: '[name].js',
    },
    devServer: {
        contentBase: dist,
        compress: true,
        port: 8080,
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: path.resolve(__dirname, 'www') }],
        }),
        new WasmPackPlugin({
            crateDirectory: __dirname,
            extraArgs: "--target web",
        }),
    ],
};
