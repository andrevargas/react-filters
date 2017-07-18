const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve('build'),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 3000,
        contentBase: './public',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};

module.exports = config;
