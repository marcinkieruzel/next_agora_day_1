const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');

module.exports = {
    target: 'node', // [A]

    entry: './index.js', // [B]

    output: { // [C]
        path: path.join(__dirname, './public'), 
        filename: 'server.js',
    },

    externals: [webpackNodeExternals()], // [D

        module: {
        rules: [
            { // [B]
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: ['.js'], // [C]
    },
}